import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchStartComponent } from './home/search-start/search-start.component';
import { SearchListComponent } from './home/search-list/search-list.component';
import { SearchComponent } from './home/search/search.component';
import { HeaderComponent } from './header/header.component';
import { ModelModule } from './_models/model.module';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        ModelModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SearchStartComponent,
        SearchListComponent,
        SearchComponent,
        HeaderComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
