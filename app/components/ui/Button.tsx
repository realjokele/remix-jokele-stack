import * as React from 'react'

import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cr, focusButtonStyles } from './primitive'
import { TouchTarget } from './TouchTarget'
import { Icon, type IconName } from '#/components/Icon'

import { cn } from '#/utils'

const buttonStyles = tv(
  {
    extend: focusButtonStyles,
    base: [
      'kbt32x relative isolate box-border inline-flex items-center justify-center gap-x-2 font-medium no-underline before:absolute after:absolute',
      '[&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-1 [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon]',
    ],
    variants: {
      intent: {
        primary: [
          'text-primary-fg [--btn-bg:theme(colors.primary.DEFAULT)] [--btn-border:theme(colors.primary.DEFAULT)] [--btn-hover-overlay:theme(colors.white/10%)]',
          '[--btn-icon:theme(colors.primary.fg/60%)] active:[--btn-icon:theme(colors.primary.fg/80%)] hover:[--btn-icon:theme(colors.primary.fg/80%)]',
        ],
        secondary: [
          'text-secondary-fg [--btn-bg:theme(colors.secondary.DEFAULT)] [--btn-border:theme(colors.secondary.fg/10%)] [--btn-hover-overlay:theme(colors.secondary.fg/2.5%)] data-[active]:[--btn-border:theme(colors.secondary.fg/15%)] hover:[--btn-border:theme(colors.secondary.fg/15%)] dark:[--btn-bg:theme(colors.secondary.DEFAULT)]',
          '[--btn-icon:theme(colors.muted.fg)] active:[--btn-icon:theme(colors.fg)] hover:[--btn-icon:theme(colors.fg)]',
        ],
        warning: [
          'text-warning-fg [--btn-bg:theme(colors.warning.DEFAULT)] [--btn-border:theme(colors.warning.DEFAULT)] [--btn-hover-overlay:theme(colors.white/10%)]',
          '[--btn-icon:theme(colors.warning.fg/60%)] active:[--btn-icon:theme(colors.warning.fg/80%)] hover:[--btn-icon:theme(colors.warning.fg/80%)]',
        ],
        danger: [
          'text-white [--btn-bg:theme(colors.danger.DEFAULT)] [--btn-border:theme(colors.danger.DEFAULT)] [--btn-hover-overlay:theme(colors.white/10%)]',
          '[--btn-icon:theme(colors.white/60%)] active:[--btn-icon:theme(colors.white/80%)] hover:[--btn-icon:theme(colors.white/80%)]',
        ],
      },
      appearance: {
        solid: [
          'border-transparent bg-[--btn-border]',
          'before:inset-0 before:-z-10 before:bg-[--btn-bg] before:shadow before:data-[disabled]:shadow-none',
          'after:inset-0 after:-z-10 after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:active:bg-[--btn-hover-overlay] after:data-[disabled]:shadow-none after:hover:bg-[--btn-hover-overlay]',
          'dark:border-white/5 dark:bg-[--btn-bg] dark:before:hidden dark:after:-inset-px',
        ],
        outline: [
          'border border-border text-fg [--btn-icon:theme(colors.muted.fg)]',
          'hover:bg-secondary/90 hover:[--btn-icon:theme(colors.fg)]',
          'active:bg-secondary/90 active:[--btn-icon:theme(colors.fg)]',
        ],
        plain: [
          'border-transparent text-fg [--btn-icon:theme(colors.muted.fg)]',
          'pressed:bg-secondary/90',
          'active:bg-secondary/90 active:[--btn-icon:theme(colors.fg)]',
          'hover:bg-secondary/90 hover:[--btn-icon:theme(colors.fg)]',
        ],
      },
      size: {
        icon: 'h-8 w-8 p-2',
        'extra-small': 'h-8 px-3 py-1 text-xs/4 lg:text-[0.800rem]/4',
        small: 'h-9 px-4 py-1.5 text-sm/5 lg:text-sm/5',
        medium: 'h-10 px-4 py-2 text-base lg:text-sm/6',
        large:
          'h-10 px-4 py-2.5 text-base sm:h-11 sm:px-5 lg:text-base/7 sm:[&>[data-slot=icon]]:size-5',
        'square-petite': 'size-9 shrink-0 [&_[data-slot=icon]]:text-current',
      },
      shape: {
        square:
          'rounded-lg before:rounded-[calc(theme(borderRadius.lg)-1px)] after:rounded-[calc(theme(borderRadius.lg)-1px)] dark:after:rounded-lg',
        circle:
          'rounded-[9999px] before:rounded-[9998px] after:rounded-[9998px] dark:after:rounded-[9999px]',
      },
      isDisabled: {
        true: 'cursor-default opacity-60',
      },
    },
    defaultVariants: {
      intent: 'primary',
      appearance: 'solid',
      size: 'small',
      shape: 'square',
    },
  },
  {
    responsiveVariants: ['sm', 'lg'],
  },
)

interface ButtonProps extends ButtonPrimitiveProps {
  intent?: 'primary' | 'secondary' | 'danger' | 'warning'
  size?: 'medium' | 'large' | 'square-petite' | 'extra-small' | 'small'
  shape?: 'square' | 'circle'
  appearance?: 'solid' | 'outline' | 'plain'
  iconLeft?: IconName
  iconRight?: IconName
  isLoading?: boolean
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      intent,
      appearance,
      size,
      shape,
      isLoading,
      iconLeft,
      iconRight,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <ButtonPrimitive
        ref={ref}
        {...props}
        className={cr(className, (className, renderProps) =>
          buttonStyles({
            ...renderProps,
            intent,
            appearance,
            size,
            shape,
            className,
          }),
        )}
      >
        <TouchTarget>
          <div
            className={cn(
              isLoading ? 'opacity-0' : 'opacity-100',
              'flex items-center justify-center',
            )}
          >
            {iconLeft && <Icon name={iconLeft} className="mr-2 h-4 w-4" />}
            {children}
            {iconRight && <Icon name={iconRight} className="mr-2" />}
          </div>
          <div
            className={cn(
              isLoading ? 'opacity-100' : 'opacity-0',
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform',
            )}
          >
            <Spinner />
          </div>
        </TouchTarget>
      </ButtonPrimitive>
    )
  },
)

function Spinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin text-current"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="currentColor"
      />
    </svg>
  )
}

Button.displayName = 'Button'

export { Button, ButtonPrimitive, buttonStyles, type ButtonProps }
