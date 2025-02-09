import React, { useState } from 'react';

const ContactForm = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSendMessage = (event) => {
    event.preventDefault(); // Prevent form submission for demo purposes
    setShowNotification(true);
    // You can add your logic here to handle form submission (e.g., send email, clear fields, etc.)
  };

  return (
    <section id ="contact" className= "w-[100vw] bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md relative"> {/* Added relative positioning */}
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Wanted to Know More ? . Feel free to drop more questions and requests</p>
        <form onSubmit={handleSendMessage} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{ backgroundColor: '#d0ded8' }}>Send message</button>
        </form>
        {showNotification && (
          <div className="absolute top-0 right-0 mt-4 mr-4 bg-white dark:bg-white p-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 z-10"> {/* Added z-10 for proper layering */}
            Email received
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;

