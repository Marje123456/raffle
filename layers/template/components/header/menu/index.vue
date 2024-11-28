<script setup lang="ts">
const homePages = ref([
  { href: '#index.html', title: 'Home One' },
  { href: '#index-two.html', title: 'Home Two' },
  { href: '#index-three.html', title: 'Home Three' },
  { href: '#index-four.html', title: 'Home Four' },
])
const contest = ref([
  { href: '#contest.html', title: 'All contest' },
  { href: '#contest-details-one.html', title: 'Contest Details One' },
  { href: '#contest-details-two.html', title: 'Contest Details Two' },
  { href: '#lottery-details-one.html', title: 'Lottery Details One' },
  { href: '#lottery-details-two.html', title: 'Lottery Details One' },
])
const pages = ref([
  { href: '#about.html', title: 'About Us' },
  { href: '#affiliate.html', title: 'Affiliate Page' },
  { href: '#how-work.html', title: 'How it works' },
  { href: '#user.html', title: 'User Panel' },
  { href: '#blog.html', title: 'Blog Posts' },
  { href: '#blog-single.html', title: 'Blog Single' },
  { href: '#cart.html', title: 'Cart Page' },
  { href: '#checkout.html', title: 'Checkout Page' },
  { href: '#faq.html', title: 'FAQ Page' },
  { href: '#error-404.html', title: '404 Page' },
])
</script>

<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav main-menu ms-auto">
      <TemplateHeaderMenuElement
        title="Home"
        hrefer="#contest-details-one.html"
        :links="homePages"
      />
      <TemplateHeaderMenuElement
        title="Contest"
        hrefer="#contest-details-one.html"
        :links="contest"
      />
      <li><a href="winner.html">Winners</a></li>
      <TemplateHeaderMenuElement
        title="pages"
        hrefer="#contest-details-one.html"
        :links="pages"
      />
      <li><a href="contact.html">contact</a></li>
    </ul>
    <div class="nav-right">
      <a href="contest.html" class="cmn-btn style--three btn--sm"
        ><img src="assets/images/icon/btn/tag.png" alt="icon" class="me-2" />
        Buy Tickets</a
      >
    </div>
  </div>
</template>
