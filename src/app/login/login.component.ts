import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  username: string = '';
  password: string = '';

  login(): void {

    if (this.username == "iqbal" && this.password == "123") {
      // alert("login berhasil")
      Swal.fire({
        title: 'Sukses!',
        text: 'Anda berhasil login.',
        icon: 'success',
        confirmButtonText: 'Oke'
      });
      localStorage.setItem("username", this.username)
      this.router.navigate(['/employee']);

    } else if (this.username == '' && this.password == '') {
      Swal.fire({
        title: 'Gagal!',
        text: 'Username atau Password tidak Boleh Kosong.',
        icon: 'error',
        confirmButtonText: 'Coba Lagi'
      });
      // alert("username atau password tidak boleh kosong")
    } else {
      Swal.fire({
        title: 'Gagal!',
        text: 'Username atau Password tidak ditemukan.',
        icon: 'error',
        confirmButtonText: 'Coba Lagi'
      });
      // alert("login gagal")
    }
  }
}
