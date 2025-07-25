<template>
    <!-- 主导航栏容器，使用navbar类定义样式 -->
    <nav class="navbar">
        <!-- 导航栏内容容器，限制最大宽度并居中 -->
        <div class="navbar-container">
            <!-- Logo链接，点击返回首页 -->
            <a href="/" class="navbar-logo">
                <!-- Logo SVG图标 -->
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="logo-icon">
                    <!-- SVG路径：创建三角形形状 -->
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <!-- SVG路径：顶部线条 -->
                    <path d="M2 17l10 5 10-5"></path>
                    <!-- SVG路径：中间线条 -->
                    <path d="M2 12l10 5 10-5"></path>
                </svg>
                <!-- Logo文字内容 -->
                <span>MyLogo</span>
            </a>

            <!-- 移动端菜单切换按钮，点击时调用toggleMenu方法 -->
            <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen.toString()">
                <!-- 当菜单关闭时显示的汉堡菜单图标 -->
                <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <!-- 顶部横线 -->
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <!-- 中间横线 -->
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <!-- 底部横线 -->
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <!-- 当菜单打开时显示的关闭图标（X形） -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <!-- 从左上到右下的对角线 -->
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <!-- 从左下到右上的对角线 -->
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <!-- 菜单链接容器，根据isMenuOpen状态添加is-open类 -->
            <div class="menu-links" :class="{ 'is-open': isMenuOpen }">
                <!-- 链接列表 -->
                <ul>
                    <!-- 使用v-for指令遍历navLinks数组，为每个链接创建列表项 -->
                    <li v-for="link in navLinks" :key="link.name">
                        <!-- 链接元素，根据isActive方法结果添加active类 -->
                        <a :href="link.path" :class="{ 'active': isActive(link.path) }">{{ link.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
// 从 'vue' 中导入 ref，用于创建响应式数据
import { ref } from 'vue';
// 从 '@/router' 导入路由实例，用于路由操作
import router from '@/router';

// 定义一个响应式的导航链接数组
const navLinks = ref([
    { name: '首页', path: '/' }, // 定义首页链接
    { name: '关于我们', path: '/about' }, // 定义关于我们链接
    { name: '服务', path: '/services' }, // 定义服务链接
    { name: 'ai作品', path: '/gemini' }, // 定义ai作品链接
    { name: '联系我们', path: '/contact' }, // 定义联系我们链接
]);

// 创建一个响应式变量，用于跟踪移动端菜单的打开状态，默认为false（关闭）
const isMenuOpen = ref(false);

// 定义一个方法，用于切换菜单的打开/关闭状态
const toggleMenu = () => {
    // 将 isMenuOpen 的值取反
    isMenuOpen.value = !isMenuOpen.value;
};

// 创建一个响应式变量，用于存储当前页面的路径，默认为'/'（首页）
const currentPath = ref('/');

// 使用Vue Router的全局前置守卫，在每次路由切换前执行
router.beforeEach((to, from, next) => {
    // 'to'是目标路由对象，更新currentPath为目标路径
    currentPath.value = to.path;
    // 'next'函数必须被调用，以继续导航
    next();
});

// 定义一个方法，判断给定的路径是否为当前激活的路径
const isActive = (path) => {
    // 比较传入的path和当前的currentPath是否相等
    return currentPath.value === path;
};
</script>

<style scoped>
/* --- 全局CSS自定义属性（变量）定义 --- */
:root {
    /* 定义导航栏的高度为60像素 */
    --navbar-height: 60px;
    /* 定义主色调为Vue的标志性绿色 */
    --primary-color: #42b883;
    /* 定义基本文字颜色 */
    --text-color: #333;
    /* 定义背景颜色为白色 */
    --background-color: #ffffff;
    /* 定义导航栏的阴影效果 */
    --navbar-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* --- 导航栏基础样式 --- */
.navbar {
    padding: 10px;
    /* 设置导航栏背景色为白色 */
    background-color: #ffffff;
    /* 使用var()函数引用--navbar-height变量来设置高度 */
    height: var(--navbar-height);
    /* 设置导航栏宽度为100% */
    width: 100%;
    /* 使用var()函数引用--navbar-shadow变量来设置阴影 */
    box-shadow: var(--navbar-shadow);
    /* 设置导航栏为固定定位 */
    position: fixed;
    /* 固定在页面顶部 */
    top: 0;
    /* 固定在页面左侧 */
    left: 0;
    /* 设置堆叠顺序，确保导航栏在其他元素之上 */
    z-index: 1000;
    /* 使用flexbox进行布局 */
    display: flex;
    /* 垂直居中对齐flex项目 */
    align-items: center;
}

/* 导航栏内容容器样式 */
.navbar-container {
    /* 设置内容最大宽度为1200像素 */
    max-width: 1200px;
    /* 容器宽度占满100% */
    width: 100%;
    /* 左右自动外边距，实现水平居中 */
    margin: 0 auto;
    /* 左右内边距为20像素 */
    padding: 0 20px;
    /* 使用flexbox进行布局 */
    display: flex;
    /* 项目在主轴上两端对齐 */
    justify-content: space-between;
    /* 交叉轴上居中对齐 */
    align-items: center;
}

/* --- Logo 样式 --- */
.navbar-logo {
    /* 使用flexbox布局 */
    display: flex;
    /* 交叉轴上居中对齐 */
    align-items: center;
    /* 去除链接的下划线 */
    text-decoration: none;
    /* 使用var()函数引用--text-color变量设置文字颜色 */
    color: var(--text-color);
    /* 设置字体大小为1.5rem */
    font-size: 1.5rem;
    /* 设置字体粗细为粗体 */
    font-weight: bold;
}

/* Logo图标样式 */
.logo-icon {
    /* 设置图标右侧外边距为8像素 */
    margin-right: 8px;
    /* 使用var()函数引用--primary-color变量设置图标颜色 */
    color: var(--primary-color);
}

/* --- 桌面端菜单链接样式 --- */
.menu-links ul {
    /* 去除列表默认的项目符号 */
    list-style: none;
    /* 去除外边距 */
    margin: 0;
    /* 去除内边距 */
    padding: 0;
    /* 使用flexbox布局 */
    display: flex;
    /* 设置flex项目之间的间距 */
    gap: 25px;
}

/* 菜单链接<a>标签样式 */
.menu-links a {
    /* 去除链接下划线 */
    text-decoration: none;
    /* 使用var()函数引用--text-color变量设置文字颜色 */
    color: var(--text-color);
    /* 设置字体粗细为500 */
    font-weight: 500;
    /* 设置上下内边距为8像素，左右为0 */
    padding: 8px 0;
    /* 设置定位为相对定位，为伪元素定位提供基准 */
    position: relative;
    /* 为颜色变化添加过渡效果 */
    transition: color 0.3s ease;
}

/* 使用::after伪元素创建链接下方的线条 */
.menu-links a::after {
    /* 必须设置content属性，伪元素才可见 */
    content: '';
    /* 设置为绝对定位 */
    position: absolute;
    /* 宽度与父元素（链接）相同 */
    width: 100%;
    /* 高度为2像素 */
    height: 2px;
    /* 使用var()函数引用--primary-color变量设置背景色 */
    background-color: var(--primary-color);
    /* 定位到父元素左侧 */
    left: 0;
    /* 定位到父元素底部 */
    bottom: 0;
    /* 初始状态下，横向缩放为0（隐藏） */
    transform: scaleX(0);
    /* 设置变换的原点在右下角 */
    transform-origin: bottom right;
    /* 为transform属性添加过渡效果 */
    transition: transform 0.3s ease;
}

/* 鼠标悬停在链接上时的样式 */
.menu-links a:hover {
    /* 使用var()函数引用--primary-color变量改变文字颜色 */
    color: var(--primary-color);
}

/* 鼠标悬停时，下方线条的样式 */
.menu-links a:hover::after {
    /* 横向缩放为1（完全显示） */
    transform: scaleX(1);
    /* 设置变换的原点在左下角，实现从左到右展开的效果 */
    transform-origin: bottom left;
}

/* 当前激活链接的样式 */
.menu-links a.active {
    /* 使用var()函数引用--primary-color变量改变文字颜色 */
    color: var(--primary-color);
    /* 设置字体为粗体 */
    font-weight: bold;
}

/* 当前激活链接下方线条的样式 */
.menu-links a.active::after {
    /* 横向缩放为1（完全显示） */
    transform: scaleX(1);
    /* 设置变换的原点在左下角 */
    transform-origin: bottom left;
}

/* --- 移动端汉堡菜单按钮样式 --- */
.menu-toggle {
    /* 在桌面端默认隐藏 */
    display: none;
    /* 去除背景 */
    background: none;
    /* 去除边框 */
    border: none;
    /* 设置鼠标指针为手型 */
    cursor: pointer;
    /* 去除内边距 */
    padding: 0;
}

/* --- 响应式样式（针对屏幕宽度小于等于768px的设备） --- */
@media (max-width: 768px) {

    /* 汉堡菜单按钮样式 */
    .menu-toggle {
        /* 在移动端显示该按钮 */
        display: block;
        /* 设置堆叠顺序，确保在菜单之上，方便点击 */
        z-index: 1001;
    }

    /* 移动端菜单链接容器样式 */
    .menu-links {
        /* 设置为固定定位 */
        position: fixed;
        /* 定位到屏幕顶部 */
        top: 0;
        /* 定位到屏幕左侧 */
        left: 0;
        /* 宽度占满整个屏幕 */
        width: 100%;
        /* 高度占满整个视口 */
        height: 100vh;
        /* 设置背景色为半透明白色 */
        background-color: rgba(255, 255, 255, 0.98);
        /* 添加背景模糊效果，提升质感 */
        backdrop-filter: blur(5px);
        /* 使用flexbox布局 */
        display: flex;
        /* 主轴（水平）居中 */
        justify-content: center;
        /* 交叉轴（垂直）居中 */
        align-items: center;
        /* 初始状态下向右平移100%，使其移出屏幕外 */
        transform: translateX(100%);
        /* 为transform属性添加过渡效果，实现平滑动画 */
        transition: transform 0.3s ease-in-out;
    }

    /* 当菜单展开时（即有.is-open类时）的样式 */
    .menu-links.is-open {
        /* 平移回到原位（translateX(0)），显示菜单 */
        transform: translateX(0);
    }

    /* 移动端菜单链接列表样式 */
    .menu-links ul {
        /* flex项目垂直排列 */
        flex-direction: column;
        /* 文本居中对齐 */
        text-align: center;
        /* 设置列表项之间的间距 */
        gap: 30px;
    }

    /* 移动端菜单链接<a>标签样式 */
    .menu-links a {
        /* 增大字体大小，方便移动端点击 */
        font-size: 1.8rem;
    }
}
</style>
