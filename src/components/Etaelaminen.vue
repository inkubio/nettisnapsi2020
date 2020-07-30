<template>
  <Article class="background">
    <template v-slot:header>
      Etäeläminen
    </template>
    <template v-slot:content>
      <div id="wrapper">
        <div id="text">
          <p><span id="quote">“Tulevaisuudessa internet tulee ratkaisemaan kaikki ihmisten ongelmat.”</span> -Platon</p>
          <p>
            Nysse lähtee… Kiitos koronajumalille! ihmiset olivat dataa, mutta teeskentelivät olevansa jotain muuta!
            Nyt ne ovat dataa ja teeskentelevät etänä olevansa jotain muuta! Vihdoin saan olla rauhassa!
          </p>
          <p>
            Menen youtubeen ja nautin yksin. Mitä minulle aina manattiin? Musiikkia? Sitähän se on! Minun korvissa kuuluu
            beethoovenia! Oho! Kaveri lähetti viestin. Poistan hänet… Nykyään olen kykenevä poistamaan ihmisiä napin
            painalluksella… Olen megalomaaninen!
          </p>
          <p>
            Elektronisesti elän elämääni ilman rajoitteita… Teen tiskit ja hygienian… jopa syön… koska voin,
            enkä koska ulkomaailma minua pakottaa. Voimani kasvavat jokaisella henkäyksellä rekkitangolla ja
            nyrkkeilyhanskoilla… Jokainen hikipisara vie ulkomaailmaa minua kauemmas… Se pelkää minua.
          </p>
          <p>
            Kaljakaverikseni tarvitsen vain kalsarit… Onnellisuuttani ei kukaan voi estää! Paitsi minä! Olenko siihen
            itsekään tarpeeksi vahva? Harrastan mustaa magiaa, joka mahdollistaa tuon testaamisen! Testaan kaikki liemet!
          </p>
          <p>
            Ole hiljaa evoluutio siellä nurkassa! Mene pois ikkunasta! Niin sitä pitää! Lisäännyn itsekseni!
          </p>
          <p>
            Hei elektronikakara! Nyt pitää etäelämään oppia! Sen jälkeen kun äitisi jätti meidät,
            minun on huollettava sinut kuntoon. Älä itke! Kokkaan sinulle jotain hyvää sieninuudelia.
            Mikä siis oikeasti itkettää? Joku elektronipoika sanoi sulle pahasti hyperboliakoulussa?
            Ei hätää… Minä olen täällä… Käydään in-in-internetissä vuokraamassa sun lempparileffa ja vähän karkkia…
            Huomenna on päivä parempi.
          </p>
          <p>
            Läpäisit kaikki kokeesi? Ja nyt sinun on lähdettävä omille teillesi? Elektronilapset kulkevat niin nopeasti.
            Pidähän itsesi etämiehenä! Ja irti pysy pahoista! Onnea… Rakastan sua aina…
          </p>
          <p>
            Nysse lähtee! Kiitos covid-29-jumalille! Ihmiset olivat dataa, mutta teeskentelivät olevansa jotain muuta!
            Nyt ne ovat dadaa ja teeskentelevät etänä olevansa jotain muuta! Vihdoin saan olla rauhassa!
          </p>
          <p>
            Menen youtubeen ja ajattelen yksin. Mitä minulle manattiin? En muista… Minun korvissani kuuluu beethoovenia.
            Kaveri ei lähettänyt viestiä… Poistin hänet… Olin megalomaaninen.
          </p>
          <p id="end">
            Etälelämä on… 3/5 very nice!
          </p>
        </div>
      </div>
    </template>
  </Article>
</template>

<script>
import Article from "@/components/Article";
export default {
name: "Etaelaminen",
  components: {Article}
}
</script>

<style scoped>
#text {
  font-size: 1.2rem;
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  padding: 4px;
  color: black;
  background-color: rgba(255,255,255,0.4);
  border-radius: 10px;

}
#quote {
  font-style: italic;
}
p {
  margin-top: 0.5rem
}
#end {
}
.background {
  background-image: url("../assets/Nettisnapsi.png");
  object-fit: fill;
  background-position: 48% 40%;
}
#wrapper {
  padding-bottom: 15px;
}
</style>