<template>
    <div class="transfer-requisition-details">
        <div class="layout-container">
          <div class="container-fluid">
            <div class="col-12 requition_area">
              <div class="row requition_header"> 
                  <div class="col-12 header_top">
                      <h5>ID: <span>#</span></h5>
                      <a class="edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
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
                        <tr v-for="(item, i) in items" :key="i">
                            <td>
                                <div class="product">
                                <p class="name">{{ item.name }}<span>{{ item.qty }}</span></p>
                                <p class="type">{{ item.type }}</p>
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
                                <form method='POST' action='#'>
                                    <div class="quantity-input">
                                        <input class='minus' type='button' value='-' field='quantity' />
                                        <input class='quantity' type='text' name='quantity' placeholder="0" />
                                        <input class='plus' type='button' value='+' field='quantity' />
                                    </div>
                                </form>
                            </td>
                            <td>
                                <a class="edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                <a class="remove" href=""><i class="fa fa-trash" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
              </div>
              <div class="row requition_footer">
                <a href="./transfer-requition-index.html"><button type="button" class="btn btn-primary btn-global btn-draft mx-2">Save As Draft</button></a>
                <a href="./transfer-requition-2.html"><button type="button" class="btn btn-primary btn-global mx-2">Send Request</button></a>
                
              </div>
          </div>
          </div>
        </div>
    </div>
</template>

<script>
import DemoData from '../../DemoData'
const demoData = new DemoData()

export default {
    props: [],
    components: {},
    data() {
        return {
            items: []
        }
    },
    computed: {},
    created() {},
    mounted() {
        this.items = demoData.demo_data().create_requisition_items_table_data
    },
    methods: {},
    watch: {}
}
</script>

<style scoped>
transfer-requisition-details {
    height: calc(100vh - (74px + 54px + 32px));
}
.layout-container {
    height: calc(100vh - (74px + 54px + 32px));
}
.requition_header h5 {
    margin: 0;
}
.requition_area .requition_header .header_top {
    padding: 0;
}
.requition_header .form-group label {
    display: inline-block;
    width: 45%;
}
.requition_header .form-group .form-control-sm {
    width: 54%;
    display: inline-block !important;
    min-width: unset;
}
.quantity-input {
    border: 1px solid #E2EDFA;
}
.quantity-input input {
    border: none;
    height: 28px;
}
.quantity-input input:focus {
    outline           : 0 !important;
    outline-offset    : 0 !important;
    -moz-box-shadow   : none !important;
    -webkit-box-shadow: none !important;
    box-shadow        : none !important;
    border: none !important;
}
.quantity-input .quantity {
    height: 28px;
    margin: 0;
    border-bottom: none;
    font-size: 14px;
}
.row.requition_content table tbody {
    height: calc(100vh - (74px + 54px + 32px + (290px)));
}
.btn.btn-primary.btn-global {
    background: #026cd1;
    font-size: 14px;
    text-transform: unset;
}
</style>