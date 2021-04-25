<template>
    <div class="secondary-sidebar">
        <div class="area-tree-inner">
            <div class="area-title-text">
                <div class="icon-arrow" @click="sidebarTitleIconClick"><i class="fas fa-chevron-down"></i></div>
                <p class="list-text" @click="sidebarTitleIconClick">SBU List</p>
            </div>
        <div class="main-area-list-section">
          <div class="primary-area" v-for="(item_01, i) in 10" :key="i" :id="'primary-area-' + i">
            <div class="icon-arrow" @click="primaryArrowClick(i)">
              <span :id="'primary-right-arrow-' + i" class=""><i class="fas fa-chevron-right"></i></span>
              <span :id="'primary-down-arrow-' + i" class="hide"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="primary-inner">
              <p class="primary-name" @click="primaryClick(i)">Tree Section {{ i + 1 }}</p>
              <div :id="'secondary-area-section-' + i" class="secondary-area-section hide">
                <div class="secondary-area" v-for="(item_02, j) in 5" :key="j" :id="'secondary-area-' + i + '-' + j">
                  <div class="icon-arrow" @click="secondaryArrowClick(i, j)">
                    <span :id="'secondary-right-arrow-' + i + '-' + j" class=""><i class="fas fa-chevron-right"></i></span>
                    <span :id="'secondary-down-arrow-' + i + '-' + j" class="hide"><i class="fas fa-chevron-down"></i></span>
                  </div>
                  <div class="secondary-inner">
                    <p class="secondary-name" @click="secondaryClick(i, j)">Tree Section2 {{ i + 1 }} {{ j + 1 }}</p>
                    <div :id="'tertiary-area-section-' + i + '-' + j" class="tertiary-area-section hide">
                      <div class="tertiary-area" v-for="(item_03, k) in 3" :key="k" :id="'tertiary-area-' + i + '-' + j + '-' + k">
                        <!-- <div class="icon-square" @click="tertiaryClick(i, j, k)">
                          <span class="square-icon"></span>
                        </div> -->
                        <div class="icon-arrow" @click="tertiaryClick(i, j, k)">
                            <span :id="'tertiary-right-arrow-' + i + '-' + j + '-' + k" class=""><i class="fas fa-chevron-right"></i></span>
                            <span :id="'tertiary-down-arrow-' + i + '-' + j + '-' + k" class="hide"><i class="fas fa-chevron-down"></i></span>
                        </div>
                        <div class="tertiary-inner">
                          <p :id="'tertiary-name-' + i + '-' + j + '-' + k" class="tertiary-name" @click="tertiaryClick(i, j, k)">Tree Section3 {{ i + 1 }} {{ j + 1 }} {{ k + 1 }}</p>
                          <div :id="'poly-tertiary-area-section-' + i + '-' + j + '-' + k" class="poly-tertiary-area-section hide">
                                <div class="poly-tertiary-area" v-for="(item_03, l) in 3" :key="l" :id="'tertiary-area-' + i + '-' + j + '-' + k + '-' + l">
                                    <!-- <div class="icon-arrow" @click="polyTertiaryClick(i, j)">
                                        <span :id="'secondary-right-arrow-' + i + '-' + j" class=""><i class="fas fa-chevron-right"></i></span>
                                        <span :id="'secondary-down-arrow-' + i + '-' + j" class="hide"><i class="fas fa-chevron-down"></i></span>
                                    </div> -->
                                    <div :id="'icon-square-' + i + '-' + j + '-' + k + '-' + l" class="icon-square" @click="polyTertiaryClick(i, j, k, l)">
                                        <span class="square-icon"></span>
                                    </div>
                                    <div class="poly-tertiary-inner">
                                        <p :id="'poly-tertiary-name-' + i + '-' + j + '-' + k + '-' + l" class="poly-tertiary-name" @click="polyTertiaryClick(i, j, k, l)">Tree Section4 {{ i + 1 }} {{ j + 1 }} {{ k + 1 }} {{ l + 1 }}</p>
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
      </div>
    </div>
</template>

<script>
export default {
    
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
      let secondaryAreaSection = document.querySelector("#primary-area-" + i + " .secondary-area-section")
      let primaryDownArrow = document.querySelector("#primary-area-" + i + " #primary-down-arrow-" + i)
      let primaryRightArrow = document.querySelector("#primary-area-" + i + " #primary-right-arrow-" + i)
      let primaryName = document.querySelector("#primary-area-" + i + " .primary-name")
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
      let tertiaryAreaSection = document.querySelector("#primary-area-" + i + " #secondary-area-" + i + "-" + j + " .tertiary-area-section")
      let primaryDownArrow = document.querySelector("#primary-area-" + i + " #secondary-area-" + i + "-" + j + " #secondary-down-arrow-" + i + "-" + j)
      let primaryRightArrow = document.querySelector("#primary-area-" + i + " #secondary-area-" + i + "-" + j + " #secondary-right-arrow-" + i + "-" + j)
      let secondaryName = document.querySelector("#primary-area-" + i + " #secondary-area-" + i + "-" + j + " .secondary-name")
      if(document.querySelector('#secondary-area-section-' + i + ' #tertiary-area-section-' + i + '-' + j).className === "tertiary-area-section") {
        document.querySelector('#secondary-area-section-' + i + ' #tertiary-area-section-' + i + '-' + j).className = "tertiary-area-section hide"
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
    tertiaryClick(i, j, k) {
      console.log("tertiary Click : " + i + "    " + j + "    " + k);
      let tertiary_right_arrow = document.querySelector('#tertiary-right-arrow-' + i + '-' + j + '-' + k)
      let tertiary_down_arrow = document.querySelector('#tertiary-down-arrow-' + i + '-' + j + '-' + k)
      let tertiary_name = document.querySelector('#tertiary-name-' + i + '-' + j + '-' + k)
      if(document.querySelector('#poly-tertiary-area-section-' + i + '-' + j + '-' + k).className === "poly-tertiary-area-section") {
        document.querySelector('#poly-tertiary-area-section-' + i + '-' + j + '-' + k).className = "poly-tertiary-area-section hide"

            tertiary_name.className = 'tertiary-name'
          tertiary_down_arrow.className = 'hide'
          tertiary_right_arrow.className = ''
      } else {
          document.querySelector('#poly-tertiary-area-section-' + i + '-' + j + '-' + k).className = "poly-tertiary-area-section"
            tertiary_name.className = 'tertiary-name jmi-active-color'
          tertiary_down_arrow.className = ''
          tertiary_right_arrow.className = 'hide'
      }
    },
    polyTertiaryClick(i, j, k, l) {
      let poly_t_icon = document.querySelector("#icon-square-" + i + "-" + j + "-" + k + "-" + l + " .square-icon")
      let poly_t_name = document.querySelector("#poly-tertiary-name-" + i + "-" + j + "-" + k + "-" + l)
      for(let i=0; i<document.querySelectorAll('.poly-tertiary-name').length; i++) {
          document.querySelectorAll('.poly-tertiary-name')[i].className = 'poly-tertiary-name'
          document.querySelectorAll('.square-icon')[i].className = 'square-icon'
      }
      poly_t_icon.className = "square-icon jemy-active-square"
      poly_t_name.className = "poly-tertiary-name jmi-active-color"
    },
    closeAlltertiary() {
      let secondaryName = document.querySelectorAll(".secondary-name")
      for(let i=0; i<document.querySelectorAll('.tertiary-area-section').length; i++) {
        secondaryName[i].className = 'secondary-name'
        document.querySelectorAll('.tertiary-area-section')[i].className = "tertiary-area-section hide"
      }
      this.closetertiaryArrow()
      this.removetertiaryActiveClass()
    },
    closetertiaryArrow() {
      let secondaryArrowIcon = document.querySelectorAll('.secondary-area-section .icon-arrow')
      for(let i=0; i<secondaryArrowIcon.length; i++) {
        document.querySelectorAll('.secondary-area-section .icon-arrow span:nth-child(1)')[i].className = ''
        document.querySelectorAll('.secondary-area-section .icon-arrow span:nth-child(2)')[i].className = 'hide'
      }
    },
    removetertiaryActiveClass() {
      let tertiaryList = document.querySelectorAll('.tertiary-name')
      for(let i=0; i<tertiaryList.length; i++) {
        document.querySelectorAll('.square-icon')[i].className = 'square-icon'
        tertiaryList[i].className = 'tertiary-name'
      }
    }
  },
}
</script>

<style scoped>
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
.menu-section .primary-menu .primary-menu-inner svg,
.icon-arrow svg {
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
.menu-section .primary-menu .primary-menu-inner .menu-name {
    display    : inline-block;
    font-size  : 14px;
    font-weight: 500;
}
.main-area-list-section .primary-area .icon-arrow {
    display       : inline-block;
    vertical-align: top;
}

.main-area-list-section .primary-area .primary-inner {
    display: inline-block;
}
.main-area-list-section .primary-area  .secondary-area-section .secondary-area .icon-arrow {
    display       : inline-block;
    vertical-align: top;
}

.main-area-list-section .primary-area  .secondary-inner {
    display: inline-block;
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
.main-area-list-section .primary-area  .tertiary-inner {
    display: inline-block;
} 
.poly-tertiary-inner {
    display: inline-block;
}
.jmi-active-color {
    color: var(--blue)
}
.jemy-active-square {
    background: var(--blue);
}
</style>