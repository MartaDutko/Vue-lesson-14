<template>
  <nav>
    <router-link :to="{name: 'home'}">На головну</router-link> 
  </nav>
  <main>
    <slot></slot>
  </main>
  <footer class="footer-block">
    <p class="footer-title">Галерея</p>
    <div class="block-galery">
      <div v-for="img in getListInfo" :key="img.id">
        <img :src="img.image">
      </div>
    </div>
  </footer>

</template>

<script>
import { mapGetters,mapActions } from 'vuex';

export default {
  name: "InformationMasterPages",
  computed: {
...mapGetters('profileInfo',['getListInfo'])
  },
  methods: {
...mapActions('profileInfo',['loadListInfo'])
  },
  created () {
    this.loadListInfo()
  },
};
</script>

<style lang="scss" scoped>

.footer-block {
.block-galery {
  display: flex;
  justify-content: space-between;
  div{
    width: 20%;
  }
  img{
    max-width: 100%;
  }
}
}


</style>