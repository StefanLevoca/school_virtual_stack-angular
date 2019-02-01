export class Classroom {
    constructor(
        private name: String,
        public id?: Number
    ) { }

    public clone() {
        return new Classroom(this.name, this.id);
    }
}