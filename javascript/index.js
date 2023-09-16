const words1 = [
    "Mobile Loan App",
    "Intelligent",
    "Automated",
    "Efficient",
    "Advanced",
    "Optimized",
    "Innovative",
    "Secure"
  ];
  
  
  function generateTitle() {
    const randomWord1 = words1[Math.floor(Math.random() * words1.length)];
    const generatedTitle = randomWord1 + " ";
    document.getElementById("generatedTitle").textContent = generatedTitle;
  }
  
  function copyTitle() {
    const titleElement = document.getElementById("generatedTitle");
    const titleText = titleElement.textContent;
    
    if (titleText.trim() === "") {
      alert("No title available.");
      return;
    }
  
    navigator.clipboard.writeText(titleText).then(() => {
      alert("Title copied to clipboard!");
      location.reload();
    }).catch((error) => {
      console.error("Unable to copy title: ", error);
    });
  }
  
