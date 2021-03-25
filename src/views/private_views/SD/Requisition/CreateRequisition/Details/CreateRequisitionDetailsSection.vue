<template>
    <div class="create-requisition-details">
        <div class="layout-container">
          <div class="container-fluid">
            <div class="col-12 requition_area">
              <div class="row requition_header"> 
                  <div class="col-12 header_top">
                      <h5>ID: <span>#</span></h5>
                      <a class="edit" @click="editRequisitionClickHandler"><i class="zmdi zmdi-edit"></i></a>
                  </div>
                  <div class="col-lg-3 col-md-3 col-12">
                      <p>Requisition From: <span class="text-data">Rangpur</span></p>
                  </div>
                  <div class="col-lg-4 col-md-3 col-12">
                    <div class="form-group">
                      <label for="requisition_to" class="col-form-label">Requisition To:</label>
                      <select class="form-control-sm" id="requisition_to">
                        <option >Select Area</option>
                        <option>Dhaka</option>
                        <option>Rangpur</option>
                        <option>Rajshahi</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-12">
                    <p>Requisition Date: <span class="text-data">10/01/2021</span></p>
                </div>
                  <div class="col-lg-2 col-md-2 col-12">
                      <p>Status: <span class="draft"></span></p>
                  </div>
              </div>
              <div class="row requition_content">
                <table class="col-12">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Unit</th>
                        <th>Quantity</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in SELECTED_REQUISITION_DATA ? SELECTED_REQUISITION_DATA : items" :key="i">
                        <!-- <tr v-for="(item, i) in items" :key="i"> -->
                            <td>
                                <div class="product">
                                <p class="name">{{ item.prod_code }} - {{ item.prod_name }}<span>{{ item.prod_class }}</span></p>
                                <p class="type">Unit Price: {{ item.base_tp }} - {{ item.base_uom }}</p>
                                </div>
                            </td>
                            <td>
                                <select class="form-control-sm" id="unit">
                                <option >Select Unit</option>
                                <option>Box</option>
                                <option>Box 2</option>
                                <option>Box 3</option>
                                </select>
                            </td>
                            <td>
                                <form>
                                    <div class="quantity-input">
                                        <input class='minus' type='button' value='-' field='quantity' @click="decreaseRequisitionQtyClickHandler(item, i)" />
                                        <input class='quantity' type='number' name='quantity' placeholder="0" :value="item.req_qty" :id="'req_qty_' + i" v-on:keyup="reqQtyKeyUpEventHandler(item, $event, i)" v-on:keydown="reqQtyKeyDownEventHandler($event, i)" />
                                        <input class='plus' type='button' value='+' field='quantity' @click="increaseRequisitionQtyClickHandler(item, i)" />
                                    </div>
                                </form>
                            </td>
                            <td>
                                <a class="edit" @click="singleItemEditClickHandler"><i class="zmdi zmdi-edit"></i></a>
                                <a class="remove" @click="singleItemDeleteClickHandler"><i class="fas fa-trash-alt"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
              </div>
              <div class="row requition_footer">
                <a><button type="button" class="btn btn-primary btn-global btn-draft mx-2" @click="saveAsDraftClickHandler">Save As Draft</button></a>
                <a><button type="button" class="btn btn-primary btn-global mx-2" @click="sendRequestClickHandler">Send Request</button></a>
                
              </div>
          </div>
          </div>
        </div>
    </div>
</template>

<script>
// import DemoData from '../../DemoData'
// const demoData = new DemoData()

export default {
    props: ["SELECTED_REQUISITION_DATA"],
    components: {},
    data() {
        return {
            items: []
        }
    },
    computed: {
        // REQUISITION_DATA() {
        //     return this.SELECTED_REQUISITION_DATA
        // }
    },
    created() {},
    mounted() {
        // this.items = demoData.demo_data().create_requisition_items_table_data
    },
    methods: {
        editRequisitionClickHandler() {},
        decreaseRequisitionQtyClickHandler(item, index) {
            if(item.req_qty > 1) {
                item.req_qty--
            }
            let selector = document.querySelector('#create-requisition #req_qty_' + index)
            selector.value = item.req_qty
        },
        increaseRequisitionQtyClickHandler(item, index) {
            item.req_qty++
            let selector = document.querySelector('#create-requisition #req_qty_' + index)
            selector.value = item.req_qty
        },
        reqQtyKeyUpEventHandler(item, event, index) {
            console.log(event)
            let selector = document.querySelector('#create-requisition #req_qty_' + index)
            if(parseInt(selector.value) === 0) {
                selector.value = 1
            } else if((selector.value).toString() === '') {
                selector.value = 1
            }
            item.req_qty = selector.value
        },
        reqQtyKeyDownEventHandler(event, index) {
            console.log(index)
            if(event.keyCode === 190 || event.keyCode === 110) {
                event.preventDefault()
            }
        },
        singleItemEditClickHandler() {},
        singleItemDeleteClickHandler() {},
        saveAsDraftClickHandler() {},
        sendRequestClickHandler() {},
    },
    watch: {}
}
</script>

<style scoped>
.transfer-requisition-details {
    height: calc(100vh - (74px + 54px + 32px));
}
.layout-container {
    height: calc(100vh - (74px + 54px + 32px));
}
.requition_area .requition_header .header_top {
    padding: 0;
}
.requition_area .requition_header h5 {
    margin: 0;
}
.requition_area .requition_header .form-group label {
    display: inline-block;
    width: 45%;
}
.requition_area .requition_header .form-group .form-control-sm {
    width: 54%;
    display: inline-block !important;
    min-width: unset;
}
.requition_area .header_top .edit i {
    font-size: 16px;
    cursor: pointer;
}
.requition_area table tbody td a {
    cursor: pointer;
}
.requition_area table tbody td a.edit i {
    font-size: 16px;
}
.requition_area table tbody td a.remove {
    width: 30px;
    height: 30px;
    background-color: #f5bec6;
    border-radius: 50%;
    padding-top: 8px;
}
.requition_area table tbody td a.remove svg {
    color: #df2a43;
    width: 14px;
    height: 14px;
}
.requition_area .quantity-input {
    border: 1px solid #E2EDFA;
}
.requition_area .quantity-input input {
    border: none;
    height: 28px;
}
.requition_area .quantity-input input:focus {
    outline           : 0 !important;
    outline-offset    : 0 !important;
    -moz-box-shadow   : none !important;
    -webkit-box-shadow: none !important;
    box-shadow        : none !important;
    border: none !important;
}
.requition_area .quantity-input .quantity {
    height: 28px;
    margin: 0;
    border-bottom: none;
    font-size: 14px;
}
.requition_area .row.requition_content table tbody {
    height: calc(100vh - (74px + 54px + 32px + (296px)));
}
.requition_area .btn.btn-primary.btn-global {
    background: #026cd1;
    font-size: 14px;
    text-transform: unset;
    box-shadow: none
}
.requition_area .row.requition_footer a:first-child .btn.btn-primary.btn-global {
    color: #000000;
}
</style>