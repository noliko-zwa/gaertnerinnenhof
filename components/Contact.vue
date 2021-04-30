<template>
  <div class="contact" id="contact">
    <SubmenuHeader
    :barImg="data.header_img"
    :headerImgText="data.header_img_text"
    :header="data.header_text"
    />
    <TextBox
      :textHeader="data.text01_header"
      :textContent="data.text01"
    />
    <TextBox
      :textHeader="data.text02_header"
      :textContent="data.text02"
    />
    <div class="text-box">
    <img class="graphic wrapper" src="/img/headerImg/210402_Grafik_Anfahrt_s.jpg"/>
    </div>

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
