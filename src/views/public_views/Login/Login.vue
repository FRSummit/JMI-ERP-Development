<template>
  <div id="login" class="login">
    <div class="container">
      <div class="col-md-6 col-md-offset-3 col-xs-12 inner-cont">
        <div class="blmd-wrapp">
          <div class="blmd-continer">
            <form @submit.prevent="handleSubmit" class="clearfix" id="login-form">
              <h1>Login</h1>
              <div class="col-md-12">
                <div class="input-group blmd-form">
                  <div class="blmd-line">
                    <input
                      type="text"
                      v-model="username"
                      name="username"
                      autocomplete="off"
                      id="username"
                      class="form-control"
                    />
                    <label class="blmd-label">Email or Username</label>
                    <img class="blmd-icon" src="../../../assets/icons/email_icon.svg" alt="email">
                  </div>
                </div>
                <div class="input-group blmd-form">
                  <div class="blmd-line">
                    <input
                      type="password"
                      v-model="password"
                      name="password"
                      autocomplete="off"
                      id="password"
                      class="form-control"
                    />
                    <label class="blmd-label">Password</label>
                    <img class="blmd-icon" src="../../../assets/icons/pass_icon.svg" alt="key">
                    <div class="password-show-hide hide" id="password-show-hide" @click="passwordShowHide">
                      <div v-show="showPass"><i class="fas fa-eye"></i></div>
                      <div v-show="!showPass"><i class="fas fa-eye-slash"></i></div>
                    </div>
                  </div>
                  <p id="error-message" class="hide">*incorrect username or password</p>
                </div>
              </div>
              <div class="remember-section">
                  <input type="checkbox" v-model="checkedCategories" @change="rememberLoginCredentials">
                  <label>Remember login credentials</label>
              </div>
              <div class="col-sm-12 text-center login-btn">
                <button
                  type="submit"
                  class="btn btn-blmd ripple-effect btn-success btn-lg btn-block"
                >
                  Login
                </button>
              </div>
              <div class="forget-password">
                  <a>Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="logo-section">
      <div class="logo">
        <img src="../../../assets/icons/logo.svg" alt="">
      </div>
      <div class="help-term-privacy">
        <a class="faq">FAQ's</a>
        <a class="help">Need Help?</a>
        <a class="term">Term of Use</a>
        <a class="policy">Privacy Policy</a>
      </div>
    </div>
  </div>
</template>

<script>
import LoginJs from "./Login";
const loginJs = new LoginJs();
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      checkedCategories: null,
      showPass: false,
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapState("account", ["status"]),
    ...mapState("alert", ["message"]),
  },
  created() {
    this.logout();
    loginJs.init();
    this.$emit('routeName', this.$route.name);
  },
  methods: {
    rememberLoginCredentials() {
      // console.log('Checked : ' + this.checkedCategories)
      if(this.checkedCategories) {
        document.querySelector('.blmd-wrapp .blmd-continer form#login-form .remember-section label').className = 'checked-remember'
      } else {
        document.querySelector('.blmd-wrapp .blmd-continer form#login-form .remember-section label').className = ''
      }
    },
    passwordShowHide(){
      if(this.showPass) {
        this.showPass = false
        document.getElementById('password').type = 'password'
      } else {
        this.showPass = true
        document.getElementById('password').type = 'text'
      }
    },
    ...mapActions("account", ["login", "logout"]),
    handleSubmit() {
      if( this.validation(this.username, this.password) ) {
        let loginUser = {
          username: this.username,
          password: this.password,
        };
        this.login(loginUser)
      }
    },
    validation(id, pass) {
      if((id.trim() !== null && pass.trim() !== null) && (id.trim() !== '' && pass.trim() !== '')) {
        return true
      }
      else {
        document.getElementById('error-message').innerHTML = '*username or password is required'
        document.getElementById('error-message').className = ''
        return false
      }
    },
    signup() {
      this.$router.push("/signup");
    },
    forgetPassword() {
      console.log("forgetPassword");
    },
    privacyPolicy() {
      console.log("privacyPolicy");
    },
    getHelp() {
      console.log("getHelp");
    },
  },
  mounted() {
    if(document.getElementById('password')){
        document.getElementById('password').addEventListener("keydown", (e) => {
          console.log(e.key)
          document.getElementById('password-show-hide').className = 'password-show-hide'
        });
    }
  }
};
</script>
<style lang="less" scoped>
@import url('./Login.less');
</style>