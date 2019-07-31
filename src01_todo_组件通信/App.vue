<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @addTodo='addTodo'></Header>
        <List :todos="todos"></List>
        <Footer>
           <input type="checkbox" v-model="checkAll" slot="left"/>
           <span slot="middle">
             <span>已完成{{completedCount}}</span> / 全部{{todos.length}}
           </span>
           <button class="btn btn-danger" v-if="completedCount>0" @click="deleteAll" slot="right">清除已完成任务</button>
        </Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import PubSub from 'pubsub-js'

export default {
  name: 'App',
  data () {
    return {
      todos: JSON.parse(localStorage.getItem('todo_key') || '[]')
    }
  },

  mounted () {
    this.$globalEventBus.$on('deleteTodo', this.deleteTodo)
    this.token = PubSub.subscribe('updateTodo', (msg, {todo, complete}) => {
      this.updateTodo(todo, complete)
    })
  },

  computed: {
    completedCount () {
      return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
    },

    checkAll: {
      get () {
        return this.todos.length === this.completedCount && this.completedCount > 0
      },

      set (value) {
        this.selectAll(value)
      }
    }
  },

  destroyed () {
    this.$globalEventBus.off('deleteTodo')
    PubSub.unsubscribe(this.$globalEventBustoken)
  },

  methods: {
    /* 添加数据 */
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    /* 删除按钮 */
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    /* 勾选框 */
    updateTodo (todo, complete) {
      todo.complete = complete
    },
    /* 更新所有的todo 全选/全不选的按钮 */
    updateAllTodo (isCheck) {
      this.todos.forEach(function (todo) {
        todo.complete = isCheck
      })
    },
    selectAll (isCheck) {
      this.todos.forEach(todo => (todo.complete = isCheck))
    },

    /* 清楚所有的任务 */
    deleteAll () {
      this.todos = this.todos.filter(todo => !todo.complete)
    }
  },
  /* 深度监视 */
  watch: {
    todos: {
      deep: true, /* 深度监视 只要数据变化就调用回调函数 */
      handler: function (value) {
        localStorage.setItem('todo_key', JSON.stringify(value))
      }
    }
  },
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
