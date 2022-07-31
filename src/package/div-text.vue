<template>
  <div
    class="div-text"
    :style="'font-size:' + size + ';color:' + color + ';'"
    :class="{ center, left, right, one, two, three, bold }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "div-text",
  props: {
    size: {
      type: String,
      default: "4vw",
    },
    center: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#333",
    },
    line: {
      type: String,
      default: "1.5",
    },
    one: {
      type: Boolean,
      default: false,
    },
    two: {
      type: Boolean,
      default: false,
    },
    three: {
      type: Boolean,
      default: false,
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.div-text {
  color: #333;
}
.div-text.bold {
  font-weight: bold;
}
.div-text.center {
  text-align: center;
}
.div-text.left {
  text-align: left;
}
.div-text.right {
  text-align: right;
}
.div-text.one {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.div-text.two {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: normal;
  word-break: break-all;
}
.div-text.three {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-weight: normal;
  word-break: break-all;
}
</style>
