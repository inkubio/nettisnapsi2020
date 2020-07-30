<template>
  <Modal @close="$emit('close')">
    <template v-slot:header>
      <h2>{{title}}</h2>
    </template>
    <div>
      <p>
        {{lyrics}}
      </p>
      <p>
        Toteemibiisi, jonka avulla voit päästä kiltistunnelmiin:
        <a :href="songLink">{{song}}</a>
      </p>
      <p>
        Toteemipaikka mistä sinut voisi löytää kiltikseltä: {{totem}}
      </p>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  name: "HoroscopeModal",
  components: {Modal},
  props: {
    title: String,
    lyrics: String,
    song: String,
    songLink: String,
    totem: String
  }
}
</script>

<style scoped>
p {
  max-width: 70%;
  margin: 0 auto 20px;
  font-size: 1em;
}
</style>