import { forwardRef } from 'react';

import { Avatar } from 'flowbite-react';

import { AvatarCounterProps } from '@/types/shared/types/components/avatar';

// eslint-disable-next-line react/display-name
const AvatarCounter = forwardRef<any, AvatarCounterProps>(
    (
        {
            id,
            className,
            total,
            href,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: AvatarCounterProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <Avatar.Counter
                id={id}
                className={className}
                total={total}
                href={href}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            />
        );
    },
);

export default AvatarCounter;
