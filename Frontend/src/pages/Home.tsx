
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-12 bg-course-teal rounded-full"></div>
                <p className="text-course-teal font-medium">Smart Learning Paths</p>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-course-dark">
                Find the <span className="text-course-teal">Perfect</span> Courses for Your Journey
              </h1>
              
              <p className="text-gray-600 text-lg md:text-xl">
                Discover personalized course recommendations tailored to your goals, skills, and learning style.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link to="/recommend">
                  <Button size="lg" className="bg-course-teal hover:bg-course-teal/90 text-white gap-2">
                    Get Recommendations
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/roadmap">
                  <Button size="lg" variant="outline" className="border-course-teal text-course-teal hover:bg-course-teal/10">
                    Create a Roadmap
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-2xl bg-gradient-to-br from-course-blue/10 to-course-teal/20 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold bg-gradient-to-r from-course-blue to-course-teal text-transparent bg-clip-text mb-4">ML</div>
                  <p className="text-gray-600">ML Model Integration Ready</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-course-dark mb-4">Why Choose Course Compass?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform uses advanced algorithms to help you navigate the sea of online courses and find the perfect learning path.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Recommendations",
                description: "Get course suggestions tailored to your unique learning profile and career goals.",
                icon: "🎯",
              },
              {
                title: "Custom Learning Roadmaps",
                description: "Create your own educational journey with our interactive roadmap builder.",
                icon: "🗺️",
              },
              {
                title: "Smart Course Matching",
                description: "Our ML model finds the perfect match between your needs and available courses.",
                icon: "🤖",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-course-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-course-blue to-course-teal text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Learning Path?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Get started with Course Compass today and discover courses that match your goals and learning style.
          </p>
          <Link to="/recommend">
            <Button size="lg" className="bg-white text-course-teal hover:bg-white/90">
              Get Course Recommendations
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
