<template>
  <div class="popup-content-modal" :style="computedStyle">
    <div
      class="popup-content-head"
      :class="computedHeadClass"
      :style="computedHeadStyle"
    >
      <slot name="popup-head"></slot>
      <div class="head-title">
        <slot name="head-name"></slot>
      </div>
    </div>
    <div class="head-content-line"></div>
    <div class="popup-content" :class="computedContentClass">
      <slot name="popup-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupContentModal",
  props: {
    width: String,
    height: String,
    headHeight: String,
    type: {
      type: String,
      default: "default",
    },
  },
  computed: {
    computedStyle() {
      let style = {};
      if (this.width) {
        style.width = this.width + "px";
      }
      if (this.height) {
        style.height = this.height + "px";
      }
      return style;
    },
    computedHeadClass() {
      let clazzes = [];
      if (this.type === "index") {
        clazzes.push("popup-content-head-" + this.type);
      }
      return clazzes;
    },
    computedHeadStyle() {
      let style = {};
      if (this.headHeight) {
        style.height = this.headHeight + "px";
      }
      return style;
    },
    computedContentClass() {
      let clazzes = [];
      if (this.type === "index") {
        clazzes.push("popup-content-" + this.type);
      }
      return clazzes;
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-content-modal {
  width: 282px;
  height: 102px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  .popup-content-head {
    height: 35px;
    padding: 8px 0px 0px 8px;
  }
  .popup-content-head-index {
    height: 89px;
    padding: 10px 0px 8px 8px;
  }
  .head-title {
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
  }
  .head-content-line {
    width: 100%;
    height: 1px;
    background: #dcdcdc;
  }
  .popup-content {
    padding: 10px 0px 0px 8px;
  }
  .popup-content-index {
    padding: 0px 0px 0px 0px;
  }
}
</style>
