import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AlertComponent,
    DropdownDirective,
    LoadingSpinnerComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    DropdownDirective,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    CommonModule
  ],
  entryComponents: [
    AlertComponent
  ]
//  entryComponents: say Angular components that will eventually need to be created without a selector or the
//  route config being used, that is, components programmatically
})
export class SharedModule {

}
