'use client'

import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import type { IAuthForm } from './auth-form.types'
import styles from './captcha.module.css'
import { useAuthForm } from './useAuthForm'
import { SkeletonLoader } from '@/src/components/ui/SkeletonLoader'
import { Button } from '@/src/components/ui/button/Button'
import { Field } from '@/src/components/ui/field/Field'
import { Logo } from '@/src/components/ui/logo/Logo'

export function Auth() {
	const [isLogin, setIsLogin] = useState(true)
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const toggleAuthTypeEnter = () => {
		setIsLogin(true)
	}

	const toggleAuthTypeRegistration = () => {
		setIsLogin(false)
	}

	const { isLoading, onSubmit, recaptchaRef } = useAuthForm(isLogin ? 'login' : 'register', reset)

	return (
		<div className='flex h-screen w-screen items-center justify-center'>
			<div className='p-layout border-border w-1/6 rounded border'>
				<div className='mb-4'>
					<Logo />
				</div>
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
					{isLoading ? (
						<SkeletonLoader count={3} />
					) : (
						<>
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

							<ReCAPTCHA
								ref={recaptchaRef}
								size='normal'
								sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
								theme='light'
								className={styles.recaptcha}
							/>
							<div className='mt-6 text-center'>
								<Button
									type='submit'
									isLoading={isLoading}
								>
									{isLogin ? 'Enter' : 'Registration'}
								</Button>
							</div>
						</>
					)}
				</form>
			</div>
		</div>
	)
}
