<template>
	<div class="about-ong-dev">
		<div class="image">
      <el-image
      :src="url"></el-image>
    </div>
    <div class="text">
      <div class="big-text">
        Nguyễn <br> Đăng <span class="highlight-text">Duy</span>
      </div>
      <span>Bưng vai trò to bự chảng của anh Duy bỏ vô đây :()</span>
      <div class="more-info">
        <div class="smol-title">
          Introduce
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor ex nec elementum porttitor. Maecenas a justo congue, facilisis neque non, suscipit dui. Aliquam interdum, massa at congue congue, lectus ipsum condimentum arcu, eget dictum turpis felis at metus. Nullam iaculis vestibulum sapien, pulvinar viverra sapien accumsan sed. Donec condimentum cursus semper. Proin eget est quam. Aenean eget dictum neque, tincidunt elementum ante.
        </div>
      </div>
      <div class="redirect-btn">
        <el-button plain>
          Explore me
          <i class="el-icon-s-promotion"></i>
        </el-button>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: "AboutOngDev",
  data: () => {
    return {
      url: "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg"
    };
  },
};
</script>

<style scoped>
* {
	font-family: 'Poppins', sans-serif;
}
.about-ong-dev {
	height: 100vh;
  display: flex;
  align-items: center;

  padding-right: 5.125em;
  padding-left: 5.125em;
}
.text {
  margin-left: 5.755em;
}
.el-image {
  width: 27.525vw;
  height: 72.25vh;
}
.big-text {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 3.275em;
}
.highlight-text {
  font-family: 'Montserrat', sans-serif;
  color: #FFB347;
}
.more-info {
  padding-top: 3.55em;
  padding-bottom: 3.55em;
}
.smol-title {
  color: #C4C4C4;
  padding-bottom: 1.2em;
  border-bottom: 1px solid #C4C4C4;
}
.el-button {
  float: right;
}
.el-button:hover {
  color: #FFB347;
  border: #FFB347 1px solid;
}
</style>
