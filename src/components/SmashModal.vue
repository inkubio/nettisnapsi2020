<template>
  <Modal @close="$emit('close')">
    <template v-slot:header>
      <div id="titles">
        <a @click="currentLink=links[0]">SMASH</a>
        <a @click="currentLink=links[1]">SMASH MORE</a>
        <a @click="currentLink=links[2]">SMASH THE MOST</a>
      </div>
    </template>
    <iframe
        id="content"
        :src="currentLink"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "SmashModal",
  components: {Modal},
  data() {
    return {
      links: [
        "https://www.youtube-nocookie.com/embed/Q2Ax21yobJ0",
        "https://www.youtube-nocookie.com/embed/qDnaIfiH37w",
        "https://www.youtube-nocookie.com/embed/fRxIQv79XxE" ,
      ],
      currentLink: "https://www.youtube-nocookie.com/embed/Q2Ax21yobJ0",
    }
  },
  methods: {

  }
}
</script>

<style scoped>
#content {
  height: 26vh;
  width: 46.22vh;
}
#titles {
  display: flex;
  width: 90%;
  justify-content: space-between;
}
a {
  cursor: pointer;
}
a:hover {
  background-color: rgba(0,0,0,0.1);
}
</style>