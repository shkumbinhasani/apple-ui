import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// @ts-ignore
import {TrafficLights} from 'apple-ui';

export default {
    title: 'Example/TrafficLights',
    component: TrafficLights,
} as ComponentMeta<typeof TrafficLights>;

const Template: ComponentStory<typeof TrafficLights> = (args) => <TrafficLights {...args} />;

export const Primary = Template.bind({});
