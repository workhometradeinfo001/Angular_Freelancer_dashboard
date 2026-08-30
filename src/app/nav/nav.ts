import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {

  title: string= "Togo-Work";
  profileMenu = [
    {
      id: 1,
      item: "Verify ID",
      icon: "fa-brands fa-expeditedssl me-1",
      route: "verifyid"
    },
     {
      id: 2,
      item: "Profile",
      icon: "fa-regular fa-circle-user me-1",
      route: "profile"
    },
     {
      id: 3,
      item: "Setting",
      icon: "fa-solid fa-gear me-1",
      route: "setting"
    },
     {
      id: 4,
      item: "Logout",
      icon: "fa-solid fa-arrow-right-from-bracket me-1",
      route: "logout"
    }

  ]

}
