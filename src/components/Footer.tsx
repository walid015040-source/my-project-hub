import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
                <span className="text-xl font-bold text-primary-foreground">ت</span>
              </div>
              <span className="text-xl font-bold">تأميني</span>
            </div>
            <p className="text-background/70 max-w-sm">
              منصة سعودية متخصصة في مقارنة أسعار التأمين من جميع الشركات المعتمدة. 
              نساعدك في الحصول على أفضل سعر في دقائق.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/70 hover:text-background transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-background/70 hover:text-background transition-colors">
                  شركات التأمين
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-background transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4" />
                <span dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4" />
                <span>support@tamini.sa</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-background/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} تأميني. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4 text-sm">
            <Link to="/privacy" className="text-background/60 hover:text-background transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="text-background/60 hover:text-background transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
