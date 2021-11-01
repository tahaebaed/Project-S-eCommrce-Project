import { ViewProdcutComponent } from './Components/LayoutComponents/Content/Product Deatils/View-Prodcut/View-Prodcut.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/About/About.component';
import { ContactUsComponent } from './Components/ContactUs/ContactUs.component';
import { HomeComponent } from './Components/Home/Home.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { ProdcutsComponent } from './Components/LayoutComponents/Content/Product Deatils/Prodcuts/Prodcuts.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ShoppingCartComponent } from './Components/LayoutComponents/Content/Product Deatils/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Prodcuts', component: ProdcutsComponent },
  { path: 'Products/:id', component: ViewProdcutComponent },
  { path: 'About-Us', component: AboutComponent },
  { path: 'Contact-Us', component: ContactUsComponent },
  { path: 'Login', component: LogInComponent },
  { path: 'Signup', component: SignUpComponent },
  { path: 'cart', component: ShoppingCartComponent },
  {
    path: 'Admin',
    loadChildren: () =>
      import('./Components/Admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
