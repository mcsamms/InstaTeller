import { Transaction } from './transaction';
/**
 * @author Matthew Samms
 * @date Nov 5, 2018
 * @Assignment 3
 */
/**
 * Create Base class of bank account with initial balance
 */
export class BankAccount {
    public accountBalance: number;
    public transaction: Array<Transaction> = new Array<Transaction>();
    /**
     * Initializes the account balance with this constructor.
     * @param initialBalance Takes in initial balance as a number
     */
    constructor(public initialBalance: number) {
        this.accountBalance = initialBalance;
    }
}
