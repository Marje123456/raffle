<template>
  <header class="header">
    <div class="header__bottom">
      <div class="container">
        <nav class="navbar navbar-expand-xl p-0 align-items-center">
          <TemplateHeaderLogo />
          <button
            class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="menu-toggle"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav main-menu ms-auto">
              <li class="menu_has_children">
                <a href="contest-details-one.html#0">Home</a>
                <ul class="sub-menu">
                  <li><a href="index.html">Home One</a></li>
                  <li><a href="index-two.html">Home Two</a></li>
                  <li><a href="index-three.html">Home Three</a></li>
                  <li><a href="index-four.html">Home Four</a></li>
                </ul>
              </li>
              <li class="menu_has_children">
                <a href="contest-details-one.html#0">Contest</a>
                <ul class="sub-menu">
                  <li><a href="contest.html">All contest</a></li>
                  <li>
                    <a href="contest-details-one.html">Contest Details One</a>
                  </li>
                  <li>
                    <a href="contest-details-two.html">Contest Details Two</a>
                  </li>
                  <li>
                    <a href="lottery-details.html">Lottery Details One</a>
                  </li>
                  <li>
                    <a href="lottery-details-two.html">Lottery Details Two</a>
                  </li>
                </ul>
              </li>
              <li><a href="winner.html">Winners</a></li>
              <li class="menu_has_children">
                <a href="contest-details-one.html#0">pages</a>
                <ul class="sub-menu">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="affiliate.html">Affiliate Page</a></li>
                  <li><a href="how-work.html">How it works</a></li>
                  <li><a href="user.html">User Panel</a></li>
                  <li><a href="blog.html">Blog Posts</a></li>
                  <li><a href="blog-single.html">Blog Single</a></li>
                  <li><a href="cart.html">Cart Page</a></li>
                  <li><a href="checkout.html">Checkout Page</a></li>
                  <li><a href="faq.html">FAQ Page</a></li>
                  <li><a href="error-404.html">404 Page</a></li>
                </ul>
              </li>
              <li><a href="contact.html">contact</a></li>
            </ul>
            <div class="nav-right">
              <a href="contest.html" class="cmn-btn style--three btn--sm"
                ><img src="assets/images/tag.png" alt="icon" class="me-2" /> Buy
                Tickets</a
              >
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- header__bottom end -->
  </header>
</template>
