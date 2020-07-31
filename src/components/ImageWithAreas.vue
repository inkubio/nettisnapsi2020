<template>
  <div>
    <img id="image" @load="setDimensions" ref="image" :src="require(`@/assets/${imagePath}`)" :alt="altText" :style="classObject" usemap="#objectmap"/>
    <map name="objectmap">
      <area v-for="a in scaledAreas" :key="a.name"
            :alt="a.name"
            :title="a.name"
            :shape="a.shape"
            :coords="a.coords.toString()"
            @click="$emit(a.event)"
      />
    </map>
  </div>
</template>

<script>
export default {
  name: "ImageWithAreas",
  props: {
    imagePath: String,
    classObject: Object,
    altText: String,
    originalHeight: Number,
    originalWidth: Number,
    areas: Array
  },
  data() {
    return {
      wHeight: 0,
      wWidth: 0,
    }
  },
  created() {
    window.addEventListener("resize", this.setDimensions);
  },
  destroyed() {
    window.removeEventListener("resize", this.setDimensions);
  },
  computed: {
    scaledAreas() {
      const h = this.originalHeight;
      const w = this.originalWidth;
      return this.areas.map(i => {
        let newCoords = i.coords.map((c, i) => {
          return Math.floor(i % 2 === 0 ?c * this.wWidth/w :c * this.wHeight/h);
        });

        return {
          name: i.name,
          shape: i.shape,
          coords: newCoords,
          event: i.event
        }
      });
    },
  },
  methods: {
    setDimensions() {
      this.wHeight = this.$refs.image.clientHeight;
      this.wWidth = this.$refs.image.clientWidth;
    },
  }

}
</script>

<style scoped>
area {
  cursor: pointer;
}
#image {
}

</style>