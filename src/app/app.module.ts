import { ProdcutService } from './Services/prodcut.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/LayoutComponents/header/header.component';
import { FooterComponent } from './Components/LayoutComponents/footer/footer.component';
import { MainComponent } from './Components/LayoutComponents/main/main.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { UserComponent } from './Components/JustUser/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewProdcutComponent } from './Components/LayoutComponents/Content/Product Deatils/View-Prodcut/View-Prodcut.component';
import { ProdcutsComponent } from './Components/LayoutComponents/Content/Product Deatils/Prodcuts/Prodcuts.component';

import { HttpHeaders } from '@angular/common/http';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './Components/LayoutComponents/Content/Product Deatils/shopping-cart/shopping-cart.component';
import { EgyCurrencyPipe } from './pipes/egy-currency.pipe';
import { FavoriteListComponent } from './Components/LayoutComponents/Content/Product Deatils/favorite-list/favorite-list.component';
import { MatSliderModule } from '@angular/material/slider';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { AppToastComponent } from './app-toast/app-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    UserComponent,
    ProdcutsComponent,
    ViewProdcutComponent,
    SignUpComponent,
    LogInComponent,
    ShoppingCartComponent,
    EgyCurrencyPipe,
    FavoriteListComponent,
    AppToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule,
    AngularToastifyModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
