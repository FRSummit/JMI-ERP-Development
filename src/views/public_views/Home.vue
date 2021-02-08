<template>
  <div class="home">
    I am Home <br />
    <router-link to="/login">Login</router-link>
    <!-- <h2>Sidenav Push Example</h2> -->
      <!-- <p>
        Click on the element below to open the side navigation menu, and push
        this content to the right.
      </p> -->
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  created() {
    // this.$emit('routeName', this.$route.name);
    // this.$router.push('/login')
  }
}
</script>
