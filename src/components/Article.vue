<template>
  <div id="article">
    <header id="header">
      <div id="back-container" @click="goBack">
        <icon-base id="back" icon-name="back">
          <back-icon />
        </icon-base>
      </div>
      <h1>
        NettiSʸnapsi
      </h1>
    </header>
    <article id="main">
      <h2 id="title"><slot name="header"></slot></h2>
      <slot name="content"></slot>
    </article>
  </div>
</template>

<script>

import IconBase from "@/components/IconBase";
import BackIcon from "@/components/icons/BackIcon";

export default {
name: "Article",
  components: {IconBase, BackIcon},
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
#article {
  min-height: 100vh;
}
#header {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 25px auto 25px;
  width: 100%;
  background: rgba(0, 166, 83, 1);
  height: 4em;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
#back {
  max-width: 2em;
}
#back-container {
  width: 2.5em;
  height: 2.5em;
  margin: 5px;
}
#back-container:hover {
  border-radius: 3em;
  background-color: rgba(0,0,0,0.1);
}
#title {
  margin: 0.5em auto 1em;
  border-radius: 2em;
  width: 20%;
  background-color: rgba(255,255,255,0.5);
}
#main {
  height: 90%;
}
</style>
