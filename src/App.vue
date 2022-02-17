<template>
  <div id="app">
    <!-- <b-tabs content-class="mt-3">
      <b-tab title="Panel" active class="wallet-tab"><Panel /></b-tab>
      <b-tab title="Wallet" class="wallet-tab"><Wallet /></b-tab>
    </b-tabs> -->
    <div class="app-head">
      <div class="home-logo">
        <img
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf66a79b874bc832206517dc6121f4ccbc4223e9825c8c0681c2a3b0a5ed79388"
        />
      </div>
      <div class="home-title-name">Michael Huang</div>
      <HomeIcon class="home-icon" />
    </div>
    <StarTabs tabs-type="popup">
      <Pane :label="'One'" name="1"> <Panel /></Pane>
      <Pane :label="'Two'" name="2"><SendToken /></Pane>
      <Pane :label="'Four'" name="4"><div></div></Pane>
    </StarTabs>
  </div>
</template>

<script>
import SendToken from "./content/components/SendToken.vue";
import Wallet from "./Wallet.vue";
import Panel from "./Panel.vue";
import StarTabs from "./content/components/StarTabs.vue";
import Pane from "./content/components/TabPane.vue";
import HomeIcon from "./assets/icons/home_tab.svg";
export default {
  components: {
    Wallet,
    Panel,
    StarTabs,
    Pane,
    HomeIcon,
    SendToken,
  },
  data() {
    return {
      toogle: false,
    };
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.app-head {
  padding: 9px 13px 9px 13px;
  height: 42px;
  background: #f9f9f9;
  border-bottom: 1px solid rgba(220, 220, 220, 0.5);
  display: flex;
  .home-logo {
    width: 24px;
    height: 23px;
  }
  .home-title-name {
    width: 103px;
    /* margin-right: 30px; */
    text-align: left;
    white-space: nowrap;
    font-size: 16px;
    font-family: Arial-BoldMT, Arial;
    font-weight: normal;
    color: #333333;
    margin: 4px 0 0 6px;
    height: 17px;
    line-height: 16px;
  }
  .home-icon {
    height: 15px;
    width: 17px;
    z-index: 11;
    position: absolute;
    left: 276px;
    top: 13px;
  }
}
.wallet-tab {
  width: 360px;
  height: 541px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  overflow: hidden;
}

@keyframes redraw {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.99;
  }
}
html {
  animation: redraw 1s linear infinite;
}
</style>
