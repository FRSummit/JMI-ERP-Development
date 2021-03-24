<template>
    <div class="transfer-requisition-details">
        <div class="layout-container">
            <div class="container-fluid">
                <div class="col-12">
                    <div class="empty-body">
                        <div class="empty_data">
                            <img src="../../../../../../assets/images/transfer-requisition/no_info.png" alt="Icon">
                            <h5>No information to show</h5>
                            <p>Select from the left bar</p>
                            <p>Or</p>
                            <a>
                                <button type="button" class="btn btn-primary btn-global" @click="createRequisitionClickHandler">
                                    <i class="fa fa-plus mr-2"></i>
                                    Create Requisition
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
    methods: {
        createRequisitionClickHandler() {
            this.$router.push('/features/local_sales/create-requisition')
        }
    }
}
</script>

<style scoped>
.transfer-requisition-details {
    height: calc(100vh - (74px + 54px + 32px));
}
.layout-container {
    height: calc(100vh - (74px + 54px + 32px));
}
.container-fluid {
    margin-top: calc( ( (100vh - (74px + 54px + 32px)) / 2) - 120px );
}
.btn.btn-primary.btn-global {
    background: #026cd1;
    font-size: 14px;
    text-transform: unset;
}
</style>