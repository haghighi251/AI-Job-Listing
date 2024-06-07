import { forwardRef } from 'react';

import { SidebarItem as FlowbiteSidebarItem } from 'flowbite-react';

import { SidebarItemProps } from '@/types/shared/types/components/sidebar';

// eslint-disable-next-line react/display-name
const SidebarItem = forwardRef<any, SidebarItemProps>(
    (
        {
            id,
            href,
            icon,
            label,
            labelColor,
            className,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: SidebarItemProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteSidebarItem
                id={id}
                href={href}
                icon={icon}
                label={label}
                labelColor={labelColor}
                className={className}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteSidebarItem>
        );
    },
);

export default SidebarItem;
