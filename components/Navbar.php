<!-- NAVEGACIÓN -->
<nav id="main-nav" class="fixed w-full z-50 transition-all duration-500 py-6 bg-transparent">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <!-- LOGO -->
        <div class="flex items-center gap-4">
            <img src="./img/logo_tip_excellent.png" alt="TIP Excellent Path S.A."
                class="h-14 md:h-16 w-auto object-contain transition-all duration-300" />

            <div class="flex flex-col">
                <span id="nav-logo-text"
                    class="text-2xl font-black tracking-tighter leading-none text-white transition-colors">
                    TIP EXCELLENT
                </span>
                <span id="nav-logo-sub" class="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
                    Path S.A.
                </span>
            </div>
        </div>

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex gap-8 items-center relative">
            <a href="#inicio"
                class="nav-link text-[11px] font-black uppercase tracking-widest text-white/80 hover:text-amber-400 transition-colors">Inicio</a>
            <a href="#nosotros"
                class="nav-link text-[11px] font-black uppercase tracking-widest text-white/80 hover:text-amber-400 transition-colors">Nosotros</a>

            <!-- Dropdown Servicios -->
            <div class="relative group">
                <button
                    class="nav-link flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-white/80 hover:text-amber-400 transition-colors">
                    Servicios
                    <i class="fa-solid fa-chevron-down text-[8px] mt-1"></i>
                </button>

                <!-- Submenu -->
                <div
                    class="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <a href="./blasting-hole-drilling.php"
                        class="block px-6 py-3 text-slate-900 hover:bg-amber-50 font-medium">Blasting Hole Drilling</a>
                    <a href="./hdd-horizontal-drilling.php"
                        class="block px-6 py-3 text-slate-900 hover:bg-amber-50 font-medium">HDD Trenchless Horizontal
                        Drilling</a>
                    <a href="./long-drills.php" class="block px-6 py-3 text-slate-900 hover:bg-amber-50 font-medium">Long
                        Drills</a>
                    <a href="./raise-boring-drilling.php"
                        class="block px-6 py-3 text-slate-900 hover:bg-amber-50 font-medium">Raise Boring Drilling</a>
                    <a href="./slot-raise.php" class="block px-6 py-3 text-slate-900 hover:bg-amber-50 font-medium">Slot
                        Raise</a>
                    <a href="./stabilization-taludes.php"
                        class="block px-6 py-3 text-slate-900 hover:bg-amber-50 font-medium">Stabilization &
                        Fortification in Talude</a>
                </div>
            </div>

            <a href="#contacto"
                class="nav-link text-[11px] font-black uppercase tracking-widest text-white/80 hover:text-amber-400 transition-colors">Contacto</a>
        </div>

        <!-- MOBILE TOGGLE -->
        <button id="mobile-menu-btn" class="md:hidden text-white text-2xl">
            <i class="fa-solid fa-bars-staggered"></i>
        </button>
    </div>
</nav>

<!-- MOBILE MENU OVERLAY -->
<div id="mobile-menu"
    class="fixed inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 z-[60] flex flex-col items-center justify-start pt-24 gap-4 opacity-0 pointer-events-none transition-all duration-500">

    <!-- Cerrar -->
    <button id="close-menu"
        class="absolute top-6 right-6 text-white text-4xl hover:text-amber-500 transition-colors">&times;</button>

    <!-- Enlaces principales -->
    <nav class="flex flex-col items-center gap-4 w-full text-center">
        <a href="#inicio" class="text-2xl font-bold text-white hover:text-amber-400 transition-colors">Inicio</a>
        <a href="#nosotros" class="text-2xl font-bold text-white hover:text-amber-400 transition-colors">Nosotros</a>
        <a href="#contacto" class="text-2xl font-bold text-white hover:text-amber-400 transition-colors">Contacto</a>
    </nav>

    <!-- Sección de Servicios -->
    <div class="mt-8 w-full border-t border-amber-500/20 pt-6 text-center">
        <span class="text-amber-500 font-black text-xl uppercase tracking-widest">Servicios</span>
        <div class="flex flex-col gap-3 mt-4">
            <a href="blasting_hole.php"
                class="text-lg text-white hover:text-amber-400 transition-colors py-2 border-b border-amber-500/20">Blasting
                Hole Drilling</a>
            <a href="hdd_trenchless.php"
                class="text-lg text-white hover:text-amber-400 transition-colors py-2 border-b border-amber-500/20">HDD
                Trenchless Horizontal Drilling</a>
            <a href="long_drills.php"
                class="text-lg text-white hover:text-amber-400 transition-colors py-2 border-b border-amber-500/20">Long
                Drills</a>
            <a href="raise_boring.php"
                class="text-lg text-white hover:text-amber-400 transition-colors py-2 border-b border-amber-500/20">Raise
                Boring Drilling</a>
            <a href="slot_raise.php"
                class="text-lg text-white hover:text-amber-400 transition-colors py-2 border-b border-amber-500/20">Slot
                Raise</a>
            <a href="stabilization.php"
                class="text-lg text-white hover:text-amber-400 transition-colors py-2 border-b border-amber-500/20">Stabilization
                & Fortification in Talude</a>
        </div>
    </div>

    <!-- Footer Mobile -->
    <div class="mt-auto mb-8 text-slate-400 text-sm text-center px-6">
        © 2026 TIP Excellent Path S.A. <br>
        Desarrollo por <a href="https://tu-sitioweb.com" class="text-amber-500 hover:underline">tu-sitioweb.com</a>
    </div>
</div>