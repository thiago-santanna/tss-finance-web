import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResumoComponent } from './resumo/resumo.component';
import { CustonNavbarComponent } from './custon-navbar/custon-navbar.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [		
    AppComponent,
      LoginComponent,
      ResumoComponent,
      CustonNavbarComponent,
      CadastroUsuarioComponent,
      PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
