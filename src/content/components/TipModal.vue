
<template>
  <div class="tip-modal">
    <SucceedIcon class="succeed-icon" />
    <CloseIcon class="tip-modal-close-btn" @click="$emit('close')" />
    <div class="tip-content-text">
      Please post content to verify your social account
    </div>
    <OkBtnIcon class="ok-btn-icon" @click="$emit('ok')" />
  </div>
</template>

<script>
import CloseIcon from "../../assets/icons/btn_close.svg";
import OkBtnIcon from "../../assets/icons/btn_ok.svg";
import SucceedIcon from "../../assets/icons/icon_succeed.svg";
export default {
  name: "TipModal",
  components: {
    CloseIcon,
    OkBtnIcon,
    SucceedIcon,
  },
};
</script>

<style lang="scss" scoped>
.tip-modal {
  width: 204px;
  height: 144px;
  background: #ffffff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  text-align: center;
  /* position: absolute; */
  position: fixed;
  top: 35%;
  left: 20%;
  .succeed-icon {
    margin-top: 4px;
    width: 68px;
    height: 64px;
  }
  .ok-btn-icon {
    margin-top: 12px;
    width: 90px;
    height: 19px;
    cursor: pointer;
  }
  .tip-content-text {
    width: 167px;
    height: 34px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 17px;
    white-space: wrap;
    margin-left: 19px;
  }
  .tip-modal-close-btn {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 8px;
    right: 11px;
    cursor: pointer;
  }
}
</style>
