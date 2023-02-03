import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'bus-list', pathMatch: 'full' },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'bus-list/:busId', component: ViewSeatsComponent },
  // { path: 'bus-list/:busId/passenger-info', component: PassengerInfoComponent },
  // { path: 'tickets', component: TicketListComponent },
  // { path: 'tickets/:ticketId', component: ViewTicketComponent },
  // { path: 'preview/:busId/:ticketId', component: PreviewTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
