import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rocketTitle = 'Tour of Heroes app is running!';
  headerTitle = 'Tour Of Heroes 2023';
  headerDescription =
    'Aqui nesse espaço vamos consumir uma Api da Marvel e disponibilizar um catálogo de hérois em Angular';
  footerTitle = 'Documentação Oficial';
  footerDescription = 'Guia completo de desenvolvimento Web';

  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      routerLink: '/dashboard',
      toolTipText: 'Dashboard',
    },
    {
      icon: 'person',
      routerLink: '/heroes',
      toolTipText: 'Heroes',
    },
  ]
}
