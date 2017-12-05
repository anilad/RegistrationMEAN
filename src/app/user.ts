export class User {
    constructor(
        public fName: string="",
        public lName: string="",
        public email: string="",
        public pwd: string="",
        public confirm: string="",
        public address: string="",
        public unit: string="",
        public city: string="",
        public state: string="",
        public lucky: boolean=null,
    ) {}
}