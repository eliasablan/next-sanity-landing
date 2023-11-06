'use client';
import { useEffect, createContext } from 'react';

// import GLightbox from "glightbox";

import Splide from '@splidejs/splide';

export const AppContext = createContext({});

const Providers = ({ children, everything }) => {
  useEffect(() => {
    // Preloader (Not configured)
    // const myPreloader = function () {
    //   var xpre = document.querySelector(".preloader");
    //   if (xpre != null) {
    //     window.addEventListener("load", function () {
    //       document.querySelector("body").classList.add("loaded-success");
    //     });
    //   }
    // };

    // // Lightbox
    // const myLightbox = function () {
    //   // GLightbox
    //   const lightbox_class = document.querySelector(".glightbox3");
    //   if (lightbox_class != null) {
    //     const lightbox = GLightbox({
    //       selector: ".glightbox3",
    //       touchNavigation: true,
    //       loop: true,
    //       autoplayVideos: true,
    //     });
    //   }
    // };

    // splidejs
    const mySplidejs = function () {
      // mySplidejs
      const postslider_class = document.querySelector('#post-carousel');
      if (postslider_class != null) {
        const postslider = new Splide(postslider_class, {
          rewind: true,
          pagination: true,
          arrows: true,
          type: 'loop',
          drag: 'free',
          perPage: 6,
          perMove: 1,
          gap: 24,
          breakpoints: {
            1200: {
              perPage: 4,
            },
            768: {
              perPage: 3,
            },
            500: {
              perPage: 2,
            },
          },
        });
        postslider.mount();
      }
    };

    // if scroll down
    const myScrollspy = function () {
      var scrollpos =
        document.body.scrollTop || document.documentElement.scrollTop;
      var nav_height = 80;
      var main_nav = document.querySelector('.main-nav');

      // navbar on scroll
      var add_class_on_scroll = function add_class_on_scroll() {
        return main_nav.classList.add('navbar-scrolled');
      };
      var remove_class_on_scroll = function remove_class_on_scroll() {
        return main_nav.classList.remove('navbar-scrolled');
      };

      var navCustom = function navCustom() {
        scrollpos =
          document.body.scrollTop || document.documentElement.scrollTop;

        if (scrollpos >= nav_height) {
          add_class_on_scroll();
        } else {
          remove_class_on_scroll();
        }
      };

      var navCustomone = function navCustomone() {
        var section = document.querySelectorAll('.section');
        if (section != null) {
          var sections = {};
          var i = 0;

          Array.prototype.forEach.call(section, function (e) {
            sections[e.id] = e.offsetTop;
          });

          window.onscroll = function () {
            var scrollPosition =
              document.documentElement.scrollTop ||
              document.body.scrollTop;

            for (i in sections) {
              if (sections[i] <= scrollPosition + nav_height) {
                document
                  .querySelector('.navbar>li>.active')
                  .classList.remove('active');
                document
                  .querySelector('a[href*=' + i + ']')
                  .classList.add('active');
              }
            }
          };
        }
      };

      // if nav start not in top and not scroll
      window.addEventListener('load', function () {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        navCustom();
        navCustomone();
      });

      // if nav scroll
      window.addEventListener('scroll', function () {
        navCustom();
        navCustomone();
      });
    };

    // myPreloader();
    // myLightbox();
    mySplidejs();
    myScrollspy();
  }, []);

  return (
    <AppContext.Provider value={everything}>
      {children}
    </AppContext.Provider>
  );
};

export default Providers;
