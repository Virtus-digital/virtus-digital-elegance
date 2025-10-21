import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'en';

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
    
    // Index Page
    'index.services.title': 'En İyi Yaptığımız İşler',
    'index.services.subtitle1': 'Sadece web siteleri yapmıyor veya reklam yönetmiyoruz. Hedef kitlenizin markanızı nasıl algıladığını ve etkileşime geçtiğini dönüştüren kapsamlı dijital stratejiler oluşturuyoruz.',
    'index.services.subtitle2': 'İlk konseptten son uygulamaya kadar her adımda yanınızdayız—zorlukları fırsatlara, fikirleri ölçülebilir sonuçlara dönüştürüyoruz.',
    'index.services.more': 'Ve bu sadece başlangıç. Dijital varlığınızın her yönünü kapsamak için tasarlanmış 5 ana hizmet sunuyoruz.',
    'index.services.explore': 'Tüm Hizmetleri Keşfedin',
    'index.services.learn': 'Daha Fazla Bilgi',
    
    // Index Featured Services
    'index.service.digital.tagline': 'Performans odaklı kampanyalar',
    'index.service.web.tagline': 'Hedeflerinize uygun web projeleri',
    'index.service.software.tagline': 'Süreçlerinizi dijitalleştirin',
    'index.service.seo.tagline': 'Organik görünürlüğünüzü artırın',
    
    'index.portfolio.title': 'Konuşan Başarı Hikayeleri',
    'index.portfolio.subtitle1': 'Rakamlar yalan söylemez. Dünya çapında 700\'den fazla markaya dijital varlıklarını dönüştürme ve olağanüstü büyüme elde etmede yardımcı olduk. İşte en gurur duyduğumuz anlardan bazıları.',
    'index.portfolio.subtitle2': 'Her proje bir ortaklıktır. Her başarı paylaşılır. Bir sonraki başarı hikayenizi birlikte yazalım.',
    'index.portfolio.more': 'Bunlar 700+ başarılı projemizden sadece 3 tanesi. Her biri benzersiz bir meydan okuma, yaratıcı bir çözüm ve memnun bir müşteriyi temsil ediyor.',
    'index.portfolio.view': 'Tüm Portföyü Görün',
    
    'index.why.title': 'Neden Farklıyız',
    'index.why.subtitle': 'Sadece başka bir dijital ajans değiliz. Hikaye anlatıcıları, problem çözücüler ve büyüme hackerleri bir aradayız.',
    'index.why.award.title': 'Ödüllü Mükemmellik',
    'index.why.award.desc': 'İşimiz kendini gösteriyor. Dijital pazarlama, tasarım düşüncesi ve veri odaklı stratejilerdeki yenilikçi yaklaşımlarımızla sektör liderleri tarafından tanındık. Ancak ödüller sadece pasta üzerindeki çilektir—gerçekten önemli olan işletmeniz için yarattığımız etkidir.',
    'index.why.team.title': 'Gerçekten Önemseyen Bir Ekip',
    'index.why.team.desc': 'Yüzsüz bir şirket değiliz. Başarınızı gerçekten önemseyen yaratıcılar, stratejistler, geliştiriciler ve pazarlamacılardan oluşan tutkulu bir ekibiz. Sizin kazanımlarınız bizim kazanımlarımız. Zorluklarınız bizim misyonlarımız oluyor. İlk günden lansman gününe ve ötesine kadar bu işte birlikteyiz.',
    'index.why.results.title': 'Ölçebileceğiniz Sonuçlar',
    'index.why.results.desc': 'Güzel tasarımlar harika ama sonuçsuz hiçbir şey ifade etmezler. Bu yüzden yaptığımız her şey verilerle desteklenir, titizlikle test edilir ve sürekli optimize edilir. Sadece büyüme vaat etmiyoruz—onu sunuyor, takip ediyor ve alt satırınız için önemli olan gerçek metriklerle kanıtlıyoruz.',
    'index.why.more': 'Ekibimiz, sürecimiz ve bizi harekete geçiren şeyler hakkında daha fazla bilgi edinmek ister misiniz?',
    'index.why.more.bold': 'Hikayemizi sizinle paylaşmaktan mutluluk duyarız.',
    'index.why.cta': 'Ekiple Tanışın',
    
    'index.testimonials.title': 'Müşterilerimiz Ne Diyor',
    'index.testimonials.subtitle': 'Sadece bizim sözümüze güvenmeyin. İşte bizimle çalışma hakkında gerçek işletme sahiplerinin söyledikleri.',
    'index.testimonials.more': 'Bunlar başarı hikayelerimizden sadece birkaçı. Yüzlerce işletmenin benzer—ve hatta daha iyi—sonuçlar elde etmesine yardımcı olduk. Yeni başlayanlardan yerleşik işletmelere kadar müşterilerimiz sürekli olarak dijital performanslarında dramatik iyileşmeler bildiriyor.',
    'index.testimonials.cta': 'Daha Fazla Başarı Hikayesi',
    
    'index.cta.title': 'Dijital Varlığınızı Dönüştürmeye Hazır mısınız?',
    'index.cta.subtitle': 'İş hedeflerinize ulaşmanıza ve gerçek sonuçlar elde etmenize nasıl yardımcı olabileceğimizi konuşalım. Dijital dönüşümlerine güvenen 700+ başarılı markaya katılın.',
    'index.cta.start': 'Projenize Başlayın',
    'index.cta.view': 'Çalışmalarımızı Görün',
    
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
    'service.digital-marketing.desc': 'Dünyanın en etkili dijital platformlarında performans odaklı reklam kampanyaları planlıyor, yönetiyor ve optimize ediyoruz. Google Partner uzmanlığı ile arama ağı, görüntülü reklam ağı, YouTube ve alışveriş kampanyalarında doğrulanmış deneyim.',
    'service.digital-marketing.details': 'Google Ads (Arama, Görüntülü, YouTube, Alışveriş) • Meta Reklamları (Facebook & Instagram) • TikTok Reklamları • LinkedIn Reklamları',
    'service.digital-marketing.features': 'Strateji, hedefleme ve yaratıcı içerikleri bir araya getirerek ölçülebilir sonuçlar ve yüksek ROI sağlıyoruz.',
    
    'service.web-dev.title': 'Web Geliştirme',
    'service.web-dev.desc': 'Hazır sistemlerden tamamen özel geliştirmeye kadar işletmenizin hedeflerine ve bütçesine uygun web projeleri üretiyoruz.',
    'service.web-dev.details': 'WordPress Siteler (Kurumsal, Landing, Blog) • E-Ticaret (OpenCart, WooCommerce, Shopify) • No-Code / Low-Code (Wix, Squarespace) • Özel Kodlu Siteler & Yönetim Panelleri',
    'service.web-dev.features': 'Tüm siteler mobil uyumlu, SEO dostu ve ölçeklenebilir.',
    
    'service.custom-software.title': 'Özel Yazılım Geliştirme',
    'service.custom-software.desc': 'Operasyonel ihtiyaçlarınızı analiz ederek süreçlerinizi dijitalleştiren, verimliliği artıran çözümler geliştiriyoruz.',
    'service.custom-software.details': 'CRM & ERP Sistemleri • Stok ve Envanter Yönetimi • Özel CMS • Rezervasyon / Randevu Sistemleri • 3. Parti Entegrasyonlar (Ödeme, SMS, CRM)',
    'service.custom-software.features': 'Operasyonlarınızla birlikte ölçeklenen özel yazılım çözümleri.',
    
    'service.seo.title': 'SEO (Arama Motoru Optimizasyonu)',
    'service.seo.desc': 'Teknik optimizasyon, içerik ve backlink stratejileri ile organik görünürlüğünüzü artırıyoruz.',
    'service.seo.details': 'On-page & Teknik SEO • Anahtar Kelime & Rakip Analizi • Yerel SEO (Haritalar & İşletme Profili) • İçerik Optimizasyonu & Blog Planlama',
    'service.seo.features': 'Uzun vadeli trafik ve dönüşüm odaklı yaklaşım.',
    
    'service.social-media.title': 'Sosyal Medya Yönetimi',
    'service.social-media.desc': 'Markanızın sosyal kimliğini yaratıcı içerik, tutarlı görseller ve etkileyici videolarla güçlendiriyoruz.',
    'service.social-media.details': 'Aylık İçerik Planlama & Takvim • Görsel Tasarım & Kısa Video (Reels, Hikaye) • YouTube & TikTok Video Prodüksiyon • Yorum & Mesaj Takibi • Performans Raporlama & Optimizasyon',
    'service.social-media.features': 'Tutarlı ve veri odaklı marka görünürlüğü.',
    
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
    
    // Index Page
    'index.services.title': 'What We Do Best',
    'index.services.subtitle1': 'We don\'t just build websites or run ads. We craft comprehensive digital strategies that transform how your audience perceives and interacts with your brand.',
    'index.services.subtitle2': 'From initial concept to final execution, we\'re with you every step of the way—turning challenges into opportunities and ideas into measurable results.',
    'index.services.more': 'And that\'s just the beginning. We offer 5 main services designed to cover every aspect of your digital presence.',
    'index.services.explore': 'Explore All Services',
    'index.services.learn': 'Learn More',
    
    // Index Featured Services
    'index.service.digital.tagline': 'Performance-focused campaigns',
    'index.service.web.tagline': 'Web projects tailored to your goals',
    'index.service.software.tagline': 'Digitize your processes',
    'index.service.seo.tagline': 'Increase your organic visibility',
    
    'index.portfolio.title': 'Success Stories That Speak',
    'index.portfolio.subtitle1': 'Numbers don\'t lie. We\'ve helped over 700 brands worldwide transform their digital presence and achieve remarkable growth. Here are some of our proudest moments.',
    'index.portfolio.subtitle2': 'Each project is a partnership. Each success is shared. Let\'s write your success story next.',
    'index.portfolio.more': 'These are just 3 of our 700+ successful projects. Each one represents a unique challenge, a creative solution, and a satisfied client.',
    'index.portfolio.view': 'See Our Complete Portfolio',
    
    'index.why.title': 'Why We\'re Different',
    'index.why.subtitle': 'We\'re not just another digital agency. We\'re storytellers, problem-solvers, and growth hackers rolled into one.',
    'index.why.award.title': 'Award-Winning Excellence',
    'index.why.award.desc': 'Our work speaks for itself. We\'ve been recognized by industry leaders for our innovative approaches to digital marketing, design thinking, and data-driven strategies. But awards are just the cherry on top—what really matters is the impact we create for your business.',
    'index.why.team.title': 'A Team That Actually Cares',
    'index.why.team.desc': 'We\'re not a faceless corporation. We\'re a passionate team of creatives, strategists, developers, and marketers who genuinely care about your success. Your wins are our wins. Your challenges become our missions. We\'re in this together, from day one to launch day and beyond.',
    'index.why.results.title': 'Results You Can Measure',
    'index.why.results.desc': 'Pretty designs are great, but they mean nothing without results. That\'s why everything we do is backed by data, tested rigorously, and optimized continuously. We don\'t just promise growth—we deliver it, track it, and prove it with real metrics that matter to your bottom line.',
    'index.why.more': 'Want to know more about our team, our process, and what makes us tick?',
    'index.why.more.bold': 'We\'d love to share our story with you.',
    'index.why.cta': 'Meet the Team',
    
    'index.testimonials.title': 'What Our Clients Say',
    'index.testimonials.subtitle': 'Don\'t just take our word for it. Here\'s what real business owners have to say about working with us.',
    'index.testimonials.more': 'These are just a few of our success stories. We\'ve helped hundreds of businesses achieve similar—and even better—results. From startups to established enterprises, our clients consistently report dramatic improvements in their digital performance.',
    'index.testimonials.cta': 'Read More Success Stories',
    
    'index.cta.title': 'Ready to Transform Your Digital Presence?',
    'index.cta.subtitle': 'Let\'s discuss how we can help you achieve your business goals and drive real results. Join 700+ successful brands who trust us with their digital transformation.',
    'index.cta.start': 'Start Your Project',
    'index.cta.view': 'View Our Work',
    
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
    'skills.frontend.desc': 'React, Next.js, TypeScript, TailwindCSS, Performans & Erişilebilirlik.',
    'skills.backend': 'Backend',
    'skills.backend.desc': 'Node.js, Python (FastAPI), PHP (Laravel), REST/GraphQL, Mikroservis.',
    'skills.data': 'Veri & Bulut',
    'skills.data.desc': 'PostgreSQL, Redis, Docker, AWS, CI/CD, Gözlemlenebilirlik.',
    'skills.quality': 'Kalite',
    'skills.quality.desc': 'Test Otomasyonu, Kod İncelemesi, Güvenlik ve Performans Analizi.',
    
    // Service Details
    'service.digital-marketing.title': 'Dijital Pazarlama',
    'service.digital-marketing.desc': 'Dünyanın en etkili dijital platformlarında performans odaklı reklam kampanyaları planlıyor, yönetiyor ve optimize ediyoruz. Google Partner uzmanlığı ile arama ağı, görüntülü reklam ağı, YouTube ve alışveriş kampanyalarında doğrulanmış deneyim.',
    'service.digital-marketing.details': 'Google Ads (Arama, Görüntülü, YouTube, Alışveriş) • Meta Reklamları (Facebook & Instagram) • TikTok Reklamları • LinkedIn Reklamları',
    'service.digital-marketing.features': 'Strateji, hedefleme ve yaratıcı içerikleri bir araya getirerek ölçülebilir sonuçlar ve yüksek ROI sağlıyoruz.',
    
    'service.web-dev.title': 'Web Geliştirme',
    'service.web-dev.desc': 'Hazır sistemlerden tamamen özel geliştirmeye kadar işletmenizin hedeflerine ve bütçesine uygun web projeleri üretiyoruz.',
    'service.web-dev.details': 'WordPress Siteler (Kurumsal, Landing, Blog) • E-Ticaret (OpenCart, WooCommerce, Shopify) • No-Code / Low-Code (Wix, Squarespace) • Özel Kodlu Siteler & Yönetim Panelleri',
    'service.web-dev.features': 'Tüm siteler mobil uyumlu, SEO dostu ve ölçeklenebilir.',
    
    'service.custom-software.title': 'Özel Yazılım Geliştirme',
    'service.custom-software.desc': 'Operasyonel ihtiyaçlarınızı analiz ederek süreçlerinizi dijitalleştiren, verimliliği artıran çözümler geliştiriyoruz.',
    'service.custom-software.details': 'CRM & ERP Sistemleri • Stok ve Envanter Yönetimi • Özel CMS • Rezervasyon / Randevu Sistemleri • 3. Parti Entegrasyonlar (Ödeme, SMS, CRM)',
    'service.custom-software.features': 'Operasyonlarınızla birlikte ölçeklenen özel yazılım çözümleri.',
    
    'service.seo.title': 'SEO (Arama Motoru Optimizasyonu)',
    'service.seo.desc': 'Teknik optimizasyon, içerik ve backlink stratejileri ile organik görünürlüğünüzü artırıyoruz.',
    'service.seo.details': 'On-page & Teknik SEO • Anahtar Kelime & Rakip Analizi • Yerel SEO (Haritalar & İşletme Profili) • İçerik Optimizasyonu & Blog Planlama',
    'service.seo.features': 'Uzun vadeli trafik ve dönüşüm odaklı yaklaşım.',
    
    'service.social-media.title': 'Sosyal Medya Yönetimi',
    'service.social-media.desc': 'Markanızın sosyal kimliğini yaratıcı içerik, tutarlı görseller ve etkileyici videolarla güçlendiriyoruz.',
    'service.social-media.details': 'Aylık İçerik Planlama & Takvim • Görsel Tasarım & Kısa Video (Reels, Hikaye) • YouTube & TikTok Video Prodüksiyon • Yorum & Mesaj Takibi • Performans Raporlama & Optimizasyon',
    'service.social-media.features': 'Tutarlı ve veri odaklı marka görünürlüğü.',
    
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
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'tr' || saved === 'en') ? saved : 'tr';
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

