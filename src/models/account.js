"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(id, userId, balance) {
        this.id = id;
        this.userId = userId;
        this.balance = balance;
    }
    Account.prototype.displayBalance = function () {
        console.log("Account id: ".concat(this.id, " Balance: ").concat(this.balance));
    };
    return Account;
}());
exports.Account = Account;
