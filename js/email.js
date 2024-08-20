document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form ke Formspree
    alert('Form direset dan tidak dikirim ke Formspree.'); // Pemberitahuan kepada pengguna
    this.reset(); // Mereset form
});