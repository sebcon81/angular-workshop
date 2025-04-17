import {Routes} from "@angular/router"
import {HomeComponent} from "./home/home.component"
import {ContactComponent} from "./contact/contact.component"
import {LoginComponent} from "./login/login.component"
import {ProfileComponent} from "./profile/profile.component"

export const routes: Routes = [
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "kontakt",
		component: ContactComponent,
	},
	{
		path: "login",
		component: LoginComponent,
	},
	{
		path: "profile",
		component: ProfileComponent,
	},
]
