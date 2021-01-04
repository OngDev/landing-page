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
.intro-video {
	height: 20vh;
	background-color: yellowgreen;
}
</style>
