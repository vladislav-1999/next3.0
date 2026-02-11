import { LinkButton } from '@/ui/button/LinkButton'

export default function NotFoundPage() {
	return (
		<div className='mx-auto flex h-screen w-1/2 flex-col items-center justify-center text-center'>
			<h1 className='mb-5 text-9xl font-bold'>404</h1>
			<div className='mb-5 text-lg'>Page not found</div>
			<LinkButton href='/'>Back</LinkButton>
		</div>
	)
}
