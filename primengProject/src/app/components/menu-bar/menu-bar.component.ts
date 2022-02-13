import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html'
})
export class MenuBarComponent {

  items: MenuItem[] = [
    {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
    {label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: ['/calendar']},
    {label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink: ['/edit']},
    {
      label: 'Menu Hierarchy', icon: 'menu',
      items: [
        {
          label: 'Submenu 1', icon: 'subject',
          items: [
            {
              label: 'Submenu 1.1', icon: 'subject',
              items: [
                {label: 'Submenu 1.1.1', icon: 'subject'},
                {label: 'Submenu 1.1.2', icon: 'subject'},
                {label: 'Submenu 1.1.3', icon: 'subject'}
              ]
            },
            {
              label: 'Submenu 1.2', icon: 'subject',
              items: [
                {label: 'Submenu 1.2.1', icon: 'subject'},
                {label: 'Submenu 1.2.2', icon: 'subject'}
              ]
            }
          ]
        },
        {
          label: 'Submenu 2', icon: 'subject',
          items: [
            {
              label: 'Submenu 2.1', icon: 'subject',
              items: [
                {label: 'Submenu 2.1.1', icon: 'subject'},
                {label: 'Submenu 2.1.2', icon: 'subject'},
                {label: 'Submenu 2.1.3', icon: 'subject'}
              ]
            },
            {
              label: 'Submenu 2.2', icon: 'subject',
              items: [
                {label: 'Submenu 2.2.1', icon: 'subject'},
                {label: 'Submenu 2.2.2', icon: 'subject'}
              ]
            }
          ]
        }
      ]
    }
  ];

}
