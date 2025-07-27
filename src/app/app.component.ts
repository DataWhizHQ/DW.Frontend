import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'DW.Frontend';

  query: string = '';
  isEating: boolean = false;

  onFileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.isEating = true;

      setTimeout(() => {
        this.isEating = false;
      }, 3000);
    }
  }

  submitQuery() {
    console.log('User Query:', this.query);
     }
}
