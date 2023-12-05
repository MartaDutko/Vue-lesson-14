<template>
  <information-master-pages>
    <div class="block-info">
      <p>Наші контакти:</p>
      <p>Адреса магазину: біля будинку баби Галі</p>
      <p>Менеджер: дід Петро</p>
      <p>Заступник: онука Софійка</p>
    </div>
  </information-master-pages>
</template>

<script>
import InformationMasterPages from "@/masterpages/InformationMasterPages.vue";

export default {
  name: " ContactsView",
  components: {
    InformationMasterPages,
  },
};
</script>

<style lang="scss" scoped>
.block-info {
  text-align: justify;
}
</style>