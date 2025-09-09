"use client";

import { useFormAccessibility, useScreenReaderAnnouncement } from '@/hooks/useAccessibility';
import { useState } from 'react';

interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  minLength?: number;
  pattern?: RegExp;
  placeholder?: string;
}

interface AutoAccessibleFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  submitLabel?: string;
  className?: string;
}

export const AutoAccessibleForm = ({ 
  fields, 
  onSubmit, 
  submitLabel = "Envoyer",
  className = ""
}: AutoAccessibleFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const { errors, validateField, setErrors } = useFormAccessibility();
  const { announce } = useScreenReaderAnnouncement();

  const handleInputChange = (name: string, value: string, rules: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validation en temps réel
    if (value) {
      validateField(name, value, rules);
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation complète
    let isValid = true;
    const newErrors: Record<string, string> = {};
    
    fields.forEach(field => {
      const value = formData[field.name] || '';
      const rules = {
        required: field.required,
        minLength: field.minLength,
        pattern: field.pattern
      };
      
      const error = validateField(field.name, value, rules);
      if (error) {
        newErrors[field.name] = error;
        isValid = false;
      }
    });
    
    if (!isValid) {
      setErrors(newErrors);
      announce("Veuillez corriger les erreurs dans le formulaire", "assertive");
      return;
    }
    
    onSubmit(formData);
    announce("Formulaire envoyé avec succès", "polite");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={className}
      role="form"
      aria-label="Formulaire accessible"
    >
      {fields.map(field => (
        <div key={field.name} className="mb-4">
          <label 
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {field.label}
            {field.required && (
              <span className="text-red-500 ml-1" aria-label="obligatoire">*</span>
            )}
          </label>
          
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value, {
              required: field.required,
              minLength: field.minLength,
              pattern: field.pattern
            })}
            placeholder={field.placeholder}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              errors[field.name] 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 dark:border-gray-600'
            }`}
            aria-required={field.required}
            aria-invalid={!!errors[field.name]}
            aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
          />
          
          {errors[field.name] && (
            <div 
              id={`${field.name}-error`}
              className="mt-1 text-sm text-red-600"
              role="alert"
              aria-live="polite"
            >
              {errors[field.name]}
            </div>
          )}
        </div>
      ))}
      
      <button
        type="submit"
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default AutoAccessibleForm;
