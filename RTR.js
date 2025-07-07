document.addEventListener("DOMContentLoaded", () => {
  
  // Get canvas and context
  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas ? canvas.getContext("2d") : null;

  if (canvas && ctx) {
    // Set canvas size (adjust as needed)
    canvas.width = 1200; // Default width, adjust based on your design
    canvas.height = 500; // Default height, adjust based on your design

    // Load the hero image
    const img = new Image();
    img.src = "ChatGPT Image Jul 7, 2025, 01_29_30 PM.png"; // Your hero image URL
    img.crossOrigin = "Anonymous"; // For CORS if image is external

    img.onload = () => {
      // Draw image to fill canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Style and draw greeting text
      ctx.font = "1000 50px Montserrat, Arial, sans-serif"; // Large, bold font
      ctx.fillStyle = "#ffffff"; // White text
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "rgba(138, 182, 223, 0.884)"; // Shadow for depth
      ctx.shadowBlur = 5;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;

      // Draw semi-transparent background for text
      const text = greetings.toUpperCase();
      const textWidth = ctx.measureText(text).width;
      const textHeight = 80; // Approximate height based on font size
      const padding = 20;
      ctx.fillStyle = "rgba(255, 255, 255, 0)"; // Semi-transparent background
      ctx.fillRect(
        canvas.width / 2 - textWidth / 2 - padding,
        canvas.height / 2 - textHeight / 2 - padding,
        textWidth + padding * 2,
        textHeight + padding * 2
      );

      // Draw text
      ctx.fillStyle = "#ffffff"; // Reset to white for text
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    };

    img.onerror = () => {
      console.warn("Failed to load hero image.");
    };
  } else {
    console.warn("Canvas element with ID 'hero-canvas' not found or context unavailable.");
  }

  // Scroll to top functionality
  const scrollUpBtn = document.querySelector(".scroll-up");
  if (scrollUpBtn) {
    scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
      scrollUpBtn.classList.toggle("visible", window.scrollY > 300);
    });
  } else {
    console.warn("Scroll-up button with class 'scroll-up' not found.");
  }
});
