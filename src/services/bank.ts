import { User } from "../models/user";
import { Account } from "../models/account";

export class Bank{

    private users:User[]=[ ];
    private accounts:Account[]=[];

    registerUser(user:User):void{
        this.users.push(user);
        console.log(`User ${user.name} registared successfully`);
    }

    openAccount (user:User):void{
        const accountId=this.accounts.length +1;
        const newAccount = new Account(accountId,user,0)  ;
        this.accounts.push(newAccount);
        console.log(`Account for user ${user.name} opened`);        
    }

    displayUserAccounts(userId:number):void{
        const userAccounts = this.accounts.filter(account=> account.user.id===userId);
        console.log(`Account for suwe with ID ${userId}:`);
        userAccounts.forEach(account=>account.displayBalance());
    }





}