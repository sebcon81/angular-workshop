import {ComponentFixture, TestBed} from "@angular/core/testing"
import {By} from "@angular/platform-browser"
import {BlogEntryComponent} from "./blog-entry.component"
import {BlogEntry} from "../../../shared/models/blog-entry.interface"

const blogEntryItem: BlogEntry = {
	id: "1",
	title: "Test Blog",
	text: "Test Content",
	img: "https://example.com/image.jpg",
	date: new Date().toISOString(),
	creator: "Test Author",
}

describe("BlogEntryComponent", () => {
	let component: BlogEntryComponent
	let fixture: ComponentFixture<BlogEntryComponent>

	beforeEach(() => {
		component = new BlogEntryComponent()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogEntryComponent)
		component = fixture.componentInstance
		component.item = blogEntryItem
		fixture.detectChanges()
	})

	it("should display h2 title", () => {
		// component.item = blogEntryItem
		// fixture.detectChanges()
		const h2 = fixture.debugElement.query(By.css("h2"))
		expect(h2).toBeTruthy()
		expect(h2.nativeElement.textContent).toContain(blogEntryItem.title)
	})

	it("should display img", () => {
		const img = fixture.debugElement.query(By.css("img"))
		expect(img).toBeTruthy()
		expect(img.nativeElement.getAttribute("src")).toBe(component.item.img)
	})

	it("should display p", () => {
		const p = fixture.debugElement.query(By.css("p"))
		expect(p).toBeTruthy()
	})
})
