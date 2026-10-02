import windi2 from "../assets/windi2.jpeg";
import windi4 from "../assets/windi4.jpeg";
import windi5 from "../assets/windi5.jpeg";

function Tentang() {
  return (
    <section className="about-page">
      <div className="about-content">
        <p className="section-label">ABOUT ME ✿</p>

        <h1>Tentang Saya</h1>

        <p>
          HaalOo! Aku Windi Rihanafsa, mahasiswa Pendidikan Ilmu Komputer
          di Universitas Pendidikan Indonesia.
        </p>

        <p>
          Aku adalah seseorang yang suka mencoba hal-hal baru,
          mengembangkan diri, dan menikmati waktu bersama orang-orang
          terdekat.
        </p>

        <div className="about-gallery">
          <img src={windi2} alt="Windi2" />
          <img src={windi4} alt="Windi4" />
          <img src={windi5} alt="Windi5" />
        </div>

        <div className="about-info">
          <div>
            <span>Nama</span>
            <p>Windi Rihanafsa</p>
          </div>

          <div>
            <span>Jurusan</span>
            <p>Pendidikan Ilmu Komputer</p>
          </div>

          <div>
            <span>Universitas</span>
            <p>Universitas Pendidikan Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tentang;