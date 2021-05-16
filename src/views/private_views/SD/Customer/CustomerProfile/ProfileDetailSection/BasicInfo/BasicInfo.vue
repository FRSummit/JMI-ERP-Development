<template>
  <div id="basic-info-section" class="basic-info-section">
      <div class="basic-info-section-inner">
          <!-- PERSONAL INFO -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                        <span>Personal Info</span>
                        <a class="inl-bl fl-right"><i class="zmdi zmdi-edit" @click="personalInfoEditModalClickHandler"></i></a>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Date of Birth</span>
                              <span class="data">{{ person.dob ? person.dob : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Gender:</span>
                              <span class="data">{{ person.sex ? person.sex : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Blood Group:</span>
                              <span class="data">{{ person.blood_group ? person.blood_group : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Religion:</span>
                              <span class="data">{{ person.religion ? person.religion : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">National ID:</span>
                              <span class="data">{{ person.nid ? person.nid : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Marital Status:</span>
                              <span class="data">{{ person.marital_status ? person.marital_status : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Contact Number:</span>
                              <span class="data">{{ person.phone ? person.phone : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Email:</span>
                              <span class="data">{{ person.email ? person.email : "Not Found" }}</span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <!-- PROFESSIONAL INFO -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Professional Info</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Occupation:</span>
                              <span class="data">{{ person.occupation ? person.occupation : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Designation:</span>
                              <span class="data">{{ person.designation ? person.designation : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Specialization:</span>
                              <span class="data">{{ advisor.specialization ? advisor.specialization : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Organization:</span>
                              <span class="data">{{ person.organization ? person.organization : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Degree:</span>
                              <span class="data">{{ advisor.degree ? advisor.degree : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Registration Number:</span>
                              <span class="data">{{ person.registration_number ? person.registration_number : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">TIN:</span>
                              <span class="data">{{ person.tin ? person.tin : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Patient per Day:</span>
                              <span class="data">{{ person.patient ? person.patient : "Not Found" }}</span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <!-- FAMILY INFO -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Family Info</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Father's Name:</span>
                              <span class="data">{{ person.father_name ? person.father_name : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Mother's Name:</span>
                              <span class="data">{{ person.mother_name ? person.mother_name : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Spouse Name:</span>
                              <span class="data">{{ person.spouse_name ? person.spouse_name : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Spouse DOB:</span>
                              <span class="data">{{ person.spouse_dob ? person.spouse_dob : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Childres name:</span>
                              <span class="data">{{ person.children_name ? person.children_name : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Children DOB:</span>
                              <span class="data">{{ person.children_dob ? person.children_dob : "Not Found" }}</span>
                          </p>
                      </div>
                      <!-- <div class="row">
                          <p class="data-section">
                              <span class="label">Childres name:</span>
                              <span class="data">{{ person.children_name ? person.children_name : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Children DOB:</span>
                              <span class="data">{{ person.children_dob ? person.children_dob : "Not Found" }}</span>
                          </p>
                      </div> -->
                  </div>
              </div>
          </div>
          <!-- PRESENT ADDRESS -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Present Address</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Address:</span>
                              <!-- <span class="data">{{ person.address ? person.address : "Not Found" }}</span> -->
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p>
                          <!-- <p class="data-section">
                              <span class="label">Post Office:</span>
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p> -->
                      </div>
                      <!-- <div class="row">
                          <p class="data-section">
                              <span class="label">Police Station:</span>
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">District/City:</span>
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Division/State:</span>
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Zip Code:</span>
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p>
                      </div> -->
                  </div>
              </div>
          </div>
          <!-- PERMANENT ADDRESS -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Permanent Address</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Address:</span>
                              <!-- <span class="data">{{ person.address ? person.address : "Not Found" }}</span> -->
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p>
                          <!-- <p class="data-section">
                              <span class="label">Post Office:</span>
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p> -->
                      </div>
                      <!-- <div class="row">
                          <p class="data-section">
                              <span class="label">Police Station:</span>
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">District/City:</span>
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Division/State:</span>
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Zip Code:</span>
                              <span class="data">{{ person.address ? person.address : "Not Found" }}</span>
                          </p>
                      </div> -->
                  </div>
              </div>
          </div>
      </div>
        <!-- PERSONAL INFO EDIT MODAL -->
        <div id="update-successfully-modal" class="modal-popup-section update-successfully-modal" v-if="personal_info_edit_popup_modal">
            <div class="modal-popup-section-inner update-successfully-modal-inner" v-click-outside="personalInfoEditPopupModalOutsideClick">
                <p>PERSONAL INFO EDIT MODAL</p>
                <p>PERSONAL INFO EDIT MODAL</p>
                <p>PERSONAL INFO EDIT MODAL</p>
                <p>PERSONAL INFO EDIT MODAL</p>
                <p>PERSONAL INFO EDIT MODAL</p>
                <p>PERSONAL INFO EDIT MODAL</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  props: ["person", "advisor", "family"],
  components: {},
  data() {
    return {
        PERSONAL_INFO_EDIT_MODAL: false,
        personal_info_edit_popup_modal: false,
    };
  },
  created() {},
  mounted() {
  },
  methods: {
      personalInfoEditModalClickHandler() {
          if(this.personal_info_edit_popup_modal) {
              this.personal_info_edit_popup_modal = false
          } else {
              this.personal_info_edit_popup_modal = true
          }
      },
      personalInfoEditPopupModalOutsideClick() {
          this.personal_info_edit_popup_modal = false
      }
  },
};
</script>

<style lang="less" scoped>
@import url("./BasicInfo.less");
</style>