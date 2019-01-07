import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-starred') isFavorite: Boolean;
  @Output('change') click= new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  changeFavorite() {
    this.isFavorite = !this.isFavorite;
    this.click.emit(this.isFavorite);
  }

}
