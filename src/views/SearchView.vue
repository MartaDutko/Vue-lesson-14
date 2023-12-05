<template>
  <div>
    <label>
      <input v-model="searchValue" type="text" />
    </label>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SearchView",
  computed: {
    ...mapGetters("products", ["getSearchValue"]),
    searchValue: {
      get() {
        return this.getSearchValue;
      },
      set(val) {
        this.setSearchValue(val);
      },
    },
  },
  methods: {
    ...mapActions("products", ["setSearchValue"]),
  },
};
</script>

<style lang="scss" scoped>
</style>