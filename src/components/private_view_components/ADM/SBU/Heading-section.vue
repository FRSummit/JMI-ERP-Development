<template>
  <div id="sbu-heading">
    <div class="title-section">
      <p class="page-title">{{ routeName_ }}</p>
    </div>
    <div class="breadcrumb-section">
      <!-- <p class="breadcrumb">{{ pathName }}</p> -->
      <p class="breadcrumb-sec">
        <a v-for="(p, i) in paths" :key="i"
          ><span @click="sbuClick(p.name)">{{ p.name }}</span
          ><span v-if="p.sep"> > </span></a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pathName", "routeName"],
  data() {
    return {
      routeName_: this.routeName,
      paths: [],
    };
  },
  created() {
    this.bereadCrumbCreator();
  },
  methods: {
    bereadCrumbCreator() {
      let separator = { sep: " > " };
      for (let i = 0; i < this.pathName.length; i++) {
        this.paths.push(this.pathName[i]);
        if (i + 1 < this.pathName.length) {
          this.paths.push(separator);
        }
      }
    },
    sbuClick(name) {
      if(name === "SBU"){
        this.$router.replace('/adm/sbu')
      }
    }
  },
};
</script>

<style scoped>
#sbu-heading {
  padding: 10px 0 0;
}
#sbu-heading .title-section {
  padding: 0 10px;
}
#sbu-heading .page-title {
  margin: 0 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 10px;
}
#sbu-heading .breadcrumb-section {
  padding: 0 10px;
}
#sbu-heading .breadcrumb-sec {
  padding: 0 0;
  display: block;
  margin: 0 0;
  line-height: 1;
  color: #026cd1;
  text-decoration: none;
  font-size: 11px;
}
#sbu-heading .breadcrumb-sec a span:nth-child(odd) {
  color: #026cd1;
  cursor: pointer;
}
</style>