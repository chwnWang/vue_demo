<template>
  <div>
    <ul>
      <li v-for="(message) in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}?id2=${message.id}`">{{message.title}}</router-link>
        --<button @click="pushShow(message.id)">push查看</button>
        --<button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <!-- <MessageDetail :id="3" /> -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data () {
          return {
              messages: []
          }
      },

      mounted () {
         setTimeout(() => {
           const messages = [
               {id: 1, title: 'message001'},
               {id: 2, title: 'message002'},
               {id: 3, title: 'message003'}
           ]
           this.messages = messages
         }, 500)
      },
      methods: {
        pushShow (id) {
          this.$router.push(`/home/message/detail/${id}`)
        },
        replaceShow (id) {
          this.$router.replace(`/home/message/detail/${id}`)
        }
      }
  }
</script>
<style scoped>
</style>
