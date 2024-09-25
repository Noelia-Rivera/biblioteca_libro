import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
items: MenuItem[];

constructor(){
  this.items=[
    {
      label: "Despliegame", icon: "pi pi-bars",
      items:[
      {label: "Carita Feliz", icon: "pi pi-face-smile"},
      {label: "Heart", icon: "pi pi-heart-fill"}
      ]
    },
    {label: "Apple", icon: "pi pi-apple"},
    {label: "WhatsApp", icon: "pi pi-whatsapp"},
    {label: "Ubicanos", icon: "pi pi-map-marker"},
    {label: "Pedidos YA", icon: "pi pi-cart-plus"}
  ]
}
}
