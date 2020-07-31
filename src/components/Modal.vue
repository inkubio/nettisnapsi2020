<template>
    <div id="modal">
      <div id="container">
        <div id="header">
          <div />
          <div id="title">
            <slot name="header"></slot>
          </div>
          <div id="close-container" @click="$emit('close')">
            <icon-base id="close" icon-name="close">
              <close-icon />
            </icon-base>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
</template>

<script>
import IconBase from "@/components/IconBase";
import CloseIcon from "@/components/icons/CloseIcon";
export default {
  name: "Modal",
  components: {IconBase, CloseIcon},
}
</script>

<style scoped>
#modal {
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
  right: 5%;
  margin: 0 auto;
  position: absolute;
  max-width: 90%;
  width: 600px;
  background-color: white;
  border-radius: 45px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
#header {
  width: 100%;
  height: 3em;
  display: inline-grid;
  grid-template-rows: 100%;
  grid-template-columns: 50px auto 50px;
  text-align: center;
}
#container {
  margin: 10px;
}
#close {
  max-width: 2em;
}
#close-container {
  width: 2.5em;
  height: 2.5em;
  margin: 5px;
}
#close-container:hover {
  border-radius: 3em;
  background-color: rgba(0,0,0,0.1);
}
#title {
  align-self: center;
  place-self: center;
}
</style>