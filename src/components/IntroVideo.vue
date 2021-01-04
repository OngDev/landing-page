<template>
	<div class="intro-video">
		{{ greeting }}
	</div>
</template>

<script>
export default {
  name: "IntroVideo",
  data: () => {
    return {
      greeting: "OngDev's Intro Video",
    };
  },
};
</script>

<style scoped>
* {
	font-family: 'Poppins', sans-serif;
}
.intro-video {
	height: 85vh;
	background-color: salmon;
}
</style>
