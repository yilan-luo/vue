<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">用户登录</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="username" placeholder="请输入用户名" required />
        </div>
        <div class="input-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="password" placeholder="请输入密码" required />
        </div>
        <button type="submit" class="login-button">登录</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref('');
const password = ref('');

const handleLogin = () => {
  // 在实际应用中，这里会处理登录逻辑，例如调用 API
  //alert(`登录中...\n用户名: ${username.value}\n密码: ${password.value}`);
  alert('登录成功！');
  // 登录成功后的跳转等逻辑
};
</script>

<style scoped>
/* 登录页面的整体容器，居中显示内容并设置背景色和字体 */
.login-container {
  display: flex;
  /* 使用flex布局 */
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  height: 100vh;
  /* 高度占满整个视口 */
  background-color: #f0f2f5;
  /* 浅灰色背景 */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  /* 字体族 */
}

/* 登录框样式，白色背景、圆角和阴影 */
.login-box {
  width: 340px;
  /* 固定宽度 */
  padding: 40px;
  /* 内边距 */
  background-color: #ffffff;
  /* 白色背景 */
  border-radius: 8px;
  /* 圆角 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  /* 阴影效果 */
  box-sizing: border-box;
  /* 包含内边距和边框在内的宽度计算 */
}

/* 登录标题样式，居中显示并加粗 */
.login-title {
  text-align: center;
  /* 居中 */
  margin-bottom: 24px;
  /* 下边距 */
  color: #333;
  /* 深色字体 */
  font-size: 24px;
  /* 字体大小 */
  font-weight: 500;
  /* 字体加粗 */
}

/* 输入框分组的外边距 */
.input-group {
  margin-bottom: 20px;
  /* 下边距 */
}

/* 输入框标签样式，左侧内边距和下边距 */
.input-group label {
  display: flex;
  /* 使用flex布局 */
  padding-left: 10px;
  /* 左侧内边距 */
  margin-bottom: 8px;
  /* 下边距 */
  color: #555;
  /* 字体颜色 */
  font-size: 14px;
  /* 字体大小 */
}

/* 输入框样式，边框、圆角和过渡效果 */
.input-group input {
  width: 100%;
  /* 宽度100% */
  padding: 10px;
  /* 内边距 */
  border: 1px solid #dcdfe6;
  /* 边框颜色 */
  border-radius: 4px;
  /* 圆角 */
  font-size: 14px;
  /* 字体大小 */
  box-sizing: border-box;
  /* 包含内边距和边框 */
  transition: border-color 0.2s;
  /* 边框颜色过渡 */
}

/* 输入框聚焦时的边框颜色 */
.input-group input:focus {
  outline: none;
  /* 去除默认轮廓 */
  border-color: #409eff;
  /* 聚焦时边框颜色 */
}

/* 登录按钮样式，背景色、圆角和过渡效果 */
.login-button {
  width: 100%;
  /* 宽度100% */
  padding: 12px;
  /* 内边距 */
  background-color: #409eff;
  /* 按钮背景色 */
  color: #ffffff;
  /* 字体颜色 */
  border: none;
  /* 无边框 */
  border-radius: 4px;
  /* 圆角 */
  font-size: 16px;
  /* 字体大小 */
  cursor: pointer;
  /* 鼠标指针样式 */
  transition: background-color 0.2s;
  /* 背景色过渡 */
}

/* 登录按钮悬停时的背景色 */
.login-button:hover {
  background-color: #66b1ff;
  /* 悬停时背景色 */
}
</style>
