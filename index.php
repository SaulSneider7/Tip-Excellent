<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tip Excellent Path S.A. | Ingeniería y Perforación Especializada</title>
    <!-- favicon -->
    <link rel="shortcut icon" href="./img/favicon.jpeg" type="image/x-icon">
    <!-- Librerías de Estilo (CDN) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Montserrat:wght@800;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!--Mis Estilos-->
    <link rel="stylesheet" href="style.css">
</head>

<body class="bg-white text-slate-900">

    <!-- NAVBAR -->
    <?php include('./components/Navbar.php'); ?>

    <!-- HERO SECTION -->
    <section id="inicio" class="relative h-screen flex items-center overflow-hidden bg-slate-950">
        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920"
            class="absolute inset-0 w-full h-full object-cover" alt="Maquinaria de Perforación">
        <div class="absolute inset-0 hero-overlay"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div class="max-w-3xl space-y-8">
                <span
                    class="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] animate-[fadeInUp_1s_ease]">Solidez
                    y Trayectoria</span>
                <h1
                    class="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase animate-[fadeInUp_1.2s_ease]">
                    Ingeniería <br><span class="text-amber-500 italic">de Excelencia</span></h1>
                <p class="text-xl text-slate-300 font-light leading-relaxed max-w-xl animate-[fadeInUp_1.4s_ease]">
                    Líderes en servicios de perforación mecanizada Raise Boring y HDD para la minería e industria pesada
                    con respaldo de expertos.</p>
                <div class="flex flex-wrap gap-5 pt-4 animate-[fadeInUp_1.6s_ease]">
                    <a href="#servicios"
                        class="px-10 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-500 transition-all shadow-xl shadow-amber-600/20 uppercase text-[11px] tracking-widest">Nuestras
                        Soluciones</a>
                    <a href="#contacto"
                        class="px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm uppercase text-[11px] tracking-widest">Hablar
                        con un Experto</a>
                </div>
            </div>
        </div>
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"><i
                class="fa-solid fa-chevron-down text-2xl"></i></div>
    </section>

    <!-- SOBRE NOSOTROS -->
    <section id="nosotros" class="py-32 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-20 items-center mb-32 reveal">
                <div class="space-y-8">
                    <span class="text-amber-600 font-bold uppercase tracking-widest text-xs">Identidad
                        Corporativa</span>
                    <h2 class="text-5xl font-black text-slate-900 leading-tight">Liderando el camino con <br><span
                            class="text-amber-600">Experiencia y Pasión</span></h2>
                    <p class="text-lg text-slate-600 leading-relaxed">TIP EXCELLENT PATH S.A es una empresa joven en el
                        mercado que combina la agilidad operativa con un respaldo técnico de más de 15 años en el rubro.
                        Nuestros resultados han alcanzado y superado las expectativas de nuestros clientes en
                        productividad y performance.</p>
                    <div class="grid grid-cols-2 gap-6 pt-4">
                        <div class="p-8 bg-slate-50 rounded-[2.5rem] border-l-4 border-amber-500 shadow-sm">
                            <h4 class="text-3xl font-black text-slate-900 mb-1">100%</h4>
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                                Personal <br>Calificado</p>
                        </div>
                        <div class="p-8 bg-slate-50 rounded-[2.5rem] border-l-4 border-amber-500 shadow-sm">
                            <h4 class="text-3xl font-black text-slate-900 mb-1">+15a</h4>
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                                Trayectoria <br>Técnica</p>
                        </div>
                    </div>
                </div>
                <div class="relative group">
                    <div
                        class="absolute -inset-4 bg-amber-500/5 rounded-[4rem] blur-2xl group-hover:bg-amber-500/10 transition-all">
                    </div>
                    <img src="./img/nuestra_trayectoria.webp"
                        class="relative rounded-[3rem] shadow-2xl h-[550px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        alt="Consultoría Técnica">
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-10 mb-32 reveal">
                <div class="p-12 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                    <i
                        class="fa-solid fa-rocket absolute -top-10 -right-10 text-[15rem] opacity-5 group-hover:rotate-12 transition-transform duration-1000"></i>
                    <h3 class="text-3xl font-bold mb-6 text-amber-500">Nuestra Misión</h3>
                    <p class="text-slate-400 text-lg leading-relaxed italic relative z-10">"En TIP EXCELLENT PATH S.A
                        nos enfocamos en empoderar a nuestros colaboradores para permitirles que proporcionen a nuestros
                        clientes la mejor experiencia de nuestros servicios ofreciendo soluciones innovadoras en cada
                        uno de sus proyectos."
                    </p>
                </div>
                <div class="p-12 bg-amber-600 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                    <i
                        class="fa-solid fa-eye absolute -top-10 -right-10 text-[15rem] opacity-10 group-hover:-rotate-12 transition-transform duration-1000"></i>
                    <h3 class="text-3xl font-bold mb-6">Nuestra Visión</h3>
                    <p class="text-amber-50 text-sm leading-relaxed relative z-10">TIP EXCELLENT PATH S.A será líder de
                        servicios en ingeniería y consultoría en el mundo a través de la calidad elaborados con una
                        pasión por la innovación orientadas al cliente enfocados en la capacitación, estaremos despejado
                        a la diversidad y proveeremos oportunidades de crecimiento para nuestros asociados y
                        colaboradores, guiaremos nuestros servicios a la industria diversa en la aplicación de las
                        tecnologías apropiadas operando con los más altos niveles de ética y observancia a través de un
                        enfoque multidisciplinario, creando valor para nuestros accionistas con resultados operacionales
                        positivos con responsabilidad individual y corporativo salvaguardando el medio ambiente y las
                        comunidades donde operamos.
                    </p>
                </div>
            </div>

            <!-- VALORES -->
            <div class="space-y-16 reveal">
                <div class="text-center">
                    <h3 class="text-3xl font-black text-slate-900 uppercase tracking-tight">Nuestros Valores
                    </h3>
                    <div class="w-20 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
                    <!-- Valores Generados -->
                    <div
                        class="val-card p-8 bg-slate-50 rounded-[2rem] text-center hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-slate-100">
                        <div
                            class="val-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-4 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all">
                            <i class="fa-solid fa-scale-balanced text-xl"></i>
                        </div>
                        <h5 class="text-[10px] font-black uppercase tracking-widest text-slate-900">Ética y Moral</h5>
                    </div>
                    <div
                        class="val-card p-8 bg-slate-50 rounded-[2rem] text-center hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-slate-100">
                        <div
                            class="val-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-4 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all">
                            <i class="fa-solid fa-handshake-angle text-xl"></i>
                        </div>
                        <h5 class="text-[10px] font-black uppercase tracking-widest text-slate-900">Honestidad</h5>
                    </div>
                    <div
                        class="val-card p-8 bg-slate-50 rounded-[2rem] text-center hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-slate-100">
                        <div
                            class="val-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-4 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all">
                            <i class="fa-solid fa-calendar-check text-xl"></i>
                        </div>
                        <h5 class="text-[10px] font-black uppercase tracking-widest text-slate-900">Fiabilidad</h5>
                    </div>
                    <div
                        class="val-card p-8 bg-slate-50 rounded-[2rem] text-center hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-slate-100">
                        <div
                            class="val-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-4 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all">
                            <i class="fa-solid fa-comments text-xl"></i>
                        </div>
                        <h5 class="text-[10px] font-black uppercase tracking-widest text-slate-900">Franqueza</h5>
                    </div>
                    <div
                        class="val-card p-8 bg-slate-50 rounded-[2rem] text-center hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-slate-100">
                        <div
                            class="val-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-4 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all">
                            <i class="fa-solid fa-puzzle-piece text-xl"></i>
                        </div>
                        <h5 class="text-[10px] font-black uppercase tracking-widest text-slate-900">Coherencia</h5>
                    </div>
                    <div
                        class="val-card p-8 bg-slate-50 rounded-[2rem] text-center hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-slate-100">
                        <div
                            class="val-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-4 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all">
                            <i class="fa-solid fa-award text-xl"></i>
                        </div>
                        <h5 class="text-[10px] font-black uppercase tracking-widest text-slate-900">Calidad</h5>
                    </div>
                    <div
                        class="val-card p-8 bg-slate-50 rounded-[2rem] text-center hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-slate-100">
                        <div
                            class="val-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-4 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all">
                            <i class="fa-solid fa-lightbulb text-xl"></i>
                        </div>
                        <h5 class="text-[10px] font-black uppercase tracking-widest text-slate-900">Innovación</h5>
                    </div>
                    <div
                        class="val-card p-8 bg-slate-50 rounded-[2rem] text-center hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-slate-100">
                        <div
                            class="val-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-4 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all">
                            <i class="fa-solid fa-users-gear text-xl"></i>
                        </div>
                        <h5 class="text-[10px] font-black uppercase tracking-widest text-slate-900">Trabajo Equipo</h5>
                    </div>
                    <div
                        class="val-card p-8 bg-slate-50 rounded-[2rem] text-center hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-slate-100">
                        <div
                            class="val-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-4 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all">
                            <i class="fa-solid fa-heart-pulse text-xl"></i>
                        </div>
                        <h5 class="text-[10px] font-black uppercase tracking-widest text-slate-900">Confianza</h5>
                    </div>
                    <div
                        class="val-card p-8 bg-slate-50 rounded-[2rem] text-center hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-slate-100">
                        <div
                            class="val-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-4 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all">
                            <i class="fa-solid fa-bullseye text-xl"></i>
                        </div>
                        <h5 class="text-[10px] font-black uppercase tracking-widest text-slate-900">Compromiso</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SERVICIOS -->
    <section id="servicios" class="py-32 bg-slate-50">
        <div class="max-w-7xl mx-auto px-6">

            <!-- Header -->
            <div class="text-center mb-20 reveal">
                <span class="text-amber-600 font-bold uppercase tracking-widest text-xs">
                    Especialidades Técnicas
                </span>
                <h2 class="text-5xl font-black text-slate-900 mt-2 uppercase tracking-tighter">
                    Nuestros <span class="text-amber-600">Servicios</span>
                </h2>
                <div class="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>

            <!-- Cards -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                <!-- BLASTING HOLE DRILLING -->
                <div
                    class="service-card bg-white rounded-[3rem] p-12 border border-slate-100 hover:shadow-2xl transition-all reveal">
                    <div
                        class="w-16 h-16 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-600 mb-6">
                        <i class="fa-solid fa-burst text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-black text-slate-900 mb-4">
                        Blasting Hole Drilling
                    </h3>
                    <p class="text-slate-500 text-sm leading-relaxed">
                        Perforación de producción para voladura controlada, optimizando fragmentación y eficiencia
                        operativa en minería a cielo abierto y subterránea.
                    </p>
                    <!-- boton para ver mas -->
                    <a href="blasting-hole-drilling.php" class="inline-flex items-center gap-2 mt-8 text-amber-600 font-bold text-xs uppercase tracking-widest
                            hover:text-amber-500 transition-all group">
                        Ver servicio
                        <i
                            class="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
                    </a>
                </div>

                <!-- HDD -->
                <div
                    class="service-card bg-white rounded-[3rem] p-12 border border-slate-100 hover:shadow-2xl transition-all reveal">
                    <div
                        class="w-16 h-16 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-600 mb-6">
                        <i class="fa-solid fa-compass-drafting text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-black text-slate-900 mb-4">
                        HDD Trenchless Horizontal Drilling
                    </h3>
                    <p class="text-slate-500 text-sm leading-relaxed">
                        Perforación horizontal dirigida sin zanja para instalación de ductos y tuberías, reduciendo
                        impacto ambiental y afectación superficial.
                    </p>
                    <a href="hdd-horizontal-drilling.php"
                        class="inline-flex items-center gap-2 mt-8 text-amber-600 font-bold text-xs uppercase tracking-widest hover:text-amber-500 transition-all group">
                        Ver servicio
                        <i
                            class="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
                    </a>

                </div>

                <!-- LONG DRILLS -->
                <div
                    class="service-card bg-white rounded-[3rem] p-12 border border-slate-100 hover:shadow-2xl transition-all reveal">
                    <div
                        class="w-16 h-16 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-600 mb-6">
                        <i class="fa-solid fa-arrows-up-down text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-black text-slate-900 mb-4">
                        Long Drills
                    </h3>
                    <p class="text-slate-500 text-sm leading-relaxed">
                        Perforación de taladros largos para minería subterránea, asegurando precisión direccional y
                        estabilidad del macizo rocoso.
                    </p>
                    <a href="long-drills.php"
                        class="inline-flex items-center gap-2 mt-8 text-amber-600 font-bold text-xs uppercase tracking-widest hover:text-amber-500 transition-all group">
                        Ver servicio
                        <i
                            class="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
                    </a>

                </div>

                <!-- RAISE BORING -->
                <div
                    class="service-card bg-white rounded-[3rem] p-12 border border-slate-100 hover:shadow-2xl transition-all reveal">
                    <div
                        class="w-16 h-16 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-600 mb-6">
                        <i class="fa-solid fa-bore-hole text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-black text-slate-900 mb-4">
                        Raise Boring Drilling
                    </h3>
                    <p class="text-slate-500 text-sm leading-relaxed">
                        Excavación mecanizada de chimeneas con altos estándares de seguridad, precisión dimensional y
                        productividad sostenida.
                    </p>
                    <a href="raise-boring-drilling.php"
                        class="inline-flex items-center gap-2 mt-8 text-amber-600 font-bold text-xs uppercase tracking-widest hover:text-amber-500 transition-all group">
                        Ver servicio
                        <i
                            class="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
                    </a>

                </div>

                <!-- SLOT RAISE -->

                <div
                    class="service-card bg-white rounded-[3rem] p-12 border border-slate-100 hover:shadow-2xl transition-all reveal">
                    <div
                        class="w-16 h-16 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-600 mb-6">
                        <i class="fa-solid fa-arrow-down-long text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-black text-slate-900 mb-4">
                        Slot Raise
                    </h3>
                    <p class="text-slate-500 text-sm leading-relaxed">
                        Desarrollo de chimeneas de cara libre sin uso de explosivos, incrementando la seguridad en
                        labores críticas.
                    </p>
                    <a href="slot-raise.php"
                        class="inline-flex items-center gap-2 mt-8 text-amber-600 font-bold text-xs uppercase tracking-widest hover:text-amber-500 transition-all group">
                        Ver servicio
                        <i
                            class="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
                    </a>

                </div>

                <!-- STABILIZATION -->
                <div
                    class="service-card bg-white rounded-[3rem] p-12 border border-slate-100 hover:shadow-2xl transition-all reveal">
                    <div
                        class="w-16 h-16 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-600 mb-6">
                        <i class="fa-solid fa-mountain text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-black text-slate-900 mb-4">
                        Stabilization & Fortification in Taludes
                    </h3>
                    <p class="text-slate-500 text-sm leading-relaxed">
                        Estabilización de taludes mediante sistemas de anclaje, sostenimiento y fortificación para
                        seguridad estructural en minería y obras civiles.
                    </p>
                    <a href="stabilization-taludes.php"
                        class="inline-flex items-center gap-2 mt-8 text-amber-600 font-bold text-xs uppercase tracking-widest hover:text-amber-500 transition-all group">
                        Ver servicio
                        <i
                            class="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
                    </a>

                </div>

                <!-- VER MÁS -->
                <div
                    class="service-card bg-slate-900 text-white rounded-[3rem] p-12 lg:col-span-3 hover:shadow-2xl transition-all reveal">
                    <h3 class="text-3xl font-black mb-6 text-amber-500 uppercase tracking-tight">
                        Ver más servicios
                    </h3>
                    <ul class="space-y-4 text-slate-300 text-sm leading-relaxed list-disc list-inside">
                        <li>
                            Alquiler de equipos de maquinaria pesada para construcción y minería
                            <span class="block text-slate-400 text-xs ml-5">
                                Excavadora, retroexcavadora, compresora de aire [185 CFM – 950 CFM]
                            </span>
                        </li>
                        <li>
                            Servicios generales diversos en Construcción, Minería e Industria.
                        </li>
                        <li>
                            Asesoría en implementación y desarrollo de proyectos Raise Boring con Know How propio.
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </section>


    <!-- CONTACTO -->
    <section id="contacto" class="py-32 bg-slate-900 text-white">
        <div class="max-w-7xl mx-auto px-6">

            <!-- Header -->
            <div class="text-center mb-20 reveal">
                <span class="text-amber-500 font-bold uppercase tracking-widest text-xs">
                    Contacto Directo
                </span>
                <h2 class="text-5xl font-black mt-2 uppercase tracking-tighter">
                    Inicie su <span class="text-amber-500">Proyecto</span>
                </h2>
                <p class="mt-6 max-w-3xl mx-auto text-slate-400 text-sm leading-relaxed">
                    Inicie su proyecto con el respaldo de expertos certificados.
                    Estamos listos para atender sus requerimientos técnicos.
                </p>
                <div class="w-20 h-1 bg-amber-500 mx-auto mt-8"></div>
            </div>

            <!-- Contact Cards -->
            <div class="grid md:grid-cols-3 gap-10 mb-20">

                <!-- Phone -->
                <div
                    class="bg-white/5 rounded-[2.5rem] p-10 border border-white/10 hover:border-amber-500/50 transition-all reveal">
                    <div
                        class="w-16 h-16 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-500 mb-6">
                        <i class="fa-solid fa-phone-volume text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-black mb-2">
                        Llamada técnica
                    </h3>
                    <p class="text-slate-400 text-sm mb-4">
                        Atención directa con personal especializado.
                    </p>
                    <a href="tel:+51934262734"
                        class="text-amber-500 font-bold tracking-wide hover:text-amber-400 transition-all">
                        +51 934 262 734
                    </a>
                </div>

                <!-- Email -->
                <div
                    class="bg-white/5 rounded-[2.5rem] p-10 border border-white/10 hover:border-amber-500/50 transition-all reveal">
                    <div
                        class="w-16 h-16 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-500 mb-6">
                        <i class="fa-solid fa-envelope text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-black mb-2">
                        Email corporativo
                    </h3>
                    <p class="text-slate-400 text-sm mb-4">
                        Respuesta formal y seguimiento técnico.
                    </p>
                    <a href="mailto:servicios@tip-excellent.com"
                        class="text-amber-500 font-bold tracking-wide hover:text-amber-400 transition-all">
                        servicios@tip-excellent.com
                    </a>
                </div>

                <!-- Location -->
                <div
                    class="bg-white/5 rounded-[2.5rem] p-10 border border-white/10 hover:border-amber-500/50 transition-all reveal">
                    <div
                        class="w-16 h-16 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-500 mb-6">
                        <i class="fa-solid fa-location-dot text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-black mb-2">
                        Sede Central
                    </h3>
                    <p class="text-slate-400 text-sm mb-4">
                        Operaciones administrativas y técnicas.
                    </p>
                    <span class="text-amber-500 font-bold tracking-wide">
                        Lima, Perú
                    </span>
                </div>

            </div>

            <!-- Coverage -->
            <div class="bg-white/5 rounded-[3rem] p-14 border border-white/10 text-center reveal">
                <h3 class="text-3xl font-black text-amber-500 uppercase tracking-tight mb-6">
                    Atención a nivel nacional e internacional
                </h3>
                <p class="text-slate-300 text-sm max-w-4xl mx-auto leading-relaxed">
                    Brindamos servicios integrales para la minería e industria en cualquier
                    ubicación geográfica, garantizando la misma calidad, seguridad y
                    eficiencia operativa en cada proyecto.
                </p>
            </div>

        </div>
    </section>


    <!-- FOOTER -->
    <?php include('./components/Footer.php'); ?>


    <!-- LOGICA JAVASCRIPT (Vanilla) -->
    <script src="./script.js"></script>
</body>

</html>