import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { GraphService } from '../services/graph.service';
import { Chart } from 'chart.js'


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{

  currentUser: User
  
  constructor(
  
    private stats: GraphService
  ){

  }



  ngOnInit() {
    this.stats.summary()
      .subscribe(res => {
        
        let customers = res.map(res => res.customers)
        let transactions = res.map(res => res.transactions)
        let revenue = res.map(res => res.revenue)
        let alldates = res.map(res => res.date)


        var chart = new Chart('chart', {
          type: 'line',
          data: {
            labels: alldates,
            datasets: [
              { 
                label: revenue,
                data: revenue,
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
              text: 'Revenue'
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
