<template>
  <div id="detail-data-list" class="detail-data-list">
    <div class="detail-data-list-inner">
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="component_activate">
            <div class="modal-popup-section-inner update-successfully-modal-inner" style="width: 340px; top: 25%; padding: 20px 30px;">
                <!-- <span class="sort-text" style="color: red;">Development in progress</span> -->
                <p class="jmi-title jmi-title_f16_cl026CD1_left">Select Invoice</p>
                <!-- <p class="jmi-title">No Invoice Found</p> -->
                <div style="text-align: left;">
                    <div class="jmi-scroll-section">
                        <div v-for="(inv, i) in INVOICE_FOR_CURRENT_DS_LIST" :key="i">
                            <input :id="'add-invoice-to-ds-' + i" class="jmi-input-checkbox" type="checkbox" :value="i">
                            <label for="vehicle1">{{ inv.invoice_no }} - {{ inv.sbu_customer_info ? (inv.sbu_customer_info.display_name ? (inv.sbu_customer_info.display_name) : '') : '' }}</label>
                        </div>
                    </div>
                    <div class="jmi-submit-section">
                        <button class="jmi-cancel-btn" @click="cancelClickHandler">Cancel</button>
                        <button class="jmi-confirm-btn" @click="addInvoiceClickHandler">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["tab", "SCHEDULE_DETAILS_LIST", "INVOICE_FOR_CURRENT_DS_LIST"],
  components: {},
  data() {
    return {
        component_activate: false,
        SELECTED_INVOICE: []
    };
  },
  created() {
      console.log(this.tab)
  },
  mounted() {
      console.log(this.tab)
      setTimeout( ()=> {
          this.component_activate = true
      }, 100)

    //   this.INVOICE_LIST_FOR_CURRENT_DS__FROM_SERVICE()
  },
  methods: {
    defaultAllCheckbox() {
        setTimeout( ()=> {
                for(let i=0; i<10; i++) {
                    let radio_selector = document.querySelector('#add-invoice-to-ds-' + i)
                    console.log(radio_selector)
                    radio_selector.checked = false
                }
        }, 10)
    },
    cancelClickHandler() {
        this.$emit('cancel_from_add_invoice_to_ds')
    },
    addInvoiceClickHandler() {
        this.SELECTED_INVOICE = []
        for(let i=0; i<this.INVOICE_FOR_CURRENT_DS_LIST.length; i++) {
            let radio_selector = document.querySelector('#add-invoice-to-ds-' + i)
            if(radio_selector.checked === true) {
                this.SELECTED_INVOICE.push(this.INVOICE_FOR_CURRENT_DS_LIST[i].id)
            }
        }
        if(this.SELECTED_INVOICE.length > 0) {
            console.log(this.SELECTED_INVOICE)
            this.$emit('ADD_INVOICE_TO_CURRENT_SCHEDULE', this.SELECTED_INVOICE)
            this.$emit('cancel_from_add_invoice_to_ds')
        } else {
            alert('Please Select at least one invoice or cancel this')
        }
    },
  },
  watch: {
      component_activate(newTab, oldTab) {
          console.log(newTab + '  ' + oldTab)
      }
  }
};
</script>

<style lang="less" scoped>
@import url("./DetailData.less");
</style>