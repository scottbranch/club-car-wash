"use client"

import React from "react"
import { ChevronDown } from "lucide-react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "search" | "currency" | "url"
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  leftAddon?: string
  currencyOptions?: string[]
  error?: boolean
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      variant = "default",
      leftIcon,
      rightIcon,
      leftAddon,
      currencyOptions = ["USD", "EUR", "GBP"],
      error = false,
      helperText,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [selectedCurrency, setSelectedCurrency] = React.useState(currencyOptions[0])
    const [showCurrencyDropdown, setShowCurrencyDropdown] = React.useState(false)

    const baseStyles = `
      w-full px-3 py-2.5 text-base
      border rounded-lg
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-1
      disabled:opacity-50 disabled:cursor-not-allowed
      placeholder:text-gray-400
    `

    const getStyles = () => {
      const baseClasses = disabled ? "bg-gray-100" : "bg-transparent"
      const borderClasses = error ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-gray-300"
      return `${baseClasses} ${borderClasses} text-text-primary`
    }

    const renderInput = () => {
      const inputElement = (
        <input
          className={`${baseStyles} ${
            leftIcon || leftAddon || variant === "currency" ? "pl-10" : ""
          } ${rightIcon ? "pr-10" : ""} ${className} ${getStyles()}`}
          ref={ref}
          disabled={disabled}
          {...props}
        />
      )

      if (variant === "currency") {
        return (
          <div className="relative">
            <div className="absolute left-0 top-0 h-full flex items-center">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2.5 text-base font-medium border-r border-gray-200 text-text-secondary"
                  onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                >
                  {selectedCurrency}
                  <ChevronDown size={14} />
                </button>
                {showCurrencyDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border rounded-lg shadow-lg z-10 min-w-20 border-gray-200 bg-white">
                    {currencyOptions.map((currency) => (
                      <button
                        key={currency}
                        type="button"
                        className="w-full px-3 py-2 text-left text-base hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-text-primary"
                        onClick={() => {
                          setSelectedCurrency(currency)
                          setShowCurrencyDropdown(false)
                        }}
                      >
                        {currency}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <input
              className={`${baseStyles} pl-20 ${rightIcon ? "pr-10" : ""} ${className} ${getStyles()}`}
              ref={ref}
              disabled={disabled}
              {...props}
            />
            {rightIcon && <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{rightIcon}</div>}
          </div>
        )
      }

      if (variant === "url") {
        return (
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base font-medium text-text-secondary">
              http://
            </div>
            <input
              className={`${baseStyles} pl-16 ${rightIcon ? "pr-10" : ""} ${className} ${getStyles()}`}
              ref={ref}
              disabled={disabled}
              {...props}
            />
            {rightIcon && <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{rightIcon}</div>}
          </div>
        )
      }

      return (
        <div className="relative">
          {leftIcon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2">{leftIcon}</div>}
          {inputElement}
          {rightIcon && <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{rightIcon}</div>}
        </div>
      )
    }

    return (
      <div className="w-full">
        {renderInput()}
        {helperText && <p className="mt-1 text-base text-text-muted">{helperText}</p>}
      </div>
    )
  },
)

Input.displayName = "Input"

export { Input }
