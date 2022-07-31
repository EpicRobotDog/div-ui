<template>
  <div
    class="div-son"
    :style="
      'right: ' +
      right +
      ';top: ' +
      top +
      ';bottom:' +
      bottom +
      ';left:' +
      left +
      ';'
    "
    :class="{ fill, auto }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "div-son",
  props: {
    right: {
      type: String,
    },
    top: {
      type: String,
    },
    bottom: {
      type: String,
    },
    left: {
      type: String,
    },
    fill: {
      type: Boolean,
      default: false,
    },
    auto: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.div-son {
  position: absolute;
  z-index: 1;
}
.div-son.fill {
  width: 100%;
}
.div-son.auto {
  margin: 0 auto;
  left: 0;
  right: 0;
}
</style>
