<template>
    <div class="deliveries-payment-modal">
        <div class="row d-flex justify-content-center">
            <table class="delivery-collection-table">
                <thead>
                    <tr>
                        <th>Payment Mode</th>
                        <th>Description</th>
                        <th>Taka</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                      <tr v-for="(item, i) in 20" :key="i">
                        <td><p>Cash</p></td>
                        <td><p>Description Line Here</p></td>
                        <td><p>300.00</p></td>
                        <td><p>A</p></td>
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
                                    <input type="text" v-model="cash_amount" class="form-control" id="cash_amount" placeholder="Enter Amount">
                                </div>
                            </div>

                            <!-- Challan -->
                            <div class="row hide" id="d-Challan">
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="challan_document_no">Document No</label>
                                    <input type="text" v-model="challan_doc_no" class="form-control" id="challan_document_no" placeholder="Enter Document No">
                                </div>

                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="challan_date">Date</label>
                                    <input type="date" v-model="challan_date" class="form-control" id="challan_date">
                                </div>

                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Name</label>
                                    <select class="form-control" id="bank" v-model="challan_bank_name" @change="bankSelectionOnChange_Challan">
                                        <option :value="null" selected>Select Bank</option>
                                        <option v-for="(item, i) in BANK_INFO" :key="i" :value="item">{{ item.name }}</option>
                                    </select>
                                </div>

                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Branch Name</label>
                                    <select class="form-control" id="bank" v-model="challan_bank_branch_name" @change="bankBranchSelectionOnChange_Challan">
                                        <option :value="null" selected>Select Bank</option>
                                        <option v-for="(item, i) in BANK_BRANCH_INFO_CHALLAN" :key="i" :value="item">{{ item.name }}</option>
                                    </select>
                                </div>

                                <div class="col-12 form-group">
                                    <label for="scannedfile">Scanned File</label>
                                    <input type="file" class="form-control-file" id="scannedfile" @change="imageChooseEventHandler_CHALLAN($event)" accept="image/x-png,image/gif,image/jpeg">
                                </div>

                                <!--Uploaded File-->
                                <div class="col-6">
                                    <div class="uploaded-file">
                                        <img id="challan_img" src="../../../../../assets/images/products/documents.jpg" style="width:100%;">
                                        <!-- <div class="file-info">
                                            <p>File name Line Here</p>
                                            <div class="file-button">
                                                <i class="fa fa-download download" aria-hidden="true"></i>
                                                <i class="fa fa-trash remove" aria-hidden="true"></i>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                            
                            <!-- EFTN -->
                            <div class="row hide" id="d-EFTN">
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="challan_document_no">Document No</label>
                                    <input type="text" v-model="eftn_doc_no" class="form-control" id="challan_document_no" placeholder="Enter Document No">
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="challan_date">Date</label>
                                    <input type="date" v-model="eftn_date" class="form-control" id="challan_date">
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Name</label>
                                    <select class="form-control" id="bank" v-model="eftn_bank_name" @change="bankSelectionOnChange_EFTN">
                                        <option :value="null" selected>Select Bank</option>
                                        <option v-for="(item, i) in BANK_INFO" :key="i" :value="item">{{ item.name }}</option>
                                    </select>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Branch Name</label>
                                    <select class="form-control" id="bank" v-model="eftn_bank_branch_name" @change="bankBranchSelectionOnChange_EFTN">
                                        <option :value="null" selected>Select Bank</option>
                                        <option v-for="(item, i) in BANK_BRANCH_INFO_EFTN" :key="i" :value="item">{{ item.name }}</option>
                                    </select>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="scannedfile">Scanned File</label>
                                    <input type="file" class="form-control-file" id="scannedfile" @change="imageChooseEventHandler_EFTN($event)" accept="image/x-png,image/gif,image/jpeg">
                                </div>

                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="eftn_acount_no">Acount No</label>
                                    <input type="text" v-model="eftn_AC_no" class="form-control" id="eftn_acount_no" placeholder="Enter Acount No">
                                </div> 

                            </div>
                            <!-- Chaque -->
                            <div class="row hide" id="d-Chaque">
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="chaque_document_no">Document No</label>
                                    <input type="text" v-model="cheque_doc_no" class="form-control" id="chaque_document_no" placeholder="Enter Document No">
                                </div>

                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="chaque_date">Date</label>
                                    <input type="date" v-model="cheque_date" class="form-control" id="chaque_date">
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Name</label>
                                    <select class="form-control" id="bank" v-model="cheque_bank_name" @change="bankSelectionOnChange_Cheque">
                                        <option :value="null" selected>Select Bank</option>
                                        <option v-for="(item, i) in BANK_INFO" :key="i" :value="item">{{ item.name }}</option>
                                    </select>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Branch Name</label>
                                    <select class="form-control" id="bank" v-model="cheque_bank_branch_name" @change="bankBranchSelectionOnChange_Cheque">
                                        <option :value="null" selected>Select Bank</option>
                                        <option v-for="(item, i) in BANK_BRANCH_INFO_CHEQUE" :key="i" :value="item">{{ item.name }}</option>
                                    </select>
                                </div>
                                
                                <div class="col-12 form-group">
                                    <label for="scannedfile">Scanned File</label>
                                    <input type="file" class="form-control-file" id="scannedfile" @change="imageChooseEventHandler_CHEQUE($event)" accept="image/x-png,image/gif,image/jpeg">
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
import ERPService from '../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
    data() {
        return {
            payment_popup_modal: false,
            payment_mode: 0,

            cash_amount: null,

            challan_doc_no: null,
            challan_date: null,
            challan_bank_name: null,
            challan_bank_branch_name: null,
            CHALLAN_UPLOADED_IMAGE_NAME: null,
            CHALLAN_UPLOADED_IMAGE_DATA_BASE_64: null,

            eftn_doc_no: null,
            eftn_date: null,
            eftn_bank_name: null,
            eftn_bank_branch_name: null,
            EFTN_UPLOADED_IMAGE_NAME: null,
            EFTN_UPLOADED_IMAGE_DATA_BASE_64: null,
            eftn_AC_no: null,
            
            cheque_doc_no: null,
            cheque_date: null,
            cheque_bank_name: null,
            cheque_bank_branch_name: null,
            CHEQUE_UPLOADED_IMAGE_NAME: null,
            CHEQUE_UPLOADED_IMAGE_DATA_BASE_64: null,

            BANK_INFO: null,
            BANK_BRANCH_INFO_CHALLAN: null,
            BANK_BRANCH_INFO_EFTN: null,
            BANK_BRANCH_INFO_CHEQUE: null,
        }
    },
    computed: {},
    created() {},
    async mounted() {
        await this.LOAD_BANK_LIST__FROM_SERVICE()
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
            // this.$emit('close_payment_modal')
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
        paymentData() {
            let payment = {
                cash_amount: this.cash_amount,
                challan: {
                    doc_no: this.challan_doc_no,
                    date: this.challan_date,
                    bank_name: this.challan_bank_name,
                    branch_name: this.challan_bank_branch_name,
                    UPLOADED_IMAGE_NAME: this.CHALLAN_UPLOADED_IMAGE_NAME,
                    UPLOADED_IMAGE_DATA_BASE_64: this.CHALLAN_UPLOADED_IMAGE_DATA_BASE_64,
                },
                eftn: {
                    doc_no: this.eftn_doc_no,
                    date: this.eftn_date,
                    bank_name: this.eftn_bank_name,
                    branch_name: this.eftn_bank_branch_name,
                    UPLOADED_IMAGE_NAME: this.EFTN_UPLOADED_IMAGE_NAME,
                    UPLOADED_IMAGE_DATA_BASE_64: this.EFTN_UPLOADED_IMAGE_DATA_BASE_64,
                    AC_no: this.eftn_AC_no,

                },
                cheque: {
                    doc_no: this.cheque_doc_no,
                    date: this.cheque_date,
                    bank_name: this.cheque_bank_name,
                    branch_name: this.cheque_bank_branch_name,
                    UPLOADED_IMAGE_NAME: this.CHEQUE_UPLOADED_IMAGE_NAME,
                    UPLOADED_IMAGE_DATA_BASE_64: this.CHEQUE_UPLOADED_IMAGE_DATA_BASE_64,
                }  
            }
            return payment
        },
        saveExitClickHandler() {
            let data = this.paymentData()
            console.log(data)
            this.closePaymentPopupModalClickHandler()
        },
        saveNewPaymentClickHandler() {
            let data = this.paymentData()
            console.log(data)
            this.closePaymentPopupModalClickHandler()
        },
        bankSelectionOnChange_Challan() {
            console.log(this.challan_bank_name)
            this.LOAD_BANK_BRANCH__FROM_SERVICE(this.challan_bank_name.id, 'CHALLAN')
        },
        bankSelectionOnChange_EFTN() {
            console.log(this.eftn_bank_name)
            this.LOAD_BANK_BRANCH__FROM_SERVICE(this.eftn_bank_name.id, 'EFTN')
        },
        bankSelectionOnChange_Cheque() {
            console.log(this.cheque_bank_name)
            this.LOAD_BANK_BRANCH__FROM_SERVICE(this.cheque_bank_name.id, 'CHEQUE')
        },
        // -------------------------------------------------------------------------
        // Image Event
        
        imageChooseEventHandler_CHALLAN(event) {
            this.viewSelectedChallanImage(event, 'challan_img')
            this.CHALLAN_UPLOADED_IMAGE_NAME = null
            this.CHALLAN_UPLOADED_IMAGE_DATA_BASE_64 = null
            let file = event.target.files[0]
            this.CHALLAN_UPLOADED_IMAGE_NAME = event.target.files[0].name
            let reader = new FileReader();
            reader.onloadend = () => {
                this.CHALLAN_UPLOADED_IMAGE_DATA_BASE_64 = reader.result
            }
            reader.readAsDataURL(file)
        },
        imageChooseEventHandler_EFTN(event) {
            // this.viewSelectedChallanImage(event)
            this.EFTN_UPLOADED_IMAGE_NAME = null
            this.EFTN_UPLOADED_IMAGE_DATA_BASE_64 = null
            let file = event.target.files[0]
            this.EFTN_UPLOADED_IMAGE_NAME = event.target.files[0].name
            let reader = new FileReader();
            reader.onloadend = () => {
                this.EFTN_UPLOADED_IMAGE_DATA_BASE_64 = reader.result
            }
            reader.readAsDataURL(file)
        },
        imageChooseEventHandler_CHEQUE(event) {
            // this.viewSelectedChallanImage(event)
            this.CHEQUE_UPLOADED_IMAGE_NAME = null
            this.CHEQUE_UPLOADED_IMAGE_DATA_BASE_64 = null
            let file = event.target.files[0]
            this.CHEQUE_UPLOADED_IMAGE_NAME = event.target.files[0].name
            let reader = new FileReader();
            reader.onloadend = () => {
                this.CHEQUE_UPLOADED_IMAGE_DATA_BASE_64 = reader.result
            }
            reader.readAsDataURL(file)
        },
        viewSelectedChallanImage(event, selector) {
            let output = document.querySelector('#' + selector)
            output.src = URL.createObjectURL(event.target.files[0])
            output.onload = () => {
                URL.revokeObjectURL(output.src)
            }
        },
        // ---------------------------------------------------------------------------
        // SERVICE CALL
        async LOAD_BANK_LIST__FROM_SERVICE() {
            console.log('bank api')
            await service.getBankList_DELIVERIES_DETAILS()
                .then(res => {
                    console.log(res.data.bank_info)
                    this.BANK_INFO = res.data.bank_info
                })
                .catch(err => {
                    if(err) {
                        alert('Bank list load problem ' + err)
                    }
                })
        },
        async LOAD_BANK_BRANCH__FROM_SERVICE(bank_id, payment_mode) {
            await service.getBranchListByBankId_DELIVERIES_DETAILS(bank_id)
                .then(res => {
                    console.log(res.data.branch_info)
                    
                    switch(payment_mode) {
                        case 'CHALLAN':
                            this.BANK_BRANCH_INFO_CHALLAN = res.data.branch_info
                            break
                        case 'EFTN':
                            this.BANK_BRANCH_INFO_EFTN = res.data.branch_info
                            break
                        case 'CHEQUE':
                            this.BANK_BRANCH_INFO_CHEQUE = res.data.branch_info
                            break
                        default:
                            break
                    }
                })
                .catch(err => {
                    if(err) {
                        alert('Bank branch list load problem ' + err)
                    }
                })
        }
    }
}
</script>

<style scoped>
.deliveries-payment-modal {
    height: calc(100vh - var(--used-height) - 166px);
}
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
.deCollection-footer {
    margin: 0;
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