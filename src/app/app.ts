import { Component } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-forkjoin';

  data1: any = {};
  data2: any = {};
  data3: any = {};
  data4: any = {};
  isLoadingResults = true;
  error?: string;

  constructor(private api: RestApiService) {
    this.getData();
  }

  getData() {
    this.api.getData()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.data1 = res[0];
          this.data2 = res[1];
          this.data3 = res[2];
          this.data4 = res[3];
          this.isLoadingResults = false;
        },
        error: (err) => (this.error = 'Failed to load data')
      });
  }
}
