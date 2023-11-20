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
            <li><a href="#">Research</a></li>
            <li><a href="#">Facilities</a></li>
          </ul>
          <i id="menu-btn" class="fa fa-bars"></i>
        </div>
      </nav>
    </section>
`;

document.body.insertAdjacentHTML('afterbegin', headerHTML);
