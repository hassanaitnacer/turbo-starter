import React from "react"

import { BaseButton } from "./_internal/base-button"

type ButtonElement = React.ComponentRef<typeof BaseButton>
interface ButtonOwnProps extends React.ComponentPropsWithoutRef<typeof BaseButton> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}
type ButtonProps = ButtonOwnProps

const Button = React.forwardRef<ButtonElement, ButtonProps>(
  ({ children, startIcon, endIcon, ...props }, forwardedRef) => {
    return (
      <BaseButton {...props} ref={forwardedRef}>
        <div className="ui:flex ui:items-center ui:gap-x-8">
          {startIcon && (
            <span
              data-slot="icon"
              className="ui:-ms-6 ui:rounded-full ui:p-4 ui:transition-colors ui:duration-300 ui:ease-out"
            >
              {startIcon}
            </span>
          )}
          <span className="ui:truncate">{children}</span>
          {endIcon && (
            <span
              data-slot="icon"
              className="ui:-me-6 ui:rounded-full ui:p-4 ui:transition-colors ui:duration-300 ui:ease-out"
            >
              {endIcon}
            </span>
          )}
        </div>
      </BaseButton>
    )
  }
)
Button.displayName = "Button"

export { Button }
export type { ButtonProps }
