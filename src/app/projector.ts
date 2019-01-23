export class Projector {
    public get interactive(): number {
        return this._interactive;
    }
    public set interactive(value: number) {
        this._interactive = value;
    }
    public get projectorRange(): String {
        return this._projectorRange;
    }
    public set projectorRange(value: String) {
        this._projectorRange = value;
    }
    public get lightOutput(): number {
        return this._lightOutput;
    }
    public set lightOutput(value: number) {
        this._lightOutput = value;
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
        private _lightOutput: number,
        private _projectorRange: String,
        private _interactive: number
    ) {}

    public clone() {
        return new Projector(this._brand, this._model, this._lightOutput, this._projectorRange, this._interactive);
      }
}