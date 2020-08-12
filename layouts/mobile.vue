<template>
  <div class="mobile">
    <nuxt />
  </div>
</template>

<style lang="scss">
.mobile {
  font-family: 'inter-regular', sans-serif;
  font-size: 80px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: pink;
  background: #3b8070;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.navbar {
  font-family: 'inter-bold', sans-serif;
  display: block;
  text-align: left;
  color: pink;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
