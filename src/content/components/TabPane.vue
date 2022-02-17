<template>
  <div :class="getCls()">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Pane",
  props: {
    name: {
      type: String,
    },
    label: {
      type: String,
      default: "",
    },
    isSocialConnect: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      show: true,
    };
  },
  watch: {
    label() {
      this.updateNav();
    },
  },
  mounted() {
    this.updateNav();
  },
  methods: {
    updateNav() {
      this.$parent.updateNav();
    },
    // 决定pane是否显示
    getCls() {
      return [
        "pane",
        {
          "pane-active": this.show,
        },
      ];
    },
  },
};
</script>

<style scoped>
.pane {
  /* height: 0; */
  /* width: 100%; */
  display: none;
  /* transition: all 0.5s ease-in; */
  /* transform: translateX(-100%); */
}

.pane-active {
  display: block;
  /* transform: translateX(0); */
}
</style>
