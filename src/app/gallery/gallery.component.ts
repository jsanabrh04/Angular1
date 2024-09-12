import { Component } from '@angular/core';
import { Image } from '../image.model';
import { FavoriteImagesService } from '../favorites/favorite-images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: Image[] = [
    {
      id: 1,
      title: 'Montañas',
      description: 'Montaña',
      category: 'Naturaleza',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqT3NuHRGTMOQxiq3pyyk1BOY3iebvI3KARA&s',
      date: '2024-01-01',
      isFavorite: false
    },
    {
      id: 2,
      title: 'Rio',
      description: 'Rio',
      category: 'Naturaleza',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgajvZCJVF8tKUTxh0Hjlh_ibw4SnG-EbJZQ&s',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Atardecer',
      description: 'Atardecer',
      category: 'Naturaleza',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfsRXY_mA1BnQXuFN1bDGUepkvLHZtSUklA&s',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 4,
      title: 'Amanecer',
      description: 'Amanecer',
      category: 'Naturaleza',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTZtApFG9Oe7mF34CHoN6gdHzVElKtrx9PA&s',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 5,
      title: 'Nieve',
      description: 'Nieve',
      category: 'Naturaleza',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGSvO3c55YLxFHHwWbVgmg9sL2h6EcHMp5A&s',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 6,
      title: 'Taiga',
      description: 'Taiga',
      category: 'Naturaleza',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVf1KJDkN8fkNz_JYZsyIU6UphE5w7wkh1Jg&s',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 7,
      title: 'Otoño',
      description: 'Otoño',
      category: 'Naturaleza',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYn74ov1ub69-cNUZcaqYR1zq3o8nJOqhCfA&s',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 8,
      title: 'Primavera',
      description: 'Primavera',
      category: 'Naturaleza',
      imageUrl: 'https://i.pinimg.com/564x/5c/ce/ce/5ccece0b4295d501ad039bd002695b52.jpg',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 9,
      title: 'Gato',
      description: 'Gato',
      category: 'Animales',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_rvVPv8W85i0lEJHG4Zsks7C-IHJTFjHpg&s',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 10,
      title: 'Perro',
      description: 'Perro',
      category: 'Animales',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRVRo8VLhIaOWeoLUZHeIxdXvTVziTx_PYA&s',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 11,
      title: 'Cui',
      description: 'Cui',
      category: 'Animales',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNP_PSabDmHwc1-sXCKw91YX5aXcQYVkD6g&s',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 12,
      title: 'Gallina',
      description: 'Gallina',
      category: 'Animales',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKogsY0EbpEXM2gZoT9x67eumNE8ljxyen1Q&s',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 13,
      title: 'Vaca',
      description: 'Vaca',
      category: 'Animales',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSp_9GI0cQkzicFh3UlR0A3bmwcBhE_rSG6A&s',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 14,
      title: 'Aguila',
      description: 'Aguila',
      category: 'Animales',
      imageUrl: 'https://media.licdn.com/dms/image/C4E12AQHFipxPCt55sw/article-cover_image-shrink_600_2000/0/1564155137152?e=2147483647&v=beta&t=MPTg7z-Yvc6sYxbBTirKars8U3XDLwCVmlOWgVk-kZ8',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 15,
      title: 'Capibara',
      description: 'Capibara',
      category: 'Animales',
      imageUrl: 'https://www.wradio.com.co/resizer/v2/https%3A%2F%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fprisaradioco%2F7ROZOQET5JBYLK3E53QGYNPYIE.jpg?auth=a9b8630b9740a3e8e04002e872de2423dcc03adc968dbd58f84c451284ccc710&height=800&width=1200&quality=70&smart=true',
      date: '2024-02-01',
      isFavorite: false
    },
    {
      id: 16,
      title: 'Hamster',
      description: 'Hamster',
      category: 'Animales',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtG8odsiXsXVJUpTGXRxgmkjNw-rIcrQMl1Q&s',
      date: '2024-02-01',
      isFavorite: false
    },
  ];

  categories: string[] = ['Naturaleza', 'Animales', 'Tecnología'];
  filteredImages: Image[] = [];
  favoriteImages: Image[] = [];
  selectedImage: Image | null = null;

  constructor(private favoriteImagesService: FavoriteImagesService) {
    this.filteredImages = this.images;
  }

  filterByCategory(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategory = selectElement.value;
    this.filteredImages = selectedCategory === 'all' ? this.images : this.images.filter(img => img.category === selectedCategory);
  }

  showDetails(image: Image): void {
    this.selectedImage = image;
  }

  closeDetails(): void {
    this.selectedImage = null;
  }


  toggleFavorite(image: any): void {
    if (this.isFavorite(image)) {
      this.favoriteImagesService.removeFavorite(image);
    } else {
      this.favoriteImagesService.addFavorite(image);
    }
  }

  isFavorite(image: any): boolean {
    return this.favoriteImagesService.getFavorites().includes(image);
  }
}
