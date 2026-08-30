import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Footer, RouterLink],
  selector: 'app-middle',
  styleUrl: './middle.css',
  templateUrl: './middle.html',
})
export class Middle {}
