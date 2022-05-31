import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from "@angular/material";
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerName:any
  instrumentReference:any
  collectionDate:any
  datasource: any;
  phonenoList: any[];
  billdate:Date = new Date()

  displayedColumns: string[] = ["SlNo","item","quantity","price"];
  customerdata: any[]=[]
  billnum: any;

  constructor(public commonservice:CommonserviceService,public router:Router) { }

  ngOnInit() {
    this.customerdata = this.commonservice.billdata
    this.billnum = this.customerdata[this.customerdata.length-1]
    console.log(this.customerdata)
    this.phonenoList=[]
    

    this.datasource = new MatTableDataSource<any>(this.customerdata);

  }
  // ngOnChanges()
  // {
  //   this.customerdata = this.commonservice.billdata
  //   console.log(this.customerdata)
  //   this.phonenoList=[]
  //   let total = {
  //     item :"Total",
  //     price:"",
  //     quantity:this.customerdata[-1]

  //   }
  //   console.log(total)
  //   this.datasource = new MatTableDataSource<any>(this.customerdata);
  // }
  goToStore()
{
  this.router.navigateByUrl('store')
}
  confirm(d){

  }
  clear(f){}

}
