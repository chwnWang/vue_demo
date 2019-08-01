<template>
  <ul>
    <li>ID:{{$route.params.id}}</li>
    <li>TITLE:{{messagedatils.title}}</li>
    <li>CONTENT:{{messagedatils.content}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
const messagedatils = [
  { id: 1, title: 'message001', content: 'message001 message' },
  { id: 2, title: 'message002', content: 'message002 message' },
  { id: 3, title: 'message003', content: 'message003 message' }
]
export default {
  data () {
    return {
      messagedatils: {}
    }
  },

  mounted () {
    setTimeout(() => {
      /* 首先获取id */
      const id = this.$route.params.id * 1
      const detail = messagedatils.find(datail => datail.id === id)
      this.messagedatils = detail
    }, 500)
  },
  watch: {
    $route (value) {
      setTimeout(() => {
        /* 首先获取id */
        const id = value.params.id * 1
        const detail = messagedatils.find(datail => datail.id === id)
        this.messagedatils = detail
      }, 500)
    }
  }
}
</script>

<style scoped>
</style>
