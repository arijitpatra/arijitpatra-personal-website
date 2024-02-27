import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="text-center mb-12 text-slate-500">
      <div className="flex justify-center gap-4 text-2xl">
        <FaYoutube />
        <FaMedium />
        <FaLinkedin />
        <FaInstagram />
        <FaGithub />
        <FaFacebook />
        <FaXTwitter />
      </div>
      <small>
        <i>
          &quot;There are no strangers here, only friends you haven&apos;t yet
          met&quot;
        </i>
      </small>
    </footer>
  );
}
