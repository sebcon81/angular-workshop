import {Component} from "@angular/core"
import {HomeComponent} from "./home/home.component"
import {HeaderComponent} from "./header/header.component"
import {RouterModule} from "@angular/router"

@Component({
	selector: "app-root",
	imports: [HeaderComponent, RouterModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
	standalone: true,
})
export class AppComponent {
	title = "hello-world"
	description = "Hallo Beschreibung"
	x = 1
	y = 2
}
