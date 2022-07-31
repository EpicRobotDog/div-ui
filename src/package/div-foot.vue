<template>
  <div class="div-foot">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "div-foot",
  props: {
    center: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.div-foot {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1;
}
</style>
