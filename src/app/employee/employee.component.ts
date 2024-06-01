import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalAddEmployeeComponent } from '../modal-add-employee/modal-add-employee.component';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  @ViewChild(ModalAddEmployeeComponent) modal!: ModalAddEmployeeComponent;

  showModal: boolean = false;
  isAscending: boolean = true;
  selectedEditData: any = null;
  searchTerm: string = '';
  dummyDataEmployeeBackup: any = []
  dummyDataEmployeeAwal: any = []
  pagedDummyDataEmployee: any[] = [];

  itemsPerPage = 5; // Number of items to display per page
  currentPage = 1;


  dataHeaderTable = [
    'No', 'Username', 'First Name', 'Last Name', 'Email', 'Birth Date', 'Basic Salary', 'Status', 'Group', 'Description', 'Action'
  ]
  dummyDataEmployee = [
    {
      id: Math.random(),
      username: 'jdoe1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'jdoe1@example.com',
      birthDate: new Date('1990-01-01'),
      basicSalary: 50000,
      status: 'Active',
      group: 'A1',
      description: "tes"
    },
    {
      id: Math.random(),
      username: 'jdoe2',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jsmith@example.com',
      birthDate: new Date('1985-05-15'),
      basicSalary: 55000,
      status: 'Active',
      group: 'A2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'rwilliams',
      firstName: 'Robert',
      lastName: 'Williams',
      email: 'rwilliams@example.com',
      birthDate: new Date('1988-11-30'),
      basicSalary: 48000,
      status: 'Active',
      group: 'B1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'msmith',
      firstName: 'Mary',
      lastName: 'Smith',
      email: 'msmith@example.com',
      birthDate: new Date('1992-03-20'),
      basicSalary: 60000,
      status: 'Active',
      group: 'A1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'bjohnson',
      firstName: 'Barbara',
      lastName: 'Johnson',
      email: 'bjohnson@example.com',
      birthDate: new Date('1987-07-10'),
      basicSalary: 52000,
      status: 'Active',
      group: 'C1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'mbrown',
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'mbrown@example.com',
      birthDate: new Date('1986-04-25'),
      basicSalary: 58000,
      status: 'Active',
      group: 'B2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'jsmith2',
      firstName: 'James',
      lastName: 'Smith',
      email: 'jsmith2@example.com',
      birthDate: new Date('1995-08-12'),
      basicSalary: 51000,
      status: 'Active',
      group: 'A1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'charris',
      firstName: 'Christopher',
      lastName: 'Harris',
      email: 'charris@example.com',
      birthDate: new Date('1991-10-05'),
      basicSalary: 54000,
      status: 'Active',
      group: 'C2',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'aparker',
      firstName: 'Anna',
      lastName: 'Parker',
      email: 'aparker@example.com',
      birthDate: new Date('1989-12-18'),
      basicSalary: 59000,
      status: 'Active',
      group: 'B1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'rjohnson',
      firstName: 'Richard',
      lastName: 'Johnson',
      email: 'rjohnson@example.com',
      birthDate: new Date('1993-06-08'),
      basicSalary: 57000,
      status: 'Active',
      group: 'A2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'jwilson',
      firstName: 'Jennifer',
      lastName: 'Wilson',
      email: 'jwilson@example.com',
      birthDate: new Date('1984-09-03'),
      basicSalary: 62000,
      status: 'Active',
      group: 'C1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'asmith',
      firstName: 'Andrew',
      lastName: 'Smith',
      email: 'asmith@example.com',
      birthDate: new Date('1994-02-14'),
      basicSalary: 53000,
      status: 'Active',
      group: 'B2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'cmiller',
      firstName: 'Carol',
      lastName: 'Miller',
      email: 'cmiller@example.com',
      birthDate: new Date('1983-07-22'),
      basicSalary: 58000,
      status: 'Active',
      group: 'A1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'dthomas',
      firstName: 'David',
      lastName: 'Thomas',
      email: 'dthomas@example.com',
      birthDate: new Date('1990-11-17'),
      basicSalary: 55000,
      status: 'Active',
      group: 'C2',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'rkim',
      firstName: 'Rebecca',
      lastName: 'Kim',
      email: 'rkim@example.com',
      birthDate: new Date('1986-05-10'),
      basicSalary: 60000,
      status: 'Active',
      group: 'B1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'mjones',
      firstName: 'Michael',
      lastName: 'Jones',
      email: 'mjones@example.com',
      birthDate: new Date('1989-12-28'),
      basicSalary: 59000,
      status: 'Active',
      group: 'A2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'kkim',
      firstName: 'Kevin',
      lastName: 'Kim',
      email: 'kkim@example.com',
      birthDate: new Date('1993-08-05'),
      basicSalary: 57000,
      status: 'Active',
      group: 'C1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'nwhite',
      firstName: 'Nicole',
      lastName: 'White',
      email: 'nwhite@example.com',
      birthDate: new Date('1987-04-12'),
      basicSalary: 62000,
      status: 'Active',
      group: 'B2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'bbrown',
      firstName: 'Brian',
      lastName: 'Brown',
      email: 'bbrown@example.com',
      birthDate: new Date('1985-10-30'),
      basicSalary: 54000,
      status: 'Active',
      group: 'A1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'ljackson',
      firstName: 'Laura',
      lastName: 'Jackson',
      email: 'ljackson@example.com',
      birthDate: new Date('1991-03-25'),
      basicSalary: 56000,
      status: 'Active',
      group: 'C2',
      description: "example"
    }, {
      id: Math.random(),
      username: 'tnguyen',
      firstName: 'Theresa',
      lastName: 'Nguyen',
      email: 'tnguyen@example.com',
      birthDate: new Date('1988-09-12'),
      basicSalary: 61000,
      status: 'Active',
      group: 'A2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'mlee',
      firstName: 'Michelle',
      lastName: 'Lee',
      email: 'mlee@example.com',
      birthDate: new Date('1990-04-05'),
      basicSalary: 54000,
      status: 'Active',
      group: 'B1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'jjohnson',
      firstName: 'Jessica',
      lastName: 'Johnson',
      email: 'jjohnson@example.com',
      birthDate: new Date('1987-12-18'),
      basicSalary: 58000,
      status: 'Active',
      group: 'C1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'ddavis',
      firstName: 'Daniel',
      lastName: 'Davis',
      email: 'ddavis@example.com',
      birthDate: new Date('1992-06-30'),
      basicSalary: 56000,
      status: 'Active',
      group: 'A1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'srodriguez',
      firstName: 'Samantha',
      lastName: 'Rodriguez',
      email: 'srodriguez@example.com',
      birthDate: new Date('1989-03-15'),
      basicSalary: 59000,
      status: 'Active',
      group: 'B2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'tthomas',
      firstName: 'Tyler',
      lastName: 'Thomas',
      email: 'tthomas@example.com',
      birthDate: new Date('1986-11-05'),
      basicSalary: 55000,
      status: 'Active',
      group: 'C2',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'afisher',
      firstName: 'Angela',
      lastName: 'Fisher',
      email: 'afisher@example.com',
      birthDate: new Date('1993-07-20'),
      basicSalary: 60000,
      status: 'Active',
      group: 'A2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'pbrown',
      firstName: 'Patrick',
      lastName: 'Brown',
      email: 'pbrown@example.com',
      birthDate: new Date('1984-02-10'),
      basicSalary: 57000,
      status: 'Active',
      group: 'B1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'kroberts',
      firstName: 'Karen',
      lastName: 'Roberts',
      email: 'kroberts@example.com',
      birthDate: new Date('1990-09-25'),
      basicSalary: 62000,
      status: 'Active',
      group: 'C1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'nwright',
      firstName: 'Nathan',
      lastName: 'Wright',
      email: 'nwright@example.com',
      birthDate: new Date('1985-04-17'),
      basicSalary: 53000,
      status: 'Active',
      group: 'A1',
      description: "test"
    }, {
      id: Math.random(),
      username: 'egonzalez',
      firstName: 'Emily',
      lastName: 'Gonzalez',
      email: 'egonzalez@example.com',
      birthDate: new Date('1989-08-22'),
      basicSalary: 61000,
      status: 'Active',
      group: 'B2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'lcollins',
      firstName: 'Linda',
      lastName: 'Collins',
      email: 'lcollins@example.com',
      birthDate: new Date('1987-03-12'),
      basicSalary: 54000,
      status: 'Active',
      group: 'A1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'rwood',
      firstName: 'Ryan',
      lastName: 'Wood',
      email: 'rwood@example.com',
      birthDate: new Date('1992-11-28'),
      basicSalary: 58000,
      status: 'Active',
      group: 'C2',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'jhall',
      firstName: 'Julie',
      lastName: 'Hall',
      email: 'jhall@example.com',
      birthDate: new Date('1986-06-20'),
      basicSalary: 56000,
      status: 'Active',
      group: 'B1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'jrodriguez',
      firstName: 'Jonathan',
      lastName: 'Rodriguez',
      email: 'jrodriguez@example.com',
      birthDate: new Date('1989-01-15'),
      basicSalary: 59000,
      status: 'Active',
      group: 'A2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'syoung',
      firstName: 'Sandra',
      lastName: 'Young',
      email: 'syoung@example.com',
      birthDate: new Date('1993-10-05'),
      basicSalary: 55000,
      status: 'Active',
      group: 'C1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'jwalker',
      firstName: 'Jacob',
      lastName: 'Walker',
      email: 'jwalker@example.com',
      birthDate: new Date('1984-05-20'),
      basicSalary: 60000,
      status: 'Active',
      group: 'B2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'mrobertson',
      firstName: 'Melissa',
      lastName: 'Robertson',
      email: 'mrobertson@example.com',
      birthDate: new Date('1990-02-10'),
      basicSalary: 57000,
      status: 'Active',
      group: 'A1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'ehernandez',
      firstName: 'Eric',
      lastName: 'Hernandez',
      email: 'ehernandez@example.com',
      birthDate: new Date('1985-09-25'),
      basicSalary: 62000,
      status: 'Active',
      group: 'C2',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'ajohnston',
      firstName: 'Amy',
      lastName: 'Johnston',
      email: 'ajohnston@example.com',
      birthDate: new Date('1991-04-17'),
      basicSalary: 53000,
      status: 'Active',
      group: 'B1',
      description: "dummy"
    }, {
      id: Math.random(),
      username: 'cmiller',
      firstName: 'Christopher',
      lastName: 'Miller',
      email: 'cmiller@example.com',
      birthDate: new Date('1988-09-12'),
      basicSalary: 61000,
      status: 'Active',
      group: 'A1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'bcooper',
      firstName: 'Brittany',
      lastName: 'Cooper',
      email: 'bcooper@example.com',
      birthDate: new Date('1987-03-05'),
      basicSalary: 54000,
      status: 'Active',
      group: 'B2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'trossi',
      firstName: 'Taylor',
      lastName: 'Rossi',
      email: 'trossi@example.com',
      birthDate: new Date('1992-11-28'),
      basicSalary: 58000,
      status: 'Active',
      group: 'C1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'lphillips',
      firstName: 'Lauren',
      lastName: 'Phillips',
      email: 'lphillips@example.com',
      birthDate: new Date('1986-06-20'),
      basicSalary: 56000,
      status: 'Active',
      group: 'A2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'rwright',
      firstName: 'Rebecca',
      lastName: 'Wright',
      email: 'rwright@example.com',
      birthDate: new Date('1989-01-15'),
      basicSalary: 59000,
      status: 'Active',
      group: 'B1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'dmartin',
      firstName: 'David',
      lastName: 'Martin',
      email: 'dmartin@example.com',
      birthDate: new Date('1993-10-05'),
      basicSalary: 55000,
      status: 'Active',
      group: 'C2',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'jramirez',
      firstName: 'Julia',
      lastName: 'Ramirez',
      email: 'jramirez@example.com',
      birthDate: new Date('1984-05-20'),
      basicSalary: 60000,
      status: 'Active',
      group: 'A1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'mstewart',
      firstName: 'Matthew',
      lastName: 'Stewart',
      email: 'mstewart@example.com',
      birthDate: new Date('1990-02-10'),
      basicSalary: 57000,
      status: 'Active',
      group: 'B2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'mlopez',
      firstName: 'Megan',
      lastName: 'Lopez',
      email: 'mlopez@example.com',
      birthDate: new Date('1985-09-25'),
      basicSalary: 62000,
      status: 'Active',
      group: 'C1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'mgray',
      firstName: 'Marcus',
      lastName: 'Gray',
      email: 'mgray@example.com',
      birthDate: new Date('1991-04-17'),
      basicSalary: 53000,
      status: 'Active',
      group: 'A2',
      description: "dummy"
    }, {
      id: Math.random(),
      username: 'jrivera',
      firstName: 'Jessica',
      lastName: 'Rivera',
      email: 'jrivera@example.com',
      birthDate: new Date('1988-09-12'),
      basicSalary: 61000,
      status: 'Active',
      group: 'B1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'krobinson',
      firstName: 'Kevin',
      lastName: 'Robinson',
      email: 'krobinson@example.com',
      birthDate: new Date('1987-03-05'),
      basicSalary: 54000,
      status: 'Active',
      group: 'C2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'mward',
      firstName: 'Megan',
      lastName: 'Ward',
      email: 'mward@example.com',
      birthDate: new Date('1992-11-28'),
      basicSalary: 58000,
      status: 'Active',
      group: 'A1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'cwatson',
      firstName: 'Catherine',
      lastName: 'Watson',
      email: 'cwatson@example.com',
      birthDate: new Date('1986-06-20'),
      basicSalary: 56000,
      status: 'Active',
      group: 'B2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'vhill',
      firstName: 'Vincent',
      lastName: 'Hill',
      email: 'vhill@example.com',
      birthDate: new Date('1989-01-15'),
      basicSalary: 59000,
      status: 'Active',
      group: 'C1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'asanchez',
      firstName: 'Alex',
      lastName: 'Sanchez',
      email: 'asanchez@example.com',
      birthDate: new Date('1993-10-05'),
      basicSalary: 55000,
      status: 'Active',
      group: 'A2',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'cnguyen',
      firstName: 'Christina',
      lastName: 'Nguyen',
      email: 'cnguyen@example.com',
      birthDate: new Date('1984-05-20'),
      basicSalary: 60000,
      status: 'Active',
      group: 'B1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'gscott',
      firstName: 'Gabriel',
      lastName: 'Scott',
      email: 'gscott@example.com',
      birthDate: new Date('1990-02-10'),
      basicSalary: 57000,
      status: 'Active',
      group: 'C2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'bhernandez',
      firstName: 'Brianna',
      lastName: 'Hernandez',
      email: 'bhernandez@example.com',
      birthDate: new Date('1985-09-25'),
      basicSalary: 62000,
      status: 'Active',
      group: 'A1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'jmartinez',
      firstName: 'Jasmine',
      lastName: 'Martinez',
      email: 'jmartinez@example.com',
      birthDate: new Date('1991-04-17'),
      basicSalary: 53000,
      status: 'Active',
      group: 'B2',
      description: "dummy"
    }, {
      id: Math.random(),
      username: 'awilson',
      firstName: 'Adam',
      lastName: 'Wilson',
      email: 'awilson@example.com',
      birthDate: new Date('1988-09-12'),
      basicSalary: 61000,
      status: 'Active',
      group: 'C1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'lroberts',
      firstName: 'Lisa',
      lastName: 'Roberts',
      email: 'lroberts@example.com',
      birthDate: new Date('1987-03-05'),
      basicSalary: 54000,
      status: 'Active',
      group: 'A2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'jnelson',
      firstName: 'Jessica',
      lastName: 'Nelson',
      email: 'jnelson@example.com',
      birthDate: new Date('1992-11-28'),
      basicSalary: 58000,
      status: 'Active',
      group: 'B1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'csanchez',
      firstName: 'Carlos',
      lastName: 'Sanchez',
      email: 'csanchez@example.com',
      birthDate: new Date('1986-06-20'),
      basicSalary: 56000,
      status: 'Active',
      group: 'C2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'mjones',
      firstName: 'Melissa',
      lastName: 'Jones',
      email: 'mjones@example.com',
      birthDate: new Date('1989-01-15'),
      basicSalary: 59000,
      status: 'Active',
      group: 'A1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'dcooper',
      firstName: 'Daniel',
      lastName: 'Cooper',
      email: 'dcooper@example.com',
      birthDate: new Date('1993-10-05'),
      basicSalary: 55000,
      status: 'Active',
      group: 'B2',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'kward',
      firstName: 'Kristen',
      lastName: 'Ward',
      email: 'kward@example.com',
      birthDate: new Date('1984-05-20'),
      basicSalary: 60000,
      status: 'Active',
      group: 'C1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'jrogers',
      firstName: 'Julian',
      lastName: 'Rogers',
      email: 'jrogers@example.com',
      birthDate: new Date('1990-02-10'),
      basicSalary: 57000,
      status: 'Active',
      group: 'A2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'kcook',
      firstName: 'Kristin',
      lastName: 'Cook',
      email: 'kcook@example.com',
      birthDate: new Date('1985-09-25'),
      basicSalary: 62000,
      status: 'Active',
      group: 'B1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'cgray',
      firstName: 'Christine',
      lastName: 'Gray',
      email: 'cgray@example.com',
      birthDate: new Date('1991-04-17'),
      basicSalary: 53000,
      status: 'Active',
      group: 'C2',
      description: "dummy"
    }, {
      id: Math.random(),
      username: 'dphillips',
      firstName: 'Diana',
      lastName: 'Phillips',
      email: 'dphillips@example.com',
      birthDate: new Date('1988-09-12'),
      basicSalary: 61000,
      status: 'Active',
      group: 'A1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'dward',
      firstName: 'Dennis',
      lastName: 'Ward',
      email: 'dward@example.com',
      birthDate: new Date('1987-03-05'),
      basicSalary: 54000,
      status: 'Active',
      group: 'B2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'mgonzalez',
      firstName: 'Miguel',
      lastName: 'Gonzalez',
      email: 'mgonzalez@example.com',
      birthDate: new Date('1992-11-28'),
      basicSalary: 58000,
      status: 'Active',
      group: 'C1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'tlong',
      firstName: 'Tiffany',
      lastName: 'Long',
      email: 'tlong@example.com',
      birthDate: new Date('1986-06-20'),
      basicSalary: 56000,
      status: 'Active',
      group: 'A2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'mmorgan',
      firstName: 'Matthew',
      lastName: 'Morgan',
      email: 'mmorgan@example.com',
      birthDate: new Date('1989-01-15'),
      basicSalary: 59000,
      status: 'Active',
      group: 'B1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'ljackson',
      firstName: 'Lillian',
      lastName: 'Jackson',
      email: 'ljackson@example.com',
      birthDate: new Date('1993-10-05'),
      basicSalary: 55000,
      status: 'Active',
      group: 'C2',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'ahoward',
      firstName: 'Ashley',
      lastName: 'Howard',
      email: 'ahoward@example.com',
      birthDate: new Date('1984-05-20'),
      basicSalary: 60000,
      status: 'Active',
      group: 'A1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'rbell',
      firstName: 'Rachel',
      lastName: 'Bell',
      email: 'rbell@example.com',
      birthDate: new Date('1990-02-10'),
      basicSalary: 57000,
      status: 'Active',
      group: 'B2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'gthompson',
      firstName: 'Gary',
      lastName: 'Thompson',
      email: 'gthompson@example.com',
      birthDate: new Date('1985-09-25'),
      basicSalary: 62000,
      status: 'Active',
      group: 'C1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'jhoward',
      firstName: 'Jennifer',
      lastName: 'Howard',
      email: 'jhoward@example.com',
      birthDate: new Date('1991-04-17'),
      basicSalary: 53000,
      status: 'Active',
      group: 'A2',
      description: "dummy"
    }, {
      id: Math.random(),
      username: 'rrodriguez',
      firstName: 'Robert',
      lastName: 'Rodriguez',
      email: 'rrodriguez@example.com',
      birthDate: new Date('1988-09-12'),
      basicSalary: 61000,
      status: 'Active',
      group: 'B1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'cwilliams',
      firstName: 'Courtney',
      lastName: 'Williams',
      email: 'cwilliams@example.com',
      birthDate: new Date('1987-03-05'),
      basicSalary: 54000,
      status: 'Active',
      group: 'C2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'mhill',
      firstName: 'Megan',
      lastName: 'Hill',
      email: 'mhill@example.com',
      birthDate: new Date('1992-11-28'),
      basicSalary: 58000,
      status: 'Active',
      group: 'A1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'sgonzales',
      firstName: 'Sarah',
      lastName: 'Gonzales',
      email: 'sgonzales@example.com',
      birthDate: new Date('1986-06-20'),
      basicSalary: 56000,
      status: 'Active',
      group: 'B2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'nlopez',
      firstName: 'Natalie',
      lastName: 'Lopez',
      email: 'nlopez@example.com',
      birthDate: new Date('1989-01-15'),
      basicSalary: 59000,
      status: 'Active',
      group: 'C1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'rjohnson',
      firstName: 'Ryan',
      lastName: 'Johnson',
      email: 'rjohnson@example.com',
      birthDate: new Date('1993-10-05'),
      basicSalary: 55000,
      status: 'Active',
      group: 'A2',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'ebrown',
      firstName: 'Elizabeth',
      lastName: 'Brown',
      email: 'ebrown@example.com',
      birthDate: new Date('1984-05-20'),
      basicSalary: 60000,
      status: 'Active',
      group: 'B1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'bwright',
      firstName: 'Benjamin',
      lastName: 'Wright',
      email: 'bwright@example.com',
      birthDate: new Date('1990-02-10'),
      basicSalary: 57000,
      status: 'Active',
      group: 'C2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'rlee',
      firstName: 'Rachel',
      lastName: 'Lee',
      email: 'rlee@example.com',
      birthDate: new Date('1985-09-25'),
      basicSalary: 62000,
      status: 'Active',
      group: 'A1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'tcooper',
      firstName: 'Thomas',
      lastName: 'Cooper',
      email: 'tcooper@example.com',
      birthDate: new Date('1991-04-17'),
      basicSalary: 53000,
      status: 'Active',
      group: 'B2',
      description: "dummy"
    }, {
      id: Math.random(),
      username: 'rward',
      firstName: 'Rebecca',
      lastName: 'Ward',
      email: 'rward@example.com',
      birthDate: new Date('1988-09-12'),
      basicSalary: 61000,
      status: 'Active',
      group: 'C1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'bphillips',
      firstName: 'Brandon',
      lastName: 'Phillips',
      email: 'bphillips@example.com',
      birthDate: new Date('1987-03-05'),
      basicSalary: 54000,
      status: 'Active',
      group: 'A2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'cbrown',
      firstName: 'Caroline',
      lastName: 'Brown',
      email: 'cbrown@example.com',
      birthDate: new Date('1992-11-28'),
      basicSalary: 58000,
      status: 'Active',
      group: 'B1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'mperez',
      firstName: 'Maria',
      lastName: 'Perez',
      email: 'mperez@example.com',
      birthDate: new Date('1986-06-20'),
      basicSalary: 56000,
      status: 'Active',
      group: 'C2',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'jmartin',
      firstName: 'Julia',
      lastName: 'Martin',
      email: 'jmartin@example.com',
      birthDate: new Date('1989-01-15'),
      basicSalary: 59000,
      status: 'Active',
      group: 'A1',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'lgonzalez',
      firstName: 'Luis',
      lastName: 'Gonzalez',
      email: 'lgonzalez@example.com',
      birthDate: new Date('1993-10-05'),
      basicSalary: 55000,
      status: 'Active',
      group: 'B2',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'jroberts',
      firstName: 'Julie',
      lastName: 'Roberts',
      email: 'jroberts@example.com',
      birthDate: new Date('1984-05-20'),
      basicSalary: 60000,
      status: 'Active',
      group: 'C1',
      description: "dummy"
    },
    {
      id: Math.random(),
      username: 'lmiller',
      firstName: 'Lucas',
      lastName: 'Miller',
      email: 'lmiller@example.com',
      birthDate: new Date('1990-02-10'),
      basicSalary: 57000,
      status: 'Active',
      group: 'A2',
      description: "test"
    },
    {
      id: Math.random(),
      username: 'jmartinez',
      firstName: 'Jorge',
      lastName: 'Martinez',
      email: 'jmartinez@example.com',
      birthDate: new Date('1985-09-25'),
      basicSalary: 62000,
      status: 'Active',
      group: 'B1',
      description: "example"
    },
    {
      id: Math.random(),
      username: 'esmith',
      firstName: 'Emma',
      lastName: 'Smith',
      email: 'esmith@example.com',
      birthDate: new Date('1991-04-17'),
      basicSalary: 53000,
      status: 'Active',
      group: 'C2',
      description: "dummy"
    },

  ];
  totalPages = Math.ceil(this.dummyDataEmployee.length / this.itemsPerPage);

  formatDate(date: Date): string {
    return format(date, 'dd MMMM yyyy');
  }

  openModal() {
    this.showModal = true;
  }

  onCloseModal(event: boolean) {
    this.showModal = event;
    this.selectedEditData = null
  }

  employeeAdded(event: any) {
    this.dummyDataEmployee.unshift(event)
    this.updateDummyDataBackup();
    this.updatePagination();
  }

  employeeEditedAdd(event: any) {
    const editedEmployeeIndex = this.dummyDataEmployee.findIndex(item => item.id === event.id);
    if (editedEmployeeIndex !== -1) {
      // Jika data dengan ID yang sama ditemukan, lakukan penggantian data
      this.dummyDataEmployee[editedEmployeeIndex] = event;
    } else {
      console.log('Data not found for edit.');
    }
  }

  deleteData(id: number, username: string) {
    Swal.fire({
      title: 'Konfirmasi?',
      text: `Apakah anda ingin menghapus username ${username}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dummyDataEmployee = this.dummyDataEmployee.filter(item => item.id !== id);
        this.updateDummyDataBackup();
        this.updatePagination();
        Swal.fire(
          'Terhapus!',
          'Data Anda telah dihapus.',
          'success'
        );
      }
    });
  }

  editData(item: any) {
    this.selectedEditData = item
    this.showModal = true;
  }

  onPageChanged(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }

  constructor(private router: Router) {
    // Simpan salinan dari data awal ke dummyDataEmployeeBackup saat komponen dimuat
    this.dummyDataEmployeeBackup = [...this.dummyDataEmployee];
    this.dummyDataEmployeeAwal = [...this.dummyDataEmployee];
    this.updatePagination()
  }

  searchData() {
    if (this.searchTerm.trim() !== '') {
      this.dummyDataEmployee = this.dummyDataEmployee.filter(item => {
        return item.username.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.resetData();
    }
    this.updateDummyDataBackup(); // Perbarui dummyDataEmployeeBackup setelah pencarian
    this.updatePagination();
  }

  sortUsername() {
    this.isAscending = !this.isAscending;
    this.dummyDataEmployee.sort((a, b) => {
      // Ambil nilai username dan ubah ke huruf kecil agar tidak case-sensitive
      const usernameA = a.username.toLowerCase();
      const usernameB = b.username.toLowerCase();

      // Tentukan arah pengurutan
      if (usernameA < usernameB) {
        return this.isAscending ? -1 : 1;
      }
      if (usernameA > usernameB) {
        return this.isAscending ? 1 : -1;
      }
      return 0;
    });
    this.updateDummyDataBackup(); // Perbarui dummyDataEmployeeBackup setelah pencarian
    this.updatePagination();
  }

  resetData() {
    this.dummyDataEmployee = this.dummyDataEmployeeAwal;
    this.updateDummyDataBackup(); // Perbarui dummyDataEmployeeBackup setelah reset
    this.updatePagination();
  }

  updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedDummyDataEmployee = this.dummyDataEmployeeBackup.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.dummyDataEmployeeBackup.length / this.itemsPerPage);
  }

  updateDummyDataBackup() {
    this.dummyDataEmployeeBackup = [...this.dummyDataEmployee];
  }

  logout() {
    const cekLocalStorage = localStorage.getItem('username')
    if (cekLocalStorage) {
      localStorage.clear();
      this.router.navigate(["/login"])
    }
  }

}
