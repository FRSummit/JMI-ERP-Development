<template>
  <div id="secondary-sidebar" class="secondary-sidebar">
    <div class="area-tree-name-section">
      <div class="search-section">
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            class="form-control"
            placeholder="Search by Name, ID No"
          />
        </div>
        <i class="fas fa-filter"></i>
      </div>
      <div class="area-tree-inner">
        <div class="area-title-text">
          <div class="icon-arrow" @click="sidebarTitleIconClick">
            <i class="fas fa-chevron-down"></i>
          </div>
          <p class="list-text" @click="sidebarTitleIconClick">{{ defaultInfo.sidebar_name }}</p>
        </div>
        <div class="main-area-list-section">
          <div
            class="division-area"
            v-for="(location, i) in secondarySidebarData"
            :key="i"
            :id="'division-area-' + i"
          >
            <div class="icon-arrow" @click="divisionArrowClick(i)">
              <span :id="'division-right-arrow-' + i" class=""
                ><i class="fas fa-chevron-right"></i
              ></span>
              <span :id="'division-down-arrow-' + i" class="hide"
                ><i class="fas fa-chevron-down"></i
              ></span>
            </div>
            <div class="division-inner">
              <p class="division-name" @click="divisionClick(i)">
                {{ location.division }}
              </p>
              <div
                :id="'district-area-section-' + i"
                class="district-area-section hide"
              >
                <div
                  class="district-area"
                  v-for="(district, j) in location.district"
                  :key="j"
                  :id="'district-area-' + i + '-' + j"
                >
                  <div class="icon-arrow" @click="districtArrowClick(i, j)">
                    <span :id="'district-right-arrow-' + i + '-' + j" class=""
                      ><i class="fas fa-chevron-right"></i
                    ></span>
                    <span
                      :id="'district-down-arrow-' + i + '-' + j"
                      class="hide"
                      ><i class="fas fa-chevron-down"></i
                    ></span>
                  </div>
                  <div class="district-inner">
                    <p class="district-name" @click="districtClick(i, j)">
                      {{ district.district_name }}
                    </p>
                    <div
                      :id="'thana-area-section-' + i + '-' + j"
                      class="thana-area-section hide"
                    >
                      <div
                        class="thana-area"
                        v-for="(thana, k) in district.thana"
                        :key="k"
                        :id="'thana-area-' + i + '-' + j + '-' + k"
                      >
                        <div class="icon-square" @click="thanaClick(i, j, k)">
                          <span class="square-icon"></span>
                        </div>
                        <div class="thana-inner">
                          <p class="thana-name" @click="thanaClick(i, j, k)">
                            {{ thana.thana_name }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  props: ["defaultInfo", "secondarySidebarData"],
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    sidebarTitleIconClick() {
      console.log("Area Location List Click");
    },
    divisionArrowClick(i) {
      // this.closeAllDistrict(i)
      let districtAreaSection = document.querySelector("#division-area-" + i + " .district-area-section")
      let divisionDownArrow = document.querySelector("#division-area-" + i + " #division-down-arrow-" + i)
      let divisionRightArrow = document.querySelector("#division-area-" + i + " #division-right-arrow-" + i)
      let divisionName = document.querySelector("#division-area-" + i + " .division-name")
      if(districtAreaSection.className === "district-area-section") {
        districtAreaSection.className = "district-area-section hide"
        divisionName.className = 'division-name'
        divisionDownArrow.className = 'hide'
        divisionRightArrow.className = ''
      } else {
        districtAreaSection.className = "district-area-section"
        divisionName.className = 'division-name jemy-active'
        divisionDownArrow.className = ''
        divisionRightArrow.className = 'hide'
      }
    },
    divisionClick(i) {
      console.log('Division Data : ' + i)
    },
    districtArrowClick(i, j) {
      let thanaAreaSection = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " .thana-area-section")
      let divisionDownArrow = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " #district-down-arrow-" + i + "-" + j)
      let divisionRightArrow = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " #district-right-arrow-" + i + "-" + j)
      let districtName = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " .district-name")
      if(document.querySelector('#district-area-section-' + i + ' #thana-area-section-' + i + '-' + j).className === "thana-area-section") {
        document.querySelector('#district-area-section-' + i + ' #thana-area-section-' + i + '-' + j).className = "thana-area-section hide"
        districtName.className = 'district-name'
        // this.closeThanaArrow()
      } else {
        // this.closeAllThana()
        if(thanaAreaSection.className === "thana-area-section") {
          thanaAreaSection.className = "thana-area-section hide"
          districtName.className = 'district-name'
          divisionDownArrow.className = 'hide'
          divisionRightArrow.className = ''
        } else {
          thanaAreaSection.className = "thana-area-section"
          districtName.className = 'district-name jemy-active'
          divisionDownArrow.className = ''
          divisionRightArrow.className = 'hide'
        }
      }
    },
    districtClick(i, j) {
      console.log('Division Data : ' + i + '    ' + j)
    },
    thanaClick(i, j, k) {
      console.log("Thana Click : " + i + "    " + j + "    " + k);
      this.removeThanaActiveClass()
      let thanaIcon = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " #thana-area-" + i + "-" + j + "-" + k + " .square-icon")
      let thanaName = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " #thana-area-" + i + "-" + j + "-" + k + " .thana-name")
      thanaIcon.className = "square-icon jemy-active-square"
      thanaName.className = "thana-name jemy-active"
    },
    closeAllDistrict(id) {
      // this.closeAllThana()
      let districtSection = document.querySelectorAll('.district-area-section')
      let divisionName = document.querySelectorAll(".division-name")
      for(let i=0; i<districtSection.length; i++) {
        divisionName[i].className = 'division-name'
        if(i !== id) {
          districtSection[i].className = "district-area-section hide"
          document.querySelector("#division-area-" + i + " #division-down-arrow-" + i).className = 'hide'
          document.querySelector("#division-area-" + i + " #division-right-arrow-" + i).className = ''
        }
      }
    },
    closeAllThana() {
      let districtName = document.querySelectorAll(".district-name")
      for(let i=0; i<document.querySelectorAll('.thana-area-section').length; i++) {
        districtName[i].className = 'district-name'
        document.querySelectorAll('.thana-area-section')[i].className = "thana-area-section hide"
      }
      this.closeThanaArrow()
      this.removeThanaActiveClass()
    },
    closeThanaArrow() {
      let districtArrowIcon = document.querySelectorAll('.district-area-section .icon-arrow')
      for(let i=0; i<districtArrowIcon.length; i++) {
        document.querySelectorAll('.district-area-section .icon-arrow span:nth-child(1)')[i].className = ''
        document.querySelectorAll('.district-area-section .icon-arrow span:nth-child(2)')[i].className = 'hide'
      }
    },
    removeThanaActiveClass() {
      let thanaList = document.querySelectorAll('.thana-name')
      for(let i=0; i<thanaList.length; i++) {
        document.querySelectorAll('.square-icon')[i].className = 'square-icon'
        thanaList[i].className = 'thana-name'
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./Sidebar.less");
</style>