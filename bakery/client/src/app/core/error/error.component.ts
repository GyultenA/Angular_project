import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})



export class ErrorComponent implements OnInit {
  message: string | undefined | null;
  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.errorService.apiError$.subscribe(err => {
      console.log(err);
      this.message = err
    })
  }

  get current(){
    return this.message;
  }
 
   


}
