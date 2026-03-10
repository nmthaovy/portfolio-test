import React from 'react';
import { ArrowRight, ExternalLink, TrendingUp, Target, Lightbulb } from 'lucide-react';

export default function WireframeProjects() {
  const projects = [
    { id: 1, title: 'Chiến dịch SEO Bất động sản', category: 'SEO Strategy', result: '+150% Organic Traffic' },
    { id: 2, title: 'Tối ưu Google Ads E-commerce', category: 'SEM / Google Ads', result: 'ROI 4.5x' },
    { id: 3, title: 'Content Marketing cho SaaS', category: 'Content Strategy', result: 'Top 3 Keywords' },
    { id: 4, title: 'Audit SEO Website Giáo dục', category: 'Technical SEO', result: 'Fix 100+ Errors' },
  ];

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="space-y-6">
        <h1 className="text-5xl font-bold">Dự án & Chiến dịch</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Danh sách các dự án tôi đã thực hiện, tập trung vào việc tối ưu hóa hiệu suất và mang lại kết quả kinh doanh thực tế.
        </p>
      </section>

      {/* Projects List Section */}
      <section className="space-y-12">
        {projects.map((project, i) => (
          <div key={project.id} className="border-2 border-black flex flex-col md:flex-row overflow-hidden group">
            {/* Project Image Placeholder */}
            <div className="w-full md:w-1/3 aspect-video md:aspect-auto bg-gray-100 border-b-2 md:border-b-0 md:border-r-2 border-black flex items-center justify-center">
              <span className="text-gray-400 font-bold">X [NEEDS: PROJECT IMAGE]</span>
            </div>
            
            {/* Project Details */}
            <div className="flex-1 p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-xs font-bold border-2 border-black px-2 py-0.5 uppercase">{project.category}</span>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 font-bold uppercase">Kết quả</p>
                  <p className="text-xl font-bold text-black">{project.result}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 py-4 border-y-2 border-black border-dashed">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Target size={16} /> Mục tiêu
                  </div>
                  <p className="text-sm text-gray-600">Tăng trưởng traffic tự nhiên và cải thiện thứ hạng từ khóa chính.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Lightbulb size={16} /> Giải pháp
                  </div>
                  <p className="text-sm text-gray-600">Tối ưu On-page, xây dựng Backlink chất lượng và cải thiện Content.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <TrendingUp size={16} /> Kết quả
                  </div>
                  <p className="text-sm text-gray-600">Đạt top 3 cho 50+ từ khóa mục tiêu trong vòng 6 tháng.</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div className="flex gap-4">
                  <span className="text-xs font-bold text-gray-400">#SEO</span>
                  <span className="text-xs font-bold text-gray-400">#GoogleAds</span>
                  <span className="text-xs font-bold text-gray-400">#Analytics</span>
                </div>
                <button className="flex items-center gap-2 font-bold hover:underline">
                  Xem chi tiết <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination / Load More Placeholder */}
      <div className="text-center py-8">
        <button className="border-2 border-black px-8 py-3 font-bold hover:bg-gray-100">
          Xem thêm dự án
        </button>
      </div>
    </div>
  );
}
