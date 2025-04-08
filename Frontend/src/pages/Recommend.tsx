import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Recommend = () => {
  const [query, setQuery] = useState(""); // Store user input
  const [recommendations, setRecommendations] = useState(null); // Store API response
  const [loading, setLoading] = useState(false); // Handle loading state
  const [error, setError] = useState(null); // Handle errors

  const fetchRecommendations = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://127.0.0.1:8000/recommend?query=${query}`);
      const { udemy, coursera, youtube } = response.data;

      // Sort Udemy & Coursera courses by rating (descending)
      const sortByRating = (courses) =>
        courses.sort((a, b) => (b.avg_rating || 0) - (a.avg_rating || 0));

      setRecommendations({
        udemy: sortByRating(udemy),
        coursera: sortByRating(coursera),
        youtube, // YouTube courses remain unchanged
      });
    } catch (err) {
      setError("Failed to fetch recommendations. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-course-dark mb-4">Course Recommendations</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enter a topic to get personalized course recommendations.
            </p>
          </div>

          {/* Search Input */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Enter a topic (e.g. AI, Data Science)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border border-gray-300 p-2 rounded-l-md w-80"
            />
            <Button onClick={fetchRecommendations} className="rounded-r-md">Search</Button>
          </div>

          {/* Show Loading State */}
          {loading && <p>Loading recommendations...</p>}

          {/* Show Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Display Recommendations */}
          {recommendations && (
            <div className="mt-8 text-left">

              {/* Udemy Courses */}
              <h2 className="text-2xl font-semibold mb-4">Udemy Courses</h2>
              {recommendations.udemy.map((course, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-md mb-2">
                  <a href={course.course_url} target="_blank" rel="noopener noreferrer" className="text-course-blue font-semibold">{course.title}</a>
                  <p>⭐ {course.avg_rating}</p>
                </div>
              ))}

              {/* Coursera Courses */}
              <h2 className="text-2xl font-semibold mt-6 mb-4">Coursera Courses</h2>
              {recommendations.coursera.map((course, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-md mb-2">
                  <a href={course.course_url} target="_blank" rel="noopener noreferrer" className="text-course-blue font-semibold">{course.title}</a>
                  <p>⭐ {course.avg_rating}</p>
                </div>
              ))}

              {/* YouTube Courses */}
              <h2 className="text-2xl font-semibold mt-6 mb-4">YouTube Courses</h2>
              {recommendations.youtube.title &&
                Object.keys(recommendations.youtube.title).map((key) => (
                  <div key={key} className="p-4 bg-gray-100 rounded-md mb-2">
                    <a href={recommendations.youtube.url[key]} target="_blank" rel="noopener noreferrer" className="text-course-blue font-semibold">
                      {recommendations.youtube.title[key]}
                    </a>
                    <p>📺 {recommendations.youtube.platform[key]}</p>
                  </div>
                ))
              }
            </div>
          )}

          <Link to="/">
            <Button variant="outline" className="gap-2 mt-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Recommend;
