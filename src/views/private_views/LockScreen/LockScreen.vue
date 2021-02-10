<template>
  <div id="lock-screen" class="lock-screen">
    <div class="lock-screen-modal">
      <div class="lock-screen-modal-inner">
        <!-- <main> -->
          <div class="background"></div>
          <div class="foreground"></div>
        <!-- </main> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // c: 40
        }
    },
  created() {
    this.$emit("routeName", this.$route.name);
  },
};
</script>

<style lang="less" scoped>
@import url("./LockScreen.less");
</style>