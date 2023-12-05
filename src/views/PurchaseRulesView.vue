<template>
  <information-master-pages>
    <div class="block-info">
      <p>Правила купівлі:</p>
      <p>Купуємо багато</p>
      <p>Платимо швидко</p>
      <p>Насолоджуємось товаром</p>
    </div>
  </information-master-pages>
</template>

<script>
import InformationMasterPages from "@/masterpages/InformationMasterPages.vue";

export default {
  name: "PurchaseRulesView",
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