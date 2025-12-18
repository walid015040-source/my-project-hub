import { Button } from "@/components/ui/button";
import { Shield, Car, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const features = [
    { icon: Shield, text: "تأمين موثوق" },
    { icon: Car, text: "جميع أنواع السيارات" },
    { icon: Clock, text: "في دقائق" },
    { icon: Award, text: "أفضل الأسعار" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            <span>المنصة الأولى لمقارنة التأمين في السعودية</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            قارن واشترِ{" "}
            <span className="text-gradient">تأمين سيارتك</span>
            <br />
            بأفضل الأسعار
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            قارن بين عروض جميع شركات التأمين المعتمدة في المملكة واختر الأنسب لك. 
            احصل على وثيقتك في دقائق معدودة.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="#quote-form">
              <Button size="lg" className="gradient-primary border-0 text-lg px-8 h-14 shadow-glow animate-pulse-glow">
                احصل على عرض سعر مجاني
              </Button>
            </Link>
            <Link to="/companies">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                استعرض الشركات
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "+50,000", label: "عميل سعيد" },
            { value: "+15", label: "شركة تأمين" },
            { value: "24/7", label: "دعم متواصل" },
            { value: "100%", label: "رضا العملاء" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border/50 shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
