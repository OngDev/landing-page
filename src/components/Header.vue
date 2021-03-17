<template>
  <div class="header">
    <div class="ongdev-logo">
      <!-- Insert Ongdev Logo -->
      <a href="/">
        <img src="../assets/ODlogo.svg" alt="Logo" />
      </a>
    </div>
    <div class="utility">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="#ffb347"
      >
        <el-menu-item index="1"><a href="/">HOME</a></el-menu-item>
        <el-menu-item index="2"
          ><a href="javascript:void(0);">ABOUT</a></el-menu-item
        >
        <el-menu-item index="3"
          ><a href="javascript:void(0);">REQUEST PAGE</a></el-menu-item
        >
        <el-menu-item index="4"
          ><a href="javascript:void(0);">BLOG</a></el-menu-item
        >
        <el-menu-item index="5"
          ><a href="javascript:void(0);">YOUTUBE VIDEO</a></el-menu-item
        >
        <el-menu-item index="6"
          ><a href="javascript:void(0);">TEAM</a></el-menu-item
        >
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      greeting: "Yup",
      activeIndex: "1",
    };
  },
};
</script>
<style>
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title,
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-icon-arrow-down:before {
  content: "";
}
</style>
<style scoped>
* {
  font-family: "Poppins", sans-serif;
}
.header {
  display: flex;
  min-width: -webkit-fill-available;
  padding-right: 5.125em;
  padding-left: 5.125em;
  height: 8.255em;
  align-items: center;
  justify-content: space-between;
}
.utility {
  display: flex;
}
.menu {
  display: inline-block;
}
.el-button {
  background-color: #ffb347;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  letter-spacing: 1.35px;
  border-radius: 0px;
  transition: 0.2s ease-in-out;
}
.el-button:hover {
  background-color: #ffc574;
}

.el-menu-item a {
  text-decoration: none;
}
</style>
