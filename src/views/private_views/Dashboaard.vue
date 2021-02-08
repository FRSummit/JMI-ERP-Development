<template>
  <div class="landing-page">
    Dashboard
    <router-link to="/about">About</router-link>
    <br />
    <router-link to="/competitors-data-mgt"
      >Competotprs Data Management</router-link
    >
    <br />
    <router-link to="/adm/sbu">ADM -> SBU</router-link>
    <br />
    <router-link to="/sd/sales-center">SD ----> Sales Center</router-link>
    <br />
    <router-link to="/sd/geo-location">SD ----> Geo Location</router-link>
    <br />
    <router-link to="/sd/monthly-delivery-plan">SD ----> Monthly Delivery Plan</router-link>
    <br />
    <router-link to="/sd/delivery-scheduling">SD ----> Delivery Scheduling</router-link>
    <br />
    <router-link to="/sd/delivery-process--packing-preparation">SD ----> Delivery Process - Packing Preparation</router-link>
    <br />
    <router-link to="/sd/delivery-process--invoice-rinting">SD ----> Delivery Process - Invoice Printing</router-link>
    <br />
    <router-link to="/sd/delivery-process--dispatch-entry">SD ----> Delivery Process - Dispatch Entry</router-link>
    <br />
    <br />
    <br />
    <router-link to="/401">401</router-link>
    <br />
    <router-link to="/404">404</router-link>
    <br />
    <router-link to="/408">408</router-link>
    <br />
    <router-link to="/503">503</router-link>
    <br />
    <router-link to="/under-construction">Under Construction</router-link>
    <br />
    <router-link to="/under-maintenance">Under Maintenance</router-link>
    <br />
    <br />
    <h1 id="printMe">Print me!</h1>
    <br />
    <br />
    <button @click="print">Print</button>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      output: null,
    };
  },
  created() {
    this.$emit('routeName', this.$route.name);
  },
  methods: {
    print() {
      console.log("working");
      this.$htmlToPaper("printMe", null, () => {
        console.log("Printing completed or was cancelled!");
      });
    },
  },
};
</script>

<style scoped>
button {
  background: #026cd1;
  color: #fff;
  padding: 7px 20px;
  border-radius: 4px;
  cursor: pointer;
}
</style>