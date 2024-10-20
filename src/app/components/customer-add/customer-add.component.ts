import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from '../../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router

  ) {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.customerForm.valid) {
      const { name, lastname, email } = this.customerForm.value;
      let customer = new Customer(0, name, lastname, email);

      this.customerService.createCustomer(customer).subscribe(
        res => this.router.navigate([''])
      );
    } else {
      console.log('Invalid form submission');
    }
  }
}
