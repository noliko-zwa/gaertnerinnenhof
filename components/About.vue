<template>
  <div class="about" id="about">
    <SubmenuHeader
      :barImg="data.header_img"
      :headerImgText="data.header_img_text"
      :header="data.header_text"
    />
    <TextBox :textHeader="data.text01_header" :textContent="data.text01" />
    <TextBox :textHeader="data.text02_header" :textContent="data.text02" />
    <div class="text-box">
      <img src="/img/grafics/Grafiken_Bodenleben.png" class="graphic wrapper" />
    </div>
    <TextBox :textHeader="data.text03_header" :textContent="data.text03" />
    <div class="text-box sns">
      <div class="text-box--wrapper wrapper">
        <a
          href="https://www.regenerative-landwirtschaft.de/startseite.html"
          target="_blank"
          >https://www.regenerative-landwirtschaft.de/</a
        >
        <br />
        <a href="http://humusfarming.de" target="_blank"
          >http://humusfarming.de</a
        >
        <br />
        <a href="http://gruenebruecke.de" target="_blank"
          >http://gruenebruecke.de</a
        >
      </div>
    </div>
    <TextBox :textHeader="data.text04_header" :textContent="data.text04" />
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
