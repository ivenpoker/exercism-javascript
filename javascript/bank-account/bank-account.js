//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

    static _status = {_closed: "closed", _open: "open"}
    constructor() {
        this.balance = 0;
        this.accStatus = BankAccount._status._closed;
    }

    open() {
        if (this.accStatus === BankAccount._status._open) {
            throw new ValueError("Account already opened");
        }
        this.balance = 0;
        this.accStatus = BankAccount._status._open;
    }

    close() {
        if (this.accStatus === BankAccount._status._closed) {
            throw new ValueError("Account closed");
        }
        this.accStatus = BankAccount._status._closed;
    }

    deposit(value) {
        if (this.accStatus === BankAccount._status._closed) {
            throw new ValueError("Account closed");
        }
        if (value < 0) {
            throw new ValueError("Cannot deposit negative amount");
        }
        this.balance += value;
    }

    withdraw(value) {
        if (this.accStatus === BankAccount._status._closed) {
            throw new ValueError("Account closed");
        }
        if (value > this.balance) {
            throw new ValueError("Cannot withdraw more than deposited");
        }
        if (value < 0) {
            throw new ValueError("Cannot withdraw negative amount");
        }
        this.balance -= value;
    }

    get balance() {
        if (this.accStatus === BankAccount._status._closed) {
            throw new ValueError("Account closed cannot retrieve");
        }
        return this._balance;
    }

    set balance(value) {
        this._balance = value
    }
}

export class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}
