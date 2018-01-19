<template>
  <div class="hello">
    <h1>主页</h1>
    <h2>哈哈</h2>
  </div>
</template>
<script>
import {testData} from '../api/api.js'
export default {
  data () {
    return { }
  },
  mounted () {
    testData({
      query: '',
      pagenum: 1,
      pagesize: 10
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
