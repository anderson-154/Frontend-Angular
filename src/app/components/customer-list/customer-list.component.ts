import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer [] = [];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
