import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service'

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css'],
  providers: [RequestsService]
})
export class ExternalComponent implements OnInit {

  public user: any;
  public userId: any;

  constructor(
      private __requestsService: RequestsService
  ) {
      this.userId = 1;
  }

  ngOnInit() {
      this.loadUser();
  }

  loadUser() {
      this.user = false;
      this.__requestsService.getUser(this.userId).subscribe(
          result => {
             this.user = result.data;
          },
          error => {
              console.log(<any>error);
          }
      );
  }

}
