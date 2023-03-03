import React from "react";

const Footer = () => {
  return (
    <section class="region--footer">
   <div class="container">
      <div class="footer__mc">
         <nav class="footer__branding--mc">
            <img src="https://assets.micromentor.org/static/img/mc-logo-stacked.67b1630aba45.svg" alt="Mercy Corps" class="logo"/>
            <div class="footer__mc-tagline">
               MicroMentor is a program of Mercy Corps
            </div>
         </nav>
         <div class="footer__mc-chevron">
            <svg width="40" height="320" viewBox="0 0 100 100" preserveAspectRatio="none">
               <polygon id="Path-2" fill="#CF102D" points="0 0 100 50 0 100"></polygon>
            </svg>
         </div>
      </div>
      <div class="footer__mm">
         <div class="footer__branding--mm">
            <nav class="footer__mm-logo">
               <a class="mm-logo" href="/"><img src="https://assets.micromentor.org/static/img/mm-logo-signature.28724537589a.svg" alt="MicroMentor by Mercy Corps" class="logo"/></a>
            </nav>
            <div class="footer__mm-tagline">
               <p>
                  MicroMentor is the world’s largest community of entrepreneurs and volunteer business mentors.
               </p>
            </div>
         </div>
         <nav class="footer__navigation">
            <div class="footer__mm-extra">
               <ul class="menu vertical">
                  <li><a href="https://www.micromentor.org/help-center/">Help Center</a></li>
                  <li><a href="https://www.micromentor.org/faq/">Frequently Asked Questions</a></li>
                  <li><a href="https://www.micromentor.org/about/">About</a></li>
                  <li><a href="https://www.micromentor.org/how-it-works/">How It Works</a></li>
                  <li><a href="https://www.micromentor.org/how-it-helps/">How Mentorship Helps</a></li>
                  <li><a href="https://www.micromentor.org/programs-for-corporations-and-governments/">Programs for Corporations and Governments</a></li>
                  <li><a href="https://www.micromentor.org/blog/">Blog</a></li>
               </ul>
               <ul class="menu horizontal">
                  <li>
                     <a href="https://www.facebook.com/micromentor.org" class="navigation__social-media-link" target="_blank" title="Facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                  </li>
                  <li>
                     <a href="https://twitter.com/MicroMentor" class="navigation__social-media-link" target="_blank" title="Twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                  </li>
                  <li>
                     <a href="https://www.linkedin.com/company/micromentor" class="navigation__social-media-link" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
                  </li>
                  <li>
                     <a href="https://www.instagram.com/micromentor_org" class="navigation__social-media-link" target="_blank" title="Instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                  </li>
               </ul>
            </div>
            <div class="footer__mm-extra">
               <div class="mm-extra__row">
                  <div class="text-secondary mm-extra__row__element">
                     MicroMentor is a non-profit. <strong>Help support our mission.</strong>
                  </div>
                  <div class="mm-extra__row__element">
                     <a class="button tiny" href="/give/"><i class="far fa-heart" aria-hidden="true"></i>&nbsp;Give</a>
                  </div>
               </div>
               <div class="mm-extra__row">
                  <div class="mm-extra__row__element">For support or other questions</div>
                  <div class="mm-extra__row__element">
                     <a class="button clear no-padding black" href="/contact/"><i class="fal fa-envelope" aria-hidden="true"></i>&nbsp;Contact us</a>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   </div>
</section>
  );
};

export default Footer;
