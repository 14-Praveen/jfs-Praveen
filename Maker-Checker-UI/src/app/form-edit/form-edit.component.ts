import { Component, OnInit } from '@angular/core';
import { FormService } from '../service/form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  editForm: FormGroup;
  currentRole: string;
  // flag = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private formService: FormService) { }

  ngOnInit() {

    const formId = localStorage.getItem('editFormId');
    this.currentRole = localStorage.getItem('currRole');
    if (!formId) {
      alert('Invalid action!');
      this.router.navigate(['form-list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      custId: [],
      custCode: ['', Validators.required],
      custName: ['', Validators.required],
      custAddress1: ['', Validators.required],
      custAddress2: ['', Validators.required],
      custPincode: ['', Validators.required],
      custEmail: ['', Validators.required],
      custContact: ['', Validators.required],
      custPrimContact: ['', Validators.required],
      formStatus: ['', Validators.required],
      createdBy: ['', Validators.required],
      createdDate: ['', Validators.required],
      actInact: ['', Validators.required],
      modifiedDate: ['', Validators.required],
      modifiedBy: ['', Validators.required],
      authorizedBy: ['', Validators.required],
      authorizedDate: ['', Validators.required]
    });
    this.formService.getUserById(+formId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onFormSubmit() {
    // console.log('check flag ' );
    if (localStorage.getItem('flag') !== 'YES') {
    this.editForm.value.formStatus = 'M';
    this.editForm.value.actInact = 'A';
    this.editForm.value.modifiedBy = localStorage.getItem('username');
    this.editForm.value.modifiedDate = new Date();
    }
    localStorage.setItem('flag', 'NO');
    // localStorage.removeItem('flag');
    // console.log('final !!!' );
    this.formService.updateForm(this.editForm.value).pipe(first()).subscribe(
        data => {
          this.router.navigate(['form-list']);
        },
        error => {
          alert(error);
        });
  }

  formApprove() {
  // console.log('approve ' + this.editForm.value.custId );
  localStorage.setItem('flag', 'YES');
  this.editForm.value.formStatus = 'A';
  this.editForm.value.actInact = 'A';
  this.editForm.value.authorizedBy = localStorage.getItem('username');
  this.editForm.value.authorizedDate = new Date();
  this.onFormSubmit();
  }

  formReject() {
  // console.log('reject ' + this.editForm.value.custId );
  localStorage.setItem('flag', 'YES');
  this.editForm.value.formStatus = 'R';
  this.editForm.value.actInact = 'I';

  }

}
