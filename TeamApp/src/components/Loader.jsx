import React, { useEffect, useState } from "react";

export default function Loader({ start }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (start) {
      setIsVisible(true); // Show the loader when start is true

      const timer = setTimeout(() => {
        setIsVisible(false); // Hide the loader after 3 seconds
      }, 7000);

      return () => clearTimeout(timer); // Cleanup the timer when component unmounts
    } else {
      setIsVisible(false); // Hide the loader immediately if start is false
    }
  }, [start]); // Runs whenever 'start' prop changes

  return isVisible ? (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  ) : null;
}
