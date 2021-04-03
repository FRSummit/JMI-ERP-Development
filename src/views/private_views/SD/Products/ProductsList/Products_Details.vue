<template>
  <div id="products-details" class="products-details">
    <div class="layout-container">
      <!-- No Data -->
      <div class="container-fluid no_table_data">
        <div class="col-12">
          <div class="empty-body">
            <div class="empty_data">
              <img
                src="../../../../../assets/images/transfer-requisition/no_info.png"
                alt="Icon"
              />
              <h5>No information to show</h5>
              <p>Select from the left bar</p>
              <p>Or</p>
              <a>
                <button
                  type="button"
                  class="btn btn-primary btn-global"
                  @click="createNewProductClickHandler"
                >
                  <i class="fa fa-plus mr-2"></i>
                  Create New Product
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    createNewProductClickHandler() {
      console.log("createNewProductClickHandler")
    //   this.$router.push('/features/local_sales/create-new-product')
    },
  },
  watch: {},
};
</script>

<style scoped>
.transfer-requisition-details {
  height: calc(100vh - (74px + 54px + 32px));
}
.layout-container {
  height: calc(100vh - (74px + 54px + 32px));
}

/* Create Btn Section */
.container-fluid.no_table_data {
  margin-top: calc(((100vh - (74px + 54px + 32px)) / 2) - 120px);
}
.btn.btn-primary.btn-global {
  background: #026cd1;
  font-size: 14px;
  text-transform: unset;
}
/* Data Section */
/* .requition_area .requition_header .header_top {
    padding: 0;
}
.requition_area .requition_header h5 {
    margin: 0;
}
.requition_area .requition_header .form-group label {
    display: inline-block;
    width: 45%;
}
.requition_area .requition_header .form-group .form-control-sm {
    width: 54%;
    display: inline-block !important;
    min-width: unset;
}
.requition_area .header_top .edit i {
    font-size: 16px;
    cursor: pointer;
}
.requition_area table tbody td a {
    cursor: pointer;
}
.requition_area table tbody td a.edit i {
    font-size: 16px;
}
.requition_area table tbody td a.remove {
    width: 30px;
    height: 30px;
    background-color: #f5bec6;
    border-radius: 50%;
    padding-top: 6px;
}
.requition_area table tbody td a.remove svg {
    color: #df2a43;
    width: 14px;
    height: 14px;
}
.requition_area .quantity-input {
    border: 1px solid #E2EDFA;
}
.requition_area .quantity-input input {
    border: none;
    height: 28px;
}
.requition_area .quantity-input input:focus {
    outline           : 0 !important;
    outline-offset    : 0 !important;
    -moz-box-shadow   : none !important;
    -webkit-box-shadow: none !important;
    box-shadow        : none !important;
    border: none !important;
}
.requition_area .quantity-input .quantity {
    height: 28px;
    margin: 0;
    border-bottom: none;
    font-size: 14px;
}
.requition_area .row.requition_content table tbody {
    height: calc(100vh - (74px + 54px + 32px + (230px)));
}
.requition_area .btn.btn-primary.btn-global {
    background: #026cd1;
    font-size: 14px;
    text-transform: unset;
    box-shadow: none
}
.requition_area .row.requition_footer a:first-child .btn.btn-primary.btn-global {
    color: #000000;
}
.container-fluid .edit {
    display: inline-block;
}
.container-fluid .edit.create-new {
    cursor: pointer;
    margin-right: 20px;
}
.container-fluid .edit.create-new:hover {
    color: #026cd1;
} */
</style>