<template>
  <div class="div-width" :style="'width:' + size" :class="{ over }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    size: {
      type: String,
      default: "",
    },

    over: {
      type: Boolean,
      default: false,
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
.div-width {
  flex-shrink: 0;
}
.div-width.over {
  overflow: hidden;
}
</style>
