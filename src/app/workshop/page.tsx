import Counter from './counter';

export const metadata = {
	title: 'Workshop',
	description: 'Workshop',
};

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export default async function Workshop() {
	const dataFetch = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await dataFetch.json();

	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		fetch('https://jsonplaceholder.typicode.com/posts')
	// 			.then((response) => response.json())
	// 			.then((json) => setData(json));
	// 	}

	// 	fetchData();
	// }, []);

	return (
		<main className="m-10 text-4xl">
			<h1>merhaba</h1>
			<Counter />
			<div className="grid grid-cols-2 gap-4 mt-20">
				{data &&
					data.map((item: Post) => (
						<div key={item.id} className="bg-gray-200 rounded-md p-4">
							<h2>{item.title}</h2>
							<p>{item.body}</p>
						</div>
					))}
			</div>
		</main>
	);
}
