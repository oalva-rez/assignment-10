import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShowUserQrComponent } from './show-user-qr/show-user-qr.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: CreateUserComponent },
  { path: 'list-users', component: ListUserComponent },
  { path: 'update-user/:id', component: EditUserComponent },
  { path: 'show-user-qr/:id', component: ShowUserQrComponent },
  { path: 'user-info/:id', component: UserInfoComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
