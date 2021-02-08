<template>
  <div>
    <div class="container">
      <div class="logo-section">
        <img src="../../../assets/images/logo.svg" alt="" />
      </div>
      <div class="login-section">
        <div class="welcome-section">
          <div class="welcome-inner">
            <p class="welcome-message">
              Welcome to <img src="../../../assets/images/logo.svg" alt="" />
            </p>
            <p class="login-suggest">Please login to continue.</p>
            <form class="input-form" @submit.prevent="handleSubmit">
              <div class="input-section">
                <div class="label-sec">
                  <label>User ID</label>
                  <p class="error-message"></p>
                </div>
                <div class="input-sec">
                  <input
                    type="text"
                    v-model="username"
                    name="username"
                    placeholder="enter User ID"
                  />
                </div>
              </div>
              <div class="input-section">
                <div class="label-sec">
                  <label>Password</label>
                  <p class="error-message">*incorrect password</p>
                </div>
                <div class="input-sec">
                  <input
                    type="password"
                    v-model="password"
                    name="password"
                    placeholder="enter password"
                  />
                </div>
              </div>
              <div class="submission-section">
                <div class="signup-section" @click="signup">
                  <a class="signup-btn">Sign Up</a>
                </div>
                <div class="login-btn-section">
                  <button class="login-btn">Login</button>
                </div>
              </div>
              <div class="remember-forget-section">
                <div class="remember-section">
                  <label>
                    <input type="checkbox" v-model="remember" /> Remember me
                  </label>
                </div>
                <div class="forget-section" @click="forgetPassword">
                  <span class="forget-password"
                    >Forgot <a href="#">Password?</a></span
                  >
                </div>
              </div>
            </form>
            <div class="term-help-section">
              <div class="term-section">
                <span class="term-text"
                  >Term of use.
                  <a class="term-policy-url" @click="privacyPolicy">
                    Privacy policy</a
                  >
                </span>
              </div>
              <div class="help-section">
                <span class="help-text"
                  >Any Problem ?
                  <a class="help-url" @click="getHelp">Get Help</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import ERPSidebarService from '../service/ERPSidebarService'
// const service = new ERPSidebarService();

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      authenticated: this.$store.state.userIsAuthorized,
      remember: false,
      date: null,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  created() {
    // console.log(this.$store.state.userIsAuthorized);
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    handleSubmit() {
      let loginUser = {
        username: this.username,
        password: this.password,
      };
      this.login(loginUser);
    },
    // ...mapActions('account', ['login', 'logout']),
    // ...mapActions('account', ['login', 'logout']),
    // handleSubmit() {
    //   console.log(this.username);
    //   console.log(this.password);
    //   console.log(this.remember);
    //   let loginUser = {
    //       username: this.username,
    //       password: this.password
    //   }
    //   this.$store.dispatch('loginChecker', loginUser)
    // },
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
};
</script>

<style scoped>
.container {
  font-family: "Roboto";
  /* margin-top: 190px; */
  padding: 0;
  max-width: 100%;
}
.logo-section {
  display: inline-block;
  width: 49%;
  text-align: center;
}
.logo-section img {
}
.login-section {
  display: inline-block;
  width: 50%;
  vertical-align: middle;
}
.login-section .welcome-section {
  padding: 16px 50px 36px;
  /* width: 70%; */
  width: 100%;
  background: #ffffff;
  box-shadow: 0 13px 32px -12px #ece7e7;
}
.login-section .welcome-section .welcome-inner {
  max-width: 665px;
}
.login-section .welcome-section .welcome-inner .welcome-message {
  margin: 0;
  font-size: 25px;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-026cd1);
  text-align: left;
  letter-spacing: 0px;
  color: #026cd1;
}
.login-section .welcome-section .welcome-inner p img {
  width: 60px;
  vertical-align: middle;
}
.login-section .welcome-section .welcome-inner .login-suggest {
  margin: 24px 0 0;
  font-size: 15px;
  color: #222223;
}
.login-section .welcome-section .welcome-inner .input-form {
  margin-top: 50px;
}
.login-section .welcome-section .welcome-inner .input-form .input-section {
  margin-bottom: 20px;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .input-section
  .label-sec {
  position: relative;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .input-section
  .label-sec
  label {
  display: inline-block;
  font-size: 18px;
  color: #026cd1;
  margin-bottom: 10px;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .input-section
  .label-sec
  .error-message {
  display: inline-block;
  margin: 0;
  font-size: 12px;
  color: #ff4040;
  position: absolute;
  right: 2px;
  bottom: 4px;
}
/* .login-section
  .welcome-section
  .welcome-inner
  .input-form
  .input-section
  .input-sec {
} */
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .input-section
  .input-sec
  input {
  display: block;
  height: auto;
  /* width: -webkit-fill-available; */
  font-size: 18px;
  padding: 10px 12px;
  border: 1px solid #026cd1;
  border-radius: 2px;
  color: #026cd1;
  outline: none;
  box-sizing: border-box;
}
.error-border {
  border: 1px solid #ff4c4c;
}
.login-section .welcome-section .welcome-inner .input-form .submission-section {
  margin-top: 50px;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .submission-section
  .signup-section {
  display: inline-block;
  border: 1px solid #026cd1;
  border-radius: 2px;
  width: 140px;
  padding: 8px;
  text-align: center;
  cursor: pointer;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .submission-section
  .signup-section
  .signup-btn {
  font-size: 16px;
  /* border: 1px solid #026CD1;
  border-radius: 2px; */
  color: #026cd1;
  /* padding: 8px 20px; */
  outline: none;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .submission-section
  .login-btn-section {
  float: right;
  display: inline-block;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .submission-section
  .login-btn-section
  .login-btn {
  font-size: 16px;
  background: #026cd1;
  border: 1px solid #026cd1;
  border-radius: 2px;
  color: #ffffff;
  padding: 11px 20px 11px;
  width: 140px;
  outline: none;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .remember-forget-section {
  margin-top: 50px;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .remember-forget-section
  .remember-section {
  display: inline-block;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .remember-forget-section
  .remember-section
  label {
  font-size: 15px;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .remember-forget-section
  .remember-section
  label
  input {
  transform: scale(1.2);
  margin: 0;
  vertical-align: inherit;
  margin-right: 6px;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .remember-forget-section
  .forget-section {
  display: inline-block;
  float: right;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .remember-forget-section
  .forget-section
  .forget-password {
  font-size: 15px;
  color: #026cd1;
}
.login-section
  .welcome-section
  .welcome-inner
  .input-form
  .remember-forget-section
  .forget-section
  .forget-password
  a {
  font-size: 15px;
  color: #026cd1;
  text-decoration: none;
}
.login-section .welcome-section .welcome-inner .term-help-section {
  font-size: 15px;
  margin-top: 100px;
}
.login-section
  .welcome-section
  .welcome-inner
  .term-help-section
  .term-section {
  display: inline-block;
}
/* .login-section
  .welcome-section
  .welcome-inner
  .term-help-section
  .term-section
  .term-text {
} */
.login-section
  .welcome-section
  .welcome-inner
  .term-help-section
  .term-section
  .term-text
  .term-policy-url {
  color: #026cd1;
  text-decoration: none;
  cursor: pointer;
}
.login-section
  .welcome-section
  .welcome-inner
  .term-help-section
  .help-section {
  display: inline-block;
  float: right;
}
/* .login-section
  .welcome-section
  .welcome-inner
  .term-help-section
  .help-section
  .help-text {
} */
.login-section
  .welcome-section
  .welcome-inner
  .term-help-section
  .help-section
  .help-text
  .help-url {
  color: #026cd1;
  text-decoration: none;
  cursor: pointer;
}
@media only screen and (max-width: 950px) {
  .login-section .welcome-section {
    padding: 16px 30px 36px;
  }
  .login-section
    .welcome-section
    .welcome-inner
    .term-help-section
    .term-section,
  .login-section
    .welcome-section
    .welcome-inner
    .term-help-section
    .help-section {
    display: block;
    width: 100%;
    text-align: center;
  }
}
</style>