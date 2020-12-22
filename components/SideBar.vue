<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      aria-labelledby="sidebar-no-header-title"
      shadow
      backdrop
    >
      <template #default="{ hide }">
        <div class="p-3 side-bar--menu">
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">
                <nuxt-link to="/" v-scroll-to="{ el: '#home-page' }">
                  home
                </nuxt-link>
              </b-nav-item>
              <p></p>
              <b-nav-item href="#link-1" @click="hide">
                <nuxt-link to="/" v-scroll-to="{ el: '#about' }">
                  hof
                </nuxt-link>
              </b-nav-item>
              <p></p>
              <b-nav-item href="#link-2" @click="hide">
                <nuxt-link to="/" v-scroll-to="{ el: '#offering' }"
                  >angebot</nuxt-link
                >
              </b-nav-item>
              <p></p>
                <b-nav-item active @click="hide">
                  <nuxt-link to="/" v-scroll-to="{ el: '#assistance' }"
                    >mitarbeit</nuxt-link
                  >
                </b-nav-item>

              <p></p>
              <b-nav-item href="#link-1" @click="hide">
                <nuxt-link to="/" v-scroll-to="{ el: '#market' }"
                  >vermakrtung</nuxt-link
                >
              </b-nav-item>
              <p></p><p></p>
              <b-nav-item href="#link-2" @click="hide">
                <nuxt-link to="/" v-scroll-to="{ el: '#contact' }"
                  >kontakt</nuxt-link
                >
              </b-nav-item>
              <p></p>
              <b-nav-item href="#link-1" @click="hide">
                <nuxt-link to="/imprint"
                  >impressum&nbsp;/
                  <p>datenschutz</p></nuxt-link
                >
              </b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<style lang="scss">
@import '../assets/scss/components/_side-bar';
</style>
