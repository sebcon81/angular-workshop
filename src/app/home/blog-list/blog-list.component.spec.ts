import {BlogListComponent} from "./blog-list.component"
import {BlogEntry} from "../../shared/models/blog-entry.interface"
import {ComponentFixture, TestBed} from "@angular/core/testing"
import {By} from "@angular/platform-browser"

const blogEntryItem: BlogEntry = {
	id: "1",
	title: "Test Blog",
	text: "Test Content",
	img: "https://example.com/image.jpg",
	date: new Date().toISOString(),
	creator: "Test Author",
}

const blogEntries: BlogEntry[] = [
	blogEntryItem,
	{...blogEntryItem, id: "2"},
	{...blogEntryItem, id: "3"},
	{...blogEntryItem, id: "4"},
	{...blogEntryItem, id: "5"},
]

describe("BlogListComponent", () => {
	let component: BlogListComponent
	let fixture: ComponentFixture<BlogListComponent>

	beforeEach(() => {
		component = new BlogListComponent()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogListComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should return the id of the blog entry", () => {
		const index = 0

		const result = component.trackByBlogEntryID(index, blogEntryItem)

		expect(result).toBe("1")
	})

	it("should display h2 title", () => {
		fixture.detectChanges()
		const h2 = fixture.debugElement.query(By.css("h2"))
		expect(h2).toBeTruthy()
		expect(h2.nativeElement.textContent).toContain("Mein erster Blog")
	})

	it("should display all blog entry items <app-blog-entry>", () => {
		component.blogEntryItem = blogEntries

		fixture.detectChanges()

		const entries = fixture.debugElement.queryAll(By.css("app-blog-entry"))
		expect(entries.length).toBe(blogEntries.length)
	})
})
