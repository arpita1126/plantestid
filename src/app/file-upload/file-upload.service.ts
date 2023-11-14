import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  result = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private messageService: MessageService
  ) {}

  uploadForm(uploadForm: any) {
    const formData = new FormData();
    formData.append('file', uploadForm.get('file').value);
    this.http
      .post('https://plant.id/api/v3/identification', formData, {
        headers: {
          'Api-Key': 'hYb6s0zKmn3dmfcrRFdi7enOCvIA842ipmSL3pYqtPTnzHlJ3i',
        },
      })
      .subscribe((response) => {
        console.log('Plant.id API Response:', response);
        return response;
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
        // this.messageService.add({
        //   severity: 'success',
        //   summary: 'Success',
        //   detail: res.,
        // });
        // return res;
      });
  }
}
