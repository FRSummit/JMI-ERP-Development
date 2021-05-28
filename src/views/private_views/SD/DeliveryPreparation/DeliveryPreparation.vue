<template>
    <div id="dp_delivery_preparation" class="sd_collection">
        <Heading :pathName="pathName" :routeName="routeName" />

        <div class="layout-body">
            <DeliveryPreparationSidebar
                v-on:SINGLE_ITEM_FROM_LEFT="itemClickFromLeftEventHandler"
                :RELOAD_LEFT_SECTION="RELOAD_LEFT_SECTION" />
            <DeliveryPreparationDetails
                v-if="SELECTED_ITEM_FROM_LEFT"
                :SELECTED_ITEM_FROM_LEFT="SELECTED_ITEM_FROM_LEFT"
                :DS_DETAILS="DS_DETAILS"
                v-on:RELOAD_LEFT_SECTION="reloadLeftSection" />
        </div>
    </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import DeliveryPreparationSidebar from "./DeliveryPreparationSidebar";
import DeliveryPreparationDetails from "./DeliveryPreparationDetails";

import Service from '../../../../service/ERPSidebarService'
const service = new Service()

export default {
    props: [],
  components: {
    Heading,
    DeliveryPreparationSidebar,
    DeliveryPreparationDetails,
  },
    data() {
    return {
      routeName: "Delivery Preparation",
      parentPath: "Delivery Preparation",
      pathName: [],

      DS_DETAILS: null,
      SELECTED_ITEM_FROM_LEFT: null,
      RELOAD_LEFT_SECTION: null,
    };
  },

  created() {
    this.$emit('routeName', this.$route.name);
    this.createBreadcrumbData();
  },
    methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Delivery Preparation" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    async itemClickFromLeftEventHandler(value) {
        this.DS_DETAILS = null
        this.SELECTED_ITEM_FROM_LEFT = value
        await this.DS_DETAILS__FROM_SERVICE(value.ds_id)
    },
    reloadLeftSection() {
      this.RELOAD_LEFT_SECTION = new Date()
      this.DS_DETAILS = null
      this.SELECTED_ITEM_FROM_LEFT = null
    },
    // --------------------------------------------------------------------------------------------
    // SERVICE CALL
    async DS_DETAILS__FROM_SERVICE(ds_id) {
        this.DS_DETAILS = null
            await service.getDS_PREPARATION_DETAILS__DELIVERY_PREPARATION(ds_id)
            .then(res => {
                console.log(res.data)
                this.DS_DETAILS = res.data.schedule_list
            })
            .catch(err => {
                if(err) {
                    console.log(err)
                    this.DS_DETAILS = null
                }
            })
    }
  },
}
</script>



<style scoped>
@import url('./DeliveryPreparation.css');
</style>