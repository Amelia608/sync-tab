<template>
  <el-menu
    :default-active="`0-${menuActiveIndex}`"
    default="0"
    class="el-menu-demo"
    @open="handleOpen"
    @close="handleClose">
    <div
      v-for="(item,idx) in menus"
      :key="idx">
      <el-submenu
        v-if="item.submenus.length>0"
        :index="idx+''">
        <template slot="title">
          <i :class="item.icon"/>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group
          v-for="(menu,i) in item.submenus"
          :key="i">
          <el-menu-item :index="idx+'-'+i"><router-link :to="menu.path">{{ menu.name }}</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item
        v-else
        :index="idx+''">
        <i :class="item.icon"/>
        <span slot="title"><router-link :to="item.path">{{ item.name }}</router-link></span>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      menus: [
        {
          name: 'DEMO',
          icon: 'el-icon-menu',
          path: '',
          submenus: [
            {
              name: 'SearchForm',
              path: '/home'
            },
            {
              name: 'Dialog',
              path: '/dialog'
            },
            {
              name: 'Other',
              path: '/other'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['menuActiveIndex'])
  },
  mounted () {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>
