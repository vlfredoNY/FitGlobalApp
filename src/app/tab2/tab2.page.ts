import { Component, inject } from '@angular/core';
import { IonHeader, IonLabel ,IonToolbar, IonItem , IonTitle, IonContent, IonButtons, IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Exercise, ExercisesService } from '../services/exercises.service';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule,  
    IonicModule, 
    // IonLabel, IonHeader, IonItem ,IonToolbar, IonTitle, IonContent, IonButtons, IonList, 
    ExploreContainerComponent,]
})
export class Tab2Page {

  exercises: Exercise[] = [];

  constructor(private ExercisesService: ExercisesService) {}

  ngOnInit() {
    this.loadExercises('back');  // Cargar ejercicios de espalda al iniciar
  }

  loadExercises(bodyPart: string) {
    this.ExercisesService.getExerciseByBodyPart(bodyPart)
    .then(exercises => {
      if (exercises) {
        this.exercises = exercises;
      console.log('Ejercicios cargados:', this.exercises);
      }      
    })
    .catch(error => {
      console.error('Error al cargar ejercicios..', error);
    });
  }

  onSelectChange(event: any) {
    const selectedBodyPart = event.detail.value; // Obtén el valor seleccionado
    this.loadExercises(selectedBodyPart); // Carga los ejercicios según el grupo muscular seleccionado
  }

trackById(index: number, item: Exercise): string  {
    console.log(item.id);
  return item.id;  
}

}
