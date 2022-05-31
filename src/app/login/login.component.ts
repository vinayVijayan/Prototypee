import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fruits:any[]=[]
  grain:any
  equim:any
  veget:any
  fruit:any
  newlist: any[];
  grains: { value: number; viewValue: string; }[];
  vege: any[];
  housholds: any[];
  grainlist: any;
  fruitlist: any;
  veglist: any;
  toollist: any;
  ID: string;
  
  constructor(public commonservice:CommonserviceService,public router:Router) { }

  function1 () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 9);
  }
  ngOnInit() {
    this.ID = this.function1()
    this.newlist= []
    this.grainlist = {item:"",quantity:"",price:""}
    this.fruitlist = {item:"",quantity:"",price:""}
    this.veglist =  {item:"",quantity:"",price:""}
    this.toollist = {item:"",quantity:"",price:""}
    this.grains=[
      {value:1,viewValue:"Rice"},
     { value:2,viewValue:"Wheat"},
     { value:3,viewValue:"Sugar"},
     { value:4,viewValue:"Oatmeal"},
     { value:5,viewValue:"Barley"},
     {value:6,viewValue:"Brown rice"},
     { value:7,viewValue:"Whole wheat"},
     { value:8,viewValue:"Buckwheat"},
     { value:9,viewValue:"Sunflower seeds"},
     { value:10,viewValue:"Wheat berries"}]
     this.fruits=[{value:1,viewValue:"apple"},
     { value:2,viewValue:"grape"},
     { value:3,viewValue:"peach"},
     { value:4,viewValue:"tomato"},
     { value:5,viewValue:"jackfruit"},
     {value:6,viewValue:"strawberry"},
     { value:7,viewValue:"mango"},
     { value:8,viewValue:"papaya"},
     { value:9,viewValue:"banana"},
     { value:10,viewValue:"blue berries"}]
     this.vege = [
      {value:1,viewValue:"tomato"},
      { value:2,viewValue:"melon"},
      { value:3,viewValue:"peas"},
      { value:4,viewValue:"lentils"},
      { value:5,viewValue:"Broccoli"},
      {value:6,viewValue:"Kale"},
      { value:7,viewValue:"Garlic"},
      { value:8,viewValue:"Spinach"},
      { value:9,viewValue:"Green peas"},
      { value:10,viewValue:"Carrots"}
    ]
    this.housholds = [
      {value:1,viewValue:"screws"},
      { value:2,viewValue:"brooms"},
      { value:3,viewValue:"Mixer"},
      { value:4,viewValue:"Toaster"},
      { value:5,viewValue:"Microwave"},
      {value:6,viewValue:"Crock pot"},
      { value:7,viewValue:"Rice cooker"},
      { value:8,viewValue:"Pressure cooker"},
      { value:9,viewValue:"vacuum cleaner"},
      { value:10,viewValue:"electric mixer"}
    ]
  }
  onSearchChange(e){

    let price =e*5
    this.grainlist['price']=price
    this.grainlist['quantity']=e
    console.log(this.grainlist)
  }

 
  onChange(e){
    let frui = this.grains.find(x=> x.value == e)
    this.grainlist['item']=frui.viewValue
    console.log(this.newlist)
  }
  onSearchChange1(e){
    let price = e*30
    this.fruitlist['price']= price

this.fruitlist['quantity']= e


  }
  onSearchChange2(e){
    let price =e*50
    this.veglist['price']=price
    this.veglist['quantity']=e
      }
      onSearchChange3(e){
        let price =e*50
        this.toollist['price']=price
        this.toollist['quantity']=e
          }
  onChange1(e){
    let frui = this.fruits.find(x=> x.value == e)

    this.fruitlist['item']=frui.viewValue
    console.log(this.fruitlist)
  }
  onChange3(e){
    let frui = this.vege.find(x=> x.value == e)

    this.veglist['item']=frui.viewValue
    console.log(this.fruitlist)    

  }
  onChange4(e){
    let frui = this.housholds.find(x=> x.value == e)

    this.toollist['item']=frui.viewValue
  }
  confirm(){
    debugger
    debugger
this.newlist.push(this.grainlist) 
this.newlist.push(this.fruitlist)
this.newlist.push(this.toollist)
this.newlist.push(this.veglist) 


let sum = 0
for(let i=0;i<=this.newlist.length-1;i++){
     sum+=this.newlist[i]['price']
}
let total = {
  item :"Total",
  price:"",
  quantity:""

  }
  this.newlist.push(total)
this.newlist.push(this.ID) 
console.log(this.newlist[-1])
this.newlist[this.newlist.length-2]['price']=sum

console.log(this.newlist)

this.commonservice.billdata=this.newlist
this.router.navigateByUrl('customer')
}

goToCustomer()
{
  this.router.navigateByUrl('customer')
}

}
