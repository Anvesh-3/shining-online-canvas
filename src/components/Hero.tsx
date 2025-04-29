import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-900 dark:to-black" />

      <div className="container px-4 mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Avatar Section */}
          <div className="md:order-2 flex justify-center">
            <Avatar className="h-36 w-36 md:h-48 md:w-48 border-4 border-primary/20 shadow-lg">
              <AvatarImage
                src="public/WhatsApp Image 2025-04-30 at 01.32.54_0b86c255.jpg"
                alt="Anvesh Tiwari"
                loading="lazy"
                onError={(e) => {
                  // fallback if Drive link fails
                  e.currentTarget.src = "https://via.placeholder.com/150?text=Anvesh";
                }}
              />
              <AvatarFallback>AT</AvatarFallback>
            </Avatar>
          </div>

          {/* Text Content */}
          <div className="max-w-3xl md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
              Hello, I'm <span className="text-primary">Anvesh Tiwari</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              Data Analyst & Computer Science Engineer
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8">
              I analyze data and create insights that help businesses make informed decisions and achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
