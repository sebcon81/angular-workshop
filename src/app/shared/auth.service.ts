// auth.service.ts
import {Injectable} from "@angular/core"

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private readonly tokenKey = "token"

	setToken(token: string): void {
		localStorage.setItem(this.tokenKey, token)
	}

	getToken(): string | null {
		return localStorage.getItem(this.tokenKey)
	}

	isLoggedIn(): boolean {
		return !!this.getToken()
	}

	logout(): void {
		localStorage.removeItem(this.tokenKey)
	}
}
