<template>
  <Article class="background">
    <template v-slot:content>
      <ImageWithAreas
          id="container"
          alt-text="Horoskoopit"
          imagePath="horoskoopit.png"
          :areas="areas"
          :original-height="824"
          :original-width="1289"
          :class-object="classObject"
          @leijona="leijona"
          @neitsyt="neitsyt"
      ></ImageWithAreas>
    </template>
  </Article>
</template>

<script>
import Article from "@/components/Article";
import ImageWithAreas from "@/components/ImageWithAreas";
export default {
  name: "Horoskooppi",
  components: {Article, ImageWithAreas},
  data() {
    return {
      areas: [
        {
          name: "Leijona",
          shape: "circle",
          coords: [165,146,106],
          event: "leijona"
        },
        {
          name: "Neitsyt",
          shape: "circle",
          coords: [475,146,106],
          event: "neitsyt"
        },
        {
          name: "Vaaka",
          shape: "circle",
          coords: [793,146,106],
          event: "vaaka"
        },
        {
          name: "Skorpioni",
          shape: "circle",
          coords: [1113,146,106],
          event: "skorpioni"
        },
        {
          name: "Jousimies",
          shape: "circle",
          coords: [165,400,106],
          event: "jousimies"
        },
        {
          name: "Kauris",
          shape: "circle",
          coords: [475,400,106],
          event: "kauris"
        },
        {
          name: "Vesimies",
          shape: "circle",
          coords: [793,400,106],
          event: "vesimies"
        },
        {
          name: "Kalat",
          shape: "circle",
          coords: [1113,400,106],
          event: "kalat"
        },
        {
          name: "Oinas",
          shape: "circle",
          coords: [164,657,106],
          event: "oinas"
        },
        {
          name: "Härkä",
          shape: "circle",
          coords: [475,657,106],
          event: "harka"
        },
        {
          name: "Kaksonen",
          shape: "circle",
          coords: [793,657,106],
          event: "kaksonen"
        },
        {
          name: "Rapu",
          shape: "circle",
          coords: [1113,657,106],
          event: "rapu"
        },
      ],
      classObject: {
        'width': '100%',
        'object-fit': 'contain',
        '-webkit-touch-callout': 'none',
        '-webkit-user-select': 'none',
        '-khtml-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
        '-webkit-tap-highlight-color': 'transparent'
      }
    }
  },
  methods: {
    leijona() {
      console.log('leijona');
    },
    neitsyt() {
      console.log('neitsyt');
    },
    vaaka() {
      console.log('vaaka');
    }
  }
}
</script>

<style scoped>
.background {
  background-image: url("../assets/Nettisnapsi.png");
  object-fit: fill;
  background-position: 50% 75%;
}
#container {
  height: 100%;
  width: 100%;
}
.image {
  width: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>