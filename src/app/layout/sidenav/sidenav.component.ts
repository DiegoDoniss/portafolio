import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAddressCard,
  faBars,
  faEnvelopeOpen,
  faHome,
  faLaptopCode,
  faTimes,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  active: boolean = false;
  menu = faBars;
  sections = [
    { title: 'Inicio', url: '#home', icon: faHome },
    { title: 'Acerca de mi', url: '#about', icon: faAddressCard },
    { title: 'Servicios', url: '#services', icon: faUserTie },
    { title: 'Portafolio', url: '#projects', icon: faLaptopCode },
    { title: 'Contactame', url: '#contact', icon: faEnvelopeOpen }
  ];
  redes = [
    { icon: faFacebook, url: 'https://facebook.com/diego.donis3/' },
    { icon: faLinkedin, url: 'https://linkedin.com/in/diego-donis' },
    { icon: faWhatsapp, url: 'https://wa.me/50245262624' },
  ];

  constructor() {}

  ngOnInit(): void {}

  side() {
    this.active ? (this.menu = faBars) : (this.menu = faTimes);
    this.active = !this.active;
  }
}
