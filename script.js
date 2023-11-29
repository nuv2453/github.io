
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".transition-fade");

    function checkVisibility() {
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.75) {
          element.classList.add("fade-in");
        }
      });
    }

    // Initial check on page load
    checkVisibility();

    // Check visibility as you scroll
    window.addEventListener("scroll", checkVisibility);

    // D3.js code for zoom/pan for bar plot image
    const barPlotImage = document.getElementById("barPlotImage");
    d3.select(barPlotImage)
      .call(d3.zoom()
        .scaleExtent([1, 8]) // Define the scale extent
        .on("zoom", function (event) {
          barPlotImage.style.transform = `scale(${event.transform.k}) translate(${event.transform.x}px, ${event.transform.y}px)`;
        })
      );

    // D3.js code for zoom/pan for scatterplot image
    const scatterplotImage = document.getElementById("scatterplotImage");
    d3.select(scatterplotImage)
      .call(d3.zoom()
        .scaleExtent([1, 8]) // Define the scale extent
        .on("zoom", function (event) {
          scatterplotImage.style.transform = `scale(${event.transform.k}) translate(${event.transform.x}px, ${event.transform.y}px)`;
        })
      );
  });
