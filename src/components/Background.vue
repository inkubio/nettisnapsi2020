<template>
  <div id="container" ref="container">
    <img @load="setDimensions" id="background" ref="image" alt="Kiltis" src="../assets/Nettisnapsi.png" usemap="#objectmap">
    <map name="objectmap">
      <area v-for="a in scaledAreas" :key="a.name"
            :alt="a.name"
            :title="a.name"
            :shape="a.shape"
            :coords="a.coords.toString()"
            @click="callMethod(a.func, $event, a.name)"
      />
    </map>
  </div>
</template>

<script>

import haalarit from '../assets/audio/haalarit.mp3';
import kahvikone from '../assets/audio/kahvikone.mp3';
import kuppikilina from '../assets/audio/kahvikuppienkilina.mp3'
import kaato from '../assets/audio/kahvinkaatokuppiin.mp3'
import kellonkilina from '../assets/audio/kellonkilina.mp3'
import naputus from '../assets/audio/nappiksennaputus.mp3'
import suklaapatukanrapina from '../assets/audio/suklaapatukanrapina.mp3'

export default {
  name: "Background",
  data () {
    return {
      wHeight: 0,
      wWidth: 0,
      areas: [
        {
          name: "Läppäri",
          shape: "poly",
          coords: [1915,2021,2360,1948,2416,2213,2726,2280,2309,2365,1994,2326],
          func: "playSound"
        },
        {
          name: "Koti",
          shape: "poly",
          coords: [2749,1030,3143,1036,3149,1717,3042,1712,2873,1605,2777,1605,2777,1526,2737,1526],
          func: "test"
        },
        {
          name: "Cosmo",
          shape: "poly",
          coords: [2394,2579,2687,2613,2535,2804,2236,2765],
          func: "test"
        },
        {
          name: "Krokesetti",
          shape: "poly",
          coords: [4895,1914,4607,2844,4923,2922,5182,2821,4985,1920],
          func: "test"
        },
        {
          name: "Palapelin pala",
          shape: "poly",
          coords: [4241,2945,4100,3086,4331,3159,4472,3007],
          func: "test"
        },
        {
          name: "Kahvikone",
          shape: "rect",
          coords: [2360,1363,2540,1543],
          func: "playSound"
        },
        {
          name: "Kuppi1",
          shape: "rect",
          coords: [3684,2675,3464,2838],
          func: "playSound"
        },
        {
          name: "Kuppi2",
          shape: "rect",
          coords: [2681,2652,2906,2815],
          func: "playSound"
        },
        {
          name: "Ohjain",
          shape: "rect",
          coords: [5728,2956,6083,3119],
          func: "test"
        },
        {
          name: "Haalarit",
          shape: "rect",
          coords: [4039,1042,4337,1926],
          func: "playSound"
        },
        {
          name: "Suklaapatukka",
          shape: "rect",
          coords: [2478,1582,2681,1644],
          func: "playSound"
        },
        {
          name: "Boombox",
          shape: "rect",
          coords: [935,2939,1876,3502],
          func: "test"
        }
      ]
    }
  },
  created() {
    window.addEventListener("resize", this.setDimensions);
    window.scrollTo(0,1);
  },
  destroyed() {
    window.removeEventListener("resize", this.setDimensions);
  },
  computed: {
    scaledAreas: function () {
      const h = 3508;
      const w = 6376;
      let newList = this.areas.map(i => {
        let newCoords = i.coords.map((c, i) => {
          return Math.floor(i % 2 === 0 ?c * this.wWidth/w :c * this.wHeight/h);
        });

        return {
          name: i.name,
          shape: i.shape,
          coords: newCoords,
          func: i.func
        }
      });
      return newList;
    },
  },
  methods: {
    callMethod(method, event, name) {
      this[method](name);
      console.log("Called method: " + method + ", elements: " + name);
    },
    setDimensions() {
      console.log("Window resize: height: " + this.$refs.image.clientHeight + ", width: " + this.$refs.image.clientWidth);
      this.wHeight = this.$refs.image.clientHeight;
      this.wWidth = this.$refs.image.clientWidth;
    },
    test(name) {
      console.log(name);
      this.lastClicked = name;
      this.$router.push('test');
      this.showModal = true
    },
    playSound(name) {
      console.log(name);
      const cup = [kuppikilina, kaato];
      const overall = [haalarit, kellonkilina];
      if (name === 'Haalarit') {
        let audio = new Audio(overall[Math.floor(Math.random() * overall.length)]);
        audio.play();
      } else if (name === 'Kahvikone') {
        let audio = new Audio(kahvikone);
        audio.play();
      } else if (name === 'Kuppi1' || name === 'Kuppi2') {
        let audio = new Audio(cup[Math.floor(Math.random() * cup.length)]);
        audio.play();
      } else if (name === 'Suklaapatukka') {
        let audio = new Audio(suklaapatukanrapina);
        audio.play();
      } else if (name === 'Läppäri') {
        let audio = new Audio(naputus);
        audio.play();
      }
    }
  }
}
</script>

<style scoped>
area {
  cursor: pointer;
}
#container {
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#container::-webkit-scrollbar { display: none; }
#background {
  left: 0;
  top: 0;
  height: 100vh;
  width: auto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>