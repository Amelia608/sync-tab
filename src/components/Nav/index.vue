<template>
  <div class="page-nav-container">
    <el-tag
      v-for="(tag,index) in tabs"
      :key="index"
      :type="currentTabName===tag?'':'info'"
      class="mr15"
      closable
      @close="close(index)">
      {{ tag }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['tabs', 'currentTabName'])
  },
  mounted () {},

  methods: {
    ...mapMutations(['removeTab']),
    close (index) {
      if (this.tabs.length === 1) return
      this.removeTab(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-nav-container{
  background: #f5f7fc;
  padding:20px;
  border-bottom: 1px solid #f4f4f4;
}
.el-tag{
  margin-right: 15px;
}
</style>
