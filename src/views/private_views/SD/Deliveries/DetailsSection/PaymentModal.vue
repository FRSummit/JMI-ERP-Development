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
                      <tr v-for="(item, i) in COLLECTION_LIST" :key="i">
                        <td><p>{{ item.collection_mode }}</p></td>
                        <td><p>Pending Amount {{ item.pending_amt }}</p></td>
                        <td><p>{{ item.amount }}</p></td>
                        <td>
                            <a class="edit"><i class="zmdi zmdi-edit" @click="tableDataEditClickHandler(item, i)"></i></a>
                            <a class="remove"><i class="fa fa-trash" @click="tableDataRemoveClickHandler(item, i)"></i></a>
                        </td>
                      </tr>

                      <tr v-if="!COLLECTION_LIST || !COLLECTION_LIST.length">
                          <td colspan="4"><p>Data not found</p></td>
                      </tr>
                </tbody>
            </table>
        </div>
        <div class="row deCollection-footer">
            <a><button type="button" class="btn btn-primary btn-global btn-draft mx-2" @click="closePaymentModalClickHandler">Back To Invoice</button></a>
            <a><button type="button" class="btn btn-primary btn-global btn-draft mx-2" @click="closePaymentForThisInvoiceClickHandler">Close</button></a>
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
                                    <input type="number" v-model="cash_amount" class="form-control" id="cash_amount" placeholder="Enter Amount">
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

                                <div class="col-lg-12 col-md-12 col-12 form-group">
                                    <label for="bank">Bank Name</label>
                                    <select class="form-control" id="bank_name_selection_challan" v-model="challan_bank_name" @change="bankSelectionOnChange_Challan">
                                        <option :value="null" selected>Select Bank</option>
                                        <option v-for="(item, i) in BANK_INFO" :key="i" :value="item">{{ item.name }}</option>
                                    </select>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group" style="margin-right: 2%;">
                                    <label for="bank">District</label>
                                    <select class="form-control" id="bank" v-model="bank_branch_district" @change="bankBranchDistrictOnChange">
                                        <option :value="null" selected>Select District</option>
                                        <option v-for="(item, i) in DISTRICT_LIST" :key="i" :value="item">{{ item }}</option>
                                    </select>
                                </div>

                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Branch Name</label>
                                    <select class="form-control" id="bank" v-model="challan_bank_branch_name" @change="bankBranchSelectionOnChange_Challan">
                                        <option :value="null" selected>Select Branch</option>
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
                                
                                <div class="col-lg-12 col-md-12 col-12 form-group">
                                    <label for="bank">Bank Name</label>
                                    <select class="form-control" id="bank" v-model="eftn_bank_name" @change="bankSelectionOnChange_EFTN">
                                        <option :value="null" selected>Select Bank</option>
                                        <option v-for="(item, i) in BANK_INFO" :key="i" :value="item">{{ item.name }}</option>
                                    </select>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group" style="margin-right: 2%;">
                                    <label for="bank">District</label>
                                    <select class="form-control" id="bank" v-model="bank_branch_district" @change="bankBranchDistrictOnChange">
                                        <option :value="null" selected>Select District</option>
                                        <option v-for="(item, i) in DISTRICT_LIST" :key="i" :value="item">{{ item }}</option>
                                    </select>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Branch Name</label>
                                    <select class="form-control" id="bank_name_selection_eftn" v-model="eftn_bank_branch_name" @change="bankBranchSelectionOnChange_EFTN">
                                        <option :value="null" selected>Select Branch</option>
                                        <option v-for="(item, i) in BANK_BRANCH_INFO_EFTN" :key="i" :value="item">{{ item.name }}</option>
                                    </select>
                                </div>

                                <div class="col-lg-12 col-md-12 col-12 form-group">
                                    <label for="eftn_account_no">Account No</label>
                                    <input type="text" v-model="eftn_AC_no" class="form-control" id="eftn_account_no" placeholder="Enter Account No">
                                </div> 
                                
                                <div class="col-lg-12 col-md-12 col-12 form-group">
                                    <label for="scannedfile">Scanned File</label>
                                    <input type="file" class="form-control-file" id="scannedfile" @change="imageChooseEventHandler_EFTN($event)" accept="image/x-png,image/gif,image/jpeg">
                                </div>

                                <!--Uploaded File-->
                                <div class="col-6">
                                    <div class="uploaded-file">
                                        <img id="eftn_img" src="../../../../../assets/images/products/documents.jpg" style="width:100%;">
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
                                
                                <div class="col-lg-12 col-md-12 col-12 form-group">
                                    <label for="bank">Bank Name</label>
                                    <select class="form-control" id="bank_name_selection_cheque" v-model="cheque_bank_name" @change="bankSelectionOnChange_Cheque">
                                        <option :value="null" selected>Select Bank</option>
                                        <option v-for="(item, i) in BANK_INFO" :key="i" :value="item">{{ item.name }}</option>
                                    </select>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group" style="margin-right: 2%;">
                                    <label for="bank">District</label>
                                    <select class="form-control" id="bank" v-model="bank_branch_district" @change="bankBranchDistrictOnChange">
                                        <option :value="null" selected>Select District</option>
                                        <option v-for="(item, i) in DISTRICT_LIST" :key="i" :value="item">{{ item }}</option>
                                    </select>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-12 form-group">
                                    <label for="bank">Bank Branch Name</label>
                                    <select class="form-control" id="bank" v-model="cheque_bank_branch_name" @change="bankBranchSelectionOnChange_Cheque">
                                        <option :value="null" selected>Select Branch</option>
                                        <option v-for="(item, i) in BANK_BRANCH_INFO_CHEQUE" :key="i" :value="item">{{ item.name }}</option>
                                    </select>
                                </div>

                                <div class="col-lg-12 col-md-12 col-12 form-group">
                                    <label for="eftn_account_no">Account No</label>
                                    <input type="text" v-model="cheque_AC_no" class="form-control" id="eftn_account_no" placeholder="Enter Account No">
                                </div> 
                                
                                <div class="col-lg-12 col-md-12 form-group">
                                    <label for="scannedfile">Scanned File</label>
                                    <input type="file" class="form-control-file" id="scannedfile" @change="imageChooseEventHandler_CHEQUE($event)" accept="image/x-png,image/gif,image/jpeg">
                                </div>

                                <!--Uploaded File-->
                                <div class="col-6">
                                    <div class="uploaded-file">
                                        <img id="cheque_img" src="../../../../../assets/images/products/documents.jpg" style="width:100%;">
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
        <!-- Success Message -->
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="msg_popup_modal">
            <div class="modal-popup-section-inner update-successfully-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">{{ msg_popup_modal_msg }}</p>
            </div>
        </div>
        <!-- CONFIRMATION MODAL -->
        <div class="modal-popup-section order-proceed-modal" v-if="payment_confirmation_popup_modal">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">Are you sure?</p>
                <p class="popup-desc">{{ payment_confirmation_popup_modal_msg ? payment_confirmation_popup_modal_msg : '' }}</p>
                <span class="divider"></span>
                <div class="popup-submit-section">
                <div class="popup-cancel-btn-section">
                    <span @click="cancelPaymentConfirmationClickHandler">Cancel</span>
                </div>
                <div class="popup-confirm-btn-section">
                    <span @click="confirmPaymentConfirmationClickHandler">Confirm</span>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ERPService from '../../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
    props: ["INVOICE_DATA_TO_SEND", "ORDER_TABLE_PROD_DATA_LIST_TO_SEND", "ORDER_TABLE_DATA_IS_CHANGE"],
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
            cheque_AC_no: null,

            BANK_INFO: null,
            BANK_BRANCH_INFO_CHALLAN: null,
            BANK_BRANCH_INFO_EFTN: null,
            BANK_BRANCH_INFO_CHEQUE: null,

            msg_popup_modal: false,
            msg_popup_modal_msg: null,

            selected_bank_id: null,
            bank_branch_district: null,
            DISTRICT_LIST: [
                            'BAGERHAT', 'BANDARBAN', 'BARGUNA', 'BARISHAL', 'BHOLA', 'BOGRA', 'BRAHMANBARIA',
                            'CHANDPUR', 'CHITTAGONG', 'CHUADANGA', 'COMILLA', 'COXS BAZAR', 'DHAKA-NORTH',
                            'DHAKA-SOUTH', 'DINAJPUR', 'FARIDPUR', 'FENI', 'GAIBANDHA', 'GAZIPUR',
                            'GOPALGANJ', 'HABIGANJ', 'JAMALPUR', 'JESSORE', 'JHALOKATHI', 'JHENAIDAH',
                            'JOYPURHAT', 'KHAGRACHARI', 'KHULNA', 'KISHOREGANJ', 'KURIGRAM', 'KUSHTIA',
                            'LAKSHMIPUR', 'LALMONIRHAT', 'MADARIPUR', 'MAGURA', 'MANIKGANJ', 'MEHERPUR',
                            'MOULVI BAZAR', 'MUNSHIGANJ', 'MYMENSINGH', 'NAOGAON', 'NARAIL', 'NARAYANGANJ',
                            'NARSHINGDI', 'NATORE', 'NAWABGANJ', 'NETROKONA', 'NILPHAMARI', 'NOAKHALI',
                            'PABNA', 'PANCHAGARH', 'PATUAKHALI', 'PIROJPUR', 'RAJBARI', 'RAJSHAHI',
                            'RANGAMATI', 'RANGPUR', 'SATKHIRA', 'SHARIATPUR', 'SHERPUR', 'SIRAJGANJ',
                            'SUNAMGANJ', 'SYLHET', 'TANGAIL', 'THAKURGAON'
                        ],
            
            COLLECTION_LIST: null,

            payment_confirmation_popup_modal: false,
            payment_confirmation_popup_modal_msg: null,
            PAYMENT_CONFIRM_FOR: null,
        }
    },
    computed: {
    },
    created() {},
    async mounted() {
        await this.COLLECTION_LIST__FROM_SERVICE()
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
            this.$emit('close_payment_modal')
        },
        closePaymentForThisInvoiceClickHandler() {
            this.$store.state.CHANGES_DETECTED_IN_DETAILS_SECTION = new Date()
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
                    UPLOADED_IMAGE_DATA_BASE_64: this.CHALLAN_UPLOADED_IMAGE_DATA_BASE_64
                },
                eftn: {
                    doc_no: this.eftn_doc_no,
                    date: this.eftn_date,
                    bank_name: this.eftn_bank_name,
                    branch_name: this.eftn_bank_branch_name,
                    UPLOADED_IMAGE_NAME: this.EFTN_UPLOADED_IMAGE_NAME,
                    UPLOADED_IMAGE_DATA_BASE_64: this.EFTN_UPLOADED_IMAGE_DATA_BASE_64,
                    AC_no: this.eftn_AC_no

                },
                cheque: {
                    doc_no: this.cheque_doc_no,
                    date: this.cheque_date,
                    bank_name: this.cheque_bank_name,
                    branch_name: this.cheque_bank_branch_name,
                    UPLOADED_IMAGE_NAME: this.CHEQUE_UPLOADED_IMAGE_NAME,
                    UPLOADED_IMAGE_DATA_BASE_64: this.CHEQUE_UPLOADED_IMAGE_DATA_BASE_64,
                    AC_no: this.cheque_AC_no
                }  
            }
            return payment
        },
        finalPaymentDataByMode(data) {
            let payment = {
                invoice_id: this.INVOICE_DATA_TO_SEND.invoice_id,
                invoice_details: this.ORDER_TABLE_PROD_DATA_LIST_TO_SEND,
                collection_date: this.INVOICE_DATA_TO_SEND.collection_date,
                ds_id: this.INVOICE_DATA_TO_SEND.ds_id,
                customer_id: this.INVOICE_DATA_TO_SEND.customer_id,

                collection_mode: null,
                doc_no: null,
                doc_date: null,
                base64_encoded_file: null,
                file_original_name: null,
                bank_code: null,
                branch_code: null,
                bank_ac_no: null,
                amount: null
            }
            console.log(data)
            switch(this.payment_mode) {
                case 0:
                    Object.assign(payment, {collection_mode: 'CASH', amount: data.cash_amount})
                    break
                case 1:
                    Object.assign(payment, {
                        collection_mode: 'CHALLAN',
                        doc_no: data.challan.doc_no,
                        doc_date: data.challan.date,
                        base64_encoded_file: data.challan.UPLOADED_IMAGE_DATA_BASE_64,
                        file_original_name: data.challan.UPLOADED_IMAGE_NAME,
                        bank_code: data.challan.bank_name.id,
                        branch_code: data.challan.branch_name.id,
                        amount: data.cash_amount
                    })
                    break
                case 2:
                    Object.assign(payment, {
                        collection_mode: 'EFTN',
                        doc_no: data.eftn.doc_no,
                        doc_date: data.eftn.date,
                        base64_encoded_file: data.eftn.UPLOADED_IMAGE_DATA_BASE_64,
                        file_original_name: data.eftn.UPLOADED_IMAGE_NAME,
                        bank_code: data.eftn.bank_name.id,
                        branch_code: data.eftn.branch_name.id,
                        bank_ac_no: data.eftn.AC_no,
                        amount: data.cash_amount
                    })
                    break
                case 3:
                    Object.assign(payment, {
                        collection_mode: 'CHEQUE',
                        doc_no: data.cheque.doc_no,
                        doc_date: data.cheque.date,
                        base64_encoded_file: data.cheque.UPLOADED_IMAGE_DATA_BASE_64,
                        file_original_name: data.cheque.UPLOADED_IMAGE_NAME,
                        bank_code: data.cheque.bank_name.id,
                        branch_code: data.cheque.branch_name.id,
                        bank_ac_no: data.cheque.AC_no,
                        amount: data.cash_amount
                    })
                    break
                default:
                    break
            }
            // this.payment_confirmation_popup_modal_msg = 'Your receive amount is ' + payment.amount
            return payment
        },
        async saveExitClickHandler() {
            this.PAYMENT_CONFIRM_FOR = 'SAVE AND EXIT'
            if(this.payment_confirmation_popup_modal) {
                this.payment_confirmation_popup_modal = false
            } else {
                this.payment_confirmation_popup_modal = true

                let data = this.finalPaymentDataByMode(this.paymentData())
                this.payment_confirmation_popup_modal_msg = 'Your receive amount is ' + data.amount
            }
        },
        async saveNewPaymentClickHandler() {
            this.PAYMENT_CONFIRM_FOR = 'SAVE AND NEW'
            if(this.payment_confirmation_popup_modal) {
                this.payment_confirmation_popup_modal = false
            } else {
                this.payment_confirmation_popup_modal = true

                let data = this.finalPaymentDataByMode(this.paymentData())
                this.payment_confirmation_popup_modal_msg = 'Your receive amount is ' + data.amount
            }
        },
        cancelPaymentConfirmationClickHandler() {
            this.payment_confirmation_popup_modal = false
            this.payment_confirmation_popup_modal_msg = null
        },
        async confirmPaymentConfirmationClickHandler() {
            let data = this.finalPaymentDataByMode(this.paymentData())
            switch(this.PAYMENT_CONFIRM_FOR) {
                case 'SAVE AND EXIT':
                    // console.log(this.paymentData())
                    // console.log(this.finalPaymentDataByMode(this.paymentData()))
                    console.log(data)
                    if(!this.COLLECTION_LIST || !this.COLLECTION_LIST.length) {
                        // console.log(this.COLLECTION_LIST)
                        await this.SAVE_INVOICE_DELIVERY_INFO_WITH_PAYMENT__FROM_SERVICE(data)
                    } else {
                        // console.log(this.COLLECTION_LIST)
                        await this.RECEIVE_PAYMENT_WITH_DELIVERY_INVOICE__FROM_SERVICE(data)
                    }
                    this.closePaymentPopupModalClickHandler()
                    this.defaultModalValueForNewPayment()
                    break
                case 'SAVE AND NEW':
                    // let data = this.finalPaymentDataByMode(this.paymentData())
                    if(!this.COLLECTION_LIST || !this.COLLECTION_LIST.length) {
                        await this.SAVE_INVOICE_DELIVERY_INFO_WITH_PAYMENT__FROM_SERVICE(data)
                    } else {
                        await this.RECEIVE_PAYMENT_WITH_DELIVERY_INVOICE__FROM_SERVICE(data)
                    }
                    this.defaultModalValueForNewPayment()
                    break
                default:
                    break
            }
            this.PAYMENT_CONFIRM_FOR = null
        },
        defaultModalValueForNewPayment() {
            this.payment_mode = 0
            this.paymentModeOnChange()

            this.cash_amount = null

            this.challan_doc_no = null
            this.challan_date = null
            this.challan_bank_name = null
            this.challan_bank_branch_name = null
            this.CHALLAN_UPLOADED_IMAGE_NAME = null
            this.CHALLAN_UPLOADED_IMAGE_DATA_BASE_64 = null

            this.eftn_doc_no = null
            this.eftn_date = null
            this.eftn_bank_name = null
            this.eftn_bank_branch_name = null
            this.EFTN_UPLOADED_IMAGE_NAME = null
            this.EFTN_UPLOADED_IMAGE_DATA_BASE_64 = null
            this.eftn_AC_no = null
            
            this.cheque_doc_no = null
            this.cheque_date = null
            this.cheque_bank_name = null
            this.cheque_bank_branch_name = null
            this.CHEQUE_UPLOADED_IMAGE_NAME = null
            this.CHEQUE_UPLOADED_IMAGE_DATA_BASE_64 = null
            this.cheque_AC_no = null
        },
        bankSelectionOnChange_Challan() {
            console.log(this.challan_bank_name)
            this.selected_bank_id = this.challan_bank_name.id
            // this.LOAD_BANK_BRANCH__FROM_SERVICE(this.challan_bank_name.id, 'CHALLAN')
            document.getElementById('bank_name_selection_challan').options[0].selected = true
        },
        bankSelectionOnChange_EFTN() {
            console.log(this.eftn_bank_name)
            this.selected_bank_id = this.eftn_bank_name.id
            // this.LOAD_BANK_BRANCH__FROM_SERVICE(this.eftn_bank_name.id, 'EFTN')
            document.getElementById('bank_name_selection_eftn').options[0].selected = true
        },
        bankSelectionOnChange_Cheque() {
            console.log(this.cheque_bank_name)
            this.selected_bank_id = this.cheque_bank_name.id
            // this.LOAD_BANK_BRANCH__FROM_SERVICE(this.cheque_bank_name.id, 'CHEQUE')
            document.getElementById('bank_name_selection_cheque').options[0].selected = true
        },
        bankBranchDistrictOnChange() {
            console.log(this.bank_branch_district)
            this.LOAD_BANK_BRANCH__FROM_SERVICE(this.selected_bank_id)
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
            this.viewSelectedChallanImage(event, 'eftn_img')
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
            this.viewSelectedChallanImage(event, 'cheque_img')
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
        async COLLECTION_LIST__FROM_SERVICE() {
            await service.getCollectionList_DELIVERIES_DETAILS(this.INVOICE_DATA_TO_SEND.customer_id, this.INVOICE_DATA_TO_SEND.ds_id)
                .then(res => {
                    console.log(res.data)
                    this.COLLECTION_LIST = res.data.collection_list
                })
                .catch(err => {
                    if(err) {
                        alert('Bank list load problem ' + err)
                    }
                })
        },
        async LOAD_BANK_LIST__FROM_SERVICE() {
            console.log('bank api')
            await service.getBankList_DELIVERIES_DETAILS()
                .then(res => {
                    console.log(res.data.bank_info)
                    this.BANK_INFO = res.data.bank_info
                })
                .catch(err => {
                    if(err) {
                        console.log('Bank list load problem ' + err)
                    }
                })
        },
        async LOAD_BANK_BRANCH__FROM_SERVICE(bank_id) {
            await service.getBranchListByBankId_DELIVERIES_DETAILS(bank_id, this.bank_branch_district)
                .then(res => {
                    console.log(res.data.branch_info)
                    
                    switch(this.payment_mode) {
                        case 1:
                            this.BANK_BRANCH_INFO_CHALLAN = res.data.branch_info
                            break
                        case 2:
                            this.BANK_BRANCH_INFO_EFTN = res.data.branch_info
                            break
                        case 3:
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
        },
        async SAVE_INVOICE_DELIVERY_INFO_WITH_PAYMENT__FROM_SERVICE(data) {
            this.payment_confirmation_popup_modal = false
            this.payment_confirmation_popup_modal_msg = null
            this.msg_popup_modal = true
            this.msg_popup_modal_msg = 'Please wait. We are processing...'
            service.getSaveInvoiceDeliveryInfoWithPayment_DELIVERIES_DETAILS(data)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.msg_popup_modal_msg = res.data.message
                        this.COLLECTION_LIST__FROM_SERVICE()
                    } else {
                        this.msg_popup_modal_msg = res.data.message + ' Response code : ' + res.data.response_code + '.'
                    }
                    setTimeout( () => {
                        this.msg_popup_modal = false
                        this.msg_popup_modal_msg = null
                    }, 2000)
                })
                .catch(err => {
                    if(err) {
                        // alert('Save problem. Server Error ' + err)
                        this.msg_popup_modal_msg = err
                        setTimeout( () => {
                            this.msg_popup_modal = false
                            this.msg_popup_modal_msg = null
                        }, 2000)
                    }
                })
        },
        async RECEIVE_PAYMENT_WITH_DELIVERY_INVOICE__FROM_SERVICE(data) {
            this.payment_confirmation_popup_modal = false
            this.payment_confirmation_popup_modal_msg = null
            this.msg_popup_modal = true
            this.msg_popup_modal_msg = 'Please wait. We are processing...'
            service.getReceivePaymentWithDeliveryInvoice_DELIVERIES_DETAILS(data)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.msg_popup_modal_msg = res.data.message
                        this.COLLECTION_LIST__FROM_SERVICE()
                    } else {
                        this.msg_popup_modal_msg = res.data.message + ' Response code : ' + res.data.response_code + '.'
                    }
                    setTimeout( () => {
                        this.msg_popup_modal = false
                        this.msg_popup_modal_msg = null
                    }, 2000)
                })
                .catch(err => {
                    if(err) {
                        // alert('Save problem. Server Error ' + err)
                        this.msg_popup_modal_msg = err
                        setTimeout( () => {
                            this.msg_popup_modal = false
                            this.msg_popup_modal_msg = null
                        }, 2000)
                    }
                })
        },
    },
    watch: {
        cash_amount(newVal) {
            if(newVal) {
                // this.payment_confirmation_popup_modal = false
                this.payment_confirmation_popup_modal_msg = 'Your receive amount is ' + newVal
            }
        },
        payment_mode(newVal) {
            if(newVal) {
                // this.payment_confirmation_popup_modal = false
                this.payment_confirmation_popup_modal_msg = 'Your receive amount is ' + this.cash_amount
            }
        },
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
    flex: 0 0 48%;
}
.col-lg-6:nth-child(odd) {
    margin-right: 2%;
}
.col-12 {
    padding: 12px 0;
}
table tbody tr:hover {
    background-color: #E5F0FA;
}
</style>