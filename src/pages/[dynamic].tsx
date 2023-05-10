import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export default function DynamicPage() {
	const { query } = useRouter()
	return (
		<>
			<h1>Dynamic Page</h1>
			<h2>Query: {query.dynamic}</h2>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			dynamic: 'hello',
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [...Array(100)].map((_, index) => ({
			params: {
				dynamic: `page-${index}`,
			},
		})),
		fallback: false,
	}
}
