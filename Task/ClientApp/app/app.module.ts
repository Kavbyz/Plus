import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlusFormComponent } from './components/plus/plusForm/plusForm.component';
import { PlusCountMatrixComponent } from './components/plus/plusCountMatrix/plusCountMatrix.component';
import { PlusMatrixComponent } from './components/plus/plusMatrix/plusMatrix.component';
import { PlusOpenFileComponent } from './components/plus/plusOpenFile/plusOpenFile.component';
import { PlusRandomCountAndMatrixComponent } from './components/plus/plusRandomCountAndMatrix/plusRandomCountAndMatrix.component';
import { PlusSaveFileComponent } from './components/plus/plusSaveFile/plusSaveFile.component';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent, PlusFormComponent, PlusCountMatrixComponent, PlusMatrixComponent, PlusOpenFileComponent, PlusRandomCountAndMatrixComponent, PlusSaveFileComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }