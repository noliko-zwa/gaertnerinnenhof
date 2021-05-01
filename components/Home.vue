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
        <div class="text-box--content">
          <a
            href="https://de-de.facebook.com/Gaertnerinnenhof/"
            target="_blank"
          >
            <span class="sns-icon">
              <img src="/img/facebook-circular-logo.svg" alt="facebook icon" />
            </span>
          </a>
          <a
            href="https://www.instagram.com/gaertnerinnenhof_blumberg/?hl=en"
            target="_blank"
          >
            <span class="sns-icon">
              <img src="/img/instagram.svg" alt="instagram icon" />
            </span>
          </a>
        </div>
      </div>
    </div>
    <Gallery :imageHeader="data.gallery_text" :images="data.gallery_img" />
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>
