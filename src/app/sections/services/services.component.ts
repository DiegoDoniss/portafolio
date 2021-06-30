import { Component, OnInit } from '@angular/core';
import { faBookReader, faDatabase, faDigitalTachograph, faTools } from '@fortawesome/free-solid-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  icons = [
    { icon: faJava, title: 'Desarrollo' },
    { icon: faDigitalTachograph, title: 'Páginas web' },
    { icon: faBookReader, title: 'Tutorias' },
    { icon: faTools, title: 'Mantenimiento' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
