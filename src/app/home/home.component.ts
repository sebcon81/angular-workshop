import {Component, inject, OnDestroy, OnInit} from "@angular/core"
import {BlogListComponent} from "./blog-list/blog-list.component"
import {BlogFormComponent} from "./blog-form/blog-form.component"
import {BlogEntry} from "../shared/models/blog-entry.interface"
import {CommonModule} from "@angular/common"
import {DataService} from "./data.service"
import {combineLatest, filter, from, map, switchMap, tap} from "rxjs"

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
	standalone: true,
	imports: [BlogListComponent, BlogFormComponent, CommonModule],
})
export class HomeComponent implements OnInit, OnDestroy {
	displayBlogForm = false
	dataService: DataService = inject(DataService)
	myBlogItem: BlogEntry[] = []

	ngOnInit(): void {
		this.dataService
			.getAllBlogEntriesBy2025()
			.subscribe(data => (this.myBlogItem = data))
	}

	ngOnDestroy(): void {
		// aufräum arbeiten
	}

	setDisplay(): void {
		this.displayBlogForm = !this.displayBlogForm
	}

	addNewEntry(item: BlogEntry): void {
		this.dataService.addBlogEntry(item)
	}
}
