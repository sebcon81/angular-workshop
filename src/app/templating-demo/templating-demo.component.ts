import {Component} from "@angular/core"
import {Person} from "../shared/models/person.interface"

@Component({
	selector: "app-templating-demo",
	templateUrl: "./templating-demo.component.html",
	styleUrls: ["./templating-demo.component.css"],
})
export class TemplatingDemoComponent {
	person: Person[] = [
		{
			firstName: "Hans",
			lastName: "Meier",
		},
		{
			firstName: "Peter",
			lastName: "Müller",
		},
		{
			firstName: "Anna",
			lastName: "Schmidt",
		},
	]
	selectedPerson: Person = this.person[0]
	counter = 0
	isVisible!: boolean

	incrementCounter(): void {
		this.counter++
		this.selectedPerson = this.person[this.counter]
	}

	decrementCounter(): void {
		this.counter--
		this.selectedPerson = this.person[this.counter]
	}
	resetCounter(): void {
		this.counter = 0
		this.selectedPerson = this.person[this.counter]
	}
}
