
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Trash2, Save, CalendarDays, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  date: string;
  month: string;
  year: string;
}

const Roadmap = () => {
  const { toast } = useToast();
  const [roadmapTitle, setRoadmapTitle] = useState<string>("Your Journey");
  const [items, setItems] = useState<RoadmapItem[]>([]);
  const [newItemTitle, setNewItemTitle] = useState<string>("");
  const [newItemDescription, setNewItemDescription] = useState<string>("");
  const [newItemMonth, setNewItemMonth] = useState<string>("");
  const [newItemYear, setNewItemYear] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(true);

  // Initialize with sample data
  useEffect(() => {
    if (items.length === 0) {
      setItems([
        {
          id: "1",
          title: "Basics of C++",
          description: "Basic syntax, loops, selection statements",
          date: "2025-01-15",
          month: "January",
          year: "2025",
        },
        {
          id: "2",
          title: "OOP Concepts",
          description: "Inheritance, Overloading, Polymorphism",
          date: "2025-02-01",
          month: "February",
          year: "2025",
        },
        {
          id: "3",
          title: "STL",
          description: "Data structures, implementations",
          date: "2025-02-15",
          month: "February",
          year: "2025",
        },
        {
          id: "4",
          title: "DSA",
          description: "Questions on GFG, Leetcode",
          date: "2025-03-01",
          month: "March",
          year: "2025",
        },
        {
          id: "5",
          title: "Competitive Programming",
          description: "Online/Offline cp events",
          date: "2025-04-01",
          month: "April",
          year: "2025",
        },
      ]);
    }
  }, [items.length]);

  const addItem = () => {
    if (!newItemTitle) return;
    
    const newItem = {
      id: Date.now().toString(),
      title: newItemTitle,
      description: newItemDescription,
      date: new Date().toISOString().split('T')[0],
      month: newItemMonth || "January",
      year: newItemYear || "2024",
    };
    
    setItems([...items, newItem]);
    setNewItemTitle("");
    setNewItemDescription("");
    setNewItemMonth("");
    setNewItemYear("");
    
    toast({
      title: "Milestone added",
      description: "Your roadmap milestone has been added successfully.",
    });
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    
    toast({
      title: "Milestone removed",
      description: "Your roadmap milestone has been removed.",
      variant: "destructive",
    });
  };

  const saveRoadmap = () => {
    if (!roadmapTitle || items.length === 0) {
      toast({
        title: "Cannot save roadmap",
        description: "Please add a title and at least one milestone to your roadmap.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSaving(true);
    
    // Simulate saving process
    setTimeout(() => {
      setIsSaving(false);
      setIsEditMode(false);
      toast({
        title: "Roadmap saved!",
        description: "Your roadmap has been saved successfully.",
      });
    }, 1500);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // Random star positions for the background
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    animationDelay: Math.random() * 5,
  }));

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Background with stars */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.5, star.opacity],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {isEditMode ? (
        // Edit Mode
        <div className="relative z-10 pt-24 pb-16">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-10">
                <motion.h1 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl font-bold text-white mb-4"
                >
                  Create Your Roadmap
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-blue-100 max-w-2xl mx-auto"
                >
                  Map out your journey step by step. Add milestones with dates to create a visual timeline.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 mb-8"
              >
                <div className="mb-6">
                  <label htmlFor="roadmapTitle" className="block text-sm font-medium text-white mb-1">
                    Roadmap Title
                  </label>
                  <Input
                    id="roadmapTitle"
                    placeholder="e.g., Your Journey"
                    value={roadmapTitle}
                    onChange={(e) => setRoadmapTitle(e.target.value)}
                    className="w-full bg-white/20 text-white placeholder:text-blue-200/70 border-blue-400/30"
                  />
                </div>
                
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-cyan-400 text-blue-900 flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                          </div>
                          <p className="text-blue-100 pl-8">{item.description}</p>
                          <div className="flex items-center text-cyan-300 mt-2 pl-8">
                            <CalendarDays className="h-4 w-4 mr-1" />
                            <span className="text-sm">{item.month} {item.year}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-blue-200 hover:text-red-400 bg-transparent border-none cursor-pointer p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-dashed border-blue-400/30"
                  >
                    <h3 className="font-semibold text-lg text-white mb-3 flex items-center gap-2">
                      <motion.div 
                        animate={{ rotate: [0, 10, -10, 10, 0] }}
                        transition={{ repeat: Infinity, repeatDelay: 5, duration: 2 }}
                      >
                        <PlusCircle className="h-5 w-5 text-cyan-400" />
                      </motion.div>
                      Add New Milestone
                    </h3>
                    
                    <div className="space-y-3">
                      <div>
                        <label htmlFor="stepTitle" className="block text-sm font-medium text-white mb-1">
                          Milestone Title
                        </label>
                        <Input
                          id="stepTitle"
                          placeholder="e.g., Product Launch"
                          value={newItemTitle}
                          onChange={(e) => setNewItemTitle(e.target.value)}
                          className="w-full bg-white/20 text-white placeholder:text-blue-200/70 border-blue-400/30"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="stepDescription" className="block text-sm font-medium text-white mb-1">
                          Description
                        </label>
                        <Textarea
                          id="stepDescription"
                          placeholder="Describe this milestone..."
                          value={newItemDescription}
                          onChange={(e) => setNewItemDescription(e.target.value)}
                          className="w-full min-h-[80px] bg-white/20 text-white placeholder:text-blue-200/70 border-blue-400/30"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="stepMonth" className="block text-sm font-medium text-white mb-1">
                            Month
                          </label>
                          <Input
                            id="stepMonth"
                            placeholder="e.g., January"
                            value={newItemMonth}
                            onChange={(e) => setNewItemMonth(e.target.value)}
                            className="w-full bg-white/20 text-white placeholder:text-blue-200/70 border-blue-400/30"
                          />
                        </div>
                        <div>
                          <label htmlFor="stepYear" className="block text-sm font-medium text-white mb-1">
                            Year
                          </label>
                          <Input
                            id="stepYear"
                            placeholder="e.g., 2024"
                            value={newItemYear}
                            onChange={(e) => setNewItemYear(e.target.value)}
                            className="w-full bg-white/20 text-white placeholder:text-blue-200/70 border-blue-400/30"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            onClick={addItem} 
                            disabled={!newItemTitle}
                            className="bg-cyan-500 hover:bg-cyan-600 text-blue-950"
                          >
                            Add Milestone
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    onClick={saveRoadmap} 
                    disabled={isSaving || !roadmapTitle || items.length === 0}
                    className="bg-cyan-500 hover:bg-cyan-600 text-blue-950"
                  >
                    {isSaving ? (
                      <span className="animate-pulse">Saving...</span>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Roadmap
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      ) : (
        // View Mode - Centered Timeline with points on the line
        <div className="relative z-10 pt-16 pb-24 min-h-screen flex flex-col items-center">
          <div className="container px-4 md:px-6 flex-grow">
            <div className="flex justify-between items-center mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              >
                {roadmapTitle}
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={toggleEditMode} 
                  variant="outline"
                  className="bg-transparent border border-blue-400/40 text-blue-100 hover:bg-blue-800/20"
                >
                  Edit Roadmap
                </Button>
              </motion.div>
            </div>
            
            {/* Centered Timeline */}
<div className="mt-32 mb-16 relative flex justify-center">
  {/* Main horizontal line */}
  <div className="absolute h-1.5 bg-cyan-500/20 rounded-full w-full top-1/2 transform -translate-y-1/2">
    {/* Animated line fill */}
    <motion.div
      className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ 
        duration: 1.5,
        ease: "easeOut"
      }}
    />
  </div>

  {/* Timeline items directly ON the line */}
  <div className="relative w-full min-h-[200px]">
  {items.map((item, index) => {
    const position = (index / (items.length - 1)) * 100;

    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2 + index * 0.1,
          duration: 0.7,
          type: "spring",
        }}
        className="absolute top-1/2 transform -translate-y-1/2"
        style={{ left: `${position}%` }}
      >
        {/* Dot exactly on the line */}
        <motion.div
          className="w-4 h-4 rounded-full bg-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          whileHover={{ scale: 1.5 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(34, 211, 238, 0.7)",
              "0 0 0 10px rgba(34, 211, 238, 0)",
              "0 0 0 0 rgba(34, 211, 238, 0)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatDelay: 1,
          }}
        />

        {/* Text and box below the dot */}
        <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="text-cyan-300 font-medium mb-1 text-sm"
          >
            <span>{item.month}</span>
            <span className="mx-1">•</span>
            <span>{item.year}</span>
          </motion.div>
          <motion.div
            className="w-[200px] bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 p-3 rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)",
            }}
          >
            <h3 className="font-bold text-md text-white mb-1">{item.title}</h3>
            <p className="text-blue-100 text-xs">{item.description}</p>
          </motion.div>
        </div>
      </motion.div>
    );
  })}
</div>


{/* Rocket animation directly on the line */}
<motion.div
  initial={{ left: "-50px" }}
  animate={{ left: "calc(100% + 50px)" }}
  transition={{ 
    duration: 15, 
    ease: "linear",
    repeat: Infinity,
  }}
  className="absolute top-1/2 transform -translate-y-1/2"
>
  <div className="relative">
    {/* Rocket exhaust trail */}
    <motion.div
      animate={{ 
        width: ["30px", "60px", "30px"],
        opacity: [0.7, 0.4, 0.7]
      }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute right-7 top-1/2 h-1 bg-gradient-to-l from-transparent to-cyan-400 rounded-l-full -z-10 transform -translate-y-1/2"
    />
    
    <Rocket size={20} className="text-cyan-400" />
  </div>
</motion.div>
</div>

          
          {/* Roadmap title at the bottom center */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;