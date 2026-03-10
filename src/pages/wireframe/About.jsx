import React from 'react';
import { Mail, Phone, Linkedin, Instagram, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

export default function WireframeAbout() {
  return (
    <div className="space-y-24">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3 aspect-[3/4] border-2 border-black bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400 font-bold">X [NEEDS: PHOTO]</span>
        </div>
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Về tôi</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tôi là một SEO / SEM Specialist với hơn [X] năm kinh nghiệm trong lĩnh vực Digital Marketing. 
              Đam mê của tôi là giúp các doanh nghiệp tối ưu hóa sự hiện diện trực tuyến và đạt được mục tiêu tăng trưởng thông qua dữ liệu.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-black flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Vị trí</p>
                <p className="font-bold">TP. Hồ Chí Minh</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-black flex items-center justify-center">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Kinh nghiệm</p>
                <p className="font-bold">[X] Năm</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-2 font-bold flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </button>
            <button className="border-2 border-black px-6 py-2 font-bold flex items-center gap-2">
              <Instagram size={18} /> Instagram
            </button>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Briefcase size={24} />
            <h2 className="text-2xl font-bold">Kinh nghiệm làm việc</h2>
          </div>
          <div className="space-y-8 border-l-2 border-black pl-6 relative">
            {[1, 2].map((exp) => (
              <div key={exp} className="space-y-2 relative">
                <div className="absolute -left-[33px] top-1 w-4 h-4 bg-white border-2 border-black rounded-full" />
                <p className="text-sm font-bold text-gray-500">202[X] - Hiện tại</p>
                <h3 className="text-xl font-bold">SEO Specialist @ [Tên Công Ty]</h3>
                <p className="text-gray-600 text-sm">
                  Mô tả các trách nhiệm chính và thành tựu đạt được tại vị trí này. Tập trung vào các con số tăng trưởng.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <GraduationCap size={24} />
            <h2 className="text-2xl font-bold">Học vấn</h2>
          </div>
          <div className="space-y-8 border-l-2 border-black pl-6 relative">
            <div className="space-y-2 relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 bg-white border-2 border-black rounded-full" />
              <p className="text-sm font-bold text-gray-500">201[X] - 202[X]</p>
              <h3 className="text-xl font-bold">Cử nhân Marketing</h3>
              <p className="text-gray-600 text-sm">Đại học [Tên Trường]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Placeholder */}
      <section className="border-2 border-black p-12 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Gửi tin nhắn cho tôi</h2>
          <p className="text-gray-600">Tôi sẽ phản hồi bạn trong vòng 24 giờ làm việc.</p>
        </div>
        <div className="max-w-2xl mx-auto grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase">Họ và tên</label>
              <div className="border-2 border-black p-3 bg-gray-50 text-gray-400">Nhập tên của bạn...</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase">Email</label>
              <div className="border-2 border-black p-3 bg-gray-50 text-gray-400">Nhập email của bạn...</div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase">Tin nhắn</label>
            <div className="border-2 border-black p-3 bg-gray-50 text-gray-400 h-32">Nhập nội dung tin nhắn...</div>
          </div>
          <button className="bg-black text-white py-4 font-bold hover:bg-gray-800">
            Gửi tin nhắn
          </button>
        </div>
      </section>
    </div>
  );
}
