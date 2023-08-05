import Content from './components/Content/Content';
import Header from './components/Header/Header';

export const metadata = {
	title: 'Berkay - Hexaapps',
	description: 'Berkay Oruç Personal Website',
};

export default function Apps() {
	return (
		<main className="justify-center flex h-[100vh] overflow-auto">
			<Header />
			<Content />
		</main>
	);
}
