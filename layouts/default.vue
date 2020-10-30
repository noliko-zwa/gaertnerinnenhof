<template>
  <div class="navbar-position">
    <nuxt />
    <div
      id="nav-icon"
      :class="{ open: showMobileMenu }"
      @click="showMobileMenu = !showMobileMenu"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div
      class="nav-bar"
      :class="{ open: showMobileMenu }"
      @click="showMobileMenu = !showMobileMenu"
    >
      <transition name="mobileMenu">
        <div class="nav-bar--menu">
          <p>home</p>
          <p>hof</p>
          <p>angebot</p>
          <p>mitarbeit</p>
          <p>vermakrtung</p>
          <p>kontakt</p>
          <p>impressum&nbsp;/</p>
          <p>datenschutz</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'mobileMenu',
  data: () => {
    return {
      showMobileMenu: false,
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
  font-family: 'inter-regular', 'Helvetica Neue', Arial, sans-serif;
  color: #fff;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-image: url('../static/img/background-img.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // background-color: rgb(131, 151, 83);

  #nav-icon {
    display: none;
    width: 45px;
    height: 45px;
    position: relative;
    margin: 50px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
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
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;

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

  #nav-icon.open span:nth-child(1) {
    top: 10px;
    width: 0%;
    left: 50%;
  }

  #nav-icon.open span:nth-child(2) {
    top: 10px;
    left: 1px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon.open span:nth-child(3) {
    top: 10px;
    left: 1px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon.open span:nth-child(4) {
    top: 20px;
    width: 0%;
    left: 50%;
  }

  .nav-bar {
    font-family: 'inter-bold', 'Helvetica Neue', sans-serif;
    margin: 87px 50px 0;
    line-height: 25px;
    font-size: 18px;
    text-transform: uppercase;
    text-align: right;

    p {
      margin-top: 0;
      margin-bottom: 2.2rem;

      &:nth-last-of-type(2) {
        margin-bottom: 0.3rem;
      }
    }
  }
}

@include bp-max-medium() {
  .navbar-position {
    flex-direction: column-reverse;
    position: relative;
    #nav-icon {
      z-index: 100;
      display: block;
      position: sticky;
      top: 50px;
      margin-right: 10%;
    }
    .nav-bar {
      display: none;
      &.open {
        z-index: 1;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        background-image: url('../static/img/background-img.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .nav-bar--menu {
        margin: 100px 54px 0;
      }
    }
    .mobileMenu-enter-active,
    .mobileMenu-leave-active {
      transition: opacity 1.3s ease-out;
    }
    .mobileMenu-enter,
    .mobileMenu-leave-to {
      opacity: 0;
    }
  }
}
</style>
