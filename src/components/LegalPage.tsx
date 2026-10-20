import { ReactNode } from "react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Общая обёртка для юридических страниц: политика, согласие, сведения о клинике
interface LegalPageProps {
  title: string;
  canonical: string;
  description: string;
  updated?: string;
  children: ReactNode;
}

export const LegalH2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-lg md:text-xl font-medium text-foreground mt-10 mb-4">{children}</h2>
);

const LegalPage = ({ title, canonical, description, updated, children }: LegalPageProps) => (
  <div className="min-h-screen">
    <SEO title={title} canonical={canonical} description={description} />
    <Navigation />

    <section className="pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-center">
            {title}
          </h1>
          {updated && (
            <p className="text-sm text-muted-foreground text-center mb-8 md:mb-12">
              Редакция от {updated}
            </p>
          )}
          <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:underline">
            {children}
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default LegalPage;
