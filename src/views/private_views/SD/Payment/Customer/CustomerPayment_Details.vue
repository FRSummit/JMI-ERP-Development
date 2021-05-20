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
                                v-if="SELECTED_CUSTOMER_LEFT"
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
.header_top,
.row.requition_header {
    padding: 0;
}

.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-8,
.col-lg-10,
.col-lg-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-8,
.col-md-10,
.col-md-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-8,
.col-sm-10,
.col-sm-12 {
    padding: 0;
}
</style>