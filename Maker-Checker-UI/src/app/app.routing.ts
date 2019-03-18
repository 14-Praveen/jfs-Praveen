import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormAddComponent } from './form-add/form-add.component';
import { FormEditComponent } from './form-edit/form-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'form-add', component: FormAddComponent },
  { path: 'form-list', component: FormListComponent },
  { path: 'form-edit', component: FormEditComponent },
  { path: '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
