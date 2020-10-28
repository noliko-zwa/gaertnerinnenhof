<template>
  <div class="text-box">
    <div class="text-box--wrapper">
      <h3>{{ textHeader }}</h3>
      <div class="text-box--content">
        {{ textContent }}
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
