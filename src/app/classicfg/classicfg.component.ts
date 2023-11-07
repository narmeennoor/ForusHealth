import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-classicfg',
  templateUrl: './classicfg.component.html',
  styleUrls: ['./classicfg.component.css']
})
export class ClassicfgComponent {
  piechart=new Chart({
    chart:{
      type:'pie',
      plotShadow:false,
    },
    credits:{
      enabled:false,
    },
    plotOptions:{
      pie:{
        innerSize:'88%',
        borderWidth:20,
        borderColor:'',
        slicedOffset:10,
        dataLabels:{
          connectorWidth:2,
        },
      },
    },
    title:{
      verticalAlign:'middle',
      floating:true,
       text: 'Quantity'
      //text: `<img src="assets/images/classic.png" alt="Icon" width="90" height="90" />`,
    },

    legend:{
      enabled:true,
    },

    series:[
      {
        type:'pie',
        data:[
          {name:'Stock in',y:30,color:'#80DEEA'},
          {name:'Stock out',y:20,color:'#2196F3'},
          {name:'Balance',y:40,color:'#3949AB'},
        ],
      },
    ],

  })
}
