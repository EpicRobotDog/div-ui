<template>
  <div class="div-dad">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "div-dad",
  props: {
    center: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.div-dad {
  position: relative;
  z-index: 1;
}
</style>
