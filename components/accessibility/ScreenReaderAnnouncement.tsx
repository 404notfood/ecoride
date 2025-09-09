"use client";

import { useEffect, useState } from "react";

interface ScreenReaderAnnouncementProps {
  message: string;
  priority?: "polite" | "assertive";
}

export const ScreenReaderAnnouncement = ({ 
  message, 
  priority = "polite" 
}: ScreenReaderAnnouncementProps) => {
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    if (message) {
      setAnnouncement(message);
      // Réinitialiser le message après l'annonce
      const timer = setTimeout(() => {
        setAnnouncement("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
      role="status"
    >
      {announcement}
    </div>
  );
};

export default ScreenReaderAnnouncement;
