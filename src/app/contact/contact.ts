import { Component, inject } from '@angular/core';
import { InputComponent } from "../reusable/input";
import { LabelComponent } from "../reusable/label";
import { SelectComponent } from "../reusable/selectMenu";
import { TextareaComponent } from "../reusable/textarea";
import { RouterLinkActive } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Footer } from "../footer/footer";

@Component({
  imports: [InputComponent, LabelComponent, SelectComponent, TextareaComponent, Footer],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {

  upperHeading: string = "Contact US";
  upperText: string = "Have questions or need assistance? We're here to help. Reach out through the form below or contact us directly.";
  boxHeading: string = "Send Us a Message";
  boxText: string = "We’re always here for you. Whether you have a quick question or need hands-on support, drop us a message below.";
  items= [
    "General Inquiry",
    "Support",
    "Dispute"
  ]
  btnItems = [
    {
      heading: "Support",
      text: "support82197@gmail.com"
    },{
      heading: "Disputs",
      text: "disputs82197@gmail.com"
    },{
      heading: "General Inquiry",
      text: "generalinquiry82197@gmail.com"
    }
  ]

  secondBox = [
    {
      heading: "Registered Office",
      address: "30 N Gould St Ste R, Sheridan, WY 82801, United States"
    },{
      heading: "Operational Address",
      address: "E-496/4, Eest Shantibag, Brahmanbaria Sadar, Brahmanbaria, Bangladesh"
    },{
      heading: "Response Time",
      address: "We typically respond within 24-48 hours during business days."
    },
  ]

  thirdBox = [
    {
      heading: "Company",
      text: "Togo-Work LLC"
    },{
      heading: "Business Operations",
      text: "E-496/4, Eest Shantibag, Brahmanbaria Sadar, Brahmanbaria, Bangladesh"
    }
  ]


  private sanitizer = inject(DomSanitizer);
  private rawMapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d263.24485548466697!2d91.10450310697372!3d23.97569672257991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDU4JzMyLjUiTiA5McKwMDYnMTYuNSJF!5e0!3m2!1sen!2sbd!4v1788675148878!5m2!1sen!2sbd";
  mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.rawMapUrl);


}
