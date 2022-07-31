<template>
  <div class="div-both" :class="{ center, br, fill, column }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "div-both",
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
    column: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style >
.div-both {
  display: flex;
  justify-content: space-between;
}
.div-both.center {
  height: 100%;
  align-items: center;
}
.div-both.br {
  flex-wrap: wrap;
}
.div-both.fill {
  width: 100%;
}
.div-both.column {
  flex-direction: column;
}
</style>
