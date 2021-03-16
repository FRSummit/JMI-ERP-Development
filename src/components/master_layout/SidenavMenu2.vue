<template>
  <div id="sidenav-menu-sec" class="sidenav-menu-sec">
    <div class="menu-section-area">
        <div class="menu-section-colps-icon">
            <div class="icon-inner">
                <div class="search-icon">
                    <span class="search-primary-icon">
                        <!-- <i class="fas fa-search"></i> -->
                        <i class="zmdi zmdi-search"></i>
                    </span>
                </div>
                <div class="menu-list">
                    <span class="single-primary-icon" v-for="(static_menu, i) in static_menu_list" :key="i">
                        <i :class="static_menu.icon_class"></i>
                    </span>
                    <span class="single-primary-icon" v-for="(primary, i) in WEB_MENU" :key="i">
                        <i :class="primary.icon_class"></i>
                    </span>
                </div>
            </div>
        </div>
      <div class="menu-section-inner">
          
        <div class="search-section">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Search"/>
          </div>
        </div>

        <div class="static-menu">
          <div class="static-menu-section" v-for="(static_menu, i) in static_menu_list" :key="i">
            <div class="static-menu-section-inner">
                <div :id="'static-menu-icon-inner-' + i" class="static-menu-icon-inner">
                    <span :id="'static-menu-icon-' + i" class="static-menu-icon" @click="staticMenuClick(i)">
                        <i :class="static_menu.icon_class"></i>
                    </span>
                </div>
                <div class="static-menu-area-inner">
                    <div class="static-menu-name-section" @click="staticMenuClick(i)" @mouseover="staticPrimaryMenuMouseOver('static-menu-icon-inner', i)" @mouseleave="staticPrimaryMenuMouseLeave('static-menu-icon-inner', i)">
                        <p :id="'static-menu-name-' + i" class="static-menu-name">
                            {{ static_menu.name }}
                            <span class="right-arrow-icon" v-if="static_menu.secondary_menu_list"><i class="fas fa-chevron-right"></i></span>
                            <span class="down-arrow-icon hide" v-if="static_menu.secondary_menu_list"><i class="fas fa-chevron-down"></i></span>
                        </p>
                    </div>
                    <div :id="'static-secondary-menu-section-' + i" class="static-secondary-menu-section hide">
                        <div class="static-secondary-menu-section-inner" v-for="(secondary, j) in static_menu.secondary_menu_list" :key="j">
                            <div :id="'static-secondary-menu-icon-inner-' + i + '-' + j" class="static-secondary-menu-icon-inner">
                                <span :id="'static-secondary-icon-' + i + '-' + j" class="static-secondary-icon" @click="staticSecondaryMenuClick(i, j)">
                                </span>
                            </div>
                            <div class="static-secondary-menu-area-inner">
                                <div class="static-secondary-menu-name-section" @click="staticSecondaryMenuClick(i, j)" @mouseover="staticSecondaryMenuMouseOver('static-secondary-menu-icon-inner', i, j)" @mouseleave="staticSecondaryMenuMouseLeave('static-secondary-menu-icon-inner', i, j)">
                                    <p :id="'static-secondary-menu-name-' + i + '-' + j" class="static-secondary-menu-name">{{ secondary.secondary_menu }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div class="dynamic-menu">
          <div class="primary-menu-section">
            <div class="primary-menu-section-inner" v-for="(primary, i) in WEB_MENU" :key="i">
                <div :id="'primary-menu-icon-inner-' + i" class="primary-menu-icon-inner">
                <span :id="'primary-icon-' + i" class="primary-icon" @click="primaryMenuClick(i, primary)">
                    <i :class="primary.icon_class"></i>
                </span>
                </div>
                <div class="primary-menu-area-inner">
                <div class="primary-menu-name-section" @click="primaryMenuClick(i, primary)" @mouseover="primaryMenuMouseOver('primary-menu-icon-inner', i)" @mouseleave="primaryMenuMouseLeave('primary-menu-icon-inner', i)">
                    <p :id="'primary-menu-name-' + i" class="primary-menu-name">
                        <!-- {{ primary.primary_menu }} -->
                        {{ primary.menu_name }}
                        <!-- <span class="right-arrow-icon" v-if="primary.secondary_menu_list"><i class="fas fa-chevron-right"></i></span>
                        <span class="down-arrow-icon hide" v-if="primary.secondary_menu_list"><i class="fas fa-chevron-down"></i></span> -->
                        <span class="right-arrow-icon" v-if="primary.menu"><i class="fas fa-chevron-right"></i></span>
                        <span class="down-arrow-icon hide" v-if="primary.menu"><i class="fas fa-chevron-down"></i></span>
                    </p>
                </div>

                <div :id="'secondary-menu-section-' + i" class="secondary-menu-section hide">
                    <!-- <div class="secondary-menu-section-inner" v-for="(secondary, j) in primary.secondary_menu_list" :key="j"> -->
                    <div class="secondary-menu-section-inner" v-for="(secondary, j) in primary.menu" :key="j">
                    <div :id="'secondary-menu-icon-inner-' + i + '-' + j" class="secondary-menu-icon-inner">
                        <span :id="'secondary-icon-' + i + '-' + j" class="secondary-icon" @click="secondaryMenuClick(i, j, secondary)">
                        </span>
                    </div>
                    <div class="secondary-menu-area-inner">
                        <div class="secondary-menu-name-section" @click="secondaryMenuClick(i, j, secondary)" @mouseover="secondaryMenuMouseOver('secondary-menu-icon-inner', i, j)" @mouseleave="secondaryMenuMouseLeave('secondary-menu-icon-inner', i, j)">
                        <p :id="'secondary-menu-name-' + i + '-' + j" class="secondary-menu-name">
                            <!-- {{ secondary.secondary_menu }} -->
                            {{ secondary.menu_name }}
                            <span class="right-arrow-icon" v-if="secondary.tertiary_menu_list"><i class="fas fa-chevron-right"></i></span>
                            <span class="down-arrow-icon hide" v-if="secondary.tertiary_menu_list"><i class="fas fa-chevron-down"></i></span>
                        </p>
                        </div>

                        <div :id="'tertiary-menu-section-' + i + '-' + j" class="tertiary-menu-section hide">
                        <div class="tertiary-menu-section-inner" v-for="(tertiary, k) in secondary.tertiary_menu_list" :key="k">
                            <div :id="'tertiary-menu-icon-inner-' + i + '-' + j + '-' + k" class="tertiary-menu-icon-inner">
                                <span :id="'tertiary-icon-' + i + '-' + j + '-' + k" class="tertiary-icon" @click="tertiaryMenuClick(i, j, k, tertiary)">
                                <i class="fas fa-chevron-circle-right"></i>
                                </span>
                            </div>
                            <div class="tertiary-menu-area-inner">
                            <div class="tertiary-menu-name-section" @click="tertiaryMenuClick(i, j, k, tertiary)" @mouseover="tertiaryMenuMouseOver('tertiary-menu-icon-inner', i, j, k)" @mouseleave="tertiaryMenuMouseLeave('tertiary-menu-icon-inner', i, j, k)">
                                <p :id="'tertiary-menu-name-' + i + '-' + j + '-' + k" class="tertiary-menu-name">
                                    {{ tertiary.tertiary_menu }}
                                    <span class="right-arrow-icon" v-if="secondary.tertiary_menu_list"><i class="fas fa-chevron-right"></i></span>
                                    <span class="down-arrow-icon hide" v-if="secondary.tertiary_menu_list"><i class="fas fa-chevron-down"></i></span>
                                </p>
                            </div>

                            <div :id="'tertiary-poly-menu-section-' + i + '-' + j + '-' + k" class="tertiary-poly-menu-section hide">
                                <div class="tertiary-poly-menu-section-inner" v-for="(tertiary_poly, l) in secondary.tertiary_menu_list" :key="l">
                                <div :id="'tertiary-poly-menu-icon-inner-' + i + '-' + j + '-' + k + '-' + l" class="tertiary-poly-menu-icon-inner">
                                    <span :id="'tertiary-poly-icon-' + i + '-' + j + '-' + k + '-' + l" class="tertiary-poly-icon" @click="polyTertiaryMenuClick(i, j, k, l, tertiary_poly)">
                                    </span>
                                </div>
                                <div class="tertiary-poly-menu-area-inner">
                                    <div class="tertiary-poly-menu-name-section" @click="polyTertiaryMenuClick(i, j, k, l, tertiary_poly)" @mouseover="polyTertiaryMenuMouseOver('tertiary-poly-menu-icon-inner', i, j, k, l)" @mouseleave="polyTertiaryMenuMouseLeave('tertiary-poly-menu-icon-inner', i, j, k, l)">
                                        <p :id="'tertiary-poly-menu-name-' + i + '-' + j + '-' + k + '-' + l" class="tertiary-poly-menu-name">{{ tertiary_poly.tertiary_menu }}</p>
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

        
    <div class="bottom-logo-section">
        <div class="bottom-logo-inner">
            <div class="erp-logo">
                <img src="../../assets/images/erp_logo.png" alt="ERP">
                <p class="logo-version">Version <span>{{ erp_version }}</span></p>
            </div>
            <div class="mononsoft-logo">
                <div class="left-section">
                    <p class="logo-poweredby">Powered By</p>
                </div>
                <div class="right-section">
                    <img src="../../assets/images/mononsoft_logo.png" alt="ERP">
                </div>
            </div>
        </div>
    </div>

      </div>
    </div>
  </div>
</template>

<script>
// import ERPSidebarService from "../../service/ERPSidebarService";
// const service = new ERPSidebarService();

export default {
  props: ["WEB_MENU"],
  data() {
    return {
      btn: "primary",
      secondary_arrow_hide_flag: false,
      secondary_menu_display: false,
      secondary_menu_display_id_checker: null,
      erp_version: "1.00.01"
    };
  },
  created() {
  },
  async mounted() {
    /*await service.getWebSideMenu().then( res => {
        this.menu_list = res.data.data;
        if(JSON.parse(localStorage.getItem("jerp_logged_user")).user_detils === null) {
            window.locationreload()
        }
    })
    .catch(err => {
        if(err) {
            window.location.reload()
        }
    })*/
  },
  methods: {
      staticMenuClick(id) {
        this.checkDynamicMenuIsOpen()
        let staticSecondaryMenuSection = document.querySelector("#static-secondary-menu-section-" + id)
        let staticMenuIcon = document.querySelector("#static-menu-icon-" + id)
        let staticMenuText = document.querySelector("#static-menu-name-" + id)
        let staticRightIcon = document.querySelector("#static-menu-name-" + id + " .right-arrow-icon")
        let staticDownIcon = document.querySelector("#static-menu-name-" + id + " .down-arrow-icon")
        if (staticSecondaryMenuSection.className === "static-secondary-menu-section hide") {
            this.closeAllStaticPrimaryMenuSectionForPrimaryMenuClick()
            this.removeJemyActiveClassFromIconAndText('static-menu-icon', 'static-menu-name')
            staticSecondaryMenuSection.className = "static-secondary-menu-section";
            staticMenuIcon.className = "static-menu-icon jemy-active"
            staticMenuText.className = "static-menu-name jemy-active"
            if(staticRightIcon && staticDownIcon) {
                staticRightIcon.className = "right-arrow-icon hide"
                staticDownIcon.className = "down-arrow-icon"
            }
        } else {
            staticSecondaryMenuSection.className = "static-secondary-menu-section hide";
            staticMenuIcon.className = "static-menu-icon"
            staticMenuText.className = "static-menu-name"
            if(staticRightIcon && staticDownIcon) {
                staticRightIcon.className = "right-arrow-icon"
                staticDownIcon.className = "down-arrow-icon hide"
            }
        }
      },
      staticSecondaryMenuClick(id_i, id_j) {
        let secondaryMenuIcon = document.querySelector("#static-secondary-icon-" + id_i + "-" + id_j)
        let secondaryMenuText = document.querySelector("#static-secondary-menu-name-" + id_i + "-" + id_j)
        if (secondaryMenuText.className === "static-secondary-menu-name") {
            this.removeJemyActiveClassFromIconAndText('static-secondary-icon', 'static-secondary-menu-name')
            secondaryMenuIcon.className = "static-secondary-icon jemy-active"
            secondaryMenuText.className = "static-secondary-menu-name jemy-active"
        } else {
            secondaryMenuIcon.className = "static-secondary-icon"
            secondaryMenuText.className = "static-secondary-menu-name"
        }
      },
      primaryMenuClick(id, menu_details) {
        this.checkStaticMenuIsOpen()
        let secondaryMenuSection = document.querySelector("#secondary-menu-section-" + id)
        let primaryMenuIcon = document.querySelector("#primary-icon-" + id)
        let primaryMenuText = document.querySelector("#primary-menu-name-" + id)
        let primaryRightIcon = document.querySelector("#primary-menu-name-" + id + " .right-arrow-icon")
        let primaryDownIcon = document.querySelector("#primary-menu-name-" + id + " .down-arrow-icon")
        if (secondaryMenuSection.className === "secondary-menu-section hide") {
            this.closeAllPrimaryMenuSectionForPrimaryMenuClick()
            secondaryMenuSection.className = "secondary-menu-section";
            primaryMenuIcon.className = "primary-icon jemy-active"
            primaryMenuText.className = "primary-menu-name jemy-active"
            if(primaryRightIcon && primaryDownIcon) {
                primaryRightIcon.className = "right-arrow-icon hide"
                primaryDownIcon.className = "down-arrow-icon"
            }
        } else {
            secondaryMenuSection.className = "secondary-menu-section hide";
            primaryMenuIcon.className = "primary-icon"
            primaryMenuText.className = "primary-menu-name"
            if(primaryRightIcon && primaryDownIcon) {
                primaryRightIcon.className = "right-arrow-icon"
                primaryDownIcon.className = "down-arrow-icon hide"
            }
        }
        if(menu_details.feature && (this.$router.currentRoute.path !== menu_details.feature.url)) {
            this.$router.push(menu_details.feature.url)
                .catch( (err) => {
                    console.log(err)
                });
            this.$emit('close_side_nav')
        }
      },
      secondaryMenuClick(id_i, id_j, menu_details) {
        let tertiaryMenuSection = document.querySelector("#tertiary-menu-section-" + id_i + "-" + id_j)
        let secondaryMenuIcon = document.querySelector("#secondary-icon-" + id_i + "-" + id_j)
        let secondaryMenuText = document.querySelector("#secondary-menu-name-" + id_i + "-" + id_j)
        let secondaryRightIcon = document.querySelector("#secondary-menu-name-" + id_i + "-" + id_j  + " .right-arrow-icon")
        let secondaryDownIcon = document.querySelector("#secondary-menu-name-" + id_i + "-" + id_j  + " .down-arrow-icon")
        if (tertiaryMenuSection.className === "tertiary-menu-section hide") {
            this.closeAllSecondaryMenuSectionForSecondaryMenuClick()
            tertiaryMenuSection.className = "tertiary-menu-section";
            secondaryMenuIcon.className = "secondary-icon jemy-active"
            secondaryMenuText.className = "secondary-menu-name jemy-active"
            if(secondaryRightIcon && secondaryDownIcon) {
                secondaryRightIcon.className = "right-arrow-icon hide"
                secondaryDownIcon.className = "down-arrow-icon"
            }
        } else {
            tertiaryMenuSection.className = "tertiary-menu-section hide";
            secondaryMenuIcon.className = "secondary-icon"
            secondaryMenuText.className = "secondary-menu-name"
            if(secondaryRightIcon && secondaryDownIcon) {
                secondaryRightIcon.className = "right-arrow-icon"
                secondaryDownIcon.className = "down-arrow-icon hide"
            }
        }
        if(menu_details.feature && (this.$router.currentRoute.path !== menu_details.feature.url)) {
            this.$router.push(menu_details.feature.url)
                .catch( (err) => {
                    console.log(err)
                });
            this.$emit('close_side_nav')
        }
      },
      tertiaryMenuClick(id_i, id_j, id_k, menu_details) {
        let tertiaryPolyMenuSection = document.querySelector("#tertiary-poly-menu-section-" + id_i + "-" + id_j + "-" + id_k)
        let tertiaryMenuIcon = document.querySelector("#tertiary-icon-" + id_i + "-" + id_j + "-" + id_k)
        let tertiaryMenuText = document.querySelector("#tertiary-menu-name-" + id_i + "-" + id_j + "-" + id_k)
        let tertiaryRightIcon = document.querySelector("#tertiary-menu-name-" + id_i + "-" + id_j + "-" + id_k  + " .right-arrow-icon")
        let tertiaryDownIcon = document.querySelector("#tertiary-menu-name-" + id_i + "-" + id_j + "-" + id_k  + " .down-arrow-icon")
        if (tertiaryPolyMenuSection.className === "tertiary-poly-menu-section hide") {
            this.closeAllTertiaryMenuSectionForTertiaryMenuClick()
            tertiaryPolyMenuSection.className = "tertiary-poly-menu-section";
            tertiaryMenuIcon.className = "tertiary-icon jemy-active"
            tertiaryMenuText.className = "tertiary-menu-name jemy-active"
            if(tertiaryRightIcon && tertiaryDownIcon) {
                tertiaryRightIcon.className = "right-arrow-icon hide"
                tertiaryDownIcon.className = "down-arrow-icon"
            }
        } else {
            tertiaryPolyMenuSection.className = "tertiary-poly-menu-section hide";
            tertiaryMenuIcon.className = "tertiary-icon"
            tertiaryMenuText.className = "tertiary-menu-name"
            if(tertiaryRightIcon && tertiaryDownIcon) {
                tertiaryRightIcon.className = "right-arrow-icon"
                tertiaryDownIcon.className = "down-arrow-icon hide"
            }
        }
        if(menu_details.feature && (this.$router.currentRoute.path !== menu_details.feature.url)) {
            this.$router.push(menu_details.feature.url)
            this.$emit('close_side_nav')
        }
      },
      polyTertiaryMenuClick(id_i, id_j, id_k, id_l, menu_details) {
        this.closeAllTertiaryPolyMenuForTertiaryPolyMenuClick()
        let tertiaryPolyMenuIcon = document.querySelector("#tertiary-poly-icon-" + id_i + "-" + id_j + "-" + id_k + "-" + id_l)
        let tertiaryPolyMenuText = document.querySelector("#tertiary-poly-menu-name-" + id_i + "-" + id_j + "-" + id_k + "-" + id_l)
        if ( (tertiaryPolyMenuIcon.className === "tertiary-poly-icon") || 
             (tertiaryPolyMenuText.className === "tertiary-poly-menu-name") ) {
            tertiaryPolyMenuIcon.className = "tertiary-poly-icon jemy-active"
            tertiaryPolyMenuText.className = "tertiary-poly-menu-name jemy-active"
        } else {
            tertiaryPolyMenuIcon.className = "tertiary-poly-icon"
            tertiaryPolyMenuText.className = "tertiary-poly-menu-name"
        }
        if(menu_details.feature && (this.$router.currentRoute.path !== menu_details.feature.url)) {
            this.$router.push(menu_details.feature.url)
            this.$emit('close_side_nav')
        }
      },
    //   Static
      closeAllStaticPrimaryMenuSectionForPrimaryMenuClick() {
        // this.closeAllTertiaryPolyMenuForTertiaryPolyMenuClick()
        // this.closeAllTertiaryMenuSectionForTertiaryMenuClick()
        this.closeAllStaticSecondaryMenuSectionForSecondaryMenuClick()
        // Hide all secondary menu section
        // let staticSecondaryMenuSectionList = document.querySelectorAll(".static-secondary-menu-section")
        // for (let i = 0; i < staticSecondaryMenuSectionList.length; i++) {
        //     if (staticSecondaryMenuSectionList[i].className === "static-secondary-menu-section") {
        //         staticSecondaryMenuSectionList[i].className = "static-secondary-menu-section hide";
        //     }
        // }
        this.hideAllVisibleSelector('static-secondary-menu-section')
        this.removeJemyActiveClassFromIconAndText('static-menu-icon','static-menu-name')
        this.setRightArrowVisibleAndDownArrowHide('.static-menu-name .right-arrow-icon', '.static-menu-name .down-arrow-icon')
      },
      closeAllStaticSecondaryMenuSectionForSecondaryMenuClick() {
        // this.closeAllTertiaryPolyMenuForTertiaryPolyMenuClick()
        // this.closeAllTertiaryMenuSectionForTertiaryMenuClick()
        // Hide all tertiary menu section
        // let tertiaryMenuSectionList = document.querySelectorAll(".tertiary-menu-section")
        // for (let i = 0; i < tertiaryMenuSectionList.length; i++) {
        //     if (tertiaryMenuSectionList[i].className === "tertiary-menu-section") {
        //         tertiaryMenuSectionList[i].className = "tertiary-menu-section hide";
        //     }
        // }
        // this.hideAllVisibleSelector('tertiary-menu-section')
        this.removeJemyActiveClassFromIconAndText('static-secondary-icon','static-secondary-menu-name')
        this.setRightArrowVisibleAndDownArrowHide('.static-secondary-menu-name .right-arrow-icon', '.static-secondary-menu-name .down-arrow-icon')
      },
    //   Dynamic
      closeAllPrimaryMenuSectionForPrimaryMenuClick() {
        this.closeAllTertiaryPolyMenuForTertiaryPolyMenuClick()
        this.closeAllTertiaryMenuSectionForTertiaryMenuClick()
        this.closeAllSecondaryMenuSectionForSecondaryMenuClick()
        // Hide all secondary menu section
        // let secondaryMenuSectionList = document.querySelectorAll(".secondary-menu-section")
        // for (let i = 0; i < secondaryMenuSectionList.length; i++) {
        //     if (secondaryMenuSectionList[i].className === "secondary-menu-section") {
        //         secondaryMenuSectionList[i].className = "secondary-menu-section hide";
        //     }
        // }
        this.hideAllVisibleSelector('secondary-menu-section')
        this.removeJemyActiveClassFromIconAndText('primary-icon','primary-menu-name')
        this.setRightArrowVisibleAndDownArrowHide('.primary-menu-name .right-arrow-icon', '.primary-menu-name .down-arrow-icon')
      },
      closeAllSecondaryMenuSectionForSecondaryMenuClick() {
        this.closeAllTertiaryPolyMenuForTertiaryPolyMenuClick()
        this.closeAllTertiaryMenuSectionForTertiaryMenuClick()
        // Hide all tertiary menu section
        // let tertiaryMenuSectionList = document.querySelectorAll(".tertiary-menu-section")
        // for (let i = 0; i < tertiaryMenuSectionList.length; i++) {
        //     if (tertiaryMenuSectionList[i].className === "tertiary-menu-section") {
        //         tertiaryMenuSectionList[i].className = "tertiary-menu-section hide";
        //     }
        // }
        this.hideAllVisibleSelector('tertiary-menu-section')
        this.removeJemyActiveClassFromIconAndText('secondary-icon','secondary-menu-name')
        this.setRightArrowVisibleAndDownArrowHide('.secondary-menu-name .right-arrow-icon', '.secondary-menu-name .down-arrow-icon')
      },
      closeAllTertiaryMenuSectionForTertiaryMenuClick() {
        this.closeAllTertiaryPolyMenuForTertiaryPolyMenuClick()
        // Hide all poly tertiary menu section
        // let tertiaryPolyMenuSectionList = document.querySelectorAll(".tertiary-poly-menu-section")
        // for (let i = 0; i < tertiaryPolyMenuSectionList.length; i++) {
        //     if (tertiaryPolyMenuSectionList[i].className === "tertiary-poly-menu-section") {
        //         tertiaryPolyMenuSectionList[i].className = "tertiary-poly-menu-section hide";
        //     }
        // }
        this.hideAllVisibleSelector('tertiary-poly-menu-section')
        this.removeJemyActiveClassFromIconAndText('tertiary-icon','tertiary-menu-name')
        this.setRightArrowVisibleAndDownArrowHide('.tertiary-menu-name .right-arrow-icon', '.tertiary-menu-name .down-arrow-icon')
      },
      closeAllTertiaryPolyMenuForTertiaryPolyMenuClick() {
        this.removeJemyActiveClassFromIconAndText('tertiary-poly-icon','tertiary-poly-menu-name')
      },
      hideAllVisibleSelector(selector) {
        let selectorList = document.querySelectorAll('.' + selector)
        for (let i = 0; i < selectorList.length; i++) {
            if (selectorList[i].className === selector) {
                selectorList[i].className = selector + " hide";
            }
        }
      },
      removeJemyActiveClassFromIconAndText(iconClass, menuNameClass) {
          let icons = document.querySelectorAll('.' + iconClass)
          let menus = document.querySelectorAll('.' + menuNameClass)
          for (let i = 0; i < icons.length; i++) {
            if ( (icons[i].className === iconClass + " jemy-active") || 
                 (menus[i].className === menuNameClass + " jemy-active")) {
                icons[i].className = iconClass;
                menus[i].className = menuNameClass;
            }
          }
      },
      setRightArrowVisibleAndDownArrowHide(rightArrow, downArrow) {
          let rightArrowList = document.querySelectorAll(rightArrow)
          let downArrowList = document.querySelectorAll(downArrow)
          for(let i=0; i<rightArrowList.length; i++) {
              rightArrowList[i].className = 'right-arrow-icon'
              downArrowList[i].className = 'down-arrow-icon hide'
          }
      },
      checkDynamicMenuIsOpen() {
      },
      checkStaticMenuIsOpen() {
      },
      staticPrimaryMenuMouseOver(selector, id) {
          document.querySelector('#' + selector + '-' + id).className = selector + " jemy-hover";
          document.querySelector('#' + selector + '-' + id).parentNode.className = "static-menu-section-inner" + " jemy-hover";
      },
      staticPrimaryMenuMouseLeave(selector, id) {
          document.querySelector('#' + selector + '-' + id).className = selector;
          document.querySelector('#' + selector + '-' + id).parentNode.className = "static-menu-section-inner";
      },
      staticSecondaryMenuMouseOver(selector, i, j) {
          document.querySelector('#' + selector + '-' + i + '-' + j).className = selector + " jemy-hover";
          document.querySelector('#' + selector + '-' + i + '-' + j).parentNode.className = "static-secondary-menu-section-inner" + " jemy-hover";
      },
      staticSecondaryMenuMouseLeave(selector, i, j) {
          document.querySelector('#' + selector + '-' + i + '-' + j).className = selector;
          document.querySelector('#' + selector + '-' + i + '-' + j).parentNode.className = "static-secondary-menu-section-inner";
      },
      primaryMenuMouseOver(selector, id) {
          document.querySelector('#' + selector + '-' + id).className = selector + " jemy-hover";
          document.querySelector('#' + selector + '-' + id).parentNode.className = "primary-menu-section-inner" + " jemy-hover";
      },
      primaryMenuMouseLeave(selector, id) {
          document.querySelector('#' + selector + '-' + id).className = selector;
          document.querySelector('#' + selector + '-' + id).parentNode.className = "primary-menu-section-inner";
      },
      secondaryMenuMouseOver(selector, i, j) {
          document.querySelector('#' + selector + '-' + i + '-' + j).className = selector + " jemy-hover";
          document.querySelector('#' + selector + '-' + i + '-' + j).parentNode.className = "secondary-menu-section-inner" + " jemy-hover";
      },
      secondaryMenuMouseLeave(selector, i, j) {
          document.querySelector('#' + selector + '-' + i + '-' + j).className = selector;
          document.querySelector('#' + selector + '-' + i + '-' + j).parentNode.className = "secondary-menu-section-inner";
      },
      tertiaryMenuMouseOver(selector, i, j, k) {
          document.querySelector('#' + selector + '-' + i + '-' + j + '-' + k).className = selector + " jemy-hover";
          document.querySelector('#' + selector + '-' + i + '-' + j + '-' + k).parentNode.className = "tertiary-menu-section-inner" + " jemy-hover";
      },
      tertiaryMenuMouseLeave(selector, i, j, k) {
          document.querySelector('#' + selector + '-' + i + '-' + j + '-' + k).className = selector;
          document.querySelector('#' + selector + '-' + i + '-' + j + '-' + k).parentNode.className = "tertiary-menu-section-inner";
      },
      polyTertiaryMenuMouseOver(selector, i, j, k, l) {
          document.querySelector('#' + selector + '-' + i + '-' + j + '-' + k + '-' + l).className = selector + " jemy-hover";
          document.querySelector('#' + selector + '-' + i + '-' + j + '-' + k + '-' + l).parentNode.className = "tertiary-poly-menu-section-inner" + " jemy-hover";
      },
      polyTertiaryMenuMouseLeave(selector, i, j, k, l) {
          document.querySelector('#' + selector + '-' + i + '-' + j + '-' + k + '-' + l).className = selector;
          document.querySelector('#' + selector + '-' + i + '-' + j + '-' + k + '-' + l).parentNode.className = "tertiary-poly-menu-section-inner";
      },
   }
};
</script>