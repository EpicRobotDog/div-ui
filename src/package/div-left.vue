<template>
  <div class="div-left" :class="{ center, br, fill }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "div-left",
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
  },
};
</script>
<style>
.div-left {
  display: flex;
  justify-content: flex-start;
}
.div-left.center {
  height: 100%;
  align-items: center;
}
.div-left.br {
  flex-wrap: wrap;
}
.div-left.fill {
  width: 100%;
}
</style>
