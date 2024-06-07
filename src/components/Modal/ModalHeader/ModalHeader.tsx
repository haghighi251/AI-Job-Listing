import { forwardRef } from 'react';

import { ModalHeader as FlowbiteModalHeader } from 'flowbite-react';

import { ModalHeaderProps } from '@/types/shared/types/components/modal';

// eslint-disable-next-line react/display-name
const ModalHeader = forwardRef<any, ModalHeaderProps>(
    (
        {
            id,
            className,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: ModalHeaderProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteModalHeader
                id={id}
                className={className}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteModalHeader>
        );
    },
);

export default ModalHeader;
