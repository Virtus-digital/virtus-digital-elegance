import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'en' | 'it' | 'ro';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Navbar
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetler',
    'nav.portfolio': 'Portföy',
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    
    // Hero
    'hero.badge': '2020\'den Beri Dijital Mükemmellik',
    'hero.subtitle': 'Virtus Digital',
    'hero.title1': 'Dijital Deneyimler',
    'hero.title2': 'Bağlayan',
    'hero.title.index1': 'Bağ Kuran',
    'hero.title.index2': 'Dijital Deneyimler Tasarlıyoruz.',
    'hero.description1': 'Virtus Digital, markaların strateji, tasarım ve veri odaklı yaratıcılıkla büyümesine yardımcı olur.',
    'hero.description2': 'Vizyonunuzu dijital gerçeğe dönüştürün.',
    'hero.description.index': 'Vizyonunuzu stratejik tasarım, son teknoloji geliştirme ve ölçülebilir sonuçlar sunan veri odaklı pazarlama ile dijital gerçeğe dönüştürün.',
    'hero.cta1': 'Çalışmalarımızı Görün',
    'hero.cta2': 'Hadi Konuşalım',
    'hero.cta.explore': 'Hizmetlerimizi Keşfedin',
    'hero.cta.start': 'Projenize Başlayın',
    
    // Banner Slider
    'banner.slide1.title': 'Marka Özü',
    'banner.slide1.subtitle': 'Build with Virtue. Perform with Data.',
    'banner.slide1.description': 'Stratejiden koda, reklamlardan analitiğe kadar — Virtus Digital performans odaklı uçtan uca dijital ekosistemler tasarlar.',
    'banner.slide2.title': 'Dijital Pazarlama Uzmanlığı',
    'banner.slide2.subtitle': '15+ Yıllık Deneyimle Veriye Dayalı Dijital Pazarlama.',
    'banner.slide2.description': 'Sertifikalı bir Google Partner olarak, kanıtlanmış stratejiler ve hassas izleme ile markaları Google, Meta ve YouTube\'da ölçeklendiriyoruz.',
    'banner.slide3.title': 'IT & Özel Geliştirme',
    'banner.slide3.subtitle': 'İşinizi Güçlendiren Kod.',
    'banner.slide3.description': 'Özel CRM\'lerden çok dilli web sitelerine kadar — iş mantığınıza uygun, güvenilir ve ölçeklenebilir sistemler tasarlıyoruz.',
    'banner.slide4.title': 'Harekete Geçme Çağrısı',
    'banner.slide4.subtitle': 'Büyüme Yolculuğunuza Başlamaya Hazır mısınız?',
    'banner.slide4.description': 'Vizyonunuzu yüksek performansa dönüştürelim.',
    'banner.cta.explore': 'Hizmetlerimizi Keşfedin',
    'banner.cta.start': 'Hemen Başlayalım',

    // Homepage (About Us content)
    'home.headline': 'Güvenilir Dijital Büyüme Ortağınız – Koddan Başarıya',
    'home.p1': 'Virtus Digital, web geliştirme, özel yazılım, reklamcılık ve analitik alanlarında uçtan uca dijital çözümler sunan tam kapsamlı bir teknoloji ve pazarlama şirketidir. Resmî bir Google Partner ajansı olarak, 15 yılı aşkın deneyimimiz mühendislik titizliğini veriye dayalı pazarlamayla birleştirerek markaların daha akıllı ve güçlü büyümesini sağlar.',
    'home.p2': '',

    // About (About Us page dedicated content)
    'aboutus.who': 'Virtus Digital; yazılım, web geliştirme ve performans pazarlaması alanlarında uçtan uca çözümler sunan teknoloji odaklı bir ajanstır. 2010 yılında kurulmuş olup, teknik uzmanlık ile yaratıcı zekâyı bir araya getirerek ölçülebilir dijital başarılar üretmektedir.',
    'aboutus.evolution.title': 'Gelişimimiz',
    'aboutus.evolution.2010': '2010 – Dijital pazarlama ve yazılım hizmetleri sunmaya başladık.',
    'aboutus.evolution.2022': '2022 – Digitalize Cyprus markasını hayata geçirerek Google Partner olduk.',
    'aboutus.evolution.2024': '2024 – Virtus Digital markasıyla Avrupa ve Asya\'da hizmet ağımızı genişlettik.',
    'aboutus.expertise.title': 'Uzmanlık Alanlarımız',
    'aboutus.expertise.1': 'Özel kodlu web siteleri ve CRM sistemleri',
    'aboutus.expertise.2': 'Google, Meta, YouTube ve LinkedIn reklamları',
    'aboutus.expertise.3': 'Analitik, SEO ve takip sistemleri',
    'aboutus.expertise.4': 'Sosyal medya ve yaratıcı stratejiler',
    // About Us Additional Content
    'aboutus.who.desc': 'Virtus Digital; yazılım, web geliştirme ve performans pazarlaması alanlarında uçtan uca çözümler sunan teknoloji odaklı bir ajanstır. 2010 yılında kurulmuş olup, teknik uzmanlık ile yaratıcı zekâyı bir araya getirerek ölçülebilir dijital başarılar üretmektedir.',
    'aboutus.principle': 'İlkemiz',
    'aboutus.principle.desc': 'Her projede dürüstlük, hassasiyet ve ölçülebilir başarı ilkelerini benimsiyoruz.',
    'aboutus.mission': 'Misyonumuz',
    'aboutus.mission.desc': 'Teknolojiyle işletmeleri güçlendirmek; operasyonlarını sadeleştirip görünürlüklerini artırarak sürdürülebilir büyümeyi desteklemek.',
    'aboutus.vision': 'Vizyonumuz',
    'aboutus.vision.desc': 'Kalite, yenilik ve ölçülebilir başarıyla tanınan güvenilir bir global dijital iş ortağı olmak.',
    
    // Index Page
    'index.services.title': 'Teknolojinin Performansla Buluştuğu Yer.',
    'index.services.subtitle1': 'Koddan reklama kadar — performans, ölçeklenebilirlik ve ilham için tasarlanmış dijital ekosistemler geliştiriyoruz.',
    'index.services.more': 'Ve bu sadece başlangıç. Dijital varlığınızın her yönünü kapsamak için tasarlanmış 5 ana hizmet sunuyoruz.',
    'index.services.explore': 'Tüm Hizmetleri Keşfedin',
    'index.services.learn': 'Daha Fazla Bilgi',
    
    // Index Featured Services
    'index.service.digital.tagline': 'Performans odaklı kampanyalar',
    'index.service.web.tagline': 'Hedeflerinize uygun web projeleri',
    'index.service.software.tagline': 'Süreçlerinizi dijitalleştirin',
    'index.service.seo.tagline': 'Organik görünürlüğünüzü artırın',
    
    'index.portfolio.title': 'Kanıtlanmış Sonuçlar. Gerçek Etki.',
    'index.portfolio.subtitle1': 'Yüksek performanslı reklam kampanyalarından özel yazılımlara kadar, fikirleri ölçülebilir büyümeye dönüştürüyoruz.',
    'index.portfolio.more': 'Bunlar 700+ başarılı projemizden sadece 3 tanesi. Her biri benzersiz bir meydan okuma, yaratıcı bir çözüm ve memnun bir müşteriyi temsil ediyor.',
    'index.portfolio.view': 'Tüm Portföyü Görün',
    'index.portfolio.3d.title': '3D Proje Galerisi',
    'index.portfolio.click': 'Ziyaret etmek için tıklayın',
    
    'index.why.title': 'Neden Bizi Seçmelisiniz',
    'index.why.subtitle': 'Sadece başka bir dijital ajans değiliz. Hikaye anlatıcıları, problem çözücüler ve büyüme hackerleri bir aradayız.',
    
    // Core Values
    'index.why.values.title': 'Temel Değerler ve Yaklaşım',
    'index.why.values.integrity.title': 'Önce Dürüstlük',
    'index.why.values.integrity.desc': 'Satılacak olanı değil, gerekli olanı söyleriz. Müşterilerimizin gerçek ihtiyaçlarını anlayarak en uygun çözümleri sunuyoruz.',
    'index.why.values.customer.title': 'Müşteri Odaklı Yaklaşım',
    'index.why.values.customer.desc': 'Her proje, hedeflerinizi anlayarak başlar. Sizin başarınız bizim başarımızdır ve bu yaklaşım her kararımızda öncelikli.',
    'index.why.values.passion.title': 'Her Detayda Tutku',
    'index.why.values.passion.desc': 'Yaptığımız işi seviyoruz, bu da sonuçlara yansıyor. Her projede tutkumuzu ve kalite standartlarımızı görebilirsiniz.',
    
    // Expertise
    'index.why.expertise.title': 'Uzmanlık ve Yetkinlik',
    'index.why.expertise.google.title': 'Sertifikalı Google Partner',
    'index.why.expertise.google.desc': 'Performans pazarlamasında kanıtlanmış uzmanlık. Google\'ın resmi partneri olarak en güncel stratejileri uyguluyoruz.',
    'index.why.expertise.team.title': 'Full-Stack Geliştirme Ekibi',
    'index.why.expertise.team.desc': 'Front-end\'ten back-end\'e birden fazla teknolojiye hakim. Modern teknolojilerle güçlü ve ölçeklenebilir çözümler üretiyoruz.',
    'index.why.expertise.experience.title': 'Sektörler Arası Deneyim',
    'index.why.expertise.experience.desc': 'Sağlık, inşaat, turizm gibi alanlara özel dijital çözümler üretiyoruz. Her sektörün ihtiyaçlarını anlayarak özelleştirilmiş stratejiler geliştiriyoruz.',
    
    // How We Work
    'index.why.work.title': 'Nasıl Çalışıyoruz',
    'index.why.work.endtoend.title': 'Uçtan Uca Teslim',
    'index.why.work.endtoend.desc': 'Fikirden yayına kadar tüm süreçleri biz yönetiyoruz. Tasarımdan geliştirmeye, pazarlamadan optimizasyona kadar her şeyi kapsıyoruz.',
    'index.why.work.agile.title': 'Çevik ve Veriye Dayalı',
    'index.why.work.agile.desc': 'Ölçülebilir sonuçlar için sürekli test ve iyileştirme yapıyoruz. Her kararımız verilerle desteklenir ve sürekli optimize edilir.',
    'index.why.work.longterm.title': 'Uzun Vadeli Yaklaşım',
    'index.why.work.longterm.desc': 'Teslimden sonra da destek ve optimizasyon sunuyoruz. Sadece proje teslim etmiyoruz, sürekli büyümenizi destekliyoruz.',
    
    // What Defines Us
    'index.why.defines.title': 'Bizi Tanımlayanlar',
    'index.why.defines.honest.title': 'Dürüst İş Birliği',
    'index.why.defines.honest.desc': 'Gerçekten fayda sağlayacak çözümleri öneriyoruz. Sadece satış odaklı değil, değer odaklı yaklaşım sergiliyoruz.',
    'index.why.defines.trusted.title': 'Güvene Dayalı Ortaklık',
    'index.why.defines.trusted.desc': 'Başarımız müşterilerimizin başarısıyla büyür. Uzun vadeli ilişkiler kurarak birlikte büyüyoruz.',
    'index.why.defines.creation.title': 'Üretmenin Keyfi',
    'index.why.defines.creation.desc': 'Müşterilerimizin memnuniyetini görmekten mutluluk duyuyoruz. Her proje bizim için bir tutku ve yaratıcılık fırsatı.',
    
    // CTA
    'index.why.cta.title': 'Ekibimiz, sürecimiz ve bizi harekete geçiren şeyler hakkında daha fazla bilgi edinmek ister misiniz?',
    'index.why.cta.subtitle': 'Hikayemizi sizinle paylaşmaktan mutluluk duyarız.',
    'index.why.cta.button': 'Hakkımızda Daha Fazla Bilgi',
    
    'index.testimonials.title': 'Kanıtlanmış Sonuçlar. Gerçek Etki.',
    'index.testimonials.subtitle': 'Yüksek performanslı reklam kampanyalarından özel yazılımlara kadar, fikirleri ölçülebilir büyümeye dönüştürüyoruz.',
    'index.testimonials.more': 'Bunlar başarı hikayelerimizden sadece birkaçı. Yüzlerce işletmenin benzer—ve hatta daha iyi—sonuçlar elde etmesine yardımcı olduk. Yeni başlayanlardan yerleşik işletmelere kadar müşterilerimiz sürekli olarak dijital performanslarında dramatik iyileşmeler bildiriyor.',
    'index.testimonials.cta': 'Daha Fazla Başarı Hikayesi',
    
    'index.cta.title': 'Dijital Varlığınızı Dönüştürmeye Hazır mısınız?',
    'index.cta.subtitle': 'İş hedeflerinize ulaşmanıza ve gerçek sonuçlar elde etmenize nasıl yardımcı olabileceğimizi konuşalım. Dijital dönüşümlerine güvenen 700+ başarılı markaya katılın.',
    'index.cta.start': 'Projenize Başlayın',
    'index.cta.view': 'Çalışmalarımızı Görün',
    
    // New Homepage Section
    'homepage.new.title': 'Build with Virtue, Perform with Data',
    'homepage.new.subtitle': 'Gerçek sonuçlar üreten teknoloji ve pazarlama çözümleri geliştiren mühendisler, stratejistler ve yaratıcı profesyonellerden oluşan bir ekibiz.',
    'homepage.new.desc1': 'Virtus Digital, web geliştirme, özel yazılım, reklamcılık ve analitik alanlarında uçtan uca dijital çözümler sunan tam kapsamlı bir teknoloji ve pazarlama şirketidir. Resmî bir Google Partner ajansı olarak, 15 yılı aşkın deneyimimiz mühendislik titizliğini veriye dayalı pazarlamayla birleştirerek markaların daha akıllı ve güçlü büyümesini sağlar.',
    'homepage.new.desc2': '',
    'homepage.new.button': 'Daha Fazla',
    
    // Trusted Partner Section
    'homepage.trusted.title': 'Güvenilir Dijital Büyüme Ortağınız – Koddan Başarıya',
    'homepage.trusted.desc1': 'Virtus Digital, web geliştirme, özel yazılım, reklamcılık ve analitik alanlarında uçtan uca dijital çözümler sunan tam kapsamlı bir teknoloji ve pazarlama şirketidir. Resmî bir Google Partner ajansı olarak, 15 yılı aşkın deneyimimiz mühendislik titizliğini veriye dayalı pazarlamayla birleştirerek markaların daha akıllı ve güçlü büyümesini sağlar.',
    'homepage.trusted.desc2': '2010 yılında kurulan, 2022 yılında Digitalize Cyprus markasıyla genişleyen ve 2024 yılında Virtus Digital çatısı altında yeniden yapılanan şirketimiz, bugün Avrupa ve Asya genelinde hizmet vermektedir. Geliştirici, stratejist ve yaratıcı uzmanlardan oluşan ekibimiz, ölçülebilir ve ölçeklenebilir çözümler üreterek dijital yatırımları gerçek büyümeye dönüştürür.',
    'homepage.trusted.button': 'Daha Fazla',
    
    // Portfolio Page
    'portfolio.page.title': 'Portföyümüz',
    'portfolio.page.subtitle': 'Dünya çapında ',
    'portfolio.page.subtitle.bold': '700+ markaya',
    'portfolio.page.subtitle2': ' yüksek performanslı web siteleri ve dijital deneyimlerle cirolarını artırmalarında yardımcı oluyoruz.',
    'portfolio.stats.projects': 'Teslim Edilen Proje',
    'portfolio.stats.satisfaction': 'Müşteri Memnuniyeti',
    'portfolio.stats.roi': 'Ortalama ROI Artışı',
    'portfolio.dialog.client': 'Müşteri',
    'portfolio.dialog.duration': 'Süre',
    'portfolio.dialog.result': 'Sonuç',
    'portfolio.dialog.description': 'Proje Açıklaması',
    'portfolio.dialog.goal': 'Proje Hedefi',
    'portfolio.dialog.technologies': 'Kullanılan Teknolojiler',
    'portfolio.dialog.visit': 'Web Sitesini Ziyaret Et',
    'portfolio.cta.title': 'Bir Sonraki Başarı Hikayemiz Olmak İster misiniz?',
    'portfolio.cta.subtitle': 'Birlikte harika bir şey yaratalım. Projenizi görüşmek için iletişime geçin.',
    'portfolio.cta.button': 'Projenize Başlayın',
    
    // About Page
    'about.page.title': 'Biz Kimiz',
    'about.page.subtitle': 'Bir dijital ajansdan daha fazlasıyız — büyüme ortağınızız, vizyonunuzu dijital gerçeğe dönüştürmeye kendini adamıştır.',
    'about.page.desc1': 'Virtus Digital\'de dijital dönüşümün gücüne inanıyoruz. Yaratıcı stratejistler, tasarımcılar ve geliştiricilerden oluşan ekibimiz sadece güzel görünmeyen, aynı zamanda ölçülebilir sonuçlar veren deneyimler yaratmak için birlikte çalışıyor.',
    'about.page.desc2': 'Yaratıcılık, hassasiyet ve yenilik prensipleri üzerine kurulan şirketimiz, yüzlerce markanın dijital varlığını kurmasına ve büyüme hedeflerine ulaşmasına yardımcı olduk. Yeni başlayanlardan yerleşik işletmelere kadar her projeye aynı düzeyde özveri ve uzmanlığı getiriyoruz.',
    'about.stats.projects': 'Tamamlanan Proje',
    'about.stats.clients': 'Mutlu Müşteri',
    'about.stats.experience': 'Yıl Deneyim',
    'about.stats.satisfaction': 'Memnuniyet Oranı',
    'about.values.title': 'Değerlerimiz',
    'about.values.subtitle': 'Yaptığımız her şeye rehberlik eden prensipler',
    'about.value.innovation': 'İnovasyon',
    'about.value.innovation.desc': 'Trendlerin önünde kalıyor ve son teknoloji çözümler sunmak için yeni teknolojileri benims iyoruz.',
    'about.value.excellence': 'Mükemmellik',
    'about.value.excellence.desc': 'Kalite pazarlık konusu değildir. Üstlendiğimiz her projede mükemmellik için çabalıyoruz.',
    'about.value.collaboration': 'İşbirliği',
    'about.value.collaboration.desc': 'Sizin başarınız bizim başarımızdır. Sadece tedarikçi değil, ortak olarak çalışıyoruz.',
    'about.value.passion': 'Tutku',
    'about.value.passion.desc': 'Yaptığımız işi seviyoruz ve bu her projeye getirdiğimiz enerji ve yaratıcılıkta görülüyor.',
    'about.process.title': 'Sürecimiz',
    'about.process.subtitle': 'Her seferinde sonuç veren kanıtlanmış bir metodoloji',
    'about.process.1.title': 'Keşif & Araştırma',
    'about.process.1.desc': 'Sizi benzersiz kılan ve müşterilerinizin neye ihtiyacı olduğunu anlamak için işletmenize, hedef kitlenize ve hedeflerinize derinlemesine dalıyoruz.',
    'about.process.2.title': 'Strateji & Planlama',
    'about.process.2.desc': 'İçgörülere dayanarak, başarıyı ölçmek için net hedefler, zaman çizelgeleri ve KPI\'larla özel bir strateji oluşturuyoruz.',
    'about.process.3.title': 'Tasarım & Geliştirme',
    'about.process.3.desc': 'Yaratıcı ekibimiz stratejiyi beklentileri aşan çarpıcı tasarımlar ve sağlam geliştirmeyle hayata geçiriyor.',
    'about.process.4.title': 'Lansman & Optimizasyon',
    'about.process.4.desc': 'Projenizi hassasiyetle başlatıyor, ardından maksimum performans ve ROI için sürekli izliyor ve optimize ediyoruz.',
    'about.team.title': 'Ekibimizle Tanışın',
    'about.team.subtitle': 'Başarınıza adanmış yetenekli profesyoneller',
    'about.testimonials.page.title': 'Müşterilerimiz Ne Diyor',
    'about.testimonials.page.subtitle': 'Sadece bizim sözümüze güvenmeyin — başarılı olmalarına yardımcı ettiğimiz kişilerden dinleyin',
    'about.cta.page.title': 'Bizimle Çalışmaya Hazır mısınız?',
    'about.cta.page.subtitle': 'Dijital hedeflerinize nasıl ulaşmanıza yardımcı olabileceğimizi konuşalım.',
    'about.cta.page.button': 'İletişime Geçin',
    
    // Blog Page
    'blog.page.title': 'Blogumuz',
    'blog.page.subtitle': 'Dijital pazarlamada içgörüler, stratejiler ve en son trendler. Bilgili kalın ve önde kalın.',
    'blog.featured': 'Öne Çıkan',
    'blog.author': 'Yazar',
    'blog.read-time': 'okuma süresi',
    'blog.read-article': 'Makaleyi Oku',
    'blog.newsletter.title': 'Bültenimize Abone Olun',
    'blog.newsletter.subtitle': 'En son içgörüleri, ipuçlarını ve stratejileri doğrudan gelen kutunuza alın.',
    'blog.newsletter.placeholder': 'E-posta adresinizi girin',
    'blog.newsletter.button': 'Abone Ol',
    
    // Contact Page
    'contact.page.title': 'Birlikte Çalışalım',
    'contact.page.subtitle': 'Dijital varlığınızı dönüştürmeye hazır mısınız? Bugün bizimle iletişime geçin ve harika bir şey yaratalım.',
    'contact.phone': 'Telefon',
    'contact.email.label': 'E-posta',
    'contact.office': 'Ofis',
    'contact.hours': 'Çalışma Saatleri',
    'contact.hours.days': 'Pazartesi - Cuma',
    'contact.hours.time': '09:00 - 18:00',
    'contact.form.title': 'Bize Mesaj Gönderin',
    'contact.form.subtitle': 'Aşağıdaki formu doldurun, 24 saat içinde size geri döneceğiz.',
    'contact.form.name': 'Ad *',
    'contact.form.name.placeholder': 'Adınız',
    'contact.form.email.label': 'E-posta *',
    'contact.form.email.placeholder': 'email@ornek.com',
    'contact.form.phone': 'Telefon',
    'contact.form.phone.placeholder': '+90 (555) 123-4567',
    'contact.form.subject': 'Konu *',
    'contact.form.subject.placeholder': 'Proje Sorgusu',
    'contact.form.message.label': 'Mesaj *',
    'contact.form.message.placeholder': 'Projeniz hakkında bize bilgi verin...',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Markanızı yükseltmek ve ölçülebilir sonuçlar elde etmek için kapsamlı dijital çözümler.',
    'services.what-we-do': 'En İyi Yaptığımız İşler',
    'services.skills-title': 'Yetenekler & Hizmetler',
    'services.key-services': 'Temel Hizmetler:',
    'services.what-we-offer': 'Neler Sunuyoruz:',
    'services.get-started': 'Başlayın',
    
    // Skills
    'skills.frontend': 'Frontend',
    'skills.frontend.desc': 'React, Next.js, TypeScript, TailwindCSS, Performans & Erişilebilirlik.',
    'skills.backend': 'Backend',
    'skills.backend.desc': 'Node.js, Python (FastAPI), PHP (Laravel), REST/GraphQL, Mikroservis.',
    'skills.data': 'Veri & Bulut',
    'skills.data.desc': 'PostgreSQL, Redis, Docker, AWS, CI/CD, Gözlemlenebilirlik.',
    'skills.quality': 'Kalite',
    'skills.quality.desc': 'Test Otomasyonu, Kod İncelemesi, Güvenlik ve Performans Analizi.',
    
    // Service Details
    'service.digital-marketing.title': 'Dijital Pazarlama',
    'service.digital-marketing.desc': 'Veriye Dayalı Reklamlarla Akıllı Büyüyün',
    'service.digital-marketing.details': 'Sertifikalı Google Partner olarak, 15+ yıllık deneyimle Arama, Görüntülü Reklam, YouTube, Meta ve daha fazlasında performans odaklı reklam yönetimi sunuyoruz.',
    'service.digital-marketing.features': 'Google Ads (Arama, Görüntülü, YouTube, Alışveriş) • Meta, TikTok, LinkedIn Kampanyaları • Gelişmiş hedefleme, yeniden pazarlama ve offline dönüşüm izleme • Haftalık optimizasyon ve şeffaf raporlama',
    
    'service.web-dev.title': 'Web Tasarım & Geliştirme',
    'service.web-dev.desc': 'Mühendislik Harikası Web Siteleri',
    'service.web-dev.details': 'WordPress\'ten tamamen özel kodlu sistemlere kadar — mobil uyumlu, SEO dostu, çok dilli ve dönüşüm odaklı siteler geliştiriyoruz.',
    'service.web-dev.features': 'WordPress, WooCommerce, Shopify veya özel yazılım altyapıları • Mobil öncelikli tasarım ve yüksek hız • SEO uyumlu altyapı ve entegre analitik sistemleri • Kullanımı kolay yönetim panelleri',
    
    'service.custom-software.title': 'Özel Yazılım Geliştirme',
    'service.custom-software.desc': 'İş Akışınıza Uygun Kodlar',
    'service.custom-software.details': 'CRM, ERP, rezervasyon veya stok yönetimi sistemleri dahil olmak üzere işinize özel çözümler geliştiriyoruz.',
    'service.custom-software.features': 'CRM ve ERP platformları • Rezervasyon, stok ve belge takip sistemleri • API ve üçüncü parti entegrasyonlar (ödeme, SMS, WhatsApp, CRM) • Güvenli ve ölçeklenebilir altyapı, log sistemi',
    
    'service.seo.title': 'SEO Optimizasyonu',
    'service.seo.desc': 'Aranmadan Bulun',
    'service.seo.details': 'Teknik mükemmeliyet, akıllı içerik ve otorite oluşturmayı birleştiren uçtan uca SEO stratejileri sunuyoruz.',
    'service.seo.features': 'Teknik ve Sayfa İçi SEO denetimleri • Anahtar kelime ve rakip analizi • İçerik optimizasyonu, blog planlaması • Google Haritalar görünürlüğü için yerel SEO',
    
    'service.social-media.title': 'Sosyal Medya Yönetimi',
    'service.social-media.desc': 'Bağlantı Kuran Yaratıcılık',
    'service.social-media.details': 'Görseller, hikaye anlatımı ve performans odaklı stratejilerle sosyal medya varlığınızı büyütüyoruz.',
    'service.social-media.features': 'Aylık içerik planlama ve üretim • Reels, hikayeler, YouTube Shorts • Topluluk yönetimi ve etkileşim • Analitik takibi ve sürekli optimizasyon',
    
    'service.hosting-email.title': 'Hosting ve Email Servisleri',
    'service.hosting-email.desc': 'Güvenilir Dijital Altyapı',
    'service.hosting-email.details': 'Hızlı, güvenli ve ölçeklenebilir hosting çözümleri ile profesyonel email servisleri sunuyoruz.',
    'service.hosting-email.features': 'SSD hosting, SSL sertifikaları • Email hosting ve kurumsal email • 7/24 teknik destek • Yedekleme ve güvenlik hizmetleri',
    
    // CTA
    'cta.title': 'Dijital Varlığınızı Dönüştürmeye Hazır mısınız?',
    'cta.subtitle': 'Hizmetlerimizin işletme hedeflerinize nasıl ulaşmanıza yardımcı olabileceğini konuşalım.',
    'cta.button': 'Bugün Bize Ulaşın',
    
    // About
    'about.title': 'Biz Kimiz',
    'about.subtitle': 'Bir dijital ajansdan daha fazlasıyız — büyüme ortağınızız.',
    'about.desc1': 'Virtus Digital\'de dijital dönüşümün gücüne inanıyoruz. Yaratıcı stratejistler, tasarımcılar ve geliştiricilerden oluşan ekibimiz sadece güzel görünmeyen, aynı zamanda ölçülebilir sonuçlar veren deneyimler yaratmak için birlikte çalışıyor.',
    'about.desc2': 'Yaratıcılık, hassasiyet ve yenilik prensipleri üzerine kurulan şirketimiz, düzinelerce markanın dijital varlığını kurmasına ve büyüme hedeflerine ulaşmasına yardımcı olduk.',
    'about.projects': 'Tamamlanan Proje',
    'about.clients': 'Mutlu Müşteri',
    'about.experience': 'Yıl Deneyim',
    'about.award': 'Ödüllü',
    'about.award.desc': 'Dijital inovasyonda mükemmellik için tanındı',
    'about.team': 'Uzman Ekip',
    'about.team.desc': 'Başarınıza adanmış yetenekli profesyoneller',
    'about.delivery': 'Hızlı Teslimat',
    'about.delivery.desc': 'Projenizi ileriye taşıyan çevik süreçler',
    
    // Portfolio
    'portfolio.title': 'Çalışmalarımız',
    'portfolio.subtitle': 'Dünya çapında ',
    'portfolio.subtitle.bold': '700+ markaya',
    'portfolio.subtitle2': ' yüksek performanslı web siteleri ve dijital deneyimlerle cirolarını artırmalarında yardımcı oluyoruz.',
    'portfolio.client': 'Müşteri',
    'portfolio.result': 'Sonuç',
    'portfolio.goal': 'Proje Hedefi',
    'portfolio.visit': 'Web Sitesini Ziyaret Et',
    
    // Portfolio Projects
    'project.erm.title': 'ERM Rent a Car',
    'project.erm.client': 'ERM',
    'project.erm.goal': 'Filo vitrini ve online rezervasyon ile araç kiralama web sitesi',
    'project.erm.result': 'Lansmanın ardından rezervasyon dönüşümlerinde +%42 artış',
    
    'project.ravena.title': 'Ravenalab',
    'project.ravena.client': 'Seyahat Acentesi',
    'project.ravena.goal': 'Seyahat paketleri, destinasyon sayfaları ve lead yakalama',
    'project.ravena.result': 'Nitelikli sorgulamalarda 3 kat artış',
    
    'project.fertina.title': 'Fertina IVF',
    'project.fertina.client': 'Tüp Bebek Kliniği',
    'project.fertina.goal': 'Hizmetler, başarı hikayeleri ve randevu talebi ile klinik web sitesi',
    'project.fertina.result': 'Aydan aya randevu taleplerinde +%65 artış',
    
    'project.virtus.title': 'Virtus Digital',
    'project.virtus.client': 'Virtus Digital',
    'project.virtus.goal': 'Dijital ajans için profesyonel kurumsal web sitesi',
    'project.virtus.result': 'Marka bilinirliği artışı ve müşteri portföyü genişlemesi',
    
    'project.creative.title': 'Creative Solutions',
    'project.creative.client': 'Creative Solutions',
    'project.creative.goal': 'Yaratıcı çözümler için modern portföy sitesi',
    'project.creative.result': 'Yaratıcı projelerin etkili sunumu ve müşteri çekimi',
    
    'project.tech.title': 'Tech Innovations',
    'project.tech.client': 'Tech Innovations',
    'project.tech.goal': 'Teknoloji şirketi için yenilikçi web platformu',
    'project.tech.result': 'Teknoloji liderliği vurgusu ve yatırımcı ilgisi',
    
    // Blog
    'blog.title': 'Son Görüşler',
    'blog.subtitle': 'Uzman ekibimizden düşünceler, trendler ve stratejiler.',
    'blog.read-more': 'Devamını Oku',
    
    'blog.post1.title': '2025\'te Dijital Pazarlamanın Geleceği',
    'blog.post1.date': '15 Mart 2025',
    'blog.post1.excerpt': 'Dijital pazarlama ortamını şekillendiren en son trendleri ve markaların nasıl önde kalabileceğini keşfedin.',
    'blog.post1.category': 'Pazarlama',
    
    'blog.post2.title': 'İşe Yarayan Bir Sosyal Medya Stratejisi Oluşturma',
    'blog.post2.date': '10 Mart 2025',
    'blog.post2.excerpt': 'İlgi çekici içerik oluşturmayı ve kitlenizle anlamlı bağlantılar kurmayı öğrenin.',
    'blog.post2.category': 'Sosyal Medya',
    
    'blog.post3.title': 'Marka Kimliği: Bir Logodan Daha Fazlası',
    'blog.post3.date': '5 Mart 2025',
    'blog.post3.excerpt': 'Kapsamlı marka kimliğinin neden görsel tasarımın ötesine geçerek kalıcı etki yarattığını keşfedin.',
    'blog.post3.category': 'Markalaşma',
    
    // Contact
    'contact.title': 'Birlikte Çalışalım',
    'contact.subtitle': 'Dijital varlığınızı dönüştürmeye hazır mısınız? Bugün bizimle iletişime geçin.',
    'contact.info': 'İletişim Bilgileri',
    'contact.follow': 'Bizi Takip Edin',
    'contact.name': 'Adınız',
    'contact.email': 'E-posta Adresiniz',
    'contact.message': 'Mesajınız',
    'contact.send': 'Mesaj Gönder',
    'contact.sending': 'Gönderiliyor...',
    'contact.success.title': 'Mesaj gönderildi!',
    'contact.success.desc': 'En kısa sürede size geri döneceğiz.',
    'contact.error.title': 'Doğrulama Hatası',
    
    // Footer
    'footer.tagline': 'Vizyonları yaratıcılık, hassasiyet ve yenilikle dijital gerçeğe dönüştürüyoruz.',
    'footer.quick-links': 'Hızlı Bağlantılar',
    'footer.services': 'Hizmetlerimiz',
    'footer.contact-us': 'Bize Ulaşın',
    'footer.rights': '© 2025 Virtus Digital. Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Hizmet Şartları',
    
    'footer.service1': 'Dijital Reklamcılık',
    'footer.service2': 'Sosyal Medya Yönetimi',
    'footer.service3': 'Marka Stratejisi',
    'footer.service4': 'Web Geliştirme',
    'footer.service5': 'SEO & İçerik',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.badge': 'Digital Excellence Since 2020',
    'hero.subtitle': 'Virtus Digital',
    'hero.title1': 'We Create Digital Experiences',
    'hero.title2': 'That Connect.',
    'hero.title.index1': 'We Create Digital',
    'hero.title.index2': 'Experiences That Connect',
    'hero.description1': 'Virtus Digital helps brands grow with strategy, design, and data-driven creativity.',
    'hero.description2': 'Transform your vision into digital reality.',
    'hero.description.index': 'Transform your vision into digital reality with strategic design, cutting-edge development, and data-driven marketing that delivers measurable results.',
    'hero.cta1': 'View Our Work',
    'hero.cta2': 'Let\'s Talk',
    'hero.cta.explore': 'Explore Our Services',
    'hero.cta.start': 'Start Your Project',
    
    // Banner Slider
    'banner.slide1.title': 'Brand Essence',
    'banner.slide1.subtitle': 'Build with Virtue. Perform with Data.',
    'banner.slide1.description': 'From strategy to code, ads to analytics — Virtus Digital crafts complete growth ecosystems built for performance.',
    'banner.slide2.title': 'Digital Marketing Expertise',
    'banner.slide2.subtitle': '15+ Years of Data-Driven Digital Marketing.',
    'banner.slide2.description': 'As a certified Google Partner, we blend proven strategy and precision tracking to scale brands across Google, Meta & YouTube.',
    'banner.slide3.title': 'IT & Custom Development',
    'banner.slide3.subtitle': 'Code that Powers Business.',
    'banner.slide3.description': 'From custom CRMs to multilingual websites, we engineer reliable, scalable systems tailored to your business logic.',
    'banner.slide4.title': 'Call to Action',
    'banner.slide4.subtitle': 'Ready to Build Your Growth Stack?',
    'banner.slide4.description': 'Let\'s turn your vision into performance.',
    'banner.cta.explore': 'Explore Our Services',
    'banner.cta.start': 'Let\'s Get Started',

    // Homepage (About Us content)
    'home.headline': 'Trusted Digital Growth Partner – From Code to Conversion',
    'home.p1': 'Virtus Digital is a full-service technology and marketing company delivering complete digital ecosystems — from custom-coded websites and CRMs to Google-grade advertising and analytics. As an official Google Partner agency, our 15-year track record combines engineering precision with data-driven marketing to help brands grow smarter and perform better.',
    'home.p2': '',

    // About (About Us page dedicated content)
    'aboutus.who': 'Virtus Digital is a technology-driven agency providing end-to-end solutions in software, web development, and performance marketing. Founded in 2010, we unite technical expertise and creative intelligence to deliver measurable digital success.',
    'aboutus.evolution.title': 'Our Evolution',
    'aboutus.evolution.2010': '2010 – Began offering professional digital marketing and software services.',
    'aboutus.evolution.2022': '2022 – Launched the Digitalize Cyprus brand and became an official Google Partner.',
    'aboutus.evolution.2024': '2024 – Established Virtus Digital, expanding operations across Europe and Asia.',
    'aboutus.expertise.title': 'Our Expertise',
    'aboutus.expertise.1': 'Custom-coded websites and CRMs',
    'aboutus.expertise.2': 'Google, Meta, YouTube & LinkedIn Ads',
    'aboutus.expertise.3': 'Analytics, tracking, and SEO',
    'aboutus.expertise.4': 'Social media and creative strategies',
    // About Us Additional Content
    'aboutus.who.desc': 'Virtus Digital is a technology-driven agency providing end-to-end solutions in software, web development, and performance marketing. Founded in 2010, we unite technical expertise and creative intelligence to deliver measurable digital success.',
    'aboutus.principle': 'Our Principle',
    'aboutus.principle.desc': 'We stand for integrity, precision, and measurable performance in everything we create.',
    'aboutus.mission': 'Our Mission',
    'aboutus.mission.desc': 'To empower businesses through technology — simplifying operations, amplifying visibility, and driving sustainable growth through innovation and data.',
    'aboutus.vision': 'Our Vision',
    'aboutus.vision.desc': 'To become a trusted, global digital partner known for quality, innovation, and measurable success.',
    
    // Index Page
    'index.services.title': 'Where Technology Meets Performance.',
    'index.services.subtitle1': 'From code to campaigns — our team delivers complete digital ecosystems designed to perform, scale, and inspire.',
    'index.services.more': 'And that\'s just the beginning. We offer 5 main services designed to cover every aspect of your digital presence.',
    'index.services.explore': 'Explore All Services',
    'index.services.learn': 'Learn More',
    
    // Index Featured Services
    'index.service.digital.tagline': 'Performance-focused campaigns',
    'index.service.web.tagline': 'Web projects tailored to your goals',
    'index.service.software.tagline': 'Digitize your processes',
    'index.service.seo.tagline': 'Increase your organic visibility',
    
    'index.portfolio.title': 'Proven Results. Real Impact.',
    'index.portfolio.subtitle1': 'From high-performance ad campaigns to custom-coded systems — we turn ideas into measurable growth.',
    'index.portfolio.more': 'These are just 3 of our 700+ successful projects. Each one represents a unique challenge, a creative solution, and a satisfied client.',
    'index.portfolio.view': 'See Our Complete Portfolio',
    'index.portfolio.3d.title': '3D Project Gallery',
    'index.portfolio.click': 'Click to visit',
    
    'index.why.title': 'Why Choose Us',
    'index.why.subtitle': 'We\'re not just another digital agency. We\'re storytellers, problem-solvers, and growth hackers rolled into one.',
    
    // Core Values
    'index.why.values.title': 'Core Values & Mindset',
    'index.why.values.integrity.title': 'Integrity First',
    'index.why.values.integrity.desc': 'We say what\'s needed, not what sells. We understand our clients\' real needs and provide the most suitable solutions.',
    'index.why.values.customer.title': 'Customer-Centric Approach',
    'index.why.values.customer.desc': 'Every project starts by understanding your goals. Your success is our success, and this approach is our priority in every decision.',
    'index.why.values.passion.title': 'Passion in Every Pixel',
    'index.why.values.passion.desc': 'We love what we build, and it shows. You can see our passion and quality standards in every project.',
    
    // Expertise
    'index.why.expertise.title': 'Expertise & Capability',
    'index.why.expertise.google.title': 'Certified Google Partner',
    'index.why.expertise.google.desc': 'Proven expertise in performance marketing. As Google\'s official partner, we apply the latest strategies.',
    'index.why.expertise.team.title': 'Full-Stack Development Team',
    'index.why.expertise.team.desc': 'Skilled in multiple technologies, from front-end to back-end. We create powerful and scalable solutions with modern technologies.',
    'index.why.expertise.experience.title': 'Cross-Industry Experience',
    'index.why.expertise.experience.desc': 'We create digital solutions tailored for healthcare, construction, tourism and more. We develop customized strategies by understanding each sector\'s needs.',
    
    // How We Work
    'index.why.work.title': 'How We Work',
    'index.why.work.endtoend.title': 'End-to-End Delivery',
    'index.why.work.endtoend.desc': 'We manage all processes from idea to launch. We cover everything from design to development, marketing to optimization.',
    'index.why.work.agile.title': 'Agile & Data-Driven',
    'index.why.work.agile.desc': 'We continuously test and improve for measurable results. Every decision is data-backed and continuously optimized.',
    'index.why.work.longterm.title': 'Long-Term Focus',
    'index.why.work.longterm.desc': 'We provide support and optimization even after delivery. We don\'t just deliver projects, we support your continuous growth.',
    
    // What Defines Us
    'index.why.defines.title': 'What Defines Us',
    'index.why.defines.honest.title': 'Honest Collaboration',
    'index.why.defines.honest.desc': 'We only recommend what truly benefits our clients. We don\'t just focus on sales, but on value-driven approach.',
    'index.why.defines.trusted.title': 'Trusted Partnerships',
    'index.why.defines.trusted.desc': 'Our success grows with yours. We grow together by building long-term relationships.',
    'index.why.defines.creation.title': 'Enjoyment in Creation',
    'index.why.defines.creation.desc': 'We take pride in making our clients happy. Every project is a passion and creativity opportunity for us.',
    
    // CTA
    'index.why.cta.title': 'Want to know more about our team, our process, and what makes us tick?',
    'index.why.cta.subtitle': 'We\'d love to share our story with you.',
    'index.why.cta.button': 'Learn More About Us',
    
    'index.testimonials.title': 'Proven Results. Real Impact.',
    'index.testimonials.subtitle': 'From high-performance ad campaigns to custom-coded systems — we turn ideas into measurable growth.',
    'index.testimonials.more': 'These are just a few of our success stories. We\'ve helped hundreds of businesses achieve similar—and even better—results. From startups to established enterprises, our clients consistently report dramatic improvements in their digital performance.',
    'index.testimonials.cta': 'Read More Success Stories',
    
    'index.cta.title': 'Ready to Transform Your Digital Presence?',
    'index.cta.subtitle': 'Let\'s discuss how we can help you achieve your business goals and drive real results. Join 700+ successful brands who trust us with their digital transformation.',
    'index.cta.start': 'Start Your Project',
    'index.cta.view': 'View Our Work',
    
    // New Homepage Section
    'homepage.new.title': 'Build with Virtue, Perform with Data',
    'homepage.new.subtitle': 'A team of engineers, strategists, and creators crafting technology and marketing that drive real results.',
    'homepage.new.desc1': 'Virtus Digital is a full-service technology and marketing company delivering complete digital ecosystems — from custom-coded websites and CRMs to Google-grade advertising and analytics. As an official Google Partner agency, our 15-year track record combines engineering precision with data-driven marketing to help brands grow smarter and perform better.',
    'homepage.new.desc2': '',
    'homepage.new.button': 'Learn More',
    
    // Trusted Partner Section
    'homepage.trusted.title': 'Trusted Digital Growth Partner – From Code to Conversion',
    'homepage.trusted.desc1': 'Virtus Digital is a full-service technology and marketing company delivering complete digital ecosystems — from custom-coded websites and CRMs to Google-grade advertising and analytics. As an official Google Partner agency, our 15-year track record combines engineering precision with data-driven marketing to help brands grow smarter and perform better.',
    'homepage.trusted.desc2': 'Founded in 2010, expanded under the Digitalize Cyprus brand in 2022, and restructured as Virtus Digital in 2024, we now operate globally, serving clients across Europe and Asia. Our multidisciplinary team of developers, strategists, and creative professionals builds measurable, scalable solutions that turn digital investment into real business growth.',
    'homepage.trusted.button': 'Learn More',
    
    // Portfolio Page
    'portfolio.page.title': 'Our Portfolio',
    'portfolio.page.subtitle': 'We help more than ',
    'portfolio.page.subtitle.bold': '700+ brands',
    'portfolio.page.subtitle2': ' worldwide increase their turnover with high-performing websites and digital experiences.',
    'portfolio.stats.projects': 'Projects Delivered',
    'portfolio.stats.satisfaction': 'Client Satisfaction',
    'portfolio.stats.roi': 'Avg. ROI Increase',
    'portfolio.dialog.client': 'Client',
    'portfolio.dialog.duration': 'Duration',
    'portfolio.dialog.result': 'Result',
    'portfolio.dialog.description': 'Project Description',
    'portfolio.dialog.goal': 'Project Goal',
    'portfolio.dialog.technologies': 'Technologies Used',
    'portfolio.dialog.visit': 'Visit Website',
    'portfolio.cta.title': 'Want to Be Our Next Success Story?',
    'portfolio.cta.subtitle': 'Let\'s create something amazing together. Get in touch to discuss your project.',
    'portfolio.cta.button': 'Start Your Project',
    
    // About Page
    'about.page.title': 'Who We Are',
    'about.page.subtitle': 'We\'re more than a digital agency — we\'re your growth partner, dedicated to transforming your vision into digital reality.',
    'about.page.desc1': 'At Virtus Digital, we believe in the power of digital transformation. Our team of creative strategists, designers, and developers work together to create experiences that not only look beautiful but deliver measurable results.',
    'about.page.desc2': 'Founded on principles of creativity, precision, and innovation, we\'ve helped hundreds of brands establish their digital presence and achieve their growth objectives. From startups to established enterprises, we bring the same level of dedication and expertise to every project.',
    'about.stats.projects': 'Projects Completed',
    'about.stats.clients': 'Happy Clients',
    'about.stats.experience': 'Years Experience',
    'about.stats.satisfaction': 'Satisfaction Rate',
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide everything we do',
    'about.value.innovation': 'Innovation',
    'about.value.innovation.desc': 'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.',
    'about.value.excellence': 'Excellence',
    'about.value.excellence.desc': 'Quality is non-negotiable. We strive for perfection in every project we undertake.',
    'about.value.collaboration': 'Collaboration',
    'about.value.collaboration.desc': 'Your success is our success. We work as partners, not just vendors.',
    'about.value.passion': 'Passion',
    'about.value.passion.desc': 'We love what we do, and it shows in the energy and creativity we bring to every project.',
    'about.process.title': 'Our Process',
    'about.process.subtitle': 'A proven methodology that delivers results every time',
    'about.process.1.title': 'Discovery & Research',
    'about.process.1.desc': 'We dive deep into your business, audience, and goals to understand what makes you unique and what your customers need.',
    'about.process.2.title': 'Strategy & Planning',
    'about.process.2.desc': 'Based on insights, we craft a tailored strategy with clear objectives, timelines, and KPIs to measure success.',
    'about.process.3.title': 'Design & Development',
    'about.process.3.desc': 'Our creative team brings the strategy to life with stunning designs and robust development that exceeds expectations.',
    'about.process.4.title': 'Launch & Optimize',
    'about.process.4.desc': 'We launch your project with precision, then continuously monitor and optimize for maximum performance and ROI.',
    'about.team.title': 'Meet Our Team',
    'about.team.subtitle': 'Talented professionals dedicated to your success',
    'about.testimonials.page.title': 'What Our Clients Say',
    'about.testimonials.page.subtitle': 'Don\'t just take our word for it — hear from those we\'ve helped succeed',
    'about.cta.page.title': 'Ready to Work With Us?',
    'about.cta.page.subtitle': 'Let\'s discuss how we can help you achieve your digital goals.',
    'about.cta.page.button': 'Get in Touch',
    
    // Blog Page
    'blog.page.title': 'Our Blog',
    'blog.page.subtitle': 'Insights, strategies, and the latest trends in digital marketing. Stay informed and stay ahead.',
    'blog.featured': 'Featured',
    'blog.author': 'Author',
    'blog.read-time': 'read',
    'blog.read-article': 'Read Article',
    'blog.newsletter.title': 'Subscribe to Our Newsletter',
    'blog.newsletter.subtitle': 'Get the latest insights, tips, and strategies delivered straight to your inbox.',
    'blog.newsletter.placeholder': 'Enter your email',
    'blog.newsletter.button': 'Subscribe',
    
    // Contact Page
    'contact.page.title': 'Let\'s Work Together',
    'contact.page.subtitle': 'Ready to transform your digital presence? Get in touch with us today and let\'s create something amazing.',
    'contact.phone': 'Phone',
    'contact.email.label': 'Email',
    'contact.office': 'Office',
    'contact.hours': 'Business Hours',
    'contact.hours.days': 'Monday - Friday',
    'contact.hours.time': '9:00 AM - 6:00 PM PST',
    'contact.form.title': 'Send Us a Message',
    'contact.form.subtitle': 'Fill out the form below and we\'ll get back to you within 24 hours.',
    'contact.form.name': 'Name *',
    'contact.form.name.placeholder': 'Your Name',
    'contact.form.email.label': 'Email *',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': '+1 (555) 123-4567',
    'contact.form.subject': 'Subject *',
    'contact.form.subject.placeholder': 'Project Inquiry',
    'contact.form.message.label': 'Message *',
    'contact.form.message.placeholder': 'Tell us about your project...',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive digital solutions to elevate your brand and drive measurable results.',
    'services.what-we-do': 'What We Do Best',
    'services.skills-title': 'Skills & Services',
    'services.key-services': 'Key Services:',
    'services.what-we-offer': 'What We Offer:',
    'services.get-started': 'Get Started',
    
    // Skills
    'skills.frontend': 'Frontend',
    'skills.frontend.desc': 'React, Next.js, TypeScript, TailwindCSS, Performance & Accessibility.',
    'skills.backend': 'Backend',
    'skills.backend.desc': 'Node.js, Python (FastAPI), PHP (Laravel), REST/GraphQL, Microservices.',
    'skills.data': 'Data & Cloud',
    'skills.data.desc': 'PostgreSQL, Redis, Docker, AWS, CI/CD, Observability.',
    'skills.quality': 'Quality',
    'skills.quality.desc': 'Test Automation, Code Review, Security and Performance Analysis.',
    
    // CTA
    'cta.title': 'Ready to Transform Your Digital Presence?',
    'cta.subtitle': 'Let\'s discuss how our services can help you achieve your business goals.',
    'cta.button': 'Contact Us Today',
    
    // About
    'about.title': 'Who We Are',
    'about.subtitle': 'We\'re more than a digital agency — we\'re your growth partner.',
    'about.desc1': 'At Virtus Digital, we believe in the power of digital transformation. Our team of creative strategists, designers, and developers work together to create experiences that not only look beautiful but deliver measurable results.',
    'about.desc2': 'Founded on principles of creativity, precision, and innovation, we\'ve helped dozens of brands establish their digital presence and achieve their growth objectives.',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients',
    'about.experience': 'Years Experience',
    'about.award': 'Award-Winning',
    'about.award.desc': 'Recognized for excellence in digital innovation',
    'about.team': 'Expert Team',
    'about.team.desc': 'Talented professionals dedicated to your success',
    'about.delivery': 'Fast Delivery',
    'about.delivery.desc': 'Agile processes that keep your project moving',
    
    // Portfolio
    'portfolio.title': 'Our Work',
    'portfolio.subtitle': 'We help more than ',
    'portfolio.subtitle.bold': '700+ brands',
    'portfolio.subtitle2': ' worldwide increase their turnover with high-performing websites and digital experiences.',
    'portfolio.client': 'Client',
    'portfolio.result': 'Result',
    'portfolio.goal': 'Project Goal',
    'portfolio.visit': 'Visit Website',
    
    // Portfolio Projects
    'project.erm.title': 'ERM Rent a Car',
    'project.erm.client': 'ERM',
    'project.erm.goal': 'Rental booking website with fleet showcase and online reservation',
    'project.erm.result': '+42% booking conversions after launch',
    
    'project.ravena.title': 'Ravenalab',
    'project.ravena.client': 'Travel Agency',
    'project.ravena.goal': 'Travel packages, destination pages and lead capture',
    'project.ravena.result': '3x increase in qualified inquiries',
    
    'project.fertina.title': 'Fertina IVF',
    'project.fertina.client': 'Fertility Clinic',
    'project.fertina.goal': 'Clinic website with services, success stories and appointment request',
    'project.fertina.result': '+65% appointment requests month-over-month',
    
    'project.virtus.title': 'Virtus Digital',
    'project.virtus.client': 'Virtus Digital',
    'project.virtus.goal': 'Professional corporate website for digital agency',
    'project.virtus.result': 'Increased brand awareness and expanded client portfolio',
    
    'project.creative.title': 'Creative Solutions',
    'project.creative.client': 'Creative Solutions',
    'project.creative.goal': 'Modern portfolio site for creative solutions',
    'project.creative.result': 'Effective presentation of creative projects and client attraction',
    
    'project.tech.title': 'Tech Innovations',
    'project.tech.client': 'Tech Innovations',
    'project.tech.goal': 'Innovative web platform for technology company',
    'project.tech.result': 'Technology leadership emphasis and investor interest',
    
    // Blog
    'blog.title': 'Latest Insights',
    'blog.subtitle': 'Thoughts, trends, and strategies from our team of experts.',
    'blog.read-more': 'Read More',
    
    'blog.post1.title': 'The Future of Digital Marketing in 2025',
    'blog.post1.date': 'March 15, 2025',
    'blog.post1.excerpt': 'Explore the latest trends shaping the digital marketing landscape and how brands can stay ahead.',
    'blog.post1.category': 'Marketing',
    
    'blog.post2.title': 'Building a Social Media Strategy That Works',
    'blog.post2.date': 'March 10, 2025',
    'blog.post2.excerpt': 'Learn how to create engaging content and build meaningful connections with your audience.',
    'blog.post2.category': 'Social Media',
    
    'blog.post3.title': 'Brand Identity: More Than Just a Logo',
    'blog.post3.date': 'March 5, 2025',
    'blog.post3.excerpt': 'Discover why comprehensive brand identity goes beyond visual design to create lasting impact.',
    'blog.post3.category': 'Branding',
    
    // Contact
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Ready to transform your digital presence? Get in touch with us today.',
    'contact.info': 'Contact Information',
    'contact.follow': 'Follow Us',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success.title': 'Message sent!',
    'contact.success.desc': 'We\'ll get back to you as soon as possible.',
    'contact.error.title': 'Validation Error',
    
    // Footer
    'footer.tagline': 'Transforming visions into digital reality with creativity, precision, and innovation.',
    'footer.quick-links': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.contact-us': 'Get in Touch',
    'footer.rights': '© 2025 Virtus Digital. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    'footer.service1': 'Digital Advertising',
    'footer.service2': 'Social Media Management',
    'footer.service3': 'Brand Strategy',
    'footer.service4': 'Web Development',
    'footer.service5': 'SEO & Content',
    
    // Service Details
    'service.digital-marketing.title': 'Digital Marketing',
    'service.digital-marketing.desc': 'Scale Smarter with Data-Driven Advertising',
    'service.digital-marketing.details': 'Certified Google Partner. 15+ years of performance marketing experience across Search, Display, YouTube, Meta, and more.',
    'service.digital-marketing.features': 'Google Ads (Search, Display, YouTube, Shopping) • Meta, TikTok, LinkedIn Campaigns • Advanced audience segmentation, remarketing & offline conversions • Weekly optimization, transparent reports',
    
    'service.web-dev.title': 'Web Design & Development',
    'service.web-dev.desc': 'Engineered Websites. Designed for Impact.',
    'service.web-dev.details': 'From WordPress to fully custom-coded systems — we build responsive, SEO-ready, multilingual websites that convert visitors into leads.',
    'service.web-dev.features': 'WordPress, WooCommerce, Shopify, or custom frameworks • Mobile-first UX, blazing load speed • SEO-ready architecture & analytics integrated • Admin panels that you actually enjoy using',
    
    'service.custom-software.title': 'Custom Software Development',
    'service.custom-software.desc': 'Code that Fits Your Workflow.',
    'service.custom-software.details': 'We create tailor-made systems — CRMs, ERPs, booking or inventory tools — built precisely for your business logic.',
    'service.custom-software.features': 'CRM & ERP platforms • Reservation, inventory & document tracking systems • API & third-party integrations (payment, SMS, WhatsApp, CRM) • Secure, scalable architecture & audit logs',
    
    'service.seo.title': 'SEO Optimization',
    'service.seo.desc': 'Be Found Before They Search.',
    'service.seo.details': 'End-to-end SEO strategy combining technical excellence, smart content, and authority building.',
    'service.seo.features': 'Technical & On-Page SEO audits • Keyword + Competitor Research • Content optimization, blog planning • Local SEO for Google Maps visibility',
    
    'service.social-media.title': 'Social Media Management',
    'service.social-media.desc': 'Creative That Connects.',
    'service.social-media.details': 'We manage and grow your social presence with visuals, storytelling, and performance-driven strategy.',
    'service.social-media.features': 'Monthly content planning & creative production • Reels, stories, YouTube shorts • Audience engagement & community management • Analytics & continuous optimization',
    
    'service.hosting-email.title': 'Hosting & Email Services',
    'service.hosting-email.desc': 'Reliable Digital Infrastructure',
    'service.hosting-email.details': 'Fast, secure, and scalable hosting solutions with professional email services.',
    'service.hosting-email.features': 'SSD hosting, SSL certificates • Email hosting & business email • 24/7 technical support • Backup & security services',
  }
  ,
  it: {
    // Navbar
    'nav.home': 'Homepage',
    'nav.about': 'Chi Siamo',
    'nav.services': 'Servizi',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.contact': 'Contatti',

    // Banner Slider
    'banner.slide1.title': 'Essenza del Brand',
    'banner.slide1.subtitle': 'Build with Virtue. Perform with Data.',
    'banner.slide1.description': 'Dalla strategia al codice, dalla pubblicità all\'analisi — Virtus Digital crea ecosistemi digitali completi orientati alle prestazioni.',
    'banner.slide2.title': 'Esperienza in Marketing Digitale',
    'banner.slide2.subtitle': 'Oltre 15 anni di marketing digitale basato sui dati.',
    'banner.slide2.description': 'Come Google Partner certificato, uniamo strategia comprovata e tracciamento preciso per far crescere i brand su Google, Meta e YouTube.',
    'banner.slide3.title': 'IT & Sviluppo Personalizzato',
    'banner.slide3.subtitle': 'Codice che alimenta il business.',
    'banner.slide3.description': 'Dai CRM personalizzati ai siti web multilingue, progettiamo sistemi affidabili e scalabili su misura per la tua azienda.',
    'banner.slide4.title': 'Chiamata all\'Azione',
    'banner.slide4.subtitle': 'Pronto a costruire la tua crescita digitale?',
    'banner.slide4.description': 'Trasformiamo la tua visione in performance.',
    'banner.cta.explore': 'Scopri i Nostri Servizi',
    'banner.cta.start': 'Iniziamo',
    
    // Homepage (About Us content)
    'home.headline': 'Il tuo partner digitale di fiducia – Dal codice alla conversione',
    'home.p1': 'Virtus Digital è un’azienda tecnologica e di marketing a servizio completo che realizza ecosistemi digitali completi — dai siti web personalizzati alla pubblicità di livello Google e analitiche avanzate. In qualità di Google Partner ufficiale, uniamo 15 anni di esperienza, precisione ingegneristica e marketing basato sui dati per far crescere i brand in modo intelligente.',
    'home.p2': '',

    // About (About Us page dedicated content)
    'aboutus.who': 'Virtus Digital è un\'agenzia orientata alla tecnologia che offre soluzioni complete di sviluppo software, web e marketing digitale. Fondata nel 2010, unisce competenza tecnica e creatività per generare successo digitale misurabile.',
    'aboutus.evolution.title': 'La Nostra Evoluzione',
    'aboutus.evolution.2010': '2010 – Inizio dei servizi di marketing digitale e sviluppo software.',
    'aboutus.evolution.2022': '2022 – Lancio del marchio Digitalize Cyprus e adesione al programma Google Partner.',
    'aboutus.evolution.2024': '2024 – Nascita del marchio Virtus Digital, espansione delle attività in Europa e Asia.',
    'aboutus.expertise.title': 'Le Nostre Competenze',
    'aboutus.expertise.1': 'Siti web e CRM personalizzati',
    'aboutus.expertise.2': 'Pubblicità Google, Meta, YouTube e LinkedIn',
    'aboutus.expertise.3': 'Analisi, tracciamento e SEO',
    'aboutus.expertise.4': 'Strategie social e creative',
    // About Us Additional Content
    'aboutus.who.desc': 'Virtus Digital è un\'agenzia orientata alla tecnologia che offre soluzioni complete di sviluppo software, web e marketing digitale. Fondata nel 2010, unisce competenza tecnica e creatività per generare successo digitale misurabile.',
    'aboutus.principle': 'Il Nostro Principio',
    'aboutus.principle.desc': 'Integrità, precisione e prestazioni misurabili in ogni progetto.',
    'aboutus.mission': 'La Nostra Missione',
    'aboutus.mission.desc': 'Potenziare le aziende con la tecnologia, semplificando le operazioni e favorendo una crescita sostenibile attraverso innovazione e dati.',
    'aboutus.vision': 'La Nostra Visione',
    'aboutus.vision.desc': 'Essere un partner digitale globale riconosciuto per qualità, innovazione e successo misurabile.',
    
    // Hero
    'hero.badge': 'Eccellenza Digitale dal 2020',
    'hero.subtitle': 'Virtus Digital',
    'hero.title1': 'Creiamo Esperienze Digitali',
    'hero.title2': 'Che Connettono.',
    'hero.title.index1': 'Creiamo Esperienze',
    'hero.title.index2': 'Digitali Che Connettono.',
    'hero.description1': 'Virtus Digital aiuta i brand a crescere con strategia, design e creatività basata sui dati.',
    'hero.description2': 'Trasforma la tua visione in realtà digitale.',
    'hero.description.index': 'Trasforma la tua visione in realtà digitale con design strategico, sviluppo all\'avanguardia e marketing basato sui dati che offre risultati misurabili.',
    'hero.cta1': 'Guarda i Nostri Lavori',
    'hero.cta2': 'Parliamo',
    'hero.cta.explore': 'Esplora i Nostri Servizi',
    'hero.cta.start': 'Inizia il Tuo Progetto',
    
    // Index Page
    'index.services.title': 'Dove la tecnologia incontra le prestazioni.',
    'index.services.subtitle1': 'Dal codice alle campagne — il nostro team realizza ecosistemi digitali completi, pensati per performare, crescere e ispirare.',
    'index.services.more': 'E questo è solo l\'inizio. Offriamo 5 servizi principali progettati per coprire ogni aspetto della tua presenza digitale.',
    'index.services.explore': 'Esplora Tutti i Servizi',
    'index.services.learn': 'Scopri di Più',
    
    // Index Featured Services
    'index.service.digital.tagline': 'Campagne focalizzate sulle performance',
    'index.service.web.tagline': 'Progetti web su misura per i tuoi obiettivi',
    'index.service.software.tagline': 'Digitalizza i tuoi processi',
    'index.service.seo.tagline': 'Aumenta la tua visibilità organica',
    
    'index.portfolio.title': 'Risultati comprovati. Impatto reale.',
    'index.portfolio.subtitle1': 'Dalle campagne pubblicitarie ad alte prestazioni ai sistemi personalizzati — trasformiamo le idee in crescita misurabile.',
    'index.portfolio.more': 'Questi sono solo 3 dei nostri 700+ progetti di successo. Ognuno rappresenta una sfida unica, una soluzione creativa e un cliente soddisfatto.',
    'index.portfolio.view': 'Vedi il Nostro Portfolio Completo',
    'index.portfolio.3d.title': 'Galleria Progetti 3D',
    'index.portfolio.click': 'Clicca per visitare',
    
    'index.why.title': 'Perché Sceglierci',
    'index.why.subtitle': 'Non siamo solo un\'altra agenzia digitale. Siamo narratori, risolutori di problemi e hacker della crescita in uno.',
    
    // Core Values
    'index.why.values.title': 'Valori e Mentalità',
    'index.why.values.integrity.title': 'Integrità Prima di Tutto',
    'index.why.values.integrity.desc': 'Diciamo ciò che serve, non ciò che vende. Comprendiamo i veri bisogni dei nostri clienti e forniamo le soluzioni più adatte.',
    'index.why.values.customer.title': 'Approccio Orientato al Cliente',
    'index.why.values.customer.desc': 'Ogni progetto inizia comprendendo i vostri obiettivi. Il vostro successo è il nostro successo, e questo approccio è la nostra priorità in ogni decisione.',
    'index.why.values.passion.title': 'Passione in Ogni Dettaglio',
    'index.why.values.passion.desc': 'Amiamo ciò che costruiamo, e si vede. Potete vedere la nostra passione e gli standard di qualità in ogni progetto.',
    
    // Expertise
    'index.why.expertise.title': 'Competenze ed Esperienza',
    'index.why.expertise.google.title': 'Partner Google Certificato',
    'index.why.expertise.google.desc': 'Competenza riconosciuta nel performance marketing. Come partner ufficiale di Google, applichiamo le strategie più aggiornate.',
    'index.why.expertise.team.title': 'Team di Sviluppo Full-Stack',
    'index.why.expertise.team.desc': 'Esperti in più tecnologie, dal front-end al back-end. Creiamo soluzioni potenti e scalabili con tecnologie moderne.',
    'index.why.expertise.experience.title': 'Esperienza in Diversi Settori',
    'index.why.expertise.experience.desc': 'Adattiamo le soluzioni digitali a sanità, edilizia, viaggi e altro ancora. Sviluppiamo strategie personalizzate comprendendo le esigenze di ogni settore.',
    
    // How We Work
    'index.why.work.title': 'Come Lavoriamo',
    'index.why.work.endtoend.title': 'Gestione Completa',
    'index.why.work.endtoend.desc': 'Dall\'idea al lancio, tutto gestito internamente. Copriamo tutto dalla progettazione allo sviluppo, dal marketing all\'ottimizzazione.',
    'index.why.work.agile.title': 'Agile e Basato sui Dati',
    'index.why.work.agile.desc': 'Costruiamo, testiamo e miglioriamo per risultati misurabili. Ogni decisione è supportata dai dati e continuamente ottimizzata.',
    'index.why.work.longterm.title': 'Focus a Lungo Termine',
    'index.why.work.longterm.desc': 'Supportiamo e ottimizziamo anche dopo la consegna. Non consegniamo solo progetti, supportiamo la vostra crescita continua.',
    
    // What Defines Us
    'index.why.defines.title': 'Cosa Ci Definisce',
    'index.why.defines.honest.title': 'Collaborazione Onesta',
    'index.why.defines.honest.desc': 'Raccomandiamo solo ciò che porta reale valore. Non ci concentriamo solo sulle vendite, ma su un approccio basato sul valore.',
    'index.why.defines.trusted.title': 'Partnership di Fiducia',
    'index.why.defines.trusted.desc': 'Il nostro successo cresce con il vostro. Cresciamo insieme costruendo relazioni a lungo termine.',
    'index.why.defines.creation.title': 'Piacere nella Creazione',
    'index.why.defines.creation.desc': 'Siamo orgogliosi di vedere i clienti felici. Ogni progetto è per noi un\'opportunità di passione e creatività.',
    
    // CTA
    'index.why.cta.title': 'Vuoi saperne di più sul nostro team, il nostro processo e cosa ci motiva?',
    'index.why.cta.subtitle': 'Ci piacerebbe condividere la nostra storia con te.',
    'index.why.cta.button': 'Scopri di Più su di Noi',
    
    'index.testimonials.title': 'Risultati comprovati. Impatto reale.',
    'index.testimonials.subtitle': 'Dalle campagne pubblicitarie ad alte prestazioni ai sistemi personalizzati — trasformiamo le idee in crescita misurabile.',
    'index.testimonials.more': 'Queste sono solo alcune delle nostre storie di successo. Abbiamo aiutato centinaia di aziende a raggiungere risultati simili—e anche migliori. Dalle startup alle imprese consolidate, i nostri clienti riportano costantemente miglioramenti drammatici nelle loro performance digitali.',
    'index.testimonials.cta': 'Leggi Altre Storie di Successo',
    
    'index.cta.title': 'Pronto a Trasformare la Tua Presenza Digitale?',
    'index.cta.subtitle': 'Discutiamo di come possiamo aiutarti a raggiungere i tuoi obiettivi aziendali e ottenere risultati reali. Unisciti a 700+ brand di successo che si fidano di noi per la loro trasformazione digitale.',
    'index.cta.start': 'Inizia il Tuo Progetto',
    'index.cta.view': 'Guarda i Nostri Lavori',
    
    // New Homepage Section
    'homepage.new.title': 'Build with Virtue, Perform with Data',
    'homepage.new.subtitle': 'Un team di ingegneri, strateghi e creativi che sviluppa tecnologia e marketing capaci di generare risultati concreti.',
    'homepage.new.desc1': 'Virtus Digital è un\'azienda tecnologica e di marketing a servizio completo che realizza ecosistemi digitali completi — dai siti web personalizzati alla pubblicità di livello Google e analitiche avanzate. In qualità di Google Partner ufficiale, uniamo 15 anni di esperienza, precisione ingegneristica e marketing basato sui dati per far crescere i brand in modo intelligente.',
    'homepage.new.desc2': '',
    'homepage.new.button': 'Scopri di Più',
    
    // Trusted Partner Section
    'homepage.trusted.title': 'Il tuo partner digitale di fiducia – Dal codice alla conversione',
    'homepage.trusted.desc1': 'Virtus Digital è un\'azienda tecnologica e di marketing a servizio completo che realizza ecosistemi digitali completi — dai siti web personalizzati alla pubblicità di livello Google e analitiche avanzate. In qualità di Google Partner ufficiale, uniamo 15 anni di esperienza, precisione ingegneristica e marketing basato sui dati per far crescere i brand in modo intelligente.',
    'homepage.trusted.desc2': 'Fondata nel 2010, ampliata con il marchio Digitalize Cyprus nel 2022 e riorganizzata come Virtus Digital nel 2024, oggi operiamo in tutto il mondo, offrendo servizi in Europa e Asia. Il nostro team multidisciplinare crea soluzioni scalabili e misurabili che trasformano l\'investimento digitale in vera crescita aziendale.',
    'homepage.trusted.button': 'Scopri di Più',
    
    // Portfolio Page
    'portfolio.page.title': 'Il Nostro Portfolio',
    'portfolio.page.subtitle': 'Aiutiamo più di ',
    'portfolio.page.subtitle.bold': '700+ brand',
    'portfolio.page.subtitle2': ' in tutto il mondo ad aumentare il loro fatturato con siti web ad alte prestazioni ed esperienze digitali.',
    'portfolio.stats.projects': 'Progetti Consegnati',
    'portfolio.stats.satisfaction': 'Soddisfazione del Cliente',
    'portfolio.stats.roi': 'Aumento ROI Medio',
    'portfolio.dialog.client': 'Cliente',
    'portfolio.dialog.duration': 'Durata',
    'portfolio.dialog.result': 'Risultato',
    'portfolio.dialog.description': 'Descrizione del Progetto',
    'portfolio.dialog.goal': 'Obiettivo del Progetto',
    'portfolio.dialog.technologies': 'Tecnologie Utilizzate',
    'portfolio.dialog.visit': 'Visita il Sito Web',
    'portfolio.cta.title': 'Vuoi Essere la Nostra Prossima Storia di Successo?',
    'portfolio.cta.subtitle': 'Creiamo qualcosa di straordinario insieme. Mettiti in contatto per discutere il tuo progetto.',
    'portfolio.cta.button': 'Inizia il Tuo Progetto',
    
    // About Page
    'about.page.title': 'Chi Siamo',
    'about.page.subtitle': 'Siamo più di un\'agenzia digitale — siamo il tuo partner di crescita, dedicato a trasformare la tua visione in realtà digitale.',
    'about.page.desc1': 'In Virtus Digital, crediamo nel potere della trasformazione digitale. Il nostro team di strategisti creativi, designer e sviluppatori lavora insieme per creare esperienze che non solo sono belle da vedere ma offrono risultati misurabili.',
    'about.page.desc2': 'Fondata sui principi di creatività, precisione e innovazione, abbiamo aiutato centinaia di brand a stabilire la loro presenza digitale e raggiungere i loro obiettivi di crescita. Dalle startup alle imprese consolidate, portiamo lo stesso livello di dedizione ed esperienza ad ogni progetto.',
    'about.stats.projects': 'Progetti Completati',
    'about.stats.clients': 'Clienti Felici',
    'about.stats.experience': 'Anni di Esperienza',
    'about.stats.satisfaction': 'Tasso di Soddisfazione',
    'about.values.title': 'I Nostri Valori',
    'about.values.subtitle': 'I principi che guidano tutto quello che facciamo',
    'about.value.innovation': 'Innovazione',
    'about.value.innovation.desc': 'Rimaniamo all\'avanguardia delle tendenze e abbracciamo nuove tecnologie per offrire soluzioni all\'avanguardia.',
    'about.value.excellence': 'Eccellenza',
    'about.value.excellence.desc': 'La qualità non è negoziabile. Aspiriamo alla perfezione in ogni progetto che intraprendiamo.',
    'about.value.collaboration': 'Collaborazione',
    'about.value.collaboration.desc': 'Il tuo successo è il nostro successo. Lavoriamo come partner, non solo come fornitori.',
    'about.value.passion': 'Passione',
    'about.value.passion.desc': 'Amiamo quello che facciamo, e si vede nell\'energia e creatività che portiamo ad ogni progetto.',
    'about.process.title': 'Il Nostro Processo',
    'about.process.subtitle': 'Una metodologia provata che offre risultati ogni volta',
    'about.process.1.title': 'Scoperta & Ricerca',
    'about.process.1.desc': 'Scaviamo a fondo nella tua azienda, audience e obiettivi per capire cosa ti rende unico e di cosa hanno bisogno i tuoi clienti.',
    'about.process.2.title': 'Strategia & Pianificazione',
    'about.process.2.desc': 'Basandoci sui insights, creiamo una strategia su misura con obiettivi chiari, tempistiche e KPI per misurare il successo.',
    'about.process.3.title': 'Design & Sviluppo',
    'about.process.3.desc': 'Il nostro team creativo porta la strategia alla vita con design straordinari e sviluppo robusto che supera le aspettative.',
    'about.process.4.title': 'Lancio & Ottimizzazione',
    'about.process.4.desc': 'Lanciamo il tuo progetto con precisione, poi monitoriamo e ottimizziamo continuamente per massime prestazioni e ROI.',
    'about.team.title': 'Incontra il Nostro Team',
    'about.team.subtitle': 'Professionisti di talento dedicati al tuo successo',
    'about.testimonials.page.title': 'Cosa Dicono i Nostri Clienti',
    'about.testimonials.page.subtitle': 'Non credere solo alle nostre parole — ascolta da coloro che abbiamo aiutato a avere successo',
    'about.cta.page.title': 'Pronto a Lavorare con Noi?',
    'about.cta.page.subtitle': 'Discutiamo di come possiamo aiutarti a raggiungere i tuoi obiettivi digitali.',
    'about.cta.page.button': 'Mettiti in Contatto',
    
    // Blog Page
    'blog.page.title': 'Il Nostro Blog',
    'blog.page.subtitle': 'Insights, strategie e le ultime tendenze nel marketing digitale. Rimani informato e rimani all\'avanguardia.',
    'blog.featured': 'In Evidenza',
    'blog.author': 'Autore',
    'blog.read-time': 'lettura',
    'blog.read-article': 'Leggi Articolo',
    'blog.newsletter.title': 'Iscriviti alla Nostra Newsletter',
    'blog.newsletter.subtitle': 'Ricevi le ultime insights, consigli e strategie direttamente nella tua casella di posta.',
    'blog.newsletter.placeholder': 'Inserisci la tua email',
    'blog.newsletter.button': 'Iscriviti',
    
    // Contact Page
    'contact.page.title': 'Lavoriamo Insieme',
    'contact.page.subtitle': 'Pronto a trasformare la tua presenza digitale? Mettiti in contatto con noi oggi e creiamo qualcosa di straordinario.',
    'contact.phone': 'Telefono',
    'contact.email.label': 'Email',
    'contact.office': 'Ufficio',
    'contact.hours': 'Orari di Lavoro',
    'contact.hours.days': 'Lunedì - Venerdì',
    'contact.hours.time': '9:00 - 18:00',
    'contact.form.title': 'Inviaci un Messaggio',
    'contact.form.subtitle': 'Compila il modulo qui sotto e ti risponderemo entro 24 ore.',
    'contact.form.name': 'Nome *',
    'contact.form.name.placeholder': 'Il Tuo Nome',
    'contact.form.email.label': 'Email *',
    'contact.form.email.placeholder': 'tua.email@esempio.com',
    'contact.form.phone': 'Telefono',
    'contact.form.phone.placeholder': '+39 123 456 7890',
    'contact.form.subject': 'Oggetto *',
    'contact.form.subject.placeholder': 'Richiesta Progetto',
    'contact.form.message.label': 'Messaggio *',
    'contact.form.message.placeholder': 'Raccontaci del tuo progetto...',
    
    // Services
    'services.title': 'I Nostri Servizi',
    'services.subtitle': 'Soluzioni digitali complete per elevare il tuo brand e ottenere risultati misurabili.',
    'services.what-we-do': 'Cosa Facciamo Meglio',
    'services.skills-title': 'Competenze & Servizi',
    'services.key-services': 'Servizi Chiave:',
    'services.what-we-offer': 'Cosa Offriamo:',
    'services.get-started': 'Inizia',
    
    // Skills
    'skills.frontend': 'Frontend',
    'skills.frontend.desc': 'React, Next.js, TypeScript, TailwindCSS, Performance & Accessibilità.',
    'skills.backend': 'Backend',
    'skills.backend.desc': 'Node.js, Python (FastAPI), PHP (Laravel), REST/GraphQL, Microservizi.',
    'skills.data': 'Dati & Cloud',
    'skills.data.desc': 'PostgreSQL, Redis, Docker, AWS, CI/CD, Osservabilità.',
    'skills.quality': 'Qualità',
    'skills.quality.desc': 'Test Automazione, Code Review, Sicurezza e Analisi delle Performance.',
    
    // Service Details
    'service.digital-marketing.title': 'Marketing Digitale',
    'service.digital-marketing.desc': 'Cresci in modo intelligente con la pubblicità basata sui dati',
    'service.digital-marketing.details': 'Partner Google certificato. Oltre 15 anni di esperienza nel marketing digitale su Search, Display, YouTube, Meta e altri canali.',
    'service.digital-marketing.features': 'Google Ads (Search, Display, YouTube, Shopping) • Campagne Meta, TikTok, LinkedIn • Segmentazione avanzata del pubblico, remarketing e conversioni offline • Ottimizzazione settimanale e report trasparenti',
    
    'service.web-dev.title': 'Design Web & Sviluppo',
    'service.web-dev.desc': 'Siti web progettati per le prestazioni',
    'service.web-dev.details': 'Da WordPress a sistemi completamente personalizzati — costruiamo siti web reattivi, ottimizzati per la SEO e multilingue che trasformano i visitatori in clienti.',
    'service.web-dev.features': 'WordPress, WooCommerce, Shopify o framework personalizzati • Esperienza utente mobile-first e velocità di caricamento elevata • Architettura SEO e analitiche integrate • Pannelli di amministrazione facili da usare',
    
    'service.custom-software.title': 'Sviluppo Software Personalizzato',
    'service.custom-software.desc': 'Codice su misura per il tuo flusso di lavoro',
    'service.custom-software.details': 'Creiamo sistemi personalizzati — CRM, ERP, prenotazioni o gestione inventario — costruiti esattamente per la logica della tua azienda.',
    'service.custom-software.features': 'Piattaforme CRM ed ERP • Sistemi di prenotazione, inventario e tracciamento documenti • Integrazioni API e di terze parti (pagamenti, SMS, WhatsApp, CRM) • Architettura sicura e scalabile con log di controllo',
    
    'service.seo.title': 'Ottimizzazione SEO',
    'service.seo.desc': 'Fatti trovare prima che ti cerchino',
    'service.seo.details': 'Strategie SEO complete che combinano eccellenza tecnica, contenuti intelligenti e costruzione dell\'autorità.',
    'service.seo.features': 'Audit SEO tecnici e On-Page • Ricerca di parole chiave e analisi dei concorrenti • Ottimizzazione dei contenuti e pianificazione dei blog • SEO locale per la visibilità su Google Maps',
    
    'service.social-media.title': 'Gestione Social Media',
    'service.social-media.desc': 'Creatività che connette',
    'service.social-media.details': 'Gestiamo e facciamo crescere la tua presenza sui social con contenuti visivi, storytelling e strategie orientate alle prestazioni.',
    'service.social-media.features': 'Pianificazione mensile dei contenuti e produzione creativa • Reels, Stories, YouTube Shorts • Gestione della community e coinvolgimento del pubblico • Analisi e ottimizzazione continua',
    
    'service.hosting-email.title': 'Servizi di Hosting e Email',
    'service.hosting-email.desc': 'Infrastruttura Digitale Affidabile',
    'service.hosting-email.details': 'Soluzioni di hosting veloci, sicure e scalabili con servizi email professionali.',
    'service.hosting-email.features': 'Hosting SSD, certificati SSL • Hosting email e email aziendali • Supporto tecnico 24/7 • Servizi di backup e sicurezza',
    
    // CTA
    'cta.title': 'Pronto a Trasformare la Tua Presenza Digitale?',
    'cta.subtitle': 'Discutiamo di come i nostri servizi possono aiutarti a raggiungere i tuoi obiettivi aziendali.',
    'cta.button': 'Contattaci Oggi',
    
    // About
    'about.title': 'Chi Siamo',
    'about.subtitle': 'Siamo più di un\'agenzia digitale — siamo il tuo partner di crescita.',
    'about.desc1': 'In Virtus Digital, crediamo nel potere della trasformazione digitale. Il nostro team di strategisti creativi, designer e sviluppatori lavora insieme per creare esperienze che non solo sono belle da vedere ma offrono risultati misurabili.',
    'about.desc2': 'Fondata sui principi di creatività, precisione e innovazione, abbiamo aiutato decine di brand a stabilire la loro presenza digitale e raggiungere i loro obiettivi di crescita.',
    'about.projects': 'Progetti Completati',
    'about.clients': 'Clienti Felici',
    'about.experience': 'Anni di Esperienza',
    'about.award': 'Premiato',
    'about.award.desc': 'Riconosciuto per l\'eccellenza nell\'innovazione digitale',
    'about.team': 'Team Esperto',
    'about.team.desc': 'Professionisti di talento dedicati al tuo successo',
    'about.delivery': 'Consegna Veloce',
    'about.delivery.desc': 'Processi agili che mantengono il tuo progetto in movimento',
    
    // Portfolio
    'portfolio.title': 'I Nostri Lavori',
    'portfolio.subtitle': 'Aiutiamo più di ',
    'portfolio.subtitle.bold': '700+ brand',
    'portfolio.subtitle2': ' in tutto il mondo ad aumentare il loro fatturato con siti web ad alte prestazioni ed esperienze digitali.',
    'portfolio.client': 'Cliente',
    'portfolio.result': 'Risultato',
    'portfolio.goal': 'Obiettivo del Progetto',
    'portfolio.visit': 'Visita il Sito Web',
    
    // Portfolio Projects
    'project.erm.title': 'ERM Rent a Car',
    'project.erm.client': 'ERM',
    'project.erm.goal': 'Sito web di noleggio auto con vetrina flotta e prenotazione online',
    'project.erm.result': '+42% conversioni prenotazioni dopo il lancio',
    
    'project.ravena.title': 'Ravenalab',
    'project.ravena.client': 'Agenzia di Viaggi',
    'project.ravena.goal': 'Pacchetti di viaggio, pagine destinazioni e cattura lead',
    'project.ravena.result': '3x aumento richieste qualificate',
    
    'project.fertina.title': 'Fertina IVF',
    'project.fertina.client': 'Clinica Fertilità',
    'project.fertina.goal': 'Sito web clinica con servizi, storie di successo e richiesta appuntamenti',
    'project.fertina.result': '+65% richieste appuntamenti mese su mese',
    
    'project.virtus.title': 'Virtus Digital',
    'project.virtus.client': 'Virtus Digital',
    'project.virtus.goal': 'Sito web aziendale professionale per agenzia digitale',
    'project.virtus.result': 'Aumento consapevolezza del brand ed espansione portfolio clienti',
    
    'project.creative.title': 'Creative Solutions',
    'project.creative.client': 'Creative Solutions',
    'project.creative.goal': 'Sito portfolio moderno per soluzioni creative',
    'project.creative.result': 'Presentazione efficace progetti creativi e attrazione clienti',
    
    'project.tech.title': 'Tech Innovations',
    'project.tech.client': 'Tech Innovations',
    'project.tech.goal': 'Piattaforma web innovativa per azienda tecnologica',
    'project.tech.result': 'Enfasi leadership tecnologica e interesse investitori',
    
    // Blog
    'blog.title': 'Ultime Insights',
    'blog.subtitle': 'Pensieri, tendenze e strategie dal nostro team di esperti.',
    'blog.read-more': 'Leggi di Più',
    
    'blog.post1.title': 'Il Futuro del Marketing Digitale nel 2025',
    'blog.post1.date': '15 Marzo 2025',
    'blog.post1.excerpt': 'Esplora le ultime tendenze che stanno plasmando il panorama del marketing digitale e come i brand possono rimanere all\'avanguardia.',
    'blog.post1.category': 'Marketing',
    
    'blog.post2.title': 'Costruire una Strategia Social Media che Funziona',
    'blog.post2.date': '10 Marzo 2025',
    'blog.post2.excerpt': 'Impara come creare contenuti coinvolgenti e costruire connessioni significative con il tuo pubblico.',
    'blog.post2.category': 'Social Media',
    
    'blog.post3.title': 'Identità del Brand: Più di un Logo',
    'blog.post3.date': '5 Marzo 2025',
    'blog.post3.excerpt': 'Scopri perché un\'identità del brand completa va oltre il design visual per creare un impatto duraturo.',
    'blog.post3.category': 'Branding',
    
    // Contact
    'contact.title': 'Lavoriamo Insieme',
    'contact.subtitle': 'Pronto a trasformare la tua presenza digitale? Mettiti in contatto con noi oggi.',
    'contact.info': 'Informazioni di Contatto',
    'contact.follow': 'Seguici',
    'contact.name': 'Il Tuo Nome',
    'contact.email': 'La Tua Email',
    'contact.message': 'Il Tuo Messaggio',
    'contact.send': 'Invia Messaggio',
    'contact.sending': 'Invio...',
    'contact.success.title': 'Messaggio inviato!',
    'contact.success.desc': 'Ti risponderemo il prima possibile.',
    'contact.error.title': 'Errore di Validazione',
    
    // Footer
    'footer.tagline': 'Trasformiamo visioni in realtà digitale con creatività, precisione e innovazione.',
    'footer.quick-links': 'Link Rapidi',
    'footer.services': 'I Nostri Servizi',
    'footer.contact-us': 'Mettiti in Contatto',
    'footer.rights': '© 2025 Virtus Digital. Tutti i diritti riservati.',
    'footer.privacy': 'Politica sulla Privacy',
    'footer.terms': 'Termini di Servizio',
    
    'footer.service1': 'Pubblicità Digitale',
    'footer.service2': 'Gestione Social Media',
    'footer.service3': 'Strategia del Brand',
    'footer.service4': 'Sviluppo Web',
    'footer.service5': 'SEO & Contenuti',
  }
  ,
  ro: {
    // Navbar
    'nav.home': 'Acasă',
    'nav.about': 'Despre Noi',
    'nav.services': 'Servicii',
    'nav.portfolio': 'Portofoliu',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Banner Slider
    'banner.slide1.title': 'Esența Brandului',
    'banner.slide1.subtitle': 'Build with Virtue. Perform with Data.',
    'banner.slide1.description': 'De la strategie la cod, de la reclame la analiză — Virtus Digital creează ecosisteme digitale complete, construite pentru performanță.',
    'banner.slide2.title': 'Expertiza în Marketing Digital',
    'banner.slide2.subtitle': 'Peste 15 ani de marketing digital bazat pe date.',
    'banner.slide2.description': 'Ca partener certificat Google, combinăm strategii dovedite și urmărire precisă pentru a scala brandurile pe Google, Meta și YouTube.',
    'banner.slide3.title': 'IT & Dezvoltare Personalizată',
    'banner.slide3.subtitle': 'Codul care alimentează afacerea.',
    'banner.slide3.description': 'De la CRM-uri personalizate la site-uri multilingve, proiectăm sisteme fiabile și scalabile adaptate logicii afacerii tale.',
    'banner.slide4.title': 'Chemare la Acțiune',
    'banner.slide4.subtitle': 'Pregătit să-ți construiești creșterea digitală?',
    'banner.slide4.description': 'Să transformăm viziunea ta în performanță.',
    'banner.cta.explore': 'Descoperă Serviciile Noastre',
    'banner.cta.start': 'Să Începem',
    
    // Homepage (About Us content)
    'home.headline': 'Partenerul tău digital de încredere – De la cod la conversie',
    'home.p1': 'Virtus Digital este o companie de tehnologie și marketing care oferă ecosisteme digitale complete — de la site-uri web personalizate și CRM-uri până la publicitate și analiză la nivel Google. Ca agenție Google Partner, combinăm 15 ani de experiență, precizia tehnologică și marketingul bazat pe date pentru a ajuta brandurile să crească inteligent.',
    'home.p2': '',

    // About (About Us page dedicated content)
    'aboutus.who': 'Virtus Digital este o agenție orientată spre tehnologie care oferă soluții complete în dezvoltare web, software și marketing digital. Fondată în 2010, combină expertiza tehnică și creativitatea strategică pentru a obține rezultate digitale măsurabile.',
    'aboutus.evolution.title': 'Evoluția Noastră',
    'aboutus.evolution.2010': '2010 – Începerea serviciilor profesionale de marketing digital și software.',
    'aboutus.evolution.2022': '2022 – Lansarea mărcii Digitalize Cyprus și obținerea statutului de Google Partner.',
    'aboutus.evolution.2024': '2024 – Crearea brandului Virtus Digital, extinderea activității în Europa și Asia.',
    'aboutus.expertise.title': 'Expertiza Noastră',
    'aboutus.expertise.1': 'Site-uri web și CRM-uri personalizate',
    'aboutus.expertise.2': 'Reclame Google, Meta, YouTube și LinkedIn',
    'aboutus.expertise.3': 'Analitice, urmărire și SEO',
    'aboutus.expertise.4': 'Strategii creative și social media',
    // About Us Additional Content
    'aboutus.who.desc': 'Virtus Digital este o agenție orientată spre tehnologie care oferă soluții complete în dezvoltare web, software și marketing digital. Fondată în 2010, combină expertiza tehnică și creativitatea strategică pentru a obține rezultate digitale măsurabile.',
    'aboutus.principle': 'Principiul Nostru',
    'aboutus.principle.desc': 'Integritate, precizie și performanță măsurabilă în fiecare proiect.',
    'aboutus.mission': 'Misiunea Noastră',
    'aboutus.mission.desc': 'Să sprijinim companiile prin tehnologie — simplificând procesele și stimulând creșterea durabilă prin inovație și date.',
    'aboutus.vision': 'Viziunea Noastră',
    'aboutus.vision.desc': 'Să devenim un partener digital global de încredere, recunoscut pentru calitate, inovație și succes măsurabil.',
    
    // Hero
    'hero.badge': 'Excență Digitală din 2020',
    'hero.subtitle': 'Virtus Digital',
    'hero.title1': 'Creăm Experiențe Digitale',
    'hero.title2': 'Care Conectează.',
    'hero.title.index1': 'Creăm Experiențe',
    'hero.title.index2': 'Digitale Care Conectează.',
    'hero.description1': 'Virtus Digital ajută brandurile să crească cu strategie, design și creativitate bazată pe date.',
    'hero.description2': 'Transformă-ți viziunea în realitate digitală.',
    'hero.description.index': 'Transformă-ți viziunea în realitate digitală cu design strategic, dezvoltare de vârf și marketing bazat pe date care oferă rezultate măsurabile.',
    'hero.cta1': 'Vezi Lucrările Noastre',
    'hero.cta2': 'Să Vorbim',
    'hero.cta.explore': 'Explorează Serviciile Noastre',
    'hero.cta.start': 'Începe Proiectul Tău',
    
    // Index Page
    'index.services.title': 'Acolo unde tehnologia întâlnește performanța.',
    'index.services.subtitle1': 'De la cod la campanii — echipa noastră creează ecosisteme digitale complete, concepute să performeze, să crească și să inspire.',
    'index.services.more': 'Și acesta este doar începutul. Oferim 5 servicii principale proiectate să acopere fiecare aspect al prezenței tale digitale.',
    'index.services.explore': 'Explorează Toate Serviciile',
    'index.services.learn': 'Află Mai Mult',
    
    // Index Featured Services
    'index.service.digital.tagline': 'Campanii concentrate pe performanță',
    'index.service.web.tagline': 'Proiecte web adaptate obiectivelor tale',
    'index.service.software.tagline': 'Digitalizează procesele tale',
    'index.service.seo.tagline': 'Crește-ți vizibilitatea organică',
    
    'index.portfolio.title': 'Rezultate demonstrate. Impact real.',
    'index.portfolio.subtitle1': 'De la campanii publicitare de înaltă performanță la sisteme personalizate — transformăm ideile în creștere măsurabilă.',
    'index.portfolio.more': 'Acestea sunt doar 3 din cele peste 700 de proiecte de succes. Fiecare reprezintă o provocare unică, o soluție creativă și un client mulțumit.',
    'index.portfolio.view': 'Vezi Portofoliul Nostru Complet',
    'index.portfolio.3d.title': 'Galerie Proiecte 3D',
    'index.portfolio.click': 'Apasă pentru a vizita',
    
    'index.why.title': 'De Ce Să Ne Alegi',
    'index.why.subtitle': 'Nu suntem doar o altă agenție digitală. Suntem povestitori, rezolvatori de probleme și hackeri ai creșterii într-unul singur.',
    
    // Core Values
    'index.why.values.title': 'Valori și Mentalitate',
    'index.why.values.integrity.title': 'Integritate Înainte de Toate',
    'index.why.values.integrity.desc': 'Spunem ce este necesar, nu doar ce se vinde. Înțelegem nevoile reale ale clienților noștri și oferim cele mai potrivite soluții.',
    'index.why.values.customer.title': 'Abordare Centrată pe Client',
    'index.why.values.customer.desc': 'Fiecare proiect începe prin înțelegerea obiectivelor voastre. Succesul vostru este succesul nostru, iar această abordare este prioritatea noastră în fiecare decizie.',
    'index.why.values.passion.title': 'Pasiune în Fiecare Detaliu',
    'index.why.values.passion.desc': 'Iubim ceea ce facem, iar asta se vede. Vă puteți vedea pasiunea și standardele de calitate în fiecare proiect.',
    
    // Expertise
    'index.why.expertise.title': 'Expertiză și Competență',
    'index.why.expertise.google.title': 'Partener Google Certificat',
    'index.why.expertise.google.desc': 'Expertiză recunoscută în performance marketing. Ca partener oficial Google, aplicăm cele mai actualizate strategii.',
    'index.why.expertise.team.title': 'Echipă Full-Stack',
    'index.why.expertise.team.desc': 'Specializați în mai multe tehnologii, de la front-end la back-end. Creăm soluții puternice și scalabile cu tehnologii moderne.',
    'index.why.expertise.experience.title': 'Experiență în Mai Multe Domenii',
    'index.why.expertise.experience.desc': 'Adaptăm soluțiile digitale pentru sănătate, construcții, turism și multe altele. Dezvoltăm strategii personalizate înțelegând nevoile fiecărui sector.',
    
    // How We Work
    'index.why.work.title': 'Cum Lucrăm',
    'index.why.work.endtoend.title': 'Livrare Completă',
    'index.why.work.endtoend.desc': 'De la idee la lansare, totul gestionat intern. Acoperim totul de la design la dezvoltare, de la marketing la optimizare.',
    'index.why.work.agile.title': 'Agil și Bazat pe Date',
    'index.why.work.agile.desc': 'Construim, testăm și optimizăm pentru rezultate măsurabile. Fiecare decizie este susținută de date și continuu optimizată.',
    'index.why.work.longterm.title': 'Abordare pe Termen Lung',
    'index.why.work.longterm.desc': 'Oferim sprijin și optimizare continuă. Nu livrăm doar proiecte, susținem creșterea voastră continuă.',
    
    // What Defines Us
    'index.why.defines.title': 'Ce Ne Definește',
    'index.why.defines.honest.title': 'Colaborare Onestă',
    'index.why.defines.honest.desc': 'Recomandăm doar ceea ce aduce valoare reală. Nu ne concentrăm doar pe vânzări, ci pe o abordare bazată pe valoare.',
    'index.why.defines.trusted.title': 'Parteneriate de Încredere',
    'index.why.defines.trusted.desc': 'Succesul nostru crește odată cu al vostru. Creștem împreună construind relații pe termen lung.',
    'index.why.defines.creation.title': 'Bucurie în Creație',
    'index.why.defines.creation.desc': 'Ne bucurăm să vedem clienți fericiți. Fiecare proiect este pentru noi o oportunitate de pasiune și creativitate.',
    
    // CTA
    'index.why.cta.title': 'Vrei să știi mai multe despre echipa noastră, procesul nostru și ce ne motivează?',
    'index.why.cta.subtitle': 'Ne-ar plăcea să împărtășim povestea noastră cu tine.',
    'index.why.cta.button': 'Află Mai Multe Despre Noi',
    
    'index.testimonials.title': 'Rezultate demonstrate. Impact real.',
    'index.testimonials.subtitle': 'De la campanii publicitare de înaltă performanță la sisteme personalizate — transformăm ideile în creștere măsurabilă.',
    'index.testimonials.more': 'Acestea sunt doar câteva din poveștile noastre de succes. Am ajutat sute de afaceri să obțină rezultate similare—și chiar mai bune. De la startup-uri la întreprinderi stabilite, clienții noștri raportează în mod constant îmbunătățiri dramatice în performanța lor digitală.',
    'index.testimonials.cta': 'Citește Mai Multe Povești de Succes',
    
    'index.cta.title': 'Gata să-ți Transformi Prezența Digitală?',
    'index.cta.subtitle': 'Să discutăm despre cum te putem ajuta să-ți atingi obiectivele de afaceri și să obții rezultate reale. Alătură-te la peste 700 de branduri de succes care se încred în noi pentru transformarea lor digitală.',
    'index.cta.start': 'Începe Proiectul Tău',
    'index.cta.view': 'Vezi Lucrările Noastre',
    
    // New Homepage Section
    'homepage.new.title': 'Build with Virtue, Perform with Data',
    'homepage.new.subtitle': 'O echipă de ingineri, strategi și creatori care dezvoltă tehnologie și marketing ce oferă rezultate reale.',
    'homepage.new.desc1': 'Virtus Digital este o companie de tehnologie și marketing care oferă ecosisteme digitale complete — de la site-uri web personalizate și CRM-uri până la publicitate și analiză la nivel Google. Ca agenție Google Partner, combinăm 15 ani de experiență, precizia tehnologică și marketingul bazat pe date pentru a ajuta brandurile să crească inteligent.',
    'homepage.new.desc2': '',
    'homepage.new.button': 'Află Mai Mult',
    
    // Trusted Partner Section
    'homepage.trusted.title': 'Partenerul tău digital de încredere – De la cod la conversie',
    'homepage.trusted.desc1': 'Virtus Digital este o companie de tehnologie și marketing care oferă ecosisteme digitale complete — de la site-uri web personalizate și CRM-uri până la publicitate și analiză la nivel Google. Ca agenție Google Partner, combinăm 15 ani de experiență, precizia tehnologică și marketingul bazat pe date pentru a ajuta brandurile să crească inteligent.',
    'homepage.trusted.desc2': 'Fondată în 2010, extinsă sub marca Digitalize Cyprus în 2022 și reorganizată ca Virtus Digital în 2024, compania oferă acum servicii în Europa și Asia. Echipa noastră multidisciplinară creează soluții scalabile și măsurabile care transformă investițiile digitale în creștere reală.',
    'homepage.trusted.button': 'Află Mai Mult',
    
    // Portfolio Page
    'portfolio.page.title': 'Portofoliul Nostru',
    'portfolio.page.subtitle': 'Ajutăm mai mult de ',
    'portfolio.page.subtitle.bold': '700+ branduri',
    'portfolio.page.subtitle2': ' din întreaga lume să-și mărească cifra de afaceri cu site-uri web performante și experiențe digitale.',
    'portfolio.stats.projects': 'Proiecte Livrate',
    'portfolio.stats.satisfaction': 'Satisfacția Clientului',
    'portfolio.stats.roi': 'Creștere ROI Medie',
    'portfolio.dialog.client': 'Client',
    'portfolio.dialog.duration': 'Durată',
    'portfolio.dialog.result': 'Rezultat',
    'portfolio.dialog.description': 'Descrierea Proiectului',
    'portfolio.dialog.goal': 'Obiectivul Proiectului',
    'portfolio.dialog.technologies': 'Tehnologii Folosite',
    'portfolio.dialog.visit': 'Vizitează Site-ul Web',
    'portfolio.cta.title': 'Vrei să Fii Următoarea Noastră Poveste de Succes?',
    'portfolio.cta.subtitle': 'Să creăm ceva extraordinar împreună. Ia legătura cu noi pentru a discuta proiectul tău.',
    'portfolio.cta.button': 'Începe Proiectul Tău',
    
    // About Page
    'about.page.title': 'Cine Suntem',
    'about.page.subtitle': 'Suntem mai mult decât o agenție digitală — suntem partenerul tău de creștere, dedicat să-ți transforme viziunea în realitate digitală.',
    'about.page.desc1': 'La Virtus Digital, credem în puterea transformării digitale. Echipa noastră de strategiști creativi, designeri și dezvoltatori lucrează împreună pentru a crea experiențe care nu doar arată frumos, ci oferă rezultate măsurabile.',
    'about.page.desc2': 'Fondată pe principiile creativității, preciziei și inovației, am ajutat sute de branduri să-și stabilească prezența digitală și să-și atingă obiectivele de creștere. De la startup-uri la întreprinderi stabilite, aducem același nivel de dedicație și expertiză la fiecare proiect.',
    'about.stats.projects': 'Proiecte Finalizate',
    'about.stats.clients': 'Clienți Fericiți',
    'about.stats.experience': 'Ani de Experiență',
    'about.stats.satisfaction': 'Rata de Satisfacție',
    'about.values.title': 'Valorile Noastre',
    'about.values.subtitle': 'Principiile care ghidează tot ce facem',
    'about.value.innovation': 'Inovație',
    'about.value.innovation.desc': 'Rămânem înaintea tendințelor și adoptăm tehnologii noi pentru a oferi soluții de vârf.',
    'about.value.excellence': 'Excență',
    'about.value.excellence.desc': 'Calitatea nu este negociabilă. Aspirăm la perfecțiune în fiecare proiect pe care îl întreprindem.',
    'about.value.collaboration': 'Colaborare',
    'about.value.collaboration.desc': 'Succesul tău este succesul nostru. Lucrăm ca parteneri, nu doar ca furnizori.',
    'about.value.passion': 'Pasiune',
    'about.value.passion.desc': 'Iubim ceea ce facem, și se vede în energia și creativitatea pe care le aducem la fiecare proiect.',
    'about.process.title': 'Procesul Nostru',
    'about.process.subtitle': 'O metodologie dovedită care oferă rezultate de fiecare dată',
    'about.process.1.title': 'Descoperire & Cercetare',
    'about.process.1.desc': 'Săpăm adânc în afacerea ta, audiență și obiective pentru a înțelege ce te face unic și de ce au nevoie clienții tăi.',
    'about.process.2.title': 'Strategie & Planificare',
    'about.process.2.desc': 'Bazându-ne pe insights, creăm o strategie personalizată cu obiective clare, cronologii și KPI pentru a măsura succesul.',
    'about.process.3.title': 'Design & Dezvoltare',
    'about.process.3.desc': 'Echipa noastră creativă aduce strategia la viață cu designuri uimitoare și dezvoltare robustă care depășește așteptările.',
    'about.process.4.title': 'Lansare & Optimizare',
    'about.process.4.desc': 'Lansăm proiectul tău cu precizie, apoi monitorizăm și optimizăm continuu pentru performanță maximă și ROI.',
    'about.team.title': 'Întâlnește Echipa Noastră',
    'about.team.subtitle': 'Profesioniști talentați dedicați succesului tău',
    'about.testimonials.page.title': 'Ce Spun Clienții Noștri',
    'about.testimonials.page.subtitle': 'Nu crede doar cuvântul nostru — ascultă de la cei pe care i-am ajutat să aibă succes',
    'about.cta.page.title': 'Gata să Lucrezi cu Noi?',
    'about.cta.page.subtitle': 'Să discutăm despre cum te putem ajuta să-ți atingi obiectivele digitale.',
    'about.cta.page.button': 'Ia Legătura',
    
    // Blog Page
    'blog.page.title': 'Blogul Nostru',
    'blog.page.subtitle': 'Insights, strategii și cele mai noi tendințe în marketingul digital. Rămâi informat și rămâi înainte.',
    'blog.featured': 'În Evidență',
    'blog.author': 'Autor',
    'blog.read-time': 'citire',
    'blog.read-article': 'Citește Articolul',
    'blog.newsletter.title': 'Abonează-te la Newsletter-ul Nostru',
    'blog.newsletter.subtitle': 'Primește cele mai noi insights, sfaturi și strategii direct în cutia ta poștală.',
    'blog.newsletter.placeholder': 'Introdu email-ul tău',
    'blog.newsletter.button': 'Abonează-te',
    
    // Contact Page
    'contact.page.title': 'Să Lucrăm Împreună',
    'contact.page.subtitle': 'Gata să-ți transformi prezența digitală? Ia legătura cu noi astăzi și să creăm ceva extraordinar.',
    'contact.phone': 'Telefon',
    'contact.email.label': 'Email',
    'contact.office': 'Birou',
    'contact.hours': 'Ore de Lucru',
    'contact.hours.days': 'Luni - Vineri',
    'contact.hours.time': '9:00 - 18:00',
    'contact.form.title': 'Trimite-ne un Mesaj',
    'contact.form.subtitle': 'Completează formularul de mai jos și îți vom răspunde în 24 de ore.',
    'contact.form.name': 'Nume *',
    'contact.form.name.placeholder': 'Numele Tău',
    'contact.form.email.label': 'Email *',
    'contact.form.email.placeholder': 'emailul.tau@exemplu.com',
    'contact.form.phone': 'Telefon',
    'contact.form.phone.placeholder': '+40 123 456 789',
    'contact.form.subject': 'Subiect *',
    'contact.form.subject.placeholder': 'Solicitare Proiect',
    'contact.form.message.label': 'Mesaj *',
    'contact.form.message.placeholder': 'Spune-ne despre proiectul tău...',
    
    // Services
    'services.title': 'Serviciile Noastre',
    'services.subtitle': 'Soluții digitale cuprinzătoare pentru a-ți ridica brandul și a obține rezultate măsurabile.',
    'services.what-we-do': 'Ce Facem Cel Mai Bine',
    'services.skills-title': 'Abilități & Servicii',
    'services.key-services': 'Servicii Cheie:',
    'services.what-we-offer': 'Ce Oferim:',
    'services.get-started': 'Începe',
    
    // Skills
    'skills.frontend': 'Frontend',
    'skills.frontend.desc': 'React, Next.js, TypeScript, TailwindCSS, Performanță & Accesibilitate.',
    'skills.backend': 'Backend',
    'skills.backend.desc': 'Node.js, Python (FastAPI), PHP (Laravel), REST/GraphQL, Microservicii.',
    'skills.data': 'Date & Cloud',
    'skills.data.desc': 'PostgreSQL, Redis, Docker, AWS, CI/CD, Observabilitate.',
    'skills.quality': 'Calitate',
    'skills.quality.desc': 'Testare Automată, Code Review, Securitate și Analiză Performanță.',
    
    // Service Details
    'service.digital-marketing.title': 'Marketing Digital',
    'service.digital-marketing.desc': 'Creșteți inteligent cu publicitate bazată pe date',
    'service.digital-marketing.details': 'Partener Google certificat. Peste 15 ani de experiență în marketingul digital pe Search, Display, YouTube, Meta și multe altele.',
    'service.digital-marketing.features': 'Google Ads (Search, Display, YouTube, Shopping) • Campanii Meta, TikTok, LinkedIn • Segmentare avansată a publicului, remarketing și conversii offline • Optimizare săptămânală și rapoarte transparente',
    
    'service.web-dev.title': 'Design Web & Dezvoltare',
    'service.web-dev.desc': 'Site-uri web proiectate pentru performanță',
    'service.web-dev.details': 'De la WordPress la platforme complet personalizate — construim site-uri responsive, optimizate SEO și multilingve care transformă vizitatorii în clienți.',
    'service.web-dev.features': 'WordPress, WooCommerce, Shopify sau framework-uri personalizate • UX orientat pe mobil și viteză excelentă de încărcare • Arhitectură SEO și analitice integrate • Panouri de administrare ușor de utilizat',
    
    'service.custom-software.title': 'Dezvoltare Software Personalizat',
    'service.custom-software.desc': 'Cod creat pentru fluxul tău de lucru',
    'service.custom-software.details': 'Dezvoltăm sisteme personalizate — CRM, ERP, rezervări sau gestionare stocuri — construite exact pentru logica afacerii tale.',
    'service.custom-software.features': 'Platforme CRM și ERP • Sisteme de rezervare, inventar și urmărire a documentelor • Integrare API și terți (plăți, SMS, WhatsApp, CRM) • Arhitectură sigură și scalabilă cu jurnale de audit',
    
    'service.seo.title': 'Optimizare SEO',
    'service.seo.desc': 'Fii găsit înainte să te caute',
    'service.seo.details': 'Strategii SEO complete care combină excelența tehnică, conținutul inteligent și construirea autorității.',
    'service.seo.features': 'Audituri SEO tehnice și On-Page • Cercetare de cuvinte cheie și analiză concurențială • Optimizare conținut și planificare blog • SEO local pentru vizibilitate pe Google Maps',
    
    'service.social-media.title': 'Gestionare Social Media',
    'service.social-media.desc': 'Creativitate care conectează',
    'service.social-media.details': 'Gestionăm și dezvoltăm prezența ta socială prin conținut vizual, storytelling și strategie bazată pe performanță.',
    'service.social-media.features': 'Planificare lunară de conținut și producție creativă • Reels, stories, YouTube Shorts • Management comunitate și implicarea audienței • Analitice și optimizare continuă',
    
    'service.hosting-email.title': 'Servicii de Hosting și Email',
    'service.hosting-email.desc': 'Infrastructură Digitală De Încredere',
    'service.hosting-email.details': 'Soluții de hosting rapide, sigure și scalabile cu servicii email profesionale.',
    'service.hosting-email.features': 'Hosting SSD, certificate SSL • Hosting email și email de afaceri • Suport tehnic 24/7 • Servicii de backup și securitate',
    
    // CTA
    'cta.title': 'Gata să-ți Transformi Prezența Digitală?',
    'cta.subtitle': 'Să discutăm despre cum serviciile noastre te pot ajuta să-ți atingi obiectivele de afaceri.',
    'cta.button': 'Contactează-ne Astăzi',
    
    // About
    'about.title': 'Cine Suntem',
    'about.subtitle': 'Suntem mai mult decât o agenție digitală — suntem partenerul tău de creștere.',
    'about.desc1': 'La Virtus Digital, credem în puterea transformării digitale. Echipa noastră de strategiști creativi, designeri și dezvoltatori lucrează împreună pentru a crea experiențe care nu doar arată frumos, ci oferă rezultate măsurabile.',
    'about.desc2': 'Fondată pe principiile creativității, preciziei și inovației, am ajutat zeci de branduri să-și stabilească prezența digitală și să-și atingă obiectivele de creștere.',
    'about.projects': 'Proiecte Finalizate',
    'about.clients': 'Clienți Fericiți',
    'about.experience': 'Ani de Experiență',
    'about.award': 'Premiat',
    'about.award.desc': 'Recunoscut pentru excelența în inovația digitală',
    'about.team': 'Echipă Expertă',
    'about.team.desc': 'Profesioniști talentați dedicați succesului tău',
    'about.delivery': 'Livrare Rapidă',
    'about.delivery.desc': 'Procese agile care țin proiectul tău în mișcare',
    
    // Portfolio
    'portfolio.title': 'Lucrările Noastre',
    'portfolio.subtitle': 'Ajutăm mai mult de ',
    'portfolio.subtitle.bold': '700+ branduri',
    'portfolio.subtitle2': ' din întreaga lume să-și mărească cifra de afaceri cu site-uri web performante și experiențe digitale.',
    'portfolio.client': 'Client',
    'portfolio.result': 'Rezultat',
    'portfolio.goal': 'Obiectivul Proiectului',
    'portfolio.visit': 'Vizitează Site-ul Web',
    
    // Portfolio Projects
    'project.erm.title': 'ERM Rent a Car',
    'project.erm.client': 'ERM',
    'project.erm.goal': 'Site web închiriere auto cu vitrina flotă și rezervare online',
    'project.erm.result': '+42% conversii rezervări după lansare',
    
    'project.ravena.title': 'Ravenalab',
    'project.ravena.client': 'Agenție de Turism',
    'project.ravena.goal': 'Pachete de călătorie, pagini destinații și capturare lead-uri',
    'project.ravena.result': '3x creștere solicitări calificate',
    
    'project.fertina.title': 'Fertina IVF',
    'project.fertina.client': 'Clinica de Fertilitate',
    'project.fertina.goal': 'Site web clinică cu servicii, povești de succes și solicitare programări',
    'project.fertina.result': '+65% solicitări programări lună de lună',
    
    'project.virtus.title': 'Virtus Digital',
    'project.virtus.client': 'Virtus Digital',
    'project.virtus.goal': 'Site web corporativ profesional pentru agenție digitală',
    'project.virtus.result': 'Creștere conștientizare brand și extindere portofoliu clienți',
    
    'project.creative.title': 'Creative Solutions',
    'project.creative.client': 'Creative Solutions',
    'project.creative.goal': 'Site portofoliu modern pentru soluții creative',
    'project.creative.result': 'Prezentare eficientă proiecte creative și atracție clienți',
    
    'project.tech.title': 'Tech Innovations',
    'project.tech.client': 'Tech Innovations',
    'project.tech.goal': 'Platformă web inovativă pentru companie tehnologică',
    'project.tech.result': 'Accent pe leadership tehnologic și interes investitori',
    
    // Blog
    'blog.title': 'Ultimele Insights',
    'blog.subtitle': 'Gânduri, tendințe și strategii de la echipa noastră de experți.',
    'blog.read-more': 'Citește Mai Mult',
    
    'blog.post1.title': 'Viitorul Marketingului Digital în 2025',
    'blog.post1.date': '15 Martie 2025',
    'blog.post1.excerpt': 'Explorează cele mai noi tendințe care modelează peisajul marketingului digital și cum brandurile pot rămâne înainte.',
    'blog.post1.category': 'Marketing',
    
    'blog.post2.title': 'Construirea unei Strategii Social Media Care Funcționează',
    'blog.post2.date': '10 Martie 2025',
    'blog.post2.excerpt': 'Învață cum să creezi conținut captivant și să construiești conexiuni semnificative cu audiența ta.',
    'blog.post2.category': 'Social Media',
    
    'blog.post3.title': 'Identitatea Brandului: Mai Mult Decât un Logo',
    'blog.post3.date': '5 Martie 2025',
    'blog.post3.excerpt': 'Descoperă de ce identitatea cuprinzătoare a brandului merge dincolo de designul vizual pentru a crea un impact durabil.',
    'blog.post3.category': 'Branding',
    
    // Contact
    'contact.title': 'Să Lucrăm Împreună',
    'contact.subtitle': 'Gata să-ți transformi prezența digitală? Ia legătura cu noi astăzi.',
    'contact.info': 'Informații de Contact',
    'contact.follow': 'Urmărește-ne',
    'contact.name': 'Numele Tău',
    'contact.email': 'Email-ul Tău',
    'contact.message': 'Mesajul Tău',
    'contact.send': 'Trimite Mesaj',
    'contact.sending': 'Se trimite...',
    'contact.success.title': 'Mesaj trimis!',
    'contact.success.desc': 'Îți vom răspunde cât mai curând posibil.',
    'contact.error.title': 'Eroare de Validare',
    
    // Footer
    'footer.tagline': 'Transformăm viziuni în realitate digitală cu creativitate, precizie și inovație.',
    'footer.quick-links': 'Link-uri Rapide',
    'footer.services': 'Serviciile Noastre',
    'footer.contact-us': 'Ia Legătura',
    'footer.rights': '© 2025 Virtus Digital. Toate drepturile rezervate.',
    'footer.privacy': 'Politica de Confidențialitate',
    'footer.terms': 'Termenii de Serviciu',
    
    'footer.service1': 'Publicitate Digitală',
    'footer.service2': 'Gestionare Social Media',
    'footer.service3': 'Strategia Brandului',
    'footer.service4': 'Dezvoltare Web',
    'footer.service5': 'SEO & Conținut',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'tr' || saved === 'en' || saved === 'it' || saved === 'ro') ? (saved as Language) : 'tr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

