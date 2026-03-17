import React from "react";

import Services from "./components/Services";
import Training from "./components/Training";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import HeroVideo from "./components/HeroVideo";
import Header from "./components/Header";
import StatsPartners from "./components/StatsPartners";
import ImageGallery from "./components/ImageGallery";
import VideoGallery from "./components/VideoGallery";

import Footer from "./components/Footer"

function App(){

return(

<div>
  <HeroVideo/>
<Header/>
<StatsPartners/>
<ImageGallery/>

<Services/>
<Training/>
<VideoGallery/>
<Testimonials/>
<Contact/>

<Footer/>
</div>

);

}

export default App;