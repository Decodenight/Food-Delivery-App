import { Link } from "react-router";
import FooterColumn from "./FooterColumn";
// import FooterService from "./FooterService";

export default function Footer() {
  const columns = {
    getToKnow: {
      title: "Get to Know Us",
      links: [
        { text: "About Wiigy.", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Press Releases", url: "#" },
      ],
    },
    connect: {
      title: "Connect with Us",
      links: [
        { text: "Facebook", url: "#" },
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
      ],
    },
    makeMoney: {
      title: "Make Money with Us",
      links: [
        { text: "Order on Wiggy.", url: "#" },
        { text: "Apply For A Delivery Partner", url: "#" },
        { text: "Advertise Your Resturent", url: "#" },
        { text: "Wiggy. Pay on Merchants", url: "#" },
      ],
    },
    letUsHelp: {
      title: "Let Us Help You",
      links: [
        { text: "Your Account", url: "#" },
        { text: "Food Safety Alerts", url: "#" },
        { text: "100% Purchase Protection", url: "#" },
        { text: "Wiggy. App Download", url: "#" },
        { text: "Help", url: "#" },
      ],
    },
  };



  return (
    <footer className="bg-[#1a772c] text-white">
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full bg-[#44da5d] hover:bg-[#49f43d] py-4 text-center text-sm"
      >
        Back to top
      </button>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterColumn {...columns.getToKnow} />
          <FooterColumn {...columns.connect} />
          <FooterColumn {...columns.makeMoney} />
          <FooterColumn {...columns.letUsHelp} />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex gap-2">
            <button className="border border-gray-600 rounded px-3 py-1 text-sm hover:border-white">
              🌐 English
            </button>
            <button className="border border-gray-600 rounded px-3 py-1 text-sm hover:border-white">
              🇮🇳 India
            </button>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          
          <Link to="#" className="hover:text-white hover:underline">
            Privacy Notice
          </Link>
          <Link to="#" className="hover:text-white hover:underline">
            Interest-Based Ads
          </Link>
          <span>© 1996-2024,  Wiggy.com,  Inc. </span>
        </div>
      </div>
    </footer>
  );
}
