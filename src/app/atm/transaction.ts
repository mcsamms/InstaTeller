import { TransactionType } from './transaction-type.enum';

/**
 * @author Matthew Samms
 * @date Nov 5, 2018
 * @Assignment 3
 */
export class Transaction {
    public transType: TransactionType;
    public amount: number;

    /**
     * Outputs the transaction type and the amount as a string
     */
    public toString(): string {
        return TransactionType[this.transType] + ' $' + this.amount.toFixed(2);
    }
}

