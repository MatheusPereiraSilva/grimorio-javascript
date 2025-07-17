import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit{
  @Input()
  photoCover: string = 'https://www.devmedia.com.br/arquivos/Salas/frontend/Angular/13/2312/thumb.jpg';
  @Input()
  contentTitle: string = 'Meu Artigo';
  @Input()
  contentDescription: string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quibusdam mollitia impedit voluptas alias quis possimus necessitatibus dignissimos, sapiente beatae maxime? Perferendis maxime hic odit excepturi iste ipsa perspiciatis ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deserunt optio dolorem laborum nulla vitae veniam repellendus, atque hic distinctio ducimus culpa omnis quod? Quos voluptatum sapiente odit commodi illum!';

  constructor( private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get('Id'))
    )
  }
}
