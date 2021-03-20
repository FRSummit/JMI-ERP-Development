<template>
  <div id="sd-balance-sheet" class="sd-balance-sheet">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="sd-balance-sheet-inner">
        <div class="row">
            <div class="col-lg-8 col-md-8">
                <div class="input-section">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 input-section-inner">
                            <label>Particular</label>
                            <input type="text" v-model="particular">
                        </div>
                        <div class="col-lg-3 col-md-4 input-section-inner">
                            <label>Amount</label>
                            <input type="number" v-model="amount" min="0">
                        </div>
                        <div class="col-lg-3 col-md-2 input-section-inner">
                            <button class="jmi-confirm-btn" @click="addParticulatClickHandler">Add</button>
                        </div>
                    </div>
                </div>
                <div class="details-section">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 input-section-inner">
                            <table class="data-table" cellspacing="0" width="100%">
                                <thead>
                                <tr class="data-table-head-row">
                                    <th style="width: 10%; text-align: left;">Sl No</th>
                                    <th style="width: 60%; text-align: left;">Particular</th>
                                    <th style="width: 20%; text-align: right;">Amount</th>
                                    <th style="width: 10%; text-align: right;"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(pp, i) in particular_amount_list" :key="i" class="data-table-data-row">
                                    <td style="width: 10%; text-align: left;">{{ i + 1 }}</td>
                                    <td style="width: 60%; text-align: left;">{{ pp.name }}</td>
                                    <td style="width: 20%; text-align: right;">{{ pp.amount }}</td>
                                    <td style="width: 10%; text-align: right;"><span class="jmi-del-span-icon" @click="deleteOrderitemClickHandler(pp, i)"><i class="fas fa-trash-alt"></i></span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="input-section">
                    <div class="row summery">
                        <div class="col-lg-12 col-md-12">
                            <p class="jmi-balance-collection">Collection<span>13032.20</span></p>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <p class="jmi-balance-expence">Expence<span>13032.20</span></p>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <p class="jmi-balance-total">Total<span>13032.20</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumbT2/HeadingTitleBreadcrumb";

export default {
  components: {
    Heading,
  },
  data() {
    return {
      routeName: "Balance Sheet",
      parentPath: "Local Sales",
      pathName: [],
      particular: null,
      amount: 0.00,
      isActive: false,
      particular_amount_list: [
          {
              name: 'Reason 1 ....................',
              amount: '15000.00'
          },
          {
              name: 'Reason 1 ....................',
              amount: '15000.00'
          },
          {
              name: 'Reason 1 ....................',
              amount: '15000.00'
          },
          {
              name: 'Reason 1 ....................',
              amount: '15000.00'
          }
      ]
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  mounted() {
    // this.showInvoiceCountInformationMessagePopup()
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{name: "Features"},{ name: "Local Sales" }, { name: "Balance Sheet" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    addParticulatClickHandler() {
        console.log(this.particular + '    ' + this.amount)
        if(this.isActive) {
            let newP = {
                name: this.particular,
                amount: this.amount
            }
            this.particular_amount_list.push(newP)
            this.particular = ''
            this.amount = ''
            this.isActive = false
        }
    }
  },
  computed: {
        propertyAAndPropertyB() {
          return `${this.particular}|${this.amount}`;
        },
  },
  watch: {
      propertyAAndPropertyB(newVal, oldVal) {
          const [oldPropertyA, oldPropertyB] = oldVal.split('|')
          const [newPropertyA, newPropertyB] = newVal.split('|')
          console.log(oldPropertyA + '  ' + oldPropertyB)
          console.log(newPropertyA + '  ' + newPropertyB)
        // console.log()
        if(newVal !== oldVal) {
            this.isActive = true
        }
      }
  }
};
</script>