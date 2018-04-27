import { Component, OnInit, Injectable } from '@angular/core';
import {NgForOf, CurrencyPipe} from '@angular/common'
import { Supplier, Products, Type } from '../../models/dataSample';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Injectable()

@Component({
  selector: 'app-admin-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  LstProduct: any = Products;
  LstSupplier: any = Supplier;
  LstType: any = Type;

  LstBestSell_1: any = [];
  LstBestSell_2: any = [];
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.LstBestSell_1 = this.LstProduct.filter(p =>p.ID >= 1 && p.ID < 6);
    this.LstBestSell_2 = this.LstProduct.filter(p =>p.ID > 5 && p.ID <= 10);
  }

  ViewDetail(code, type){
    if(code){
      if(type==1)
        this.router.navigate(["phone", code]);
      else
        this.router.navigate(["pad", code]);
    }
  }

  Log(prod){
    let string1 = '"ID":'+prod.ID + ',\n';
    string1 +='"Code": "' + prod.Code + '",\n'
    string1 +='"Name":"' + prod.Name + '",\n'
    string1 +='"Color":"'+ prod.Color +'",\n' 
    string1 +='"Price":'+ prod.Price + ',\n' 
    string1 +='"Image":[\n'+
        '{"url":"'+ prod.Image[0].url + '"}\n' + 
        '],\n'; 
    string1 +='"Views":10, \n' 
    string1 +='"Buys":10, \n'
    string1 +='"Description":{\n'
    string1 +='"Design":" '+ prod.Description.Design+ '",\n' 
    string1 +=    '"Color":"' + prod.Description.Color + '",\n'
    string1 +=    '"Specifications":{\n' 
    string1 +=        '"MemUnit": "GB",\n' 
    string1 +=        '"CamUnit":"MP",\n'
    string1 +=        '"RAM":'+prod.Description.Specifications.RAM+ ',\n' 
    string1 +=        '"ROM":'+prod.Description.Specifications.ROM+ ',\n' 
    string1 +=        '"FCamera1":'+prod.Description.Specifications.FCamera1+ ',\n'
    string1 +=        '"FCamera2":'+prod.Description.Specifications.FCamera2+ ',\n'
    string1 +=        '"BCamera1": '+prod.Description.Specifications.BCamera1+ ',\n'
    string1 +=        '"BCamera2": '+prod.Description.Specifications.BCamera2+ ',\n'
    string1 +=        '"CPU":"'+prod.Description.Specifications.CPU+ '",\n'
    string1 +=        '"Screen":"'+prod.Description.Specifications.Screen+ '",\n'
    string1 +=        '"System":"'+prod.Description.Specifications.System+ '"\n'
    string1 +=        '},\n'
    string1 +=        '"Note":"Chính hãng"\n'
    string1 +=        '}, \n'
    string1 +=        '"Origin":"'+prod.Origin+ '", \n'
    string1 +=        '"Type":null, \n' 
    string1 +=        '"TypeName": "'+prod.TypeName+ '",\n'
    string1 +=        '"SupplierID": null,\n' 
    string1 +=        '"Supplier":"'+prod.Supplier+ '"\n' 
    console.log(string1);
  }
}
