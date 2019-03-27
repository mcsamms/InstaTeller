import { Component, OnInit } from '@angular/core';
import { ChequingAccount } from './chequing-account';
import { SavingsAccount } from './savings-account';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
/**
 * Setting the variables for the ATM component class
 * This is where the events are handled
 */
export class AtmComponent implements OnInit {
  public isChequing: boolean;
  public isSavings = true;
  public output: string;
  public chequingAccount: ChequingAccount = new ChequingAccount(0);
  public savingsAccount: SavingsAccount = new SavingsAccount(0);
  constructor() { }


  ngOnInit() {
  }
  /**
   * Takes in the users value and converts it to a number
   * and then passes it to the withdrawal function.
   * @param amount takes in the amount from user input
   */
  public withdrawalAmount(amount: number) {
    this.output = '';
    try {
      this.output = 'Hello';
      if (Number(amount)) {
        if (this.isChequing) {
          this.chequingAccount.withdrawalAmount(Number(amount));
        } else {
          this.savingsAccount.withdrawalAmount(Number(amount));
        }
      }
    } catch (error) {
      this.output = error;
    }

  }
  /**
   * Takes in the user value and converts it to a number and passes
   * it to the function depositAmount.
   * @param amount Takes in the amount from the user
   */
  public depositAmount(amount: number) {
    this.output = '';
    try {
      if (Number(amount)) {
        if (this.isChequing) {
          this.chequingAccount.depositAmount(Number(amount));
        } else {
          this.savingsAccount.depositAmount(Number(amount));
        }
      }
    } catch (error) {
      this.output = error;
    }

  }
}
