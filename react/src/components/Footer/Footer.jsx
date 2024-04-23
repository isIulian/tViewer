import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t mt-8">
      <div className="w-full mx-auto max-w-screen-xl p-8 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2024 tViewer - All Rights Reserved.
        </span>
        <ul className="flex flex-wrap gap-4 items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <Button variant="link" className="p-0">
              <a
                href="https://github.com/isIulian"
                target="_blank"
              >
                Contact
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;