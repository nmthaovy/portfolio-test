import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Cpu, ExternalLink, ArrowRight, BarChart3, Search, Target, Lightbulb, Globe, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      tag: 'CEO GTV SEO CHIA SẺ',
      title: 'Chiến dịch tăng trưởng Organic Traffic đột phá',
      role: 'Lead dự án',
      desc: 'Triển khai chiến lược GEO tiên phong giúp website bứt phá lưu lượng truy cập tự nhiên, được CEO trực tiếp công nhận và chia sẻ.',
      results: [
        { label: 'Organic Traffic', value: '+150%' },
        { label: 'Top 1-3 Keywords', value: '500+' },
        { label: 'GEO Visibility', value: '95%' }
      ],
      link: 'https://www.facebook.com/share/p/1RXGdzCiVe/',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      id: 2,
      tag: 'E-COMMERCE',
      title: 'Tối ưu hóa trải nghiệm tìm kiếm AI (SGE)',
      role: 'SEO Specialist',
      desc: 'Tăng tỷ lệ hiển thị trên các công cụ tìm kiếm tạo sinh (SGE) cho sàn thương mại điện tử, giúp khách hàng tìm thấy sản phẩm thông qua truy vấn đàm thoại.',
      results: [
        { label: 'SGE Appearance', value: '+40%' },
        { label: 'CTR from AI', value: '12.5%' },
        { label: 'Conversion Rate', value: '+15%' }
      ],
      link: '#',
      icon: <Cpu className="w-8 h-8" />
    },
    {
      id: 3,
      tag: 'B2B SERVICES',
      title: 'Xây dựng Semantic Content Network',
      role: 'Content Strategist',
      desc: 'Thiết lập hệ thống nội dung ngữ nghĩa chuyên sâu, giúp website đạt Topical Authority trong lĩnh vực tài chính doanh nghiệp.',
      results: [
        { label: 'Topical Authority', value: 'High' },
        { label: 'Avg. Position', value: '4.2' },
        { label: 'Backlinks (Organic)', value: '200+' }
      ],
      link: '#',
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: 4,
      tag: 'LOCAL SEO',
      title: 'Phủ sóng thương hiệu đa kênh (GEO)',
      role: 'GEO Specialist',
      desc: 'Tối ưu hóa sự hiện diện của thương hiệu trên các nền tảng tìm kiếm địa phương và bản đồ tích hợp AI.',
      results: [
        { label: 'Map Views', value: '+80%' },
        { label: 'Direct Calls', value: '+35%' },
        { label: 'Reviews Score', value: '4.9/5' }
      ],
      link: '#',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-earth-50 pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-gold-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Case Studies</span>
          <h1 className="text-5xl lg:text-7xl font-black text-earth-950 tracking-tighter uppercase leading-none mb-8">
            Dự án <span className="text-gold-600 italic">Thực chiến</span>
          </h1>
          <p className="text-xl text-earth-800/70 leading-relaxed">
            Từ tăng trưởng traffic đột phá đến tối ưu hóa cho kỷ nguyên AI. Đây là cách tôi biến dữ liệu thành kết quả kinh doanh.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] border border-earth-200 overflow-hidden hover:border-gold-600/30 transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 p-10 bg-earth-100/50 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-earth-200">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gold-600 shadow-sm mb-8 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div className="inline-block px-3 py-1 bg-earth-900 text-white rounded text-[10px] font-black uppercase tracking-widest mb-4">
                      {project.tag}
                    </div>
                    <h3 className="text-2xl font-black text-earth-950 uppercase tracking-tight leading-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gold-600 font-bold text-sm uppercase tracking-wider mb-6">
                      {project.role}
                    </p>
                  </div>
                  
                  {project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-earth-900 font-black text-xs uppercase tracking-[0.2em] group-hover:text-gold-600 transition-colors"
                    >
                      Xem chi tiết <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>

                <div className="lg:w-2/3 p-10 flex flex-col justify-between">
                  <div className="mb-12">
                    <h4 className="text-xs font-black text-earth-900/40 uppercase tracking-[0.2em] mb-6">Thách thức & Giải pháp</h4>
                    <p className="text-lg text-earth-800/80 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-earth-900/40 uppercase tracking-[0.2em] mb-6">Kết quả đạt được</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                      {project.results.map((res, j) => (
                        <div key={j}>
                          <div className="text-3xl font-black text-gold-600 tracking-tighter">{res.value}</div>
                          <div className="text-[10px] font-bold text-earth-900 uppercase tracking-widest mt-1 opacity-60">{res.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
