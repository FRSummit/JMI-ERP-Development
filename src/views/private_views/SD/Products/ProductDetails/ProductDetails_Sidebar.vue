<template>
  <div id="product-details-sidebar" class="product-details-sidebar">
    <div class="layout-sidebar product">
      <div class="header">
        <div class="row1">
          <div class="form-group">
            <i class="fa fa-search"> </i>
            <input
              type="text"
              placeholder="Search by Name, ID No"
              id="search-filter"
              class="form-control"
              v-on:keyup="searchKeyUpHandler"
            />
          </div>
          <span class="filter_search"><i class="fa fa-filter"> </i> </span>
        </div>
      </div>
      <div class="content">
        <div :id="'card_body_' + i" class="card_body" v-for="(item, i) in prods_list" :key="i" @click="singleCardItemClickHandler(item, i)">
          <div class="row1">
            <h5>{{ item.prod_name }}</h5>
            <p class="new_product">{{ item.prod_class }}</p>
          </div>
          <div class="row2">
            <p>Code: {{ item.prod_code }}</p>
            <p>TP: {{ item.base_tp }} | MRP: {{ item.base_mrp }}</p>
          </div>
          <div class="row3">
            <p><span v-for="(elem, j) in item.element" :key="j"><span>{{ elem.element_name }}{{ checkElementLengthToSetComma(j, item.element) }}</span></span></p>
            <!-- <p>Last Updated: 20-Sep-2020</p> -->
          </div>
          <p class="jmi-search-key hide">{{ createSearchString(item) }}</p>
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
      prods_list: [],
      selected_item: null,
      item_index: null,
    };
  },
  computed: {
    RELOAD_LEFT_LIST() {
      return this.$store.state.CHANGES_DETECTED_IN_DETAILS_SECTION
   }
  },
  created() {},
  async mounted() {
    await this.SEARCH_PRODUCT_DATA_LIST__FROM_SERVICE()
  },
  methods: {
    singleCardItemClickHandler(item, index) {
      console.log(index)
      console.log(item)
      this.selected_item = item
      this.item_index = index

      let length = document.querySelectorAll('#product-details-sidebar .card_body').length
      for(let i=0; i<length; i++) {
        document.querySelector('#card_body_' + i).className = 'card_body'
      }
      if(document.querySelector('#card_body_' + index).className === 'card_body') {
        document.querySelector('#card_body_' + index).className = 'card_body jmi-active'
      } else {
        document.querySelector('#card_body_' + index).className = 'card_body'
      }
      this.$emit("select_prod_from_left", item)
    },
    checkElementLengthToSetComma(j, element) {
      return (j < element.length - 1) ? ', ' : ''
    },
    // ---------------------------------------------------------------------------
    // FILTER
    createSearchString(item) {
      let elements = ''
      for(let i=0; i<item.element.length; i++) {
        elements += item.element[i].code_id + ' ' + item.element[i].element_name + ' '
      }
      return item.base_mrp + ' ' + item.base_tp + ' ' + item.base_vat + ' ' + item.code_id + ' ' + item.display_code + ' ' + item.id + ' ' + item.offer + ' ' + item.prod_class + ' ' + item.prod_code + ' ' + item.prod_id + ' ' + item.prod_name + ' ' + elements
    },
    searchKeyUpHandler(value) {
        console.log(value.key)
        let input = document.getElementById("search-filter");
        let filter = input.value.toUpperCase();
        let list = document.querySelectorAll('#product-details-sidebar .card_body')
        let txt_selector = "jmi-search-key"

        jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
    },
    // ---------------------------------------------------------------------------
    // SERVICE CALL
    async SEARCH_PRODUCT_DATA_LIST__FROM_SERVICE() {
      this.prods_list = [];
      await service.getSearchProductDataList_CreateOrderDetailsSection()
        .then((res) => {
          console.log(res.data);
          this.prods_list = res.data.product_list;
          console.log(this.prods_list);
          this.$emit('all_prods_list', this.prods_list)
        })
        .catch((err) => {
          if (err) {
            this.prods_list = [];
            alert("Server Error 500. " + err);
          }
        });
    },
  },
  watch: {
    async RELOAD_LEFT_LIST(newVal) {
      if(newVal) {
        await this.SEARCH_PRODUCT_DATA_LIST__FROM_SERVICE()
        this.singleCardItemClickHandler(this.selected_item, this.item_index)
      }
    }
  },
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
  color: #aac0d9;
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
</style>