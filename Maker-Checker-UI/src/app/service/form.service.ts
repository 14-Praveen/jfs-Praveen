import { HttpClient } from '@angular/common/http';
import {FormData} from '../model/formData.model';
import { Injectable } from '@angular/core';

@Injectable()
export class FormService {

  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:8087/maker-checker/custForms';

  getFormList(){
  return this.http.get<FormData[]>(this.baseUrl + '/list');
  }

  createForm(formData: FormData) {
    return this.http.post(this.baseUrl + '/create', formData);
  }

  deleteForm(custId: number) {
    return this.http.delete(this.baseUrl + '/delete/' + custId);
  }

  getUserById(formId: number){
    return this.http.get<FormData>(this.baseUrl + '/getById/' + formId);
  }

  updateForm(formData: FormData){
    return this.http.put(this.baseUrl + '/update/' + formData.custId, formData);
  }

  approveForm(formData: FormData){
    return this.http.put(this.baseUrl + '/update/' + formData.custId, formData);
  }

}
