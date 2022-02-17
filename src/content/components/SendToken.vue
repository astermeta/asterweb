<template>
  <div class="send-token-modal">
    <PopupContentModal>
      <div slot="head-name">Sending tokens to</div>
      <Profile slot="popup-content" />
    </PopupContentModal>
    <PopupContentModal height="280" headHeight="33" class="send-token-bottom">
      <div slot="head-name">Select asset</div>
      <TwitterTabBottom slot="popup-content" :showConnect="false" />
    </PopupContentModal>
  </div>
</template>

<script>
import PopupContentModal from "./PopupContentModal.vue";
import TwitterTabBottom from "./TwitterTabBottom.vue";
import Profile from "./Profile.vue";
export default {
  name: "SendToken",
  components: {
    PopupContentModal,
    Profile,
    TwitterTabBottom,
  },
};
</script>

<style lang="scss" scoped>
.send-token-modal {
  margin: 11px 12px 0px 12px;
  .send-token-bottom {
    margin-top: 10px;
  }
}
</style>
