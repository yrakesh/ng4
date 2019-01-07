import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  msg= {
    title: 'tweet',
    isLiked: false
  }
  onFavoriteChange(isFavorite) {
    console.log('favorite changed\t', isFavorite);
  }
}
