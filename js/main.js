 // Tambahkan event listener untuk menangani klik pada tombol "Contact Us"
 document.getElementById('toggleContact').addEventListener('click', function() {
  // Dapatkan elemen collapse
  var contactList = document.getElementById('contactList');
  // Periksa apakah elemen collapse sedang ditampilkan atau disembunyikan
  if (contactList.classList.contains('hide')) {
      // Jika sedang ditampilkan, sembunyikan
      contactList.classList.remove('show');
  } else {
      // Jika sedang disembunyikan, tampilkan
      contactList.classList.add('hide');
  }
});