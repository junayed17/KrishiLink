import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 mt-10">
      <div className="footer sm:footer-horizontal  max-w-[1440px] mx-auto px-4  p-10 text-white">
        <nav>
          <h6 className="footer-title font-bold text-lg mb-2">Contact Us</h6>
          <p className="link link-hover font-semibold">
            Email: <a className="link link-hover">support@krisilink.com</a>
          </p>
          <p className="link link-hover font-semibold">
            Phone:<a className="link link-hover"> +880 123 456 789</a>
          </p>
          <p className="link link-hover font-semibold">
            <a className="link link-hover">
              Address: 123 Street, Dhaka, Bangladesh
            </a>
          </p>
        </nav>

        <nav>
          <h6 className="footer-title font-bold text-lg mb-2">Follow Us</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaXTwitter className="w-6 h-6"/>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>

        <nav>
          <h6 className="ffooter-title font-bold text-lg mb-2">Privacy</h6>
          <a className="link link-hover font-semibold">Privacy Policy</a>
          <p>
            We use cookies to enhance your experience. By using our site, you
            agree to our use of cookies.
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
