<template>
  <div class="instagram-load" id="instagram-load">
    <div class="instagram-load-wrapper">
      <div class="instagram-text">
        <span class="sns-icon">
          <img src="/img/instagram.svg" alt="instagram icon" />
        </span>
        {{ timeStamp.substring(0, 10) }}
        <p/>
        {{ caption.substring(0, 88) }}...
        <p></p>
      </div>
      <div class="instagram-img">
        <img v-bind:src="imgUrl" alt="instagram" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    timeStamp: {
      type: String,
      required: true,
    },
  },
}
</script>
