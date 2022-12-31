import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsStackOverflow,
  BsTwitter
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer
      className="p-10 sm:px-28 dark:bg-gray-900 dark:text-gray-100 bg-gray-100
     text-gray-700 sm:flex justify-between items-center"
    >
      <div className="">
        <p>All right reserved by Mohammed Abu Hanifa &copy; 2023</p>
      </div>
      <div className="">
        <p className="footer-title py-5">Social Links</p>
        <div className="flex gap-4 text-[25px] sm:pb-10">
          <a
            href="https://github.com/mabuhanifa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-abuhanifa-4611b515b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://stackoverflow.com/users/18106759/mohammed-abuhanifa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsStackOverflow />
          </a>
          <a
            href="https://www.facebook.com/shourov.hanifa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://twitter.com/MohAbuhanifa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.instagram.com/shourovahmd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
