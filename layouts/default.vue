<template>
  <div class="navbar-position">
    <nuxt />
    <div class="heder-nav-icon">
      <div
        id="nav-icon"
        :class="{ open: showMenu }"
        v-b-toggle.sidebar-backdrop
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <SideBar></SideBar>
      <div class="logo">
        <h1>
          <img src="../static/img/logo.svg" alt="logo" />
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar'
export default {
  transition: 'mobileMenu',
  components: {
    SideBar,
  },
  data: () => {
    return {
      showMenu: false,
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/app.scss';
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

.navbar-position {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  font-family: 'inter-regular', 'Helvetica Neue', Arial, sans-serif;
  color: $color-white;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-image: url('../static/img/bgImg-dark.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // background-color: rgb(131, 151, 83);

  .heder-nav-icon {
    z-index: 1000;
    display: flex;
    position: fixed;
    justify-content: space-between;
    top: 10px;
    width: 100vw;

    .logo {
      margin: 50px 30px;
      h1 {
        width: 450px;
      }
    }
  }
  #nav-icon {
    left: 25px;
    width: 45px;
    height: 45px;
    margin: 50px 30px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: #fff;
      border-radius: 2px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);

      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2),
      :nth-child(3) {
        top: 10px;
      }

      &:nth-child(4) {
        top: 20px;
      }
    }
  }
}

@include bp-max-medium() {
  .navbar-position {
    flex-direction: column-reverse;
    position: relative;

    .heder-nav-icon {
      z-index: 1000;
      display: flex;
      position: fixed;
      justify-content: space-between;
      top: 10px;
      width: 100vw;

      .logo {
        margin: 40px 0 0;
        h1 {
          max-width: calc(100vw - 130px);
        }
      }
    }
  }
}
</style>
