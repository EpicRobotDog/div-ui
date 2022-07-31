<template>
  <div
    class="div_box"
    :style="'background-color: ' + bg + ';background-image: url(' + src + ')'"
  >
    <div-height :size="top"></div-height>
    <!-- 页面主体 -->
    <div class="div_body">
      <slot></slot>
    </div>
    <div-height size="12vw" v-show="foot"></div-height>
  </div>
</template>
<script>
export default {
  name: "div-box",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
    bg: {
      type: String,
      default: "#fff",
    },

    top: {
      type: String,
      default: "12vw",
    },
    foot: {
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
.div_box {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  box-sizing: border-box;
  padding: 0 !important;
  background-repeat: no-repeat;
  background-size: 100%;
}
.div_box.div_body {
  width: 100%;
  height: auto;
}
</style>
