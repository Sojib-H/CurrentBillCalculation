import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurrentBillCalculation';
  ShowResult=false;
  C1previousUnit = 0;
  C1presentUnit = 0;
  C1TotalUnit = 0;
  C1paidAmount = 0;
  C2previousUnit = 0;
  C2presentUnit = 0;
  C2TotalUnit = 0;
  C2paidAmount = 0;
  totalUnit = 0;
  totalPaidAmount = 0;
  expense = 0;
  energyCost = 0;
  UnitPrice = 0;
  C1energyCost = 0;
  C2energyCost = 0;
  C1totalCost = 0;
  C2totalCost = 0;
  C1OverLess = 0;
  C2OverLess = 0;
  C1overlessTxt = '';
  C2overlessTxt = '';

  getValues(val: any) {
    this.ShowResult=true;
    this.C1previousUnit = val.C1previousUnit;
    this.C1presentUnit = val.C1presentUnit;
    this.C1TotalUnit = this.C1presentUnit - this.C1previousUnit;
    this.C1paidAmount = val.C1paidAmount;
    this.C2previousUnit = val.C2previousUnit;
    this.C2presentUnit = val.C2presentUnit;
    this.C2TotalUnit = this.C2presentUnit - this.C2previousUnit;
    this.C2paidAmount = val.C2paidAmount;
    this.totalUnit = this.C1TotalUnit + this.C2TotalUnit;
    this.totalPaidAmount = this.C1paidAmount + this.C2paidAmount;
    this.energyCost = val.energyCost;
    this.UnitPrice = this.energyCost / this.totalUnit;
    this.expense = (this.totalPaidAmount - this.energyCost) / 2;
    this.C1energyCost = this.C1TotalUnit * this.UnitPrice;
    this.C1totalCost = this.C1energyCost + this.expense;
    this.C2energyCost = this.C2TotalUnit * this.UnitPrice;
    this.C2totalCost = this.C2energyCost + this.expense;
    this.C1OverLess = this.C1paidAmount - this.C1totalCost;
    if (this.C1OverLess > 0) {
      this.C1overlessTxt = 'Return';
    } else if (this.C1OverLess < 0) {
      this.C1overlessTxt = 'Due';
    }
    this.C2OverLess = this.C2paidAmount - this.C2totalCost;
    if (this.C2OverLess > 0) {
      this.C2overlessTxt = 'Return';
    } else if (this.C2OverLess < 0) {
      this.C2overlessTxt = 'Due';
    }
  }

  onReset(form: NgForm): void {
    form.reset();
    this.ShowResult=false;
  }
}
