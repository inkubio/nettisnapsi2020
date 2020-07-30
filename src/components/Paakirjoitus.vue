<template>
  <Article class="background">
    <template v-slot:header>
      <span> Pää<span style="text-decoration: line-through;">kirjoitus</span>video</span>
    </template>
    <template v-slot:content>
      <video id="content" src="@/assets/video/paakirjoitus.mp4" autoplay controls controlsList="nodownload"></video>
    </template>
  </Article>
</template>

<script>

import Article from "@/components/Article";

export default {
  name: "Paakirjoitus",
  components: {Article},
  created() {
    window.addEventListener(
        "orientationchange",
        this.handleOrientationChange
    );
  },
  destroyed() {
    window.removeEventListener("orientationchange", this.handleOrientationChange)
  },
  methods: {
    handleOrientationChange() {
      const orientation = window.screen.orientation.type;
      if(orientation === "portrait-primary") {
        document.exitFullscreen();
      } else if (orientation === "landscape-primary") {
        document.getElementById("content").requestFullscreen();
      }
    }
  }
}
</script>

<style scoped>
#content {
  width: 90%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.background {
  background-image: url("../assets/Nettisnapsi.png");
  object-fit: fill;
  background-position: 68% 87%;
}
</style>