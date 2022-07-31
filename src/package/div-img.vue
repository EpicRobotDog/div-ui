<template>
  <div
    class="div_img"
    :style="
      'height: ' +
      height +
      ';width:' +
      width +
      ';border-radius: ' +
      radius +
      ';background-image: url(' +
      src +
      ')'
    "
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "div-img",
  props: {
    src: {
      type: String,
    },
    height: {
      type: String,
      default: "10vw",
    },
    width: {
      type: String,
      default: "10vw",
    },
    radius: {
      type: String,
      default: "0 0 0 0",
    },
  },
};
</script>
<style>
.div_img {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  flex-shrink: 0;
  overflow: hidden;
}
.div_img img {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
