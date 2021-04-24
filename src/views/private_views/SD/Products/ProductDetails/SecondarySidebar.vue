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
              <p class="primary-name" @click="primaryClick(i)">Tree Section 1 - {{ i + 1 }}</p>
              <div :id="'secondary-area-section-' + i" class="secondary-area-section hide">
                <div class="secondary-area" v-for="(item_02, j) in 5" :key="j" :id="'secondary-area-' + i + '-' + j">
                  <div class="icon-arrow" @click="secondaryArrowClick(i, j)">
                    <span :id="'secondary-right-arrow-' + i + '-' + j" class=""><i class="fas fa-chevron-right"></i></span>
                    <span :id="'secondary-down-arrow-' + i + '-' + j" class="hide"><i class="fas fa-chevron-down"></i></span>
                  </div>
                  <div class="secondary-inner">
                    <p class="secondary-name" @click="secondaryClick(i, j)">Tree Section 2 - {{ i + 1 }} {{ j + 1 }}</p>
                    <div :id="'tertiary-area-section-' + i + '-' + j" class="tertiary-area-section hide">
                      <div class="tertiary-area" v-for="(item_03, k) in 3" :key="k" :id="'tertiary-area-' + i + '-' + j + '-' + k">
                        <div class="icon-square" @click="tertiaryClick(i, j, k)">
                          <span class="square-icon"></span>
                        </div>
                        <div class="tertiary-inner">
                          <p class="tertiary-name" @click="tertiaryClick(i, j, k)">Tree Section 3 - {{ i + 1 }} {{ j + 1 }} {{ k + 1 }}</p>
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
        primaryName.className = 'primary-name jemy-active'
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
          secondaryName.className = 'secondary-name jemy-active'
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
      this.removetertiaryActiveClass()
      let tertiaryIcon = document.querySelector("#primary-area-" + i + " #secondary-area-" + i + "-" + j + " #tertiary-area-" + i + "-" + j + "-" + k + " .square-icon")
      let tertiaryName = document.querySelector("#primary-area-" + i + " #secondary-area-" + i + "-" + j + " #tertiary-area-" + i + "-" + j + "-" + k + " .tertiary-name")
      tertiaryIcon.className = "square-icon jemy-active-square"
      tertiaryName.className = "tertiary-name jemy-active"
    },
    closeAllsecondary(id) {
      // this.closeAlltertiary()
      let secondarySection = document.querySelectorAll('.secondary-area-section')
      let primaryName = document.querySelectorAll(".primary-name")
      for(let i=0; i<secondarySection.length; i++) {
        primaryName[i].className = 'primary-name'
        if(i !== id) {
          secondarySection[i].className = "secondary-area-section hide"
          document.querySelector("#primary-area-" + i + " #primary-down-arrow-" + i).className = 'hide'
          document.querySelector("#primary-area-" + i + " #primary-right-arrow-" + i).className = ''
        }
      }
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
.main-area-list-section .primary-area  .square-icon {
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
</style>