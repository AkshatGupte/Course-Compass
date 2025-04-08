
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-course-dark mb-6">About Course Compass</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to help learners navigate the vast landscape of online education.
            </p>
            <div className="h-1 w-20 bg-course-teal mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold text-course-dark mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Course Compass was born out of a simple observation: with thousands of online courses available, finding the right ones for your specific needs can be overwhelming.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of education enthusiasts and data scientists came together to solve this problem. We've built a sophisticated recommendation system that understands your goals, learning style, and background to suggest the most relevant courses.
              </p>
              <p className="text-gray-600">
                What started as a small project has grown into a comprehensive platform that helps learners around the world find their ideal educational path.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="rounded-xl bg-gradient-to-br from-course-blue/20 to-course-teal/30 p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold bg-gradient-to-r from-course-blue to-course-teal text-transparent bg-clip-text mb-4">CC</div>
                  <p className="text-gray-600 text-xl">Est. 2023</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-course-dark mb-4">Our Team</h2>
            <p className="text-gray-600">
              Meet the passionate minds behind Course Compass who are dedicated to transforming online education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Akshat Gupte",
                role: "ML Developer",
                bio: "Data collection, analysis and working of recommender system.",
              },
              {
                name: "Aditya Tiwari",
                role: "Frontend Developer",
                bio: "Frontend of whole website with UI/UX.",
              },
              {
                name: "Aditya Bajaj",
                role: "Backend Developer",
                bio: "Managing of backend along with roadmap design.",
              },
              {
                name: "Atharva Pagey",
                role: "Database Design",
                bio: "Handling of database for user profiles and roadmap.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-course-blue/20 to-course-teal/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-course-dark">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-course-dark mb-1">{member.name}</h3>
                <p className="text-course-teal font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 md:py-20 bg-course-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl opacity-90 mb-8">
              "To empower learners to find their perfect educational path by providing personalized course recommendations and custom learning roadmaps."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { value: "1000+", label: "Courses Analyzed" },
                { value: "50+", label: "Learning Platforms" },
                { value: "10k+", label: "Happy Learners" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4"
                >
                  <div className="text-4xl font-bold text-course-teal mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
