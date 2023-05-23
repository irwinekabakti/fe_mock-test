# mock-test-binar-academy

## Kegunaan JSON pada REST API

JSON adalah merupakan sebuah format yang digunakan untuk menyimpan, membaca, serta menukar informasi dari web server sehingga dapat dibaca oleh para pengguna. Biasanya, file JSON berisikan teks dan file berekstensi .json

JSON sendiri terdiri dari dua struktur. Struktur Pertama adalah kumpulan value yang saling berpasangan contohnya seperti object. Struktur kedua adalah kumpulan value yang berurutan seperti misalnya array. Selain itu, JSON dapat digunakan oleh bahasa pemrograman lain seperti PHP, Python, C++, dan Ruby.

## Cara Kerja REST API

Dalam REST API ada 2 sisi yaitu REST Server dan REST Client. REST server adalah pihak yang menyediakan data sedangkan REST Client adalah pihak yang melakukan request ke REST Server.

Cara kerja REST API adalah REST client akan mengakses data/resource ke REST server dimana masing-masing resource atau data tersebut dibedakan oleh sebuah global ID atau URIs (Universal Resource Identifiers).

Flow dari sebuah proses REST contohnya:

Pertama harus ada sebuah REST server yang akan menyediakan resource/data. Sebuah REST client akan membuat HTTP request ke server melalui sebuah global ID atau URIs dan server akan merespon dengan mengirimkan balik sebuah HTTP response sesuai yang diminta client.

Client dapat berkomunikasi dengan server, memanipulasi data, mengambil data yang ada di server tersebut tanpa merusak atau merubah data asli di dalam server. Hal ini dimungkinkan karena adanya protocol yang mengatur, sehinga API tidak akan merubah apapun di luar aturan yang berlaku.

## Fitur Website

website terhubung dengan API https://jsonplaceholder.typicode.com menggunakan Redux-Toolkit. User dapat melakukan autentikasi terlebih dahulu dan terhubung dengan informasi login di localStorage. Setelah berhasil login User menerima data default dari API dan User dapat menambah, mengedit, menghapus data tersebut di localStorage namun tidak mengubah secara permanen di server

## Link Demo

https://fe-mock-test.vercel.app/
