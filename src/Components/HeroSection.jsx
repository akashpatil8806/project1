const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btn">
          <button>ShopNow</button>
          <button className="btn2">Catagory</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
        </div>
        <div className="hero-icon">
        <img src="flipkart.jpg" alt="flipkart" />
        <img src="amazon.jpg" alt="amazon" />
      </div>
      </div>
      
      <div className="hero-image">
        <img src="shoe_image.jpg" alt="shoe_image" />
      </div>
    </main>
  );
};
export default HeroSection;
