<template>
  <el-card>
    <div
      slot="header"
      class="clearfix">
      <span>其它--带斑马纹表格</span>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180" />
      <el-table-column
        prop="name"
        label="姓名"
        width="180" />
      <el-table-column
        prop="address"
        label="地址" />
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  mounted () {
    console.log('other组件加载完成')
  },
  destroyed () {
    console.log('销毁other组件')
  }

}
</script>

<style></style>
