import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Company {
  id: string;
  name: string;
  name_ar: string;
  logo_url: string | null;
  description: string | null;
  rating: number | null;
}

const CompaniesSection = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      const { data } = await supabase
        .from("insurance_companies")
        .select("*")
        .eq("is_active", true)
        .limit(4);
      
      if (data) setCompanies(data);
      setLoading(false);
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-48 bg-muted animate-pulse rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">شركات التأمين المعتمدة</h2>
            <p className="text-muted-foreground">نتعاون مع أفضل شركات التأمين في المملكة</p>
          </div>
          <Link to="/companies">
            <Button variant="outline" className="gap-2">
              عرض الكل
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <Card
              key={company.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="h-20 flex items-center justify-center mb-4">
                  {company.logo_url ? (
                    <img
                      src={company.logo_url}
                      alt={company.name_ar}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {company.name_ar.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-lg mb-2">{company.name_ar}</h3>
                {company.rating && (
                  <div className="flex items-center justify-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-medium">{company.rating}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
