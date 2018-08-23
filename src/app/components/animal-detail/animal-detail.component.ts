import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { GLOBAL } from '../../services/global';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
  providers: [
    AnimalService
  ]
})
export class AnimalDetailComponent implements OnInit {

  private url = GLOBAL.url;
  private animal: Animal;

  private showModal = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private animalService: AnimalService
  ) {
    this.animal = new Animal('', '', '');
   }

  ngOnInit() {
    this.getAnimalId();
  }

  private getAnimalId() {
    /* this._route.params.forEach((params: Params) => {
      const id = params['id'];
      console.log('id obtenido', id);
    }); */

    const id = this._route.snapshot.paramMap.get('id');
    this.animalService.getAnimal(id)
      .subscribe(
        result => {
          this.animal = result.animal;
        },
        error => {
          console.log(error);
        }
      );
  }

  private deleteAnimal() {
    const id = this._route.snapshot.paramMap.get('id');
    this.animalService.deleteAnimal(id)
      .subscribe(
        result => {
          const animal = result.animal;
          if (animal) {
            this._router.navigate(['/animals']);
          } else {
            alert('No se ha podido eliminar el animal.');
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  private showAlert() {
    this.showModal = true;
  }

  private hideModal() {
    this.showModal = false;
  }
}
