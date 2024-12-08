// Kayıt Formu Gösterme
function showRegistrationForm() {
    const modal = document.getElementById('registration-modal');
    modal.style.display = 'block';
}

// Modal'ı Kapatma
function closeModal() {
    const modal = document.getElementById('registration-modal');
    modal.style.display = 'none';
}

// Kayıt Formunun Verilerini Toplama
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Formun varsayılan olarak gönderilmesini engelle

    // Formdaki verileri topla
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const school = document.getElementById('school').value;
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const schoolNumber = document.getElementById('school-number').value;
    const email = document.getElementById('email').value;

    // Bu verileri yerel depolama veya sunucuya gönderme
    // Burada, verileri yerel depolamaya ekliyoruz (örnek)
    localStorage.setItem('student', JSON.stringify({
        name: name,
        surname: surname,
        school: school,
        city: city,
        district: district,
        schoolNumber: schoolNumber,
        email: email
    }));

    alert("Kayıt başarılı! Öğrenci verileri kaydedildi.");

    // Modal'ı kapat
    closeModal();
});

// Veri Görüntüleme Fonksiyonu
function showDataView() {
    const studentData = JSON.parse(localStorage.getItem('student'));

    if (studentData) {
        alert(`Öğrenci Bilgileri:\nİsim: ${studentData.name}\nSoyisim: ${studentData.surname}\nOkul: ${studentData.school}\nİl: ${studentData.city}\nİlçe: ${studentData.district}\nOkul Numarası: ${studentData.schoolNumber}\nE-posta: ${studentData.email}`);
    } else {
        alert("Henüz kayıtlı öğrenci verisi yok.");
    }
}

// Veri Girişi Formunu Gösterme (Okul Girişine Özel)
function showDataEntryForm() {
    // Okul girişini burada sağlamak için, sadece okulların veri girişi yapabileceği kontrolü ekleyebiliriz
    const schoolPassword = prompt("Okul giriş şifresini girin:");

    if (schoolPassword === "okul123") {
        // Şifre doğruysa veri girişi formunu göster
        alert("Veri Girişi Formu Gösteriliyor...");
        // Burada, okul için veri girişi işlemi eklenebilir (örneğin, atık bilgisi girişi)
    } else {
        alert("Hatalı şifre. Lütfen tekrar deneyin.");
    }
}

// Hedefler ve Unvanlar Gösterme
function showGoals() {
    const goalsSection = document.getElementById('goals');
    const goalsHTML = `
        <h3>Hedefleriniz</h3>
        <ul>
            <li>100 Puan: Yeşil Lider Unvanı</li>
            <li>500 Puan: Geri Dönüşüm Ustası Unvanı</li>
            <li>1000 Puan: Çevre Dostu Şehir Elçisi Unvanı</li>
        </ul>
        <p>Her hedefin belirli ödülleri vardır. Başarılarınızla bu hedeflere ulaşabilirsiniz!</p>
    `;
    goalsSection.innerHTML = goalsHTML;
}

// Sayfa Yüklendiğinde Genel İşlevlerin Çalıştırılması
window.onload = function() {
    showGoals(); // Hedefler sekmesi yüklendiğinde otomatik olarak gösterilsin
};
