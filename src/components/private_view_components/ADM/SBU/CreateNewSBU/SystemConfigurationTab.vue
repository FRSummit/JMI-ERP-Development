<template>
  <div id="system-config" class="system-config">
    <div class="system-config-inner">
      <div class="form-section">
        <form>
          <div class="input-sec">
            <label>Date Key</label>
            <input type="text" placeholder="5sd4f56sd4fsd65f4sdf65sd45f64sf" />
          </div>
          <div class="input-sec">
            <label>SBU Admin</label>
            <img @click="dropdownIconClick()"
              class="sbu-admin-dropdown"
              src="../../../../../assets/icons/chevron-blue-down.svg"
            />
            <select>
              <option
                v-for="(list, i) in sbuAdminOption"
                :key="i"
                :value="list"
              >
                {{ list }}
              </option>
            </select>
          </div>
        </form>
      </div>
    </div>
    <div class="system-config-bottom">
      <p><img src="../../../../../assets/icons/arrow_left.svg" />Previous</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sbuAdminOption: ["Admin", "User", "Developer", "FRS"],
    };
  },
  created() {},
  methods: {
      dropdownIconClick() {
          console.log('working')
      }
  },
};
</script>

<style scoped>
#system-config.system-config {
  margin-top: 30px;
}
#system-config .system-config-inner {
  width: 100%;
  display: block;
}
#system-config .form-section {
  display: inline-block;
  width: 50%;
  max-width: 500px;
  vertical-align: middle;
}
#system-config .form-section form {
  max-width: 350px;
}
#system-config .form-section form .input-sec {
  display: block;
  margin-bottom: 10px;
  position: relative;
}
#system-config .form-section form .input-sec label {
  color: #026cd1;
  font-size: 16px;
}
#system-config .form-section form .input-sec input,
#system-config .form-section form .input-sec select {
  border: 1px solid #707070;
  height: auto;
  padding: 8px 10px;
  font-size: 14px;
  margin: 6px 0;
}
#system-config .form-section form .input-sec .sbu-admin-dropdown {
  position: absolute;
  bottom: 14px;
  right: 25%;
}
#system-config .form-section form .input-sec select {
  display: block;
  border: 1px solid #026cd1;
  width: 80%;
  cursor: pointer;
}
#system-config .system-config-bottom {
}
#system-config .system-config-bottom p {
  color: #026cd1;
}
#system-config .system-config-bottom p img {
  vertical-align: bottom;
  margin-right: 10px;
}
@media only screen and (max-width: 1100px) {
  #system-config .form-section form {
    width: 100%;
    display: block;
  }
}
</style>