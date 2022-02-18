import { Component, OnInit } from '@angular/core';
import { faCloud, faCoffee, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faHtml5, faLinux, faPython, faRedhat, faWordpress } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss'],
})
export class SkilsComponent implements OnInit {
  skils = [
    { icon: faHtml5, title: 'Front-end', content: ['html-5', 'css-3', 'javascript', 'typescript', 'sass', 'bootstrap'] },
    { icon: faPython, title: 'Back-end', content: ['Nodejs', 'Php', 'C#', 'Python, Go'] },
    { icon: faAngular, title: 'Frameworks', content: ['Angular', 'Flask', '.Net Core', 'React'] },
    { icon: faDatabase, title: 'Bases de datos', content: ['SqlServer', 'MariaDB', 'MongoDB'] },
    { icon: faLinux, title: 'Sistemas Operativos', content: ['Windows', 'Linux'] },
    { icon: faCloud, title: 'Computacion en la nube', content: ['EC2', 'RDS', 'LAMDA', 'Server Less', 'Firebase', 'Azure'] },
    { icon: faWordpress, title: 'Diseño web', content: ['Wordpress', 'Cpanel', 'Apache'] },
  ];
  constructor() { }

  ngOnInit(): void { }
}
