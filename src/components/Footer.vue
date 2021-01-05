<template>
	<div class="footer">
    <el-row class="note">
      <el-col :span="7">
        <img src="../assets/ODlogo.svg" class="ongdev-logo grid-content">
      </el-col>
      <el-col :span="12">
        <div class="some-text grid-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia volutpat est, et rhoncus est pretium id. Morbi ullamcorper enim nulla, quis venenatis est dapibus eget.
        </div>
      </el-col>
      <el-col :span="5">
        <div class="icon grid-content">
          <img src="../assets/facebook-f-brands.svg" class="icon-item">
          <img src="../assets/youtube-brands.svg" class="icon-item">
          <img src="../assets/github-brands.svg" class="icon-item">
        </div>
      </el-col>
		</el-row>
		<div class="copyright">
      Copyright @ ongdev.com
    </div>
	</div>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      greeting: "Footer",
    };
  },
};
</script>

<style scoped>
* {
	font-family: 'Poppins', sans-serif;
    margin: 0;
}
.footer {
  padding-right: 5.125em;
  padding-left: 5.125em;
	height: 25vh;
}
.note {
  padding: 1.75em 0;
}
.some-text {
  padding-right: 4.125em;
}
.ongdev-logo {
  height: 5em;
  width: auto;
}
.icon {
  float: right;
}
.icon-item {
  height: 1.415em;
  width: auto;
  padding-left: 2em;
}
.copyright {
  text-align: center;
  font-size: 0.75em;
  color: #C4C4C4;
  padding-top: 1.125em;
  border-top: 1px solid #C4C4C4;
}
</style>
