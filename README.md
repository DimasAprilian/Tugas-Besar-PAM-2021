# Tugas Besar PAM 2021
Repository ini berisi _source code_ Tugas Besar PAM

Note.Ly merupakan aplikasi _to-do list_ berbasis _mobile_ yang di develop menggunakan _framework react_, dengan tim pengembang : 

1. Dimas Aprilian Sulaiman Putra
2. Muhammad Ariq Rafi
3. Neza Chania Putri

* Dalam aplikasi ini, terdapat fitur **Tambah Kegiatan**, yang mana saat awal pengguna membuka aplikasi, maka akan muncul tampilan menambahkan kegiatan. Ketika pengguna menambahkan kegiatan, data tersebut akan dikirim ke _database (firebase)_, dan nantinya akan ditampilkan pada halaman yang sama dengan tampilan menambah kegiatan.

* Pengguna juga dapat melakukan aksi **Ceklist**, **Hapus** serta **Bintangi** pada setiap kegiatan yang dibuat, ketika pengguna melakukan **Ceklist** pada suatu kegiatan, maka atribut `checked` pada _record_ kegiatan tersebut akan dirubah nilainya menjadi `true`, maka kegiatan tersebut dianggap sudah dilaksanakan, dan akan di coret (_strikethrough_). 

* Kemudian pengguna juga dapat melakukan aksi **Bintangi**, yang mana ketika user membintangi kegiatan, maka atribut `starred` pada _record_ kegiatan tersebut akan dirubah nilainya menjadi `true`, dan kegiatan tersebut akan diletakkan di bagian atas _list_ kegiatan. 

* Yang terakhir, pengguna dapat melakukan aksi **Hapus** kegiatan ketika sudah di ceklist, pada saat pengguna menekan tombol hapus, maka akan muncul _pop up message_ untuk memastikan apakah kegiatan ingin dihapus atau tidak, jika iya, maka _record_ kegiatan tersebut akan dihapus dari _database_.
