<template>
  <nav>
    <router-link to="/">Головна</router-link> |
    <router-link :to="{ name: 'goods' }">Товари</router-link> |
    <router-link :to="{ name: 'suppliers' }">Постачальники</router-link> |
    <router-link :to="{ name: 'contacts' }">Контакти</router-link> |
    <router-link :to="{ name: 'purchase_rules' }">Правила покупки</router-link>
  </nav>
  <main>
    <slot></slot>
  </main>
  <footer>
    <div class="block__footer">
      <slot name="storeRating">
        <p>Рейтинг магазину: 5444</p>
      </slot>
      <slot name="footer">
        <p>Статус: <span>відкрито</span></p>
      </slot>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainMasterPages",
};
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.block__footer {
  p {
    margin: 0;
    span {
      color: #42b983;
    }
  }
  display: flex;
  justify-content: space-around;
}
</style>