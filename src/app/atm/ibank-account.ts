/**
 * @author Matthew Samms
 * @date Nov 5, 2018
 * @Assignment 3
 */
/**
 * Base interface for classes
 */
export interface IBankAccount {
    withdrawalAmount(amount: number);
    depositAmount(amount: number);
    getBalance(): number;
    printBalance(): string;
}
