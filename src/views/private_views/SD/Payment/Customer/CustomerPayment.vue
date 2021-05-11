<template>
    <div id="customer-payment" class="customer-payment">
        <Heading :pathName="pathName" :routeName="routeName" />
        <div class="layout-body">
            <LeftSidebarSection
                v-on:selected_item_from_left="selectedItemFromLeft" />
            <DetailsSection 
                :SELECTED_CUSTOMER_LEFT="SELECTED_CUSTOMER_LEFT"
                :SELECTED_CUSTOMER_DATA="SELECTED_CUSTOMER_DATA"/>
        </div>
    </div>
</template>

<script>
import Heading from "../../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import LeftSidebarSection from './CustomerPayment_Sidebar'
import DetailsSection from './CustomerPayment_Details'

import ERPService from '../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
    components: {
        Heading,
        LeftSidebarSection,
        DetailsSection
    },
    data() {
        return {
            routeName: "Customer Payment",
            parentPath: "Local Sales",
            pathName: [],

            SELECTED_CUSTOMER_LEFT: null,
            SELECTED_CUSTOMER_DATA: null,
        };
    },
    computed: {},
    created() {
        this.$emit("routeName", this.$route.name);
        this.createBreadcrumbData();
    },
    mounted() {},
    methods: {
        createBreadcrumbData() {
            //   this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname);
            this.pathName = [
                { name: "Features" },
                { name: "Local Sales" },
                { name: "Customer Payment" },
            ];
        },
        selectedItemFromLeft(value) {
            this.SELECTED_CUSTOMER_LEFT = value
            console.log(value)
            this.CUSTOMER_INFO_FOR_DEPOT__FROM_SERVICE(value.customer_area_info.customer_info.customer_id)
        },
        // ------------------------------------------------------------------------------------
        // Service call from left sidebar section
        async CUSTOMER_INFO_FOR_DEPOT__FROM_SERVICE(customer_id) {
            console.log(customer_id)
            await service.getCustomerInfoForDepot_CreateOrderLeftList(customer_id)
                .then(res => {
                    console.log(res.data)
                    this.SELECTED_CUSTOMER_DATA = []
                    this.SELECTED_CUSTOMER_DATA = res.data.customer_details
                })
                .catch(err => {
                    if(err) {
                        alert('Data fetch problem ' + err)
                    }
                })
        }
    },
    watch: {},
};
</script>