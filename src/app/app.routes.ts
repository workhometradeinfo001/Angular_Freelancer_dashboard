import { Routes } from '@angular/router';
import { Terms } from './terms/terms';
import { Middle } from './middle/middle';
import { Privacy } from './privacy/privacy';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path: '', component: Middle},
    {path: 'terms', component: Terms},
    {path: 'privacy', component: Privacy},
    {path: 'contact', component: Contact},
    // {path: '**', redirectTo: ''}
];
