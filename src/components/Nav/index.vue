<template>
  <div class="page-nav-container">
    <vuedraggable
      v-model="list"
      class="wrapper">
      <transition-group>
        <el-tag
          v-for="(tag, index) in list"
          :key="index"
          :type="currentTabName === tag ? '' : 'info'"
          class="mr15"
          closable
          @close="close(index)"
        >
          {{ tag }}
        </el-tag>
      </transition-group>
    </vuedraggable>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import vuedraggable from 'vuedraggable'
export default {
  components: { vuedraggable },
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapState(['tabs', 'currentTabName'])
  },
  watch: {
    tabs: {
      handler: function (v) {
        this.list = v
        this.updateTabs(v)
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {},
  methods: {
    ...mapMutations(['removeTab', 'updateTabs']),
    close (index) {
      if (this.tabs.length === 1) return
      this.removeTab(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-nav-container {
  background: #f5f7fc;
  padding: 20px;
  border-bottom: 1px solid #f4f4f4;
}
.el-tag {
  margin-right: 15px;
  cursor: pointer;
}
</style>
