<template>
    <div class="secondary-sidebar">
        <div class="area-tree-inner">
            <div class="area-title-text">
                <div class="icon-arrow" @click="sidebarTitleIconClick"><i class="fas fa-chevron-down"></i></div>
                <p class="list-text" @click="sidebarTitleIconClick">SBU List</p>
            </div>

            <div class="menu-section">
                <div class="primary-menu" v-for="(item_01, i) in 10" :key="i">
                    <div class="primary-menu-inner">
                        <div class="icon-arrow" @click="primaryMenuClickHandler"><i class="fas fa-chevron-right"></i></div>
                        <p class="list-text" @click="primaryMenuClickHandler">Primary Menu {{ i }}</p>
                    </div>
                </div>
            </div>
        <!-- <div class="main-area-list-section">
          <div class="division-area" v-for="(item_01, i) in 10" :key="i" :id="'division-area-' + i">
            <div class="icon-arrow" @click="divisionArrowClick(i)">
              <span :id="'division-right-arrow-' + i" class=""><i class="fas fa-chevron-right"></i></span>
              <span :id="'division-down-arrow-' + i" class="hide"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="division-inner">
              <p class="division-name" @click="divisionClick(i)">Tree Section 1 - {{ i + 1 }}</p>
              <div :id="'district-area-section-' + i" class="district-area-section hide">
                <div class="district-area" v-for="(item_02, j) in 5" :key="j" :id="'district-area-' + i + '-' + j">
                  <div class="icon-arrow" @click="districtArrowClick(i, j)">
                    <span :id="'district-right-arrow-' + i + '-' + j" class=""><i class="fas fa-chevron-right"></i></span>
                    <span :id="'district-down-arrow-' + i + '-' + j" class="hide"><i class="fas fa-chevron-down"></i></span>
                  </div>
                  <div class="district-inner">
                    <p class="district-name" @click="districtClick(i, j)">Tree Section 2 - {{ i + 1 }} {{ j + 1 }}</p>
                    <div :id="'thana-area-section-' + i + '-' + j" class="thana-area-section hide">
                      <div class="thana-area" v-for="(item_03, k) in 3" :key="k" :id="'thana-area-' + i + '-' + j + '-' + k">
                        <div class="icon-square" @click="thanaClick(i, j, k)">
                          <span class="square-icon"></span>
                        </div>
                        <div class="thana-inner">
                          <p class="thana-name" @click="thanaClick(i, j, k)">Tree Section 3 - {{ i + 1 }} {{ j + 1 }} {{ k + 1 }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
</template>

<script>
export default {
    
  methods: {
    sidebarTitleIconClick() {
      console.log("Area Location List Click");
    },
    primaryMenuClickHandler() {},
    // divisionArrowClick(i) {
    //   // this.closeAllDistrict(i)
    //   let districtAreaSection = document.querySelector("#division-area-" + i + " .district-area-section")
    //   let divisionDownArrow = document.querySelector("#division-area-" + i + " #division-down-arrow-" + i)
    //   let divisionRightArrow = document.querySelector("#division-area-" + i + " #division-right-arrow-" + i)
    //   let divisionName = document.querySelector("#division-area-" + i + " .division-name")
    //   if(districtAreaSection.className === "district-area-section") {
    //     districtAreaSection.className = "district-area-section hide"
    //     divisionName.className = 'division-name'
    //     divisionDownArrow.className = 'hide'
    //     divisionRightArrow.className = ''
    //   } else {
    //     districtAreaSection.className = "district-area-section"
    //     divisionName.className = 'division-name jemy-active'
    //     divisionDownArrow.className = ''
    //     divisionRightArrow.className = 'hide'
    //   }
    // },
    // divisionClick(i) {
    //   console.log('Division Data : ' + i)
    // },
    // districtArrowClick(i, j) {
    //   let thanaAreaSection = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " .thana-area-section")
    //   let divisionDownArrow = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " #district-down-arrow-" + i + "-" + j)
    //   let divisionRightArrow = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " #district-right-arrow-" + i + "-" + j)
    //   let districtName = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " .district-name")
    //   if(document.querySelector('#district-area-section-' + i + ' #thana-area-section-' + i + '-' + j).className === "thana-area-section") {
    //     document.querySelector('#district-area-section-' + i + ' #thana-area-section-' + i + '-' + j).className = "thana-area-section hide"
    //     districtName.className = 'district-name'
    //     // this.closeThanaArrow()
    //   } else {
    //     // this.closeAllThana()
    //     if(thanaAreaSection.className === "thana-area-section") {
    //       thanaAreaSection.className = "thana-area-section hide"
    //       districtName.className = 'district-name'
    //       divisionDownArrow.className = 'hide'
    //       divisionRightArrow.className = ''
    //     } else {
    //       thanaAreaSection.className = "thana-area-section"
    //       districtName.className = 'district-name jemy-active'
    //       divisionDownArrow.className = ''
    //       divisionRightArrow.className = 'hide'
    //     }
    //   }
    // },
    // districtClick(i, j) {
    //   console.log('Division Data : ' + i + '    ' + j)
    // },
    // thanaClick(i, j, k) {
    //   console.log("Thana Click : " + i + "    " + j + "    " + k);
    //   this.removeThanaActiveClass()
    //   let thanaIcon = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " #thana-area-" + i + "-" + j + "-" + k + " .square-icon")
    //   let thanaName = document.querySelector("#division-area-" + i + " #district-area-" + i + "-" + j + " #thana-area-" + i + "-" + j + "-" + k + " .thana-name")
    //   thanaIcon.className = "square-icon jemy-active-square"
    //   thanaName.className = "thana-name jemy-active"
    // },
    // closeAllDistrict(id) {
    //   // this.closeAllThana()
    //   let districtSection = document.querySelectorAll('.district-area-section')
    //   let divisionName = document.querySelectorAll(".division-name")
    //   for(let i=0; i<districtSection.length; i++) {
    //     divisionName[i].className = 'division-name'
    //     if(i !== id) {
    //       districtSection[i].className = "district-area-section hide"
    //       document.querySelector("#division-area-" + i + " #division-down-arrow-" + i).className = 'hide'
    //       document.querySelector("#division-area-" + i + " #division-right-arrow-" + i).className = ''
    //     }
    //   }
    // },
    // closeAllThana() {
    //   let districtName = document.querySelectorAll(".district-name")
    //   for(let i=0; i<document.querySelectorAll('.thana-area-section').length; i++) {
    //     districtName[i].className = 'district-name'
    //     document.querySelectorAll('.thana-area-section')[i].className = "thana-area-section hide"
    //   }
    //   this.closeThanaArrow()
    //   this.removeThanaActiveClass()
    // },
    // closeThanaArrow() {
    //   let districtArrowIcon = document.querySelectorAll('.district-area-section .icon-arrow')
    //   for(let i=0; i<districtArrowIcon.length; i++) {
    //     document.querySelectorAll('.district-area-section .icon-arrow span:nth-child(1)')[i].className = ''
    //     document.querySelectorAll('.district-area-section .icon-arrow span:nth-child(2)')[i].className = 'hide'
    //   }
    // },
    // removeThanaActiveClass() {
    //   let thanaList = document.querySelectorAll('.thana-name')
    //   for(let i=0; i<thanaList.length; i++) {
    //     document.querySelectorAll('.square-icon')[i].className = 'square-icon'
    //     thanaList[i].className = 'thana-name'
    //   }
    // }
  },
}
</script>

<style scoped>

/* .area-tree-name-section {
    display     : inline-block;
    width       : 20%;
    min-width   : 300px;
    max-width   : 300px;
    border-right: 2px solid #e6e6e6;
    padding     : 20px;
}
.area-tree-name-section .search-section {
    margin-bottom: 20px;
}
.area-tree-name-section .form-group {
    margin: 0;
                position      : relative;
                display       : inline-block;
                vertical-align: middle;
                width         : 85%;
}

.area-tree-name-section .has-search .form-control {
                padding-left: 2.375rem;
}

.area-tree-name-section .has-search .form-control-feedback {
                position      : absolute;
                z-index       : 2;
                display       : block;
                width         : 16px;
                height        : 16px;
                text-align    : center;
                pointer-events: none;
                color         : #aaa;
                top           : 8px;
                left          : 12px;
                border        : none;
}

.area-tree-name-section input {
                margin       : 0;
                border-bottom: none;
                border       : 1px solid #DEF0FF;
                box-sizing   : inherit;
                font-size    : 12px;
                height       : auto;
                padding      : 6px 0;
}

.area-tree-name-section input:focus {
                box-shadow: none;
}

.area-tree-name-section svg:last-child {
                display       : inline-block;
                vertical-align: middle;
                height        : 32px;
                width         : 32px;
                padding       : 8px;
                margin        : 0;
                float         : right;
                color         : #e8e8e8cf;
} */

.area-tree-inner .area-title-text {
    margin-bottom: 10px;
    padding: 4px 6px;
}
.menu-section .primary-menu .primary-menu-inner {
    margin-bottom: 0px;
    padding: 4px 6px;
}
.area-tree-inner .area-title-text .icon-arrow,
.menu-section .primary-menu .primary-menu-inner .icon-arrow {
    display       : inline-block;
    vertical-align: top;
}
.area-tree-inner .area-title-text svg {
    width  : 20px;
    height : 20px;
    padding: 5px;
    color: #FFFFFF;
    border-radius: 2px;
    background-color: var(--blue);
    margin-right: 4px;
}
.menu-section .primary-menu .primary-menu-inner svg {
    width  : 20px;
    height : 20px;
    padding: 5px;
    /* color: #FFFFFF; */
    border-radius: 2px;
    /* background-color: var(--blue); */
    margin-right: 4px;
    border: 1px solid var(--blue);
}

.area-tree-inner .area-title-text .list-text,
.menu-section .primary-menu .primary-menu-inner .list-text {
    display    : inline-block;
    font-size  : 14px;
    font-weight: 500;
}
/* 
.main-area-list-section .division-area .icon-arrow {
                        display       : inline-block;
                        vertical-align: top;
}

.main-area-list-section .division-area .division-inner {
                        display: inline-block;
}
.main-area-list-section .division-area  .district-area-section .district-area .icon-arrow {
                                    display       : inline-block;
                                    vertical-align: top;
                                }

.main-area-list-section .division-area  .district-inner {
                                    display: inline-block;
}
.main-area-list-section .division-area .thana-area-section .thana-area .icon-square {
                                                display       : inline-block;
                                                vertical-align: top;
}
.main-area-list-section .division-area  .square-icon {
                                                    width        : 15px;
                                                    height       : 15px;
                                                    display      : block;
                                                    border       : 1px solid #0073de4d;
                                                    margin-top   : 4px;
                                                    margin-right : 4px;
                                                    border-radius: 2px;
                                                    cursor       : pointer;
}

.main-area-list-section .division-area  .thana-inner {
                                                display: inline-block;
} */
</style>