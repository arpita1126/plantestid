import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { FileUploadService } from './file-upload.service';
import { Router } from '@angular/router';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  selectedFile!: File;
  uploadForm!: FormGroup;
  visible: boolean = false;
  credits!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private fileUploadService: FileUploadService,
    private router: Router,
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      file: ['', Validators.required],
    });
  }

  // onFileChange(event: any): void {
  //   this.selectedFile = event.target.files[0];
  //   this.uploadForm.get('file')?.setValue(this.selectedFile);
  // }

  // uploadFile() {
  //   let res: any = this.fileUploadService.uploadForm(this.selectedFile);
  //   // this.router.navigate(['/result']);
  //   this.fileUploadService.result.next(res);
  // }
  // creditRemaning() {
  //   this.fileUploadService.getCreditsInfo();
  // }
  isFormValid() {
    return (
      this.uploadForm.valid &&
      (this.uploadForm.dirty || this.uploadForm.touched)
    );
  }

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
      .subscribe((response: any) => {
        console.log('Plant.id API Response:', response);
        if (response) {
          this.router.navigate(['/result']);
          this.fileUploadService.result.next(response);
        } else {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail:
              'The specified api key does not have sufficient number of available credits.',
          });
        }
      });
  }
  getCreditsInfo() {
    this.http
      .get('https://plant.id/api/v3/usage_info', {
        headers: {
          'Api-Key': 'hYb6s0zKmn3dmfcrRFdi7enOCvIA842ipmSL3pYqtPTnzHlJ3i',
        },
      })
      .subscribe((res) => {
        this.visible = true;
        console.log(res.credit_limits.total);

        this.credits = [
          {
            Total: res.credit_limits.total,
            Remainig: res.remaining.total,
            Used: res.used.total,
          },
        ];
      });
  }
}
