<template>
    <div class="deliveries-payment-modal">
        <div class="row d-flex justify-content-center">
            <table class="col-12 delivery-collection-table">
                <thead>
                    <tr>
                        <th>Payment Mode</th>
                        <th>Description</th>
                        <th>Taka</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                      <tr v-for="(item, i) in 20" :key="i">
                        <td><p>Cash</p></td>
                        <td><p>Description Line Here</p></td>
                        <td><p>300.00</p></td>
                        <td>
                            <a class="edit"><i class="zmdi zmdi-edit" @click="tableDataEditClickHandler(item, i)"></i></a>
                            <a class="remove"><i class="fa fa-trash" @click="tableDataRemoveClickHandler(item, i)"></i></a>
                        </td>
                      </tr>
                </tbody>
            </table>
        </div>
        <div class="row deCollection-footer">
            <a><button type="button" class="btn btn-primary btn-global btn-draft mx-2" @click="closePaymentModalClickHandler">Close</button></a>
            <!-- <a data-toggle="modal" data-target="#new-payment-modal"><button type="button" class="btn btn-primary btn-global mx-2">New Payment</button></a> -->
            <a><button type="button" class="btn btn-primary btn-global mx-2" @click="paymentPopupModalClickHandler">New Payment</button></a>
        </div>
        
        <!------------ Start Add New Payment Modal------------>
        <div class="modal-popup-section order-proceed-modal" v-if="payment_popup_modal">
            <div class="modal" id="new-payment-modal" tabindex="-1" role="dialog" aria-labelledby="AddCollection" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Payment</h5>
                            <button type="button" @click="closePaymentPopupModalClickHandler" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-6 form-group">
                                    <label for="payment_mode">Payment Mode</label>
                                    <select class="form-control" id="payment_mode" v-model="payment_mode" @change="paymentModeOnChange">
                                        <option :value="0" selected>Cash</option>
                                        <option :value="1">Challan</option>
                                        <option :value="2">EFTN</option>
                                        <option :value="3">Chaque</option>
                                    </select>
                                </div>

                                <div class="col-lg-6 form-group">
                                    <label for="cash_amount">Amount</label>
                                    <input type="text" class="form-control" id="cash_amount" placeholder="Enter Amount">
                                </div>
                            </div>

                            <!-- Challan -->
                            <div class="row hide" id="d-Challan">
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="challan_document_no">Document No</label>
                                    <input type="text" class="form-control" id="challan_document_no" placeholder="Enter Document No">
                                </div>

                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="challan_date">Date</label>
                                    <input type="date" class="form-control" id="challan_date">
                                </div>

                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Name</label>
                                    <select class="form-control" id="bank">
                                        <option value="1">Select Bank</option>
                                        <option value="2">Dhaka Bank Ltd</option>
                                        <option value="3">City Bank Ltd</option>
                                    </select>
                                </div>

                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Branch Name</label>
                                    <select class="form-control" id="bank">
                                        <option value="1">Select Branch</option>
                                        <option value="2">Dhanmondi Branch</option>
                                        <option value="3">kalabagan Branch</option>
                                    </select>
                                </div>

                                <div class="col-12 form-group">
                                    <label for="scannedfile">Scanned File</label>
                                    <input type="file" class="form-control-file" id="scannedfile">
                                </div>

                                <!--Uploaded File-->
                                <div class="col-6">
                                    <div class="uploaded-file">
                                        <img src="../../../../../assets/images/products/documents.jpg" style="width:100%;">
                                        <div class="file-info">
                                            <p>File name Line Here</p>
                                            <div class="file-button">
                                                <i class="fa fa-download download" aria-hidden="true"></i>
                                                <i class="fa fa-trash remove" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--Uploaded File-->
                                <div class="col-6">
                                    <div class="uploaded-file">
                                        <img src="../../../../../assets/images/products/documents.jpg" style="width:100%;">
                                        <div class="file-info">
                                            <p>File name Line Here</p>
                                            <div class="file-button">
                                            <i class="fa fa-download download" aria-hidden="true"></i>
                                            <i class="fa fa-trash remove" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- EFTN -->
                            <div class="row hide" id="d-EFTN">
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="challan_document_no">Document No</label>
                                    <input type="text" class="form-control" id="challan_document_no" placeholder="Enter Document No">
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="challan_date">Date</label>
                                    <input type="date" class="form-control" id="challan_date">
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Name</label>
                                    <select class="form-control" id="bank">
                                    <option value="1">Select Bank</option>
                                    <option value="2">Dhaka Bank Ltd</option>
                                    <option value="3">City Bank Ltd</option>
                                    </select>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Branch Name</label>
                                    <select class="form-control" id="bank">
                                    <option value="1">Select Branch</option>
                                    <option value="2">Dhanmondi Branch</option>
                                    <option value="3">kalabagan Branch</option>
                                    </select>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="scannedfile">Scanned File</label>
                                    <input type="file" class="form-control-file" id="scannedfile">
                                </div>

                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="eftn_acount_no">Acount No</label>
                                    <input type="text" class="form-control" id="eftn_acount_no" placeholder="Enter Acount No">
                                </div> 

                            </div>
                            <!-- Chaque -->
                            <div class="row hide" id="d-Chaque">
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="chaque_document_no">Document No</label>
                                    <input type="text" class="form-control" id="chaque_document_no" placeholder="Enter Document No">
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="chaque_date">Date</label>
                                    <input type="date" class="form-control" id="chaque_date">
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Name</label>
                                    <select class="form-control" id="bank">
                                        <option value="1">Select Bank</option>
                                        <option value="2">Dhaka Bank Ltd</option>
                                        <option value="3">City Bank Ltd</option>
                                    </select>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Branch Name</label>
                                    <select class="form-control" id="bank">
                                        <option value="1">Select Branch</option>
                                        <option value="2">Dhanmondi Branch</option>
                                        <option value="3">kalabagan Branch</option>
                                    </select>
                                </div>
                                
                                <div class="col-12 form-group">
                                    <label for="scannedfile">Scanned File</label>
                                    <input type="file" class="form-control-file" id="scannedfile">
                                </div>
                            </div>

                            <div class="modal-footer justify-content-center">
                                <a><button type="button" class="btn btn-primary btn-global btn-draft mx-2" @click="saveExitClickHandler">Save &amp; Exit</button></a>
                                <a><button type="button" class="btn btn-primary btn-global mx-2" @click="saveNewPaymentClickHandler">Save &amp; New Payment</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!------------ End Add New Payment Modal------------>
    </div>
</template>

<script>
export default {
    data() {
        return {
            payment_popup_modal: false,
            payment_mode: 0,
        }
    },
    methods: {
        // -------------------------------------------------------------------------
        // Table
        tableDataEditClickHandler(item, i) {
            console.log(i)
            console.log(item)
        },
        tableDataRemoveClickHandler(item, i) {
            console.log(i)
            console.log(item)
        },
        // -------------------------------------------------------------------------
        // Submition Section
        closePaymentModalClickHandler() {
            this.$emit('close_payment_modal')
        },
        paymentPopupModalClickHandler() {
            if(this.payment_popup_modal) {
                this.payment_popup_modal = false
            } else {
                this.payment_popup_modal = true
            }
            console.log(this.payment_popup_modal)
        },
        // -------------------------------------------------------------------------
        // Payment Modal
        closePaymentPopupModalClickHandler() {
            this.payment_popup_modal = false
            this.payment_mode = 0
        },
        paymentModeOnChange() {
            switch(this.payment_mode) {
                case 0:
                    document.getElementById('d-Challan').className = 'row hide'
                    document.getElementById('d-EFTN').className = 'row hide'
                    document.getElementById('d-Chaque').className = 'row hide'
                    console.log(this.payment_mode)
                    break
                case 1:
                    document.getElementById('d-Challan').className = 'row'
                    document.getElementById('d-EFTN').className = 'row hide'
                    document.getElementById('d-Chaque').className = 'row hide'
                    console.log(this.payment_mode)
                    break
                case 2:
                    document.getElementById('d-Challan').className = 'row hide'
                    document.getElementById('d-EFTN').className = 'row'
                    document.getElementById('d-Chaque').className = 'row hide'
                    console.log(this.payment_mode)
                    break
                case 3:
                    document.getElementById('d-Challan').className = 'row hide'
                    document.getElementById('d-EFTN').className = 'row hide'
                    document.getElementById('d-Chaque').className = 'row'
                    console.log(this.payment_mode)
                    break
                default:
                    break
            }
        },
        // -------------------------------------------------------------------------
        // Payment Modal Submission
        saveExitClickHandler() {
            this.closePaymentPopupModalClickHandler()
        },
        saveNewPaymentClickHandler() {
            this.closePaymentPopupModalClickHandler()
        }
    }
}
</script>

<style scoped>
.delivery-collection-table i {
    font-size: 16px;
    color: var(--blue);
    background-color: transparent;
}
.btn:focus, .btn-large:focus, .btn-small:focus, .btn-floating:focus {
    background-color: var(--blue);
}
#new-payment-modal {
    position: absolute;
    display: block;
    top: 10%;
    width: 500px;
    height: max-content;
}
.modal-dialog-centered {
    margin: 0;
}
.modal .modal-content {
    border: none;
}
.modal-body .form-group input,
input[type=file] {
    height: 36px;
}
input:focus {
    outline           : 0;
    outline-offset    : 0;
    -moz-box-shadow   : none;
    -webkit-box-shadow: none;
    box-shadow        : none;
}

.col-lg-6 {
    flex: 0 0 49%;
}
.col-lg-6:nth-child(odd) {
    margin-right: 2%;
}
.col-12 {
    padding: 12px 0;
}
</style>