<template>
  <main-master-pages>
    <div class="block__product">
      <div class="tittle">
        <p>Оберіть продукти</p>
      </div>
      <nav class="block-links">
        <router-link :to="{ name: 'selector' }">Знайти</router-link> |
        <router-link :to="{ name: 'editor' }">Додати</router-link>
      </nav>
      <router-view />
      <div class="block__listProduct">
        <div v-for="product in getFilteredListProducts" :key="product.id">
          <data-cart :cartData="product">
            <template #price>{{ product.price }} грн</template>
          </data-cart>
        </div>
      </div>
    </div>
  </main-master-pages>
</template>

<script>
import MainMasterPages from "@/masterpages/MainMasterPages.vue";
import DataCart from "@/components/DataCart.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GoodsView",
  components: {
    MainMasterPages,
    DataCart,
  },
  computed: {
    ...mapGetters("products", ["getFilteredListProducts"]),
  },

  methods: {
    ...mapActions("products", ["loadProductsList"]),
  },
  created() {
    this.loadProductsList();
  },
};
</script>

<style lang="scss" scoped>
.block__product {
  text-align: justify;
  .block__listProduct {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 5%;
  }
  .block-links {
    padding: 0;
  }
}
</style>