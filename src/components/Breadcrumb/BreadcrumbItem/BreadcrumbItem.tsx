import { forwardRef } from 'react';

import { BreadcrumbItem as FlowbiteBreadcrumbItem } from 'flowbite-react';

import { BreadcrumbItemProps } from '@/types/shared/types/components/breadcrumb';

// eslint-disable-next-line react/display-name
const BreadcrumbItem = forwardRef<any, BreadcrumbItemProps>(
    (
        {
            id,
            href,
            icon,
            className,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: BreadcrumbItemProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteBreadcrumbItem
                id={id}
                href={href}
                icon={icon}
                className={className}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteBreadcrumbItem>
        );
    },
);

export default BreadcrumbItem;
