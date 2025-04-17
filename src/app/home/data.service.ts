import {inject, Injectable, OnDestroy} from "@angular/core"
import {BlogEntry} from "../shared/models/blog-entry.interface"
import {catchError, from, map, Observable, tap} from "rxjs"
import {HttpClient} from "@angular/common/http"

@Injectable({
	providedIn: "root",
})
export class DataService implements OnDestroy {
	private readonly url = "http://localhost:8080/blog"
	myBlogItem: BlogEntry[] = []

	constructor(private httpClient: HttpClient) {}

	ngOnDestroy(): void {
		// aufräum arbeiten
	}

	getAllBlogEntriesBy2025(): Observable<BlogEntry[]> {
		return this.httpClient.get<BlogEntry[]>(this.url).pipe(
			tap(data => console.log(data)),
			map(data => data.filter(item => item.date?.includes("2025"))),
			tap(data => console.log(data.length)),
			catchError(error => {
				console.error("Fehler beim Abrufen der Blogeinträge", error)
				return from([])
			})
		)
	}

	addBlogEntry(newEntry: BlogEntry): void {
		this.myBlogItem.push(newEntry)
	}

	getBlogLength(): number {
		return this.myBlogItem.length
	}

	getData(): Observable<any> {
		return this.httpClient.get("https://echo.free.beeceptor.com")
	}
}
