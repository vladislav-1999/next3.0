'use client'

import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/src/components/ui/button/Button'
import { Field } from '@/src/components/ui/field/Field'

interface IAuthForm {
	email: string
	password: string
	confirmPassword: string
}

export function Auth() {
	const [isLogin, setIsLogin] = useState(true)
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		if (isLogin) {
			console.log('login', data)
		} else {
			console.log('reg', data)
		}
	}

	const toggleAuthTypeEnter = () => {
		setIsLogin(true)
	}

	const toggleAuthTypeRegistration = () => {
		setIsLogin(false)
	}

	return (
		<div className='flex h-screen w-screen items-center justify-center'>
			<div className='p-layout border-border w-1/6 rounded border'>
				<div className='mb-6 flex justify-center'>
					<button
						onClick={toggleAuthTypeEnter}
						className={`px-4 py-2 font-semibold ${
							isLogin
								? 'text-primary border-pritext-primary cursor-default border-b-2'
								: 'cursor-pointer text-gray-600'
						}`}
					>
						Login
					</button>
					<button
						onClick={toggleAuthTypeRegistration}
						className={`px-4 py-2 font-semibold ${
							!isLogin
								? 'text-primary border-pritext-primary cursor-default border-b-2'
								: 'cursor-pointer text-gray-600'
						}`}
					>
						Registration
					</button>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						label='Email'
						type='email'
						registration={register('email', { required: 'Email is required' })}
						error={errors.email?.message}
					></Field>
					<Field
						label='Password'
						type='password'
						registration={register('password', { required: 'Password is required' })}
						error={errors.password?.message}
					></Field>
					{!isLogin && (
						<Field
							label='Password Confirm'
							type='password'
							registration={register('confirmPassword', {
								required: 'Password needs confirm',
								validate: value => value === watch('password') || 'Passwords do not match'
							})}
							error={errors.confirmPassword?.message}
						></Field>
					)}
					<div className='mt-6 text-center'>
						<Button type='submit'>{isLogin ? 'Enter' : 'Registration'}</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
