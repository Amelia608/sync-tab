<template>
  <div id="app">
    <Side />
    <div class="seb-content-main">
      <Nav />
      <div class="page-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Side from '@/components/Side'
import Nav from '@/components/Nav'
import { mapState, mapMutations } from 'vuex'
export default {
  components: { Side, Nav },
  data () {
    return {}
  },
  computed: {
    ...mapState(['tabs'])
  },
  watch: {
    $route ({ meta: { tag } }) {
      this.setCurrentTabName(tag)
      if (!this.tabs.find(el => el === tag)) {
        this.AddTab(tag)
      }
    }
  },
  mounted () {},

  methods: {
    ...mapMutations(['AddTab', 'setCurrentTabName'])
  }
}
</script>

<style lang="scss">
.seb-content-main {
  margin-left: 220px;
  min-height: 500px;
  box-sizing: border-box;
}
.page-main {
  padding: 20px;
}
</style>
