import { client } from "../libs/client";

const getData = async () => {
	const data = await client.get({
		customRequestInit: {
			cache: "no-store",
		},
		endpoint: "blog",
	});
	return data.contents;
};

export default async function Home() {
	const data = await getData();
	return (
		<ul>
			{data.map((blog: any) => (
				<li key={blog.id}>{blog.title}</li>
			))}
		</ul>
	);
}
