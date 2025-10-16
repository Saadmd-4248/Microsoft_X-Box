import "./style.css";

function Home() {
  return (
    <>
      <div className="nav">
        <img src="src/components/assets/microsoft.png" className="logo2" />
        <div className="verticalline"></div>
        <img src="src/components/assets/xbox.png" className="logo" />
        <ul>
          <li><a>Game Pass &gt;</a></li>
          <li><a>Games &gt;</a></li>
          <li><a>Devices &gt;</a></li>
          <li><a>Play &gt;</a></li>
          <li><a>Store &gt;</a></li>
          <li><a>Community &gt;</a></li>
          <li><a>Support &gt;</a></li>
          <li><a>More &gt;</a></li>
        </ul>
        <ul className="ico">
          <li><a>All Microsoft &gt;</a></li>
        </ul>
      </div>

      <div className="carousel">
        <video
          src="src/components/assets/Xbox Official Site- Consoles, Games, and Community.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="content">
          <div className="author">NOW AVAILABLE</div>
          <div className="title">Avowed</div>
          <div className="desc">Play now with PC Game Pass or Ultimate</div>
          <div className="button">
            <button className="btn1"><p>GET IT NOW &gt;</p></button>
            <button className="btn2">JOIN GAME PASS &gt;</button>
          </div>
        </div>
      </div>

      <div className="icons">
        <div className="iT" data-aos="zoom-in">
          <img src="src/components/assets/i1.png" alt="" />
          <span>GAME PASS</span>
        </div>
        <div className="iT" data-aos="zoom-in">
          <img src="src/components/assets/i2.png" alt="" />
          <span>GAMES</span>
        </div>
        <div className="iT" data-aos="zoom-in">
          <img src="src/components/assets/i3.png" alt="" />
          <span>CONSOLES</span>
        </div>
        <div className="iT" data-aos="zoom-in">
          <img src="src/components/assets/i4.png" alt="" />
          <span>ACCESSORIES</span>
        </div>
        <div className="iT" data-aos="zoom-in">
          <img src="src/components/assets/i5.png" alt="" />
          <span>PLAY</span>
        </div>
        <div className="iT" data-aos="zoom-in">
          <img src="src/components/assets/i6.png" alt="" />
          <span>SIGN IN</span>
        </div>
      </div>

      <div className="cardS">
        <div className="cD1" data-aos="fade-up">
          <img src="src/components/assets/cd1.jpg" alt="Card 1" />
        </div>
        <div className="cD2" data-aos="fade-up">
          <img src="src/components/assets/cd2.jpg" alt="Card 2" />
        </div>
        <div className="cD3" data-aos="fade-up">
          <img src="src/components/assets/cd3.jpg" alt="Card 3" />
        </div>
        <div className="cD4" data-aos="fade-up">
          <img src="src/components/assets/cd4.jpg" alt="Card 4" />
        </div>
      </div>

      <div className="sec" data-aos="fade-up">
        <img src="src/components/assets/item1.jpg" alt="Xbox Series X|S" />
        <div className="context">
          <div className="h1">Power Your Dreams</div>
          <div className="para">
            Make your own magic with Avowed with Xbox <br /> Series X|S
          </div>
          <div className="button">
            <button className="btn1"><p>LEARN MORE &gt;</p></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
