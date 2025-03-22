'use client';

import { useState } from 'react';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to a server
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-nytOffWhite border border-nytLightGray p-6 mb-8">
      <h2 className="text-xl font-serif font-bold mb-3">
        Sign Up for the Morning Briefing
      </h2>

      <p className="text-nytMediumGray mb-4">
        Get what you need to know to start your day, delivered to your inbox.
      </p>

      {subscribed ? (
        <div className="bg-white border border-nytLightGray p-4">
          <p className="text-nytBlue font-medium">
            Thank you for subscribing to our newsletter!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 border border-nytMediumGray px-4 py-2 focus:outline-none focus:border-nytBlack"
          />
          <button
            type="submit"
            className="bg-nytBlack text-white px-6 py-2 font-medium hover:bg-nytDarkGray transition-colors"
          >
            Sign Up
          </button>
        </form>
      )}

      <p className="text-xs text-nytMediumGray mt-3">
        By signing up, you agree to our <a href="#" className="underline">Privacy Policy</a>.
      </p>
    </section>
  );
};

export default NewsletterSubscribe;
