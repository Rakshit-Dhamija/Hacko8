import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const Carousel3D = ({ slides, autoplay = true, interval = 3000, arrows = false, onSlideChange = () => {} }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideItems, setSlideItems] = useState(() => {
    if (!slides || slides.length === 0) return [];
    const items = slides.map((slide, index) => ({
      state: index === 0 ? 'active' : (index === 1 ? 'proactive' : 'proactivede'),
      element: slide
    }));
    if (slides.length === 2) {
      items.push(...slides.map(slide => ({ state: 'proactivede', element: slide })));
    }
    return items;
  });
  const autoplayRef = useRef(null);
  const currentIndexRef = useRef(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => moveNext(),
    onSwipedRight: () => movePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    if (autoplay && slides.length > 1) {
      const timer = setTimeout(() => {
        autoplayRef.current = setInterval(() => {
          moveNext();
        }, interval);
      }, 500);
      return () => {
        if (autoplayRef.current) {
          clearInterval(autoplayRef.current);
        }
        clearTimeout(timer);
      };
    }
  }, [slides, autoplay, interval]);

  const moveNext = () => {
    if (!slides || slides.length <= 1 || !slideItems || slideItems.length === 0) return;
  
    let newIndex = currentIndexRef.current;
    newIndex = newIndex < slides.length - 1 ? newIndex + 1 : 0;
  
    const newSlideItems = [...slideItems];
  
    newSlideItems.forEach(item => {
      if (item.state === 'preactivede') item.state = 'proactivede';
      if (item.state === 'preactive') item.state = 'preactivede';
    });
  
    const prevIndex = newIndex > 0 ? newIndex - 1 : slides.length - 1;
    const nextIndex = newIndex < slides.length - 1 ? newIndex + 1 : 0;
    
    if (prevIndex >= 0 && prevIndex < newSlideItems.length &&
        newIndex >= 0 && newIndex < newSlideItems.length &&
        nextIndex >= 0 && nextIndex < newSlideItems.length) {
        
      const prevSlide = newSlideItems[prevIndex];
      const activeSlide = newSlideItems[newIndex];
      const nextSlide = newSlideItems[nextIndex];
      
      if (prevSlide && activeSlide && nextSlide) {
        prevSlide.state = 'preactive';
        activeSlide.state = 'active';
        nextSlide.state = 'proactive';
        
        setSlideItems(newSlideItems);
        setCurrentSlide(newIndex);
        currentIndexRef.current = newIndex;
        onSlideChange(newIndex);
      }
    }
  };
  
  const movePrev = () => {
    if (slides.length <= 1) return;

    let newIndex = currentIndexRef.current;
    newIndex = newIndex > 0 ? newIndex - 1 : slides.length - 1;

    const newSlideItems = [...slideItems];

    newSlideItems.forEach(item => {
      if (item.state === 'proactivede') item.state = 'preactivede';
      if (item.state === 'proactive') item.state = 'proactivede';
    });

    const prevSlide = newIndex > 0 ? newSlideItems[newIndex - 1] : newSlideItems[slides.length - 1];
    const activeSlide = newSlideItems[newIndex];
    const nextSlide = newIndex < slides.length - 1 ? newSlideItems[newIndex + 1] : newSlideItems[0];

    prevSlide.state = 'preactive';
    activeSlide.state = 'active';
    nextSlide.state = 'proactive';

    setSlideItems(newSlideItems);
    setCurrentSlide(newIndex);
    currentIndexRef.current = newIndex;
    onSlideChange(newIndex);
  };

  const getSlideClasses = (state) => {
    switch (state) {
      case 'active': 
        return 'z-30 opacity-100 scale-100 translate-x-0'; // Center card (fully visible)
      case 'preactive': 
        return 'z-20 opacity-70 scale-80 -translate-x-[60%]'; // Left card (60% hidden)
      case 'proactive': 
        return 'z-20 opacity-70 scale-80 translate-x-[60%]'; // Right card (60% hidden)
      case 'preactivede': 
        return 'z-0 opacity-0 scale-0 -translate-x-[200%]'; // Fully hidden (left)
      case 'proactivede': 
        return 'z-0 opacity-0 scale-0 translate-x-[200%]'; // Fully hidden (right)
      default: 
        return 'opacity-0 scale-0';
    }
  };

  return (
    <div className="relative h-[200px] sm:h-[400px]" {...handlers}>
      <div className="absolute left-1/2 top-0 w-[90%] -ml-[45%]">
        <div className="relative left-1/2 transform -translate-x-1/2 w-[80%] h-[80%]">
          {slideItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center absolute left-0 top-0 w-full transition-all duration-500 ease-out"
              data-state={item.state}
            >
              <div
                className={`flex justify-center relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-out ${getSlideClasses(item.state)}`}
              >
                <div className="w-full">
                  {item.element}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.ceil(current);
      }, 20);
    });
    const hourCounter = document.querySelector('.counter-hour');
    if (hourCounter) {
      let current = 16;
      const timer = setInterval(() => {
        current += 0.04; // Slower increment for smooth effect
        if (current >= 20) {
          current = 20;
          clearInterval(timer);
          hourCounter.textContent = "16 - 20th Arpil 2025";
        } else {
          hourCounter.textContent = `16 - ${Math.ceil(current)}th Arpil 2025`;
        }
      }, 20);
    }
  };

  const slides = [
    <div className="rounded-xl overflow-hidden xl:w-[500px] xl:h-[400px] border-4 border-[#4FC1E0]">
      <img src="https://pplx-res.cloudinary.com/image/upload/v1743936354/user_uploads/ZiwwGPAErakYoOQ/S1420033_022.jpg" alt="Toastmaster" className="w-full xl:w-[500px] xl:h-[400px] object-fill" />
    </div>,
    <div className="rounded-xl overflow-hidden xl:w-[500px] xl:h-[400px] border-4 border-[#4FC1E0]">
      <img src="https://pplx-res.cloudinary.com/image/upload/v1743936354/user_uploads/eYbrwTODjVwNHdF/S1440004_008.jpg" alt="Pitch" className="w-full xl:w-[500px] xl:h-[400px] object-fill" />
    </div>,
    <div className="rounded-xl overflow-hidden xl:w-[500px] xl:h-[400px] border-4 border-[#4FC1E0]">
      <img src="https://pplx-res.cloudinary.com/image/upload/v1743936355/user_uploads/pPaNBixwctYkfPk/S1420043_063.jpg" alt="Hackathon" className="w-full xl:w-[500px] xl:h-[400px] object-fill" />
    </div>,
    <div className="rounded-xl overflow-hidden xl:w-[500px] xl:h-[400px] border-4 border-[#4FC1E0]">
      <img src="https://pplx-res.cloudinary.com/image/upload/v1744451665/user_uploads/yZBkYKivRmQxtUA/Screenshot-2025-04-10-121723.jpg"  alt="Group Photo" className="w-full xl:w-[500px] xl:h-[400px] object-fill"/>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-transparent text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute top-24 left-12 w-2 h-2 bg-[#4FC1E0] rounded-full"></div>
      <div className="absolute bottom-24 left-64 w-2 h-2 bg-[#4FC1E0] rounded-full"></div>
      <div className="absolute bottom-64 right-24 w-2 h-2 bg-[#4FC1E0] rounded-full"></div>
      
      <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wide animate-out">
            About HACKOWASP 7.0
          </h1>
          <p className="text-gray-400 mt-4 text-xl sm:text-2xl tracking-wide">
            Explore the Realm of Coding
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4 shadow-[0_0_10px_rgba(0,255,255,0.7)]"></div>
        </div>
      
      <div className="mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex justify-center items-center overflow-x-clip">
          <div className="w-full">
            <Carousel3D
              slides={slides}
              autoplay={true}
              interval={3000}
              arrows={false}
              // onSlideChange={(index) => console.log(`Slide changed to index: ${index}`)}
            />
          </div>
        </div>
        
        <div className="lg:w-1/2 lg:pl-8">
          <div className="mb-8">
            <h2 className="text-3xl mb-4">
              <span className="text-[#4FC1E0]">Build Your Code </span>
              <span className="text-white"> One Brick at a Time!</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              HACKOWASP is an annual national hackathon organized by the members of the OWASP Student Chapter, Thapar Institute of Engineering and Technology, Patiala. Continuing the legacy forward, the seventh edition of the event, HACKOWASP gives a chance to all the ingenious developers to subsume creativity with ambition and give rise to innovation in the burgeoning world of technology. HACKOWASP stands at a national level on the global scale and strives to motivate students to go beyond the possible.
            </p>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
              <div className="border border-cyan-500/30 rounded-xl p-6 bg-gray-900/50 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300">
                <span className="text-cyan-400 text-4xl font-bold mb-2 counter" data-target="150">0</span>
                <span className="text-cyan-400 text-3xl ml-2">+</span>
                <p className="text-gray-400 text-base">Past Projects Submitted</p>
              </div>
              <div className="border border-cyan-500/30 rounded-xl p-6 bg-gray-900/50 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300">
                <span className="text-cyan-400 text-4xl font-bold mb-2 counter" data-target="150">0</span>
                <span className="text-cyan-400 text-3xl ml-2">+</span>
                <p className="text-gray-400 text-base">Past Participating Teams</p>
              </div>
              <div className="border border-cyan-500/30 rounded-xl p-6 bg-gray-900/50 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300">
                <span className="text-cyan-400 text-4xl font-bold mb-2 counter" data-target="7">0</span>
                <span className="text-cyan-400 text-3xl ml-2">+</span>
                <p className="text-gray-400 text-base">Lakhs Prize Pool</p>
              </div>
              <div className="border border-cyan-500/30 rounded-xl p-6 bg-gray-900/50 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300">
                <h3 className="text-cyan-400 text-3xl font-bold mb-2 counter-hour">0</h3>
                <p className="text-gray-400 text-base">Dates for the event</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;