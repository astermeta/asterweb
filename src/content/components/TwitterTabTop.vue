<template>
  <div class="twitter-tab-top">
    <Profile />
    <div class="profile-social-title">
      <div class="profile-social-name">Twitter</div>
      <div class="profile-more">
        <span>more</span>
        <img
          class="more-icon"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbdf80ca5d0dee4ddf83ad88331aa5251b3ba477e83f71b14953607aac81e47e1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import MoreIcon from "../../assets/icons/icon_more.svg";
export default {
  name: "TwitterTabTop",
  components: {
    Profile,
    MoreIcon,
  },
};
</script>

<style lang="scss" scoped>
.twitter-tab-top {
  width: 100%;
  /* padding: 10px 0px 8px 8px; */
  /* border: 1px solid red; */
  .profile-social-title {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
    padding-right: 9px;
    .profile-social-name {
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 17px;
    }
    .profile-more {
      height: 13px;
      font-size: 9px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 13px;
      .more-icon {
        width: 6px;
        height: 6px;
        margin-left: 2px;
      }
    }
  }
}
</style>
