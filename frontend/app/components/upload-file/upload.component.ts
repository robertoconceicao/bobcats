import {Component } from '@angular/core';
import {UploadService} from '../../services/upload.service';

@Component({
	selector: 'upload',
	template: `
	  <div>
	    <input type="file" (change)="onChange($event)"/>
	  </div>
	`,
	providers: [ UploadService ]
})
export class UploadComponent {
  constructor(private service:UploadService) {
    this.service.progress.subscribe(
      data => {
        console.log('progress = '+data);
      });
  }
  
  onChange(event) {
    console.log('onChange');
    var files = event.srcElement.files;
    console.log(files);
    this.service.makeFileRequest('http://localhost:3000/api/upload', [], files).subscribe(() => {
      console.log('sent');
    });
  }
}