<template>
  <Article>
    <template v-slot:header>Murheiluruutu</template>
    <template v-slot:content>
      <div id="video-wrapper">
        <iframe
            width="100%"
            height="100%"
            id="content"
            src="https://www.youtube-nocookie.com/embed/__EyTn1bMEI?autoplay=1"
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
      </div>
    </template>
  </Article>
</template>

<script>
import Article from "@/components/Article";
export default {
  name: "Urheiluhaastis",
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}
#video-wrapper {
  position: relative;
  width: 90%;
  margin: 0 auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding-bottom: 50.625%;
}
</style>