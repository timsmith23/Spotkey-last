// Instance the tour
var tour = new Tour({
  steps: [
  {
    element: ".logo",
    title: "Welcome to SpotKey",
    content: "Here is you Dashboard. Let me show you around."
  },
  {
    element: "#my-other-element",
    title: "Title of my step",
    content: "Content of my step"
  }
]});

// Initialize the tour
tour.init();

// Start the tour
tour.start();