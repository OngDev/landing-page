<template>
  <div class="home">
    <Header />
    <IntroVideo />
    <AboutOngDev />
    <Features />
    <Team />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import IntroVideo from "../components/IntroVideo";
import AboutOngDev from "../components/AboutOngDev";
import Features from "../components/Features"
import Team from "../components/Team"
import Footer from "../components/Footer"
export default {
  name: "Home",
  components: {
    Header,
    IntroVideo,
    AboutOngDev,
    Features,
    Team,
    Footer,
  },
};
</script>

<style lang="less" scoped>
* {
  font-family: 'Poppins', sans-serif;
}
</style>
