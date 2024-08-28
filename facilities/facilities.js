function scrollToRaceBays() {
    const raceBaySection = document.getElementById("race-bay-section");
    raceBaySection.style.animation = "slide 1s ease";
    raceBaySection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      raceBaySection.style.animation = ""; // Reset the animation after scrolling
    }, 1000); // Adjust the time to match the duration of the animation
  }

  function scrollToRaceSupport() {
    const raceBaySection = document.getElementById("race-support-section");
    raceBaySection.style.animation = "slide 1s ease";
    raceBaySection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      raceSupportSection.style.animation = ""; // Reset the animation after scrolling
    }, 1000); // Adjust the time to match the duration of the animation
  }

  function scrollToManufacturingSection() {
    const raceBaySection = document.getElementById("manufacturing-section");
    raceBaySection.style.animation = "slide 1s ease";
    raceBaySection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      manufacturingSection.style.animation = ""; // Reset the animation after scrolling
    }, 1000); // Adjust the time to match the duration of the animation
  }

  function scrollToWindTunnel() {
    const raceBaySection = document.getElementById("wind-tunnel-section");
    raceBaySection.style.animation = "slide 1s ease";
    raceBaySection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      windTunnelSection.style.animation = ""; // Reset the animation after scrolling
    }, 1000); // Adjust the time to match the duration of the animation
  }