import { type CSSProperties, useEffect, useRef, useState } from "react";
import le1 from "../../assets/LE1.png";
import le2 from "../../assets/LE2.png";
import le3 from "../../assets/LE3.png";
import le4 from "../../assets/LE4.png";
import le5 from "../../assets/LE5.png";
import le6 from "../../assets/LE6.png";
import le7 from "../../assets/LE7.png";
import le8 from "../../assets/LE8.png";
import decoLeft from "../../assets/LE_ICON_1.png";
import decoRight from "../../assets/LE_ICON_2.png";

const images = [le1, le2, le3, le4, le5, le6, le7, le8];

export default function LearningEnvironment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.min(Math.max(index, 0), images.length - 1);
    setActiveIndex(clampedIndex);
  };

  const schedulePause = (durationMs = 2000) => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) {
      window.clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, durationMs);
  };

  const handlePrev = () => {
    scrollToIndex(activeIndex - 1);
    schedulePause();
  };

  const handleNext = () => {
    scrollToIndex(activeIndex + 1);
    schedulePause();
  };

  useEffect(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 3500);
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        window.clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <section className="learning-env section-padding">
      <img
        src={decoLeft}
        alt=""
        aria-hidden="true"
        className="learning-env__decor learning-env__decor--left"
      />
      <img
        src={decoRight}
        alt=""
        aria-hidden="true"
        className="learning-env__decor learning-env__decor--right"
      />

      <div className="learning-env__container section-container">
        <h2 className="learning-env__title">
          Our Learning <span>Environment</span>
        </h2>
        <p className="learning-env__subtitle">
          Our facilities are more than amenities—they are proof of learning quality.
          <br />
          Each area serves a clear purpose, from sensory regulation and creative
          expression to physical confidence and quiet focus.
        </p>

        <div
          className="learning-env__grid"
          data-reveal-stagger
          style={{ "--learning-env-index": activeIndex } as CSSProperties}
          onPointerDown={() => schedulePause(3000)}
          onPointerUp={() => schedulePause(1500)}
          onPointerLeave={() => schedulePause(1500)}
        >
          {images.map((src, index) => (
            <div className="learning-env__card" key={`${src}-${index}`}>
              <img src={src} alt={`Learning environment ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="learning-env__controls">
          <button
            type="button"
            className="learning-env__arrow learning-env__arrow--prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            ←
          </button>
          <div className="learning-env__dots" role="tablist" aria-label="Learning environment carousel">
            {images.map((_, index) => (
              <button
                key={`learning-env-dot-${index}`}
                type="button"
                className={`learning-env__dot${
                  index === activeIndex ? " learning-env__dot--active" : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={index === activeIndex}
                onClick={() => {
                  scrollToIndex(index);
                  schedulePause();
                }}
              />
            ))}
          </div>
          <button
            type="button"
            className="learning-env__arrow learning-env__arrow--next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            →
          </button>
        </div>

        <p className="learning-env__note">
          CCTV monitoring for safety – Daily parent updates and learning reports –
          Healthy, balanced meals and snacks – Support from child psychologists &amp;
          pediatricians
        </p>

        <button className="learning-env__button" type="button">
          Watch Our Room Tour
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
