import { Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { ProductoComponent } from './componentes/libro/producto.component';

export const routes: Routes = [
    {
        path: "",
        component: MenuComponent,
        title: "Menu"
    },
    {
        path: "prod",
        component: ProductoComponent,
        title: "Producto"
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    }
];
