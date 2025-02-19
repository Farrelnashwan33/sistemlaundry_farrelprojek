# Sistem Smart Laundry

Sistem Smart Laundry adalah aplikasi berbasis web untuk mengelola pesanan laundry secara cerdas. Sistem ini memungkinkan pelanggan untuk memilih layanan laundry, menambahkan barang, berat, dan biaya tambahan, serta melakukan pembayaran dengan estimasi waktu pengiriman dan tanggal pengambilan yang ditentukan secara otomatis.

---

## 🚀 Fitur Utama

1. **Pilih Layanan Laundry**:  
   Pelanggan dapat memilih jenis layanan laundry seperti baju, jaket, atau karpet dengan harga per kilogram yang dinamis.

2. **Tambah Barang/Waktu/Biaya**:  
   Tambahkan barang, waktu pengiriman, atau biaya tambahan secara manual melalui input yang interaktif.

3. **Keranjang Belanja**:  
   Semua pesanan laundry ditampilkan dalam bentuk tabel, lengkap dengan rincian jenis barang, berat, subtotal, dan opsi untuk menghapus item.

4. **Checkout dan Pembayaran**:  
   - Total biaya ditampilkan dalam format **Rp xx.xxx**.  
   - Estimasi waktu pengiriman dalam jam.  
   - Estimasi tanggal pengambilan berdasarkan berat total (kg).  
   - Barcode pembayaran untuk mempermudah konfirmasi pembayaran.

5. **Harga Laundry Dinamis**:  
   Harga layanan laundry diperbarui secara otomatis melalui API menggunakan AJAX.

6. **Responsive Design**:  
   Antarmuka dirancang agar ramah pengguna di perangkat desktop dan mobile.

---

## 🌐 Demo Live

Akses aplikasi ini secara langsung melalui link berikut:  
👉 **[Sistem Smart Laundry - Vercel](https://sistemlaundry-farrelprojek.vercel.app/)**

---

## 🛠️ Teknologi yang Digunakan

- **Frontend**: HTML, CSS, JavaScript, jQuery
- **AJAX**: Untuk pengambilan harga laundry dari API
- **Local Storage**: Untuk menyimpan data pesanan pelanggan sementara
- **Backend API (placeholder)**: Endpoint untuk data harga dinamis
- **Barcode**: Gambar barcode untuk mempermudah pembayaran

---

## 📸 Tampilan Sistem

### Halaman Utama
Pilih layanan laundry dari daftar dengan harga per kilogram yang telah ditentukan.

### Keranjang
Rincian pesanan pelanggan yang dapat diubah dengan opsi hapus item.

### Modal Pembayaran
Tampilkan total biaya, estimasi pengiriman, tanggal pengambilan, dan barcode pembayaran.

---

## 🔧 Cara Menggunakan

1. Clone repository ini ke lokal:
   ```bash
   git clone https://github.com/Farrelnashwan33/sistemlaundry_farrelprojek.git
