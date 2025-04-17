// profile.component.ts
import {Component, OnInit} from "@angular/core"
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {AuthService} from "../shared/auth.service"
import {CommonModule} from "@angular/common"

@Component({
	selector: "app-profile",
	imports: [CommonModule],
	template: `
		<div *ngIf="userData; else notLoggedIn">
			<h2>Profil</h2>
			<pre>{{ userData | json }}</pre>
		</div>
		<ng-template #notLoggedIn>
			<p>Bitte loggen Sie sich ein, um Ihr Profil zu sehen.</p>
		</ng-template>
	`,
})
export class ProfileComponent implements OnInit {
	userData: any

	constructor(private http: HttpClient, private auth: AuthService) {}

	ngOnInit(): void {
		const token = this.auth.getToken()
		if (!token) return

		const headers = new HttpHeaders({Authorization: `Bearer ${token}`})
		this.http.get("https://reqres.in/api/users/2", {headers}).subscribe({
			next: data => (this.userData = data),
			error: () => (this.userData = null),
		})
	}
}
