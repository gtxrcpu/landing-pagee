'use client';

import { useEffect } from 'react';

export default function Home() {
  // Initialize AOS
  useEffect(() => {
    // Delay AOS init to ensure library is loaded
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const AOS = (window as any).AOS;
        if (AOS) {
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
          });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-[#FEFDFB] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEFDFB]/95 backdrop-blur-sm border-b border-[#A8B99C]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="text-xl md:text-2xl font-bold text-[#3A3A3A] tracking-tight">
              CHESSCUIT
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-[#3A3A3A] hover:text-[#A8B99C] transition-colors duration-300">Beranda</a>
              <a href="#about" className="text-[#3A3A3A] hover:text-[#A8B99C] transition-colors duration-300">Tentang</a>
              <a href="#offers" className="text-[#3A3A3A] hover:text-[#A8B99C] transition-colors duration-300">Paket</a>
              <a href="#gallery" className="text-[#3A3A3A] hover:text-[#A8B99C] transition-colors duration-300">Galeri</a>
              <a href="#testimonials" className="text-[#3A3A3A] hover:text-[#A8B99C] transition-colors duration-300">Testimoni</a>
            </div>
            <button className="px-4 md:px-6 py-2 md:py-2.5 bg-[#A8B99C] text-white rounded-full hover:bg-[#96A88A] transition-all duration-300 hover:shadow-lg text-sm md:text-base">
              Pesan
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Responsive */}
      <section id="home" className="pt-24 md:pt-36 pb-16 md:pb-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 lg:gap-16 items-center">

            {/* Text Content - Order 2 on mobile, 1 on desktop */}
            <div data-aos="fade-right" className="max-w-xl order-2 lg:order-1">
              <span className="inline-flex items-center mb-4 md:mb-6 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-[#A8B99C]/15 text-[#A8B99C] text-xs md:text-sm font-medium">
                Artisan Dessert
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A3A3A] leading-[1.1] mb-4 md:mb-6">
                Kelezatan di Setiap
                <span className="block text-[#A8B99C]">
                  Lapisan
                </span>
              </h1>

              <p className="text-base md:text-lg text-[#5A5A5A] leading-relaxed mb-6 md:mb-10">
                Chesscuit menghadirkan perpaduan sempurna antara
                biscuit renyah dan krim keju lembut dari bahan
                premium pilihan.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
                <button className="px-8 md:px-10 py-3 md:py-4 bg-[#A8B99C] text-white rounded-full font-semibold hover:bg-[#96A88A] transition-all duration-300 shadow-xl hover:-translate-y-0.5">
                  Pesan Sekarang
                </button>

                <a
                  href="#about"
                  className="text-[#A8B99C] font-medium hover:underline transition-colors text-center sm:text-left py-3 sm:py-0"
                >
                  Lihat Cerita Kami →
                </a>
              </div>
            </div>

            {/* Image - Order 1 on mobile, 2 on desktop */}
            <div className="relative order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
              {/* Decorative shape - hidden on mobile */}
              <div className="hidden lg:block absolute inset-0 bg-[#A8B99C]/10 rounded-3xl rotate-6"></div>

              <div className="relative bg-[#F5F1E8] rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl md:shadow-2xl">
                <img
                  src="/chesscuit-hero.png"
                  alt="Chesscuit Desserts"
                  className="w-full h-auto rounded-xl md:rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* About Section - Responsive */}
      <section id="about" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-[#F5F1E8]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              <img
                src="/chesscuit-lifestyle.png"
                alt="Chesscuit Packaging"
                className="w-full h-auto rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl"
              />
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-4 md:mb-6">
                Dibuat dengan <span className="text-[#E8C5C0]">Penuh Cinta</span>
              </h2>
              <p className="text-base md:text-lg text-[#5A5A5A] mb-4 md:mb-6 leading-relaxed">
                Setiap Chesscuit adalah karya seni kuliner, menggabungkan bahan-bahan terbaik
                untuk menciptakan simfoni rasa yang memanjakan lidah Anda.
              </p>
              <p className="text-base md:text-lg text-[#5A5A5A] mb-6 md:mb-8 leading-relaxed">
                Dari dapur artisan kami ke meja Anda, kami memastikan setiap potongan dibuat dengan
                perhatian mendetail dan standar kualitas tertinggi.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
                  <div className="text-3xl font-bold text-[#A8B99C] mb-2">100%</div>
                  <div className="text-sm text-[#5A5A5A]">Alami</div>
                </div>
                <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
                  <div className="text-3xl font-bold text-[#A8B99C] mb-2">Segar</div>
                  <div className="text-sm text-[#5A5A5A]">Setiap Hari</div>
                </div>
                <div className="text-center" data-aos="zoom-in" data-aos-delay="500">
                  <div className="text-3xl font-bold text-[#A8B99C] mb-2">Premium</div>
                  <div className="text-sm text-[#5A5A5A]">Kualitas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Responsive */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-3 md:mb-4">
              Mengapa Memilih <span className="text-[#A8B99C]">Chesscuit</span>
            </h2>
            <p className="text-base md:text-lg text-[#5A5A5A] max-w-2xl mx-auto px-4">
              Temukan apa yang membuat produk kami istimewa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 overflow-hidden bg-[#F5F1E8]">
                <img src="/icon-ingredients.png" alt="Bahan Premium" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Bahan Premium</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Kami hanya menggunakan bahan-bahan terbaik untuk memastikan setiap gigitan adalah pengalaman mewah.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 overflow-hidden bg-[#F5F1E8]">
                <img src="/icon-handcrafted.png" alt="Buatan Tangan" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Buatan Tangan</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Setiap Chesscuit dibuat dengan hati-hati oleh pengrajin terampil kami dengan dedikasi dan perhatian.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 overflow-hidden bg-[#F5F1E8]">
                <img src="/icon-balance.png" alt="Keseimbangan Sempurna" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Keseimbangan Sempurna</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Perpaduan harmonis tekstur dan rasa yang menciptakan cita rasa tak terlupakan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Section - Responsive */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-[#F5F1E8]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-6">
                Discover the <span className="text-[#A8B99C]">Chesscuit</span> Experience
              </h2>
              <p className="text-lg text-[#5A5A5A] mb-6 leading-relaxed">
                Chesscuit adalah perpaduan sempurna antara lapisan biscuit renyah dengan
                krim keju lembut yang diperkaya dengan cranberry premium. Setiap gigitan
                memberikan sensasi tekstur yang kontras namun harmonis.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#A8B99C] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#3A3A3A] mb-1">Lapisan Biscuit</h4>
                    <p className="text-[#5A5A5A]">Lapisan biscuit premium yang renyah dengan hint vanilla</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#E8C5C0] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#3A3A3A] mb-1">Krim Keju</h4>
                    <p className="text-[#5A5A5A]">Krim keju lembut dengan sentuhan ubi ungu natural</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#A8B99C] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#3A3A3A] mb-1">Topping Premium</h4>
                    <p className="text-[#5A5A5A]">Cranberry kering dan white chocolate drizzle</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <img
                  src="/chesscuit-closeup.png"
                  alt="Detail Chesscuit"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#A8B99C]">1pcs</div>
                    <div className="text-sm text-[#5A5A5A]">Per Box</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#A8B99C]">Segar</div>
                    <div className="text-sm text-[#5A5A5A]">5 Hari</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#A8B99C]">Dingin</div>
                    <div className="text-sm text-[#5A5A5A]">Penyimpanan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Offers Section - Responsive */}
      <section id="offers" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-3 md:mb-4">
              Pilih Paket <span className="text-[#E8C5C0]">Sempurna</span> Anda
            </h2>
            <p className="text-base md:text-lg text-[#5A5A5A] max-w-2xl mx-auto px-4">
              Pilih paket yang sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#3A3A3A] mb-2">Paket Starter</h3>
                <p className="text-[#5A5A5A] mb-4">Sempurna untuk mencoba</p>
                <div className="text-4xl font-bold text-[#A8B99C] mb-2">Rp 35K</div>
                <div className="text-sm text-[#7A7A7A]">1 Box (1pcs)</div>
              </div>
              <div className="border-t border-[#F5F1E8] pt-6 space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#A8B99C] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">1 potong Chesscuit premium</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#A8B99C] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">Box hadiah premium</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#A8B99C] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">Kartu ucapan gratis</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 border-2 border-[#A8B99C] text-[#A8B99C] rounded-full hover:bg-[#A8B99C] hover:text-white transition-all duration-300 font-semibold">
                Pesan Sekarang
              </button>
            </div>

            {/* Popular Package */}
            <div
              className="bg-[#A8B99C] rounded-3xl p-8 shadow-xl transform scale-105 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#E8C5C0] text-white px-6 py-2 rounded-full text-sm font-semibold">
                Paling Populer
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Paket Keluarga</h3>
                <p className="text-white/90 mb-4">Nilai terbaik untuk keluarga</p>
                <div className="text-4xl font-bold text-white mb-2">Rp 100K</div>
                <div className="text-sm text-white/80">3 Boxes (3pcs)</div>
              </div>
              <div className="border-t border-white/20 pt-6 space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-white">3 potong Chesscuit premium</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-white">3 box hadiah premium</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-white">Gratis ongkir Jakarta</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-white">Hemat Rp 5K</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-white text-[#A8B99C] rounded-full hover:bg-[#F5F1E8] transition-all duration-300 font-semibold shadow-lg">
                Pesan Sekarang
              </button>
            </div>

            {/* Premium Package */}
            <div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#3A3A3A] mb-2">Paket Pesta</h3>
                <p className="text-[#5A5A5A] mb-4">Untuk acara spesial</p>
                <div className="text-4xl font-bold text-[#E8C5C0] mb-2">Rp 165K</div>
                <div className="text-sm text-[#7A7A7A]">5 Boxes (5pcs)</div>
              </div>
              <div className="border-t border-[#F5F1E8] pt-6 space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#E8C5C0] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">5 potong Chesscuit premium</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#E8C5C0] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">5 box hadiah premium</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#E8C5C0] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">Gratis ongkir Jabodetabek</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#E8C5C0] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">Kartu ucapan custom</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#E8C5C0] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">Hemat Rp 10K</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 border-2 border-[#E8C5C0] text-[#E8C5C0] rounded-full hover:bg-[#E8C5C0] hover:text-white transition-all duration-300 font-semibold">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Responsive */}
      <section id="gallery" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-[#F5F1E8]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-3 md:mb-4">
              Kreasi <span className="text-[#E8C5C0]">Kami</span>
            </h2>
            <p className="text-base md:text-lg text-[#5A5A5A] max-w-2xl mx-auto px-4">
              Lihat sekilas dessert kami yang dibuat dengan indah
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src="/chesscuit-hero.png"
                alt="Chesscuit Gallery 1"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#A8B99C]/0 group-hover:bg-[#A8B99C]/20 transition-all duration-300"></div>
            </div>
            <div
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="/chesscuit-closeup.png"
                alt="Chesscuit Gallery 2"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#E8C5C0]/0 group-hover:bg-[#E8C5C0]/20 transition-all duration-300"></div>
            </div>
            <div
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src="/chesscuit-lifestyle.png"
                alt="Chesscuit Gallery 3"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#A8B99C]/0 group-hover:bg-[#A8B99C]/20 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Responsive */}
      <section id="testimonials" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-3 md:mb-4">
              Kata <span className="text-[#A8B99C]">Mereka</span>
            </h2>
            <p className="text-base md:text-lg text-[#5A5A5A] max-w-2xl mx-auto px-4">
              Dengarkan pengalaman pelanggan kami yang puas
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-[#A8B99C] rounded-sm mr-1"></div>
                ))}
              </div>
              <p className="text-[#5A5A5A] mb-6 leading-relaxed">
                "Chesscuit ini enak banget! Kombinasi rasa dan teksturnya sempurna. Aku suka banget dengan krim kejunya yang lembut dan biscuitnya yang renyah."
              </p>
              <div className="flex items-center">
                <img
                  src="/profile-1.png"
                  alt="Sarah Putri"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-[#3A3A3A]">Sarah Putri</div>
                  <div className="text-sm text-[#7A7A7A]">Food Blogger</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-[#A8B99C] rounded-sm mr-1"></div>
                ))}
              </div>
              <p className="text-[#5A5A5A] mb-6 leading-relaxed">
                "Sempurna untuk acara spesial! Saya pesan untuk ulang tahun istri dan semua tamu tidak berhenti memuji kelezatannya. Kemasannya juga cantik!"
              </p>
              <div className="flex items-center">
                <img
                  src="/profile-2.png"
                  alt="Budi Santoso"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-[#3A3A3A]">Budi Santoso</div>
                  <div className="text-sm text-[#7A7A7A]">Pengusaha</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-[#A8B99C] rounded-sm mr-1"></div>
                ))}
              </div>
              <p className="text-[#5A5A5A] mb-6 leading-relaxed">
                "Sebagai pastry chef, saya sangat menghargai kualitas dan detail Chesscuit ini. Rasanya premium dan presentasinya melebihi ekspektasi saya!"
              </p>
              <div className="flex items-center">
                <img
                  src="/profile-3.png"
                  alt="Dewi Lestari"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-[#3A3A3A]">Dewi Lestari</div>
                  <div className="text-sm text-[#7A7A7A]">Pastry Chef</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-[#A8B99C]" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Siap Merasakan Chesscuit?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Pesan sekarang dan manjakan diri Anda dengan dessert artisan terbaik.
            Sempurna untuk acara apapun atau sebagai hadiah istimewa untuk diri sendiri.
          </p>
          <button className="px-10 py-4 bg-white text-[#A8B99C] rounded-full font-semibold hover:bg-[#F5F1E8] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
            Buat Pesanan
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-[#3A3A3A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">CHESSCUIT</div>
              <p className="text-white/70">
                Dessert artisan yang dibuat dengan penuh cinta dan bahan-bahan premium.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Link Cepat</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#gallery" className="text-white/70 hover:text-white transition-colors">Galeri</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Kontak</h4>
              <ul className="space-y-2 text-white/70">
                <li>Email: hello@chesscuit.com</li>
                <li>Telepon: +62 123 4567 890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>&copy; 2026 Chesscuit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
