import React from 'react';

const BussinessSum = () => {
    return (
        <section className="bg-cyan-100 ">
            <div className="mt-5">
                <h1 className=" text-warning text-center text-5xl font-bold uppercase">Millions of Customer Trust us</h1>
                <h1 className=" text-secondary text-center text-xl mt-3 ">Try to Understand User Expectations</h1>
            </div>
            <div className="stats shadow mt-10 mb-10 mx-20  stats-vertical lg:stats-horizontal">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Countries</div>
                    <div className="stat-value text-primary">70</div>
                    <div className="stat-desc">Connect us</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Product Order</div>
                    <div className="stat-value text-secondary">2.6k</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Happy Clients</div>
                    <div className="stat-value text-warning">700+</div>
                    <div className="stat-desc"></div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Positive Feedback</div>
                    <div className="stat-desc text-secondary"></div>
                </div>

            </div>
        </section>
    );
};

export default BussinessSum;