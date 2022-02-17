<template>
  <!-- :class="{ 'tabs-border': showBorder }" -->
  <div class="tabs" :class="computedTabClass">
    <div class="tabs-content-popup" v-if="tabsType === 'popup'">
      <slot />
    </div>
    <div :class="'tabs-' + getTabsType() + '-bar'">
      <div
        v-for="(item, index) in navList"
        :class="tabCls(item)"
        @click="handleChange(index)"
      >
        <div v-if="tabsType === 'popup'">
          <div v-if="item.label === 'One'" class="popup-bottom-label">
            <PopupBottomActiveOne v-if="isOneActive" />
            <PopupBottomOne v-else />
          </div>
          <div v-else-if="item.label === 'Two'" class="popup-bottom-label">
            <PopupBottomActiveTwo v-if="isTwoActive" />
            <PopupBottomTwo v-else />
          </div>
          <div v-else-if="item.label === 'Three'" class="popup-bottom-label">
            <PopupBottomActiveThree v-if="isThreeActive" />
            <PopupBottomThree v-else />
          </div>
          <div v-else-if="item.label === 'Four'" class="popup-bottom-label">
            <PopupBottomActiveFour v-if="isFourActive" />
            <PopupBottomFour v-else />
          </div>
        </div>
        <div v-else-if="tabsType === 'social'">
          <div
            v-if="item.label === 'twitter'"
            class="social-tab-label"
            :class="computedSocialTabLabel(item.isSocialConnect)"
          >
            <TwitterLogo />
          </div>
          <div
            v-if="item.label === 'facebook'"
            class="social-tab-label"
            :class="computedSocialTabLabel(item.isSocialConnect)"
          >
            <FaceBookLogo />
          </div>
          <div
            v-else-if="item.label === 'ins'"
            class="social-tab-label"
            :class="computedSocialTabLabel(item.isSocialConnect)"
          >
            <img
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbf7cd812277e2fb9a9cbd890051a51d231094ff853468914b1c13db8942d18fb"
            />
            <!-- <InsLogo /> -->
          </div>
          <div
            v-else-if="item.label === 'tiktok'"
            class="social-tab-label"
            :class="computedSocialTabLabel(item.isSocialConnect)"
          >
            <TikTokLogo />
          </div>
          <div
            v-else-if="item.label === 'twitch'"
            class="social-tab-label"
            :class="computedSocialTabLabel(item.isSocialConnect)"
          >
            <!-- <TwitchLogo  /> -->
            <div class="social-tab-label-img five">
              <img
                class="img-five"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng23daa37f709d3ee9572abf651fd312c557e82dbdcae01194f4d9d36c907341de"
              />
            </div>
          </div>

          <div
            class="social-tab-label"
            v-else-if="item.label === 'medium'"
            :class="computedSocialTabLabel(item.isSocialConnect)"
          >
            <MediumLogo />
          </div>
        </div>
        <div v-else-if="tabsType === 'brief'">{{ item.label }}</div>
        <!-- <span
          v-if="ifShowClose(item)"
          class="close icon"
          @click.stop="closeTab(index)"
        /> -->
      </div>
    </div>
    <div :class="'tabs-content-' + getTabsType()" v-if="tabsType !== 'popup'">
      <slot />
    </div>
  </div>
</template>

<script>
import PopupBottomOne from "../../assets/icons/bottom_tab1.svg";
import PopupBottomActiveOne from "../../assets/icons/bottom_tab1_active.svg";
import PopupBottomTwo from "../../assets/icons/bottom_tab2.svg";
import PopupBottomActiveTwo from "../../assets/icons/bottom_tab2_active.svg";
import PopupBottomThree from "../../assets/icons/bottom_tab3.svg";
import PopupBottomActiveThree from "../../assets/icons/bottom_tab3_active.svg";
import PopupBottomFour from "../../assets/icons/bottom_tab4.svg";
import PopupBottomActiveFour from "../../assets/icons/bottom_tab4_active.svg";
import TwitterLogo from "../../assets/icons/logo_twitter.svg";
import TikTokLogo from "../../assets/icons/logo_tiktok.svg";
import MediumLogo from "../../assets/icons/logo_medium.svg";
import FaceBookLogo from "../../assets/icons/logo_facebook.svg";
export default {
  name: "StarTabs",
  components: {
    PopupBottomOne,
    PopupBottomActiveOne,
    PopupBottomTwo,
    PopupBottomActiveTwo,
    PopupBottomThree,
    PopupBottomActiveThree,
    PopupBottomFour,
    PopupBottomActiveFour,
    TwitterLogo,
    TikTokLogo,
    MediumLogo,
    FaceBookLogo,
  },
  data() {
    return {
      defType: ["tab", "card", "card2", "brief", "popup", "social"],
      currentValue: this.value,
      showBorder: this.border,
      navList: [],
      isOneActive: true,
      isTwoActive: false,
      isThreeActive: false,
      isFourActive: false,
    };
  },
  props: {
    value: {
      type: [String, Number],
    },
    border: {
      type: Boolean,
      default: false,
    },
    tabsType: {
      type: String,
      default: "tab",
    },
    fontSize: {
      type: [String, Number],
      default: 16,
    },
    fontColor: {
      type: String,
      default: "#000000",
    },
  },
  computed: {
    computedTabClass() {
      let clazzes = [];
      if (this.tabsType === "popup") {
        clazzes.push("tabs-container-" + this.tabsType);
      }
      return clazzes;
    },
  },
  watch: {
    value: function (val) {
      this.currentValue = val;
    },
    currentValue: function () {
      this.updateStatus();
    },
  },

  methods: {
    computedSocialTabLabel(isSocialConnect) {
      let clazzes = [];
      debugger;
      if (isSocialConnect) {
        clazzes.push("social-tab-label-connect");
      }
      return clazzes;
    },
    tabCls: function (item) {
      var active = "";
      var tabsType = this.getTabsType();
      var tabsBaseClass = "tabs-" + tabsType;
      debugger;
      if (item.name === this.currentValue) {
        active = "tabs-" + tabsType + "-active";
      }

      return [tabsBaseClass, active];
    },
    getTabs() {
      // 通过遍历子组件，得到所有的pane组件
      return this.$children.filter(function (item) {
        return item.$options.name === "Pane" || item.$options.name === "pane";
      });
    },
    updateNav() {
      this.navList = [];
      var _this = this;
      this.getTabs().forEach(function (pane, index) {
        _this.navList.push({
          label: pane.label,
          name: pane.name || index,
          isSocialConnect: pane.isSocialConnect,
          closable: pane.closable,
        });
        if (!pane.name) {
          pane.name = index;
        }
        if (index == 0) {
          if (!_this.currentValue) {
            _this.currentValue = pane.name || index;
          }
        }
      });
      this.updateStatus();
    },
    updateStatus() {
      var _this = this;
      // 显示当前选中的tab对应的pane组件
      _this.getTabs().forEach(function (tab) {
        tab.show = tab.name === _this.currentValue;
        if (_this.tabsType === "popup") {
          if (_this.currentValue === "1") {
            debugger;
            _this.isOneActive = true;
            _this.isTwoActive = false;
            _this.isThreeActive = false;
            _this.isFourActive = false;
          } else if (_this.currentValue === "2") {
            _this.isOneActive = false;
            _this.isTwoActive = true;
            _this.isThreeActive = false;
            _this.isFourActive = false;
          } else if (_this.currentValue === "3") {
            _this.isOneActive = false;
            _this.isTwoActive = false;
            _this.isThreeActive = true;
            _this.isFourActive = false;
          } else if (_this.currentValue === "4") {
            _this.isOneActive = false;
            _this.isTwoActive = false;
            _this.isThreeActive = false;
            _this.isFourActive = true;
          }
        }
        // return
      });
    },
    handleChange: function (index) {
      var nav = this.navList[index];
      var name = nav.name;
      // 更新当前选择的tab
      this.currentValue = name;
      // 更新value
      this.$emit("input", name);
    },
    ifShowClose(item) {
      // 是否显示关闭标签按钮
      return item.closable;
    },
    // 点击关闭按钮触发的事件
    closeTab(index) {
      // console.log(this.navList[index].name, this.currentValue);
      // 如果关闭的是当前选择的tab，则将currentValue转到前一个tab
      if (this.navList[index].name == this.currentValue) {
        let toIndex = index - 1;
        toIndex = toIndex >= 0 ? toIndex : this.navList.length + toIndex;
        console.log(toIndex);
        this.currentValue = this.navList[toIndex].name;
      }
      // 关闭当前标签页
      this.navList.splice(index, 1);
    },
    // 根据组件属性tabsType 设置tabs头部样式
    getTabsType() {
      if (this.$data.defType.indexOf(this.tabsType) === -1) {
        return "tab";
      }
      return this.tabsType;
    },
    // 根据组件属性fontSize 设置tab 字体大小和颜色
    getTabFontStyle() {
      if (!/^#[0-9a-fA-F]{6}$/.test(this.fontColor)) {
        this.fontColor = "#000000";
      }
      if (!/^[1-3][0-9]$/.test(this.fontSize) || this.fontSize < 12) {
        this.fontSize = 16;
      }
      return "font-size: " + this.fontSize + "px; color: " + this.fontColor;
    },
  },
};
</script>
<style lang="scss" scoped>
/* [v-cloak] {
  display: none;
} */

.tabs {
  /* border: 1px solid red; */
}
.tabs-container-popup {
  /* width: 306px;
  height: 471px;
  background: #ffffff; */
}
/* .tabs-border {
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #e6e6e6;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
}
.tabs-tab-bar:after {
  content: "";
  width: 100%;
  height: 1px;
  display: block;
  margin-top: -1px;
  background: #d7dde4;
} */
/* .tabs-tab {
  cursor: pointer;
  padding: 6px 16px;
  margin-right: 6px;
  background: #fff;
  position: relative;
  display: inline-block;
  border: 1px solid #d7dde4;
} */
/* .tabs-tab-active {
  color: #3399ff;
  border-top: 1px solid #3399ff;
  border-bottom: 1px solid #fff;
}
.tabs-tab-active:before {
  content: "";
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  display: block;
  position: absolute;
  background: #3399ff;
} */

.tabs-popup-bar {
  width: 282px;
  height: 40px;
  border-radius: 16px;
  padding: 8px 20px 8px 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.24);
  z-index: 99999999;
  position: absolute;
  left: 12px;
  top: 460px;
  display: flex;
  justify-content: space-between;
}
.tabs-popup {
  /* width: 120px; */
  cursor: pointer;
  /* position: relative; */
  display: inline-block;
}
.popup-bottom-label {
  width: 28px;
  height: 22px;
}
.tabs-social-bar {
  display: flex;
  justify-content: space-between;
}
.tabs-social {
  cursor: pointer;
}
.tabs-social-active:after {
  content: "";
  margin: 2px 6px 0px 10px;
  height: 3px;
  width: 20px;
  display: block;
  background: #fec80c;
  border-radius: 2px;
}
.social-tab-label {
  width: 42px;
  height: 42px;
  border-radius: 13px;
  border: 1px solid #fe670c;
  text-align: center;
  padding: 2px;
  .social-tab-label-img {
    width: 36px;
    height: 36px;
    border-radius: 11px;
    text-align: center;
  }
  .five {
    background: rgba(144, 71, 255, 1);
    padding-top: 6px;
  }
}
.social-tab-label-connect {
  border: 1px solid #70d420;
}
.tabs-content-social{
  padding-top: 8px;
}
/*brief 风格的tabs 样式 start*/
.tabs-brief-bar:after {
  content: "";
  width: 100%;
  height: 1px;
  display: block;
  /* margin-top: -1px; */
  background: #f1f1f1;
}
.tabs-brief {
  height: 35px;
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  text-align: center;
  color: #808080;
  line-height: 35px;
  width: 120px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  /* border: 1px solid blue; */
}
.tabs-brief-active {
  border-top: none;
  color: #202020 !important;
  /* border-bottom: 1px solid #f1f1f1; */
}
.tabs-brief-active:after {
  content: "";
  left: 0;
  right: 0;
  height: 2px;
  /* bottom: -3px; */
  display: block;
  position: absolute;
  background: #8d66ff;
}
.tabs-content-brief {
  /* min-height: 100px;*/
  max-height: 434px;
  overflow-y: auto;
  padding: 0px 15px 15px 15px;
  /* border: 1px solid blueviolet; */
}
.tabs-content-brief::-webkit-scrollbar {
  display: none;
  /* Chrome Safari */
}
/*brief 风格的tabs 样式 end*/

/*card 风格的tabs 样式 start*/
.tabs-card-bar {
  background: #f1f1f1;
}
.tabs-card {
  cursor: pointer;
  padding: 8px 16px;
  position: relative;
  display: inline-block;
}
.tabs-card-active {
  font-weight: 800;
  color: #3399ff !important;
}
/*card 风格的tabs 样式 end*/

/*card2 风格的tabs 样式 start*/
.tabs-card2-bar {
  background: #f1f1f1;
}
.tabs-card2 {
  cursor: pointer;
  padding: 8px 16px;
  position: relative;
  display: inline-block;
}
.tabs-card2-active {
  font-weight: 800;
  background: #ffffff;
}
/*card 风格的tabs 样式 end*/

/* 关闭按钮样式 start*/
.close.icon {
  width: 11px;
  height: 11px;
  color: #000;
  margin-left: 5px;
  border-radius: 50%;
  position: relative;
  display: inline-block;
}
.close.icon:hover {
  background: #eee;
}
.close.icon:before {
  content: "";
  top: 5px;
  width: 11px;
  height: 1px;
  position: absolute;
  background-color: currentColor;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.close.icon:after {
  content: "";
  top: 5px;
  width: 11px;
  height: 1px;
  position: absolute;
  background-color: currentColor;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* 关闭按钮样式 end*/
</style>
