<template>
  <div class="div-padding" :style="'padding:' + padding">
    <slot></slot>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    padding: {
      type: String,
      default: "0 3vw",
    },
  },
};
</script>
<style>
.div-padding {
  box-sizing: border-box;
}
</style>
