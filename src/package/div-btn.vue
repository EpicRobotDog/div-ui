<template>
  <div class="div-btn">
    <div class="btn_box">
      <button
        @click="do_fun"
        class="anBtn"
        :class="{ auto }"
        :disabled="disabled"
        :style="
          'background: ' +
          bg +
          ';color:' +
          color +
          ';border-radius:' +
          radius +
          ';border:' +
          border +
          ';height:' +
          height +
          ';line-height:' +
          height +
          ';'
        "
      >
        <slot></slot>
      </button>
    </div>
  </div>
</template>
    <script>
export default {
  name: "div-btn",
  props: {
    auto: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "#fff",
    },
    bg: {
      type: String,
      default: "linear-gradient(270deg, #EA3501 0%, #FE7729 100%)",
    },
    radius: {
      type: String,
      default: "12vw",
    },
    height: {
      type: String,
      default: "12vw",
    },
    border: {
      type: String,
      default: "",
    },
    fun: {
      type: Function,
      default: () => {
        return Function;
      },
    },
  },
  data() {
    return {
      disabled: false,
    };
  },
  created: function () {},
  methods: {
    do_fun() {
      if (this.disabled) {
        return false;
      }
      this.disabled = true;
      console.log("内部调用了", this.fun);
      // this.fun()
      this.$emit("fun");
    },
  },
};
</script>
    <style>
.div-btn {
}

.div-btn .auto {
  width: 100%;
  margin: 0 auto;
}
.div-btn .btn_box {
  box-sizing: border-box;
  text-align: center;
}

.div-btn .anBtn {
  padding: 0;
  color: #fff;
  font-size: 4vw;
  transform: scale(1);
  transition: all 0.25s;
}

.div-btn .anBtn:active {
  transform: scale(0.9);
  opacity: 0.9;
}

.div-btn .anBtn::after {
  border: 0;
}

.div-btn .anBtn[disabled] {
  transform: scale(1);
  opacity: 1;
}

.div-btn .anBtn[disabled]:active {
  transform: scale(0.9);
  opacity: 0.5;
}

.div-btn .anBtn[disabled]:not([type]) {
  /* transform: scale(0.9); */
  opacity: 0.5;
}
</style>
