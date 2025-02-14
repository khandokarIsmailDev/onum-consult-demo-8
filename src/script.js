
      const menu = document.querySelector(".menu-item");
      const menuIcon = document.querySelector(".menu-icon");
      const closeIcon = document.querySelector(".close-icon");

      menuIcon.addEventListener("click", () => {
        menu.classList.toggle("scale-100");
        setTimeout(() => {
          closeIcon.classList.toggle("scale-0");
        }, 300);
      });

      closeIcon.addEventListener("click", () => {
        menu.classList.toggle("scale-100");
        closeIcon.classList.toggle("scale-0");
      });

      //for particle js
      const particlesJs = document.getElementById("particles-js");
      particlesJs.style.height = `${document.body.scrollHeight}px`;

      // Update on resize in case content height changes
      window.addEventListener("resize", () => {
        particlesJs.style.height = `${document.body.scrollHeight}px`;
      });

      // for tooltip
      const intergration = document.getElementById("intergration");
      const development = document.getElementById("development");
      const intergrationContent = document.querySelector(
        ".tooltip-intergration"
      );
      const developmentContent = document.querySelector(".tooltip-development");

      intergration.addEventListener("click", () => {
        // Toggle button-active class
        intergration.classList.add("button-active");
        development.classList.remove("button-active");
        // Show integration tooltip and hide development tooltip
        intergrationContent.classList.remove("scale-0", "hidden"); // Show integration tooltip
        intergrationContent.classList.add("scale-100", "block"); // Ensure it's visible
        developmentContent.classList.remove("scale-100", "block"); // Hide development tooltip
        developmentContent.classList.add("scale-0", "hidden"); // Ensure it's hidden
      });

      development.addEventListener("click", () => {
        // Toggle button-active class
        development.classList.add("button-active");
        intergration.classList.remove("button-active");
        // Show development tooltip and hide integration tooltip
        developmentContent.classList.remove("scale-0", "hidden"); // Show development tooltip
        developmentContent.classList.add("scale-100", "block"); // Ensure it's visible
        intergrationContent.classList.remove("scale-100", "block"); // Hide integration tooltip
        intergrationContent.classList.add("scale-0", "hidden"); // Ensure it's hidden
      });
