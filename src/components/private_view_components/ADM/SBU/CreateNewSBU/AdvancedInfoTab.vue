<template>
  <div id="advanced-info" class="advanced-info">
    <div class="advanced-info-inner">
      <div class="form-section">
        <form>
          <div class="input-sec">
            <label>About SBU</label>
            <input type="text" placeholder="Enter SBU name" />
          </div>
          <div class="input-sec">
            <label>Mission</label>
            <input type="text" placeholder="Mission" />
          </div>
          <div class="input-sec">
            <label>Vision</label>
            <input type="text" placeholder="Vision" />
          </div>
          <div class="input-sec">
            <label>Date</label>
            <input type="text" placeholder="Dec 8, 2020" />
          </div>
          <div class="input-sec">
            <label>Address</label>
            <input type="text" placeholder="Dhaka, Bangladesh" />
          </div>
          <div class="input-sec">
            <label>Chief Authority</label>
            <input type="text" placeholder="Enter Authority name" />
          </div>
        </form>
      </div>
    </div>
    <div class="advanced-info-bottom">
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
#advanced-info.advanced-info {
  margin-top: 30px;
}
#advanced-info .advanced-info-inner {
  width: 100%;
  display: block;
}
#advanced-info .form-section {
  display: inline-block;
  width: 50%;
  max-width: 500px;
  vertical-align: middle;
}
#advanced-info .form-section form {
  max-width: 350px;
}
#advanced-info .form-section form .input-sec {
  display: block;
  margin-bottom: 10px;
}
#advanced-info .form-section form .input-sec label {
  color: #026cd1;
  font-size: 16px;
}
#advanced-info .form-section form .input-sec input {
  border: 1px solid #707070;
  height: auto;
  padding: 8px 10px;
  font-size: 14px;
  margin: 6px 0;
}
#advanced-info .advanced-info-bottom {
}
#advanced-info .advanced-info-bottom p {
  color: #026cd1;
}
#advanced-info .advanced-info-bottom p img {
  vertical-align: bottom;
  margin-right: 10px;
}
@media only screen and (max-width: 1100px) {
  #advanced-info .form-section form {
    width: 100%;
    display: block;
  }
}
</style>