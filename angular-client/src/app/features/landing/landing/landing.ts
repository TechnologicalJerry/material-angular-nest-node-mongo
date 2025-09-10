import { Component } from '@angular/core';
import { Header } from '../../../shared/components/header/header';
import { Footer } from '../../../shared/components/footer/footer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    Header,
    Footer,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatChipsModule,
    MatToolbarModule,
    MatDividerModule
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {

}
