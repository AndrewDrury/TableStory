<template>
  <div class="discover-dishes">
    <b-container fluid class="p-0">
      <b-col class="ml-4 mt-4">
        <b-row>
          <h4>Discover Dishes</h4>
        </b-row>
        <b-row>
          <b-form-input
            class="mt-2 text-center red"
            type="text"
            name="search"
            placeholder="Search"
          />
        </b-row>
      </b-col>
    </b-container>
  </div>
</template>


<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";

.red {
  height: 20px;
  width: 180px;
  color: $primary-color;
  border-color: $primary-color;
  border: 1px solid rgba(232, 100, 100, 0.15);
  border-radius: 7.5px;
}
</style>

<script>
export default {
  data: () => {
    return {};
  }
};
</script>