<template>
  <div id="sbu-pagination-sidebar">
    <div class="pagination-searchbar-optionbar">
      <div class="pagination-section">
        <div class="total-entries">
          <label class="title">Entries</label>
          <div class="drop-down-arrow">
            <img
              src="../../../../assets/icons/chevron-down.svg"
              alt="chevron-down"
              class="etries-chevron-down"
            />
          </div>
          <select id="entry-select" class="entry-select">
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>
        <div class="pagination">
          <div class="page-infos">
            <span>{{ pagingStart }} - {{ pagingEnd }} of {{ totalPage }}</span>
          </div>
          <div class="arrow-section">
            <div class="left-arrow">
              <a href="#!"
                ><img
                  src="../../../../assets/icons/chevron-down.svg"
                  alt="chevron-down"
                  class="chevron-left"
              /></a>
            </div>
            <div class="right-arrow">
              <a href="#!"
                ><img
                  src="../../../../assets/icons/chevron-down.svg"
                  alt="chevron-down"
                  class="chevron-right"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="searchbar-optionbar-section">
        <div class="searchbar-section">
          <!-- <div
            class="add-new-btn"
            v-if="routeName_ === 'Strategic Business Unit'"
          > -->
          <div
            class="add-new-btn"
            v-if="routeName_"
          >
            <a @click="addnewClick()"><span>+</span>Add</a>
          </div>
          <div class="search">
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
            <input
              type="text"
              class="searchTerm"
              placeholder="Search by Name, ID Number, Phone Number"
            />
          </div>
        </div>
        <div class="optionbar-section">
          <div class="optionbar-inner">
            <img
              src="../../../../assets/icons/print.svg"
              alt="print"
              class="print"
              @click="print()"
            />
            <img
              src="../../../../assets/icons/excel.svg"
              alt="excel"
              class="excel"
              @click="generateExcel()"
            />
            <img
              src="../../../../assets/icons/filter.svg"
              alt="filter"
              class="filter"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bcrypt from "bcryptjs";

export default {
  props: ["pagingStart", "pagingEnd", "totalPage", "routeName"],
  data() {
    return {
      routeName_: false
    };
  },
  created() {
    // console.log("Route name : " + this.routeName);
    // console.log(bcrypt);
    let password = "secret";
    let passwordHash;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
        passwordHash = hash;
      });
    });
    console.log(passwordHash);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");
    let salt_ = bcrypt.genSaltSync(10);
    let hash_ = bcrypt.hashSync(password, salt_);
    console.log(hash_);
    this.addButtonEnable()
  },
  methods: {
    addnewClick() {
      switch(this.routeName) {
        case 'Strategic Business Unit':
          this.$router.replace("/adm/sbu/create-new-sbu");
          break
        case 'Sales Center':
          this.$router.replace("/sd/sales-center/create-new-geo-location");
          break
        default:
          break
      }
      
    },
    print() {
      this.$emit("print");
    },
    generateExcel() {
      this.$emit("excel");
    },
    addButtonEnable() {
      switch(this.routeName) {
        case 'Strategic Business Unit':
          this.routeName_ = true
          break
        case 'Sales Center':
          this.routeName_ = true
          break
        default:
          break
      }
    }
  },
};
</script>

<style scoped>
/* Pagination Search Option bar - start */
#sbu-pagination-sidebar .pagination-searchbar-optionbar {
  margin-top: 20px;
  width: 100%;
  display: flex;
  padding: 0 10px;
}
/* Pagination - start */
#sbu-pagination-sidebar .pagination-section {
  display: inline-block;
  width: 40%;
}
#sbu-pagination-sidebar .total-entries {
  display: inline-block;
  position: relative;
  width: 82px;
}
#sbu-pagination-sidebar .total-entries .title {
  display: inline-block;
  color: #212529;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
}
#sbu-pagination-sidebar .total-entries .drop-down-arrow {
  position: absolute;
  right: 0;
  top: 2px;
  background: #d3efff;
  width: 20px;
  text-align: center;
  border-radius: 20px;
}
#sbu-pagination-sidebar .etries-chevron-down {
  width: 8px;
  border-radius: 20px;
  vertical-align: middle;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
#sbu-pagination-sidebar .total-entries .entry-select {
  display: inline-block;
  width: 40px;
  height: auto;
  color: #212529;
  border: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  outline: none;
}
#sbu-pagination-sidebar .pagination {
  width: 50%;
  display: inline-block;
  margin-left: 50px;
}
#sbu-pagination-sidebar .page-infos {
  display: inline-block;
}
#sbu-pagination-sidebar .page-infos span {
  font-size: 12px;
  font-weight: 800;
}
#sbu-pagination-sidebar .arrow-section {
  line-height: 1;
  margin-left: 20px;
  display: inline-block;
  vertical-align: bottom;
}
#sbu-pagination-sidebar .left-arrow {
  display: inline-block;
}
#sbu-pagination-sidebar .left-arrow a {
  background: #d3efff;
  border-radius: 20px;
  display: block;
  width: 20px;
  height: 20px;
  text-align: center;
  padding: 3px 2px 0 0;
}
#sbu-pagination-sidebar .chevron-left {
  width: 8px;
  background: #d3efff;
  border-radius: 20px;
  vertical-align: middle;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
#sbu-pagination-sidebar .right-arrow {
  display: inline-block;
  margin-left: 20px;
}
#sbu-pagination-sidebar .right-arrow a {
  background: #d3efff;
  border-radius: 20px;
  display: block;
  width: 20px;
  height: 20px;
  text-align: center;
  padding: 3px 2px 0 0;
}
#sbu-pagination-sidebar .chevron-right {
  width: 8px;
  background: #d3efff;
  border-radius: 20px;
  vertical-align: middle;
}
/* Pagination - end */
/* Searchbar Optionbar style - start */
#sbu-pagination-sidebar .searchbar-optionbar-section {
  width: 60%;
  display: inline-block;
  float: right;
}
#sbu-pagination-sidebar .add-new-btn {
  display: inline-block;
  width: 20%;
}
#sbu-pagination-sidebar .searchbar-section {
  width: 70%;
  display: inline-block;
  text-align: right;
}
#sbu-pagination-sidebar .add-new-btn a {
  background: #026cd1;
  color: #ffffff;
  padding: 7px 20px;
  border-radius: 4px;
  cursor: pointer;
}
#sbu-pagination-sidebar .add-new-btn a span {
  margin-right: 10px;
}
#sbu-pagination-sidebar .search {
  width: 80%;
  position: relative;
  display: inline-block;
}
#sbu-pagination-sidebar .searchTerm {
  width: 80%;
  display: inline-block;
  vertical-align: middle;
  border: 2px solid #026cd1;
  border-left: none;
  padding: 4px;
  height: 20px;
  border-radius: 0 5px 5px 0;
  outline: none;
  color: #000000;
  font-size: 14px;
  margin: 0;
}
#sbu-pagination-sidebar .searchTerm:focus {
  color: #00b4cc;
}
#sbu-pagination-sidebar .searchTerm::-webkit-input-placeholder {
  font-style: italic;
}
#sbu-pagination-sidebar .searchTerm:-moz-placeholder {
  font-style: italic;
}
#sbu-pagination-sidebar .searchTerm::-moz-placeholder {
  font-style: italic;
}
#sbu-pagination-sidebar .searchTerm:-ms-input-placeholder {
  font-style: italic;
}
#sbu-pagination-sidebar .searchButton {
  width: 40px;
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  border: 2px solid #026cd1;
  border-right: none;
  background: #ffffff;
  text-align: center;
  color: #818e94;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
  font-size: 20px;
}
#sbu-pagination-sidebar .fa-search {
  font-size: 14px;
  vertical-align: initial;
}
#sbu-pagination-sidebar .optionbar-section {
  width: 30%;
  display: inline-block;
  vertical-align: bottom;
}
#sbu-pagination-sidebar .optionbar-inner {
  padding: 0 10px;
}
#sbu-pagination-sidebar .optionbar-inner img {
  margin: 0 10px;
  /* width: 40px; */
  height: 18px;
  cursor: pointer;
}
/* Searchbar Optionbar style - end */
@media only screen and (max-width: 1100px) {
  #sbu-pagination-sidebar .pagination-searchbar-optionbar {
    display: block;
    overflow: hidden;
  }
  #sbu-pagination-sidebar .pagination-section {
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }
  #sbu-pagination-sidebar .searchbar-section {
    text-align: left;
  }
  #sbu-pagination-sidebar .searchbar-optionbar-section {
    display: block;
    width: 100%;
  }
}
</style>