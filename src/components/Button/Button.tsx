import { forwardRef } from 'react';

import { Button as FlowbiteButton } from 'flowbite-react';

import { ButtonProps } from '@/types/shared/types/components/button';

// eslint-disable-next-line react/display-name
const Button = forwardRef<any, ButtonProps>(
    (
        {
            id,
            type,
            color,
            gradientMonochrome,
            gradientDuoTone,
            outline = false,
            size,
            label,
            isProcessing = false,
            processingSpinner,
            pill = false,
            disabled = false,
            className,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: ButtonProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteButton
                id={id}
                type={type}
                className={className}
                color={color}
                gradientMonochrome={gradientMonochrome}
                gradientDuoTone={gradientDuoTone}
                outline={outline}
                size={size}
                label={label}
                isProcessing={isProcessing}
                processingSpinner={processingSpinner}
                pill={pill}
                disabled={disabled}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteButton>
        );
    },
);

export default Button;
