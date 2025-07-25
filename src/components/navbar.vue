<script setup>
import ham from "./icons/hamburger.vue";
import logo from "./icons/logo.vue";
</script>

<template>
    <div class="navbar">
        <router-link class="logo-container" aria-label="Home" to="/">
            <logo class="logo" />
            <span>My Website</span>
        </router-link>

        <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen.toString()">
            <ham />
        </button>
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
</style>k;