import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { GraphService } from '../services/graph.service';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private stats: GraphService) { }

  ngOnInit() {
    this.stats.summary()
      .subscribe(res => {
        
        let customers = res.map(res => res.customers)
        let transactions = res.map(res => res.transactions)
        let revenue = res.map(res => res.revenue)
        let alldates = res.map(res => res.date)


        var chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: alldates,
            datasets: [
              { 
                label: customers,
                data: customers,
                borderColor: "#3cba9f",
                fill: false
              },
              
            ]
          },
          options: {
            legend: {
              display: false
            },
            title:{
              display: true,
              text: 'Customers'
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });

      })
  }

}
