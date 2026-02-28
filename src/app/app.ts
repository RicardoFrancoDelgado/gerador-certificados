import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from "./_components/primary-button/primary-button";

@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gerador-certificado');
  exibeNavBar: boolean = false;
}
