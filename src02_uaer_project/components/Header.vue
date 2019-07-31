<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      searchName: ''
    }
  },
  methods: {
    searchUser () {
      /* 获取输入框的值 */
      const searchName = this.searchName.trim()
      /* 分发请求 */
      if (searchName) {
        this.$bus.$emit('searchUser', searchName)
      } else {
        alert('请输入再点击搜索!')
      }
    }
  }
}
</script>
<style scoped>
</style>
