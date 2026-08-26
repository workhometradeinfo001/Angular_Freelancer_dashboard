import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {

  footerLeftData = [
    {
      id: 1,
      data: "Terms",
      route: "terms"
    },
    {
      id: 2,
      data: "Privacy",
      route: "privacy"
    },
    {
      id: 3,
      data: "Contact",
      route: "contact"
    }
  ]

}
