import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { type UseFormReset } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import type { IAuthData } from './auth-form.types'
import { type IAuthForm } from './auth-form.types'
import { PAGE } from '@/src/config/public-page.config'
import { authService } from '@/src/services/auth.service'
import { useAppDispatch } from '@/src/store'
import { clearAuthData } from '@/src/store/auth.slice'

export function useAuthForm(type: 'login' | 'register', reset: UseFormReset<IAuthForm>) {
	const router = useRouter()

	const [isPending, startTransition] = useTransition()

	const recaptchaRef = useRef<ReCAPTCHA>(null)

	const { mutateAsync, isPending: isAuthPending } = useMutation({
		mutationKey: [type],
		mutationFn: (data: IAuthData) => authService.main(type, data, recaptchaRef.current?.getValue())
	})

	const dispatch = useAppDispatch()

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		const token = recaptchaRef.current?.getValue()

		if (!token) {
			toast.error('Verify that you are not a robot', {
				id: 'recaptcha'
			})
			return
		}

		toast.promise(mutateAsync(data), {
			loading: 'Loading...',
			success: () => {
				startTransition(() => {
					reset()
					router.push(PAGE.HOME)
				})
				return 'Login successful'
			},
			error: e => {
				if (axios.isAxiosError(e)) {
					dispatch(clearAuthData())
					return e.response?.data?.message
				}
			}
		})
	}

	const isLoading = isAuthPending || isPending

	return { onSubmit, recaptchaRef, isLoading }
}
