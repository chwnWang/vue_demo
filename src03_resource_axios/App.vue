<template>
  <div>
    <h1 v-if="!repoName">loading....</h1>
    <h1 v-else>
      点击啊
      <a :href="repoUrl">{{repoName}}</a>
    </h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      repoName: '',
      repoUrl: ''
    }
  },
  mounted () {
    const url = 'https://api.github.com/search/repositories?q=j&sort=stars'
    // this.$http.get(url).then(response => {
    //   const result = response.data
    //   const {name, html_url} = result.items[0]
    //   // 更新数据
    //   this.repoName = name
    //   this.repoUrl = html_url
    // }).catch(error => {
    //   alert('请求出错了: ' + error.statusText)
    // })
    this.$axios.get(url).then(response => {
      const result = response.data
      const {name, html_url} = result.items[0]
      // 更新数据
      this.repoName = name
      this.repoUrl = html_url
    }).catch(error => {
      alert('请求出错了: ' + error.statusText)
    })
  }
}
</script>

<style>

</style>
