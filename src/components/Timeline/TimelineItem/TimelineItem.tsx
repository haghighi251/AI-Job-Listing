import { forwardRef } from 'react';

import { TimelineItem as FlowbiteTimelineItem } from 'flowbite-react';

import { TimelineItemProps } from '@/types/shared/types/components/timeline';

// eslint-disable-next-line react/display-name
const TimelineItem = forwardRef<any, TimelineItemProps>(
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
        }: TimelineItemProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteTimelineItem
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
            </FlowbiteTimelineItem>
        );
    },
);

export default TimelineItem;
