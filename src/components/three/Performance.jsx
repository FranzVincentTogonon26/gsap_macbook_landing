import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { performanceImages } from "../../constants";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const isDesktop = window.innerWidth >= 1024;

    // Text animation
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
    if (isDesktop) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          refreshPriority: 2,
          invalidateOnRefresh: true,
        },
        defaults: { duration: 1, ease: "power2.out" },
      });

      performanceImages.forEach(({ id, left, right, bottom, transform }) => {
        if (id === "p5") return; // Skip p5
        const img = section.querySelector(`img.${id}`);
        if (!img) return;
        tl.to(
          img,
          {
            left,
            right,
            bottom,
            transform,
            opacity: 1,
          },
          0 // All at time 0
        );
      });
    }

    // Refresh ScrollTrigger on resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            style={{ opacity: 0 }}
          />
        ))}
      </div>
      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            {" "}
            gaming feels more impressive and realistic than ever.
          </span>{" "}
          And dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization -- driving a huge performance boost for
          the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;