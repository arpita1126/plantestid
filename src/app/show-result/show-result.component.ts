import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload/file-upload.service';
import { dummyRes } from './res.constant';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css'],
})
export class ShowResultComponent implements OnInit {
  result = dummyRes;

  selectedFile!: File;

  constructor(
    private fileUploadService: FileUploadService,
    private http: HttpClient,
    private router: Router
  ) {
    this.fileUploadService.result.subscribe((res) => {
      // this.result = res;
    });
  }

  ngOnInit(): void {}

  roundProbability(x: number) {
    return x.toFixed(2);
  }
  routetofiles() {
    this.router.navigate(['/file']);
  }
}
