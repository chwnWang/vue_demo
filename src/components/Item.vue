<template>
  <li :style="{background: bgColor}" @mouseenter="handleBg(true)" @mouseleave="handleBg(false)">
    <label>
      <input type="checkbox" v-model="isCheck"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click='deleteItem()'>删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todo: Object,
    deleteTodo: Function,
    index: Number,
    updateTodo: Function
  },
  data () {
    return {
      bgColor: '#fff',
      isShow: false
    }
  },
  methods: {
    handleBg (isEnter) {
      if (isEnter) {
        this.bgColor = '#cccccc'
        this.isShow = true
      } else {
        this.bgColor = '#fff'
        this.isShow = false
      }
    },
    deleteItem (index) {
      if (confirm('您确定删除此数据吗?')) {
        this.deleteTodo(this.index)
      }
    }
  },
  computed: {
    isCheck: {
      get () {
        return this.todo.complete
      },
      set (value) {
        return this.updateTodo(this.todo, value)
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
