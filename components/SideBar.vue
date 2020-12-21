<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      backdrop
      shadow
    >
      <div class="nav-bar--menu">
        <p></p>
        <nuxt-link to="/" v-scroll-to="{ el: '#home-page' }">home</nuxt-link>
        <p></p>
        <nuxt-link to="/" v-scroll-to="{ el: '#about' }">hof</nuxt-link>
        <p></p>
        <nuxt-link to="/" v-scroll-to="{ el: '#offering' }">angebot</nuxt-link>
        <p></p>
        <nuxt-link to="/" v-scroll-to="{ el: '#assistance' }"
          >mitarbeit</nuxt-link
        >
        <p></p>
        <nuxt-link to="/" v-scroll-to="{ el: '#market' }"
          >vermakrtung</nuxt-link
        >
        <p></p>
        <p></p>
        <nuxt-link to="/" v-scroll-to="{ el: '#contact' }">kontakt</nuxt-link>
        <p></p>
        <nuxt-link to="/imprint"
          >impressum&nbsp;/
          <p>datenschutz</p></nuxt-link
        >
      </div>
    </b-sidebar>
  </div>
</template>
