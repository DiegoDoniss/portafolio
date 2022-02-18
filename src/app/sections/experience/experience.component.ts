import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experience = [
    { title: 'Recaudadora Guatemalteca',subTitle:'Analista programador', date: '2021', content: 'Desarrollo de soluciones a la medida, mantenimiento de sistemas, automatización de procesos, implementados de proyectos de desarrollo' },
    { title: 'Kaizet',subTitle:'Desarrollador Web', date: '2021', content: 'Desarrollador principal' },
    { title: 'Offymarket',subTitle:'Freelancer', date: '2021', content: 'Asesoría, mantenimientos y desarrollo plataforma en Angular 10' },
    { title: 'Offymarket',subTitle:'Desarrollador Web', date: '2020-2021', content: 'Desarrollo de una aplicación para SAP B1 con distintos módulos, soporte técnico, mantenimientos a base de datos sql server, instalación de servidor linux centos para manejo de aplicaciones web con liferay' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
