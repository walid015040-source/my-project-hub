import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Car, User, Phone, CreditCard, Loader2 } from "lucide-react";

const QuoteForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    nationalId: "",
    carMake: "",
    carModel: "",
    carYear: "",
    insuranceType: "comprehensive",
  });

  const carMakes = [
    "تويوتا", "هيونداي", "نيسان", "فورد", "شيفروليه", "كيا", "هوندا", "مازدا", "BMW", "مرسيدس"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();

      const { error } = await supabase.from("quote_requests").insert({
        user_id: user?.id || null,
        full_name: formData.fullName,
        phone: formData.phone,
        national_id: formData.nationalId,
        car_make: formData.carMake,
        car_model: formData.carModel,
        car_year: parseInt(formData.carYear),
        insurance_type: formData.insuranceType,
      });

      if (error) throw error;

      toast({
        title: "تم إرسال طلبك بنجاح! ✓",
        description: "سنتواصل معك قريباً بعروض الأسعار من شركات التأمين",
      });

      setFormData({
        fullName: "",
        phone: "",
        nationalId: "",
        carMake: "",
        carModel: "",
        carYear: "",
        insuranceType: "comprehensive",
      });
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote-form" className="py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl md:text-3xl">احصل على عرض سعر</CardTitle>
              <CardDescription className="text-base">
                أدخل بياناتك وسنرسل لك أفضل العروض من شركات التأمين
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    البيانات الشخصية
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">الاسم الكامل</Label>
                      <Input
                        id="fullName"
                        placeholder="محمد أحمد"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الجوال</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="05xxxxxxxx"
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationalId">رقم الهوية / الإقامة</Label>
                    <Input
                      id="nationalId"
                      placeholder="1xxxxxxxxx"
                      dir="ltr"
                      value={formData.nationalId}
                      onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Car Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    بيانات السيارة
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>نوع السيارة</Label>
                      <Select
                        value={formData.carMake}
                        onValueChange={(value) => setFormData({ ...formData, carMake: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="اختر النوع" />
                        </SelectTrigger>
                        <SelectContent>
                          {carMakes.map((make) => (
                            <SelectItem key={make} value={make}>
                              {make}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="carModel">الموديل</Label>
                      <Input
                        id="carModel"
                        placeholder="كامري"
                        value={formData.carModel}
                        onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>سنة الصنع</Label>
                      <Select
                        value={formData.carYear}
                        onValueChange={(value) => setFormData({ ...formData, carYear: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="السنة" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Insurance Type */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    نوع التأمين
                  </h3>
                  <Select
                    value={formData.insuranceType}
                    onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comprehensive">تأمين شامل</SelectItem>
                      <SelectItem value="third-party">تأمين ضد الغير</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary border-0 h-14 text-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    "احصل على عروض الأسعار"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
