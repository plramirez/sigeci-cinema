import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResponseModel } from '../utils/models/response';
import { IMovieClassificationVIew, IMovieGenderView, IMoviePost, IMoviesVIew } from '../utils/models/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly baseUrl = environment.API_URL;

  constructor( private httpClient: HttpClient) { }

  getMovieList(){
    return this.httpClient.get<IResponseModel<IMoviesVIew>>(`${this.baseUrl}/Movies`);
  }

  getMovieByName(movieName: string){
    return this.httpClient.get<IResponseModel<IMoviesVIew>>(`${this.baseUrl}/Movies/ByName`,{
      params: <any>{
        movieName: movieName
      }
    });
  }

  getMovieById(movieId: number){
    return this.httpClient.get<IResponseModel<IMoviesVIew>>(`${this.baseUrl}/Movies/ById`,{
      params: <any>{
        movieId: movieId
      }
    });
  }

  getMovieClassifications(){
    return this.httpClient.get<IResponseModel<IMovieClassificationVIew>>(`${this.baseUrl}/MovieClassification`);
  }

  getMovieGenders(){
    return this.httpClient.get<IResponseModel<IMovieGenderView>>(`${this.baseUrl}/MovieGender`);
  }

  insertMovie(model: IMoviePost){
    return this.httpClient.post<IResponseModel<IMoviePost>>(`${this.baseUrl}/Movies`,model);
  }

  updateMovie(model: IMoviePost){
    return this.httpClient.put<IResponseModel<IMoviePost>>(`${this.baseUrl}/Movies`,model);
  }

  deleteMovie(movieId: number, userId: number){
    return this.httpClient.delete<IResponseModel<IMoviesVIew>>(`${this.baseUrl}/Movies`,{
      params: <any>{
        movieId: movieId,
        userId: userId
      }
    });
  }

  deleteActorInMovie(acInMoId: number, userId: number){
    return this.httpClient.delete<IResponseModel<IMoviesVIew>>(`${this.baseUrl}/Movies/DeleteActorInMovie`,{
      params: <any>{
        acInMoId: acInMoId,
        userId: userId
      }
    });
  }

}
