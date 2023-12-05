<template>
  <div class="block__cart">
    <slot name="image-cart">
      <div class="cart__img">
        <img
          :src="isValidImg(cartData.image) ? cartData.image : defaultImage"
        />
      </div>
    </slot>

    <div class="cart__tittle">
      <p>{{ cartData.title }}</p>
    </div>
    <slot name="price"></slot>
    <slot name="icon-block"></slot>
    <div class="btn__cart">
      <button>Купити</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataCart",
  props: {
    cartData: {
      type: Object,
      default: () => ({}),
    },
    defaultImage: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/3342/3342137.png",
    },
  },
  methods: {
    isValidImg(image) {
      const urlPattern =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      return urlPattern.test(image);
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  &__cart {
    width: 200px;
    height: 330px;
    border: 1px solid #42b983;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 15px 10px 15px;
    align-items: center;
  }
}
.cart {
  &__img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      height: 200px;
    }
  }
}
.btn__cart {
  button {
    background-color: #3498db;
    border: 0;
    padding: 5px 10px 5px 10px;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.1s ease;
  }
  button:hover {
    background-color: #42b983;
  }
}
</style>