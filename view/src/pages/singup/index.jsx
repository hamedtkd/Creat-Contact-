
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Textfield, Link, Button } from '@/components';
import { useSignup } from './useSignup';


export default function Signup() {

  const { handleSignup,
    errors,
    register,
    handleSubmit,
  } = useSignup()

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sing up an account
            </h2>
          </div>
          <form className="mt-8 space-y-6 " onSubmit={handleSubmit(handleSignup)}>
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-5">

              <Textfield
                lable='email'
                type="email"
                autoComplete="email"
                // className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                validation={{ ...register('email') }}
                error={errors.email?.message} />
              <Textfield
                validation={{ ...register('password') }}
                lable='password'
                error={errors.password?.message}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                clases='bg-gray'
                // className="relative block w-full appearance-none rounded-sm  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
              <Textfield
                validation={{ ...register('confirmPassword') }}
                lable='confirm Password'
                error={errors.confirmPassword?.message}
                id="confirm-password"
                type="password"
                autoComplete="current-password"
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                placeholder="confirm password"
              />
            </div>
            <Link href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              You had an account?
            </Link>
            <div>
              <Button
                type="submit"
                icon={
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
                  </span>
                }
              >Sign up</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
