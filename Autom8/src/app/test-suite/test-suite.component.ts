import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-test-suite',
  templateUrl: './test-suite.component.html',
  styleUrls: ['./test-suite.component.scss'],
})

export class TestSuiteComponent implements OnInit {

  title: string;
  description: string;

  constructor(private storage: Storage) {
  
   }
   public set(settingName,value){
    return this.storage.set(`testSuite:${ settingName }`,value);
  }
  public async get(settingName){
    return await this.storage.get(`testSuite:${ settingName }`);
  }
  public async remove(settingName){
    return await this.storage.remove(`testSuite:${ settingName }`);
  }
  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
  ngOnInit() {
  }
  
  submitTestSuite(){
  }
}

