import { BankAccount } from './bank-account';
import { IBankAccount } from './ibank-account';
import { Transaction } from './transaction';
import { TransactionType } from './transaction-type.enum';
/**
 * @author Matthew Samms
 * @date Nov 5, 2018
 * @Assignment 3
 */
export class SavingsAccount extends BankAccount implements IBankAccount {

    private readonly INTEREST: number = 0.05;
    private numberOfDeposits = 0;
    // when you create a constructor that has inheritence, you must pass
    // up to the main constructor, for this use super()
    //
    /**
     * Passes value to bankaccount via super()
     * @param initialBalance takes in the ititial balance as a number
     */
    constructor(initialBalance: number) {
        super(initialBalance);
    }
    /**
     * Withdrawals a specified amount from the bank account
     * provided that the amount does not overdraw the account.
     * Pushes the transaction type and amount
     * @param amount The amount returned
     */
    withdrawalAmount(amount: number): void {
        if (amount > this.accountBalance) {
            throw new Error('Insufficient funds');
        } else {
            this.accountBalance -= amount;
            const trans: Transaction = new Transaction();
            trans.amount = amount;
            trans.transType = TransactionType.Withdrawal;
            this.transaction.push(trans);
        }
    }
    /**
     * Calculates the amount to give the customer for adding
     * five deposits to their bank account. Pushes the transaction
     * type and amount
     * @param amount Takes in the deposit amount.
     */
    depositAmount(amount: number) {
        this.numberOfDeposits++;
        const trans: Transaction = new Transaction();
        if (this.numberOfDeposits % 5 === 0) {
            const tempBalance = this.accountBalance + amount;
            trans.amount = amount;
            trans.transType = TransactionType.Deposit;
            this.transaction.push(trans);
            this.accountBalance = (tempBalance + (tempBalance * this.INTEREST));
            trans.amount = tempBalance * this.INTEREST;
            trans.transType = TransactionType.Interest;
            this.transaction.push(trans);
        } else {
            this.accountBalance += amount;
            trans.amount = amount;
            trans.transType = TransactionType.Deposit;
            this.transaction.push(trans);
        }
    }
    /**
     * Gets the balance of the current account
     * @returns the account balance is returned
     */
    getBalance(): number {
        return this.accountBalance;
    }

    // use the tic char below escape
    /**
     * Prints the balance in the savings account
     * @returns returns the account balance formatted into a string
     */
    printBalance(): string {
        return `Your savings account balance is ${this.accountBalance}`;
    }
}
