document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        // Calculate offset, adjusted for the header or any other elements.
        const offset = target.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (target.offsetHeight / 2);

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let hasAnimated = false; // To track if animation has already happened

    // Function to animate counters
    const animateCounters = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = parseInt(counter.getAttribute("data-number"));
                        const current = parseInt(counter.innerText);
                        const increment = Math.ceil(target / 100); // Adjust speed

                        if (current < target) {
                            counter.innerText = current + increment;
                            setTimeout(updateCount, 30); // Adjust interval
                        } else {
                            counter.innerText = target;
                        }
                    };
                    // Reset counter text before starting
                    counter.innerText = "0";
                    updateCount();
                });
                hasAnimated = true; // Mark animation as complete
            }
        });
    };

    const observer = new IntersectionObserver(animateCounters, {
        threshold: 0.5 // Counter starts when 50% of the section is visible
    });

    const section = document.querySelector("#achievements");
    observer.observe(section);
});
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const homeContents = document.querySelectorAll('.home-content');
    const totalContents = homeContents.length;

    // Function to show the next home content
    const showNextContent = () => {
        // Hide current content
        homeContents[currentIndex].classList.remove('active');
        
        // Increment to show the next content
        currentIndex = (currentIndex + 1) % totalContents;
        
        // Show the next content
        homeContents[currentIndex].classList.add('active');
    };

    // Set interval to change content every 3 seconds (3000ms)
    setInterval(showNextContent, 3000);

    // Initially show the first content
    homeContents[0].classList.add('active');
});
let currentContent = 0;
const contents = document.querySelectorAll('.home-content'); // Get all the home-content sections

// Initially set all content to be invisible
contents.forEach((content, index) => {
  if (index !== currentContent) {
    content.style.opacity = 0;
    content.style.visibility = 'hidden';
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll(".home-content");
    let currentIndex = 0;

    setInterval(() => {
        // Remove 'active' from the current content
        contents[currentIndex].classList.remove("active");

        // Move to the next content, loop back to start if at the end
        currentIndex = (currentIndex + 1) % contents.length;

        // Add 'active' to the new current content
        contents[currentIndex].classList.add("active");
    }, 4000); // Change every 3 seconds
});

