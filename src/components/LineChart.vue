<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: {
    dataChart: null,
  },
  data() {
    return {
      chartData: {
        labels: null,
        datasets: [
          {
            label: 'Prix gasoil',
            data: null,
            fill: false,
            borderColor: '#2554FF',
            backgroundColor: '#2554FF',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
            },
          }],
          xAxes: [{
            gridLines: {
              display: false,
            },
          }],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    console.log(this.dataChart);
    this.chartData.datasets = [
      {
        label: 'Line Chart',
        data: this.dataChart.values,
        fill: false,
        borderColor: '#2554FF',
        backgroundColor: '#2554FF',
        borderWidth: 1,
      },
    ];
    this.chartData.labels = this.dataChart.dates;
    this.renderChart(this.chartData, this.options);
  },
};
</script>
