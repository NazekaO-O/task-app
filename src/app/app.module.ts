import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ArticleComponent } from './article/article.component';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BreadcrumbsBarComponent } from './breadcrumbs-bar/breadcrumbs-bar.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { TranslationPipe } from './translation.pipe';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    HeaderBarComponent,
    ArticleComponent,
    MainPageComponent,
    BreadcrumbsBarComponent,
    FilterBarComponent,
    TranslationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModuleModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'articles/:articleId', component: ArticleComponent},
      {path: 'registration', component: RegistrationPageComponent},
      {path: 'login', component: LoginPageComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
