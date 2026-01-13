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
    <div className="min-h-screen bg-[#FEFDFB]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEFDFB]/95 backdrop-blur-sm border-b border-[#A8B99C]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold text-[#3A3A3A] tracking-tight">
              CHESSCUIT
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-[#3A3A3A] hover:text-[#A8B99C] transition-colors duration-300">Home</a>
              <a href="#about" className="text-[#3A3A3A] hover:text-[#A8B99C] transition-colors duration-300">About</a>
              <a href="#offers" className="text-[#3A3A3A] hover:text-[#A8B99C] transition-colors duration-300">Offers</a>
              <a href="#gallery" className="text-[#3A3A3A] hover:text-[#A8B99C] transition-colors duration-300">Gallery</a>
              <a href="#testimonials" className="text-[#3A3A3A] hover:text-[#A8B99C] transition-colors duration-300">Testimonials</a>
            </div>
            <button className="px-6 py-2.5 bg-[#A8B99C] text-white rounded-full hover:bg-[#96A88A] transition-all duration-300 hover:shadow-lg">
              Order Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#3A3A3A] leading-tight mb-6">
                Delight in Every
                <span className="text-[#A8B99C]"> Layer</span>
              </h1>
              <p className="text-lg text-[#5A5A5A] mb-8 leading-relaxed">
                Experience the perfect harmony of flavors with our artisan Chesscuit -
                a delicate blend of premium ingredients, handcrafted with love and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#A8B99C] text-white rounded-full hover:bg-[#96A88A] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5">
                  Explore Our Products
                </button>
                <button className="px-8 py-4 border-2 border-[#A8B99C] text-[#A8B99C] rounded-full hover:bg-[#A8B99C] hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="absolute inset-0 bg-[#A8B99C]/10 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-[#F5F1E8] rounded-3xl p-8 shadow-2xl">
                <img
                  src="/chesscuit-hero.png"
                  alt="Chesscuit Desserts"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              <img
                src="/chesscuit-lifestyle.png"
                alt="Chesscuit Packaging"
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-6">
                Crafted with <span className="text-[#E8C5C0]">Passion</span>
              </h2>
              <p className="text-lg text-[#5A5A5A] mb-6 leading-relaxed">
                Each Chesscuit is a masterpiece of culinary art, combining the finest ingredients
                to create a symphony of flavors that dance on your palate.
              </p>
              <p className="text-lg text-[#5A5A5A] mb-8 leading-relaxed">
                From our artisan kitchen to your table, we ensure every piece is made with
                meticulous attention to detail and the highest quality standards.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
                  <div className="text-3xl font-bold text-[#A8B99C] mb-2">100%</div>
                  <div className="text-sm text-[#5A5A5A]">Natural</div>
                </div>
                <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
                  <div className="text-3xl font-bold text-[#A8B99C] mb-2">Fresh</div>
                  <div className="text-sm text-[#5A5A5A]">Daily</div>
                </div>
                <div className="text-center" data-aos="zoom-in" data-aos-delay="500">
                  <div className="text-3xl font-bold text-[#A8B99C] mb-2">Premium</div>
                  <div className="text-sm text-[#5A5A5A]">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-4">
              Why Choose <span className="text-[#A8B99C]">Chesscuit</span>
            </h2>
            <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
              Discover what makes our products truly special
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 overflow-hidden bg-[#F5F1E8]">
                <img src="/icon-ingredients.png" alt="Premium Ingredients" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Premium Ingredients</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                We source only the finest ingredients to ensure every bite is a luxurious experience.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 overflow-hidden bg-[#F5F1E8]">
                <img src="/icon-handcrafted.png" alt="Handcrafted Love" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Handcrafted Love</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Every Chesscuit is carefully handmade by our skilled artisans with dedication and care.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 overflow-hidden bg-[#F5F1E8]">
                <img src="/icon-balance.png" alt="Perfect Balance" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Perfect Balance</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                A harmonious blend of textures and flavors that creates an unforgettable taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                    <h4 className="font-semibold text-[#3A3A3A] mb-1">Biscuit Layer</h4>
                    <p className="text-[#5A5A5A]">Lapisan biscuit premium yang renyah dengan hint vanilla</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#E8C5C0] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#3A3A3A] mb-1">Cream Cheese</h4>
                    <p className="text-[#5A5A5A]">Krim keju lembut dengan sentuhan ubi ungu natural</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#A8B99C] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#3A3A3A] mb-1">Premium Toppings</h4>
                    <p className="text-[#5A5A5A]">Cranberry kering dan white chocolate drizzle</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <img
                  src="/chesscuit-closeup.png"
                  alt="Chesscuit Detail"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#A8B99C]">8pcs</div>
                    <div className="text-sm text-[#5A5A5A]">Per Box</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#A8B99C]">Fresh</div>
                    <div className="text-sm text-[#5A5A5A]">5 Days</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#A8B99C]">Cool</div>
                    <div className="text-sm text-[#5A5A5A]">Storage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Offers Section */}
      <section id="offers" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-4">
              Choose Your <span className="text-[#E8C5C0]">Perfect</span> Package
            </h2>
            <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
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
                <h3 className="text-2xl font-bold text-[#3A3A3A] mb-2">Starter Box</h3>
                <p className="text-[#5A5A5A] mb-4">Perfect untuk mencoba</p>
                <div className="text-4xl font-bold text-[#A8B99C] mb-2">Rp 85K</div>
                <div className="text-sm text-[#7A7A7A]">1 Box (8pcs)</div>
              </div>
              <div className="border-t border-[#F5F1E8] pt-6 space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#A8B99C] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">8 pieces premium Chesscuit</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#A8B99C] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">Premium gift box</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#A8B99C] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">Greeting card included</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 border-2 border-[#A8B99C] text-[#A8B99C] rounded-full hover:bg-[#A8B99C] hover:text-white transition-all duration-300 font-semibold">
                Order Now
              </button>
            </div>

            {/* Popular Package */}
            <div
              className="bg-[#A8B99C] rounded-3xl p-8 shadow-xl transform scale-105 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#E8C5C0] text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Family Box</h3>
                <p className="text-white/90 mb-4">Best value untuk keluarga</p>
                <div className="text-4xl font-bold text-white mb-2">Rp 240K</div>
                <div className="text-sm text-white/80">3 Boxes (24pcs)</div>
              </div>
              <div className="border-t border-white/20 pt-6 space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-white">24 pieces premium Chesscuit</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-white">3 premium gift boxes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-white">Free shipping Jakarta</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-white">Save Rp 15K</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-white text-[#A8B99C] rounded-full hover:bg-[#F5F1E8] transition-all duration-300 font-semibold shadow-lg">
                Order Now
              </button>
            </div>

            {/* Premium Package */}
            <div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#3A3A3A] mb-2">Party Box</h3>
                <p className="text-[#5A5A5A] mb-4">Untuk acara spesial</p>
                <div className="text-4xl font-bold text-[#E8C5C0] mb-2">Rp 400K</div>
                <div className="text-sm text-[#7A7A7A]">5 Boxes (40pcs)</div>
              </div>
              <div className="border-t border-[#F5F1E8] pt-6 space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#E8C5C0] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">40 pieces premium Chesscuit</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#E8C5C0] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">5 premium gift boxes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#E8C5C0] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">Free Jabodetabek delivery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#E8C5C0] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">Custom greeting cards</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#E8C5C0] rounded-sm mr-3 flex-shrink-0"></div>
                  <span className="text-[#5A5A5A]">Save Rp 25K</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 border-2 border-[#E8C5C0] text-[#E8C5C0] rounded-full hover:bg-[#E8C5C0] hover:text-white transition-all duration-300 font-semibold">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 lg:px-8 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-4">
              Our <span className="text-[#E8C5C0]">Creations</span>
            </h2>
            <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
              Take a glimpse at our beautifully crafted desserts
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-4">
              Kata <span className="text-[#A8B99C]">Mereka</span>
            </h2>
            <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
              Dengarkan pengalaman pelanggan kami yang puas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg">
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

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#A8B99C]" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience Chesscuit?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Order now and treat yourself to the finest artisan desserts.
            Perfect for any occasion or as a special treat for yourself.
          </p>
          <button className="px-10 py-4 bg-white text-[#A8B99C] rounded-full font-semibold hover:bg-[#F5F1E8] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
            Place Your Order
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-[#3A3A3A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">CHESSCUIT</div>
              <p className="text-white/70">
                Artisan desserts crafted with passion and premium ingredients.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
                <li><a href="#gallery" className="text-white/70 hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>Email: hello@chesscuit.com</li>
                <li>Phone: +62 123 4567 890</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"></div>
              </div>
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
