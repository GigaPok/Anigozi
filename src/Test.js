import React from "react";
import "./Test.scss";

const Test = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div>
      <section>
        <h1>Scroll Down to Reveal Elements &#8595;</h1>
      </section>
      <section>
        <div class="container reveal fade-bottom">
          <h2>Caption</h2>
          <div class="text-container">
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container reveal fade-left">
          <h2>Caption</h2>
          <div class="text-container">
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container reveal fade-right">
          <h2>Caption</h2>
          <div class="text-container">
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
