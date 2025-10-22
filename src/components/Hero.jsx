import { useEffect, useRef } from "react"

const Hero = () => {

const videoRef = useRef(null);

useEffect(() => {
    if (videoRef.current) {
        videoRef.current.playbackRate = 1;
        videoRef.current.play();
    }
 }, []);

  return (
   <section id="hero" >
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />
        </div>
        <div className="relative" >
        <video 
            ref={videoRef}  
            src="/videos/hero.mp4" 
            autoPlay 
            muted 
            playsInline 
        />
        </div>
        <button type="button">Buy</button>
        <p>From $1599 0r $133/mo for 12 months</p>
   </section>

  )
}

export default Hero
