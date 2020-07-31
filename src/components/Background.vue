<template>
  <div id="container" ref="container">
    <img @load="setDimensions" id="background" ref="image" alt="Kiltis" src="@/assets/Nettisnapsi.png" usemap="#objectmap">
    <map name="objectmap">
      <area v-for="a in scaledAreas" :key="a.name"
            :alt="a.name"
            :title="a.name"
            :shape="a.shape"
            :coords="a.coords.toString()"
            @click.stop="callMethod(a.func, a.name)"
      />
    </map>
    <transition name="fade">
      <Modal v-if="showIntro" @close="$emit('closeIntro')">
        <template v-slot:header>
          <h1>NettiSʸnapsi</h1>
        </template>
        <div>
          <p>Olet saapunut NettiSʸnapsin etäkiltikselle, tervetuloa!</p>
          <p>Tutkimalla kiltistä saatat löytää Sʸnapsin toimittajien kiltikselle jättämää (tai unohtamaa) sisältöä. Ihan
            tavallisen kiltiksen tapaan myös etäkiltis sisältää ääniä.
            Jokainen siivoaa sitten oman kahvikuppinsa lähtiessään!
          </p>
          <p>
            Kesäterkuin,
            Sʸnapsin toimitus
          </p>
        </div>
      </Modal>
      <Modal v-if="showCredits" @close="showCredits = false">
        <template v-slot:header>
          <h1>Tekijät</h1>
        </template>
        <div>
          <p>
            Päätoimittajat: Vilma, Sofia
          </p>
          <p>
            Jutut: Akseli, Antti, Henna, Juhana, Onerva, Noora, Valtteri,
          </p>
          <p>
            Graafinen toteutus: Silva ja Rosanna
          </p>
          <p>
            Tekninen toteutus: Oula
          </p>
        </div>
      </Modal>
      <SmashModal v-show="showSmash" @close="showSmash = false" v-click-outside="closeSmash"/>
    </transition>
    <transition name="fade">
      <Modal v-show="showSpotify" @close="showSpotify = false" v-click-outside="closeSpotify">
        <template v-slot:header>
          <h2>Kiltiskone</h2>
        </template>
        <iframe
            id="spotify"
            src="https://open.spotify.com/embed/playlist/7CA06xogpwC7skfOuOxZyd?si=xjdhteScRtKfZIuizA05-g"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media">
        </iframe>
      </Modal>
    </transition>
  </div>
</template>

<script>

import haalarit from '@/assets/audio/haalarit.mp3';
import kahvikone from '@/assets/audio/kahvikone.mp3';
import kuppikilina from '@/assets/audio/kahvikuppienkilina.mp3'
import kaato from '@/assets/audio/kahvinkaatokuppiin.mp3'
import kellonkilina from '@/assets/audio/kellonkilina.mp3'
import naputus from '@/assets/audio/nappiksennaputus.mp3'
import suklaapatukanrapina from '@/assets/audio/suklaapatukanrapina.mp3'
import Modal from "@/components/Modal";
import SmashModal from "@/components/SmashModal";

export default {
  name: "Background",
  components: {SmashModal, Modal},
  props: {
    showIntro: {type: Boolean, default: true}
  },
  data () {
    return {
      showSmash: false,
      showSpotify: false,
      showCredits: false,
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
          func: "etaelaminen"
        },
        {
          name: "Cosmo",
          shape: "poly",
          coords: [2394,2579,2687,2613,2535,2804,2236,2765],
          func: "horoskooppi"
        },
        {
          name: "Krokesetti",
          shape: "poly",
          coords: [4895,1914,4607,2844,4923,2922,5182,2821,4985,1920],
          func: "urheiluhaastis"
        },
        {
          name: "Palapelin pala",
          shape: "poly",
          coords: [4241,2945,4100,3086,4331,3159,4472,3007],
          func: "paakirjoitus"
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
          func: "smash"
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
          func: "spotify"
        },
        {
          name: "Credits",
          shape: "poly",
          coords: [5633,90,5306,253,5311,569,5649,417],
          func: "credits"
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
      return this.areas.map(i => {
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
    },
  },
  methods: {
    callMethod(method, name) {
      if(name) {
        this[method](name);
      } else {
        this[method]();
      }
    },
    setDimensions() {
      this.wHeight = this.$refs.image.clientHeight;
      this.wWidth = this.$refs.image.clientWidth;
    },
    paakirjoitus() {
      this.$router.push('paakirjoitus');
    },
    horoskooppi() {
      this.$router.push('horoskooppi');
    },
    urheiluhaastis() {
      this.$router.push('murheiluruutu');
    },
    etaelaminen() {
      this.$router.push('etaelaminen');
    },
    playSound(name) {
      const cup = [kuppikilina, kaato];
      const overall = [haalarit, kellonkilina];
      if (name === 'Haalarit') {
        let audio = new Audio(overall[Math.floor(Math.random() * overall.length)]);
        audio.volume = 1;
        audio.play();
      } else if (name === 'Kahvikone') {
        let audio = new Audio(kahvikone);
        audio.volume = 1;
        audio.play();
      } else if (name === 'Kuppi1' || name === 'Kuppi2') {
        let audio = new Audio(cup[Math.floor(Math.random() * cup.length)]);
        audio.volume = 1;
        audio.play();
      } else if (name === 'Suklaapatukka') {
        let audio = new Audio(suklaapatukanrapina);
        audio.volume = 1;
        audio.play();
      } else if (name === 'Läppäri') {
        let audio = new Audio(naputus);
        audio.volume = 1;
        audio.play();
      }
    },
    closeSmash() {
      this.showSmash = false;
    },
    closeSpotify() {
      this.showSpotify = false;
    },
    spotify() {
      this.showSmash = false;
      this.showIntro = false;
      this.showCredits = false;
      this.showSpotify = true;
    },
    smash() {
      this.showIntro = false;
      this.showSpotify = false;
      this.showCredits = false;
      this.showSmash = true;
    },
    credits() {
      this.showCredits = true;
      this.showSmash = false;
      this.showIntro = false;
      this.showSpotify = false;
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
p {
  font-size: 1.2em;
  margin: 20px auto 10px;
  max-width: 70%;
}
#spotify {
  width: 300px;
  height: 50vh;
}
</style>