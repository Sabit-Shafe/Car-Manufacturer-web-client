import React from 'react';

const Blogs = () => {
    return (
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingOne">
                    <button class="accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-purple-300
          border-0
          rounded-none
          transition
          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        How will you improve the performance of a React Application?
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-4 px-5">Avoid Object Literals-
                        This performance tip is similar to the previous section about anonymous functions. Object literals don’t have a persistent memory space, so your component will need to allocate a new location in memory whenever the component re-renders.React allows us to measure the performance of our apps using the Profiler in the React DevTools. There, we can gather performance information every time our application renders.The profiler records how long it takes a component to render, why a component is rendering, and more. From there, we can investigate the affected component and provide the necessary optimization.</div>
                </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingTwo">
                    <button class="accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-purple-300
          border-0
          rounded-none
          transition
          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                        aria-expanded="false" aria-controls="flush-collapseTwo">
                        What are the different ways to manage a state in a React application?
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-4 px-5">PThe Four Kinds of React State to Manage
                        When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:
                        Local state
                        Global state
                        Server state
                        URL state</div>
                </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingThree">
                    <button class="accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-purple-300
          border-0
          rounded-none
          transition
          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree">
                        How does prototypical inheritance work?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-4 px-5">In programming, we often want to take something and extend it.For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.Prototypal inheritance is a language feature that helps in that.</div>
                </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingThree">
                    <button class="accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-purple-300
          border-0
          rounded-none
          transition
          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree">
                        What is a unit test? Why should write unit tests?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-4 px-5">
                        Unit testing is mostly done by the software developers or white box testers. It is the process of segregating each part of the program (unit) and check whether they are fit for the use or not. In other words, it is the practice of writing code to test your code and then run those tests in an automated fashion.These units are part of software programs like individual function, object, method, procedure, interfaces, or module in the application. It is done before the integration testing. Developers use manual or automated tests to ensure that each unit meets the requirement and working as desired. Developers use drivers, unit testing frameworks, mock objects, and stubs to perform unit testing.
                    </div>
                </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingThree">
                    <button class="accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-purple-300
          border-0
          rounded-none
          transition
          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree">
                        You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to
                        demonstrate
                        the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up the space to make it look, at least at first
                        glance,
                        a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;