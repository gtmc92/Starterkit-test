// 폼 필드 컴포넌트 (label + input + error 묶음)
// react-hook-form과 shadcn Form 컴포넌트를 사용

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form'
import { ReactNode } from 'react'

interface FormFieldComponentProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  form: UseFormReturn<TFieldValues>
  name: TName
  label: string
  placeholder?: string
  description?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'textarea'
  required?: boolean
  disabled?: boolean
  children?: ReactNode
}

/**
 * 통합 폼 필드 컴포넌트
 *
 * 기능:
 * - Label 자동 표시
 * - 입력 필드 (text, email, password, number, textarea)
 * - 에러 메시지 자동 표시
 * - 필드 설명 표시
 * - react-hook-form 완전 지원
 *
 * 사용 예:
 * <FormFieldComponent
 *   form={form}
 *   name="email"
 *   label="이메일"
 *   type="email"
 *   placeholder="example@email.com"
 *   required
 * />
 */
export function FormFieldComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  form,
  name,
  label,
  placeholder,
  description,
  type = 'text',
  required = false,
  disabled = false,
  children,
}: FormFieldComponentProps<TFieldValues, TName>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>

          <FormControl>
            {children ? (
              children
            ) : type === 'textarea' ? (
              <Textarea
                placeholder={placeholder}
                disabled={disabled}
                {...field}
              />
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                {...field}
              />
            )}
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
