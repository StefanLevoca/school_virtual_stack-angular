import { Permissions } from './permissions';

export class User {
    public get myRights(): Permissions[] {
        return this._myRights;
    }
    public set myRights(value: Permissions[]) {
        this._myRights = value;
    }
    public get permissions(): Set<String> {
        return this._permissions;
    }
    public set permissions(value: Set<String>) {
        this._permissions = value;
    }
    public get password(): String {
        return this._password;
    }
    public set password(value: String) {
        this._password = value;
    }
    public get username(): String {
        return this._username;
    }
    public set username(value: String) {
        this._username = value;
    }
    public get surname(): String {
        return this._surname;
    }
    public set surname(value: String) {
        this._surname = value;
    }
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }
    public get degree(): String {
        return this._degree;
    }
    public set degree(value: String) {
        this._degree = value;
    }
    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }
    constructor(
        // public fullName : SimpleStringProperty, ?????

        private _id: Number,
        private _degree: String,
        private _name: String,
        private _surname: String,
        private _username: String,
        private _password: String,
        private _permissions: Set<String>,
        private _myRights: Permissions[]
    ) { }

    public clone() {
        let myRights: Permissions[] = [];
        for (let p of this._myRights) {
            myRights.push(p.clone());
        }
        return new User(this._id, this._degree, this._name, this._surname, this._username, this._password, this._permissions, myRights);
    }
}