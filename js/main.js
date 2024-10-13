  // Array containing banner details
  const banners = [
    {
        title: 'TCS tops India\'s "Most Valuable Brands 2024"',
        description: 'Our third year leading the Kantar BrandZ ranking with 16% YoY growth',
        backgroundImage: 'image/banner-1.jpeg', // Replace with actual image URL
        linkUrl: 'https://careers.tcs.com',
        linkText: 'Know more'
    },
    {
        title: 'Join the TCS family!',
        description: 'Explore exciting career opportunities with us.',
        backgroundImage: 'image/banner-2.jpeg', // Replace with actual image URL
        linkUrl: 'https://careers.tcs.com',
        linkText: 'Join now'
    },
    {
        title: 'Grow your career with TCS',
        description: 'Be part of a dynamic and innovative team.',
        backgroundImage: 'image/banner-3.jpeg', // Replace with actual image URL
        linkUrl: 'https://careers.tcs.com',
        linkText: 'Learn more'
    }
];

let currentIndex = 0;

// Function to create and display the banner
function createBanner(index) {
    const banner = banners[index]; // Get the current banner details

    // Find the parent element by ID
    const parentElement = document.getElementById('banner-container');
    
    // Clear existing banner content
    parentElement.innerHTML = '';

    // Create the section element
    const section = document.createElement('section');
    
    // Create the div elements and assign classes
    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add('banner');
    bannerDiv.style.backgroundImage = `url(${banner.backgroundImage})`; // Set background image dynamically
    
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    
    const flexItemsDiv = document.createElement('div');
    flexItemsDiv.classList.add('flex_items10');
    
    const banConDiv = document.createElement('div');
    banConDiv.classList.add('ban_con', 'center');
    
    // Create the h1 element for the title
    const heading = document.createElement('h1');
    heading.textContent = banner.title;
    
    // Create the paragraph element for the description
    const paragraph = document.createElement('p');
    paragraph.textContent = banner.description;
    
    // Create the anchor element for the link with onclick event
    const link = document.createElement('a');
    link.href = banner.linkUrl; // Set the link URL
    link.textContent = banner.linkText;

    // Add onclick event listener to the link
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior (e.g., following the link)
        window.location.href = banner.linkUrl; // Redirect to TCS careers page
    });

    // Append elements to build the structure
    banConDiv.appendChild(heading);
    banConDiv.appendChild(paragraph);
    banConDiv.appendChild(link);
    
    flexItemsDiv.appendChild(banConDiv);
    containerDiv.appendChild(flexItemsDiv);
    bannerDiv.appendChild(containerDiv);
    section.appendChild(bannerDiv);
    
    // Append the section to the parent element
    parentElement.appendChild(section);
}

// Function to show the next banner
function showNextBanner() {
    currentIndex = (currentIndex + 1) % banners.length; // Loop back to the first banner
    createBanner(currentIndex);
}

// Create the initial banner
createBanner(currentIndex);

// Change banner every 5 seconds
setInterval(showNextBanner, 5000);


