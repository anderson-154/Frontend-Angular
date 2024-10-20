import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customerId: number=0;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.customerForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    const customerId = this.route.snapshot.paramMap.get('id');
    if (customerId) {
      this.customerService.getCustomerById(customerId).subscribe((customer: Customer) => {
        this.customerForm.patchValue({
          id: customer.id,
          name: customer.name,
          lastname: customer.lastname,
          email: customer.email
        });
      });
    }
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      const updatedCustomer = this.customerForm.value;
      this.customerService.updateCustomer(updatedCustomer).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }
}
