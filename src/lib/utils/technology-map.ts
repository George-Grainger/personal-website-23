import type { ComponentType } from 'svelte';
import Assembly from '$lib/assets/projects/logos/Assembly.svelte';
import Cpp from '$lib/assets/projects/logos/Cpp.svelte';
import Firebase from '$lib/assets/projects/logos/Firebase.svelte';
import Heart from '$lib/assets/projects/logos/Heart.svelte';
import IoT from '$lib/assets/projects/logos/IoT.svelte';
import Java from '$lib/assets/projects/logos/Java.svelte';
import JUnit from '$lib/assets/projects/logos/JUnit.svelte';
import NextJs from '$lib/assets/projects/logos/NextJS.svelte';
import OpenSource from '$lib/assets/projects/logos/OpenSource.svelte';
import Python from '$lib/assets/projects/logos/Python.svelte';
import Research from '$lib/assets/projects/logos/Research.svelte';
import SolidJs from '$lib/assets/projects/logos/SolidJS.svelte';
import TailwindCss from '$lib/assets/projects/logos/TailwindCSS.svelte';
import W3C from '$lib/assets/projects/logos/W3C.svelte';
import WordPress from '$lib/assets/projects/logos/WordPress.svelte';

export interface TechnologyInfo {
	name: string;
	href?: string;
	component: ComponentType;
}

const TECHNOLOGIES = {
	assembly: {
		name: 'Assembly',
		href: 'https://www.assemblyscript.org/',
		component: Assembly
	},
	cpp: {
		name: 'C++',
		href: 'https://en.wikipedia.org/wiki/C%2B%2B',
		component: Cpp
	},
	firebase: {
		name: 'Firebase',
		href: 'https://firebase.google.com/',
		component: Firebase
	},
	love: {
		name: 'Love',
		component: Heart
	},
	iot: {
		name: 'IoT',
		href: 'https://en.wikipedia.org/wiki/Internet_of_things',
		component: IoT
	},
	java: {
		name: 'Java',
		href: 'https://www.java.com/',
		component: Java
	},
	junit: {
		name: 'JUnit',
		href: 'https://junit.org/junit5/',
		component: JUnit
	},
	nextjs: {
		name: 'NextJs',
		href: 'https://nextjs.org/',
		component: NextJs
	},
	opensource: {
		name: 'Open-Source',
		href: 'https://opensource.org/',
		component: OpenSource
	},
	python: {
		name: 'Python',
		href: 'https://www.python.org/',
		component: Python
	},
	research: {
		name: 'Research',
		component: Research
	},
	solidjs: {
		name: 'SolidJS',
		href: 'https://www.solidjs.com/',
		component: SolidJs
	},
	tailwind: {
		name: 'TailwindCSS',
		href: 'https://tailwindcss.com/',
		component: TailwindCss
	},
	accessibility: {
		name: 'Accessibility',
		href: 'https://www.w3.org/',
		component: W3C
	},
	wordpress: {
		name: 'WordPress',
		href: 'https://wordpress.org/',
		component: WordPress
	}
};

// Solve issue with type either not correctly mapping keys or values
export const technologyMap: Record<keyof typeof TECHNOLOGIES, TechnologyInfo> = TECHNOLOGIES;