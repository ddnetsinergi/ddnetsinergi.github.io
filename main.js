document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua elemen yang memiliki class 'dropdown-trigger'
    const dropdowns = document.querySelectorAll('.dropdown-trigger');

    dropdowns.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // Mencegah link berpindah halaman saat diklik
            e.preventDefault();

            // Tutup dropdown lain jika ada yang terbuka
            dropdowns.forEach(other => {
                if (other !== trigger) {
                    other.classList.remove('active');
                }
            });

            // Toggle class 'active' pada elemen yang diklik
            trigger.classList.toggle('active');
        });
    });

    // Menutup dropdown jika user mengklik di luar area navbar
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-trigger')) {
            dropdowns.forEach(trigger => {
                trigger.classList.remove('active');
            });
        }
    });
});