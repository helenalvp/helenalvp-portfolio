import React from "react";

const Projects = () => {
  return (
    <div className="container">
      {/* <div class="container">
        <div class="col-sm-12">
          <div class="mb-5 text-center">
            <h2 data-animate="fadeInUp" class="title animated fadeInUp">
              My work
            </h2>
            <p data-animate="fadeInUp" class="lead animated fadeInUp">
              These are a few of my latest projects
            </p>
          </div>
          <ul id="filter" data-animate="fadeInUp" class="animated fadeInUp">
            <li class="active">
              <a href="#" data-filter="all">
                All
              </a>
            </li>
            <li>
              <a href="#" data-filter="project">
                Projects
              </a>
            </li>
            <li>
              <a href="#" data-filter="code-challenge">
                Code Challenges
              </a>
            </li>
            <li>
              <a href="#" data-filter="other">
                Other
              </a>
            </li>
          </ul>
          <div id="detail">
            <div class="row">
              <div class="col-lg-10 mx-auto">
                <span class="close">×</span>
                <div id="detail-slider" class="owl-carousel owl-theme"></div>
                <div class="text-center">
                  <h1 id="detail-title" class="title"></h1>
                </div>
                <div id="detail-content"></div>
              </div>
            </div>
          </div>
          
          <div
            id="references-masonry"
            data-animate="fadeInUp"
            class="animated fadeInUp"
          >
            <div class="row">
              <div
                data-category="project"
                class="reference-item col-lg-3 col-md-6"
              >
                <div class="reference">
                  <a href="#">
                    <img
                      src="img/project-images/cart-checker/title.PNG"
                      alt=""
                      class="img-fluid"
                    />
                    <div class="overlay">
                      <div class="inner">
                        <h3 class="h4 reference-title">Cart Checker</h3>
                        <p>Grocery Price Tracker</p>
                      </div>
                    </div>
                  </a>
                  <div
                    data-images="img/project-images/cart-checker/screenshot-1.PNG,img/project-images/cart-checker/screenshot-2.PNG,img/project-images/cart-checker/screenshot-3.PNG"
                    class="sr-only reference-description"
                  >
                    <p>
                      This is designed to be a companion for your shopping
                      trips. Just have it out while you're shopping, adding
                      every item and its price to your cart. While you shop, you
                      can figure out exactly how much you have in your cart and
                      how much you'll be paying in taxes before you hit the
                      register!
                    </p>
                    <p class="buttons text-center">
                      <a
                        href="https://helenalvp-cart-checker.netlify.app/"
                        rel="noreferrer"
                        class="btn btn-outline-primary"
                        target="_blank"
                      >
                        <i class="fa fa-globe"></i> Visit website
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-category="code-challenge"
                class="reference-item col-lg-3 col-md-6"
              >
                <div class="reference">
                  <a href="#">
                    <img
                      src="img/project-images/taco-cat/title.PNG"
                      alt=""
                      class="img-fluid"
                    />
                    <div class="overlay">
                      <div class="inner">
                        <h3 class="h4 reference-title">Taco Cat</h3>
                        <p></p>
                      </div>
                    </div>
                  </a>
                  <div
                    data-images="img/project-images/taco-cat/screenshot-1.PNG,img/project-images/taco-cat/screenshot-2.PNG,img/project-images/taco-cat/screenshot-3.PNG"
                    class="sr-only reference-description"
                  >
                    <p>
                      TacoCat is a palinfrome. A Palindrome is a word, phrase,
                      or sequence that reads the same backwards as forward. A
                      program that checks if the phrase entered is a palindrome
                      or not.
                    </p>
                    <p class="buttons text-center">
                      <a
                        href="https://helenalvp-tacocat.netlify.app"
                        rel="noreferrer"
                        class="btn btn-outline-primary"
                        target="_blank"
                      >
                        <i class="fa fa-globe"></i> Visit website
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-category="code-challenge"
                class="reference-item col-lg-3 col-md-6"
              >
                <div class="reference">
                  <a href="#">
                    <img
                      src="img/project-images/hundred-next/title.PNG"
                      alt=""
                      class="img-fluid"
                    />
                    <div class="overlay">
                      <div class="inner">
                        <h3 class="h4 reference-title">Hundred Next</h3>
                        <p></p>
                      </div>
                    </div>
                  </a>
                  <div
                    data-images="img/project-images/hundred-next/screenshot-1.PNG,img/project-images/hundred-next/screenshot-2.PNG,img/project-images/hundred-next/screenshot-3.PNG"
                    class="sr-only reference-description"
                  >
                    <p>
                      A javascript coding excercise using loops. A program that
                      displays the numbers from 0 to 100, and displays the even
                      numbers BOLD
                    </p>
                    <p class="buttons text-center">
                      <a
                        href="https://helenalvp-hundrednext.netlify.app/"
                        class="btn btn-outline-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fa fa-globe"></i> Visit website
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-category="code-challenge"
                class="reference-item col-lg-3 col-md-6"
              >
                <div class="reference">
                  <a href="#">
                    <img
                      src="img/project-images/fizz-buzz/title.PNG"
                      alt=""
                      class="img-fluid"
                    />
                    <div class="overlay">
                      <div class="inner">
                        <h3 class="h4 reference-title">FizzBuzz</h3>
                        <p></p>
                      </div>
                    </div>
                  </a>
                  <div
                    data-images="img/project-images/fizz-buzz/screenshot-1.PNG,img/project-images/fizz-buzz/screenshot-2.PNG,img/project-images/fizz-buzz/screenshot-3.PNG"
                    class="sr-only reference-description"
                  >
                    <p>
                      A javascript coding project exercise using loops. A
                      program that prints the numbers from 1 to 100 and for
                      multiples of "3" display "Fizz" instead of the number and
                      for the mutliples of "5" display "Buzz". If a multiple of
                      both, it displays "FizzBuzz"
                    </p>
                    <p class="buttons text-center">
                      <a
                        href="https://helenalvp-fizzbuzz.netlify.app/"
                        class="btn btn-outline-primary"
                        target="_blank" rel="noreferrer"
                      >
                        <i class="fa fa-globe"></i> Visit website
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <!--<div data-category="webdesign" class="reference-item col-lg-3 col-md-6">
                    <div class="reference"><a href="#"><img src="img/portfolio-5.jpg" alt="" class="img-fluid">
                        <div class="overlay">
                          <div class="inner">
                            <h3 class="h4 reference-title">Project name 5</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" class="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="other" class="reference-item col-lg-3 col-md-6">
                    <div class="reference"><a href="#"><img src="img/portfolio-6.jpg" alt="" class="img-fluid">
                        <div class="overlay">
                          <div class="inner">
                            <h3 class="h4 reference-title">Project name 6</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" class="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="seo" class="reference-item col-lg-3 col-md-6">
                    <div class="reference"><a href="#"><img src="img/portfolio-7.jpg" alt="" class="img-fluid"/>
                        <div class="overlay">
                          <div class="inner">
                            <h3 class="h4 reference-title">Project name</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" class="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="webdesign" class="reference-item col-lg-3 col-md-6">
                    <div class="reference"><a href="#"><img src="img/portfolio-8.jpg" alt="" class="img-fluid"/>
                        <div class="overlay">
                          <div class="inner">
                            <h3 class="h4 reference-title">Project name</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" class="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                      </div> 
                    </div>
                  </div>--> 
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default Projects;
