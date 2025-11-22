    // Get Nama - Welcome
    function myFunction() {
        let text;
        let visitor = prompt("Please enter your name:", "");
        if (visitor == null || visitor == "") {
            text = "Please enter your name";
        }
        else {
            text = "Hello " + visitor + ", How are you?";
        }
        document.getElementById("hello").innerHTML = text;
    }

    
    
    // Contact US
    // Mendapatkan elemen form berdasarkan ID
    const form = document.getElementById('contactForm');

    // Menambahkan "event listener" untuk event 'submit'
    form.addEventListener('submit', function(event) {
    // Mencegah pengiriman form default (yang akan me-refresh halaman)
    event.preventDefault();

        // Mendapatkan nilai input (opsional, untuk validasi atau pesan spesifik)
        const tgl = new Date();
        const name = document.getElementById('name').value;
        const birth = document.getElementById('birth').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Menampilkan alert
        alert(`Terima kasih, Data anda berhasil disubmit.\n\n${tgl}\nNama Lengkap: ${name}\nTanggal Lahir: ${birth}\nNomor Telepon: ${phone}\nAlamat Email: ${email}\nPesan: ${message}`);

    });
