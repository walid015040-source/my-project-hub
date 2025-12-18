import { Shield, Zap, HeadphonesIcon, BadgeCheck, Wallet, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "سريع وسهل",
      description: "احصل على عروض الأسعار في أقل من 3 دقائق بخطوات بسيطة",
    },
    {
      icon: Shield,
      title: "آمن وموثوق",
      description: "بياناتك محمية ومشفرة بأعلى معايير الأمان",
    },
    {
      icon: Wallet,
      title: "أفضل الأسعار",
      description: "قارن بين جميع الشركات واحصل على أقل سعر مضمون",
    },
    {
      icon: BadgeCheck,
      title: "شركات معتمدة",
      description: "جميع الشركات مرخصة من البنك المركزي السعودي",
    },
    {
      icon: HeadphonesIcon,
      title: "دعم متواصل",
      description: "فريق دعم متخصص متاح على مدار الساعة لمساعدتك",
    },
    {
      icon: Clock,
      title: "توفير الوقت",
      description: "وفر وقتك وجهدك بدلاً من زيارة كل شركة على حدة",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            لماذا <span className="text-gradient">تأميني</span>؟
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم لك تجربة فريدة في مقارنة وشراء تأمين سيارتك
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
