<template>
  <main-master-pages>
    <p>Вітаємо!</p>
    <p>Сподіваємось ви будете чемними, і щось купите</p>
    <template #footer>Власник: Баба Галя</template>
  </main-master-pages>
</template>

<script>
import MainMasterPages from "@/masterpages/MainMasterPages.vue";

export default {
  name: "HomeView",
  components: {
    MainMasterPages,
  },
};
</script>

<style lang="scss" scoped>
</style>