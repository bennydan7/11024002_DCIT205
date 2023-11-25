const headerHTML = ` <section class="nav1">
      <!-- Navigation -->
      <nav class="navigation">
        <img class="cs--logo" src="images/comScience_logo.png" alt="" />
        <div class="navbar">
          <ul>
            <i id="menu-close" class="fa fa-times"></i>
            <li><a class="active" href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="research.html">Research</a></li>
            <li><a href="faculty.html">Faculty</a></li>
          </ul>
          <i id="menu-btn" class="fa fa-bars"></i>
        </div>
      </nav>
    </section>
`;

document.body.insertAdjacentHTML('afterbegin', headerHTML);

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar ul li a');
  const currentPage = window.location.pathname;

  navLinks.forEach(function (link) {
    const linkPath = link.getAttribute('href');

    // Check if the link's path is part of the current page's path
    if (currentPage.includes(linkPath)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
