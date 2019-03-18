import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private formService: FormService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
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
      actInact: ['', Validators.required]
    });
  }

  onFormSubmit(){
    // console.log('in form-add Comp ' + localStorage.getItem('username'));
    this.addForm.value.formStatus = 'N';
    this.addForm.value.createdBy = localStorage.getItem('username');
    this.addForm.value.createdDate = new Date();
    this.addForm.value.actInact = 'A';
    this.formService.createForm(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['form-list']);
      });
    }
}
