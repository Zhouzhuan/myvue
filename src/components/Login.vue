<template>
  <div>
      <!-- 表单 -->
    <h1>登录</h1>
    <ul>
      <li>
        <!-- label 点击用户名 能获取相对应文本框的焦点 -->
        <label for="uname">用户名: </label>
        <input type="text" id="uname" v-model='username'>
      </li>
      <li>
        <label for="pwd">密码: </label>
        <input type="text" id="pwd" v-model='password'>
      </li>
      <li>
        <input type="button" value="提交" @click='login'>
      </li>
    </ul>
  </div>
</template>

<script>
import {login} from '../api/api.js'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      // 调用登录接口
      let params = {
        username: this.username,
        password: this.password
      }
      // 调用接口,提交用户登录信息
      login(params).then(res => {
        console.log(res)
        if (res.meta.status === 200) {
          // 存储token值
          localStorage.setItem('mytoken', res.data.token)
          // 若登录成功则跳转到首页
          this.$router.push({name: 'home'})
        } else {
          console.log('用户名或密码错误')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
