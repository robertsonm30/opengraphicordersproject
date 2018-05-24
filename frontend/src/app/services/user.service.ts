import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "http://localhost:8000/api/";

  constructor(private  http:HttpClient) { }

  uploadImage(file:File){
    const fd:FormData = new FormData();
    fd.append('file',file,file.name);
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'multipart/form-data',
        'X-Requested-With':'XMLHttpRequest'
      })
    };
    return this.http.post(this.url+'uploadImage',fd);
  }
  getUploadedImages(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'multipart/form-data',
        'X-Requested-With':'XMLHttpRequest'
      })
    };
    return this.http.get(this.url+'images');
  }
}
