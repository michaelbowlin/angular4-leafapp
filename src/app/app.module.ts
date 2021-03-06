import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


// Must export the config
export const firebaseConfig = {
  // === Working API that came with repo
  // apiKey: 'AIzaSyAaTLLTBfT8-tlCXOKlp4LrwQzhVWjbM1Q',
  // authDomain: 'angular-pre.firebaseapp.com',
  // databaseURL: 'https://angular-pre.firebaseio.com',
  // storageBucket: 'angular-pre.appspot.com',
  // messagingSenderId: '796422970338'
  apiKey: "AIzaSyCiOdHe7-WLo7h3b24yXlqUXBIUEOEMo9w",
  authDomain: "leafapp-e61f4.firebaseapp.com",
  databaseURL: "https://leafapp-e61f4.firebaseio.com",
  projectId: "leafapp-e61f4",
  storageBucket: "leafapp-e61f4.appspot.com",
  messagingSenderId: "101392486951"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
