import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, TrendingUp, Search, BarChart3 } from 'lucide-react';

export default function WireframeHome() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 py-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block border-2 border-black px-3 py-1 text-sm font-bold">
            SEO / SEM SPECIALIST
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Nguyễn Mai Thảo Vy
          </h1>
          <p className="text-xl text-gray-600 max-w-xl">
            Giúp doanh nghiệp tăng trưởng bền vững thông qua chiến lược SEO/SEM thực chiến và tối ưu hóa chuyển đổi.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-black text-white px-8 py-3 flex items-center gap-2 hover:bg-gray-800">
              <Download size={20} /> Tải CV (PDF)
            </button>
            <button className="border-2 border-black px-8 py-3 flex items-center gap-2 hover:bg-gray-100">
              <Mail size={20} /> Liên hệ ngay
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-square border-2 border-black bg-gray-100 flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full border-2 border-black flex items-center justify-center">
              <span className="text-gray-400 font-bold text-2xl">X [NEEDS: PHOTO]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Kỹ năng chuyên môn</h2>
          <p className="text-gray-600">Tập trung vào kết quả và sự tăng trưởng</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Search, title: 'SEO Strategy', desc: 'Tối ưu hóa công cụ tìm kiếm, nghiên cứu từ khóa và xây dựng nội dung chuẩn SEO.' },
            { icon: TrendingUp, title: 'SEM / Google Ads', desc: 'Quản lý chiến dịch quảng cáo trả phí, tối ưu hóa CPC và tăng tỷ lệ chuyển đổi.' },
            { icon: BarChart3, title: 'Data Analytics', desc: 'Phân tích số liệu từ Google Analytics, Search Console để đưa ra quyết định chiến lược.' },
          ].map((skill, i) => (
            <div key={i} className="border-2 border-black p-8 space-y-4 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                <skill.icon size={24} />
              </div>
              <h3 className="text-xl font-bold">{skill.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Dự án tiêu biểu</h2>
            <p className="text-gray-600">Những chiến dịch đã mang lại kết quả thực tế</p>
          </div>
          <Link to="/wireframe/projects" className="flex items-center gap-2 font-bold hover:underline">
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((project) => (
            <div key={project} className="border-2 border-black group overflow-hidden">
              <div className="aspect-video bg-gray-100 border-b-2 border-black flex items-center justify-center">
                <span className="text-gray-400 font-bold">X [NEEDS: PROJECT IMAGE]</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Tên dự án #{project}</h3>
                  <span className="text-sm border-2 border-black px-2 py-0.5 font-bold">SEO / SEM</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Mô tả ngắn gọn về dự án, mục tiêu và kết quả đạt được (ví dụ: Tăng 200% traffic trong 6 tháng).
                </p>
                <Link to="/wireframe/projects" className="inline-flex items-center gap-2 font-bold text-sm hover:underline">
                  Chi tiết dự án <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-2 border-black p-12 text-center space-y-8 bg-gray-50">
        <h2 className="text-4xl font-bold">Bạn đang tìm kiếm một SEO Specialist?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Hãy cùng thảo luận về cách tôi có thể giúp doanh nghiệp của bạn tăng trưởng traffic và doanh thu.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-10 py-4 font-bold hover:bg-gray-800">
            Liên hệ ngay
          </button>
          <button className="border-2 border-black px-10 py-4 font-bold hover:bg-gray-100">
            Tải CV
          </button>
        </div>
      </section>
    </div>
  );
}
