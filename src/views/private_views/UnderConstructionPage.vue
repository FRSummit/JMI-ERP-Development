<template>
  <div id="under-construction" class="under-construction">
    <div class="page_inner">
      <div class="page-content">
        <img src="../../assets/images/under construction icon.png" alt="" />
        <p class="error-name">Page Under Construction</p>
        <p class="error-details">We will be back soon</p>
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