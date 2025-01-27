import { Meta } from '@storybook/react'
import { useState } from 'react'
import { mswDecorator } from '~/mocks/browser'
import { EventSelect } from './EventSelect'

const eventDefinitions = [
    {
        id: '017cdbec-c38f-0000-1479-bc7b9e2b6c77',
        name: '$autocapture',
        volume_30_day: null,
        query_usage_30_day: null,
        description: '',
    },
    {
        id: '017ce199-a10e-0000-6783-7167743302f4',
        name: '$capture_failed_request',
        volume_30_day: null,
        query_usage_30_day: null,
        description: '',
    },
    {
        id: '017cdbee-0c77-0000-ecf1-bd5a9e253b92',
        name: '$capture_metrics',
        volume_30_day: null,
        query_usage_30_day: null,
        description: '',
    },
]

export default {
    title: 'Filters',
    decorators: [
        mswDecorator({
            get: {
                '/api/projects/:team_id': { id: 2 },
                '/api/projects/:team_id/event_definitions': {
                    count: eventDefinitions.length,
                    next: null,
                    previous: null,
                    results: eventDefinitions,
                },
            },
        }),
    ],
    parameters: {
        chromatic: { disableSnapshot: false },
    },
} as Meta

export function EventSelect_(): JSX.Element {
    const [selectedEvents, setSelectedEvents] = useState<string[]>([])

    return (
        <EventSelect
            selectedEvents={selectedEvents}
            onChange={setSelectedEvents}
            addElement={<button>add events</button>}
        />
    )
}
