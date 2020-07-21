<template>
  <div id="app">
    <div id="container" ref="container">
      <img @load="setDimensions" id="background" ref="image" alt="Kiltis" src="./assets/Nettisnapsi.png" usemap="#objectmap">
      <!--<Object img="läppäri.png" p-left="485px" p-top="500px" width="550px" /> -->
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
    <p>Last Clicked: {{lastClicked}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      wHeight: 0,
      wWidth: 0,
      lastClicked: "None",
      areas: [
        {
          name: "Läppäri",
          shape: "poly",
          coords: [1915,2021,2360,1948,2416,2213,2726,2280,2309,2365,1994,2326],
          func: "test"
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
          func: "test"
        },
        {
          name: "Kuppi1",
          shape: "rect",
          coords: [3684,2675,3464,2838],
          func: "test"
        },
        {
          name: "Kuppi2",
          shape: "rect",
          coords: [2681,2652,2906,2815],
          func: "test"
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
          func: "test"
        },
        {
          name: "Suklaapatukka",
          shape: "rect",
          coords: [2478,1582,2681,1644],
          func: "test"
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
      console.log(newList);
      return newList;
    }
  },
  methods: {
    callMethod(method, event, name) {
      this[method](name);
      console.log("Called method: " + method + ", elements: " + name);
      //alert("Clicked " + name);
    },
    test(name) {
      console.log(name);
      this.lastClicked = name
    },
    setDimensions() {
      console.log("Window resize: height: " + this.$refs.image.clientHeight + ", width: " + this.$refs.image.clientWidth);
      this.wHeight = this.$refs.image.clientHeight;
      this.wWidth = this.$refs.image.clientWidth;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  width: 100%;
}
area {
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
#container {
  width: 100%;
}
#background {
  left: 0;
  top: 0;
}
</style>
