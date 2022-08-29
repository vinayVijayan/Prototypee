import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
  
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  labelPosition:any
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  constructor() {this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
    startWith(''),
    map((fruit: string | null) => this._filter(fruit|| '')),
  ); }
radioarray:any[]=[{name:"vinay",value:1}]
radioarray2:any[]=[{name:"nimal",value:2}]
fruits:any[]=[]
  ngOnInit() {
    console.log(this.radioarray)
    console.log(this.filteredFruits)
  }
  checkbox(event){
    console.log(event)
  }
  add(event){
    console.log(event)
    let value = (event.value || '').trim();
// console.log(value)
    // Add our fruit  
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    if (event.input) {
      event.input.value = '';
    }
    // event.chipInput!.clear();
    this.fruitCtrl.setValue(null);

  }
  remove(fruit: string){
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent){
    console.log(this.filteredFruits)
    console.log(event)
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }
  private _filter(value: string): string[] {
    console.log(value)
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}
