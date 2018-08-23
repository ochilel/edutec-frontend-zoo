import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css'],
  providers: [
    AnimalService 
  ]
})
export class EditAnimalComponent implements OnInit {

  public animal: Animal;
  private defaultAnimal: Animal;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private router: Router
  ) {
    this.animal = new Animal('', '', '');
  }

  ngOnInit() {
    this.getAnimal();
  }

  private getAnimal() {
    const id = this.route.snapshot.paramMap.get('id');
    this.animalService.getAnimal(id)
      .subscribe(
        result => {
          this.animal = result.animal;
          this.defaultAnimal = JSON.parse(JSON.stringify(this.animal));
        },
        error => {
          console.log(error);
        }
      );
  }

  onSubmit() {
    if (JSON.stringify(this.animal).toLowerCase() === JSON.stringify(this.defaultAnimal).toLowerCase()) {
      alert('No has realizado ningun cambio');
    } else {
      this.animalService.updateAnimal(this.animal)
        .subscribe(
          result => {
            const animal = result.animal;
            if (animal) {
              this.router.navigate(['/animal', this.animal._id]);
            } else {
              alert('No se ha podido editar tu animal');
            }
          },
          error => {
            console.log(error);
          }
        );
    }
  }

}
