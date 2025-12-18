import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Company {
  id: string;
  name: string;
  name_ar: string;
  logo_url: string | null;
  description: string | null;
  rating: number | null;
}

const Companies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      const { data } = await supabase
        .from("insurance_companies")
        .select("*")
        .eq("is_active", true)
        .order("rating", { ascending: false });
      
      if (data) setCompanies(data);
      setLoading(false);
    };

    fetchCompanies();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                شركات <span className="text-gradient">التأمين</span> المعتمدة
              </h1>
              <p className="text-lg text-muted-foreground">
                نتعاون مع أفضل شركات التأمين المرخصة من البنك المركزي السعودي لنقدم لك أفضل العروض والأسعار
              </p>
            </div>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-16">
          <div className="container">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-64 bg-muted animate-pulse rounded-2xl" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company, index) => (
                  <Card
                    key={company.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="h-24 flex items-center justify-center mb-6">
                        {company.logo_url ? (
                          <img
                            src={company.logo_url}
                            alt={company.name_ar}
                            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform"
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center">
                            <span className="text-3xl font-bold text-primary-foreground">
                              {company.name_ar.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-center">
                        <h3 className="font-bold text-xl mb-2">{company.name_ar}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {company.description}
                        </p>
                        
                        {company.rating && (
                          <div className="flex items-center justify-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(company.rating!) ? "fill-current" : ""}`}
                              />
                            ))}
                            <span className="font-medium mr-1">{company.rating}</span>
                          </div>
                        )}
                        
                        <Button variant="outline" className="w-full gap-2">
                          <ExternalLink className="h-4 w-4" />
                          عرض التفاصيل
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Companies;
