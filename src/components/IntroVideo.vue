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
	height: 88vh;
	background-color: salmon;
  padding-right: 5.125em;
  padding-left: 5.125em;
}
</style>
