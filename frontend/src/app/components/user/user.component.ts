import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  fileToUpload:File = null;
  imagesPresent:boolean = false;
  images:any[]; 
  
  constructor(private userService:UserService,private sanitizer:DomSanitizer) { }

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
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
