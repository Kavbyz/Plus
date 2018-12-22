import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlusFormComponent } from './components/plus/plusForm/plusForm.component';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent, PlusFormComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }