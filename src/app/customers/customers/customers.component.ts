import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/models/customer.model';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {
  customers: Customer[];
  selectedCustomer: Customer | undefined;

  constructor(private apiService: ApiService, private router: Router) { 
    this.apiService.getCustomers().subscribe({
      next: (response) => {
        this.customers = response;
        console.log(`customers:`, this.customers);
      },
      error: (error) => {
        console.log('Error: ', error);        
      }
    });
  }

  ngOnInit(): void {
  }
  
  selectCustomer(customer: Customer){
    console.log('Row clicked:', customer);
    this.selectedCustomer = customer;
     this.router.navigate(['/details', customer.id]);
  }
}
