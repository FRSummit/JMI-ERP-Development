<template>
  <div id="sister-concern-tab" class="sister-concern-tab">
    <div class="sister-concern-tab-inner">
      <div class="title-txt-btn-sec">
        <p class="title-txt">Sister Concern</p>
        <a @click="attributeForm()"><span>+</span>Add</a>
        <form v-if="customAttrForm">
          <div class="input-sec">
            <label>Attribute Name</label>
            <input type="text" placeholder="Enter the attribute name" />
          </div>
          <div class="input-sec">
            <label>Value</label>
            <input type="text" placeholder="Jhon Snow" />
          </div>
          <div class="input-sec">
            <div class="cancel-section">
              <a>Cancel</a>
            </div>
            <div class="submit-section">
              <button type="submit">Create</button>
            </div>
          </div>
        </form>
      </div>
      <div class="data-table-section">
        <table
          id="custom-attr-data-table"
          class="custom-attr-data-table"
          cellspacing="0"
          width="100%"
        >
          <tr>
            <th v-for="(head, i) in sister_concern_data_table_header" :key="i">{{ head }}</th>
          </tr>
          <tr
            v-for="(data, i) in sbu_sister_concern_data"
            :key="i"
            class="sbu-data-tr"
          >
            <td>{{ data.name }}</td>
            <td>{{ data.short_code }}</td>
            <td>{{ data.admin }}</td>
            <td>{{ data.key_contact }}</td>
            <td>{{ data.phone }}</td>
            <td>
              <div class="hamburger-sec">
                <span class="hamburger">&#9776;</span>
                <span class="hamburger-tooltip-txt">Hanburger</span>
              </div>
              <div class="edit-btn-sec">
                <img
                  class="edit-btn"
                  src="../../../../../assets/icons/edit.svg"
                  alt="edit"
                />
                <span class="edit-btn-tooltip-txt">Edit</span>
              </div>
              <div class="del-btn-sec">
                <img
                  class="del-btn"
                  src="../../../../../assets/icons/delete.svg"
                  alt="del"
                />
                <span class="del-btn-tooltip-txt">Delete</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="sister-concern-tab-bottom">
      <p><img src="../../../../../assets/icons/arrow_left.svg" />Previous</p>
    </div>
  </div>
</template>

<script>
import ERPSidebarService from "../../../../../service/ERPSidebarService";
const service = new ERPSidebarService();

export default {
  data() {
    return {
      sister_concern_data_table_header: ['Name', 'Short Code', 'Admin', 'Key Contact', 'Phone', ''],
      sbu_sister_concern_data: [],
      customAttrForm: false,
    };
  },
  created() {
    service.getSBUSisterConcernData().then((res) => {
      this.sbu_sister_concern_data = res.data;
    });
  },
  methods: {
    attributeForm() {
      if (this.customAttrForm) {
        this.customAttrForm = false;
      } else {
        this.customAttrForm = true;
      }
    },
  },
};
</script>

<style scoped>
#sister-concern-tab.sister-concern-tab {
  margin-top: 30px;
}
#sister-concern-tab .sister-concern-tab-inner {
  width: 100%;
  display: block;
}
#sister-concern-tab .title-txt-btn-sec {
  position: relative;
}
#sister-concern-tab .title-txt-btn-sec form {
  max-width: 350px;
  box-shadow: 0 2px 9px 6px hsla(0, 0%, 81.6%, 0.30196078431372547);
  position: absolute;
  top: 50px;
  left: 166px;
  width: 100%;
  z-index: 5;
  background: #ffffff;
}
#sister-concern-tab .title-txt-btn-sec form .input-sec {
  display: block;
  width: 80%;
  margin: 20px auto;
  position: relative;
}
#sister-concern-tab .title-txt-btn-sec form .input-sec label {
  color: #026cd1;
  font-size: 16px;
}
#sister-concern-tab .title-txt-btn-sec form .input-sec input {
  border: 1px solid #707070;
  height: auto;
  padding: 8px 10px;
  font-size: 16px;
  margin: 6px 0;
  box-sizing: border-box;
}
#sister-concern-tab .title-txt-btn-sec form .input-sec .cancel-section {
  display: inline-block;
  border: 1px solid #026cd1;
  border-radius: 2px;
  width: 100px;
  padding: 4px;
  text-align: center;
  cursor: pointer;
}
#sister-concern-tab .title-txt-btn-sec form .input-sec .cancel-section a {
  font-size: 16px;
  color: #026cd1;
  outline: none;
  background: none;
  padding: 0;
}
#sister-concern-tab .title-txt-btn-sec form .input-sec .submit-section {
  float: right;
  display: inline-block;
}
#sister-concern-tab .title-txt-btn-sec form .input-sec .submit-section button {
  font-size: 16px;
  background: #026cd1;
  border: 1px solid #026cd1;
  border-radius: 2px;
  color: #fff;
  padding: 7px 20px 7px;
  width: 100px;
  outline: none;
}
#sister-concern-tab .title-txt-btn-sec .title-txt {
  font-size: 18px;
  display: inline-block;
  margin-right: 20px;
}
#sister-concern-tab .title-txt-btn-sec a {
  background: #026cd1;
  color: #ffffff;
  padding: 6px 20px;
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
}
#sister-concern-tab .title-txt-btn-sec a span {
  margin-right: 10px;
}
#sister-concern-tab .data-table-section {
  display: inline-block;
  width: 100%;
  vertical-align: middle;
}
#sister-concern-tab .custom-attr-data-table {
  margin-top: 30px;
  display: block;
  border-top: 1px solid #e6e6e6;
}
#sister-concern-tab .custom-attr-data-table tr {
    width: 100%;
    display: block;
  border-bottom: none;
}
#sister-concern-tab .custom-attr-data-table tr:first-child {
  border-bottom: 1px solid #999999;
  text-transform: uppercase;
  color: #026cd1;
  margin-bottom: 10px;
}
#sister-concern-tab .custom-attr-data-table tr th,
#sister-concern-tab .custom-attr-data-table tr td {
  width: 17.5%;
  font-size: 14px;
  display: inline-block;
  font-weight: 300;
  padding: 8px 6px;
}
#sister-concern-tab .custom-attr-data-table tr th {
  font-weight: 500;
}
#sister-concern-tab .custom-attr-data-table tr th:nth-child(2),
#sister-concern-tab .custom-attr-data-table tr td:nth-child(2) {
    width: 15%;
}
#sister-concern-tab .custom-attr-data-table tr td {
  font-weight: 300;
}
#sister-concern-tab .custom-attr-data-table tr th:last-child,
#sister-concern-tab .custom-attr-data-table tr td:last-child {
  width: 15%;
}
#sister-concern-tab .custom-attr-data-table tr th div,
#sister-concern-tab .custom-attr-data-table tr td div {
  display: inline-block;
  position: relative;
  margin: 0 10px;
}
#sister-concern-tab .custom-attr-data-table tr td div span:first-child,
#sister-concern-tab .custom-attr-data-table tr td div img {
  cursor: pointer;
}
#sister-concern-tab .custom-attr-data-table tr td div .hamburger-tooltip-txt,
#sister-concern-tab .custom-attr-data-table tr td div .edit-btn-tooltip-txt,
#sister-concern-tab .custom-attr-data-table tr td div .del-btn-tooltip-txt {
  visibility: hidden;
  width: auto;
  background-color: gray;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 2px 6px;
  position: absolute;
  top: -20px;
  z-index: 1;
  font-size: 10px;
}
#sister-concern-tab
  .custom-attr-data-table
  tr
  td
  div:hover
  .hamburger-tooltip-txt {
  visibility: visible;
  left: -24px;
}
#sister-concern-tab
  .custom-attr-data-table
  tr
  td
  div:hover
  .edit-btn-tooltip-txt {
  visibility: visible;
  left: -10px;
}
#sister-concern-tab
  .custom-attr-data-table
  tr
  td
  div:hover
  .del-btn-tooltip-txt {
  visibility: visible;
  left: -16px;
}
#sister-concern-tab .sister-concern-tab-bottom {
}
#sister-concern-tab .sister-concern-tab-bottom p {
  color: #026cd1;
}
#sister-concern-tab .sister-concern-tab-bottom p img {
  vertical-align: bottom;
  margin-right: 10px;
}
@media only screen and (max-width: 900px) {
  #sister-concern-tab .custom-attr-data-table tr th div,
  #sister-concern-tab .custom-attr-data-table tr td div {
      margin: 0 6px;
  }
}
</style>