<template>
  <div id="basic-info" class="basic-info">
    <div class="basic-info-inner">
      <div class="form-section">
        <form>
          <div class="input-sec">
            <label>SBU Name</label>
            <input type="text" placeholder="Enter SBU name" />
          </div>
          <div class="input-sec">
            <label>Date</label>
            <input type="text" placeholder="Dec 07 2020" />
          </div>
          <div class="input-sec">
            <label>Short Code</label>
            <input type="text" placeholder="Enter short code" />
          </div>
          <div class="input-sec">
            <label>ID</label>
            <input type="text" placeholder="2014200000071" />
          </div>
          <div class="input-sec">
            <label>URL</label>
            <input type="text" placeholder="www.jmi.com/sbu_list" />
          </div>
        </form>
      </div>
      <div class="logo-section">
        <div class="logo-sec-inner">
          <p>SBU Logo</p>
          <a><span>+</span>Add</a>
        </div>
      </div>
    </div>
    <div class="basic-info-bottom">
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
#basic-info.basic-info {
  margin-top: 30px;
}
#basic-info .basic-info-inner {
  width: 100%;
  display: block;
}
#basic-info .form-section {
  display: inline-block;
  width: 50%;
  max-width: 500px;
  vertical-align: middle;
}
#basic-info .form-section form {
  max-width: 350px;
}
#basic-info .form-section form .input-sec {
  display: block;
  margin-bottom: 10px;
}
#basic-info .form-section form .input-sec label {
  color: #026cd1;
  font-size: 16px;
}
#basic-info .form-section form .input-sec input {
  border: 1px solid #707070;
  height: auto;
  padding: 8px 10px;
  font-size: 14px;
  margin: 6px 0;
}
#basic-info .logo-section {
  display: inline-block;
  width: 50%;
  vertical-align: middle;
  padding-left: 50px;
}
#basic-info .logo-section .logo-sec-inner {
  box-shadow: 0px 2px 6px 4px #d0d0d04d;
  width: 250px;
  padding: 100px 50px;
  display: inline-grid;
  text-align: center;
}
#basic-info .logo-section .logo-sec-inner p {
  color: #026cd1;
  font-size: 24px;
}
#basic-info .logo-section .logo-sec-inner a {
  background: #026cd1;
  color: #ffffff;
  padding: 4px 50px;
  margin-top: 30px;
  font-size: 18px;
}
#basic-info .logo-section .logo-sec-inner a span {
  margin-right: 10px;
  font-size: 24px;
}
#basic-info .basic-info-bottom {
}
#basic-info .basic-info-bottom p {
  color: #026cd1;
}
#basic-info .basic-info-bottom p img {
  vertical-align: bottom;
  margin-right: 10px;
}
@media only screen and (max-width: 1100px) {
  #basic-info .form-section form {
    width: 100%;
    display: block;
  }
}
</style>