const Footer = () => {
  return (
    <footer className="py-8 bg-navy-dark text-primary-foreground/60">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Hassenar Kunnummal. All rights reserved.
          </p>
          <p className="text-sm">
            Professional Chef & Britain KMCC President
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
