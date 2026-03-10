import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, MapPin, Calendar, Briefcase, GraduationCap, Award, CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      id: 1,
      role: 'SEO & GEO Specialist',
      company: 'GTV SEO',
      period: '2024 - Hiện tại',
      desc: 'Dẫn dắt các chiến dịch SEO bứt phá traffic, tiên phong ứng dụng GEO (Generative Engine Optimization) cho các dự án lớn.'
    },
    {
      id: 2,
      role: 'Content Marketing Intern',
      company: 'Digital Agency',
      period: '2023 - 2024',
      desc: 'Xây dựng kế hoạch nội dung đa kênh, tối ưu hóa bài viết chuẩn SEO và quản lý cộng đồng.'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Cử nhân Marketing',
      school: 'Đại học Kinh tế TP.HCM (UEH)',
      period: '2020 - 2024',
      desc: 'Chuyên ngành Marketing số, tốt nghiệp loại Giỏi.'
    }
  ];

  const awards = [
    {
      id: 1,
      title: 'Nhân sự Xuất sắc - Best Award 2026',
      org: 'GTV SEO',
      desc: 'Trao tặng bởi CEO Đỗ Anh Việt cho những đóng góp đột phá trong dự án Organic Traffic.'
    },
    {
      id: 2,
      title: 'Google Analytics Qualification',
      org: 'Google',
      desc: 'Chứng chỉ phân tích dữ liệu chuyên sâu từ Google.'
    }
  ];

  return (
    <div className="min-h-screen bg-earth-50 pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Profile Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3"
          >
            <div className="sticky top-32">
              <div className="w-full aspect-square bg-earth-100 rounded-3xl overflow-hidden border border-earth-200 shadow-xl mb-10">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQGtRE0exK86Cg/profile-displayphoto-crop_800_800/B56ZuENpWyJoAI-/0/1767449729429?e=1771459200&v=beta&t=YYvWFVplVhaFVBrKumyd8PNG1Utgmlk8TEcvprhvSzI" 
                  alt="Nguyễn Mai Thảo Vy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <h1 className="text-4xl font-black text-earth-950 uppercase tracking-tighter mb-2">Nguyễn Mai Thảo Vy</h1>
              <p className="text-gold-600 font-bold text-sm uppercase tracking-widest mb-8">SEO & GEO Specialist</p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-earth-800/70">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gold-600 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">thao.vy@example.com</span>
                </div>
                <div className="flex items-center gap-4 text-earth-800/70">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gold-600 shadow-sm">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">linkedin.com/in/nmthaovy</span>
                </div>
                <div className="flex items-center gap-4 text-earth-800/70">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gold-600 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">TP. Hồ Chí Minh, Việt Nam</span>
                </div>
              </div>

              <a href="#" className="w-full py-4 bg-earth-900 text-white rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-earth-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-earth-900/20">
                Tải CV PDF <CheckCircle2 className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3"
          >
            {/* About Me */}
            <section className="mb-20">
              <span className="text-gold-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Về tôi</span>
              <h2 className="text-4xl font-black text-earth-950 uppercase tracking-tighter mb-8">Tư duy <span className="text-gold-600 italic">Chiến lược</span></h2>
              <p className="text-xl text-earth-800/70 leading-relaxed mb-8">
                Tôi không chỉ làm SEO để tăng traffic, tôi làm SEO để tạo ra giá trị kinh doanh thực tế. Trong kỷ nguyên AI, tôi tập trung vào GEO (Generative Engine Optimization) để đảm bảo thương hiệu của bạn luôn xuất hiện đầu tiên khi người dùng đặt câu hỏi cho các mô hình ngôn ngữ lớn.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-earth-200">
                  <Target className="w-8 h-8 text-gold-600 mb-4" />
                  <h3 className="font-black text-earth-950 uppercase text-xs tracking-widest mb-2">Mục tiêu</h3>
                  <p className="text-xs text-earth-800/60 leading-relaxed">Tối ưu hóa trải nghiệm tìm kiếm AI cho doanh nghiệp.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-earth-200">
                  <Lightbulb className="w-8 h-8 text-gold-600 mb-4" />
                  <h3 className="font-black text-earth-950 uppercase text-xs tracking-widest mb-2">Sáng tạo</h3>
                  <p className="text-xs text-earth-800/60 leading-relaxed">Xây dựng Semantic Content Network chuyên sâu.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-earth-200">
                  <TrendingUp className="w-8 h-8 text-gold-600 mb-4" />
                  <h3 className="font-black text-earth-950 uppercase text-xs tracking-widest mb-2">Kết quả</h3>
                  <p className="text-xs text-earth-800/60 leading-relaxed">Tăng trưởng Organic Traffic bền vững và ROI cao.</p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-20">
              <span className="text-gold-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Kinh nghiệm</span>
              <h2 className="text-4xl font-black text-earth-950 uppercase tracking-tighter mb-8">Hành trình <span className="text-gold-600 italic">Nghề nghiệp</span></h2>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative pl-8 border-l-2 border-earth-200 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-gold-600 rounded-full group-hover:bg-gold-600 transition-colors"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-black text-earth-950 uppercase tracking-tight">{exp.role}</h3>
                      <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <div className="text-sm font-bold text-earth-900/60 uppercase tracking-widest mb-4">{exp.company}</div>
                    <p className="text-earth-800/70 leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards */}
            <section>
              <span className="text-gold-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Thành tựu</span>
              <h2 className="text-4xl font-black text-earth-950 uppercase tracking-tighter mb-8">Chứng chỉ <span className="text-gold-600 italic">& Giải thưởng</span></h2>
              <div className="grid gap-4">
                {awards.map((award) => (
                  <div key={award.id} className="p-8 bg-white rounded-2xl border border-earth-200 flex items-start gap-6 hover:border-gold-600 transition-all group">
                    <div className="w-12 h-12 bg-earth-50 rounded-xl flex items-center justify-center text-gold-600 group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-lg font-black text-earth-950 uppercase tracking-tight">{award.title}</h3>
                        <span className="text-[10px] font-black text-gold-600 uppercase tracking-widest">{award.org}</span>
                      </div>
                      <p className="text-sm text-earth-800/60 leading-relaxed">{award.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
