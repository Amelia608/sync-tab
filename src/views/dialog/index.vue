<template>
  <el-card>
    <div
      slot="header"
      class="clearfix">
      <span>Dialog组件-嵌套</span>
    </div>
    <el-button
      type="text"
      @click="outerVisible = true"
    >点击打开外层 Dialog</el-button
    >

    <el-dialog
      :visible.sync="outerVisible"
      title="外层 Dialog">
      <el-dialog
        :visible.sync="innerVisible"
        width="30%"
        title="内层 Dialog"
        append-to-body
      />
      <div
        slot="footer"
        class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="innerVisible = true"
        >打开内层 Dialog</el-button
        >
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      outerVisible: false,
      innerVisible: false
    }
  },
  mounted () {
    console.log('dialog组件加载完成')
  },
  destroyed () {
    console.log('销毁dialog组件')
  }
}
</script>

<style></style>
