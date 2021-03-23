<template>
  <div id="app">
    <MasterLayout />
  </div>
</template>

<script>
import MasterLayout from "./components/master_layout/MasterLayout";

export default {
  components: {
    MasterLayout,
  },
  mounted() {
    console.log(window.location.pathname)
    // window.onpopstate = () => {
    //   if (
    //     window.localStorage.getItem("jerp_logged_user") !== null &&
    //     this.$route.path == "/"
    //   ) {
    //     this.$router.push("/dashboard"); // redirect to home, for example
    //   }
    // };
  },
  methods: {},
  // computed: {
  //   current_pathname() {
  //     return this.$router.pathname
  //   }
  // },
  // watch: {
  //   current_pathname(newVal) {
  //     if(newVal) {
  //       console.log(newVal)
  //     }
  //   }
  // }
};
</script>

<style>
body {
  scrollbar-width: 4px;
}
body::-webkit-scrollbar {
  width: 4px;
}
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
body::-webkit-scrollbar-thumb {
  background: #026CD1;
  border-radius: 50px;
}
body::-webkit-scrollbar-thumb:hover {
  background: #004e98;
}
</style>
