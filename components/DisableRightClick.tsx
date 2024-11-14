// components/DisableRightClick.tsx

"use client";

import { useEffect } from "react";

const DisableRightClick = () => {
  useEffect(() => {
    // Function to block context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Function to block common keyboard shortcuts
    const handleKeydown = (e: KeyboardEvent) => {
      // Prevents F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, and Ctrl+Shift+C
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        alert("Developer tools are disabled.");
      }
    };

    // Detect DevTools by measuring window dimensions
    const detectDevTools = () => {
      let devToolsOpen = false;
      const threshold = 160;

      setInterval(() => {
        const widthDiff = window.outerWidth - window.innerWidth > threshold;
        const heightDiff = window.outerHeight - window.innerHeight > threshold;

        if ((widthDiff || heightDiff) && !devToolsOpen) {
          devToolsOpen = true;
          alert("Developer tools are disabled.");
          console.clear(); // Clear console to prevent inspection
        } else if (!(widthDiff || heightDiff) && devToolsOpen) {
          devToolsOpen = false; // Reset when DevTools are closed
        }
      }, 500);
    };

    // Event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeydown);

    // Start DevTools detection
    detectDevTools();

    // Cleanup listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return null; // Component renders nothing to the DOM
};

export default DisableRightClick;
