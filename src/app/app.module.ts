import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { WildcardContentComponent } from './components/wildcard-content/wildcard-content.component';
import { CardComponent } from './components/card/card.component';
import { CardFormComponent } from './components/card-form/card-form.component';

import { CardEditComponent } from './pages/card-edit/card-edit.component';
import { CardListComponent } from './pages/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WildcardContentComponent,
    CardComponent,
    CardFormComponent,
    CardEditComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
