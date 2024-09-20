import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        <div className="slide">
          <img
            src="https://i.etsystatic.com/11675413/r/il/53285b/3171909925/il_1588xN.3171909925_mcae.jpg"
            alt="Keychain"
            className="slide-image"
          />
          <div className="slide-overlay"></div>
        </div>

        <div className="slide">
          <img
            src="https://i.etsystatic.com/22187715/r/il/5afadd/2861325559/il_fullxfull.2861325559_k22u.jpg"
            alt="Mug"
            className="slide-image"
          />
          <div className="slide-overlay"></div>
        </div>

        <div className="slide">
          <img
            src="https://i.etsystatic.com/27360421/r/il/ebd51b/3277481968/il_fullxfull.3277481968_plzz.jpg"
            alt="Coaster"
            className="slide-image"
          />
          <div className="slide-overlay"></div>
        </div>

        <div className="slide">
          <img
            src="https://cf.shopee.com.my/file/7518c659f286111d2664b7e78a5a9c7b"
            alt="Calendar"
            className="slide-image"
          />
          <div className="slide-overlay"></div>
        </div>

        <div className="slide">
          <img
            src="https://i.etsystatic.com/18085886/r/il/a8b51f/2506851786/il_fullxfull.2506851786_fti3.jpg"
            alt="Tote Bag"
            className="slide-image"
          />
          <div className="slide-overlay"></div>
        </div>

        <div className="slide">
          <img
            src="https://i.pinimg.com/originals/b9/65/3a/b9653a17474605db23162f7bf5a28529.jpg"
            alt="NoteBook"
            className="slide-image"
          />
          <div className="slide-overlay"></div>
        </div>

        <div className="slide">
          <img
            src="https://www.alibabaprinting.sg/wp-content/uploads/fridge-magnets-customized.jpeg"
            alt="Magnet"
            className="slide-image"
          />
          <div className="slide-overlay"></div>
        </div>
      </Slider>
      <div className="hero-content">
        <h1 className="hero-title">Crafted by You, Perfected by Us</h1>
      </div>
    </div>
  );
}

export default HeroSection;
