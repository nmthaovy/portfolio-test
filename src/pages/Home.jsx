import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, TrendingUp, Search, BarChart3, CheckCircle2, Award, ExternalLink, Cpu, Target, Lightbulb, BarChart } from 'lucide-react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Thuật toán GEO', 'Trí tuệ Nhân tạo', 'Ý định Người dùng', 'Hiệu suất Tăng trưởng'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const stats = [
    { number: '02+', label: 'Năm kinh nghiệm' },
    { number: '04+', label: 'Dự án lớn' },
    { number: '95%', label: 'Chỉ số GEO' },
  ];

  const featuredProjects = [
    {
      tag: 'CEO GTV SEO CHIA SẺ',
      title: 'Chiến dịch tăng trưởng Organic Traffic đột phá',
      desc: 'Vai trò: Lead dự án. Triển khai chiến lược GEO tiên phong giúp website bứt phá lưu lượng truy cập tự nhiên, được CEO trực tiếp công nhận và chia sẻ.',
      link: 'https://www.facebook.com/share/p/1RXGdzCiVe/',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      tag: 'E-COMMERCE',
      title: 'Tối ưu hóa trải nghiệm tìm kiếm AI',
      desc: 'Tăng tỷ lệ hiển thị trên các công cụ tìm kiếm tạo sinh (SGE) cho sàn thương mại điện tử, giúp khách hàng tìm thấy sản phẩm thông qua truy vấn đàm thoại.',
      link: '#',
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const processes = [
    {
      id: '01',
      title: 'CHUẨN ĐOÁN',
      subtitle: 'Root Cause, không symptom',
      desc: 'Traffic drop không phải luôn là do content kém. Có thể là crawl budget, có thể là cannibalization, có thể là Google đang đánh giá thấp cả một section vì thiếu chiều sâu chuyên môn.',
      tags: ['Log File Analysis', 'GSC Data', 'Screaming Frog']
    },
    {
      id: '02',
      title: 'CHIẾN LƯỢC',
      subtitle: 'Priority Matrix, không to-do list',
      desc: 'Xây dựng priority matrix dựa trên: impact × effort × time-to-result. Những gì làm trước, những gì defer, những gì không làm để đạt kết quả nhanh nhất.',
      tags: ['Impact Framework', 'Topical Map', 'Competitor Gap']
    },
    {
      id: '03',
      title: 'TRIỂN KHAI',
      subtitle: 'Semantic depth, không keyword stuffing',
      desc: 'Xây dựng Semantic Content Network: hệ thống bài viết liên kết chặt chẽ để Google nhận diện website là nguồn đáng tin cậy về toàn bộ lĩnh vực.',
      tags: ['Semantic Content', 'Topical Authority', 'Visual Semantic']
    },
    {
      id: '04',
      title: 'ĐO LƯỜNG',
      subtitle: 'Business outcome, không vanity metrics',
      desc: 'Kết nối organic performance với business KPIs: bao nhiêu lead, bao nhiêu chuyển thành khách hàng, ROI là bao nhiêu. Đây là giá trị thực của SEO.',
      tags: ['GA4 Custom Events', 'Attribution Model', 'Monthly Report']
    }
  ];

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-100 border border-earth-800/10 text-earth-900 text-xs font-bold uppercase tracking-widest mb-8">
                <Cpu className="w-4 h-4 text-gold-600" />
                Kỷ nguyên SEO mới: Tập trung GEO
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-earth-950 leading-[0.9] mb-6 tracking-tighter uppercase">
                <span className="block font-medium text-earth-800 text-4xl lg:text-5xl tracking-normal mb-2">Nguyễn Mai</span>
                Thảo Vy
              </h1>
              
              <div className="text-2xl lg:text-3xl font-bold text-earth-900 mb-8">
                Tối ưu hóa cho <span ref={el} className="text-gold-600"></span>
              </div>
              
              <p className="text-xl text-earth-800/80 max-auto lg:max-w-xl mb-10 italic border-l-4 border-gold-600 pl-6 leading-relaxed">
                "SEO không chỉ là về các thuật toán; đó là về việc thấu hiểu ý định của con người và dẫn dắt họ trong kỷ nguyên tìm kiếm bằng AI."
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-12 mb-12">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-5xl font-black text-gold-600 tracking-tighter">{stat.number}</div>
                    <div className="text-[10px] font-bold text-earth-900 uppercase tracking-widest mt-1 opacity-60">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="#" className="px-8 py-4 bg-earth-900 text-white rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-earth-800 transition-all flex items-center gap-2 shadow-xl shadow-earth-900/20">
                  Tải CV PDF <Download className="w-4 h-4" />
                </a>
                <Link to="/projects" className="px-8 py-4 bg-white border-2 border-earth-900 text-earth-900 rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-earth-50 transition-all flex items-center gap-2">
                  Case Studies <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-earth-100 rounded-3xl overflow-hidden border border-earth-200 shadow-[30px_30px_0px_#F5F1ED,31px_31px_0px_#D97706] hover:translate-x-[-10px] hover:translate-y-[-10px] transition-all duration-500 group">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQGtRE0exK86Cg/profile-displayphoto-crop_800_800/B56ZuENpWyJoAI-/0/1767449729429?e=1771459200&v=beta&t=YYvWFVplVhaFVBrKumyd8PNG1Utgmlk8TEcvprhvSzI" 
                  alt="Nguyễn Mai Thảo Vy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-gold-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Portfolio</span>
              <h2 className="text-4xl lg:text-6xl font-black text-earth-950 tracking-tighter uppercase leading-none">
                Dự án <span className="text-gold-600 italic">Tiêu biểu</span>
              </h2>
            </div>
            <Link to="/projects" className="group flex items-center gap-2 text-earth-900 font-bold uppercase text-sm tracking-widest">
              Xem tất cả dự án <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-earth-50 rounded-2xl border border-earth-100 hover:border-gold-600/30 transition-all group"
              >
                <div className="inline-block px-3 py-1 bg-white border border-earth-200 rounded text-[10px] font-black text-earth-900 uppercase tracking-widest mb-6">
                  {project.tag}
                </div>
                <h3 className="text-2xl font-black text-earth-950 mb-4 uppercase tracking-tight group-hover:text-gold-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-earth-800/70 mb-8 leading-relaxed">
                  {project.desc}
                </p>
                {project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold-600 font-bold text-xs uppercase tracking-widest">
                    Xem chi tiết dự án <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-earth-100/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-gold-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Cách tôi làm việc</span>
            <h2 className="text-4xl lg:text-6xl font-black text-earth-950 tracking-tighter uppercase leading-none mb-8">
              Process, <span className="text-gold-600 italic underline decoration-wavy decoration-gold-600/30 underline-offset-8">không phải</span> checklist.
            </h2>
            <p className="text-xl text-earth-800/70 leading-relaxed">
              Mỗi dự án bắt đầu từ câu hỏi: vấn đề thực sự là gì? — không phải "keyword nào chưa target?"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {processes.map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl border border-earth-200 hover:border-gold-600 transition-all flex flex-col justify-between group">
                <div>
                  <div className="text-2xl font-black text-gold-600/30 mb-2 tracking-tighter">{item.id} . {item.title}</div>
                  <h3 className="text-2xl font-black text-earth-950 mb-6 uppercase tracking-tight">
                    {item.subtitle.split(',')[0]}, <span className="text-gold-600 italic">{item.subtitle.split(',')[1]}</span>
                  </h3>
                  <p className="text-earth-800/70 mb-8 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-earth-50 border border-earth-100 rounded-full text-[10px] font-bold text-earth-900 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-earth-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase mb-8 leading-none">
            Hợp tác <br /> cùng <span className="text-gold-600 italic">Vy</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Sẵn sàng bứt phá các giới hạn mới trong thế giới Search Marketing AI.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:thao.vy@example.com" className="px-10 py-5 bg-gold-600 text-white rounded-xl font-black uppercase text-sm tracking-[0.2em] hover:bg-gold-500 transition-all shadow-2xl shadow-gold-600/20">
              Gửi Email Ngay
            </a>
            <a href="https://www.linkedin.com/in/nmthaovy/" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-black uppercase text-sm tracking-[0.2em] hover:bg-white/20 transition-all">
              Kết nối LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
