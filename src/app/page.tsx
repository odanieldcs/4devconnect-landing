import { Navbar } from '@/components/navbar';
import { About } from '@/components/sections/about';
import { Footer } from '@/components/sections/footer';
import { Hero } from '@/components/sections/hero';
import { HowToKnow } from '@/components/sections/how-to-know';
import { Location } from '@/components/sections/location';
import { Schedule } from '@/components/sections/schedule';
import { Sponsors } from '@/components/sections/sponsors';
import { Subscribe } from '@/components/sections/subscribe';

import { talks } from '@/config';

export default function Home() {
	return (
		<div className="flex flex-col w-full justify-center" id="main">
			<Navbar />
			<Hero />
			<About />
			<Schedule talks={talks} />
			<Subscribe />
			<Location />
			<HowToKnow />
			<Sponsors />
			<Footer />
		</div>
	);
}
