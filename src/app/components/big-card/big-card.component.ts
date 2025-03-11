import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent implements OnInit {
  photoCover: string =
    'https://static.wikia.nocookie.net/0cb76c54-ba87-4add-b270-0cf0fbd4391c';
  cardTitle: string = 'NOVA HEROÍNA DA MARVEL';
  cardDescription: string = `Riri Williams, personagem dos quadrinhos da Marvel, 
    é quem substituirá Tony Stark como Homem de Ferro. 
    A série Coração de Ferro (ou Ironheart) 
    contará a história de Riri Williams, que cria uma 
    armadura semelhante à do Homem de Ferro.`;

  constructor() {}

  ngOnInit(): void {}
}
