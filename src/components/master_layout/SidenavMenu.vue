<template>
  <div id="sidnav-menu-section" class="sidnav-menu-section">
    <div
      class="primary-menu-section"
      v-for="(primary, i) in menu_list"
      :key="i"
    >
      <div class="primary-menu-group-section">
        <img
          class="primary-group-icon"
          src="../../assets/icons/gropu_icon.svg"
          :alt="primary.primary_menu"
        />
        <div
          v-if="sidenav"
          class="primary-menu-text-icon-section"
          @mouseover="primaryMouseOver(i)"
          @mouseleave="primaryMouseLeave(i)"
          :id="'pri_menu_sec_' + i"
          @click="primaryMenuClick(i)"
        >
          <p class="primary-menu-text">{{ primary.primary_menu }}</p>
          <img
            src="../../assets/icons/chevron-blue-down.svg"
            alt=""
            class="primary-arrow-icon"
          />
        </div>
      </div>
      <div
        v-if="sidenav"
        class="secondary-menu-section hide"
        :id="'secondary_menu_section_' + i"
      >
        <div
          class="secondary-menu"
          v-for="(secondary, j) in primary.secondary_menu_list"
          :key="j"
        >
          <div
            class="secondary-menu-group-text-icon-section"
            @mouseover="secondaryMouseOver(i, j)"
            @mouseleave="secondaryMouseLeave(i, j)"
            :id="'sec_menu_sec_' + i + '_' + j"
            @click="secondaryMenuClick(i, j)"
          >
            <div class="secondary-group-icon">
              <img
                src="../../assets/icons/gropu_icon.svg"
                alt=""
                class="secondary-gropu-icon"
              />
            </div>
            <div class="secondary-menu-text-icon-section">
              <p class="secondary-menu-text">{{ secondary.secondary_menu }}</p>
              <img
                src="../../assets/icons/chevron-blue-down.svg"
                alt=""
                class="secondary-arrow-icon"
              />
            </div>
          </div>
          <div
            v-if="sidenav"
            class="tertiary-menu-section hide"
            :id="'tertiary_menu_section_' + i + '_' + j"
          >
            <div
              class="tertiary-menu"
              v-for="(tertiary, k) in secondary.tertiary_menu_list"
              :key="k"
            >
              <div class="tertiary-menu-group-text-section">
                <div class="tertiary-group-icon">
                  <img
                    src="../../assets/icons/gropu_icon.svg"
                    alt=""
                    class="tertiary-gropu-icon"
                  />
                </div>
                <div class="tertiary-menu-text-icon-section">
                  <p class="tertiary-menu-text">{{ tertiary.tertiary_menu }}</p>
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
import ERPSidebarService from "../../service/ERPSidebarService";
const service = new ERPSidebarService();
// import $ from 'jquery'

export default {
  props: {
    sidenav: Boolean,
  },
  data() {
    return {
      menu_list: [],
      btn: "primary",
      secondary_arrow_hide_flag: false,
      secondary_menu_display: false,
      secondary_menu_display_id_checker: null,
    };
  },
  created() {
    service.getAllSidebarMenu().then((res) => {
      this.menu_list = res.data;
    });
  },
  mounted() {},
  methods: {
    primaryMouseOver(i) {
      document.getElementById("pri_menu_sec_" + i).className =
        "primary-menu-text-icon-section primary-hover";
    },
    primaryMouseLeave(i) {
      document.getElementById("pri_menu_sec_" + i).className =
        "primary-menu-text-icon-section";
    },
    secondaryMouseOver(i, j) {
      document.getElementById("sec_menu_sec_" + i + "_" + j).className =
        "secondary-menu-group-text-icon-section secondary-hover";
    },
    secondaryMouseLeave(i, j) {
      document.getElementById("sec_menu_sec_" + i + "_" + j).className =
        "secondary-menu-group-text-icon-section";
    },
    primaryMenuClick(i) {
      if (
        document.querySelector("#secondary_menu_section_" + i).className ===
        "secondary-menu-section hide"
      ) {
        let sec_menu_sec = document.querySelectorAll(".secondary-menu-section");
        for (let i = 0; i < sec_menu_sec.length; i++) {
          if (sec_menu_sec[i].className === "secondary-menu-section") {
            sec_menu_sec[i].className = "secondary-menu-section hide";
          }
        }
        document.querySelector("#secondary_menu_section_" + i).className =
          "secondary-menu-section";
      } else {
        document.querySelector("#secondary_menu_section_" + i).className =
          "secondary-menu-section hide";
      }
    },
    secondaryMenuClick(i, j) {
      if (
        document.querySelector("#tertiary_menu_section_" + i + "_" + j)
          .className === "tertiary-menu-section hide"
      ) {
        let ter_menu_sec = document.querySelectorAll(".tertiary-menu-section");
        for (let i = 0; i < ter_menu_sec.length; i++) {
          if (ter_menu_sec[i].className === "tertiary-menu-section") {
            ter_menu_sec[i].className = "tertiary-menu-section hide";
          }
        }
        document.querySelector(
          "#tertiary_menu_section_" + i + "_" + j
        ).className = "tertiary-menu-section";
      } else {
        document.querySelector(
          "#tertiary_menu_section_" + i + "_" + j
        ).className = "tertiary-menu-section hide";
      }
    },
  },
};
</script>

<style scoped>
.sidnav-menu-section {
  margin-top: 10px;
}
.primary-menu-section {
  width: 100%;
  padding: 4px 4px 8px 8px;
}
.primary-menu-group-section {
  width: 100%;
  position: relative;
}
.primary-menu-group-section:hover {
  white-space: normal;
  width: max-content;
  min-width: 100%;
  display: inline-block;
  overflow: visible;
  z-index: 8;
  background: #f3f6f6;
}
.primary-group-icon {
  width: 30px;
  /* margin: 20px 4px; */
  display: inline-block;
  vertical-align: middle;
}
.primary-menu-section .primary-menu-text-icon-section {
  width: 86%;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  top: -8px;
}
.primary-menu-section .primary-menu-text-icon-section:hover {
  white-space: normal;
  width: max-content;
  min-width: 80%;
  display: inline-block;
  overflow: visible;
  z-index: 8;
  background: #f3f6f6;
}
.primary-menu-section .primary-menu-text {
  margin: 0;
  font-size: 18px;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  text-align: left;
  color: #066ed1;
  cursor: pointer;
  padding: 6px;
}
.primary-menu-section .primary-menu-text:hover {
  white-space: normal;
  width: max-content;
  min-width: 80%;
  overflow: visible;
  z-index: 8;
  background: #f3f6f6;
}
.primary-menu-section .primary-arrow-icon {
  position: absolute;
  right: 0px;
  top: 12px;
  width: 12px;
}
.primary-hover .primary-arrow-icon {
  display: none;
}
.secondary-menu-section {
  /* width: 90%; */
  width: 85%;
  /* margin-left: 70px; */
  margin-left: 15%;
  margin-top: 6px;
}
.secondary-menu {
  width: 100%;
  display: block;
}
.secondary-menu-group-text-icon-section {
  width: 100%;
  display: block;
}
.secondary-menu-group-text-icon-section:hover {
  white-space: normal;
  width: max-content;
  min-width: 100%;
  overflow: visible;
  z-index: 8;
  background: #f3f6f6;
}
.secondary-group-icon {
  width: 10%;
  display: inline-block;
  vertical-align: middle;
}
.secondary-menu-text-icon-section {
  width: 90%;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
}
.secondary-menu-text {
  width: 90%;
  display: inline-block;
  padding-left: 10px;
  padding-top: 4px;
  /*  */
  margin: 0;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  text-align: left;
  color: #066ed1;
  cursor: pointer;
}
.secondary-menu-text:hover {
  white-space: normal;
  width: max-content;
  min-width: 90%;
  overflow: visible;
  z-index: 8;
  background: #f3f6f6;
}
.secondary-arrow-icon {
  width: 12px;
  /* display: inline-block; */
  position: absolute;
  right: 10px;
  top: 8px;
}
.secondary-hover .secondary-arrow-icon {
  display: none;
}
.tertiary-menu-section {
  width: 85%;
  margin-left: 15%;
  margin-top: 6px;
}
.tertiary-menu {
}
.tertiary-menu-group-text-section {
  width: 90%;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
}
.tertiary-menu-group-text-section:hover {
  white-space: normal;
  width: max-content;
  min-width: 100%;
  overflow: visible;
  z-index: 8;
  background: #f3f6f6;
}
.tertiary-group-icon {
  width: 10%;
  display: inline-block;
  vertical-align: middle;
}
.tertiary-menu-text-icon-section {
  width: 90%;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
}
.tertiary-menu-text {
  width: 90%;
  display: inline-block;
  padding-left: 10px;
  /*  */
  margin: 0;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  text-align: left;
  color: #066ed1;
  cursor: pointer;
}
.tertiary-menu-text:hover {
  white-space: normal;
  width: max-content;
  min-width: 90%;
  overflow: visible;
  z-index: 8;
  background: #f3f6f6;
}
.hide {
  display: none !important;
}
</style>