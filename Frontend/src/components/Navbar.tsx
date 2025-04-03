
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Book, Home, Info, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", Icon: Home },
    { name: "About Us", path: "/about", Icon: Info },
    { name: "Roadmap", path: "/roadmap", Icon: MapPin },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300", 
      isScrolled ? "bg-white bg-opacity-95 shadow-md" : "bg-transparent"
    )}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2 text-course-dark font-bold">
          <Book className="h-6 w-6 text-course-teal" />
          <span className="text-xl">Course Compass</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={cn(
                "flex items-center gap-1 text-gray-600 hover:text-course-teal transition-colors duration-200",
                location.pathname === item.path && "text-course-teal font-medium"
              )}
            >
              <item.Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/recommend">
            <Button className="bg-course-teal hover:bg-course-teal/90 text-white">
              Get Recommendations
            </Button>
          </Link>
          
          {/* Mobile menu - would expand in a real implementation */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
