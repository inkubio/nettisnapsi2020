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
          @vaaka="vaaka"
          @skorpioni="skorpioni"
          @jousimies="jousimies"
          @kauris="kauris"
          @vesimies="vesimies"
          @kalat="kalat"
          @oinas="oinas"
          @harka="harka"
          @kaksonen="kaksonen"
          @rapu="rapu"
      ></ImageWithAreas>
      <transition name="fade">
        <HoroscopeModal v-if="showModal"
            @close="showModal = false"
            :title="title"
            :lyrics="lyric"
            :song="song"
            :song-link="songLink"
            :totem="totem"
        />
      </transition>
    </template>
  </Article>
</template>

<script>
import Article from "@/components/Article";
import ImageWithAreas from "@/components/ImageWithAreas";
import HoroscopeModal from "@/components/HoroscopeModal";

export default {
  name: "Horoskooppi",
  components: {HoroscopeModal, Article, ImageWithAreas},
  data() {
    return {
      showModal: false,
      title: '',
      lyric: '',
      song: '',
      songLink: '',
      totem: '',
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
        'max-height': '100%',
        'max-width': '100%',
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
      this.showModal = true;
      this.title = "Leijona 23.7.-23.8.";
      this.lyric = "“Se oli kauhean darraisa mies, mut lähdin veijari kuka sen ties. Kuin kissa hiirtä se kisaili " +
          "näin, sanoin sille sen naamaa päin: ei oo (ei oo), ei tuu. Ei tipu biisii, enkä sano juu (juu). " +
          "Ei mun näppistä kukaan vie minnekään se on kyllä no thank you.”";
      this.song = "Hittiputki"
      this.songLink = "https://www.youtube.com/watch?v=Z-4FNTG9rlg"
      this.totem = "sohvalta dominoimassa Spotifyta koska juuri " +
          "sinun pakotusbiisisi ovat luonnollisesti paljon parempia kuin muiden!"

    },
    neitsyt() {
      this.showModal = true;
      this.title = "Neitsyt 24.8.-23.9.";
      this.lyric = "Viime laskarissa annoit prujusi pois, mutta seuraavana päivänä sut käräytettiin prujaamasta. " +
          "Tässä laskarissa säästyt kyyneliltä ja annat prujut jollekin erityiselle.";
      this.song = "Last Christmas";
      this.songLink = "https://www.youtube.com/watch?v=bwNV7TAWN3M";
      this.totem = "parvelta juoruamasta kaikki äidin siskon " +
          "serkun kaivinkoneen uusimmat parisuhdekuviot läpi";
    },
    vaaka() {
      this.showModal = true;
      this.title = "Vaaka 23.9.-23.10."
      this.lyric = "“Smäshiä kiltiksellä\n" +
          "Smäshiä kiltiksellä\n" +
          "Smäshiä smäshiä smäshiä kiltiksellä” (2x)\n";
      this.song = "kakkaa lumella";
      this.songLink = "https://www.youtube.com/watch?v=EybHtRks_Qs";
      this.totem = "kiltiksen smash-luola parven alla";
    },
    skorpioni() {
      this.showModal = true;
      this.title = "Skorpioni 24.10.-22.11.";
      this.lyric = "“Prujut ja mä, kiltiksellä taas illat hengaillaan. Talvi-illassa, kylmässä, itku kaikuu vaan. " +
          "On huolia, on murheita, on kiire dokaamaan. Sitten pari ännää siihen ilmestyy ja sekoittaa fuksin pään. " +
          "‘Hei lainaa fuksi sun motii!’ Mä silmiäni usko en, kun se ännä teki sen, täydellisen kellotussuorituksen.”";
      this.song = "Frontside Ollie";
      this.songLink = "https://www.youtube.com/watch?v=oNfwMepTuZ0";
      this.totem = "prujaamassa laskareita pöydän äärellä tunti " +
          "ennen deadlinea, koska viime viikolla sait aikaiseksi vain pari uutta stickeriä kaveriporukan ryhmään";
    },
    jousimies() {
      this.showModal = true;
      this.title = "Jousimies 23.11.-21.12."
      this.lyric = "“Kruunalla laskariin, ja klaavalla kiltikselle\n" +
          "Ei paina noppakramppi webOodissa\n" +
          "Kruunalla laskariin, ja klaavalla kiltikselle\n" +
          "Pian ollaan jo kohteessa, kiltisvalojen hohteessa\n" +
          "Se on joko tai, se on joko tai-ai-ai-ai\n" +
          "Se on joko tai, klaavalla kiltikselle” ";
      this.song = "Esson baariin";
      this.songLink = "https://www.youtube.com/watch?v=QpXIvD7N-cs"
      this.totem = "Vihreältä matolta potemassa eksistentiaalista kriisiä noppien, " +
          "töitten ja sosiaalisten suhteiden puutteesta.\n";
    },
    kauris() {
      this.showModal = true;
      this.title = "Kauris 22.12.- 19.1.";
      this.lyric = "“Sohvalta kiltiksen, perässä noppien. Mä sut mun messiin hakee tu-u-uun. Nyt on hallussa" +
          " kesäkurssit, kesäkurssit. U-u-uu! Me koodataan, ei jäädä hengaamaan.”";
      this.song = "Kesärenkaat";
      this.songLink = "https://www.youtube.com/watch?v=Ir36HH0VbxE";
      this.totem = "hubi - käyt kiltiksellä viemässä pelkästään " +
          "takin, koska eihän kukaan vietä kiltiksellä koko päivää";
    },
    vesimies() {
      this.showModal = true;
      this.title = "Vesimies 20.1.-19.2.";
      this.lyric = "“Hei kiltis-kuppi\n" +
          "Olet kadonnut keskellä yötä\n" +
          "Kahvikuppisi kilinä vaimeni lähtösi myötä\n" +
          "Hei Hubin-tiskikone\n" +
          "Jäi kuppini sisällesi yöksi\n" +
          "Sinun pelkään eksyvän fyssan kiltikselle”";
      this.song = "Dodo sorsa";
      this.songLink = "https://www.youtube.com/watch?v=z_ANej3EpbU";
      this.totem = "Keräämässä muitten likaisia kuppeja, koska aikuiset ihmiset eivät ilmeisesti itse osaa pitää omista " +
          "tiskeistään huolta. (Suuret kiitokset kuppitoimareille ja muille jotka tätä virkaa hoitavat! <3)";
    },
    kalat() {
      this.showModal = true;
      this.title = "Kalat 20.2.-20.3.";
      this.lyric = "“Mul on ollu lintuja, vähän kaikenlaisia\n" +
          "Mut vaan yksi jallupöllö\n" +
          "Tapasin sen vuosi sitten, koitin tarjoo sille bissen\n" +
          "Se mulle nauroi vaan ja mä tajusin\n" +
          "Sille ei kelpaa siiderit, ei mitkään litkumikserit\n" +
          "Otetaan jotain vahvempaa jallupöllön kaa”";
      this.song = "Jallutyttö - Mikään muu kappale ei vain maist- eikun tunnu samalta.";
      this.songLink = "https://www.youtube.com/watch?v=5iIYn_FAzQM";
      this.totem = "Pelaamassa jallupöllöä kiltiksen ikkunoiden takana fyssan terassilla.\n";
    },
    oinas() {
      this.showModal = true;
      this.title = "Oinas 21.3.-19.4.";
      this.lyric = " “Löysin kesätyöpaikan, nimi oli näin löydät sen laitoin mun kuumimman CV:n. Nyt HR tyypit mut" +
          " valkkaa, pomo mun LinkedIniä stalkkaa. Pomolta mailia mä sain. Hän kirjoitti: “Hello my sunshine!”";
      this.song = "Snäppäillään";
      this.songLink = "https://www.youtube.com/watch?v=GyUa5xlRUuo";
      this.totem = "hajoamassa etätöihin kiltiksen sohvalla";
    },
    harka() {
      this.showModal = true;
      this.title = "Härkä 20.4.-20.5.";
      this.lyric = "“Tää kilta menee putkeen,\n" +
          "Mouhot puhuu politiikkaa,\n" +
          "Fuksit istuu ihan hiljaa,\n" +
          "Pythonia harjoittelee\n" +
          "Tää kilta menee putkeen,\n" +
          "Mouhot vetää energiajuomaa,\n" +
          "Fuksi itkee,\n" +
          "Oma iso häntä rauhoittelee”\n";
      this.song = "Retropopin Tää ilta";
      this.songLink = "https://www.youtube.com/watch?v=b3gXKFDOUCw";
      this.totem = "ympäri kiltistä assaroimassa nuoremmille sukupolville milloin mitäkin kurssia";
    },
    kaksonen() {
      this.showModal = true;
      this.title = "Kaksonen 21.5.-20.6.";
      this.lyric = " Muistat, kuinka pienenä fuksina nousit setätien kanssa bussiin (ei sille takapenkille) ja " +
          "matkasit kohti tuntematonta. Koit eksistentiaalisen kriisin, kun edessäsi siintyi huikean kokoinen Turku. " +
          "MamelukkiTurku.( Setäti: )“Voi hiivatti!”";
      this.song = "Mamelukkikalaremix";
      this.songLink = "https://www.youtube.com/watch?v=puBVRHEDkxM";
      this.totem = "makaamassa vihreällä matolla potemassa eksistentiaalista kriisiä";
    },
    rapu() {
      this.showModal = true;
      this.title = "Rapu 21.6.-22.7.";
      this.lyric = "“Kun kolme tupsuu tuulettumaan pääsee kerrankin, on vauhti siinä sellainen jää toiseks sedätkin. " +
          "Ja saati sitten läksyt joita tarjolla ain on. Ne omaan arvoon jäädä saavat niinkuin katsomoon. Me pelattiin " +
          "kuin ännät ihan kaljakroketkin, ja hetki pantiin lekkeriks kun alfan pyydystin. Ei ollut siitä mihinkään, " +
          "ei kestänyt se kai, kun yllättäen yhden sijaan kolme tytyy sai.” ";
      this.song = "Naisten kaljailta ";
      this.songLink = "https://www.youtube.com/watch?v=ayC0A-OjJEA";
      this.totem = "makaamassa vakavassa kehon myrkytystilassa edellispäivän rennon kimble-pelin jäljiltä fatboyn päällä";
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>