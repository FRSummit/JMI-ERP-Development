<template>
  <div id="report-config" class="report-config">
    <div class="report-config-inner">
      <div class="form-section">
        <form>
          <div class="input-sec">
            <p>Header Configuration</p>
            <label>About SBU</label>
            <textarea type="text" placeholder="Enter SBU name" />
          </div>
          <div class="input-sec">
            <p>Body Configuration</p>
            <a><span>+</span>Add logo</a>
          </div>
          <div class="input-sec">
            <p>Footer Configuration</p>
            <label>Vision</label>
            <textarea type="text" placeholder="Vision" />
          </div>
        </form>
      </div>
    </div>
    <div class="report-config-bottom">
      <p><img src="../../../../../assets/icons/arrow_left.svg" />Previous</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  methods: {},
};
</script>

<style scoped>
#report-config.report-config {
  margin-top: 30px;
}
#report-config .report-config-inner {
  width: 100%;
  display: block;
}
#report-config .form-section {
  display: inline-block;
  width: 50%;
  max-width: 500px;
  vertical-align: middle;
}
#report-config .form-section form {
  max-width: 350px;
}
#report-config .form-section form .input-sec {
  display: block;
  margin-bottom: 20px;
}
#report-config .form-section form .input-sec p {
  font-size: 18px;
  color: #026cd1;
  margin-bottom: 10px;
}
#report-config .form-section form .input-sec label {
  color: #026cd1;
  font-size: 16px;
}
#report-config .form-section form .input-sec textarea {
  border: 1px solid #707070;
  height: auto;
  padding: 8px 10px;
  font-size: 14px;
  margin: 6px 0;
  box-sizing: border-box;
  outline: none;
}
#report-config .form-section form .input-sec a {
  background: #026cd1;
  color: #ffffff;
  padding: 12px 40px;
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
}
#report-config .form-section form .input-sec a span {
  margin-right: 10px;
}
#report-config .report-config-bottom {
}
#report-config .report-config-bottom p {
  color: #026cd1;
}
#report-config .report-config-bottom p img {
  vertical-align: bottom;
  margin-right: 10px;
}
@media only screen and (max-width: 1100px) {
  #report-config .form-section form {
    width: 100%;
    display: block;
  }
}
</style>