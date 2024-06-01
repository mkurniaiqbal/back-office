import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modal-add-employee',
  templateUrl: './modal-add-employee.component.html',
  styleUrls: ['./modal-add-employee.component.css']
})
export class ModalAddEmployeeComponent implements OnChanges {
  @Input() showModal: any;
  @Input() dataEditModal: any;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() employeeAddedModal = new EventEmitter<any>();
  @Output() employeeEditedModal = new EventEmitter<any>();

  cekValid: any = {
    validUsername: false,
    validFirstName: false,
    validLastName: false,
    validEmail: false,
    validBirthDate: false,
    validBasicSalary: false,
    validStatus: false,
    validGroup: false,
    validDescription: false,

  }

  cekValidFirst: boolean = false;
  id: number = Math.random();
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  birthDate: string | null = new Date().toISOString().substr(0, 10);
  basicSalary: number = 0;
  status: string = '';
  group: string = '';
  description: string = '';

  ngOnChanges() {
    if (this.dataEditModal) {
      // Update state dengan nilai dari dataEditModal
      this.username = this.dataEditModal.username || '';
      this.firstName = this.dataEditModal.firstName || '';
      this.lastName = this.dataEditModal.lastName || '';
      this.email = this.dataEditModal.email || '';
      this.birthDate = this.dataEditModal.birthDate || new Date();
      this.basicSalary = this.dataEditModal.basicSalary || 0;
      this.status = this.dataEditModal.status || '';
      this.group = this.dataEditModal.group || '';
      this.description = this.dataEditModal.description || '';
    }
  }


  reset() {
    this.username = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.birthDate = new Date().toISOString().substr(0, 10)
    this.basicSalary = 0;
    this.status = '';
    this.group = '';
    this.description = '';
  }

  close() {
    this.closeModal.emit(false); // Mengirimkan false ke komponen induk
    this.reset();
  }

  addEmployee() {
    this.cekValidFirst = false
    const newEmployeeData = {
      id: this.id,
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate || new Date(), // Memberikan nilai default tanggal hari ini jika tidak mengisi tanggal this.birthDate adalah null
      basicSalary: this.basicSalary,
      status: this.status,
      group: this.group,
      description: this.description
    };

    if (!this.username) {
      console.log('1');

      this.cekValid.validUsername = true
      this.cekValidFirst = true
    }
    if (!this.firstName) {
      console.log('2');

      this.cekValid.validFirstName = true
      this.cekValidFirst = true
    }
    if (!this.lastName) {
      console.log('3');

      this.cekValid.validLastName = true
      this.cekValidFirst = true
    }
    if (!this.email) {
      console.log('4');

      this.cekValid.validEmail = true
      this.cekValidFirst = true
    }
    if (!this.birthDate) {
      console.log('5');

      this.cekValid.validBirthDate = true
      this.cekValidFirst = true
    }
    if (!this.basicSalary) {
      console.log('6');

      this.cekValid.validBasicSalary = true
      this.cekValidFirst = true
    }
    if (!this.status) {
      console.log('7');

      this.cekValid.validStatus = true
      this.cekValidFirst = true
    }
    if (!this.group) {
      console.log('8');

      this.cekValid.validGroup = true
      this.cekValidFirst = true
    }
    if (!this.description) {
      console.log('9');

      this.cekValid.validDescription = true
      this.cekValidFirst = true
    }

    if (!this.cekValidFirst) {
      this.employeeAddedModal.emit(newEmployeeData);
      this.close()

    }
  }

  editEmployee() {
    if (this.dataEditModal) {
      this.dataEditModal.username = this.username;
      this.dataEditModal.firstName = this.firstName;
      this.dataEditModal.lastName = this.lastName;
      this.dataEditModal.email = this.email;
      this.dataEditModal.birthDate = this.birthDate || new Date();
      this.dataEditModal.basicSalary = this.basicSalary;
      this.dataEditModal.status = this.status;
      this.dataEditModal.group = this.group;
      this.dataEditModal.description = this.description;

      // Emit event untuk memberitahu komponen lain bahwa data telah diubah
      this.employeeEditedModal.emit(this.dataEditModal);
      this.close();
    }
  }

}
