import { icons, socialMediaIcons } from "./site-icons";

// social media
const { dribbble, github, linkedin, twitter } = socialMediaIcons;

interface Projects {
	title: string;
	info: string;
	devProjects: Project[];
	designProjects: Project[]
}

function createSlug({ id}:{ id:string}){	
	return `proyecto-${id}`
}

export interface Project{
	name: string;
	info: string;
	images: string[];
	thumbnails: string[];
	demo?: string;
	repo?: string;
	stack: string[];
	status?: ProjectStatus;
	type: "design" | "development"
}


type ProjectStatus = "Finalizado" | "Pausado" | "En Desarrollo";

export const projects: Projects = {
	title: "Mis Proyectos",
	info: `
	 En esta sección, se describen los proyectos personales y
	 profesionales en los que he participado. Estos proyectos demuestran
	 mis habilidades y conocimientos como desarrollador web, así como mi capacidad para
	 trabajar de forma independiente y en equipo.
	`,
	devProjects: [
		{
			name: "Gruvbox Wallpapers Web",
			type: "development",
			thumbnails: [
				"https://thumbs2.imgbox.com/9d/bb/2n0cib7q_t.png",
				"https://thumbs2.imgbox.com/8f/71/ERGlXiFT_t.png",
				"https://thumbs2.imgbox.com/1e/6e/jLf0Wd9K_t.png",
			],
			images: ["https://images2.imgbox.com/3a/9b/UwAfNsy9_t.png"],
			info: `Gruvbox Wallpaper Web es un proyecto enfocado en la optimización de la experiencia del usuario al descargar fondos de pantalla con temática Gruvbox. La finalidad principal fue mejorar el tiempo de carga de la página, resolviendo el problema de la lentitud en la página oficial debido al peso excesivo de las imágenes. Implementé técnicas de optimización de imágenes y diseño eficiente, logrando una experiencia más fluida y accesible para los usuarios. Este proyecto también me permitió profundizar en buenas prácticas de rendimiento web y optimización de recursos.

`,
			demo: "https://gruvbox-wallpapers.vercel.app/",
			repo: "https://github.com/ChapST1/gruvbox-wallpapers-web",
			stack: ["Astro", "HTML", "CSS", "TailwindCss", "JavaScript", "Node JS"],
			status: "Finalizado",
		},
		{
			name: "Caroni Computer",
			type: "development",
			thumbnails: [
				'https://thumbs2.imgbox.com/2c/7a/N8UXQpYu_t.png',
				'https://thumbs2.imgbox.com/aa/09/1Je1d6Fn_t.png'
			],
			images: ["https://images2.imgbox.com/5f/e1/Kl3d75CX_t.png"],
			info: `Caroni Computer fue un proyecto desarrollado durante mi pasantía como practicante. La empresa ya contaba con un sistema funcional, pero me asignaron la tarea de mejorar la interfaz de usuario para hacerla más intuitiva y atractiva visualmente. Utilicé herramientas básicas como HTML, CSS y JavaScript para rediseñar la experiencia, centrándome en la simplicidad, la usabilidad y una apariencia más moderna. Este proyecto me permitió demostrar mi capacidad para optimizar interfaces con recursos limitados y atención al detalle.`,
			demo: "https://caronicomputer.com",
			stack: ["Html", "Css", "JavaScript"],
			status: "Finalizado",
		},
		{
			name: "Wsp bot",
			type: "development",
			thumbnails: [
				'https://thumbs2.imgbox.com/b9/ae/e2RYYF9J_t.png',
				'https://thumbs2.imgbox.com/c3/87/NemE20Do_t.png',
				'https://thumbs2.imgbox.com/08/25/l09IgKdn_t.png',
			],
			images: ["https://images2.imgbox.com/4a/f5/eUhhqtJT_t.png"],
			info: `Wsp Bot es una aplicación diseñada para facilitar la creación de bots para WhatsApp, enfocándose en brindar una experiencia de usuario accesible y atractiva. En este proyecto, mi objetivo principal fue mejorar mis habilidades de diseño, por lo que trabajé exclusivamente en la parte visual. Me aseguré de crear una interfaz moderna, intuitiva y funcional que simplificara el proceso de interacción del usuario con la herramienta. Este proyecto destaca mi enfoque en el diseño centrado en el usuario y mi capacidad para traducir ideas en soluciones visuales efectivas.

`,
			demo: "https://wsp-bot-ease-chapst1.vercel.app/chatbot",
			repo: "https://github.com/ChapST1/wsp-bot-easy",
			stack: ["React Js", "Zustand JS", "TypeScript", "Framer motion", "React router dom"],
			status: "Pausado",
		},
		{
			name: "Movie DBX",
			type: "development",
			thumbnails: [
			"https://thumbs2.imgbox.com/84/4c/spXerTj6_t.png"	,
			"https://thumbs2.imgbox.com/b2/b5/CeInXIZp_t.png",
			"https://thumbs2.imgbox.com/aa/2f/u3Uxn1MJ_t.png",
			],
			images: ["https://images2.imgbox.com/ca/7f/VhcnE0oz_t.png"],
			info: `Movie DBX es una aplicación que utiliza la API de The Movie Database (TMDb) para obtener información detallada sobre películas. El proyecto permite a los usuarios buscar títulos, explorar datos como sinopsis, elenco y calificaciones, y mejorar su experiencia al descubrir contenido cinematográfico. Este desarrollo me permitió trabajar con APIs externas, manejar datos dinámicos y enfocarme en crear una interfaz amigable y funcional para los usuarios.`,
			demo: "https://movie-dbx.vercel.app/",
			repo: "https://github.com/ChapST1/movies-db-clonex",
			stack: ["Next JS", "Tailwind css", "React Js", "ShadcnUI", "Zustand JS", "TypeScript"],
			status: "En Desarrollo",
		},
		{
			name: "Music player UI",
			type: "development",
			thumbnails: ["https://thumbs2.imgbox.com/54/2a/zv6ar2PI_t.png"],
			images: ["https://thumbs2.imgbox.com/54/2a/zv6ar2PI_t.png"],
			info: `Music Player es un proyecto desarrollado como parte de mi proceso de aprendizaje en Vue.js. Este proyecto me ayudó a consolidar mis conocimientos en Vue.js, comprender su arquitectura de componentes y aplicar principios de desarrollo frontend para construir aplicaciones dinámicas e interactivas.
`,
			demo: "https://media-player-five-black.vercel.app/",
			repo: "https://github.com/ChapST1/vue-media-player",
			stack: ["Vue JS", "Tailwind css", "pinia", "TypeScript"],
			status: "Finalizado",
		},
	],
	designProjects: [
	{
		name: "Tv App",
		type: "design",
		thumbnails: [
			"https://thumbs2.imgbox.com/92/90/6pBwHQMf_t.png"
		],
		images: [
			"https://images2.imgbox.com/92/90/6pBwHQMf_o.png",
		],
		info: "sin info.",
		stack: ["Figma"],
	},

	{
		name: "Media Player",
		info: "sin info",
		stack: ['Figma'],
		type: "design",
		images: [
			"https://images2.imgbox.com/5e/72/uEMg24xY_o.png",
				"https://images2.imgbox.com/11/d7/dpNSG845_o.png",
			],
			thumbnails: ["https://thumbs2.imgbox.com/54/2a/zv6ar2PI_t.png"],
		demo: "https://media-player-five-black.vercel.app/",
			
	},
	// {
	// 	info: "sin info",
	// 	stack: ['Figma'],
	// 	type: "design",
	// 	name: "Chat Message",
	// 		images: [
	// 			"https://images2.imgbox.com/56/7b/uju0sJ6y_o.png",
	// 		],
	// 		thumbnails: [
	// 			"https://thumbs2.imgbox.com/56/7b/uju0sJ6y_t.png",
	// 		],
	// },
	
]
};
export const siteConfig = {
	owner: "Christian A.",
	ownerLogo: "ChapST1",
	ownerOccupation: "Diseñador y Desarrollador web",
	ownerSocialMedia: [
		{
			name: github.name,
			icon: github.icon,
			link: "https://github.com/ChapST1",
		},
		{
			name: twitter.name,
			icon: twitter.icon,
			link: "https://twitter.com/_ChapST1",
		},
		{
			name: dribbble.name,
			icon: dribbble.icon,
			link: "#",
		},
		{
			name: linkedin.name,
			icon: linkedin.icon,
			link: "https://www.linkedin.com/in/christian-alvarez-89a783272/",
		},
	],
	ownerGithub: "https://github.com/ChapST1?tab=repositories",
	ownerInfo: `
  Soy un diseñador apasionado por el desarrollo web y con experiencia en la creación de interfaces de usuario atractivas e intuitivas. Estoy motivado por aprender y crecer en un equipo de desarrolladores y me entusiasma la idea de contribuir a proyectos desafiantes e innovadores.`,
	cvTitle: "Ver CV online",
	cvLink:
		"https://docs.google.com/document/d/1pFmklB7zJIph55Wmlb434Vdi69xpa7G2DftrnsZxBgs/edit?usp=sharing",

	sections: {
		workExperience: {
			title: "Experiencia Laboral",
			info: `
			 Con una pasión por la tecnología y una fuerte ética de trabajo, he adquirido
			 conocimientos y habilidades con las siguientes empresas.
			`,
			data: [
				{
					imageCompany: "https://buho.la/assets/img/logo.png",
					companyName: "Grupo Caroni Computer",
					companyLink: "https://caronicomputer.com",
					job: "Practicante Diseñador web",
					time: "3 meses",
					jobInfo: `
						En Grupo Caroni Computer, importadores directos de Asia y Estados Unidos,
						me responsabilicé de la mejora de la apariencia del comercio electrónico. Para
						ello, utilicé las tecnologías HTML, CSS y JavaScript para crear un diseño moderno y
						atractivo.
						`,
					stack: {
						title: "Stack tecnologico",
						data: ["html", "css", "javaScript"],
					},
				},
				{
					imageCompany: "https://caronicomputer.com/img/logo.png",
					companyName: "Digital Buho SAC",
					companyLink: "https://buho.la/",
					job: "Practicante Frontend Developer",
					time: "9 meses",
					jobInfo: `En Digital Búho, fui capacitado en diversas tecnologías modernas como Node.js, WordPress, Git, React y TypeScript. Durante el programa, cada semana nos desafiaban a desarrollar proyectos prácticos, algunos de ellos en equipo, lo que fortaleció nuestras habilidades técnicas, de comunicación y colaboración. Todos los proyectos realizados están documentados y disponibles en mi repositorio de GitHub, demostrando la experiencia adquirida en la resolución de problemas reales y la entrega de soluciones de calidad en plazos ajustados.
						`,
					stack: {
						title: "Stack tecnologico",
						data: ["html", "css", "javaScript", "react", "node", "wordpress"],
					},
				},
			],
		},
		skills: {
			title: "Habilidades",
			info: `
				En esta sección, se describen las habilidades y
			 	conocimientos técnicos que poseo como desarrollador web. Estas habilidades
			  se han adquirido a través de mi formación académica,
			 	experiencia en prácticas y aprendizaje autodidacta.
			`,
			data: {
				languages: {
					title: "Lenguajes",
					data: [
						{
							name: icons.html.name,
							icon: icons.html.icon,
						},
						{
							name: icons.css.name,
							icon: icons.css.icon,
						},
						{
							name: icons.javascript.name,
							icon: icons.javascript.icon,
						},
						{
							name: icons.typeScript.name,
							icon: icons.typeScript.icon,
						},
						{
							name: icons.sass.name,
							icon: icons.sass.icon,
						},
					],
				},
				frameworks: {
					title: "Frameworks y Librerías",
					data: [
						{
							name: icons.next.name,
							icon: icons.next.icon,
						},

						{
							name: icons.react.name,
							icon: icons.react.icon,
						},
						{
							name: icons.tailwind.name,
							icon: icons.tailwind.icon,
						},

						{
							name: icons.astro.name,
							icon: icons.astro.icon,
						},
					],
				},
				backendStack: {
					title: "Backend Stack",
					data: [
						{
							name: icons.mySql.name,
							icon: icons.mySql.icon,
						},
						{
							name: icons.sql.name,
							icon: icons.sql.icon,
						},
					],
				},
				javascriptLibraries: {
					title: "JavaScript - Librerías",
					data: [
						{
							name: icons.zustand.name,
							icon: icons.zustand.icon,
						},
						{
							name: icons["react-router-dom"].name,
							icon: icons["react-router-dom"].icon,
						},
					],
				},
				tools: {
					title: "Herramientas",
					data: [
						{
							name: icons.git.name,
							icon: icons.git.icon,
						},
						{
							name: icons.github.name,
							icon: icons.github.icon,
						},
						{
							name: icons.wordpress.name,
							icon: icons.wordpress.icon,
						},
					],
				},
				design: {
					title: "Herramientas de diseño",
					data: [
						{
							name: icons.figma.name,
							icon: icons.figma.icon,
						},
					],
				},
				learning: {
					title: "Ampliando mi conocimiento con:",
					data: [
						{
							name: icons.node.name,
							icon: icons.node.icon,
						},
						{
							name: icons.vue.name,
							icon: icons.vue.icon,
						},
						{
							name: icons.pinia.name,
							icon: icons.pinia.icon,
						},
						{
							name: icons.angular.name,
							icon: icons.angular.icon,
						},
					],
				},
			},
		},
		projects: projects,
	},
};

