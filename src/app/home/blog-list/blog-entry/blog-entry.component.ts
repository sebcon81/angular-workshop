import {Component, Input} from "@angular/core"
import {BlogEntry} from "../../../shared/models/blog-entry.interface"

@Component({
	selector: "app-blog-entry",
	imports: [],
	templateUrl: "./blog-entry.component.html",
	styleUrl: "./blog-entry.component.css",
})
export class BlogEntryComponent {
	@Input() item!: BlogEntry
}
