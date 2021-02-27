<template>
  <div class="header">
		<div class="ongdev-logo">
			<!-- Insert Ongdev Logo -->
			<img src="../assets/ODlogo.svg" alt="">
		</div>
		<div class="utility">
			<!-- <div class="search item">
				<i class="el-icon-search"></i>
			</div> -->
			<el-menu :default-active="activeIndex" 
				class="el-menu-demo" 
				mode="horizontal" 
				menu-trigger="click">
				<el-submenu index="1">
					<template #title><img src="../assets/menu-button.svg"></template>
					<el-menu-item index="1-1"><template #title>HOME</template></el-menu-item>
					<el-menu-item index="1-2"><template #title>ABOUT</template></el-menu-item>
					<el-menu-item index="1-3"><template #title>REQUEST PAGE</template></el-menu-item>
					<el-menu-item index="1-4"><template #title>BLOG</template></el-menu-item>
					<el-menu-item index="1-5"><template #title>YOUTUBE VIDEO</template></el-menu-item>
					<el-menu-item index="1-6"><template #title>TEAM</template></el-menu-item>
				</el-submenu>
			</el-menu>
			<el-button class="auth item">
				register
			</el-button>
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

<style scoped>
* {
	font-family: 'Poppins', sans-serif;
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
	/* margin-left: 3.25em;
	margin-top: 2.25em;
	margin-bottom: 2em; */
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
	background-color: #FFC574;
}

/* .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
	border-bottom: none;
}

.el-submenu__title i {
	display: none !important;
} */

.el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title {
	color: #ffb347;
}

.el-menu.el-menu--horizontal {
	border: none;
}

</style>
