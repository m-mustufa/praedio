import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

// Commponent Imports
import { AppComponent } from './app.component';
import { ExploreComponent } from './components/explore/explore.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { InsightsComponent } from './components/insights/insights.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { AutocompleteComponent } from './components/shared/autocomplete/autocomplete.component';
import { PropertyListingComponent } from './components/property-listing/property-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    CalculatorComponent,
    InsightsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ModalComponent,
    AutocompleteComponent,
    PropertyListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
