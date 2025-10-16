import "./style.css";

function Home() {
  return (
    <>
      <div className="nav">
        <img src="/assets/microsoft.png" className="logo2" alt="Microsoft" />
        <div className="verticalline"></div>
        <img src="/assets/xbox.png" className="logo" alt="Xbox" />
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
          src="/assets/video.mp4"
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
          <img src="/assets/i1.png" alt="Game Pass" />
          <span>GAME PASS</span>
        </div>
        <div className="iT" data-aos="zoom-in">
          <img src="/assets/i2.png" alt="Games" />
          <span>GAMES</span>
        </div>
        <div className="iT" data-aos="zoom-in">
          <img src="/assets/i3.png" alt="Consoles" />
          <span>CONSOLES</span>
        </div>
        <div className="iT" data-aos="zoom-in">
          <img src="/assets/i4.png" alt="Accessories" />
          <span>ACCESSORIES</span>
        </div>
        <div className="iT" data-aos="zoom-in">
          <img src="/assets/i5.png" alt="Play" />
          <span>PLAY</span>
        </div>
        <div className="iT" data-aos="zoom-in">
          <img src="/assets/i6.png" alt="Sign In" />
          <span>SIGN IN</span>
        </div>
      </div>

      <div className="cardS">
        <div className="cD1" data-aos="fade-up">
          <img src="/assets/cd1.jpg" alt="Card 1" />
        </div>
        <div className="cD2" data-aos="fade-up">
          <img src="/assets/cd2.jpg" alt="Card 2" />
        </div>
        <div className="cD3" data-aos="fade-up">
          <img src="/assets/cd3.jpg" alt="Card 3" />
        </div>
        <div className="cD4" data-aos="fade-up">
          <img src="/assets/cd4.jpg" alt="Card 4" />
        </div>
      </div>

      <div className="sec" data-aos="fade-up">
        <img src="/assets/item1.jpg" alt="Xbox Series X|S" />
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