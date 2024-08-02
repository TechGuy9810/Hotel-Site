import React from "react";
import Featured from "./featured";
import ForigenDestination from './ForigenDestination.js';
import CarouselDefault from "./Carousel.jsx";
import Faq from "./Faq";
import { Fade } from "react-awesome-reveal";
//home component.
const Home = ()=>{
return(
    <>
<div class="body">
<div class="landing">
<CarouselDefault/>
<Featured/>
<Fade delay={0.2}>
<ForigenDestination/>
</Fade>
<Faq/>
</div>
</div>
    </>
);
}
export default Home;