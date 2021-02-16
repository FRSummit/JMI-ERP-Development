<template>
  <div id="create-order-left-sidebar" class="create-order-left-sidebar">
    <div class="create-order-left-sidebar-section">
      <div class="create-order-left-sidebar-section-inner">
          <!-- Search & Filter section -->
        <div class="search-section">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              class="form-control"
              placeholder="Search by Name, ID No"
            />
          </div>
          <span @click="filterClick"><i class="fas fa-filter"></i></span>
        </div>
        <!-- Customer Counter -->
        <div class="title-count">
            <p class="total-customer">Total Customer (<span class="count">250</span>)</p>
        </div>
        <!-- Customer List -->
        <div class="customer-list-section">
            <div class="customer-list-section-inner">
                <div id="progressbar" class="progressbar" v-if="!customer_list">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </div>
                <div :id="'customer-section-list-' + c" class="customer-section-list" v-for="(customer, c) in customer_list" :key="c" @click="selectLeftUserSchedule(customer, c)">
                    <div :id="'customer-section-list-inner-' + c" class="customer-section-list-inner">
                        <div class="customer-id-type-section">
                            <div class="customer-id-type-section-inner">
                                <div class="id-section">
                                    <p class="customer-id">{{ customer.customer_id }}</p>
                                </div>
                                <div class="type-section">
                                    <p class="customer-type">Customer Type: <span class="type">{{ customer.customer_type }}</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="customer-name-section">
                            <div class="customer-name-section-inner">
                                <div class="name-section">
                                    <p class="customer-name">{{ customer.customer_name }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="customer-address-section">
                            <div class="customer-address-section-inner">
                                <div class="address-section">
                                    <p class="customer-address">{{ customer.customer_address }}</p>
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
                <p class="sort-text">Sort by</p>
                <div class="sort-section">
                    <div class="sort-section-inner">
                        <div class="input-section">
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
                        <div class="assending-desending-sort">
                            <form class="input-btns">
                                <p><input type="radio" checked="checked" name="serialRange" value="a_to_z" @change="onChange('a_to_z')" /> <span :class="radioSpanDefaultClass">A-Z</span></p>
                                <p><input type="radio" name="serialRange" value="z_to_a" @change="onChange('z_to_a')" /> <span :class="radioSpanCustomClass">Z-A</span></p>
                            </form>
                        </div>
                    </div>
                </div>
                <p class="filter-text">Filter by</p>
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
                </div>
            </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            customer_list: [
                {
                    customer_id: "JMI-2231225",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
                {
                    customer_id: "JMI-2231225",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
                {
                    customer_id: "JMI-2231225",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
                {
                    customer_id: "JMI-2231225",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
                {
                    customer_id: "JMI-2231225",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
                {
                    customer_id: "JMI-2231225",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
                {
                    customer_id: "JMI-2231225",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
                {
                    customer_id: "JMI-2231225",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
                {
                    customer_id: "JMI-2231225",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
                {
                    customer_id: "JMI-2231225",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
                {
                    customer_id: "JMI-2231225",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
                {
                    customer_id: "JMI-2231225 DDDD",
                    customer_name: "New Bhai Bhai Pharmacy",
                    customer_type: "Credit",
                    customer_address: "House:100, Road: 11,Block:C,Dhaka 1213",
                },
            ],
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
        }
    },
    created() {},
    mounted() {},
    methods: {
        filterClick() {
            if(this.filter_modal) {
                this.filter_modal = false
            } else {
                this.filter_modal = true
            }
        },
        filterModalOutsideClick() {
            this.filter_modal = false
        },
        onChange(value) {
            switch(value) {
                case 'a_to_z':
                console.log('D : ' + value)
                this.radioSpanDefaultClass = 'active'
                this.radioSpanCustomClass = ''
                break
                case 'z_to_a':
                console.log('C : ' + value)
                this.radioSpanDefaultClass = ''
                this.radioSpanCustomClass = 'active'
                break
                default:
                    break
            }
        },
    }
};
</script>

<style lang="less" scoped>
@import url("./LeftSidebar.less");
</style>