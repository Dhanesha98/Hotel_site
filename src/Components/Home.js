import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Image1 from "../Components/Assets/image1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "../Components/Footer";

const Home = () => {
return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">

      <div id="slider">
        <img src={Image1} alt="" />
      </div>
        <div className="text-box">
            <h1>Extensive and versatile events space</h1>
            <p>Discover a large and versatile event space in Sri Lanka</p>
        </div>
        <div className="text-box1">
            <table>
              <tr>
              <th>10 Jun 2021  &nbsp;&nbsp;&nbsp;&nbsp; 1 night 11 Jun 2021</th>
              <th>1 Room, 1 Adult, 0 Children  </th>
              <th style={{color: "grey"}}>Special Code </th>
              <th style={{background : "rgb(56, 58, 169)", color: "white"}}> Search </th>
              </tr>
            </table>
        </div>
      </div>

      {/* Destination */}
      <div className="Destination">
        <><p>Our Destination</p><div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Shangri–La Life
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Shangri–La Hakura</a></li>
            <li><a class="dropdown-item" href="#">Shangri–La Donveli</a></li>
            <li><a class="dropdown-item" href="#">Habaran Village</a></li>
          </ul>
        </div><img src={Image1} alt="" /><div className="life ">
            <p style={{ color: "purple", fontSize: "30px", fontStyle: "italic" }}>Shangri–La Life</p>
            <p>Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.</p>
            <button>Discover More</button>
          </div></>
      </div>

      {/* Something new */}

      <div className="experience">
        <><div className="topic"><p>experience Something new </p></div><div className="content"><p>Check out our top destinations, and let the season lead you to new adventures.</p></div></>
      </div>
      <div class="grid">
  
      <div className="img1">
        <img src={Image1 } alt="" /> 
      <div class="center">Plan Your NYC Adventure</div>
      </div>
      <div className="img1">
        <img src={Image1 } alt="" /> 
      <div class="center">Create Magic in Portland</div>
      </div>
      <div className="img1">
        <img src={Image1 } alt="" /> 
      <div class="center">Plan Your NYC Adventure</div>
      </div>
      <div className="img1">
        <img src={Image1 } alt="" /> 
      <div class="center">Embrace Chicago's Charm</div>
      </div>
      <div className="img1">
        <img src={Image1 } alt="" /> 
      <div class="center">Embrace Chicago's Charm</div>
      </div>
      <div className="img1">
        <img src={Image1 } alt="" /> 
      <div class="center">Plan Your NYC Adventure</div>
      </div>
</div>

      {/* Offers*/}
      <><div className="offers">
  <div className="offerTopic">Offers</div>
  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="img_5terre.jpg">
        <img src={Image1} alt="" />
      </a>
      <div class="desc1">Rooms & Suites</div>
      <div class="desc2">Shangri–La Circle Exclusive Member Rate with Breakfast</div>
      <div class="desc3">Exclusive Member Rate with Breakfast for Shangri-La Circle member.</div>
      <div class="desc4">From LKR 58,509.00 Average Per Night</div>
      <button>View details</button>
    </div>
  </div>


  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="img_forest.jpg">
        <img src={Image1} alt="" />
      </a>
      <div class="desc1">Rooms & Suites</div>
      <div class="desc2">Shangri–La Circle Exclusive Member Rate with Breakfast</div>
      <div class="desc3">Exclusive Member Rate with Breakfast for Shangri-La Circle member.</div>
      <div class="desc4">From LKR 58,509.00 Average Per Night</div>
      <button>View details</button>
    </div>
  </div>

  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="img_lights.jpg">
        <img src={Image1} alt="" />
      </a>
      <div class="desc1">Rooms & Suites</div>
      <div class="desc2">Shangri–La Circle Exclusive Member Rate with Breakfast</div>
      <div class="desc3">Exclusive Member Rate with Breakfast for Shangri-La Circle member.</div>
      <div class="desc4">From LKR 58,509.00 Average Per Night</div>
      <button>View details</button>
    </div>
  </div>
  <div className="viewall"><p>view all</p></div>
</div><Footer /></>

    </div>
  );
};

export default Home;
