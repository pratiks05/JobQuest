import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleRoleSelection = async (role) => {
    await user
      .update({
        unsafeMetadata: { role },
      })
      .then(() => {
        navigate(role === "recruiter" ? "/post-job" : "/jobs");
      })
      .catch((err) => {
        console.error("Error updating role", err);
      });
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigate(user.unsafeMetadata.role === "recruiter" ? "/post-job" : "/jobs");
    }
  }, [user]);

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  // Define styles for the card, with hover effect based on state
  const cardStyles = {
    position: 'relative',
    border: isHovered ? '2px solid #ffffff' : '2px solid #dcdcdc',  // Thinner border (2px) by default
    boxShadow: isHovered
      ? '0 0 15px rgba(255, 255, 255, 0.6), 0 0 25px rgba(255, 255, 255, 0.6)'  // Glow effect on hover
      : 'none',  // No shadow by default
    backgroundColor: 'black',
    opacity: 0.7,
    transition: 'all 0.3s ease-in-out',  // Smooth transition effect
  };

  const textStyles = {
    color: 'white',  // White text color
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div
        style={cardStyles} // Apply dynamic styles based on hover state
        className="w-full max-w-2xl p-10 rounded-lg mb-20"
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
      >
        <h2 style={textStyles} className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
          Select Your Role
        </h2>
        <p style={textStyles} className="text-center text-xl mb-4">
          To get started, let us know if you are a job seeker or a recruiter. This will help tailor your experience!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-2">
          <Button
            variant="blue"
            className="w-full sm:w-auto h-16 text-2xl rounded-lg transition-all duration-200"
            onClick={() => handleRoleSelection("candidate")}
          >
            Candidate
          </Button>
          <Button
            variant="destructive"
            className="w-full sm:w-auto h-16 text-2xl rounded-lg transition-all duration-200"
            onClick={() => handleRoleSelection("recruiter")}
          >
            Recruiter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
