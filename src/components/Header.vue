<template>
  <div class="header">
		<div class="ongdev-logo">
			<!-- Insert Ongdev Logo -->
		</div>
		<div class="utility">
			<div class="search item">
				<i class="el-icon-search"></i>
			</div>
			<div class="menu item">
				<i class="el-icon-arrow-down"></i>
			</div>
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
    };
  },
};
</script>

<style scoped>
* {
	font-family: 'Poppins', sans-serif;
}
.header {
	display: inline-block;
	min-width: -webkit-fill-available;
}
.utility {
	float: right;
}
.item {
	margin-left: 3.25em;
	margin-top: 2.25em;
	margin-bottom: 2em;
	display: inline-block;
}
.el-button {
	background-color: #ffb347;
	color: #ffffff;
	border: none;
	letter-spacing: 1.35px;
	border-radius: 0px;
	transition: 0.2s ease-in-out;
}
.el-button:hover {
	background-color: #FFC574;
}
</style>
