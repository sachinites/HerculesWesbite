import { Github, Linkedin, Mail, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="blogs" className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">CSEPracticals</h3>
            <p className="text-sm text-muted-foreground">
              Empowering developers with industry-level system programming and networking skills
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@CSEPracticals"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishekiit/"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/sachinites/"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://home.csepracticals.com/" className="hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="https://home.csepracticals.com/" className="hover:text-foreground transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="https://www.csepracticals.com/about-us/" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://www.csepracticals.com/contact-us/" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://www.csepracticals.com/blog/" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.csepracticals.com/faqs/" className="hover:text-foreground transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="https://www.csepracticals.com/refund/" className="hover:text-foreground transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="https://www.csepracticals.com/terms-condn/" className="hover:text-foreground transition-colors">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>csepracticals@gmail.com</li>
              <li>+91-9686081839</li>
              <li className="pt-2">Available Mon-Fri</li>
              <li>9:00 AM - 9:00 PM IST</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} CSEPracticals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
