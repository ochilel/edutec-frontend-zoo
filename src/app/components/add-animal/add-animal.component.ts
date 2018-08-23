import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';
import { Router } from '../../../../node_modules/@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css'],
  providers: [
    AnimalService
  ]
})
export class AddAnimalComponent implements OnInit {

  @BlockUI('create-animal') blockUI: NgBlockUI;

  private animal: Animal;

  constructor(
    private animalService: AnimalService,
    private router: Router,
  ) {
    this.animal = new Animal('', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.blockUI.start('Loading....');
    this.animalService.createAnimal(this.animal)
      .subscribe(
        result => {
          if (result.animal) {
            this.blockUI.stop();
            this.router.navigate(['/animals']);
          } else {
            console.log(result);
          }
        },
        error => {
          alert(error._body);
        }
      );
  }

}
