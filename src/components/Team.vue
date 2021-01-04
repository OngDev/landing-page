<template>
	<div class="intro-video">
		{{ greeting }}
	</div>
</template>

<script>
export default {
  name: "Team",
  data: () => {
    return {
      greeting: "Our team",
    };
  },
};
</script>

<style scoped>
* {
	font-family: 'Poppins', sans-serif;
}
.intro-video {
	height: 100vh;
	background-color: tomato;
}
</style>
