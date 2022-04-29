import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

// @ts-ignore
import {Button, Panel, TitleBar, TrafficLights} from 'apple-ui';
import {TitleBarExample} from "./titlebar.stories";

export default {
    title: 'Example/Panel',
    component: Panel,
} as ComponentMeta<typeof Panel>;


const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} >
    <Panel.Body>
        <Button>Example Button</Button>
    </Panel.Body>
</Panel>;

const SecondTemplate: ComponentStory<typeof Panel> = (args) => <Panel {...args} >
    <TitleBar title={'Title'} trafficLights={<TrafficLights
        disable={false}
        onGreen={() => {
            alert("greem");
        }} onRed={() => {
        alert("red");
    }} onYellow={() => {
        alert("yellowz");
    }}/>}></TitleBar>
    <Panel.Body>
        <Button>Example Button</Button>
    </Panel.Body>
</Panel>;

export const NoBlur = Template.bind({});

NoBlur.args = {
    blur: false
};

export const Blur = Template.bind({});

Blur.args = {
    blur: true
};

export const PanelWithTitleBar = SecondTemplate.bind({});

PanelWithTitleBar.args = {
    blur: true
}
