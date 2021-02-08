<template>
  <div id="account-config" class="account-config">
    <div class="account-config-inner">
      <div class="info-data-sec">
        <p><span>Chart of Account</span>: {{ acChart }}</p>
        <p><span>COA Owner</span>: {{ coaOwner }}</p>
        <div class="roll-up">
          <p><span>Roll Up to Parent</span>:</p>
          <input type="checkbox" :checked="roleUpToParent" />
        </div>
      </div>
      <div class="form-section">
        <div class="title-txt-btn-sec">
          <p class="title-txt">Chart Of Accounts</p>
          <a @click="openForm()"><span>+</span>Add</a>
        </div>
        <form v-if="formActivity">
          <div class="input-sec">
            <label>COA Name</label>
            <input type="text" placeholder="Enter SBU name" />
          </div>
          <div class="input-sec">
            <label>Copy From SBU</label>
            <img
              @click="dropdownIconClick()"
              class="sbu-admin-dropdown"
              src="../../../../../assets/icons/chevron-blue-down.svg"
            />
            <select>
              <option v-for="(list, i) in copyData" :key="i" :value="list">
                {{ list }}
              </option>
            </select>
          </div>
          <div class="input-sec">
            <div class="cancel-section"><a>Cancel</a></div>
            <div class="submit-section">
              <button type="submit">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="account-config-bottom">
      <p><img src="../../../../../assets/icons/arrow_left.svg" />Previous</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      acChart: "COA JMI GROUP",
      coaOwner: "JMI Group",
      roleUpToParent: false,
      formActivity: false,
      copyData: ["Admin", "User", "Developer", "FRS"],
    };
  },
  created() {},
  methods: {
    openForm() {
      if (this.formActivity) {
        this.formActivity = false;
      } else {
        this.formActivity = true;
      }
    },
  },
};
</script>

<style scoped>
#account-config.account-config {
  margin-top: 30px;
}
#account-config .account-config-inner {
  width: 100%;
  display: block;
}
#account-config .info-data-sec {
  display: inline-block;
  width: 40%;
  vertical-align: top;
}
#account-config .info-data-sec p {
  margin: 4px 0;
  font-size: 16px;
}
#account-config .info-data-sec p span {
  width: 150px;
  display: inline-block;
}
#account-config .info-data-sec .roll-up {
  margin: 4px 0;
}
#account-config .info-data-sec .roll-up p {
  font-size: 16px;
  color: inherit;
  display: inline-block;
}
#account-config .info-data-sec .roll-up p span {
  width: 150px;
}
#account-config .info-data-sec .roll-up input {
  -webkit-appearance: checkbox;
  pointer-events: unset;
  position: relative;
  opacity: 1;
  display: inline-block;
  margin-left: 6px;
  transform: scale(1.3);
}
#account-config .form-section {
  display: inline-block;
  width: 50%;
  max-width: 500px;
  vertical-align: middle;
  position: relative;
}
#account-config .form-section .title-txt-btn-sec {
}
#account-config .form-section .title-txt-btn-sec .title-txt {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  margin-right: 20px;
}
#account-config .form-section .title-txt-btn-sec a {
  background: #026cd1;
  color: #ffffff;
  padding: 6px 20px;
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
}
#account-config .form-section .title-txt-btn-sec a span {
  margin-right: 10px;
}
#account-config .form-section form {
  max-width: 350px;
  box-shadow: 0 2px 9px 6px hsla(0, 0%, 81.6%, 0.30196078431372547);
  position: absolute;
  top: 50px;
  left: 25%;
  width: 100%;
}
#account-config .form-section form .input-sec {
  display: block;
  width: 80%;
  margin: 20px auto;
  position: relative;
}
#account-config .form-section form .input-sec label {
  color: #026cd1;
  font-size: 14px;
}
#account-config .form-section form .input-sec input,
#account-config .form-section form .input-sec select {
  border: 1px solid #707070;
  height: auto;
  padding: 8px 10px;
  font-size: 14px;
  margin: 6px 0;
  box-sizing: border-box;
}
#account-config .form-section form .input-sec .sbu-admin-dropdown {
  position: absolute;
  bottom: 14px;
  right: 5%;
}
#account-config .form-section form .input-sec select {
  display: block;
  border: 1px solid #026cd1;
  cursor: pointer;
}
#account-config .form-section form .input-sec .cancel-section {
  display: inline-block;
  border: 1px solid #026cd1;
  border-radius: 2px;
  width: 100px;
  padding: 4px;
  text-align: center;
  cursor: pointer;
}
#account-config .form-section form .input-sec .cancel-section a {
  font-size: 14px;
  color: #026cd1;
  outline: none;
}
#account-config .form-section form .input-sec .submit-section {
  float: right;
  display: inline-block;
}
#account-config .form-section form .input-sec .submit-section button {
  font-size: 14px;
  background: #026cd1;
  border: 1px solid #026cd1;
  border-radius: 2px;
  color: #fff;
  padding: 7px 20px 7px;
  width: 100px;
  outline: none;
}
#account-config .account-config-bottom {
}
#account-config .account-config-bottom p {
  color: #026cd1;
}
#account-config .account-config-bottom p img {
  vertical-align: bottom;
  margin-right: 10px;
}
@media only screen and (max-width: 1100px) {
  #account-config .form-section form {
    width: 100%;
    display: block;
  }
}
</style>