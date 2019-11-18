import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  private title: [];
  private keySize: any;
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
  public async length(){
    return await this.storage.length();
  }
  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
  ngOnInit() {
      this.keySize = this.length();
      console.log(this.keySize); 
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
