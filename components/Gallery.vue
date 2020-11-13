<template>
  <div class="gallery">
    <div class="header wrapper">
      <h3> {{ imageHeader }}</h3>
    </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="600"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(img, idx) in images"
        :key="idx"
        :text="img.info"
        :img-src="img.src"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    imageHeader: {
      type: String,
      required: false,
    },
    images: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
