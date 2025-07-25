<script setup>
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const handleSubmit = () => {
  alert('Successfully submitted!');
};
</script>

<template>
  <div class="background">
    <div class="container-box">
      <div class="title">用户登录</div>
      <form @submit.prevent="handleSubmit">
        <label>
          <div for="username" class="name">用户名</div>
          <input type="text" id="username" placeholder="请输入用户名" v-model="username" required />
        </label>
        <label>
          <div for="password" class="name">密码</div>
          <input type="password" id="password" placeholder="请输入密码" v-model="password" required />
        </label>
        <button class="login-button" type="submit">登录</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: rgb(229, 232, 235);
}

.container-box {
  width: 340px;
  background-color: white;
  display: block;
  border-radius: 10px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
}

.title {
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  padding: 0 0 20px 0;
}

label input {
  font-size: 14px;
  outline: none;
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #d2cfc9;
  width: 100%;
  border-radius: 5px;
  transition: 0.3s ease;
}

label input:focus {
  border-color: #409eff;
}

.name {
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 5px;
}

label {
  display: block;
  margin-bottom: 13px;
}

.login-button {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background-color: #409eff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.login-button:hover {
  background-color: #66b1ff;
}

.login-button:active {
  background-color: #3385ff;
}
</style>