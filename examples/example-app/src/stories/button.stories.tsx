import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// @ts-ignore
import {Button} from 'apple-ui';

export default {
    title: 'Example/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Click me',
};

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Click me',
    mode: 'secondary'
};
