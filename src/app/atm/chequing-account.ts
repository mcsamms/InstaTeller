import { BankAccount } from './bank-account';
import { IBankAccount } from './ibank-account';
import { Transaction } from './transaction';
import { TransactionType } from './transaction-type.enum';
/**
 * @author Matthew Samms
 * @date Nov 5, 2018
 * @Assignment 3
 */
export class ChequingAccount extends BankAccount implements IBankAccount {
    readonly TRANSACTION_FEE: number = 10;
    private numberOfWithdrawals = 0;
    /**
     * Sets the initial balance of the account.
     * @param initialBalance takes in a number as initial balance
     */
    constructor(initialBalance: number) {
        super(initialBalance);

    }
    /**
     * Withdrawal money form the chequing account. Throws
     * error for insufficient funds. Pushes the transaction type
     * and the amount
     * @param amount takes in amount as a number
     */
    withdrawalAmount(amount: number) {
        this.numberOfWithdrawals++;
        const trans: Transaction = new Transaction();
        if (this.numberOfWithdrawals % 5 === 0) {
            if ((amount + this.TRANSACTION_FEE) > this.accountBalance) {
                // trying to withdrawal too much
                this.numberOfWithdrawals--;
                throw new Error('Insufficient funds');
            } else {
                this.accountBalance -= amount;
                trans.amount = amount;
                trans.transType = TransactionType.Withdrawal;
                this.transaction.push(trans);
                this.accountBalance -= this.TRANSACTION_FEE;
                trans.amount = this.TRANSACTION_FEE;
                trans.transType = TransactionType.Fee;
                this.transaction.push(trans);
            }
        } else {
            if (amount > this.accountBalance) {
                this.numberOfWithdrawals--;
                throw new Error('Insufficient funds');
            } else {
                this.accountBalance -= amount;
                trans.amount = amount;
                trans.transType = TransactionType.Withdrawal;
                this.transaction.push(trans);
            }
        }
    }
    /**
     * Deposits an amount into the bank account. Pushes the transaction
     * type and amount
     * @param amount Returns the amount of the accountBalance.
     */
    depositAmount(amount: number) {
        this.accountBalance += amount;
        const trans: Transaction = new Transaction();
        trans.amount = amount;
        trans.transType = TransactionType.Deposit;
        this.transaction.push(trans);
    }
    /**
     * Gets the balance of the account
     */
    getBalance(): number {
        return this.accountBalance;
    }
    /**
     * Prints the balance of the account.
     */
    printBalance(): string {
        return `Your chequing account balance is ${this.accountBalance}`;
    }

}
