<template>
    <div id="myChart" :style="{ width: '700px', height: '700px' }"></div>
</template>

<script>
import echarts from 'echarts'
import {getTagechar} from '@/api/tag'
export default {
  name: "eCharts",
  data() {
    return{
      list:[],

      }  
  },
  mounted() {
    this.init();
  },
 methods: {
    init() {
    getTagechar().then((response) => {
          const { data } = response
           let myChart = echarts.init(document.getElementById("myChart"));
          var option = {
              title: {
                  text: '热门标签文章数/比例',
                  left: 'center'
                  },
              tooltip: {
                  trigger: 'item'
                      },
                legend: {
                  orient: 'vertical',
                  left: 'left',
                      },
                series: [
                        {
                          type: 'pie',
                          radius: '50%',
                          data:data,
                emphasis: {
                      itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                         }
                         }
                          ]
                  };
                  myChart.setOption(option);
              })

    }
  }    
}
</script>