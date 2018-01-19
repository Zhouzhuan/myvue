<template>
  <div>
      <!-- 表单 -->
    <div class="info">
      <div class="avatar">
        <img src="../assets/avatar.jpg" alt="">
      </div>
       <!-- ref表示组件名称 用于直接操作dom -->
      <el-form ref="loginForm" :rules="rules" :model="form" class="container">
      <div class="userInfo">
        <el-form-item prop='username'>
        <el-input v-model="form.username" prefix-icon="myicon myicon-user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop='password'>
        <el-input v-model="form.password" type="password" prefix-icon="myicon myicon-key" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
      </div>
    </el-form>
    </div>
   <!--  <ul>
     <li>
       label 点击用户名 能获取相对应文本框的焦点
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
   </ul> -->
  </div>
</template>

<script>
import {login} from '../api/api.js'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login: function () {
      // 在调用登录接口之前,需要进行表单验证
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          // 表单验证通过
          // 调用登录接口
          let params = {
            username: this.form.username,
            password: this.form.password
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
              // 登录失败，提示一下用户
              this.$message({
                message: res.meta.msg,
                type: 'error'
              })
            }
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: #2f4050;
  }
  .container {
    box-sizing: border-box;
    margin: 180px auto 0;
    width: 500px;
    height: 340px;
    background-color: #fff;
    position: relative;
  }
  .avatar {
    position: absolute;
    left: 50%;
    top: 110px;
    width: 120px;
    height: 120px;
    border: 10px solid #FFF;
    margin-left: -70px;
    border-radius: 50%;
    box-shadow: 0 1px 5px #CCC;
    background-color: pink;
    overflow: hidden;
    z-index: 9999;
  }
  .userInfo {
    position: absolute;
    text-align: center;
    width: 400px;
    margin: 100px 50px;
  }
  .btn {
    width: 400px;
  }
</style>
