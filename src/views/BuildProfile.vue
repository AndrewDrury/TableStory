<template>
  <div class="build-profile">
    <b-container fluid class="p-0">
      <b-col>
        <b-row>
          <b-col style="margin-top: 6em;">
            <h1 style="margin:auto;">Create an Account</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="red">You're almost there!</b-col>
        </b-row>
        <b-row>
          <b-card class="my-5 p-4 login-card" style="border-radius: 8px; margin: auto;">
            <b-row>
              <b-col>
                <b-form>
                  <b-row>
                    <b-col>
                      <b-form-group>
                        <b-form-input
                          class="ml-0 mr-0 text-center"
                          type="text"
                          name="username"
                          v-model.trim="username"
                          v-validate="'required'"
                          placeholder="username"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group class="text-center" id="password-sign-up" label-for="password">
                        <b-form-input
                          class="ml-0 mr-0 text-center"
                          type="password"
                          name="password"
                          v-model="password"
                          v-validate="'required|min:6'"
                          placeholder="password"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group class="text-center" id="email-sign-up" label-for="email">
                        <b-form-input
                          class="ml-0 mr-0 text-center"
                          type="text"
                          name="email"
                          v-model.trim="email"
                          v-validate="'required|email'"
                          placeholder="email"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col class="float-left">
                      <b-form-group>
                        <b-form-input
                          class="ml-0 mr-0 text-center"
                          type="text"
                          name="fullname"
                          v-model.trim="fullname"
                          v-validate="'required'"
                          placeholder="full name"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col class="float-left">
                      <b-form-group>
                        <b-form-input
                          class="ml-0 mr-0 text-center"
                          type="text"
                          name="shortBio"
                          v-model.trim="shortBio"
                          placeholder="short bio"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-form>
              </b-col>
            </b-row>
          </b-card>
        </b-row>
        <b-row>
          <b-form-group style="margin: auto;">
            <b-button v-on:click="logIn" variant="light" to="/discover-places/">Next</b-button>
          </b-form-group>
        </b-row>
      </b-col>
    </b-container>
  </div>
</template>


<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";

.red {
  color: rgb(230, 101, 103);
}

.login-card {
  width: 299px;
  border-radius: 14px;
  background-color: #ffffff;
  box-shadow: 0 0 15px 0 rgba(218, 216, 216, 0.5);
}

input[type] {
  color: #ffc3c1c1;
  font-size: 20px;
  line-height: 24px;
  border: 0;
  border-radius: 0px;
  outline: 0;
  border-bottom: 1px solid #c3c1c1;
  margin-left: 0.5em;
  margin-right: 0.5em;
  width: 100%;

  &:focus {
    border-bottom: 3px solid $primary-color;
    margin-bottom: -3px;
  }
}
.btn {
  color: black;
  background: white;

  height: 39px;
  width: 162px;
  border-radius: 8px;
  box-shadow: 0 0 15px 0 rgba(218, 216, 216, 0.5);

  &:hover {
    color: white;
    background: $primary-color;
  }
}
</style>

<script>
export default {
  data: () => {
    return {
      email: "",
      password: "",
      username: "",
      fullname: "",
      shortBio: ""
    };
  },
  computed: {
    emailNotEmpty() {
      return this.email.length;
    },
    passwordNotEmpty() {
      return this.password.length;
    },
    usernameNotEmpty() {
      return this.username.length;
    }
  }
};
</script>
