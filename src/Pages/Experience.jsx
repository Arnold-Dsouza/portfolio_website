import React, { useState, useEffect } from "react";
import { Briefcase, GraduationCap, Building, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Experience Card component with removed animations
const WorkExperienceCard = ({ data, index, currentIndex, direction }) => {
  const isActive = index === currentIndex;
  const isPrev = direction === 'next' ? index === currentIndex - 1 : index === currentIndex + 1;
  const isNext = direction === 'next' ? index === currentIndex + 1 : index === currentIndex - 1;
  
  // Convert description string to bullet points array
  const descriptionPoints = data.description.split('. ').filter(point => point.trim() !== '').map(point => 
    point.endsWith('.') ? point : point + '.'
  );

  // Map location to flag emoji
  const getCountryFlag = (location) => {
    if (location.includes('Germany')) return '🇩🇪';
    if (location.includes('India')) return '🇮🇳';
    if (location.includes('Mumbai')) return '🇮🇳';
    if (location.includes('Pune')) return '🇮🇳';
    if (location.includes('Guwahati')) return '🇮🇳';
    if (location.includes('Sankt Augustin')) return '🇩🇪';
    if (location.includes('Bonn')) return '🇩🇪';
    return '🌍'; // Default flag
  };
  
  return (
    <div 
      className={`absolute w-full transition-all duration-700 ease-in-out ${
        isActive 
          ? 'opacity-100 z-20 translate-x-0 shadow-2xl shadow-[#6366f1]/5'
          : isPrev
            ? 'opacity-0 z-10 -translate-x-full'
            : isNext
              ? 'opacity-0 z-10 translate-x-full'
              : 'opacity-0 z-0'
      }`}
    >
      <div className="relative overflow-hidden rounded-xl bg-[#030014]/80 border border-white/10 hover:border-white/20 shadow-xl transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7]"></div>
        
        <div className="p-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-[#6366f1]/10">
              <Calendar className="w-5 h-5 text-[#a855f7]" />
            </div>
            <span className="text-sm font-semibold text-gray-300 bg-[#6366f1]/10 px-3 py-1 rounded-full">
              {data.period}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3">{data.title}</h3>
          
          <div className="flex items-center gap-2 mb-4 text-gray-300">
            <Building className="w-4 h-4 text-[#a855f7]" />
            <span className="font-medium">{data.organization}</span>
            {data.location && (
              <>
                <span className="text-gray-500 mx-2">•</span>
                <span className="text-gray-400 flex items-center gap-1">
                  <span className="text-xl" aria-label={`Flag of ${data.location.split(',')[1]?.trim() || data.location}`}>
                    {getCountryFlag(data.location)}
                  </span>
                  <span>{data.location.split(',')[0]}</span>
                </span>
              </>
            )}
          </div>
          
          <div className="bg-[#0f0a2a]/30 rounded-lg p-4 border border-white/5">
            <ul className="text-gray-300 list-disc pl-5 space-y-1.5">
              {descriptionPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            {data.skills && (
              <div className="flex flex-wrap gap-2 mt-4">
                {data.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full text-purple-200 bg-[#6366f1]/10 border border-[#6366f1]/20">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Education Card component with removed animations
const EducationCard = ({ data, index, currentIndex, direction }) => {
  const isActive = index === currentIndex;
  const isPrev = direction === 'next' ? index === currentIndex - 1 : index === currentIndex + 1;
  const isNext = direction === 'next' ? index === currentIndex + 1 : index === currentIndex - 1;
  
  // Convert description string to bullet points array
  const descriptionPoints = data.description.split('. ').filter(point => point.trim() !== '').map(point => 
    point.endsWith('.') ? point : point + '.'
  );

  // Map location to flag emoji
  const getCountryFlag = (location) => {
    if (location.includes('Germany')) return '🇩🇪';
    if (location.includes('India')) return '🇮🇳';
    if (location.includes('Mumbai')) return '🇮🇳';
    if (location.includes('Pune')) return '🇮🇳';
    if (location.includes('Guwahati')) return '🇮🇳';
    if (location.includes('Sankt Augustin')) return '🇩🇪';
    if (location.includes('Bonn')) return '🇩🇪';
    return '🌍'; // Default flag
  };
  
  return (
    <div 
      className={`absolute w-full transition-all duration-700 ease-in-out ${
        isActive 
          ? 'opacity-100 z-20 translate-x-0 shadow-2xl shadow-[#6366f1]/5'
          : isPrev
            ? 'opacity-0 z-10 -translate-x-full'
            : isNext
              ? 'opacity-0 z-10 translate-x-full'
              : 'opacity-0 z-0'
      }`}
    >
      <div className="relative overflow-hidden rounded-xl bg-[#030014]/80 border border-white/10 hover:border-white/20 shadow-xl transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7]"></div>
        
        <div className="flex flex-col md:flex-row">
          {/* Image on the left side */}
          <div className="md:w-2/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 z-10"></div>
            <img 
              src={data.image} 
              alt={data.title}
              className="w-full h-full object-cover object-center md:h-full"
              style={{ minHeight: "200px" }}
            />
          </div>
          
          {/* Content on the right side */}
          <div className="md:w-3/5 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-[#6366f1]/10">
                <GraduationCap className="w-5 h-5 text-[#a855f7]" />
              </div>
              <span className="text-sm font-semibold text-gray-300 bg-[#6366f1]/10 px-3 py-1 rounded-full">
                {data.period}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">{data.title}</h3>
            
            <div className="flex items-center gap-2 mb-4 text-gray-300">
              <Building className="w-4 h-4 text-[#a855f7]" />
              <span className="font-medium">{data.organization}</span>
              {data.location && (
                <>
                  <span className="text-gray-500 mx-2">•</span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <span className="text-xl" aria-label={`Flag of ${data.location.split(',')[1]?.trim() || data.location}`}>
                      {getCountryFlag(data.location)}
                    </span>
                    <span>{data.location.split(',')[0]}</span>
                  </span>
                </>
              )}
            </div>
            
            <div className="bg-[#0f0a2a]/30 rounded-lg p-4 border border-white/5">
              <ul className="text-gray-300 list-disc pl-5 space-y-1.5">
                {descriptionPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              {data.skills && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {data.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full text-purple-200 bg-[#6366f1]/10 border border-[#6366f1]/20">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navigation Arrows component 
const NavigationArrows = ({ onPrev, onNext, currentIndex, totalItems }) => {
  return (
    <div className="flex justify-between items-center mt-10">
      <button 
        onClick={onPrev}
        disabled={currentIndex === 0}
        className={`p-3 rounded-full bg-[#0f0a2a]/50 border border-white/10 transition-all ${
          currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#6366f1]/20 hover:border-[#6366f1]/30'
        }`}
      >
        <ChevronLeft className="w-6 h-6 text-gray-300" />
      </button>
      
      <div className="flex gap-2">
        {Array.from({ length: totalItems }).map((_, i) => (
          <div 
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === currentIndex ? 'bg-[#a855f7]' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
      
      <button 
        onClick={onNext}
        disabled={currentIndex === totalItems - 1}
        className={`p-3 rounded-full bg-[#0f0a2a]/50 border border-white/10 transition-all ${
          currentIndex === totalItems - 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#6366f1]/20 hover:border-[#6366f1]/30'
        }`}
      >
        <ChevronRight className="w-6 h-6 text-gray-300" />
      </button>
    </div>
  );
};

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`experience-tabpanel-${index}`}
      aria-labelledby={`experience-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `experience-tab-${index}`,
    "aria-controls": `experience-tabpanel-${index}`,
  };
}

const Experience = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [workIndex, setWorkIndex] = useState(0);
  const [eduIndex, setEduIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 1000,
    });
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleWorkPrev = () => {
    setDirection('prev');
    setWorkIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleWorkNext = () => {
    setDirection('next');
    setWorkIndex((prev) => (prev < workExperienceData.length - 1 ? prev + 1 : prev));
  };

  const handleEduPrev = () => {
    setDirection('prev');
    setEduIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleEduNext = () => {
    setDirection('next');
    setEduIndex((prev) => (prev < educationData.length - 1 ? prev + 1 : prev));
  };

  const workExperienceData = [
    {
      period: "April 2024 - Feburary 2025",
      title: "Research Assistant",
      organization: "Hochschule Bonn-Rhein-Sieg",
      location: "Bonn, Germany",
      description: "Designed & developed a low-cost power board for fast/slow heaters. Optimized AC frequency for heater control. Programmed MCU and tested with multiple heater configurations.",
      skills: ["Hardware Design", "MCU Programming", "Power Electronics"]
    },
    {
      period: "July 2021 - January 2023",
      title: "Graduate Engineer Trainee",
      organization: "Magna Automotive India Private Limited",
      location: "Pune, India",
      description: "Implemented Mobile IOT for machine communication. Created IOT app for reduced breakdowns. Edited Siemens PLC programs. Developed dynamic bar-codes for job tracking. Diagnosed FANUC/KUKA robot faults. Enhanced HMI user experience. Saved ₹13L by repairing VFDs, controllers & drives.",
      skills: ["C++", "HTML/CSS", "TIA Portal", "CSS", "Node JS"]
    },
    {
      period: "August 2020 - January 2021",
      title: "Internship",
      organization: "Christiani Sharpline Technical Training Private Limited",
      location: "Mumbai, India",
      description: "Implemented IO link sensors with dashboard for Industry 4.0. Handled electrical design & PLC wiring. Developed Siemens PLC programming for custom automation needs. Performed mechanical component inspection & coding for automation.",
      skills: ["Ladder logic", "TIA Portal"]
    },
    {
      period: "August 2020 - February 2021",
      title: "Internship",
      organization: "Electronics and ICT Academy Indian Institute of Technology Guwahati",
      location: "Guwahati, India",
      description: "Designed DAC (R-2R Processing Array) using Spice & Magic VLSI. Developed CMOS circuits with industry-standard tools.",
      skills: ["Magic VLSI", "Spice", "Cadence", "Verilog"]
    }
  ];

  const educationData = [
    {
      period: "April 2023 - Present",
      title: "Masters in Autonomous Systems",
      organization: "Hochschule Bonn-Rhein-Sieg",
      location: "Sankt Augustin, Germany",
      description: "Coursework: Machine Learning, AI, Autonomous Mobile Robots, Human Robot Interaction, Software Development, Advanced Software Technology, Robot Learning, Mathematics of Robot Control.",
      skills: ["Machine Learning", "Artificial Intelligence", "Robotics", "HRI"],
      image: "/project-images/hbrs.jpg"
    },
    {
      period: "August 2017 - June 2021",
      title: "Bachelors of Technology in Mechatronics Engineering",
      organization: "Symbiosis Skills and Professional University",
      location: "Pune, India",
      description: "Coursework: Programming (C++, C#, Python), Matlab/Simulink, Applied Mathematics, DSP, Microprocessors, Electric Vehicles, Product Development. Class: 8.88/10 (First Class)",
      skills: ["Programming", "Electronics", "Mechanics", "Thermodynamics"],
      image: "/project-images/sspu.jpg"
    },
    {
      period: "2017",
      title: "Higher Secondary Certificate Examination (HSC)",
      organization: "CES's Michael High School & Marceline Junior College",
      location: "Mumbai, India",
      description: "Grade: 73.69%",
      skills: ["Science"],
      image: "/project-images/college.jpg"
    },
    {
      period: "2015",
      title: "Secondary School Certificate (SSC)",
      organization: "Holy Cross High School",
      location: "Mumbai, India",
      description: "Grade: 75.60%",
      skills: [],
      image: "/project-images/Hchs.jpg"
    }
  ];

  return (
    <div className="md:px-[10%] px-[5%] py-16 w-full bg-[#030014] overflow-hidden" id="Experience">
      {/* Section header */}
      <div className="text-center pb-10" data-aos="fade-up">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Years of Experience
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          My professional journey and educational background in robotics and engineering
        </p>
      </div>

      <Box sx={{ width: "100%" }} data-aos="fade-up">
        {/* Tabs section */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Briefcase className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Work Experience"
              {...a11yProps(0)}
            />
            <Tab
              icon={<GraduationCap className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Education"
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={tabValue}
          onChangeIndex={setTabValue}
        >
          {/* Work Experience Tab */}
          <TabPanel value={tabValue} index={0} dir={theme.direction}>
            <div className="max-w-4xl mx-auto mt-10">
              <div className="relative h-[450px]">
                {workExperienceData.map((item, index) => (
                  <WorkExperienceCard
                    key={index}
                    data={item}
                    index={index}
                    currentIndex={workIndex}
                    direction={direction}
                  />
                ))}
              </div>
              <NavigationArrows
                onPrev={handleWorkPrev}
                onNext={handleWorkNext}
                currentIndex={workIndex}
                totalItems={workExperienceData.length}
              />
            </div>
          </TabPanel>

          {/* Education Tab */}
          <TabPanel value={tabValue} index={1} dir={theme.direction}>
            <div className="max-w-4xl mx-auto mt-10">
              <div className="relative h-[450px]">
                {educationData.map((item, index) => (
                  <EducationCard
                    key={index}
                    data={item}
                    index={index}
                    currentIndex={eduIndex}
                    direction={direction}
                  />
                ))}
              </div>
              <NavigationArrows
                onPrev={handleEduPrev}
                onNext={handleEduNext}
                currentIndex={eduIndex}
                totalItems={educationData.length}
              />
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
};

export default Experience;