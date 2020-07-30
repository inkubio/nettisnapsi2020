<template>
  <div id="article">
    <header id="header">
      <div id="back-container" @click="goBack">
        <icon-base id="back" icon-name="back">
          <back-icon />
        </icon-base>
      </div>
    </header>
    <article>
      <h2>{{title}}</h2>
    </article>
  </div>
</template>

<script>

import IconBase from "@/components/IconBase";
import BackIcon from "@/components/icons/BackIcon";

export default {
name: "Article",
  components: {IconBase, BackIcon},
  props: {
    title: String,
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
#header {
  font-family: monospace;
  display: flex;
  width: 100%;
  background: rgb(0, 166, 83);
  height: 4em;
  align-items: center;
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
</style>