// UAS Perancangan Web - Sistem Pembayaran Sederhana
        // ===== DATA & VARIABEL GLOBAL =====
        let transactions = [];
        let transactionIdCounter = 1;
        let currentDiscount = 0;
        let appliedPromoCode = '';

    // Mapping metode pembayaran dengan warna
    const paymentMethodColors = {
        'transfer': 'bg-blue-100 text-blue-800',
        'ewallet': 'bg-purple-100 text-purple-800',
        'credit': 'bg-orange-100 text-orange-800',
        'Pemerintah': 'bg-yellow-100 text-yellow-800',
        'cash': 'bg-green-100 text-green-800'
    };

    document.addEventListener('DOMContentLoaded', function() {
        // ===== DARK MODE TOGGLE =====
        const darkModeToggle = document.getElementById('darkModeToggle');
        const darkModeIcon = document.getElementById('darkModeIcon');
        const darkModeText = document.getElementById('darkModeText');

        // Cek preferensi awal dari localStorage
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            updateDarkModeUI(true);
        } else {
            updateDarkModeUI(false);
        }
        // Event listener untuk toggle
        darkModeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateDarkModeUI(isDark);
        });

        // Fungsi untuk update ikon dan teks tombol
        function updateDarkModeUI(isDark) {
            darkModeIcon.textContent = isDark ? '☀️' : '🌙';
            darkModeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        } });

