<template>
  <div id="create-order-left-sidebar" class="create-order-left-sidebar">
    <div class="create-order-left-sidebar-section">
      <div class="create-order-left-sidebar-section-inner">
        <!-- Customer Counter -->
        <div class="territory-selection">
            <!-- <p class="text">Select Territory</p> -->
            <div class="sort-section">
                <div class="sort-section-inner">
                    <div class="input-section">
                        <div class="select-options" :class="focus_flag === true ? 'jmi_focus_flag' : ''" v-click-outside="focus_flag_remove">
                            <span class="right-icon" @click="territoryInputClickOccured" :class="focus_flag === true ? 'jmi_focus_flag_icon' : ''"><i class="fas fa-chevron-right"></i></span>
                            <!-- <select title="Pick a customer" class="selectpicker" v-model="selected_territory">
                                <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
                                <option :value="null" selected>Select and search Territory</option>
                                <option v-for="(tt, i) in TERRITORY_LIST" :key="i" :value="tt"><span>{{ tt.display_code }} - {{ tt.area_name }}</span></option>
                            </select> -->
                            <!-- <form>
                                <input list="browsers" name="browser" placeholder="Select and search Territory" v-model="selected_territory" @click="territoryInputClickOccured">
                                <datalist id="browsers">
                                    <option v-for="(tt, i) in TERRITORY_LIST" :key="i" :value="tt.display_code + ' - ' + tt.area_name" />
                                </datalist>
                            </form> -->
                            <input 
                                placeholder="Select or search territory" 
                                v-model="selected_territory" 
                                @click="territoryInputClickOccured"
                                id="territory-search-filter"
                                v-on:keyup="territorySearchKeyUpHandler"
                                autocomplete="off"
                                @focus="focusFlag()" />

                            <div class="add-territory-modal-section" v-if="territory_modal">
                                <div class="add-territory-modal" v-click-outside="territoryModalSectionOutsideClick">
                                    <div class="add-territory-modal-inner">
                                        <div class="territory-list">
                                            <div class="territory-list-inner">
                                                <p class="territory-name" v-for="(territory, i) in TERRITORY_LIST" :key="i" @click="territoryNameAddClick(territory)">
                                                    <span class="territory_nm">{{ territory.display_code }} - {{ territory.area_name }}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
          <!-- Search & Filter section -->
        <div class="search-section">
          <div class="form-group has-search" v-if="customer_data_list && customer_data_list.length > 0">
            <span class="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              class="form-control"
              id="search-filter"
              placeholder="Search"
              v-on:keyup="searchKeyUpHandler"
            />
          </div>
          <span @click="filterClick" class="hide"><i class="fas fa-filter"></i></span>
        </div>
        <div class="title-count">
            <p class="total-customer" v-if="customer_data_list && customer_data_list.length > 0">Total Customer (<span class="count">{{ customer_data_list ? customer_data_list.length : 0 }}</span>)</p>
        </div>
        <!-- Customer List -->
        <div class="customer-list-section">
            <div class="customer-list-section-inner" :class="customer_data_list && customer_data_list.length > 0 ? 'customer_data_list' : ''">
                <div id="progressbar" class="progressbar" v-if="!customer_data_list">
                    <!-- <v-progress-circular indeterminate color="primary"></v-progress-circular> -->
                    <!-- <p>Please select territory</p> -->
                </div>
                <div id="progressbar" class="progressbar" v-if="customer_data_list && customer_data_list.length === 0">
                    <!-- <v-progress-circular indeterminate color="primary"></v-progress-circular> -->
                    <!-- <p>No customer found</p> -->
                    <img src="../../../../../../assets/images/es_icons/es_customer.svg" alt="">
                    <h5>{{ 'No customer found' }}</h5>
                    <p>{{ 'Try a dierent territory from the list' }}</p>
                </div>
                <div :id="'customer-section-list-' + c" class="customer-section-list" v-for="(customer, c) in customer_data_list" :key="c" @click="customerClickHandlerFromList(customer, c)">
                    <div :id="'customer-section-list-inner-' + c" class="customer-section-list-inner">
                        <div class="customer-id-type-section">
                            <div class="customer-id-type-section-inner">
                                <div class="id-section">
                                    <!-- <p class="customer-id">{{ customer.customer_id }}</p> -->
                                    <p class="customer-id">{{ customer.display_code }}</p>
                                    <p class="customer-id-search-key hide">{{ customer.search_words ? customer.search_words : customer.search_keywords }}</p>
                                </div>
                                <div class="type-section">
                                    <p class="customer-type">Customer Type: <span class="type" :class="customer.credit_flag === 'Y' ? 'Credit' : 'Cash'">{{ customer.credit_flag === "Y" ? "Credit" : "Cash" }}</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="customer-name-section">
                            <div class="customer-name-section-inner">
                                <div class="name-section">
                                    <p class="customer-name">{{ customer.customer_info.customer_name }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="customer-address-section">
                            <div class="customer-address-section-inner">
                                <div class="address-section">
                                    <p class="customer-address">{{ customer.customer_info.customer_address ? customer.customer_info.customer_address : "" }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Filter Modal -->
        <div class="filter-sort-modal-section" v-if="filter_modal">
            <div class="filter-sort-modal-section-inner" v-click-outside="filterModalOutsideClick">
                <span class="sort-text" style="color: red;">Development in progress</span>
                <p class="sort-text">Sort by</p>
                <div class="sort-section">
                    <div class="sort-section-inner">
                        <!-- <div class="input-section">
                            <div class="select-options">
                                <span class="right-icon"
                                    ><i class="fas fa-chevron-right"></i
                                ></span>
                                <select title="Pick a customer" class="selectpicker" @change="onChange()">
                                    <option v-for="(customer, m) in customer_sort_list" :key="m">
                                    {{ customer.name }}
                                    </option>
                                </select>
                            </div>
                        </div> -->
                        <div class="assending-desending-sort">
                            <form class="input-btns">
                                <p><input type="radio" checked="checked" name="serialRange" value="a_to_z" @change="onChange('a_to_z')" /> <span :class="radioSpanDefaultClass">A-Z</span></p>
                                <p><input type="radio" name="serialRange" value="z_to_a" @change="onChange('z_to_a')" /> <span :class="radioSpanCustomClass">Z-A</span></p>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- <p class="filter-text">Filter by</p>
                <div class="filter-section">
                    <div class="filter-section-inner">
                        <p class="type">Customer Type</p>
                        <div class="select-options">
                            <span class="right-icon"
                                ><i class="fas fa-chevron-right"></i
                            ></span>
                            <select title="Pick a customer" class="selectpicker" @change="onChange()">
                                <option v-for="(customer, m) in customer_sort_list" :key="m">
                                {{ customer.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import ERPService from '../../../../../../service/ERPSidebarService'
const service = new ERPService()
import JMIFilter from '.././../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

export default {
    props: [],
    data() {
        return {
            radioSpanDefaultClass: 'active',
            radioSpanCustomClass: null,
            customer_sort_list: [
                {
                    name: "All Customer"
                },
                {
                    name: "Chemist"
                },
                {
                    name: "Institution"
                },
            ],
            filter_modal: false,
            TERRITORY_LIST: null,
            selected_territory: null,
            customer_data_list: null,
            customer_data_list_counter: null,

            territory_modal: false,

            focus_flag: false,
        }
    },
    created() {},
    async mounted() {
        console.log('Customer list loading')
        // await this.ALL_CUSTOMER_FOR_DEPOT__FROM_SERVICE()
        await this.GET_TERRITORY_LIST__FROM_SERVICE()
    },
    methods: {
        filterClick() {
            if(this.filter_modal) {
                this.filter_modal = false
                this.$emit('filter_modal', this.filter_modal)
            } else {
                this.filter_modal = true
                this.$emit('filter_modal', this.filter_modal)
            }
        },
        filterModalOutsideClick() {
            this.filter_modal = false
            this.$emit('filter_modal', this.filter_modal)
        },
        onChange(value) {
            switch(value) {
                case 'a_to_z':
                    this.radioSpanDefaultClass = 'active'
                    this.radioSpanCustomClass = ''
                    this.customer_data_list.sort()
                    console.log('a to z')
                    break
                case 'z_to_a':
                    this.radioSpanDefaultClass = ''
                    this.radioSpanCustomClass = 'active'
                    this.customer_data_list.sort().reverse()
                    console.log('z to a')
                    break
                default:
                    break
            }
        },
        customerClickHandlerFromList(customer, c) {
            // console.log(customer + '    ' +c)
            let length = document.getElementsByClassName('customer-section-list').length
            for(let i=0; i<length; i++) {
                document.querySelector('#customer-section-list-' + i).className = 'customer-section-list'
            }
            if(document.querySelector('#customer-section-list-' + c).className === 'customer-section-list') {
                document.querySelector('#customer-section-list-' + c).className = 'customer-section-list active'
            } else {
                document.querySelector('#customer-section-list-' + c).className = 'customer-section-list'
            }
            this.$emit("select_customer_by_customer_code", customer.customer_info.id)
        },
        searchKeyUpHandler(value) {
            console.log(value.key)
            let input = document.getElementById("search-filter");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.customer-section-list')
            let txt_selector = "customer-id-search-key"

            jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
        },
        /*----------- Service implementation ------------*/
        /*async ALL_CUSTOMER_FOR_DEPOT__FROM_SERVICE() {
            await service.getAllCustomerForDepot_CreateOrderLeftList()
                .then(res => {
                    console.log(res.data)
                    this.customer_data_list = res.data.sbu_customers
                })
        },*/
        async GET_TERRITORY_LIST__FROM_SERVICE() {
            this.TERRITORY_LIST = []
            await service.getTerritoryList_CreateOrderLeftList()
                .then(res => {
                    console.log(res.data)
                    this.TERRITORY_LIST = res.data.territory_list
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.TERRITORY_LIST = null
                    }
                })
        },
        async ALL_CUSTOMER_FOR_DEPOT_BY_TT__FROM_SERVICE(id) {
            console.log(id)
            this.customer_data_list = []
            this.customer_data_list_counter = null
            await service.getAllCustomerForDepotByTTId_CreateOrderLeftList(id)
                .then(res => {
                    console.log(res.data)
                    this.customer_data_list_counter = res.data.count
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.customer_data_list = res.data.sbu_customers
                        if(res.data.count === 0) {
                            // this.customer_data_list = null
                        }
                    } else {
                        this.customer_data_list = null
                        this.customer_data_list_counter = null
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.customer_data_list = null
                        this.customer_data_list_counter = null
                    }
                })
        },
        // ------------------------------------------------------------------------------
        territoryInputClickOccured() {
            // this.selected_territory = null
            if(this.territory_modal) {
                this.territory_modal = false
            } else {
                this.selected_territory = null
                this.territory_modal = true
            }
        },
        territorySearchKeyUpHandler(value) {
            console.log(value.key)
            let input = document.getElementById("territory-search-filter");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('.add-territory-modal .territory-name')
            let txt_selector = "territory_nm"

            jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
        },
        territoryModalSectionOutsideClick() {
            this.territory_modal = false
        },
        territoryNameAddClick(territory) {
            console.log(territory)
            this.selected_territory = territory.display_code + ' - ' + territory.area_name
            this.ALL_CUSTOMER_FOR_DEPOT_BY_TT__FROM_SERVICE(territory.id)
            this.territory_modal = false
        },
        focusFlag() {
            console.log(this.focus_flag)
            this.focus_flag = true
        },
        focus_flag_remove() {
            this.focus_flag = false
        },
    },
    watch: {
        selected_territory(newVal) {
            if(newVal) {
                console.log(newVal)
                // this.ALL_CUSTOMER_FOR_DEPOT_BY_TT__FROM_SERVICE(newVal.id)
                // for(let i=0; i<this.TERRITORY_LIST.length; i++) {
                //     if(this.TERRITORY_LIST[i].display_code === newVal.split('-')[0].trim()) {
                //         this.ALL_CUSTOMER_FOR_DEPOT_BY_TT__FROM_SERVICE(this.TERRITORY_LIST[i].id)
                //     }
                // }
            }
        },
        customer_data_list_counter(newVal) {
            this.$emit('CUSTOMER_DATA_LIST_COUNTER', newVal)
            if(newVal > 0) {
                console.log(newVal)
            } else {
                console.log('null / 0')
            }
        }
    }
};
</script>

<style lang="less" scoped>
@import url("./LeftSidebar.less");

#create-order-left-sidebar.create-order-left-sidebar .create-order-left-sidebar-section .create-order-left-sidebar-section-inner .territory-selection .sort-section .sort-section-inner .input-section .select-options {
    border-radius: 4px;
}
.jmi_focus_flag {
    border: 1px solid #026CD1 !important;
}
.jmi_focus_flag_icon svg {
    color: #026CD1 !important;
}
#create-order-left-sidebar.create-order-left-sidebar .create-order-left-sidebar-section .create-order-left-sidebar-section-inner .territory-selection .sort-section .sort-section-inner .input-section .select-options span.right-icon svg {
    top: 10px;
    right: 12px;
}
#create-order input, #create-order #sd-balance-sheet.sd-balance-sheet .sd-balance-sheet-inner input {
    padding-left: 10px;
    color: #026CD1;
}
.select-options input {
    width         : 90%;
    white-space   : nowrap;
    overflow      : hidden;
    text-overflow : ellipsis;
    vertical-align: middle;
    border: none !important;
    padding-right: 0 !important;
}

.add-territory-modal-section {
    position           : fixed;
    width              : 100%;
    height             : 100%;
    left               : 0;
    top                : 0;
    // background-color: rgba(0, 18, 35, 0%);
    z-index            : 999;

    .add-territory-modal {
        position     : fixed;
        top          : 198px;
        left         : 80px;
        width        : 258px;
        height       : 400px;
        background   : #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow   : 0px 0px 20px #026cd129;
        // border-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        padding      : 10px 0;

        .add-territory-modal-inner {
            width   : 100%;
            position: relative;


            .territory-list {
                display: block;
                width  : 100%;

                .territory-list-inner {
                    width     : 100%;
                    overflow-y: scroll;
                    height    : 380px;

                    &::-webkit-scrollbar {
                        width: 4px;
                    }

                    &::-webkit-scrollbar-track {
                        box-shadow   : inset 0 0 5px grey;
                        border-radius: 10px;
                    }

                    &::-webkit-scrollbar-thumb {
                        background   : #168fff;
                        border-radius: 10px;
                    }

                    &::-webkit-scrollbar-thumb:hover {
                        background: #004e98;
                    }

                    p.territory-name {
                        // padding       : 10px 20px;
                        padding       : 6px 10px;
                        text-align    : left;
                        letter-spacing: 0px;
                        color         : #36454F;
                        font-size     : 14px;
                        border-bottom : 1px solid #F0F6FC;
                        cursor        : pointer;

                        span {
                            color   : #36454F;
                            // width: 100%;
                            display : inline-block;
                            margin  : 0;

                            span {
                                font-weight: 500;
                            }
                        }

                        span:first-child {
                            // margin-bottom: 4px;
                        }

                        &:hover {
                            background: #E2EDFA;
                            span {
                                color: #026CD1;
                            }
                        }
                    }
                }
            }
        }
    }
}
#progressbar.progressbar {
    // margin-top: calc(((100vh - (74px + 73px + 62px + 44px + 32px + 52px)) / 2) - 100px) !important;
}
#progressbar.progressbar img {
    width: 100px;
}
.progressbar h5{
    margin-top: 20px !important;
    font-size:var(--font20);
    font-weight: 600;
    color: #36454F;
}
.progressbar p{
    margin-top: 10px !important;
    margin-bottom: 10px;
    font-size: var(--font16);
    color: #36454F;
}
</style>