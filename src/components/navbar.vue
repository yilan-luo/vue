<script setup>
import ham from "./icons/hamburger.vue";
import logo from "./icons/logo.vue";

const navLinks = [
  { name: "首页", path: "/" },
  { name: "关于我们", path: "/about" },
  { name: "服务", path: "/services" },
  { name: "ai作品", path: "/gemini" },
  { name: "联系我们", path: "/contact" },
];
</script>

<template>
  <div class="navbar">
    <router-link class="logo-container" aria-label="Home" to="/">
      <logo class="logo" />
      <span>My Website</span>
    </router-link>
    <div class="nav-links">
      <span v-for="link in navLinks" :key="link.name">
        <router-link :to="link.path" :class="{ active: $route.path === link.path }">{{ link.name
        }}</router-link>
      </span>
      <!-- <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen.toString()">
            <ham />
        </button> -->
    </div>
  </div>
</template>

<style scoped>
.navbar {
  padding: 10px 30px;
  position: fixed;
  left: 0;
  top: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  border: 1px solid black;
}

.logo {
  margin: 0 8px 0 0;
}

span {
  color: black;
  font-size: 23px;
  font-weight: 500;
}

.logo-container {
  align-items: center;
  display: flex;
}
</style>
