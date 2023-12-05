<template>
  <main-master-pages>
    <div class="block__suppliers">
      <div>
        <p>Oберіть постачальника</p>
      </div>
      <div class="block__listSuppliers">
        <div v-for="supplier in getListSuppliers" :key="supplier.id">
          <data-cart :cartData="supplier">
            <template #icon-block>
              <div v-if="supplier.icon">
                <font-awesome-icon
                  v-for="itemIcon in supplier.icon"
                  :key="itemIcon.id"
                  :icon="[itemIcon.prefix, itemIcon.iconName]"
                />
              </div>
            </template>
          </data-cart>
        </div>
      </div>
    </div>
    <template #storeRating>
      <p class="footer-title">
        Найбільш популярний:
        <span>Економ</span>
      </p>
    </template>
  </main-master-pages>
</template>

<script>
import MainMasterPages from "@/masterpages/MainMasterPages.vue";
import DataCart from "@/components/DataCart.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SuppliersView",
  components: {
    MainMasterPages,
    DataCart,
  },
  computed: {
    ...mapGetters("suppliers", ["getListSuppliers"]),
  },
  methods: {
    ...mapActions("suppliers", ["loadListSuppliers"]),
  },
  created() {
    this.loadListSuppliers();
  },
};
</script>

<style lang="scss" scoped>
.block__suppliers {
  text-align: justify;
  .block__listSuppliers {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 5%;
  }
  .footer-title {
    margin: 0;
    span {
      color: #42b983;
    }
  }
}
</style>