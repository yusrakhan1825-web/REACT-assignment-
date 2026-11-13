import img7 from '../assets/images/img7.jpg'


const Hero = () => {
  return (
    <section className="hero-section" id="home" style={{ backgroundImage: `url(${img7})` }}>
      <div className="hero-overlay">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-7 hero-content">

              <span className="hero-tag">
                BRING NATURE HOME
              </span>

              <h1>
                Bring Nature <br />
                Into Your <span>Home</span>
              </h1>

              <p>
                Discover beautiful indoor plants and transform your
                living space into a peaceful green paradise.
              </p>

              <div className="hero-buttons">
                <button className="btn hero-btn">
                  Shop Collection
                </button>

                <button className="btn hero-btn-outline">
                  Explore More
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
