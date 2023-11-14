import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload/file-upload.service';
import { dummyRes } from './res.constant';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css'],
})
export class ShowResultComponent implements OnInit {
  // result = dummyRes;

  selectedFile!: File;

  constructor(
    private fileUploadService: FileUploadService,
    private http: HttpClient
  ) {
    this.fileUploadService.result.subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}
  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  uploadFile(): void {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http
      .post('https://plant.id/api/v3/identification', formData, {
        headers: {
          'Api-Key': 'hYb6s0zKmn3dmfcrRFdi7enOCvIA842ipmSL3pYqtPTnzHlJ3i',
        },
      })
      .subscribe((response) => {
        console.log('Plant.id API Response:', response);
        // Handle the response here
      });
  }
}
