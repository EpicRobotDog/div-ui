<template>
  <div class="div-right" :class="{ center, br, fill }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "div-right",
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
.div-right {
  display: flex;
  justify-content: flex-end;
}
.div-right.center {
  height: 100%;
  align-items: center;
}
.div-right.br {
  flex-wrap: wrap;
}
.div-right.fill {
  width: 100%;
}
</style>
