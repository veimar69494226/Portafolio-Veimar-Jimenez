// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import vitelogo from './assets/tech_logo/vite-js-logo.jpg';
import typescript from './assets/tech_logo/typescript.png';
import laravel from './assets/tech_logo/logo_laravel.png';
import yii2 from './assets/tech_logo/logo_yii2.png';
import sqlserve from './assets/tech_logo/logo_sqlserve.png';
import xampp from './assets/tech_logo/logo_xampp.png';
import flask from './assets/tech_logo/logo_flask.png';
import dbeaver from './assets/tech_logo/logo_dbeaver.png';
import Bootstrap from './assets/tech_logo/bootstrap.png';
import apache from './assets/tech_logo/logo_apache.png';
import php from './assets/tech_logo/logo_php.png';
import jupyter from './assets/tech_logo/logo_jupyter.png';
import pentaho from './assets/tech_logo/logo_pentaho.png';
import powerbi from './assets/tech_logo/logo_powerbi.jpg';
import visualstudio from './assets/tech_logo/logo_visualstudio.png';
import gitlab from './assets/tech_logo/logo_gitlab.png';
import jira from './assets/tech_logo/logo_jira.png';
import qase  from './assets/tech_logo/logo_qase.jpg';
import notion  from './assets/tech_logo/logo_notion.png';
import electron  from './assets/tech_logo/logo_electron.png';
import railway  from './assets/tech_logo/logo_reailway.png';
import vercel  from './assets/tech_logo/vercel.png';
// Experience Section Logo's
import logopollo from './assets/company_logo/logopollo.png';
import DTIC from './assets/company_logo/logo_dtic.png';
import Norvic from './assets/company_logo/logo_norvic.jpg';
import UMSS from './assets/company_logo/logo_umss.png';
// Education Section Logo's
import sagradafamilia from './assets/education_logo/sagradafamilia.png';

// Project Section Logo's
import constructora from './assets/work_logo/constructora.png';
import restaurante from './assets/work_logo/restaurante.png';
import parqueos from './assets/work_logo/parqueos.png';
import recotrash from './assets/work_logo/recotrash.png';
import tellez from './assets/work_logo/tellez.png';
import articulotellez from './assets/work_logo/articulotellez.jpeg';
import onlyofers from './assets/work_logo/onlyofers.png';
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: Bootstrap },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Vite', logo: vitelogo },
      { name: 'TypesScript', logo: typescript },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Laravel', logo: laravel },
      { name: 'Yii2', logo: yii2 },
      { name: 'Apache', logo: apache },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Flask', logo: flask },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'SQLServer', logo: sqlserve },
      { name: 'DBeaver', logo: dbeaver },
    ],
  },
  {
    title: 'Lenguajes',
    skills: [
      { name: 'Php', logo: php },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },

    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'Jupyter', logo: jupyter },
      { name: 'Pentaho', logo: pentaho },
      { name: 'PowerBi', logo: powerbi },
      { name: 'Visual Studio', logo: visualstudio },
    
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'GitLab', logo: gitlab },
      { name: 'Xampp', logo: xampp },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Jira', logo: jira },
      { name: 'Qase', logo: qase },
      { name: 'Notion', logo: notion },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Railway', logo: railway },
      { name: 'Vercel', logo:  vercel },
      { name: 'Electron', logo: electron },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: DTIC,
    role: "Desarrollador Full Backend",
    company: "DTIC - Universidad Mayor de San Simón",
    date: "Agosto 2024 - Noviembre 2024",
    desc: "Participé en el desarrollo backend de un sistema web para DTIC-UMSS dentro del Proyecto CASA (Centro de Aguas y Saneamiento Ambiental). Trabajé en el análisis de documentación, recopilación de requisitos, elaboración de historias de usuario, diseño de mockups en Figma, desarrollo del sprint asignado con Yii2, análisis de base de datos, creación de nuevas tablas, backups, documentación, pruebas QA y apoyo en la puesta en marcha del sistema.",
    skills: [
      "Yii2",
      "PHP",
      "MySQL",
      "Figma",
      "QA",
      "Historias de Usuario",
      "Documentación",
      "Backend",
    ],
  },
  {
    id: 3,
    img: Norvic,
    role: "Desarrollador Backend en Proyectos Reales",
    company: "Empresa Norvic SW",
    date: "Abril 2023 - Julio 2023",
    desc: "Colaboré en el desarrollo backend de proyectos reales, incluyendo un sistema de gestión de citas dentales y un sistema para consultorio de la Clínica San Carlos. También participé en la elaboración de backlog, historias de usuario, mockups en Figma y propuestas de diseño del sistema.",
    skills: [
      "Backend",
      "Historias de Usuario",
      "Backlog",
      "Figma",
      "Diseño de Sistemas",
      "Trabajo Colaborativo",
    ],
  },
  {
    id: 4,
    img: UMSS,
    role: "Desarrollador Full Stack",
    company: "Universidad Mayor de San Simón",
    date: "Marzo 2023 - Junio 2023",
    desc: "Desarrollé un sistema web de apoyo a la administración de parqueos, participando en la elicitación de requerimientos, elaboración de historias de usuario y backlog, diseño en Figma, desarrollo backend con Laravel y Node.js, diseño de base de datos en MySQL, desarrollo de módulos frontend con React y JavaScript, creación de un chatbot para consultas rápidas, pruebas QA y documentación del sistema.",
    skills: [
      "Laravel",
      "Node.js",
      "React",
      "JavaScript",
      "MySQL",
      "Figma",
      "QA",
      "Chatbot",
      "Full Stack",
    ],
  },
  {
    id: 5,
    img: UMSS,
    role: "Desarrollador Backend",
    company: "Universidad Mayor de San Simón",
    date: "Agosto 2022 - Diciembre 2022",
    desc: "Participé en el desarrollo backend de la aplicación web OnlyOfers, apoyando en la documentación de requerimientos, elaboración de historias de usuario y backlog, diseño del sistema y construcción del backend con Node.js y base de datos MySQL.",
    skills: [
      "Node.js",
      "MySQL",
      "Backend",
      "Historias de Usuario",
      "Backlog",
      "Documentación",
    ],
  },
];
export const education = [
  {
    id: 0,
    img: UMSS,
    school: "Universidad Mayor de San Simón, Cochabamba, Bolivia",
    date: "2025 - 2026",
    degree: "Diplomado en Ciencia de Datos",
    desc: "Formación de posgrado orientada al análisis de datos, modelado predictivo y uso de herramientas aplicadas a la ciencia de datos y la toma de decisiones.",
  },
  {
    id: 1,
    img: UMSS,
    school: "Universidad Mayor de San Simón, Cochabamba, Bolivia",
    date: "2020 - 2024",
    degree: "Licenciatura en Ingeniería de Sistemas",
    desc: "Formación universitaria enfocada en desarrollo de software, bases de datos, análisis de sistemas, ingeniería de requisitos, redes y tecnologías aplicadas al entorno empresarial.",
  },
  {
    id: 2,
    img: sagradafamilia,
    school: "Unidad Educativa Sagrada Familia, Cochabamba, Bolivia",
    date: "2006 - 2019",
    degree: "Bachiller en Humanidades",
    desc: "Etapa de formación escolar que consolidó bases académicas generales y habilidades de aprendizaje que posteriormente reforzaron mi desarrollo profesional en el área tecnológica.",
  },
];
export const projects = [
  {
    id: 0,
    title: "Sistema de Facturación y Presupuestos para Constructora",
    description:
      "Aplicación orientada a la emisión de facturas y presupuestos para el rubro de construcción, desarrollada para una empresa en España. Implementé el frontend con React y Vite, incluyendo formularios, vistas de previsualización, generación de PDF, cálculos automáticos de totales y validaciones para mejorar la rapidez de uso, la claridad de la información y la consistencia del formato. También se realizó una integración básica con Electron para su ejecución como aplicación de escritorio.",
    image: constructora,
    tags: ["React", "Vite", "JavaScript", "PDF", "Electron", "Frontend"],
    github: "https://github.com/veimar69494226/App_de_Facturacion_Presupuesto_Constructora-RJ",
    webapp: "",
    figma: "",
  },
  {
    id: 1,
    title: "Sistema de Facturación Web para Restaurante",
    description:
      "Sistema web de facturación orientado a la gestión de ventas, productos y clientes para un restaurante. Desarrollé el backend con Laravel, incluyendo API RESTful, controladores, rutas, validaciones, operaciones CRUD y modelado de base de datos en MySQL. Además, se integró parcialmente con un frontend desarrollado en React y Vite.",
    image: restaurante,
    tags: ["Laravel", "PHP", "API REST", "MySQL", "React", "Vite"],
    github: "https://github.com/veimar69494226/Proyecto-facturacion-negocio",
    webapp: "",
    figma:
      "https://www.figma.com/design/p8MwQJzK0GlNLZRChH7Ofp/Sistema-de-Facturacion-y-gestion-de-ventas-para-una-Broasteria?node-id=0-1&t=rfFAXW5kZUEqjQK3-1",
  },
  {
    id: 2,
    title: "Sistema Web de Apoyo a la Administración de Parqueos",
    description:
      "Proyecto Full Stack orientado a apoyar la administración de parqueos. Participé en la elicitación de requerimientos, backlog e historias de usuario, diseño en Figma, desarrollo backend con Laravel y Node.js, base de datos en MySQL, módulos frontend con React y JavaScript, además de un chatbot para consultas rápidas y pruebas QA.",
    image: parqueos,
    tags: ["React", "JavaScript", "Laravel", "Node.js", "MySQL", "Figma", "QA"],
    github: "https://github.com/ElChris496/AdministracionParqueo",
    webapp: "",
    figma:
      "https://www.figma.com/design/uKnh9hC4auDikwyO2wnfgW/Untitled?node-id=0-1&t=YJhZrYhwvBg1D1fG-1",
  },
  {
    id: 3,
    title: "Predicción de Ventas para Distribuidora Tellez SRL",
    description:
      "Proyecto de ciencia de datos orientado a la predicción de ventas mensuales de productos de limpieza mediante series temporales. Se aplicó la metodología CRISP-DM, preparación y análisis de datos con Python y Jupyter Notebook, evaluación comparativa de modelos ARIMA, Prophet y ETS, y desarrollo de dashboards interactivos en Power BI para apoyar la toma de decisiones comerciales e inventarios.",
    image: tellez,
    tags: ["Python", "Jupyter", "Series Temporales", "ARIMA", "Prophet", "ETS", "Power BI"],
    github: "",
    webapp: "https://drive.google.com/drive/folders/1vjYnfhl70RvKkWO3ChUlVuFf-OlMX4da?usp=sharing",
    figma: "",
  },
  {
    id: 4,
    title: "RecoTrash – Clasificador Inteligente de Residuos con IA",
    description:
      "Aplicación web desarrollada para facilitar la clasificación de residuos mediante Inteligencia Artificial. El sistema utiliza un modelo de Redes Neuronales Convolucionales (CNN) para identificar automáticamente el tipo de residuo a partir de imágenes cargadas por el usuario. La plataforma incluye carga de imágenes, historial de clasificaciones y un módulo informativo sobre reciclaje para promover buenas prácticas ambientales. Proyecto desarrollado de forma colaborativa integrando machine learning y desarrollo web.",
    image: recotrash,
    tags: ["Python", "Machine Learning", "CNN", "TensorFlow", "Flask", "React", "IA"],
    github: "https://github.com/agustinguzmanzenteno/project-reco-trash",
    webapp: "",
    figma: "",
  },
  {
    id: 5,
    title: "Aplicación Web OnlyOfers",
    description:
      "Aplicación web en la que participé como desarrollador backend, colaborando en la documentación de requerimientos, elaboración de historias de usuario y backlog, diseño del sistema y desarrollo backend con Node.js y MySQL.",
    image: onlyofers,
    tags: ["Node.js", "MySQL", "Backend", "Historias de Usuario", "Backlog"],
    github: "https://github.com/Angel1104/FE-onlyofers",
    webapp: "",
    figma:
      "https://www.figma.com/proto/E9OF9ji7pGb9mLrBiDtOjT/Venta?node-id=235-54&starting-point-node-id=86%3A115&scaling=contain&content-scaling=fixed&show-proto-sidebar=1&t=tRbQJLULYjRI5fUE-1",
  },
];

export const articles = [
  {
    id: 0,
    title: "Predicción de ventas mensuales en Distribuidora Tellez SRL mediante series temporales",
    source: "Artículo académico / Proyecto de Diplomado en Ciencia de Datos",
    description:
      "Trabajo orientado al análisis y predicción de ventas mensuales en una distribuidora mayorista, aplicando metodología CRISP-DM, preparación de datos, evaluación comparativa de modelos de series temporales y visualización de resultados en Power BI para apoyar la toma de decisiones empresariales.",
    image: articulotellez,
    tags: ["Python", "Jupyter", "Series Temporales", "ARIMA", "Prophet", "ETS", "Power BI"],
    link: "",
    pdf: "",
  },
];