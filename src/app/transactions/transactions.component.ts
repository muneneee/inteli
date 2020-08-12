import { Component, OnInit } from '@angular/core';
import { GraphService } from '../services/graph.service';
import { Chart } from 'chart.js'
import { Router } from '@angular/router';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private stats: GraphService,private router: Router) { }

  ngOnInit(): void {

    this.stats.summary()
      .subscribe(res => {


        
        let customers = res.map(res => res.customers);
        let transactions = res.map(res => res.transactions);
        let revenue = res.map(res => res.revenue);
        let alldates = res.map(res => res.date)


      

        console.log(revenue)

        var chartjs = new Chart('chartjs', {
          type: 'line',
          data: {
            labels: alldates,
            datasets: [
              { 
                label:transactions,
                data:transactions,
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
              text: 'Transactions'
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
