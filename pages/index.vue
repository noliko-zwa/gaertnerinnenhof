<template>
  <div class="container row col-12">
    <nav class="navbar fixed-left">
      <Navbar />
    </nav>
    <div class="main-page">
      <MainPage />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import MainPage from '../components/MainPage'

export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default', // eslint-disable-line
  components: {
    Navbar,
    MainPage,
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
}
.nav {
  flex: 1;
}
.main-page {
  flex: 10;
}

.links {
  padding-top: 15px;
}
</style>
