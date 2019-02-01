import { Classroom } from './classroom';
import { User } from './user';
import { Projector } from './projector';

export class Device {
    public get projector(): Projector[] {
        return this._projector;
    }
    public set projector(value: Projector[]) {
        this._projector = value;
    }
    public get computer(): Number {
        return this._computer;
    }
    public set computer(value: Number) {
        this._computer = value;
    }
    public get formOfDiscard(): String {
        return this._formOfDiscard;
    }
    public set formOfDiscard(value: String) {
        this._formOfDiscard = value;
    }
    public get reasonOfDiscard(): String {
        return this._reasonOfDiscard;
    }
    public set reasonOfDiscard(value: String) {
        this._reasonOfDiscard = value;
    }
    public get dateOfDiscard(): Date {
        return this._dateOfDiscard;
    }
    public set dateOfDiscard(value: Date) {
        this._dateOfDiscard = value;
    }
    public get invoiceNumber(): String {
        return this._invoiceNumber;
    }
    public set invoiceNumber(value: String) {
        this._invoiceNumber = value;
    }
    public get bankAccount(): String {
        return this._bankAccount;
    }
    public set bankAccount(value: String) {
        this._bankAccount = value;
    }
    public get formOfObtain(): String {
        return this._formOfObtain;
    }
    public set formOfObtain(value: String) {
        this._formOfObtain = value;
    }
    public get serialNumber(): String {
        return this._serialNumber;
    }
    public set serialNumber(value: String) {
        this._serialNumber = value;
    }
    public get dateOfObtain(): Date {
        return this._dateOfObtain;
    }
    public set dateOfObtain(value: Date) {
        this._dateOfObtain = value;
    }
    public get note(): String {
        return this._note;
    }
    public set note(value: String) {
        this._note = value;
    }
    public get responsiblePerson(): User[] {
        return this._responsiblePerson;
    }
    public set responsiblePerson(value: User[]) {
        this._responsiblePerson = value;
    }
    public get classroom(): Classroom[] {
        return this._classroom;
    }
    public set classroom(value: Classroom[]) {
        this._classroom = value;
    }
    public get type(): String {
        return this._type;
    }
    public set type(value: String) {
        this._type = value;
    }
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }
    public get count(): Number {
        return this._count;
    }
    public set count(value: Number) {
        this._count = value;
    }
    public get price(): Number {
        return this._price;
    }
    public set price(value: Number) {
        this._price = value;
    }
    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }
    public get brand(): String {
        return this._brand;
    }
    public set brand(value: String) {
        this._brand = value;
    }
    constructor(
        private _price: Number,
        private _name: String,
        private _responsiblePerson: User[],
        private _classroom: Classroom[],
        private _brand?: String,
        private _id?: Number,
        private _count?: Number,
        private _type?: String,
        private _note?: String,
        private _dateOfObtain?: Date,
        private _serialNumber?: String,
        private _formOfObtain?: String,
        private _bankAccount?: String,
        private _invoiceNumber?: String,
        private _dateOfDiscard?: Date,
        private _reasonOfDiscard?: String,
        private _formOfDiscard?: String,
        private _computer?: Number,
        private _projector?: Projector[]
    ) { }

    public clone(): Device {
        let classroom: Classroom[] = [];
        let user: User[] = [];
        let projector: Projector[] = [];
        for (let c of this._classroom) {
            let classroom: Classroom[] = [];
            classroom.push(c.clone());
        }
        for (let u of this._responsiblePerson) {
            let user: User[] = [];
            user.push(JSON.parse(JSON.stringify(u)));
        }
        for (let p of this._projector) {
            let projector: Projector[] = [];
            projector.push(p.clone());
        }
        return new Device(this._price, this._name, user, classroom, this._brand, this._id, this._count, this._type, this._note, this._dateOfObtain, this._serialNumber,
            this._formOfObtain, this._bankAccount, this._invoiceNumber, this._dateOfDiscard, this._reasonOfDiscard, this._formOfDiscard, this._computer, projector);
    }
}