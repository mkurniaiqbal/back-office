import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const cekLocalStorage = localStorage.getItem('username');
    if (cekLocalStorage) {
      // Jika token ditemukan di localStorage, biarkan pengguna tetap di halaman saat ini
      console.log("1");

      // this.router.navigate(['/employee'])
      return true;
    } else {
      Swal.fire({
        title: 'Gagal!',
        text: 'Pastikan Anda sudah login!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      // Jika token tidak ditemukan di localStorage, redirect ke halaman login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
