import { forwardRef } from 'react';

import { TimelineBody as FlowbiteTimelineBody } from 'flowbite-react';

import { TimelineBodyProps } from '@/types/shared/types/components/timeline';

// eslint-disable-next-line react/display-name
const TimelineBody = forwardRef<any, TimelineBodyProps>(
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
        }: TimelineBodyProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteTimelineBody
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
            </FlowbiteTimelineBody>
        );
    },
);

export default TimelineBody;
