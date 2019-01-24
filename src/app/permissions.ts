export class Permissions {
    public get rightClassroomAdministration(): boolean {
        return this._rightClassroomAdministration;
    }
    public set rightClassroomAdministration(value: boolean) {
        this._rightClassroomAdministration = value;
    }
    public get rightDeleteDevice(): boolean {
        return this._rightDeleteDevice;
    }
    public set rightDeleteDevice(value: boolean) {
        this._rightDeleteDevice = value;
    }
    public get rightDiscardDevice(): boolean {
        return this._rightDiscardDevice;
    }
    public set rightDiscardDevice(value: boolean) {
        this._rightDiscardDevice = value;
    }
    public get rightEditDevice(): boolean {
        return this._rightEditDevice;
    }
    public set rightEditDevice(value: boolean) {
        this._rightEditDevice = value;
    }
    public get rightAddDevice(): boolean {
        return this._rightAddDevice;
    }
    public set rightAddDevice(value: boolean) {
        this._rightAddDevice = value;
    }
    public get rightUserAdministration(): boolean {
        return this._rightUserAdministration;
    }
    public set rightUserAdministration(value: boolean) {
        this._rightUserAdministration = value;
    }
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    constructor(
        private _userId: number,
        private _rightUserAdministration: boolean,
        private _rightAddDevice: boolean,
        private _rightEditDevice: boolean,
        private _rightDiscardDevice: boolean,
        private _rightDeleteDevice: boolean,
        private _rightClassroomAdministration: boolean
    ) { }

    public clone() {
        return new Permissions(this._userId, this._rightUserAdministration, this._rightAddDevice, this._rightEditDevice, this._rightDiscardDevice, this._rightDeleteDevice, this._rightClassroomAdministration);
    }
}