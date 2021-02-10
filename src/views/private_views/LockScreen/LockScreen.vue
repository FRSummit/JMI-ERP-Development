<template>
  <div id="lock-screen" class="lock-screen">Lock Screen</div>
</template>

<script>
export default {
  created() {
    this.$emit("routeName", this.$route.name);
  },
};
</script>