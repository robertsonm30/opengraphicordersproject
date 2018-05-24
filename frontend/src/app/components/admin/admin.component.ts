import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  fileToUpload:File = null;
  imagesPresent:boolean = false;
  images:any[]; 
  constructor(private userService:UserService, private sanitizer:DomSanitizer) { }
  ngOnInit() {
    this.getImages()
  }

  handleFileInput(files:FileList){
    
    this.fileToUpload = files.item(0);
    this.userService.uploadImage(this.fileToUpload).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  getImages(){
    this.userService.getUploadedImages().subscribe(
      (data) => {
        this.images = data['images'];
        this.imagesPresent = true;
        console.log(this.images)
      },
      (error) => {
        console.log(error)
      }
    )
  }
  getImageUrl(url){
 
      url = 'http://localhost:8000'+url; 
      console.log(this.sanitizer)
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
