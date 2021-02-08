<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/dashboard">Dashboard</router-link>
  </div>
</template>

<script>
export default {
  created() {
    
    this.$emit('routeName', this.$route.name);
  }
}
</script>
