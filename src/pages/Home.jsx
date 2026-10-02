import windi1 from "../assets/windi1.jpeg";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="greeting">HELLO, I'M ✿</p>

        <h1>Windi Rihanafsa</h1>

        <p className="description">
          Mahasiswa Pendidikan Ilmu Komputer
          <br />
          Universitas Pendidikan Indonesia
        </p>

        <p className="intro">
          Selamat datang di website pribadiku ♡
        </p>

        <a href="/tentang" className="home-button">
          About Me →
        </a>
      </div>

      <div className="home-decoration">
        <img src={windi1} alt="Windi Rihanafsa" className="home-photo" />

        <span className="flower flower-1">✿</span>
        <span className="flower flower-2">♡</span>
        <span className="flower flower-3">✿</span>
      </div>
    </section>
  );
}

export default Home;