<template>
  <div class="div-html">
    <div class="htmlcententbox" v-html="html"></div>
  </div>
</template>
<script>
export default {
  name: "div-html",
  props: {
    html: {
      type: String,
      default: "",
    },
  },
};
</script>
<style>
.htmlcententbox {
  width: 100%;
}

.htmlcententbox p img {
  width: auto !important;
  height: auto !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain;
}

.htmlcententbox p video {
  width: auto !important;
  height: auto !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain;
}

.htmlcententbox img {
  width: auto !important;
  height: auto !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain;
}

.htmlcententbox video {
  width: auto !important;
  height: auto !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain;
}

.htmlcententbox * {
  word-break: break-word;
  max-width: 100% !important;
  width: auto !important;
}
</style>
