<template>
  <div class="container">
    <input
      v-bind:type="this.inType"
      :placeholder="placehold"
      :pattern="this.reg"
      required
    />
  </div>
</template>

<script>
export default {
  props: ["inType", "placehold", "reg"],

  methods: {
    isPhone() {
      const newLocal = "tel";
      return this.inType === newLocal;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("./style/TextFields.scss");
</style>
