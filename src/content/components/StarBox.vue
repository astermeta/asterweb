<template>
  <div class="bd8 flex-col">
    <div class="section13 flex-col justify-between">
      <span class="txt12">Ending&nbsp;in</span>
      <span class="word30">12h&nbsp;34m</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarBox",
  props:{
    title: {
      type: String,
      require:true
    },
  }
};
</script>
<style lang="scss" scoped>
.bd8 {
  background-color: rgba(122, 76, 255, 0.06);
  border-radius: 4px;
  height: 29px;
  /* text-align: center; */
  padding-left: 15px;
  padding-right: 15px;
  width: 75px;
  margin: 4px 0 7px  0px;
}
.section13 {
  /* width: 40px; */
  height: 28px;
}
.txt12 {
  /* width: 40px; */
  height: 13px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 9px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 13px;
  display: block;
}
.word30 {
  /* width: 40px; */
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(96, 96, 96, 1);
  font-size: 10px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 1px;
  display: block;
}
</style>
