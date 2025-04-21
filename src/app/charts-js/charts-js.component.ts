import { Component, OnInit } from '@angular/core';
import {
  Chart,
  registerables // isso importa todos os componentes necessários
} from 'chart.js';
import { ChartJsService, SalesData } from './chartJs.service';


export interface ParametersChart {
  salesList: number[],
  labelList: string[],
  colorList: string[],
  chartId: string,
  chartType: any
}

@Component({
  selector: 'app-charts-js',
  imports: [],
  templateUrl: './charts-js.component.html',
  styleUrl: './charts-js.component.scss'
})
export class ChartsJSComponent implements OnInit {
  public genericData: SalesData[] = [];
  public salesList: number[] = [];
  public colorList: string[] = [];
  public labelList: string[] = [];

  constructor(private service: ChartJsService) {
    // 👇 Aqui é o segredo: registra tudo o que Chart.js precisa
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadChartData();
  }

  private loadChartData() {
    this.service.getSalesData().subscribe(item => {
      if (item != null) {
        this.genericData = item;
        this.genericData.map(object => {
          this.salesList.push(object.sales);
          this.labelList.push(object.year.toString());
          this.colorList.push(object.color);
        })
        this.renderLinechart(this.salesList, this.labelList, this.colorList);
        this.renderBarchart(this.salesList, this.labelList, this.colorList);
        this.renderPiechart(this.salesList, this.labelList, this.colorList);
        this.renderDoughnutchart(this.salesList, this.labelList, this.colorList);
      }
    })
  }

  private renderLinechart(salesList: number[], labelList: string[], colorList: string[]) {
    const parametersChart: ParametersChart = {
      salesList: salesList,
      labelList: labelList,
      colorList: colorList,
      chartId: 'linechart',
      chartType:  'line'
    }
    this.renderchart(parametersChart);
  }

  private renderBarchart(salesList: number[], labelList: string[], colorList: string[]) {
    const parametersChart: ParametersChart = {
      salesList: salesList,
      labelList: labelList,
      colorList: colorList,
      chartId: 'barchart',
      chartType:  'bar'
    }
    this.renderchart(parametersChart);
  }

  private renderPiechart(salesList: number[], labelList: string[], colorList: string[]) {
    const totalSales = salesList.reduce((acc, curr) => acc + curr, 0);

    const percentageLabels = salesList.map((sales, index) => {
      const percent = ((sales / totalSales) * 100).toFixed(1);
      return `${labelList[index]} (${percent}%)`;
    });

    const parametersChart: ParametersChart = {
      salesList: salesList,
      labelList: percentageLabels,
      colorList: colorList,
      chartId: 'piechart',
      chartType:  'pie'
    }

    this.renderchart(parametersChart);
  }

  private renderDoughnutchart(salesList: number[], labelList: string[], colorList: string[]) {
    const parametersChart: ParametersChart = {
      salesList: salesList,
      labelList: labelList,
      colorList: colorList,
      chartId: 'doughnutchart',
      chartType:  'doughnut'
    }
    this.renderchart(parametersChart);
  }
  
  private renderchart(parametersChart: ParametersChart) {
    const ctx = document.getElementById(parametersChart.chartId) as HTMLCanvasElement;
    const mychart = new Chart(ctx, {
      type: parametersChart.chartType,
      data: {
        labels: parametersChart.labelList,
        datasets: [
          {
            label: 'yearly sales',
            data: parametersChart.salesList,
            backgroundColor: parametersChart.colorList,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: 'white' // ✅ texto da legenda
            }
          },
          title: {
            display: true,
            text: 'Product A Sales (2010 - 2025)',
            color: 'white' // ✅ título do gráfico
          }
        },
        scales: {
          x: {
            ticks: {
              color: 'white' // ✅ rótulos no eixo X
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)' // ✅ linhas da grade no eixo X
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 50, // ✅ Força os steps serem a cada 50 unidades em Y
              color: 'white' // ✅ rótulos no eixo Y
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)' // ✅ linhas da grade no eixo Y
            }
          }
        }
      }
    })
  }

  

}
