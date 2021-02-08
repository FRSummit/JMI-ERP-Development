<template>
  <div id="detail-data-list" class="detail-data-list">
    <div class="detail-data-list-inner">
      <div class="detail-data-submit-section">
        <div class="detail-data-submit-section-inner">
          <div
            class="print-save-pdf-section"
            v-if="tab === 'Gate Pass' || tab === 'Ready'"
          >
            <div class="print-save-pdf-section-inner">
              <div class="print-section">
                <div class="print-section-inner">
                  <span><i class="fas fa-print"></i>Print</span>
                </div>
              </div>
              <div class="pdf-section">
                <div class="pdf-section-inner">
                  <span><i class="far fa-file-pdf"></i>Save Pdf</span>
                </div>
              </div>
            </div>
          </div>
          <div class="submit-btn-section">
            <div class="submit-btn-section-inner">
              <button>Done</button>
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
                <td>{{ d.medicine_name }}</td>
                <td>{{ d.batch_no }}</td>
                <td>{{ d.quantity }}</td>
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
      table_header: ["SL No", "Medicine Name", "Batch No", "Quantity"],
    };
  },
};
</script>

<style lang="less" scoped>
@import url("./DetailDataList.less");
</style>