export class Computer {
   
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