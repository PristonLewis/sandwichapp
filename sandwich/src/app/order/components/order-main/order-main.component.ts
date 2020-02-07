import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-main',
  templateUrl: './order-main.component.html',
  styleUrls: ['./order-main.component.sass']
})
export class OrderMainComponent implements OnInit {

  public itemDataList: Array<any> = [];
  public mockData = [{itemId: 1,
    itemName: 'Cheese sanwich',
    categery: 'Veg',
    price: '100',
    imageURL: './.jpg'
    }, {itemId: 2,
      itemName: 'Cheese sanwich',
      categery: 'Veg',
      price: '100',
      imageURL: './.jpg'
      }, {itemId: 3,
        itemName: 'Cheese sanwich',
        categery: 'Veg',
        price: '100',
        imageURL: './.jpg'
        }, {itemId: 4,
          itemName: 'Cheese sanwich',
          categery: 'Veg',
          price: '100',
          imageURL: './.jpg'
          }];
  constructor() { }

  ngOnInit() {

  }

  public addItToTheCart(itemData: object): void {
    console.log('here');
    this.itemDataList.push(itemData);
  }

  public removeFromCart(index: number): any {
    this.itemDataList.splice(index, 1);
  }

}
