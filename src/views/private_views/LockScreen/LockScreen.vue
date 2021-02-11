<template>
  <div id="lock-screen" class="lock-screen">
    <div class="lock-screen-modal">
      <div class="lock-screen-modal-inner">
        <div class="image background"></div>
        <div class="image foreground"></div>
        <div class="the-screen">
          <div class="the-screen-inner">
            <div class="title">
              <p>
                <i class="zmdi zmdi-lock"></i>
                <span>Your Screen is Locked</span>
              </p>
            </div>
            <div class="pin-input-section">
              <div class="pin-input-section-inner">
                <div class="label">
                  <div class="label-inner">
                    <span>Enter PIN</span>
                  </div>
                </div>
                <div class="input-sec">
                  <div class="input-sec-inner">
                    <div class="blmd-line">
                      <input
                        type="password"
                        v-model="pin"
                        name="pin"
                        autocomplete="off"
                        id="pin"
                        class="form-control"
                      />
                      <div class="pin-show" id="pin-show-hide"  @click="pinShowHide">
                        <div v-show="showPass"><i class="fas fa-eye"></i></div>
                        <div v-show="!showPass">
                          <i class="fas fa-eye-slash"></i>
                        </div>
                      </div>
                    </div>
                    <div class="submit-section">
                      <span @click="submitLockScreenPin"><i class="zmdi zmdi-arrow-right"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="help-section">
              <div class="help-section-inner">
                <span>Need Help?</span>
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
  data() {
    return {
      pin: "",
      showPass: false,
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
  },
  methods: {
    pinShowHide() {
      if (this.showPass) {
        this.showPass = false;
        document.querySelector("#lock-screen #pin").type = "password";
      } else {
        this.showPass = true;
        document.querySelector("#lock-screen #pin").type = "text";
      }
    },
    submitLockScreenPin() {
        console.log('submitLockScreenPin')
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./LockScreen.less");
</style>