<template>
  <div id="detail-data-list" class="detail-data-list">
    <div class="detail-data-list-inner">
      <div class="detail-data-submit-section">
        <div class="detail-data-submit-section-inner">
          <div
            class="serial-range-custom-section"
            v-if="tab === 'Invoice Print' || tab === 'Chalan Print'"
          >
            <div class="serial-range-custom-section-inner">
              <div class="range-customization-section">
                <div class="range-customization-section-inner">
                  <span>Serial Range:</span>
                  <form class="input-btns">
                    <p><input type="radio" checked="checked" name="serialRange" value="Default" @change="onChange('Default')" /> <span :class="radioSpanDefaultClass">Default</span></p>
                    <p><input type="radio" name="serialRange" value="Custom" @change="onChange('Custom')" /> <span :class="radioSpanCustomClass">Custom</span></p>
                    <!-- <form>
                      <input type="radio" checked="checked" value="radio" />
                    </label>-->
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="submit-btn-section">
            <div class="submit-btn-section-inner">
              <button>Print &amp; Next</button>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-data-list-section">
        <div class="detail-data-list-section-inner">
          <!-- {{ data }} -->

          <table class="data-table" cellspacing="0" width="100%">
            <thead>
              <tr class="data-table-head-row">
                <th v-for="(head, i) in table_header" :key="i">
                  {{ head }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(d, i) in data" :key="i" class="data-table-data-row">
                <td>{{ i + 1 }}</td>
                <td>{{ d.invoice_id }}</td>
                <td>{{ d.customer_type }}</td>
                <td>{{ d.customer_name }}</td>
                <td>{{ d.amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tab", "data"],
  components: {},
  data() {
    return {
      table_header: [
        "SL No",
        "Invoice ID",
        "Customer Type",
        "Customer Name",
        "Amount",
      ],
      // value: null,
      radioSpanDefaultClass: 'active',
      radioSpanCustomClass: null
    };
  },
  methods: {
    onChange(value) {
      switch(value) {
        case 'Default':
          console.log('D : ' + value)
          this.radioSpanDefaultClass = 'active'
          this.radioSpanCustomClass = ''
          break
        case 'Custom':
          console.log('C : ' + value)
          this.radioSpanDefaultClass = ''
          this.radioSpanCustomClass = 'active'
          break
          default:
            break
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./DetailDataList.less");
</style>