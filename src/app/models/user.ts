export class User {

	constructor(
		public token?: string,
		public nome?: string,
		public role?: string,
		public expires?: string) { }
}