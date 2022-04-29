import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// @ts-ignore
import {TrafficLight} from 'apple-ui';

export default {
    title: 'Example/TrafficLight',
    component: TrafficLight,
    argTypes: {
        color: {
            options: [undefined, 'red', 'yellow', 'green'],
            control: { type: 'radio' },
        },
        disabled: { control: 'boolean' }
    },
} as ComponentMeta<typeof TrafficLight>;


const Template: ComponentStory<typeof TrafficLight> = (args) => <TrafficLight {...args}/>;

export const Basic = Template.bind({});

export const Red = Template.bind({});

Red.args = {
    color: 'red'
}

export const Yellow = Template.bind({});

Yellow.args = {
    color: 'yellow'
}

export const Green = Template.bind({});

Green.args = {
    color: 'green'
}
