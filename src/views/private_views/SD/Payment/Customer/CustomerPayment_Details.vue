<template>
    <div class="details">
        <div class="layout-container">
            <div class="container-fluid">
                <div class="col-12 requition_area">
                    <div class="row requition_header"> 
                        <div class="col-lg-4 col-md-12 col-sm-12 header_top">
                            <h5>Customer Name: <span>{{ SELECTED_CUSTOMER_DATA ? SELECTED_CUSTOMER_DATA.display_name : "" }}</span></h5>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12 header_top">
                            <h5>Customer Address: <span>{{ SELECTED_CUSTOMER_DATA ? (SELECTED_CUSTOMER_DATA.customer_info ? (SELECTED_CUSTOMER_DATA.customer_info.customer_address ? SELECTED_CUSTOMER_DATA.customer_info.customer_address : '') : '') : '' }}</span></h5>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 header_top">
                            <h5>Current Outstanding: <span>{{ SELECTED_CUSTOMER_DATA ? Number(SELECTED_CUSTOMER_DATA.current_due).toFixed(2) : "" }}</span></h5>
                        </div>
                    </div>
                    <div class="row requition_content">
                        <div class="col-12">
                            <PaymentModal
                                :SELECTED_CUSTOMER_LEFT="SELECTED_CUSTOMER_LEFT" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PaymentModal from './PaymentModal'

export default {
    props: ["SELECTED_CUSTOMER_LEFT", "SELECTED_CUSTOMER_DATA"],
    components: {
        PaymentModal
    },
    data() {
        return {}
    },
    computed: {},
    created() {
    },
    mounted() {},
    methods: {
    },
    watch: {},
};
</script>

<style scoped>
.layout-container {
    height: calc(100vh - var(--used-height) - 6px);
}
.row.requition_header {
    margin: 0;
}
.header_top {
    padding: 0;
}
</style>