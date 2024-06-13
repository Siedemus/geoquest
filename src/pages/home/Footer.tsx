const Footer = () => {
  return (
    <footer className="flex justify-between px-12 py-6 bg-salt flex-col text-center gap-5 sm:flex-row">
      <p>© 2024 geoQuest. All rights reserved.</p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <a href="/tos" className="hover:underline hover:cursor-pointer">
          Terms of Service
        </a>
        <a href="/privacy" className="hover:underline hover:cursor-pointer">
          Privacy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
