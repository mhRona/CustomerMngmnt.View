import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/models/address.model';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})

export class CustomerDetailsComponent implements OnInit {
  addresses: Address[];
  selectedAddress: Address | undefined;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private common:CommonModule) {
    this.route.params.subscribe(params => {
      const id = params['customerId']; 
      console.log('ID:', id);
      this.apiService.getCustomerAddresses(id).subscribe({
        next: (response) => {
          this.addresses = response;
          console.log(`addresses:`, this.addresses);
        },
        error: (error) => {
          console.log('Error: ', error);        
        }
      });    
    });
   }

  ngOnInit(): void {
  }

}
