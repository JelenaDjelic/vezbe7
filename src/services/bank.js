"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
var account_1 = require("../models/account");
var Bank = /** @class */ (function () {
    function Bank() {
        this.users = [];
        this.accounts = [];
    }
    Bank.prototype.registerUser = function (user) {
        this.users.push(user);
        console.log("User ".concat(user.name, " registared successfully"));
    };
    Bank.prototype.openAccount = function (user) {
        var accountId = this.accounts.length + 1;
        var newAccount = new account_1.Account(accountId, user.id, 0);
        this.accounts.push(newAccount);
        console.log("Account for user ".concat(user.name, " opened"));
    };
    Bank.prototype.displayUserAccounts = function (userId) {
        var userAccounts = this.accounts.filter(function (account) { return account.userId === userId; });
        console.log("Account for suwe with ID ".concat(userId, ":"));
        userAccounts.forEach(function (account) { return account.displayBalance(); });
    };
    return Bank;
}());
exports.Bank = Bank;
