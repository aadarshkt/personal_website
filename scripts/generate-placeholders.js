const fs = require("fs");
const { createCanvas } = require("canvas");

// Create public directory if it doesn't exist
if (!fs.existsSync("public")) {
  fs.mkdirSync("public");
}

// Function to create a placeholder image
function createPlaceholder(width, height, text, filename) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Fill background
  ctx.fillStyle = "#3b82f6";
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 24px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer("image/jpeg");
  fs.writeFileSync(`public/${filename}`, buffer);
}

// Generate placeholder images
createPlaceholder(400, 400, "Profile", "placeholder-profile.jpg");
createPlaceholder(800, 400, "Project 1", "project1.jpg");
createPlaceholder(800, 400, "Project 2", "project2.jpg");
createPlaceholder(800, 400, "Project 3", "project3.jpg");
