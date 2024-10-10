import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


export interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}


interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Exercise[];
}

@Injectable({
  providedIn: 'root'  
})
export class ExercisesService {
  // private url = 'https://v2.exercisedb.io/docs/json';
  // private apiUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0';
  private apiKey = 'd67951f722mshcb570235d07e217p137638jsnced2f5f15c48';
  private apiHost = 'exercisedb.p.rapidapi.com';

  constructor(private http: HttpClient){}
  
  httpClient = inject(HttpClient);

  getExerciseByBodyPart(bodyPart: string): Promise<Exercise[]> {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10&offset=0`;
    const headers = new HttpHeaders({
      'x-rapidapi-host': this.apiHost,
      'x-rapidapi-key': this.apiKey
    });
    return firstValueFrom(this.httpClient.get<Exercise[]>(url, {headers }))
    .then(response => {
      console.log('Respuesta de api: ', response);
      return response;
    })
}
}
