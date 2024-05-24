import checkMark from './assets/Done_ring_round_fill.svg';
import landingPageImg from './assets/hero-image-simple-homepage.png';

export default function LandingPageComponent() {
    return (
      <>
      <div className='content'>
        <div className='cont1'>
          <div className='cont1_1'>😎 SIMPLE WAY TO COMMUNICATE</div>
          <div className='main-content'>
            <div className='main-content_1'>Actions for Accessibility <br></br> in Design</div>
            <div className='main-content_2'>
              The fastest way to build and deploy websites with<br></br> reusable components
            </div>
          </div>
        </div>
  
        <div className='cont2'>
          <button className='btn'>GET STARTED</button>
          <div className='a'>Get live demo</div>
        </div>
  
        <div className='cont3'>
          <div><img src={checkMark} alt='check-mark'></img>No credit card required</div>
          <div><img src={checkMark} alt='check-mark'></img>No software to install</div>
        </div>
      </div>
  
      <div className='img'>
        <img src={landingPageImg} alt='' className='landing-page'></img>
      </div>
      </>
    );
  }
  