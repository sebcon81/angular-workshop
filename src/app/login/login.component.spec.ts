/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from "@angular/core/testing"
import {LoginComponent} from "./login.component"
import {of, throwError} from "rxjs"
import {By} from "@angular/platform-browser"

xdescribe("LoginComponent", () => {
	let component: LoginComponent
	let fixture: ComponentFixture<LoginComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LoginComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})

	it("should call AuthService.setToken and navigate to /profile on successful login", () => {
		const authServiceSpy = spyOn(component["auth"], "setToken")
		const routerSpy = spyOn(component["router"], "navigate")
		const httpSpy = spyOn(component["http"], "post").and.returnValue(
			of({token: "test-token"})
		)

		component.email = "test@example.com"
		component.password = "password123"
		component.onLogin()

		expect(httpSpy).toHaveBeenCalledWith("https://reqres.in/api/login", {
			email: "test@example.com",
			password: "password123",
		})
		expect(authServiceSpy).toHaveBeenCalledWith("test-token")
		expect(routerSpy).toHaveBeenCalledWith(["/profile"])
	})

	it("should set errorMessage on login failure", () => {
		const httpSpy = spyOn(component["http"], "post").and.returnValue(
			throwError(() => new Error("Login failed"))
		)

		component.email = "test@example.com"
		component.password = "wrongpassword"
		component.onLogin()

		expect(httpSpy).toHaveBeenCalledWith("https://reqres.in/api/login", {
			email: "test@example.com",
			password: "wrongpassword",
		})
		expect(component.errorMessage).toContain("Login fehlgeschlagen")
	})

	it("should form mark as invalid when fields are empty", () => {
		const form = fixture.debugElement.query(By.css("form")).nativeElement
		expect(component.email).toBe("")
		expect(component.password).toBe("")
		// Es gibt kein FormGroup → Validierung über native Validierung
		expect(form.checkValidity()).toBeFalse()
	})

	it("should form mark as valid when fields are filled", async () => {
		component.email = "test@example.com"
		component.password = "123456"
		fixture.detectChanges()

		await fixture.whenStable() // wartet auf ngModel-Bindung

		const form = fixture.debugElement.query(By.css("form")).nativeElement
		expect(form.checkValidity()).toBeTrue()
	})

	it("should call onLogin when form is submitted", async () => {
		spyOn(component, "onLogin")

		component.email = "test@example.com"
		component.password = "123456"
		fixture.detectChanges()

		await fixture.whenStable()

		const form = fixture.debugElement.query(By.css("form"))
		form.triggerEventHandler("ngSubmit", null)

		expect(component.onLogin).toHaveBeenCalled()
	})
})
