<template>
  <div class="text-box">
    <div class="text-box--wrapper wrapper">
      <h3>{{ textHeader }}</h3>
      <div class="text-box--content" v-html="textContent">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textHeader: {
      type: String,
      required: false,
    },
    textContent: {
      type: String,
      required: false,
    },
  },
}
</script>
