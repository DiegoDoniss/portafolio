import { Component, OnInit } from '@angular/core';
import { faCoffee, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faHtml5, faLinux, faPython, faRedhat, faWordpress } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss'],
})
export class SkilsComponent implements OnInit {
  skils = [
    { icon: faHtml5, title: 'Front-end', content:['html-5','css-3','javascript','typescript','sass','bootstrap'] },
    { icon: faPython, title: 'Back-end', content:['Nodejs','Php','C#','Python'] },
    { icon: faAngular, title: 'Frameworks', content:['Angular','Flask','.Net Core'] },
    { icon: faDatabase, title: 'Bases de datos', content:['MySql','SqlServer','MariaDB'] },
    { icon: faLinux, title: 'Sistemas Operativos', content:['Windows','Linux'] },
    { icon: faWordpress, title: 'Diseño web', content:['Wordpress','Cpanel','Apache'] },
    ];
  constructor() {}

  ngOnInit(): void {}
}
