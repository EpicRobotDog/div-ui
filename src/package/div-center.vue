<template>
  <div
    class="div-center"
    :style="'width:' + width + ';'"
    :class="{ center, br, fill }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "div-center",
  props: {
    center: {
      type: Boolean,
      default: false,
    },
    br: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "",
    },
  },
};
</script>
<style>
.div-center {
  display: flex;
  justify-content: center;
}
.div-center.center {
  height: 100%;
  align-items: center;
}
.div-center.br {
  flex-wrap: wrap;
}
.div-center.fill {
  width: 100%;
}
</style>
