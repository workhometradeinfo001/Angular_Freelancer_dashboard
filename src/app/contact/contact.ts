import { Component } from '@angular/core';
import { InputComponent } from "../reusable/input";
import { LabelComponent } from "../reusable/label";
import { SelectComponent } from "../reusable/selectMenu";

@Component({
  imports: [InputComponent, LabelComponent, SelectComponent],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {

  upperHeading: string = "Contact US";
  upperText: string = "Have questions or need assistance? We're here to help. Reach out through the form below or contact us directly.";
  items= [
    "General Inquiry",
    "Support",
    "Dispute"
  ]

}
