export class Account {
    constructor(public id:number,public userId:number,public balance:number){}

    displayBalance():void{
        console.log(`Account id: ${this.id} Balance: ${this.balance}`);
        console.log(`User info -name : ${user.name}`);
        
    }
}