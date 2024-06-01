# Login
 - Username : iqbal
 - Password : 123

## Cara run project melalui url
disini saya menggunakan github pages untuk deploy sehingga project ini bisa di liat tanpa di clone terlebih dahulu, di bawah ini saya lampirkan urlnya.
- https://mkurniaiqbal.github.io/back-office/

## Cara run project di lokal
Disini saya menggunakan angular versi 16
dan cara menjalankan di lokal kalian yaitu pertama"
- npm install -g @angular/cli@16 // ini berfungsi untuk menginstal angular versi 16 secara global agar bisa create project baru secara global, kemudian
- git clone https://github.com/mkurniaiqbal/back-office.git, // ini berfungsi menduplikat project ini ke lokal kalian, kemudian
- cd my-app , // ini berfungsi untuk masuk ke folder project ini dengan nama my-app , kemudian
- npm instal // ini berfungsi menginstal package yang di perlukan untuk menjalankan project ini, kemudian
- ng serve --open // ini berfungsi menjalankan project dibrowser dan fungsi --open yaitu langsung membuka otomatis browser kalian
  
setelah project telah berjalan kalian bisa login sesuai username dan password yang sudah dibuat, kalian bisa liat pada bagian paling atas catatan ini.

## Package
Saya menginstall beberapa package
 - format date = npm install date-fns
 - alert = npm install sweetalert2
 - css(boostrap) = npm install boostrap
 - icon(boostrap) = npm install boostrap-icon

## Deskripsi
pada project ini menggunakan data dummy dan terdapat fitur:
 - add data, delete data, edit data
 - search data
 - sort data (hanya Username)
 - pagination

=================================================================================================================

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

## Build

Run ng build to build the project. The build artifacts will be stored in the dist/ directory.

## Further help

To get more help on the Angular CLI use ng help or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
