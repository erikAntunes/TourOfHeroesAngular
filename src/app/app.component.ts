import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rocketTitle = 'Tour of Heroes app is running!';
  headerTitle = 'Tour Of Heroes 2023';
  headerDescription =
    'Aqui nesse espaço vamos consumir uma Api da Marvel e disponibilizar um catálogo de hérois em Angular';
  footerTitle = 'Documentação Oficial';
  footerDescription = 'Guia completo de desenvolvimento Web';
}
