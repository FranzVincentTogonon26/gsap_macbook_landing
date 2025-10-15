import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { performanceImages, performanceImgPositions } from "../../constants";
import { useMediaQuery } from "react-responsive";

const Performance = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const sectionRef = useRef(null);

  useGSAP(() => {
      // Text fade-in and move-up animation
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      // Desktop image timeline

      if(isMobile) return;
   
      const tl = gsap.timeline({
        defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((pos) => {
        if (pos.id === "p5") return; // Skip p5
    
        const toVars = { };

        if (pos.left !== undefined) toVars.left = `.${pos.left}%`;
        if (pos.right !== undefined) toVars.right = `.${pos.right}%`;
        if (pos.bottom !== undefined) toVars.bottom = `.${pos.bottom}%`;
        if (pos.transform !== undefined) toVars.transform = pos.transform;
        tl.to(`.${pos.id}`, toVars, 0);
      });
  }, { scope: sectionRef , dependencies: [isMobile] });

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>
      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <img
            src={src}
            alt={id}
            key={id}
            className={id}
          />
        ))}
      </div>
      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware accelerated ray tracing engine that renders
          images faster, so
          {" "}
          <span className="text-white">
            gaming feels more impressive and realistic than ever.
          </span>
          {" "}
          And dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization -- driving a huge performance boost for
          the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;