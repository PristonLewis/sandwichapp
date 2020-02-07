import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-order-main',
  templateUrl: './order-main.component.html',
  styleUrls: ['./order-main.component.sass']
})
export class OrderMainComponent implements OnInit {

  public itemDataList: Array<any>;
  public total: number;
  public confirmationMessage: string;
  public statusFlag: boolean;
  public allItemsList: Array<any>;
  public allPreferenceList: Array<any>;

  constructor(private http: HttpService, private router: Router) {
    this.itemDataList = [];
    this.total = 0;
    this.allItemsList = [];
    this.allPreferenceList = [];
   }

  ngOnInit() {
    this.getAllItems();
    this.getAllPreferences();
  }

  // Getting all the items
  public getAllItems(): void {
    this.http.getRequest('items/allitems').subscribe((data) => {
      this.allItemsList = data.items;
    });
  }

    // Getting all the preferences
    public getAllPreferences(): void {
      this.http.getRequest('items/allitems').subscribe((data) => {
        this.allPreferenceList = data.items;
      });
    }

  // Adding the items to the cart
  public addItToTheCart(itemData: object): void {
    this.itemDataList.push(itemData);
    this.calculatePrice();
  }

  // Removes the items from the cart
  public removeFromCart(index: number): any {
    this.itemDataList.splice(index, 1);
    this.calculatePrice();
  }

  // calculates the total price
  public calculatePrice(): void {
    this.total = 0;
    this.itemDataList.forEach((data) => {
      this.total += Number(data.price);
    });
  }

  // Places the order
  public placeOrder(): void {
    const payload = {
      items: this.itemDataList,
      userId: localStorage.getItems('userid')
    };
    this.http.postRequest('orders/placeOrder', payload).subscribe((data: any) => {
      this.confirmationMessage = 'Order placed successfully.';
      this.statusFlag = true;
      $('#successModal').modal('show');
    }, (exception) => {
      this.statusFlag = false;
      this.confirmationMessage = 'Something went wrong.';
      $('#successModal').modal('show');
    });
  }

  // action performed on modals OK button click
  public ok() {
    $('#successModal').modal('hide');
    if (this.statusFlag) {
      this.router.navigate(['/list']);
    }
  }

}
