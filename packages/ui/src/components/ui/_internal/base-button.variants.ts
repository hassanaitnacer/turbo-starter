import { cva } from "class-variance-authority"

const baseButtonVariants = cva(
  "ui:relative ui:flex ui:items-center ui:justify-center ui:h-44 ui:font-medium ui:px-16 ui:focus-visible:ring-4 ui:focus-visible:ring-blue-a7 ui:cursor-pointer ui:transition-colors ui:duration-300 ui:ease-out ui:disabled:pointer-events-none ui:disabled:opacity-30 ui:slot-icon:rounded-full ui:slot-icon:p-4 ui:slot-icon:transition-colors ui:slot-icon:duration-300 ui:slot-icon:ease-out",
  {
    variants: {
      variant: {
        solid: [
          "ui:bg-background-inverse ui:hover:bg-background-inverse-hover ui:active:bg-background-inverse-hover ui:text-foreground-inverse",
          // Icon
          "ui:slot-icon:bg-background-tertiary-inverse",
        ],
        outline: [
          "ui:bg-transparent ui:text-text-primary ui:inset-ring-1 ui:inset-ring-border-tertiary ui:hover:bg-background-primary-hover ui:active:bg-background-primary-hover ui:hover:inset-ring-border-tertiary-hover ui:active:inset-ring-border-tertiary-hover",
          // Icon
          "ui:slot-icon:bg-background-tertiary",
        ],
      },
      size: {
        medium: "",
      },
      radius: {
        full: "ui:rounded-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "medium",
      radius: "full",
    },
  }
)

export { baseButtonVariants }
