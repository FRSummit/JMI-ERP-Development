<template>
  <div id="basic-info-section" class="basic-info-section">
      <div class="basic-info-section-inner">
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Personal Info</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Date of Birth</span>
                              <span class="data">{{ profile[0].dob ? profile[0].dob : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Gender:</span>
                              <span class="data">{{ profile[0].sex ? profile[0].sex : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Blood Group:</span>
                              <span class="data">{{ profile[0].blood_group ? profile[0].blood_group : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Religion:</span>
                              <span class="data">{{ profile[0].religion ? profile[0].religion : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">National ID:</span>
                              <span class="data">{{ profile[0].nid ? profile[0].nid : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Marital Status:</span>
                              <span class="data">{{ profile[0].marital_status ? profile[0].marital_status : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Contact Number:</span>
                              <span class="data">{{ profile[0].phone ? profile[0].phone : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Email:</span>
                              <span class="data">{{ profile[0].email ? profile[0].email : "Not Found" }}</span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <!--  -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Professional Info</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Occupation:</span>
                              <span class="data">{{ profile[0].occupation ? profile[0].occupation : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Designation:</span>
                              <span class="data">{{ profile[0].designation ? profile[0].designation : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Specialization:</span>
                              <span class="data">{{ profile[0].specialization ? profile[0].specialization : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Organization:</span>
                              <span class="data">{{ profile[0].organization ? profile[0].organization : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Degree:</span>
                              <span class="data">{{ profile[0].degree ? profile[0].degree : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Registration Number:</span>
                              <span class="data">{{ profile[0].registration_number ? profile[0].registration_number : "Not Found" }}</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">TIN:</span>
                              <span class="data">{{ profile[0].tin ? profile[0].tin : "Not Found" }}</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Patient per Day:</span>
                              <span class="data">{{ profile[0].patient ? profile[0].patient : "Not Found" }}</span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <!--  -->
          <!--  -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Family Info</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Father's Name:</span>
                              <span class="data">Zakir Hossain</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Mother's Name:</span>
                              <span class="data">Mahfuza Akhter</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Spouse Name:</span>
                              <span class="data">Mrs. Parul Akhter</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Spouse DOB:</span>
                              <span class="data">01/11/1996</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Childres name:</span>
                              <span class="data">Mehidi Hasan</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Children DOB:</span>
                              <span class="data">02/11/1996</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Childres name:</span>
                              <span class="data">Mehidi Hasan</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Children DOB:</span>
                              <span class="data">02/11/1996</span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <!--  -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Present Address</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Address:</span>
                              <span class="data">21/1 A Sukrabad</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Post Office:</span>
                              <span class="data">Kalabagan</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Police Station:</span>
                              <span class="data">Dhanmondi</span>
                          </p>
                          <p class="data-section">
                              <span class="label">District/City:</span>
                              <span class="data">Dhaka</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Division/State:</span>
                              <span class="data">Dhaka</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Zip Code:</span>
                              <span class="data">648</span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <!--  -->
          <div class="personal-info-section">
              <div class="personal-info-section-inner">
                  <div class="title">
                      <span>Permanent Address</span>
                  </div>
                  <div class="details">
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Address:</span>
                              <span class="data">21/1 A Sukrabad</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Post Office:</span>
                              <span class="data">Kalabagan</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Police Station:</span>
                              <span class="data">Dhanmondi</span>
                          </p>
                          <p class="data-section">
                              <span class="label">District/City:</span>
                              <span class="data">Dhaka</span>
                          </p>
                      </div>
                      <div class="row">
                          <p class="data-section">
                              <span class="label">Division/State:</span>
                              <span class="data">Dhaka</span>
                          </p>
                          <p class="data-section">
                              <span class="label">Zip Code:</span>
                              <span class="data">648</span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["profile"],
  components: {},
  data() {
    return {
    };
  },
  created() {},
  mounted() {
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import url("./BasicInfo.less");
</style>