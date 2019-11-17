import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {TestSuiteComponent} from 'src/app/test-suite/test-suite.component';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'test-suite',
        component: TestSuiteComponent
      },
    ])
  ],
  declarations: [HomePage, TestSuiteComponent]
})
export class HomePageModule {}
