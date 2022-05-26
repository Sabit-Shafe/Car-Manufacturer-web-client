import React from 'react';

const Blogs = () => {
    return (
        <div class="accordion accordion-flush mt-5" id="accordionFlushExample">
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
                        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-4 px-5">
                       products.find(product ={'>'} givenName === product.name)
                        When you directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.
                        React compares the previous state with the updated state to decide if the component needs to be re-rendered. Modifying the state directly will disturb this process. As a result the component will behave unexpectedly. In some cases not re-rendering at all even though the state has been modified.</div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;