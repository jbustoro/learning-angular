import { Component, OnInit } from "@angular/core";
import { RequestsService } from "../services/requests.service";

@Component({
  selector: "app-external",
  templateUrl: "./external.component.html",
  styleUrls: ["./external.component.css"],
  providers: [RequestsService]
})
export class ExternalComponent implements OnInit {
  public user: any;
  public userId: any;
  public date: any;

  public new_user: any;
  public saved_user: any;

  constructor(private _requestsService: RequestsService) {
    this.userId = 1;
    this.new_user = {
      name: "",
      job: ""
    };
  }

  ngOnInit() {
    this.date = new Date(2019, 2, 21);

    this.loadUser();
  }

  loadUser() {
    this.user = false;
    this._requestsService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form) {
    this._requestsService.addUser(this.new_user).subscribe(
      response => {
        this.saved_user = response;

        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
