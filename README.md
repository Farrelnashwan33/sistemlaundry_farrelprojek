# Sistem Smart Laundry Farrel Nashwan

Sistem Smart Laundry adalah sebuah aplikasi berbasis web yang dirancang untuk mempermudah proses pencucian pakaian. Aplikasi ini memungkinkan pelanggan untuk memilih jenis barang yang akan dicuci, menambah barang/waktu/biaya, dan melakukan checkout dengan perhitungan harga dan estimasi waktu pengiriman serta tanggal pengambilan secara otomatis.

## **Fitur Utama**
- **Pilih Jenis Laundry**: Pengguna dapat memilih jenis barang seperti baju, jaket, atau karpet, dengan harga per kilogram yang ditampilkan secara dinamis.
- **Keranjang Belanja**: Barang yang dipilih masuk ke dalam keranjang dengan rincian jenis barang, berat, harga per kilogram, dan subtotal.
- **Tambah Barang/Waktu/Biaya**: Pelanggan dapat menambahkan barang baru, estimasi waktu, atau biaya tambahan secara manual.
- **Perhitungan Harga Otomatis**: Total harga dihitung dengan format angka yang benar, seperti **Rp 20.000**, bukan **Rp 20000**.
- **Estimasi Waktu Pengiriman**: Sistem menghitung waktu pengiriman berdasarkan total berat barang dalam keranjang.
- **Estimasi Tanggal Pengambilan**: Tanggal pengambilan dihitung secara otomatis sesuai dengan lamanya pengiriman.
- **Checkout**: Menampilkan detail pembayaran, barcode, estimasi waktu pengiriman, dan tanggal pengambilan.
- **Harga Dinamis via API**: Harga barang diperbarui secara otomatis menggunakan data dari endpoint API.

## **Teknologi yang Digunakan**
- **Frontend**:
  - HTML
  - CSS
  - JavaScript (jQuery)
- **Backend**:
  - AJAX untuk komunikasi dengan API (simulasi backend untuk mendapatkan harga laundry secara dinamis).
- **Local Storage**:
  - Data keranjang disimpan di browser menggunakan Local Storage.
  
## **Cara Menjalankan Proyek**
1. **Clone repository ini**:
   ```bash
   git clone 
