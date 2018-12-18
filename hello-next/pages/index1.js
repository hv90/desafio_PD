
import MyLayout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
	<li>
		<Link href = {`/post?title=${props.title}`} >
			<a>{props.title}</a>
		</Link>
	</li>
)

export default () =>(
	<MyLayout>
		<h1>Loja de Discos</h1>
		<ul>
			<PostLink title="Hello Next.js"/>
			<PostLink title="Learn Next.js is awesome"/>
			<PostLink title="Deploy apps with zeit"/>
		</ul>
	</MyLayout>
)
