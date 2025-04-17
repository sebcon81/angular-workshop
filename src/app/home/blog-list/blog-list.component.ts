import {Component, Input} from "@angular/core"
import {BlogEntryComponent} from "./blog-entry/blog-entry.component"
import {BlogEntry} from "../../shared/models/blog-entry.interface"
import {CommonModule} from "@angular/common"

@Component({
	selector: "app-blog-list",
	imports: [BlogEntryComponent, CommonModule],
	templateUrl: "./blog-list.component.html",
	styleUrl: "./blog-list.component.css",
})
export class BlogListComponent {
	@Input() blogEntryItem!: BlogEntry[]

	trackByBlogEntryID(index: number, item: BlogEntry): string {
		return item.id
	}
}
