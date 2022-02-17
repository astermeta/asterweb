<template>
  <div class="profile-content">
    <div>
      <img
        class="avatar"
        referrerpolicy="no-referrer"
        src="../../assets/michael.jpeg"
      />
    </div>
    <div class="personal-message">
      <div class="social-name">
        <div class="social-name-text">Michael Huang</div>
        <div class="name-or-icon"></div>
        <span class="socail-email-text">&#64;michael_web3</span>
      </div>
      <div class="twitter-id">
        <div class="twitter-id-text">twitter_2359587739@aster.so</div>
        <CopyIcon class="copy-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import CopyIcon from "../../assets/icons/icon_copy.svg";
export default {
  name: "Profile",
  components: {
    CopyIcon,
  },
};
</script>

<style lang="scss" scoped>
.profile-content {
  display: flex;
  /* border: 1px solid red; */
  .avatar {
    width: 46px;
    height: 46px;
    border-radius: 23px;
  }
  .personal-message {
    margin-top: 2px;
    margin-left: 9px;
    display: flex;
    flex-direction: column;
    .social-name {
      /* border: 1px solid black; */
      display: flex;
      .social-name-text {
        font-size: 12px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
      }
      .name-or-icon {
        background-color: rgba(216, 216, 216, 1);
        border-radius: 50%;
        width: 1px;
        border: 1px solid rgba(151, 151, 151, 1);
        margin-left: 4px;
        margin-right: 3px;
      }
      .socail-email-text {
        font-size: 9px;
        margin-top:1.5px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }
    .twitter-id {
      /* border: 1px solid green; */
      margin-top: 5px;
      display: flex;
      .twitter-id-text {
        font-size: 10px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #666666;
        margin-top: 1px;
        margin-right: 4px;
      }
      .copy-icon {
        margin-top: 6px;
        height: 8px;
        width: 8px;
      }
    }
  }
}
</style>
