import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

// @ts-ignore
import {TitleBar, TrafficLight, TrafficLights} from 'apple-ui';

export default {
    title: 'Example/Titlebar',
    component: TitleBar,
} as ComponentMeta<typeof TitleBar>;


const Template: ComponentStory<typeof TitleBar> = (args) => <TitleBar
    {...args}
    trafficLights={<TrafficLights
        disable={false}
        onGreen={() => {
            alert("greem");
        }} onRed={() => {
        alert("red");
    }} onYellow={() => {
        alert("yellowz");
    }}/>}
/>;

export const TitleBarExample = Template.bind({});

TitleBarExample.args = {
    title: "Your title bar"
};
