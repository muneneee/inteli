import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { User } from './models/user';
import { GraphService } from './services/graph.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: User
  title = 'Summary';
  average_customers: any;
  average_revenue: any;
  average_transactions: any;



  

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private stats: GraphService
  ){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login'])
  }

  

  

  ngOnInit() {

    this.stats.summary()
      .subscribe(res => {


        
        let customers = res.map(res => res.customers);
        let transactions = res.map(res => res.transactions);
        let revenue = res.map(res => res.revenue);
        let alldates = res.map(res => res.date);

        this.average_customers = res.map(res => res.customers).reduce((a, b)=> a+ b)/res.length;
        this.average_revenue = res.map(res => res.revenue).reduce((a, b)=> a+ b)/res.length;
        this.average_transactions = res.map(res => res.transactions).reduce((a, b)=> a+ b)/res.length;




        console.log(this.average_customers)

      


        var canvas = new Chart('canvas', {
          type: 'line',
          data: {
            labels: alldates,
            datasets: [
              { 
                label: customers,
                data:customers,
                borderColor: "#3cba9f",
                fill: false
              },
              
              
            ]
          },
          options: {
            legend: {
              display: false
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
