<template>
  <div
    class="div-card"
    :style="
      'background:' +
      bg +
      ';border-radius:' +
      radius +
      ';border:' +
      border +
      '; box-shadow:' +
      shadow +
      ';'
    "
    :class="{ hidden, blur }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "div-card",
  components: {},
  props: {
    bg: {
      type: String,
      default: "#1A1A1A",
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    blur: {
      type: Boolean,
      default: false,
    },
    radius: {
      type: String,
      default: "20vw",
    },
    border: {
      type: String,
      default: "",
    },
    shadow: {
      type: String,
      default: "0",
    },
  },
};
</script>
<style>
.div-card {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
}

.div-card.hidden {
  overflow: hidden;
}
.div-card.blur {
  backdrop-filter: blur(10px);
}
</style>
