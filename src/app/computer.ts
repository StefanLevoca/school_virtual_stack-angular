export class Computer {
    public get office(): String {
        return this._office;
    }
    public set office(value: String) {
        this._office = value;
    }
    public get os(): String {
        return this._os;
    }
    public set os(value: String) {
        this._os = value;
    }
    public get ram(): number {
        return this._ram;
    }
    public set ram(value: number) {
        this._ram = value;
    }
    public get processor(): String {
        return this._processor;
    }
    public set processor(value: String) {
        this._processor = value;
    }
    public get driveSize(): number {
        return this._driveSize;
    }
    public set driveSize(value: number) {
        this._driveSize = value;
    }
    public get driveType(): String {
        return this._driveType;
    }
    public set driveType(value: String) {
        this._driveType = value;
    }
    public get model(): String {
        return this._model;
    }
    public set model(value: String) {
        this._model = value;
    }
    public get brand(): String {
        return this._brand;
    }
    public set brand(value: String) {
        this._brand = value;
    }
    constructor(
        private _brand: String,
        private _model: String,
        private _driveType?: String,
        private _driveSize?: number,
        private _processor?: String,
        private _ram?: number,
        private _os?: String,
        private _office?: String,
    ) { }

    public clone() {
        return new Computer(this._brand, this._model, this._driveType, this._driveSize, this._processor, this._ram, this._os, this._office);
    }
}