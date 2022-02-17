<template>
  <div class="div-tab-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TabContent"
}
</script>

<style lang="scss" scoped>
.div-tab-content {
  /* padding: 10px 15px; */

  padding: 0 15px 0px 15px;
  max-height: 406px;
  /* max-height: 424px; */
  overflow-y: auto;

  /* overflow: auto; */
  /* border: 1px solid red; */
}
.div-tab-content::-webkit-scrollbar {
  display: none;
  /* Chrome Safari */
}
.div-tab-content-history {
  padding: 0 0px 0px 0px;
}
</style>
