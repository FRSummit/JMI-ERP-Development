<template>
  <div id="service-unavailable" class="service-unavailable">
    <div class="page_inner">
      <div class="page-content">
        <img src="../../assets/images/service unavailable icon.png" alt="" />
        <p class="error-name">ERROR 503</p>
        <p class="error-details">Service Unavailable</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("routeName", this.$route.name);
  },
};
</script>

<style scoped>
.page_inner {
  width: 100%;
  height: calc(100vh - (74px + 32px));
  position: relative;
}
.page-content {
  text-align: center;
}
img {
  margin-top: calc( ( (100vh - (74px + 32px)) / 2) - 100px);
}
p.error-name {
  margin: 20px 0 10px;
  font-size: 36px;
  line-height: 1;
  color: #36454f;
}
p.error-details {
  margin: 0;
  font-size: 24px;
  line-height: 1;
  color: #8c8c8c;
}
</style>