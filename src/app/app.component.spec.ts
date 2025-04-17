import {TestBed} from "@angular/core/testing"
import {AppComponent} from "./app.component"
import {RouterModule} from "@angular/router"
import {RouterTestingModule} from "@angular/router/testing"

describe("AppComponent", () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppComponent, RouterTestingModule],
		}).compileComponents()
	})

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.componentInstance
		app.description = "Hallo Beschreibung"
		app.title = "Hello World"
		expect(app).toBeTruthy()
	})
})
