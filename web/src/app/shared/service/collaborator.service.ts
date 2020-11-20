import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Collaborator } from '../models/collaborator.model';

interface INewCollaborator{
  name: string;
  cpf: string;
  department: string;
  position: string;
}

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  constructor(private http: HttpClient) { }

  async list(): Promise<Collaborator[]> {
    try {
      return await this.http.get<Collaborator[]>(`${environment.baseUrl}/collaborators`).toPromise();
    } catch (error) {
      console.error(error);
      window.location.reload();
    }
  }

  async create(collaborator: INewCollaborator): Promise<Collaborator> {
    try {
      return await this.http.post<Collaborator>(`${environment.baseUrl}/collaborators`, collaborator).toPromise();
    } catch (error) {
      console.log(error)
      window.location.reload();
    }
  }

  async update(collaborator: Collaborator): Promise<Collaborator> {
    try {
      return await this.http.put<Collaborator>(`${environment.baseUrl}/collaborators/${collaborator.id}`, collaborator).toPromise();
    } catch (error) {
      console.log(error)
      window.location.reload();
    }
  }

  async delete(collaborator: Collaborator): Promise<Collaborator> {
    try {
      return await this.http.delete<any>(`${environment.baseUrl}/collaborators/${collaborator.id}`).toPromise();
    } catch (error) {
      console.log(error)
      window.location.reload();
    }
  }

}
