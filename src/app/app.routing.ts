import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { EditAnimalComponent } from './components/edit-animal/edit-animal.component';

const appRoutes: Routes = [
	//{path: '', component: HomeComponent},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'login', 
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'animals',
		component: AnimalsComponent
	},
	{
		path: 'animal/:id',
		component: AnimalDetailComponent
	},
	{
		path: 'add-animal',
		component: AddAnimalComponent
	},
	{
		path: 'edit-animal/:id',
		component: EditAnimalComponent
	},
	{
		path: '**',
		component: LoginComponent
	}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);