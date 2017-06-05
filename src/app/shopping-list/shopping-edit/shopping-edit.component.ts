import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addIngredientEvent = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    var name = this.nameInput.nativeElement.value;
    var amount = this.amountInput.nativeElement.value;
    this.addIngredientEvent.emit(new Ingredient(name, amount));
  }

}
