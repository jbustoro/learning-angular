import { Component, OnInit } from "@angular/core";
import { UserContact } from "../models/userContact";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  public userContact: UserContact;

  constructor() {
    this.userContact = new UserContact("", "", "", "");
  }

  ngOnInit() {}

  onSubmit(form) {
    console.log("Submit event!");
    console.log(this.userContact);
    form.reset();
  }
}
