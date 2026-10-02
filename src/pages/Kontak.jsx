function Kontak() {
  return (
    <section className="contact-page">
      <div className="contact-content">
        <p className="section-label">CONTACT ME ✿</p>

        <h1>Hubungi Saya</h1>

        <p className="contact-intro">
          Kalau ingin mengenal lebih jauh atau sekadar ingin menyapa,
          kamu bisa menghubungiku melalui platform di bawah ini ♡
        </p>

        <div className="contact-list">

          <a
            href="mailto:rihanafsawindi@gmail.com"
            className="contact-card"
          >
            <span className="contact-icon">📧</span>
            <div>
              <h2>Email</h2>
              <p>rihanafsawindi@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/windirhnfs"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">📱</span>
            <div>
              <h2>Instagram</h2>
              <p>@windirhnfs</p>
            </div>
          </a>

          <div className="contact-card">
            <span className="contact-icon">📍</span>
            <div>
              <h2>Lokasi</h2>
              <p>Bandung, Jawa Barat</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Kontak;