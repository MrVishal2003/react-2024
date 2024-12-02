import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://cdn.pixabay.com/photo/2022/09/24/15/12/chair-circle-7476567_1280.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React Development is Driven by Passionate Developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      React development is carried out by passionate developers who strive to 
                      create exceptional applications. These developers focus on building 
                      high-performance, user-friendly interfaces that can adapt to the 
                      demands of modern web applications. They continuously push the 
                      boundaries of innovation to enhance the user experience.
                      </p>
                      <p className="mt-4 text-gray-600">
                      React developers understand the importance of scalability, maintainability, 
                      and efficiency in building applications that stand the test of time. 
                      Their work involves not only creating functional features but also ensuring 
                      that the architecture is robust and flexible for future updates.
                      </p>
                      <p className="mt-4 text-gray-600">
                      They are always learning new techniques, staying updated with the latest trends 
                      in web development, and using cutting-edge tools to deliver high-quality products.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}