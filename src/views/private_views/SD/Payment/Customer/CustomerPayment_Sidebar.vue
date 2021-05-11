<template>
  <div id="products-sidebar" class="products-sidebar">
    <div class="layout-sidebar product">
      <div class="header">
        <div class="row1">
          <div class="form-group">
            <i class="fa fa-search"> </i>
            <input
              type="text"
              placeholder="Search by Name"
              class="form-control"
              id="search-filter"
              v-on:keyup="searchKeyUpHandler"
            />
          </div>
          <span class="filter_search"><i class="fa fa-filter"> </i> </span>
        </div>
      </div>
      <div class="content">
        <div :id="'card_body_' + i" class="card_body" v-for="(item, i) in CUSTOMER_LIST" :key="i" @click="singleCardItemClickHandler(item, i)">
          <div class="row1">
            <h5>{{ item.customer_area_info ? (item.customer_area_info.customer_info ? (item.customer_area_info.customer_info.display_code ? (item.customer_area_info.customer_info.display_code) : '') : '') : '' }}</h5>
            <p class="item-type">Customer Type  <span class="type" :class="item.customer_area_info.customer_info.credit_flag === 'Y' ? 'Credit' : 'Cash'">{{ item.customer_area_info.customer_info.credit_flag === "Y" ? "Credit" : "Cash" }}</span></p>
          </div>
          <div class="row2">
            <p>{{ item.customer_area_info ? (item.customer_area_info.customer_info ? (item.customer_area_info.customer_info.display_name ? (item.customer_area_info.customer_info.display_name) : '') : '') : '' }}</p>
          </div>
          <!-- <div class="row3">
            <p>{{ item.customer_info.customer_address ? item.customer_info.customer_address : "" }}</p>
          </div> -->
          <p class="jmi-search-key hide">{{ item.search_words }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ERPSidebarService from "../../../../../service/ERPSidebarService";
const service = new ERPSidebarService();
import JMIFilter from '../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

export default {
  props: [],
  components: {},
  data() {
    return {
      CUSTOMER_LIST: null,
    };
  },
  computed: {},
  created() {},
  async mounted() {
    console.log(this.$store.state.JERP_LOGGED_USER_DATA)
    await this.ALL_CUSTOMER_FOR_DEPOT__FROM_SERVICE()
  },
  methods: {
    singleCardItemClickHandler(item, index) {
      console.log(index)
      console.log(item)

      let length = document.querySelectorAll('#products-sidebar .card_body').length
      for(let i=0; i<length; i++) {
        document.querySelector('#card_body_' + i).className = 'card_body'
      }
      if(document.querySelector('#card_body_' + index).className === 'card_body') {
        document.querySelector('#card_body_' + index).className = 'card_body jmi-active'
      } else {
        document.querySelector('#card_body_' + index).className = 'card_body'
      }
      this.$emit("selected_item_from_left", item)
    },
    // ---------------------------------------------------------------------------
    // FILTER
    searchKeyUpHandler(value) {
        console.log(value.key)
        let input = document.getElementById("search-filter");
        let filter = input.value.toUpperCase();
        let list = document.querySelectorAll('.card_body')
        let txt_selector = "jmi-search-key"

        jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
    },
    // ---------------------------------------------------------------------------
    // SERVICE CALL
    async ALL_CUSTOMER_FOR_DEPOT__FROM_SERVICE() {
      this.CUSTOMER_LIST = [];
      let da_id = this.$store.state.JERP_LOGGED_USER_DATA.user_detils.id
      await service.getCustomerUnderDS_SalesArea_CUSTOMER_PAYMENT(da_id)
        .then((res) => {
          console.log(res.data);
          this.CUSTOMER_LIST = res.data.dlv_schdl_details;
          console.log(this.CUSTOMER_LIST);
        })
        .catch((err) => {
          if (err) {
            this.CUSTOMER_LIST = [];
            alert("Server Error 500. " + err);
          }
        });
        // await service.getAllCustomerForDepot_CreateOrderLeftList()
        // .then((res) => {
        //   console.log(res.data);
        //   this.CUSTOMER_LIST = res.data.sbu_customers;
        //   console.log(this.CUSTOMER_LIST);
        // })
        // .catch((err) => {
        //   if (err) {
        //     this.CUSTOMER_LIST = [];
        //     alert("Server Error 500. " + err);
        //   }
        // });
    },
  },
  watch: {},
};
</script>

<style scoped>
.products-sidebar {
    height: calc(100vh - (74px + 54px + 32px));
}
.layout-sidebar .header .row1 {
    height: 38px;
}
.layout-sidebar .header .row1 .form-group {
    /* overflow: hidden; */
    height: 38px;
}
.layout-sidebar .header .row1 .form-group svg {
    position: absolute;
    top: 12px;
    left: 10px;
    color: #AAC0D9;
    font-size: var(--font14);
}
.header input {
    width: 80%;
    height: 36px;
    margin: 0;
    font-size: 14px;
}
.layout-sidebar .header .row2 h5 {
    font-weight: 500;
}
.layout-sidebar .content .card_body .row1 h5 {
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
}
.layout-sidebar .content .card_body .row1 h5 {
    line-height: 1.5;
}
.jmi-scroll-section {
    height: calc(100vh - (74px + 54px + 32px + 108px)) !important;
}
.layout-sidebar.product .content .card_body .row1 .new_product {
  padding: 2px 8px;
}
p.item-type {
    font-size  : 12px;
    color      : #36454F;
    margin     : 0;
    line-height: 1;
}
p.item-type span.type {
    color: #FF584C;
}
p.item-type span.Credit {
    color: #28A411;
}
p.item-type span.Cash {
    color: #FF584C;
}
</style>