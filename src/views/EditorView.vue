<template>
  <div class="block__addProduct">
    <label
      >Назва
      <input v-model="newProduct.title" type="text" />
    </label>
    <label
      >Link-image
      <input v-model="newProduct.image" type="text" />
    </label>
    <label
      >Ціна
      <input v-model="newProduct.price" type="number" />
    </label>
    <div>
      <button :disabled="isDisabled" @click="addnewProduct">Додати</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EditorView",
  data() {
    return {
      newProduct: {},
    };
  },
  computed: {
    isDisabled() {
      return ["title", "image", "price"].some(
        (key) => !this.newProduct[key]
      );
    },
  },
  methods: {
    ...mapActions("products", ["addProduct"]),
    addnewProduct() {
      this.addProduct(this.newProduct);
      this.newProduct = {};
    },
  },
};
</script>

<style lang="scss" scoped>
.block__addProduct {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>