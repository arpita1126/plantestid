import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent implements OnInit {
  creditsTotal!: number;
  creditsUsed!: number;
  creditsRemaning!: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.creditsTotal = data.total;
    this.creditsUsed = data.used;
    this.creditsRemaning = this.creditsTotal - this.creditsUsed;
  }

  ngOnInit(): void {}
}
