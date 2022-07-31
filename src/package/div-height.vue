<template>
  <div
    class="div-height"
    :style="'height:' + size + ';background: ' + bg + ';'"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "div-height",
  components: {},
  props: {
    size: {
      type: String,
      default: "",
    },
    bg: {
      type: String,
      default: "transparent",
    },
  },
  data() {
    return {};
  },
  created() {},

  methods: {},
};
</script>
<style>
.div-height {
  width: 100%;
}
</style>
