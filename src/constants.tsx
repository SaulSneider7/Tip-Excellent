
export const MISSION = "En TIP EXCELLENT PATH S.A nos enfocamos en empoderar a nuestros colaboradores para permitirles que proporcionen a nuestros clientes la mejor experiencia de nuestros servicios ofreciendo soluciones innovadoras en cada uno de sus proyectos.";

export const VISION = "TIP EXCELLENT PATH S.A será líder de servicios en ingeniería y consultoría en el mundo a través de la calidad elaborados con una pasión por la innovación orientadas al cliente enfocados en la capacitación, estaremos despejado a la diversidad y proveeremos oportunidades de crecimiento para nuestros asociados y colaboradores, guiaremos nuestros servicios a la industria diversa en la aplicación de las tecnologías apropiadas operando con los más altos niveles de ética y observancia a través de un enfoque multidisciplinario, creando valor para nuestros accionistas con resultados operacionales positivos con responsabilidad individual y corporativo salvaguardando el medio ambiente y las comunidades donde operamos.";

export const VALUES = [
  {
    title: 'Ética y Moral',
    description: 'Mantenemos altos estándares en todo nuestro actuar profesional.',
    icon: <i className="fa-solid fa-scale-balanced"></i>
  },
  {
    title: 'Honestidad e Integridad',
    description: 'Transparencia total en todos nuestros trabajos y procesos.',
    icon: <i className="fa-solid fa-handshake-angle"></i>
  },
  {
    title: 'Fiabilidad',
    description: 'Garantizamos la plena satisfacción de nuestros servicios.',
    icon: <i className="fa-solid fa-calendar-check"></i>
  },
  {
    title: 'Franqueza',
    description: 'Claridad en todas nuestras relaciones y servicios realizados.',
    icon: <i className="fa-solid fa-comments"></i>
  },
  {
    title: 'Coherencia',
    description: 'Cumplimos con rigor lo que prometemos a nuestros clientes.',
    icon: <i className="fa-solid fa-puzzle-piece"></i>
  },
  {
    title: 'Calidad',
    description: 'Excelencia en cada ámbito de los proyectos realizados.',
    icon: <i className="fa-solid fa-award"></i>
  },
  {
    title: 'Innovación Constante',
    description: 'Aportamos valor diferencial a través de la tecnología.',
    icon: <i className="fa-solid fa-lightbulb"></i>
  },
  {
    title: 'Trabajo en Equipo',
    description: 'Unión de talentos para el logro de mejores resultados.',
    icon: <i className="fa-solid fa-users-gear"></i>
  },
  {
    title: 'Confianza',
    description: 'La base sólida de nuestras relaciones interpersonales.',
    icon: <i className="fa-solid fa-heart-pulse"></i>
  },
  {
    title: 'Compromiso',
    description: 'Dedicación para hacer bien las cosas desde la primera vez.',
    icon: <i className="fa-solid fa-bullseye"></i>
  }
];

export const SERVICES = [
  {
    id: 'raise-boring',
    title: 'Raise Boring Drilling',
    description: 'Sistema mecanizado para la excavación de pozos y chimeneas entre niveles subterráneos o desde superficie. Se ejecuta mediante un sondeo piloto y posterior ensanche ascendente, logrando excavaciones seguras, continuas y de alta precisión. Destaca por su alta productividad, reducción de riesgos humanos, paredes lisas autosostenidas y menor impacto en la roca circundante. Aplicable en minería y proyectos de ingeniería civil.',
    icon: <i className="fa-solid fa-bore-hole text-3xl"></i>,
    image: './raise_boring.webp'
  },
  {
    id: 'slot-raise',
    title: 'Slot Raise',
    description: 'Método mecanizado para la ejecución de chimeneas de cara libre, utilizado principalmente como preparación para voladuras masivas de taladros largos. Se caracteriza por su alto nivel de seguridad operativa, ya que el personal trabaja fuera de la línea de caída de roca, sin uso de explosivos. Ofrece mayor rapidez, productividad y control frente a métodos tradicionales o manuales.',
    icon: <i className="fa-solid fa-arrow-down-long text-3xl"></i>,
    image: './slot_raise.webp'
  },
  {
    id: 'long-drills',
    title: 'Long Drills [Taladros Largos]',
    description: 'Sistema de perforación aplicado en explotaciones subterráneas, basado en la voladura de banco, que permite el arranque de material entre dos niveles. Está orientado a optimizar el ciclo de minado, reducir costos operativos y eliminar riesgos asociados a trabajos en chimeneas. Destaca por su alta productividad, mayor longitud de perforación y menor requerimiento de mano de obra.',
    icon: <i className="fa-solid fa-arrows-up-down text-3xl"></i>,
    image: './long_drills.webp'
  },
  {
    id: 'blasting-hole',
    title: 'Blasting Hole Drilling',
    description: 'Perforación de taladros para voladura en roca competente, aplicada en minería y obras civiles donde otros métodos no son rentables. Este servicio integra técnicas de perforación precisas con el diseño y ejecución de voladuras, garantizando una fragmentación eficiente del macizo rocoso. Una perforación adecuada permite maximizar el rendimiento, la seguridad y la productividad del proceso de voladura.',
    icon: <i className="fa-solid fa-burst text-3xl"></i>,
    image: './blasting_hole.webp'
  },
  {
    id: 'hdd-trenchless',
    title: 'HDD - Perforación Horizontal Dirigida',
    description: 'Tecnología de perforación sin zanjas para la instalación subterránea de tuberías, ductos y cables. Permite ejecutar cruces bajo carreteras, ríos o áreas urbanas con mínimo impacto ambiental y superficial. Es aplicable a redes de agua, gas, alcantarillado, telecomunicaciones y energía, ofreciendo soluciones eficientes, precisas y menos invasivas que los métodos tradicionales.',
    icon: <i className="fa-solid fa-compass-drafting text-3xl"></i>,
    image: './hdd.webp'
  },
  {
    id: 'consultancy',
    title: 'Consultoría y Asesoría Técnica',
    description: 'Servicio especializado en consultoría técnica para proyectos de perforación e ingeniería, enfocado en planificación, supervisión, optimización de procesos y capacitación de personal. Incluye soporte en campo, diseño de soluciones operativas, gestión de proyectos y formación técnica, garantizando seguridad, eficiencia operativa y rentabilidad para los proyectos de minería e industria.',
    icon: <i className="fa-solid fa-user-tie text-3xl"></i>,
    image: './consultora.webp'
  },
  {
    id: 'stabilization',
    title: 'Estabilización y Fortificación de Taludes',
    description: 'Servicio orientado a garantizar la estabilidad de taludes en proyectos de minería, construcción e infraestructura. La solución se define según las condiciones geotécnicas del terreno, nivel freático y geometría del talud. Se aplican tecnologías especializadas para minimizar riesgos, movimientos de tierra y asegurar la integridad estructural de las obras.',
    icon: <i className="fa-solid fa-mountain-sun text-3xl"></i>,
    image: './estabilizacion.webp'
  },
  {
    id: 'rental',
    title: 'Alquiler de Maquinaria Pesada',
    description: 'Disponibilidad de equipos de maquinaria pesada para proyectos de construcción y minería, incluyendo excavadoras, retroexcavadoras y compresoras de aire de distintas capacidades. El servicio permite a los clientes optimizar costos operativos y contar con equipos confiables para el desarrollo de sus proyectos.',
    icon: <i className="fa-solid fa-truck-monster text-3xl"></i>,
    image: './maquinaria_pesada.webp'
  },
  {
    id: 'general-services',
    title: 'Servicios Generales en Minería e Industria',
    description: 'Ejecución de servicios complementarios y de apoyo técnico en proyectos industriales, mineros y de construcción, adaptados a las necesidades operativas del cliente y alineados a estándares de seguridad, eficiencia y calidad.',
    icon: <i className="fa-solid fa-gears text-3xl"></i>,
    image: './servicios_generales.webp'
  }
];

export const CORE_VALUES_SHORT = [
  {
    title: 'Experiencia Comprobada',
    description: 'Personal con más de 15 años de trayectoria técnica y directiva garantizando resultados óptimos.',
    icon: <i className="fa-solid fa-user-gear text-xl text-amber-600"></i>
  },
  {
    title: 'Seguridad y Sostenibilidad',
    description: 'Marco de responsabilidad social y desarrollo sustentable bajo normativas internacionales.',
    icon: <i className="fa-solid fa-leaf text-xl text-amber-600"></i>
  },
  {
    title: 'Excelencia Operativa',
    description: 'Operadores calificados al 100% que superan las expectativas de productividad y performance.',
    icon: <i className="fa-solid fa-star text-xl text-amber-600"></i>
  }
];
