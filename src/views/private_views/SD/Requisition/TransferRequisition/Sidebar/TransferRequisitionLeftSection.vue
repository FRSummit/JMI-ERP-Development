<template>
    <div class="transfer-requisition-sidebar">
        <div class="layout-sidebar requisition">
            <!-- Start Secondary Sidebar Header Area-->  
            <div class="header">  
               <div class="row1">
                    <div class="form-group"><i class="fa fa-search"></i>
                        <input type="text" placeholder="Search by Name, ID No" class="form-control">
                    </div>
                    <span class="filter_search"><i class="fa fa-filter"> </i> </span>
               </div>
               <div class="row2">
                    <h5>Pending Requisitions: <span>200</span></h5>
               </div>
            </div>
            <!--End Secondary Sidebar Header Area-->  
            
            <!--Start Secondary Sidebar Content Area--> 
            <div class="content jmi-scroll-section">
                <div class="card_body" v-for="(item, i) in items" :key="i">
                    <div class="row1">
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.date }}</p>
                    </div>
                    <div class="row2">
                        <p>{{ item.requisition }}</p>
                    </div>
                    <div class="row3">
                        <p>Requisition To: <span>{{ item.area }}</span></p>
                        <p class="status" :class="item.status.toLowerCase()"> <i class="fa fa-square mr-1"></i>{{ item.status }}</p>
                    </div>
                </div>
            </div>
            <!--End Secondary Sidebar Content Area--> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Draft',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Pending',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Submited',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Draft',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Pending',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Submited',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Draft',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Pending',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Submited',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Draft',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Pending',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Submited',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Draft',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Pending',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Submited',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Draft',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Pending',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Submited',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Draft',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Pending',
                },
                {
                    title: 'DHK0301',
                    date: '09/12/2020',
                    requisition: 'Requisitions 01',
                    area: 'Cumilla',
                    status: 'Submited',
                },
            ]
        }
    }
}
</script>

<style scoped>
.transfer-requisition-sidebar {
    height: calc(100vh - (74px + 54px + 32px));
}
.layout-sidebar.requisition .header .row1 {
    height: 38px;
}
.layout-sidebar.requisition .header .row1 .form-group {
    /* overflow: hidden; */
    height: 38px;
}
.layout-sidebar.requisition .header .row1 .form-group svg {
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
.layout-sidebar.requisition .header .row2 h5 {
    font-weight: 500;
}
.layout-sidebar.requisition .content .card_body .row1 h5 {
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
}
.layout-sidebar.requisition .content .card_body .row1 h5 {
    line-height: 1.5;
}
.jmi-scroll-section {
    height: calc(100vh - (74px + 54px + 32px + 108px)) !important;
}
</style>