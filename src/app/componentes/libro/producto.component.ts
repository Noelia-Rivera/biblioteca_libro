import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { MenubarModule } from 'primeng/menubar';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [MenuComponent, MenubarModule, TableModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  productos:ProductoComponent[]=[];
}
