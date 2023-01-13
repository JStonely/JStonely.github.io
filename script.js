function highlightActiveLink() {
    // Get the current page URL
    var url = window.location.pathname;
  
    // Get all the links in the navigation menu
    var links = document.querySelectorAll("nav a");
  
    // Loop through the links
    for (var i = 0; i < links.length; i++) {
      // Get the link URL
      var linkUrl = links[i].getAttribute("href");
  
      // If the link URL matches the current page URL, add the active class
      if (url == linkUrl) {
        links[i].classList.add("active");
      }
    }
  }
  
  window.addEventListener("load", highlightActiveLink);
  
  function handleClick() {
    window.location = 'https://www.example.com';
}

