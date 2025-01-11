import Slider from "react-slick"; // Import react-slick for sliding functionality

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      quote:
        "Before working with CloudFixMedia, I was stuck at a 2x ROAS on Facebook ads. After partnering with them, my ROAS skyrocketed to 4x! Their expertise in men’s fashion transformed my business. Highly recommend!",
      name: "Arjun Mehta",
      job: "Founder, TrendyWear",
    },
    {
      quote:
        "Working with CloudFixMedia has been the best decision for my men’s fashion brand. Now I’m seeing 4x consistently. They understand men’s fashion and know exactly how to drive results!",
      name: "Priya Nair",
      job: "CEO, Urban Threads",
    },
    {
      quote:
        "I was burning through my budget with poor returns until CloudFixMedia stepped in. They streamlined my ad strategy and took me from wasted spend to consistent 4x ROAS. Absolutely worth it!",
      name: "Ravi Sharma",
      job: "Marketing Head, EthnicCrafts",
    },
    {
      quote:
        "My ad budget felt like a black hole—high spend, low returns. CloudFixMedia revamped everything, optimizing my campaigns to achieve a solid 3.7x ROAS. Highly recommend their expertise!",
      name: "Ananya Singh",
      job: "Founder, StyleFusion",
    },
    {
      quote:
        "After being disappointed by another agency, I gave CloudFixMedia a try. They turned my campaigns around, boosting my ROAS from 2x to 4x. Wish I found them sooner!",
      name: "Karan Patel",
      job: "Owner, Elite Couture",
    },
  ];

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop through the testimonials infinitely
    speed: 500, // Speed of the transition
    slidesToShow: 3, // Show three testimonials at a time
    slidesToScroll: 1, // Scroll one testimonial at a time
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Set the time for each slide (in milliseconds)
    swipeToSlide: true, // Enable gesture swiping
    touchMove: true, // Allow moving the slides with gestures
    responsive: [
      {
        breakpoint: 1024, // For medium screens (tablets)
        settings: {
          slidesToShow: 2, // Show two testimonials at a time
        },
      },
      {
        breakpoint: 768, // For smaller screens (mobiles)
        settings: {
          slidesToShow: 1, // Show one testimonial at a time
        },
      },
    ],
  };

  return (
    <div className="w-full h-full py-10 bg-black text-white text-center px-8 md:px-16">
      <h1 className="text-xl md:text-4xl mb-6 font-bold">
        What our clients say
      </h1>

      <div className="relative">
        {/* Slick slider component */}
        <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
  <div key={index} className="px-1 md:px-4">
    <div
      className="bg-gray-800 p-5 rounded-lg text-sm md:text-lg h-full text-start flex flex-col justify-between space-y-4"
    >
      <p className="italic line-clamp-4 md:line-clamp-5">
        &quot;{testimonial.quote}&quot;
      </p>
      <div>
        <p className="font-semibold truncate">{testimonial.name}</p>
        <p className="text-sm truncate">{testimonial.job}</p>
      </div>
    </div>
  </div>
))}

        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;