import React from 'react';
import pose4 from "../../src/assets/pose_4.png";
const FAQ = () => {

  return (

    <div>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div>
            <img src={pose4} className="max-w-lg rounded-lg m-10" />

          </div>

          <div>
          <h1 className='text-secondary'>FAQ Questions</h1>
            <h1 className='text-2xl font-bold'>Get Your General Answer </h1> <br />

            <div class="accordion" id="accordionExample">
              <div class="accordion-item bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="headingOne">
                  <button class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne">
                    Get Your General Answer
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body py-4 px-5">
                    <strong>This is the first item's accordion body.</strong>

                  </div>
                </div>
              </div>
              <div class="accordion-item bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="headingTwo">
                  <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">
                    Will I always see my own doctor?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body py-4 px-5">
                    <strong>This is the second item's accordion body.</strong>
                  </div>
                </div>
              </div>

              <div class="accordion-item bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="headingThree">
                  <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                    What is evidence based medicine?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body py-4 px-5">
                    <strong>This is the third item's accordion body.</strong>
                  </div>
                </div>
              </div>

              <div class="accordion-item bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="headingThree">
                  <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                    What is one Medical’s care?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body py-4 px-5">
                    <strong>This is the third item's accordion body.</strong>
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="headingThree">
                  <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                    What is an academic medical center.
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body py-4 px-5">
                    <strong>This is the third item's accordion body.</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;