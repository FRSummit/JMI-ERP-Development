<template>
    <div id="secondary-sidebar-stock-position" class="secondary-sidebar-stock-position">
        <div class="area-tree-inner">
            <div class="area-title-text">
                <div class="icon-arrow" @click="sidebarTitleIconClick"><i class="fas fa-chevron-down"></i></div>
                <p class="list-text" @click="sidebarTitleIconClick">SBU List</p>
            </div>
        <div class="main-area-list-section">
          <div class="primary-area" v-for="(item_01, i) in 1" :key="i" :id="'primary-area-' + i">
            <div class="icon-arrow" @click="primaryArrowClick(i)">
              <span :id="'primary-right-arrow-' + i" class=""><i class="fas fa-chevron-right"></i></span>
              <span :id="'primary-down-arrow-' + i" class="hide"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="primary-inner">
              <p class="primary-name" @click="primaryClick(i)">{{ SELECTED_PROD_SBU_PROD_DETAILS.sbu_name }}</p>
              <div :id="'secondary-area-section-' + i" class="secondary-area-section hide">
                <div class="secondary-area" v-for="(item_02, j) in SELECTED_PROD_SBU_PROD_DETAILS.plant_info" :key="j" :id="'secondary-area-' + i + '-' + j">
                  <div class="icon-arrow" @click="secondaryArrowClick(i, j)" v-if="checkUserAreaWarehouseId(item_02)">
                    <span :id="'secondary-right-arrow-' + i + '-' + j" class=""><i class="fas fa-chevron-right"></i></span>
                    <span :id="'secondary-down-arrow-' + i + '-' + j" class="hide"><i class="fas fa-chevron-down"></i></span>
                  </div>
                  <div class="secondary-inner" v-if="checkUserAreaWarehouseId(item_02)">
                    <p class="secondary-name" @click="secondaryClick(i, j)">{{ item_02.plant_name }}</p>
                    <div :id="'tertiary-area-section-' + i + '-' + j" class="tertiary-area-section hide">
                      <div class="tertiary-area" v-for="(item_03, k) in item_02.warehouse_info" :key="k" :id="'tertiary-area-' + i + '-' + j + '-' + k">
                        <!-- <div class="icon-square" @click="tertiaryClick(i, j, k)">
                          <span class="square-icon"></span>
                        </div> -->
                        <div :id="'icon-square-' + i + '-' + j + '-' + k" class="icon-square" @click="tertiaryClick(i, j, k, item_03)">
                          <span class="square-icon"></span>
                        </div>
                        <!-- <div class="icon-arrow" @click="tertiaryClick(i, j, k)">
                            <span :id="'tertiary-right-arrow-' + i + '-' + j + '-' + k" class=""><i class="fas fa-chevron-right"></i></span>
                            <span :id="'tertiary-down-arrow-' + i + '-' + j + '-' + k" class="hide"><i class="fas fa-chevron-down"></i></span>
                        </div> -->
                        <div class="tertiary-inner">
                          <p :id="'tertiary-name-' + i + '-' + j + '-' + k" class="tertiary-name" @click="tertiaryClick(i, j, k, item_03)">{{ item_03.wh_name }}</p>
                          <!-- <div :id="'poly-tertiary-area-section-' + i + '-' + j + '-' + k" class="poly-tertiary-area-section hide">
                                <div class="poly-tertiary-area" v-for="(item_04, l) in item_03.warehouse_store_info" :key="l" :id="'tertiary-area-' + i + '-' + j + '-' + k + '-' + l">
                                    <div :id="'icon-square-' + i + '-' + j + '-' + k + '-' + l" class="icon-square" @click="polyTertiaryClick(i, j, k, l, item_04)">
                                        <span class="square-icon"></span>
                                    </div>
                                    <div class="poly-tertiary-inner">
                                        <p :id="'poly-tertiary-name-' + i + '-' + j + '-' + k + '-' + l" class="poly-tertiary-name" @click="polyTertiaryClick(i, j, k, l, item_04)">{{ item_04.store_name }}</p>
                                    </div>
                                </div>
                          </div> -->
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
    props: ["SELECTED_PROD_SBU_PROD_DETAILS"],
  methods: {
    sidebarTitleIconClick() {
      console.log("Area Location List Click");
    },
    // primaryMenuClickHandler(index) {
    //     let icon = document.getElementById('primary-menu-inner-' + index)
    //     // if(icon)
    //     console.log(icon.innerHTML)
    // },
    primaryArrowClick(i) {
      // this.closeAllsecondary(i)
      let secondaryAreaSection = document.querySelector("#secondary-sidebar-stock-position #primary-area-" + i + " .secondary-area-section")
      let primaryDownArrow = document.querySelector("#secondary-sidebar-stock-position #primary-area-" + i + " #primary-down-arrow-" + i)
      let primaryRightArrow = document.querySelector("#secondary-sidebar-stock-position #primary-area-" + i + " #primary-right-arrow-" + i)
      let primaryName = document.querySelector("#secondary-sidebar-stock-position #primary-area-" + i + " .primary-name")
      if(secondaryAreaSection.className === "secondary-area-section") {
        secondaryAreaSection.className = "secondary-area-section hide"
        primaryName.className = 'primary-name'
        primaryDownArrow.className = 'hide'
        primaryRightArrow.className = ''
      } else {
        secondaryAreaSection.className = "secondary-area-section"
        primaryName.className = 'primary-name jmi-active-color'
        primaryDownArrow.className = ''
        primaryRightArrow.className = 'hide'
      }
    },
    primaryClick(i) {
      console.log('primary Data : ' + i)
    },
    secondaryArrowClick(i, j) {
      let tertiaryAreaSection = document.querySelector("#secondary-sidebar-stock-position #primary-area-" + i + " #secondary-area-" + i + "-" + j + " .tertiary-area-section")
      let primaryDownArrow = document.querySelector("#secondary-sidebar-stock-position #primary-area-" + i + " #secondary-area-" + i + "-" + j + " #secondary-down-arrow-" + i + "-" + j)
      let primaryRightArrow = document.querySelector("#secondary-sidebar-stock-position #primary-area-" + i + " #secondary-area-" + i + "-" + j + " #secondary-right-arrow-" + i + "-" + j)
      let secondaryName = document.querySelector("#secondary-sidebar-stock-position #primary-area-" + i + " #secondary-area-" + i + "-" + j + " .secondary-name")
      if(document.querySelector('#secondary-sidebar-stock-position #secondary-area-section-' + i + ' #tertiary-area-section-' + i + '-' + j).className === "tertiary-area-section") {
        document.querySelector('#secondary-sidebar-stock-position #secondary-area-section-' + i + ' #tertiary-area-section-' + i + '-' + j).className = "tertiary-area-section hide"
        secondaryName.className = 'secondary-name'

          secondaryName.className = 'secondary-name'
          primaryDownArrow.className = 'hide'
          primaryRightArrow.className = ''
        // this.closetertiaryArrow()
      } else {
        // this.closeAlltertiary()
        if(tertiaryAreaSection.className === "tertiary-area-section") {
          tertiaryAreaSection.className = "tertiary-area-section hide"
          secondaryName.className = 'secondary-name'
          primaryDownArrow.className = 'hide'
          primaryRightArrow.className = ''
        } else {
          tertiaryAreaSection.className = "tertiary-area-section"
          secondaryName.className = 'secondary-name jmi-active-color'
          primaryDownArrow.className = ''
          primaryRightArrow.className = 'hide'
        }
      }
    },
    secondaryClick(i, j) {
      console.log('primary Data : ' + i + '    ' + j)
    },
    tertiaryClick(i, j, k, item) {
      console.log("tertiary Click : " + i + "    " + j + "    " + k);
      // let tertiary_right_arrow = document.querySelector('#secondary-sidebar-stock-position #tertiary-right-arrow-' + i + '-' + j + '-' + k)
      // let tertiary_down_arrow = document.querySelector('#secondary-sidebar-stock-position #tertiary-down-arrow-' + i + '-' + j + '-' + k)
      // let tertiary_name = document.querySelector('#secondary-sidebar-stock-position #tertiary-name-' + i + '-' + j + '-' + k)
      // if(document.querySelector('#secondary-sidebar-stock-position #poly-tertiary-area-section-' + i + '-' + j + '-' + k).className === "poly-tertiary-area-section") {
      //   document.querySelector('#secondary-sidebar-stock-position #poly-tertiary-area-section-' + i + '-' + j + '-' + k).className = "poly-tertiary-area-section hide"

      //     tertiary_name.className = 'tertiary-name'
      //     tertiary_down_arrow.className = 'hide'
      //     tertiary_right_arrow.className = ''
      // } else {
      //     document.querySelector('#secondary-sidebar-stock-position #poly-tertiary-area-section-' + i + '-' + j + '-' + k).className = "poly-tertiary-area-section"
      //     tertiary_name.className = 'tertiary-name jmi-active-color'
      //     tertiary_down_arrow.className = ''
      //     tertiary_right_arrow.className = 'hide'
      // }

      
      let t_icon = document.querySelector("#secondary-sidebar-stock-position #icon-square-" + i + "-" + j + "-" + k + " .square-icon")
      let t_name = document.querySelector("#secondary-sidebar-stock-position #tertiary-name-" + i + "-" + j + "-" + k)
      for(let i=0; i<document.querySelectorAll('#secondary-sidebar-stock-position .tertiary-name').length; i++) {
          document.querySelectorAll('#secondary-sidebar-stock-position .tertiary-name')[i].className = 'tertiary-name'
          document.querySelectorAll('#secondary-sidebar-stock-position .square-icon')[i].className = 'square-icon'
      }
      t_icon.className = "square-icon jemy-active-square"
      t_name.className = "tertiary-name jmi-active-color"

      console.log(item)
      this.$emit('warehouse_info', item)
    },
    // polyTertiaryClick(i, j, k, l, item) {
    //   let poly_t_icon = document.querySelector("#secondary-sidebar-stock-position #icon-square-" + i + "-" + j + "-" + k + "-" + l + " .square-icon")
    //   let poly_t_name = document.querySelector("#secondary-sidebar-stock-position #poly-tertiary-name-" + i + "-" + j + "-" + k + "-" + l)
    //   for(let i=0; i<document.querySelectorAll('#secondary-sidebar-stock-position .poly-tertiary-name').length; i++) {
    //       document.querySelectorAll('#secondary-sidebar-stock-position .poly-tertiary-name')[i].className = 'poly-tertiary-name'
    //       document.querySelectorAll('#secondary-sidebar-stock-position .square-icon')[i].className = 'square-icon'
    //   }
    //   poly_t_icon.className = "square-icon jemy-active-square"
    //   poly_t_name.className = "poly-tertiary-name jmi-active-color"

    //   console.log(item)
    //   this.$emit('wh_store_stock_info', item)
    // },
    checkUserAreaWarehouseId(data) {
      // let cls = ''
      console.log(data)
      let user_area_dtl__wh_code = this.$store.state.JERP_LOGGED_USER_DATA.user_detils.user_area.wh_code
      console.log(user_area_dtl__wh_code)
      if(data.plant_code !== user_area_dtl__wh_code) {
        // cls = 'hide'
        return false
      } else {
        return true
      }
      // return cls
    }
  },
}
</script>

<style scoped>
.area-tree-inner .area-title-text {
    margin-bottom: 4px;
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
.menu-section .primary-menu .primary-menu-inner svg,
.icon-arrow svg {
    width  : 20px;
    height : 20px;
    padding: 5px;
    border-radius: 2px;
    margin-right: 4px;
    border: 1px solid var(--blue);
    cursor       : pointer;
}
.icon-arrow svg.fa-chevron-down {
  background-color: var(--blue);
  color: #FFFFFF;
}
.area-tree-inner .area-title-text .list-text,
.menu-section .primary-menu .primary-menu-inner .menu-name {
    display    : inline-block;
    font-size  : 14px;
    font-weight: 500;
}
.main-area-list-section {
    padding: 4px 6px;
}
.main-area-list-section .primary-area .icon-arrow {
    display       : inline-block;
    vertical-align: top;
}

.main-area-list-section .primary-area .primary-inner {
    display: inline-block;
    width: 88%;
}
.main-area-list-section .primary-area  .secondary-area-section .secondary-area .icon-arrow {
    display       : inline-block;
    vertical-align: top;
}

.main-area-list-section .primary-area  .secondary-inner {
    display: inline-block;
    width: 88%;
}
.main-area-list-section .primary-area .tertiary-area-section .tertiary-area .icon-square {
    display       : inline-block;
    vertical-align: top;
}
.square-icon {
    width        : 15px;
    height       : 15px;
    display      : block;
    border       : 1px solid #0073de4d;
    margin-top   : 4px;
    margin-right : 4px;
    border-radius: 2px;
    cursor       : pointer;
}
.primary-name,
.secondary-name,
.tertiary-name,
.poly-tertiary-name {
    width         : 100%;
    white-space   : nowrap;
    overflow      : hidden;
    text-overflow : ellipsis;
    vertical-align: middle;
    font-size: 14px;
}
.tertiary-name,
.poly-tertiary-name {
  cursor: pointer;
}
.main-area-list-section .primary-area  .tertiary-inner {
    display: inline-block;
    width: 88%;
} 
.poly-tertiary-inner {
    display: inline-block;
    width: 88%;
}
.jmi-active-color {
    color: var(--blue)
}
.jemy-active-square {
    background: var(--blue);
}
</style>