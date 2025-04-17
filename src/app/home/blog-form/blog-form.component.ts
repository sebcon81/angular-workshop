import {Component, EventEmitter, Output} from "@angular/core"
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms"
import {BlogEntry} from "../../shared/models/blog-entry.interface"
import {CommonModule} from "@angular/common"

@Component({
	selector: "app-blog-form",
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: "./blog-form.component.html",
	styleUrl: "./blog-form.component.css",
})
export class BlogFormComponent {
	@Output() newBlogEntry = new EventEmitter<BlogEntry>()
	blogForm = new FormGroup({
		title: new FormControl("", [Validators.required]),
		text: new FormControl("", [
			Validators.required,
			Validators.minLength(25),
			Validators.maxLength(50),
		]),
		img: new FormControl(
			"https://www.pruefungschecker.de/assets/images/courses/bootsschein/sportbootfuehrerschein-sbf-binnen-klein.webp",
			Validators.required
		),
	})

	addBlogEntry(): void {
		this.newBlogEntry.emit({
			id: "999",
			title: this.blogForm.value.title || "",
			text: this.blogForm.value.text || "",
			img: this.blogForm.value.img || "",
			date: new Date().toISOString(),
			creator: "Sebastian Conrad",
		})
	}
}
