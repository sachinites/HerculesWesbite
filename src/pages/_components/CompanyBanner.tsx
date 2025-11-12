import { Building2 } from "lucide-react";

const companies = [
  { name: "Microsoft" },
  { name: "Google" },
  { name: "Amazon" },
  { name: "Cisco" },
  { name: "Broadcom" },
  { name: "Intel" },
  { name: "AMD" },
  { name: "Palo Alto" },
  { name: "Samsung" },
  { name: "Netflix" },
];

const getCompanyColorClass = (name: string) => {
  if (name === "Microsoft") return "relative text-xl font-bold text-center text-blue-400 group-hover:scale-110 transition-transform";
  if (name === "Google") return "relative text-xl font-bold text-center text-red-400 group-hover:scale-110 transition-transform";
  if (name === "Amazon") return "relative text-xl font-bold text-center text-amber-400 group-hover:scale-110 transition-transform";
  if (name === "Cisco") return "relative text-xl font-bold text-center text-cyan-400 group-hover:scale-110 transition-transform";
  if (name === "Broadcom") return "relative text-xl font-bold text-center text-rose-400 group-hover:scale-110 transition-transform";
  if (name === "Intel") return "relative text-xl font-bold text-center text-blue-500 group-hover:scale-110 transition-transform";
  if (name === "AMD") return "relative text-xl font-bold text-center text-green-400 group-hover:scale-110 transition-transform";
  if (name === "Palo Alto") return "relative text-xl font-bold text-center text-orange-400 group-hover:scale-110 transition-transform";
  if (name === "Samsung") return "relative text-xl font-bold text-center text-indigo-400 group-hover:scale-110 transition-transform";
  if (name === "Netflix") return "relative text-xl font-bold text-center text-red-500 group-hover:scale-110 transition-transform";
  return "relative text-xl font-bold text-center text-foreground group-hover:scale-110 transition-transform";
};

export default function CompanyBanner() {
  return (
    <section className="hidden md:block px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-card via-background to-card overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-4">
            <Building2 className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Career Opportunities</span>
          </div>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Land Your Dream Job
          </h2>
          <p className="text-muted-foreground">
            Our courses prepare you for top tech companies
          </p>
        </div>

        {/* Animated Company Grid */}
        <div className="relative">
          {/* First Row - Scroll Right */}
          <div className="flex gap-6 mb-6 animate-scroll-right">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="relative px-8 py-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20 min-w-[180px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className={getCompanyColorClass(company.name)}>
                    {company.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Scroll Left */}
          <div className="flex gap-6 animate-scroll-left">
            {[...companies.slice().reverse(), ...companies.slice().reverse()].map((company, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="relative px-8 py-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20 min-w-[180px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className={getCompanyColorClass(company.name)}>
                    {company.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
