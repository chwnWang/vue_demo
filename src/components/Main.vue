<template>
  <div class="row">
    <h1 v-if="firstView">请输入关键进行搜索</h1>
    <h1 v-else-if="loadingView">请求中,请稍等.....</h1>
    <h1 v-else-if="errorMessage">{{errorMessage}}</h1>
    <div class="card" v-for="(user) in users" :key="user.username" v-else-if="users.length>0">
      <a href="user.url" target="_blank">
        <img src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.username}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      firstView: true,
      loadingView: false,
      errorMessage: '',
      users: []
    }
  },

  mounted () {
    /* 绑定事件监听 */
    this.$bus.$on('searchUser', async (searchName) => {
      /* 更新状态 */
      this.firstView = false
      this.loadingView = true
      /* 发ajax请求获取users */
      const url = `https://api.github.com/search/users?q=${searchName}`
      try {
        /* 发送请求 */
        const response = await this.$axios(url)
        const users = response.data.items.map((item) => ({
          username: item.login,
          url: item.html_url,
          avatar_url: item.avatar_url
        }))
        /* 更改状态 */
        this.loadingView = false
        this.users = users
      } catch (error) {
        this.loadingView = false
        this.errorMessage = error.message
      }
    })
  }
}
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
