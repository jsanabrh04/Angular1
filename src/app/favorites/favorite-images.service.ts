import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteImagesService {
  private favoriteImages: any[] = [];

  getFavorites(): any[] {
    return this.favoriteImages;
  }

  addFavorite(image: any): void {
    if (!this.favoriteImages.includes(image)) {
      this.favoriteImages.push(image);
    }
  }

  removeFavorite(image: any): void {
    this.favoriteImages = this.favoriteImages.filter(fav => fav !== image);
  }
}
