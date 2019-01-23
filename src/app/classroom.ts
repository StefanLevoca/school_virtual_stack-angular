export class Classroom {
    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }
    constructor(
        private _name: String,
        private _id: Number       
    ) {}

    public clone() {
        return new Classroom(this._name, this._id);
      }
}