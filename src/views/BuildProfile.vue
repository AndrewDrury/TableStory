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
          <b-card class="mb-3" style="padding: 0; border-radius: 8px;">
            <b-col class="float-left">
              <b-form-group
                :invalid-feedback="errors.first('firstName')"
                :valid-feedback="firstNotEmpty ? 'thanks!' : ''"
                :state="!errors.first('firstName')"
              >
                <b-form-input
                  class="ml-0 mr-0 text-center"
                  type="text"
                  name="firstName"
                  v-model.trim="firstName"
                  v-validate="'required'"
                  placeholder="First Name"
                />
              </b-form-group>
            </b-col>
          </b-card>
        </b-row>
      </b-col>
    </b-container>
  </div>
</template>


<style lang="scss">
@import url("/src/assets/main.scss");
@import url("/src/assets/variables.scss");

.red {
  color: rgb(230, 101, 103);
}
</style>

<script>
export default {
  data: () => {
    return {};
  }
};
</script>
