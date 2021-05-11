<template>
  <div id="basic-info-section" class="basic-info-section">
      <div class="basic-info-section-inner">
          <!-- PERSONAL INFO -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Account Info</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Total Order</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Total Invoice:</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">In Transit:</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Credit Limit:</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Current Outstanding:</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Available Limit:</span>
                              <span class="data">{{ "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="transection-history-txt"><b>Transection History</b><input type="month" v-model="mmyyyy_picker" id="bdaymonth" name="bdaymonth" @change="mmyyyyOnChangeHandler" style="margin-left: 10%;"></p>
                      </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Particular</th>
                                    <th style="text-align: right;">Debit</th>
                                    <th style="text-align: right;">Credit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, i) in 20" :key="i" :class="i === 1 ? 'active' : ''">
                                    <td><p>20 June, 2020</p></td>
                                    <td><p>No Data Found</p></td>
                                    <td style="text-align: right;"><p>200</p></td>
                                    <td style="text-align: right;"><p>100</p></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="2" style="width: 50%;"><p></p></th>
                                    <th style="text-align: right;"><p class="notmatch" >Total : 13,032.20</p></th>
                                    <th style="text-align: right;"><p class="notmatch" >Total : 13,032.20</p></th>
                                </tr>
                            </tfoot>
                        </table>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["person", "advisor", "family"],
  components: {},
  data() {
    return {
        mmyyyy_picker: null,
    };
  },
  created() {},
  mounted() {
      let todate = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1))
      document.getElementById("bdaymonth").defaultValue = todate
  },
  methods: {
      mmyyyyOnChangeHandler() {
          console.log(this.mmyyyy_picker)
      }
  },
};
</script>

<style lang="less" scoped>
@import url("./AccountInfo.less");
</style>

<style scoped>
.row p.transaction-history-txt {
    display: inline-block;
}
.row .date-selection-section {
    display: inline-block;
}
table {}
table tr {
    display: flex;
}
table thead {
    position:relative;
    display: block;
    width:100%;
}
table thead tr {}
table thead tr th {
    color: var(--blue);
    width: 25%;
}
table tbody {
    width:100%; 
    display: block; 
    position:relative;
    overflow-y:scroll;
    font-size: var(--font14);
    color:var(--text-black);
    height: calc( 100vh - (var(--used-height) + 240px));
}
table tbody tr {
    border: 0;
}
table tbody tr td {
    padding: 4px;
    width: 25%;
}
table tbody tr td p {}
table tfoot {
    position:relative;
    display: block;
    width:100%;
}
table tfoot th {
    width: 25%;
}
table tbody tr:hover {
    background-color: #AAC0D9;
}
</style>