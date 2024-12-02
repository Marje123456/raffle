<template>
  <section class="pb-120 mt-minus-300">
    <div class="container">
      <div class="row justify-content-center">
        <TemplateBodyContestDetailsClock />
        <div class="col-lg-12">
          <div class="contest-cart">
            <TemplateBodyContestDetailsContestCartLeft />

            <TemplateBodyContestDetailsContestCartRight />
          </div>
        </div>
        <!-- col-lg-12 end -->
        <div class="col-lg-10">
          <div class="contest-description">
            <ul
              class="nav nav-tabs justify-content-center mb-30 pb-4 border-0"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="cmn-btn active"
                  id="description-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#description"
                  role="tab"
                  aria-controls="description"
                  aria-selected="true"
                >
                  <span class="mr-3"></span> description
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="cmn-btn"
                  id="details-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#details"
                  role="tab"
                  aria-controls="details"
                  aria-selected="false"
                >
                  <span class="mr-3"></span>competition details
                </button>
              </li>
            </ul>

            <div class="tab-content" id="myTabContent">
              <TemplateBodyContestDetailsDescription />

              <TemplateBodyContestDetailsCompetitionDetails />
            </div>
            <!-- tab-content end -->
          </div>
          <!-- contest-description end -->
        </div>
      </div>
    </div>
  </section>
</template>
