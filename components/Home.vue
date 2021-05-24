<template>
  <div class="home" id="home-page">
    <SubmenuHeader
      :barImg="data.header_img"
      :headerImgText="data.header_img_text"
      :header="data.header_text"
    />
    <TextBox :textHeader="data.text01_header" :textContent="data.text01" />
    <TextBox :textContent="data.text02" />
    <div class="text-box sns">
      <div class="text-box--wrapper wrapper">
        <div class="text-box--content sns-wrapper">
          <a
            href="https://www.instagram.com/gaertnerinnenhof_blumberg/?hl=en"
            target="_blank"
          >
            <InstagramLoad
              :caption="instagram[0].caption"
              :imgUrl="instagram[0].media_url"
              :timeStamp="instagram[0].timestamp"
            />
          </a>
          <a
            href="https://de-de.facebook.com/Gaertnerinnenhof/"
            target="_blank"
          >
            <span class="sns-icon">
              <img src="/img/facebook-circular-logo.svg" alt="facebook icon" />
            </span>
          </a>
        </div>
      </div>
    </div>
    <Gallery :imageHeader="data.gallery_text" :images="data.gallery_img" />
  </div>
</template>

<script>
import InstagramLoad from './InstagramLoad.vue'
export default {
  components: { InstagramLoad },
  props: {
    data: {
      type: Object,
      required: true,
    },
    instagram: {
      type: Array,
      required: true,
    },
  },
}
</script>
