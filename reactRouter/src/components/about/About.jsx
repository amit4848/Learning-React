import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://i.pinimg.com/474x/5e/14/26/5e1426eeb1fd075e66b0cbd982f0ea70.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      React development is driven by passionate developers who continuously innovate and improve the ecosystem. 
                      These developers contribute to the framework by building efficient components, optimizing performance, 
                      and maintaining best coding practices. Their dedication helps create seamless user experiences, 
                      making React one of the most popular front-end libraries. 
                      </p>
                      <p className="mt-4 text-gray-600">
                      The open-source nature of React allows for collaboration, enabling developers to share knowledge, 
                      contribute to updates, and create a thriving community that drives web development forward.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
