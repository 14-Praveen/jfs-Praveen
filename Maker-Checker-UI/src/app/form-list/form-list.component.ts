import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormService} from '../service/form.service';
import {FormData} from '../model/formData.model';
import { LoginData } from '../model/login.model';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  formData: FormData[];
  // loginData: LoginData;
  currentRole: string;

  constructor(private router: Router, private formService: FormService) { }

  ngOnInit() {
    console.log('in form-list Comp ' + localStorage.getItem('currRole'));
    this.currentRole = localStorage.getItem('currRole');
    this.formService.getFormList()
    .subscribe( data => {
      this.formData = data;
    });
  }

  addForm(): void {
    this.router.navigate(['form-add']);
  }

  editForm(formData: FormData): void {
    localStorage.removeItem('editFormId');
    localStorage.setItem('editFormId', formData.custId.toString());
    this.router.navigate(['form-edit']);
  }

  deleteForm(formData: FormData): void {
    this.formService.deleteForm(formData.custId)
      .subscribe( data => {
        this.formData = this.formData.filter(u => u !== formData);
      });
  }

  openForm(formData: FormData): void {
    localStorage.removeItem('editFormId');
    localStorage.setItem('editFormId', formData.custId.toString());
    this.router.navigate(['form-edit']);
  }

  logOut(){
    this.router.navigate(['login']);
  }

}
