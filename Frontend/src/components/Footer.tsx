
import { Book } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-course-dark font-bold mb-4">
              <Book className="h-5 w-5 text-course-teal" />
              <span className="text-lg">Course Compass</span>
            </div>
            <p className="text-gray-600 text-sm">
              Navigating your educational journey with personalized course recommendations.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-course-dark uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-course-teal transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-course-teal transition-colors">About Us</Link></li>
              <li><Link to="/roadmap" className="text-gray-600 hover:text-course-teal transition-colors">Create Roadmap</Link></li>
              <li><Link to="/recommend" className="text-gray-600 hover:text-course-teal transition-colors">Get Recommendations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-course-dark uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-course-teal transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-course-teal transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:text-course-teal transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-course-teal transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-course-dark uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-course-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-course-teal transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-course-teal transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Course Compass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
