import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations: [
    fadeIn
  ],
  providers: [
    AnimalService
  ],
})
export class AnimalsComponent implements OnInit {

  public animals: Animal[];

  constructor(
    private animalService: AnimalService,
  ) { }

  ngOnInit() {
    this.requestAnimals();
  }

  private requestAnimals() {
    this.animalService.getAnimals()
      .subscribe(
        result => {
          this.animals = result.animals;
        },
        error => {
          alert(error);
        }
      );
  }

}
