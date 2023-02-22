<template>
  <div class="top-view">
    <!-- 头部 -->
    <!-- 头部分成四份 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <!-- 累计销售额 -->
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <!-- 累计订单量 -->
          <total-orders></total-orders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <!-- 累计订单量 -->
          <TodayUsers></TodayUsers>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <!-- 累计订单量 -->
          <total-users></total-users>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from "../TotalSales";
import TotalOrders from "../TotalOrders";
import TodayUsers from "../TodayUsers";
import TotalUsers from "../TotalUsers";
export default {
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers,
  },
};
</script>

<style lang="scss" scoped>
</style>