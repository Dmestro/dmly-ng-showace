import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DynamicTablePageComponent } from './pages/dynamic-table-page/dynamic-table-page.component';
import { DragDropPageComponent } from './pages/drag-drop-page/drag-drop-page.component';

export const routes: Routes = [
	{ path: 'form', component: FormPageComponent },
	{ path: 'dynamic-table', component: DynamicTablePageComponent },
	{ path: 'drag-drop', component: DragDropPageComponent },
	{ path: '', component: MainPageComponent }
];
