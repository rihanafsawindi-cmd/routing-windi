function Hobi() {
  return (
    <section className="hobby-page">
      <div className="hobby-content">
        <p className="section-label">MY HOBBIES ✿</p>

        <h1>Hal yang Aku Suka</h1>

        <p className="hobby-intro">
          Beberapa kegiatan yang biasanya aku lakukan di waktu luang.
        </p>

        <div className="hobby-list">
          <div className="hobby-card">
            <div className="hobby-icon">🍳</div>
            <h2>Memasak</h2>
            <p>
              Aku suka memasak, terutama ketika bisa membuat makanan
              untuk orang lain dan melihat mereka menikmatinya.
            </p>
          </div>

          <div className="hobby-card">
            <div className="hobby-icon">🎬</div>
            <h2>Menonton Film</h2>
            <p>
              Menonton film menjadi salah satu cara untuk bersantai
              dan menikmati waktu luang.
            </p>
          </div>

          <div className="hobby-card">
            <div className="hobby-icon">🎵</div>
            <h2>Mendengarkan Musik</h2>
            <p>
              Aku suka mendengarkan musik karena bisa menemani berbagai
              aktivitas dan membuat suasana menjadi lebih menyenangkan.
            </p>
          </div>

          <div className="hobby-card">
            <div className="hobby-icon">🌷</div>
            <h2>Jalan-jalan</h2>
            <p>
              Aku juga suka pergi bersama teman, mencoba tempat baru,
              dan membuat momen-momen kecil yang menyenangkan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobi;