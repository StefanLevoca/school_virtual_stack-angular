export class Projector {
    constructor(
        private brand: String,
        private model: String,
        private lightOutput: number,
        private projectorRange: String,
        private interactive: number
    ) { }

    public clone() {
        return new Projector(this.brand, this.model, this.lightOutput, this.projectorRange, this.interactive);
    }
}