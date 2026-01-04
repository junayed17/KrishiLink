import { FaFacebook, FaTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 mt-10">
      <div className="footer sm:footer-horizontal  max-w-[1440px] mx-auto px-4  p-10 text-white">
        <nav>
          <h6 className="footer-title font-bold text-lg mb-2">Contact Us</h6>
          <p className="link link-hover font-semibold">
            Email:
            <a
              href="mailto:junayedahmednipun@gmail.com"
              className="link link-hover"
            >
              support@krisilink.com
            </a>
          </p>
          <p className="link link-hover font-semibold">
            Phone:
            <a href="tel:+8801822266547" className="link link-hover">
              +880 1822266547
            </a>
          </p>
          <p className="link link-hover font-semibold">
            <a className="link link-hover">
              Address: 123 Street, Dhaka, Bangladesh
            </a>
          </p>
        </nav>

        <nav>
          <h6 className="footer-title font-bold text-lg mb-2">Follow Us</h6>
          <div className="grid grid-flow-col gap-6">
            {/* Twitter (X) - Hover color: Black */}
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-gray-500 transition-all duration-300 hover:text-[#ffffff] hover:scale-110"
            >
              <FaXTwitter className="w-7 h-7" />
            </a>

            {/* YouTube - Hover color: Red */}
            <a
              href="https://www.youtube.com/@shykhseraj"
              target="_blank"
              className="text-gray-500 transition-all duration-300 hover:text-[#FF0000] hover:scale-110"
            >
              <FaYoutube className="w-7 h-7" />
            </a>

            {/* Facebook - Hover color: Blue */}
            <a
              href="https://www.facebook.com/shykhseraj"
              target="_blank"
              className="text-gray-500 transition-all duration-300 hover:text-[#1877F2] hover:scale-110"
            >
              <FaFacebook className="w-7 h-7" />
            </a>
          </div>
        </nav>

        <nav>
          <h6 className="ffooter-title font-bold text-lg mb-2">Privacy</h6>
          <a className="link link-hover font-semibold">Privacy Policy</a>
          <p>
            We use Firebase services to improve your experience. By using our
            site, you agree to our privacy policy.
          </p>
        </nav>
      </div>
      <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            krisilink ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
