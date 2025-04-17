// login.component.ts
import {Component} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Router} from "@angular/router"
import {AuthService} from "../shared/auth.service"
import {FormsModule} from "@angular/forms"
import {CommonModule} from "@angular/common"
import {catchError} from "rxjs"

@Component({
	selector: "app-login",
	imports: [FormsModule, CommonModule],
	templateUrl: "./login.component.html",
})
export class LoginComponent {
	email = ""
	password = ""
	errorMessage = ""

	constructor(
		private http: HttpClient,
		private auth: AuthService,
		private router: Router
	) {}

	onLogin() {
		const loginData = {email: this.email, password: this.password}
		this.http
			.post<any>("https://reqres.in/api/login", loginData)
			.pipe(
				catchError(
					error => (this.errorMessage = "Login fehlgeschlagen" + error)
				)
			)
			.subscribe(res => {
				this.auth.setToken(res.token) // Token zentral verwalten
				this.router.navigate(["/profile"]) // weiterleiten
			})
	}
}
