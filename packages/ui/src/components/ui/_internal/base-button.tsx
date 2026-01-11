import React from "react"
import { cn } from "@/lib/utils"
import * as Slot from "@radix-ui/react-slot"

import { baseButtonVariants } from "./base-button.variants"
import { accentColors } from "@/props/color.prop"

import type { ComponentPropsWithout, RemovedProps, PropsWithoutNull } from "@/helpers"
import type { VariantProps } from "class-variance-authority"

type BaseButtonElement = React.ComponentRef<"button">
type BaseButtonOwnProps = PropsWithoutNull<VariantProps<typeof baseButtonVariants>>
interface BaseButtonProps
  extends ComponentPropsWithout<"button", RemovedProps>, BaseButtonOwnProps {
  loading?: boolean
  color?: (typeof accentColors)[number]
  asChild?: boolean
}

const BaseButton = React.forwardRef<BaseButtonElement, BaseButtonProps>((props, forwardedRef) => {
  const {
    className,
    children,
    asChild,
    color,
    variant,
    radius,
    loading,
    disabled,
    size,
    ...baseButtonProps
  } = props

  // Combine disabled and loading states - loading takes priority
  const isDisabled = loading ? true : (disabled ?? false)

  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      // The `data-disabled` attribute enables correct styles when doing `<Button asChild disabled>`
      data-disabled={isDisabled || undefined}
      data-accent-color={color}
      data-radius={radius}
      {...baseButtonProps}
      ref={forwardedRef}
      className={cn(
        baseButtonVariants({
          className,
          variant,
          size,
          radius,
        })
      )}
      disabled={isDisabled}
    >
      {children}
    </Comp>
  )
})
BaseButton.displayName = "BaseButton"

export { BaseButton }
export type { BaseButtonProps }
