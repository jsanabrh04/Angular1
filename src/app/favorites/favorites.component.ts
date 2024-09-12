import { Component, OnInit } from '@angular/core';
import { FavoriteImagesService } from './favorite-images.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteImages: any[] = [];

  constructor(private favoriteImagesService: FavoriteImagesService) {}

  ngOnInit(): void {
    this.favoriteImages = this.favoriteImagesService.getFavorites();
  }

  removeFromFavorites(image: any): void {
    this.favoriteImagesService.removeFavorite(image);
    this.favoriteImages = this.favoriteImagesService.getFavorites();
  }
}
