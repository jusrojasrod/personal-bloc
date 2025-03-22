import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nytOffWhite border-t border-nytLightGray mt-12 pt-8 pb-12 transition-colors duration-200">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* News section */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 transition-colors duration-200">News</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline transition-colors duration-200">Home Page</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">World</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">U.S.</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Politics</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">New York</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Business</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Tech</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Science</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Sports</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Obituaries</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Today's Paper</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Corrections</Link></li>
            </ul>
          </div>

          {/* Opinion section */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 transition-colors duration-200">Opinion</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline transition-colors duration-200">Today's Opinion</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Op-Ed Contributors</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Editorials</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Op-Ed Columnists</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Letters</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Sunday Review</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Video: Opinion</Link></li>
            </ul>
          </div>

          {/* Arts section */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 transition-colors duration-200">Arts</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline transition-colors duration-200">Today's Arts</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Art & Design</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Books</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Dance</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Movies</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Music</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Television</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Theater</Link></li>
            </ul>
          </div>

          {/* Living section */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 transition-colors duration-200">Living</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline transition-colors duration-200">Automobiles</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Crossword</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Food</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Education</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Health</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Jobs</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Magazine</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Real Estate</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Style</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">T Magazine</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Travel</Link></li>
            </ul>
          </div>

          {/* More section */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 transition-colors duration-200">More</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline transition-colors duration-200">Reader Center</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">The Athletic</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Wirecutter</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Games</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Cooking</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Headway</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Live Events</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">The Learning Network</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Tools & Services</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Podcasts</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Video</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Graphics</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">TimesMachine</Link></li>
              <li><Link href="/" className="hover:underline transition-colors duration-200">Times Store</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-nytLightGray transition-colors duration-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xs text-nytMediumGray transition-colors duration-200">
                © {currentYear} The New York Times Company
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/" className="hover:underline text-nytMediumGray transition-colors duration-200">Privacy Policy</Link>
              <Link href="/" className="hover:underline text-nytMediumGray transition-colors duration-200">Terms of Service</Link>
              <Link href="/" className="hover:underline text-nytMediumGray transition-colors duration-200">Terms of Sale</Link>
              <Link href="/" className="hover:underline text-nytMediumGray transition-colors duration-200">Site Map</Link>
              <Link href="/" className="hover:underline text-nytMediumGray transition-colors duration-200">Help</Link>
              <Link href="/" className="hover:underline text-nytMediumGray transition-colors duration-200">Subscriptions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
