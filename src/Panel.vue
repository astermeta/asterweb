<template>
  <div id="bbb" class="bottom-tab-content">
    <div class="content-social-title">
      <span class="social-text">Social</span>
      <span class="social-number"></span>
    </div>
    <StarTabs tabs-type="social" type="social">
      <Pane :label="'twitter'" name="7" :isSocialConnect="true">
        <PopupContentModal height="311" type="index">
          <TwitterTabTop slot="popup-head" />
          <TwitterTabBottom slot="popup-content" />
        </PopupContentModal>
      </Pane>
      <Pane :label="'facebook'" name="8">
        <!-- <SendToken /> -->
      </Pane>
      <Pane :label="'ins'" name="9"></Pane>
      <Pane :label="'tiktok'" name="10"></Pane>
      <Pane :label="'twitch'" name="11"></Pane>
      <Pane :label="'medium'" name="12"></Pane>
    </StarTabs>
  </div>
</template>

<script>
import StarTabs from "./content/components/StarTabs.vue";
import Pane from "./content/components/TabPane.vue";
import PopupContentModal from "./content/components/PopupContentModal.vue";
import TwitterTabTop from "./content/components/TwitterTabTop.vue";
import TwitterTabBottom from "./content/components/TwitterTabBottom.vue";

export default {
  components: {
    StarTabs,
    Pane,
    PopupContentModal,
    TwitterTabTop,
    TwitterTabBottom,
  },
  methods: {},
};
</script>

<style lang="scss">
.bottom-tab-content {
  width: 306px;
  height: 471px;
  background: #ffffff;
  padding: 7px 12px 0 12px;
  .content-social-title {
    margin-bottom: 14px;
    .social-text {
      height: 16px;
      font-size: 14px;
      font-family: ArialMT;
      color: #333333;
      line-height: 16px;
    }
    .social-number {
      margin-left: 7px;
      height: 16px;
      font-size: 14px;
      font-family: ArialMT;
      color: #c0c0c0;
      line-height: 16px;
    }
  }
}
</style>
