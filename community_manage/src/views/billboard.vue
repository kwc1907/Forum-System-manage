<template>
<div>
  <el-table
    :data=" billboardList"
    style="width: 100%">
    <el-table-column width="100" type="index"></el-table-column>
    <el-table-column
      label="创建时间"
      width="400">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>   
        <span style="margin-left: 10px">{{ dayjs(scope.row.createTime).format('YYYY-MM-DD HH:mm:ss') }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="内容"
      width="400">
      <template slot-scope="scope">
       <span >{{ scope.row.content }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="warning"
          @click="handledisable(scope.row.id)">禁用</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id)">删除</el-button>
          <el-button
          size="mini"
          type="success"
          @click="handleable(scope.row.id)">启用</el-button>
      </template>
    </el-table-column>
       </el-table>
       <pagination
            v-show="page.total > 0"
            :total="page.total"
            :page.sync="page.current"
            :limit.sync="page.size"
            @pagination="init"
            />
</div>  
</template>

<script>
import { getBillboard,deleteOne,disableOne, ableOne } from '@/api/billboard'
import pagination from '@/components/Pagination/index'

export default {
  name: 'BillboardList',
  components: { pagination },
  data() {
    return {
      billboardList: [],
      page: {
        current: 1,
        size: 10,
        total: 0,
      }
    }
  },
  created() {
    this.init()
  },
  inject: ["reload"],
  methods: {
    init() {
      getBillboard(this.page.current, this.page.size).then((response) => {
        const { data } = response
        console.log(data.records)
        this.page.current = data.current
        this.page.total = data.total
        this.page.size = data.size
        this.billboardList = data.records
      })
    },
   handleDelete(id){
       deleteOne(id).then((response)=>{
        const { code, message } = response
        alert(message)
        if (code === 200) {
          setTimeout(() => {
            this.$router.push({ path: '/first/billboard' })
          }, 500)
        }
        this.reload()
       })
   },
   handledisable(id){
       disableOne(id).then((response)=>{
        const { code, message } = response
        alert(message)
        if (code === 200) {
          setTimeout(() => {
            this.$router.push({ path: '/first/billboard' })
          }, 500)
        }
       })
   },
   handleable(id){
       ableOne(id).then((response)=>{
        const { code, message } = response
        alert(message)
        if (code === 200) {
          setTimeout(() => {
            this.$router.push({ path: '/first/billboard' })
          }, 500)
        }
       })
   },
  }
}
</script>

<style scoped>

</style>