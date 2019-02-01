export class User {
    
    constructor(

        private degree: String,
        private name: String,
        private surname: String,
        private username: String,
        private password: String,
        public id?: Number
    ) { }

    public clone() {
        return new User(this.degree, this.name, this.surname, this.username, this.password, this.id);
    }
}