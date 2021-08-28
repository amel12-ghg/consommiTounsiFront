import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CategoryAdminComponent } from './Components/category-admin/category-admin.component';
import { ProductAdminComponent } from './Components/product-admin/product-admin.component';
import { UderCategoryAdminComponent } from './Components/uder-category-admin/uder-category-admin.component';
import { PublicityAdminComponent } from './Components/publicity-admin/publicity-admin.component';
import { OneProductComponent } from './Components/one-product/one-product.component';
import { HomeLandingComponent } from './Components/home-landing/home-landing.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeLandingComponent,
      },
      {
        path: 'categories',
        component: CategoryAdminComponent,
      },
      {
        path: 'undercategories',
        component: UderCategoryAdminComponent,
      },
      {
        path: 'products',
        component: ProductAdminComponent,
      },
      {
        path: 'one-product',
        component: OneProductComponent,
      },
      {
        path: 'ads',
        component: PublicityAdminComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    CategoryAdminComponent,
    ProductAdminComponent,
    UderCategoryAdminComponent,
    PublicityAdminComponent,
    OneProductComponent,
    HomeLandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
