<template>
  <div class="main">
    hello
    <FirstPage />
    <About />
    <Offering />
    <Marketing />
    <Assistance />
    <Contact />
  </div>
</template>

<script>
import FirstPage from './FirstPage'
import About from './About'
import Offering from './Offering'
import Marketing from './Marketing'
import Assistance from './Assistance'
import Contact from './Contact'

export default {
  name: 'MainPage',
  components: {
    FirstPage,
    About,
    Offering,
    Marketing,
    Assistance,
    Contact,
  },
}
</script>

<style scoped>
.main {
  background-color: pink;
}
</style>
