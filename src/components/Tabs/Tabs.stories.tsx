import React from 'react'
import { storiesOf } from '@storybook/react'
import Tabs from './Tabs'
import Tab from './Tab/Tab'

storiesOf('Tabs', module).add('Default', () => (
    <div style={{ fontFamily: 'Segoe UI' }}>
        <h1 style={{ margin: 8 }}>Default Tabs</h1>
        <Tabs>
            <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
            <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
            <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
        </Tabs>
        <h2 style={{ margin: '16px 8px ' }}>Sizes</h2>
        <div>
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Small</h3>

                <Tabs size='small'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>
            </div>
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Medium</h3>

                <Tabs size='medium'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>            </div>
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Large</h3>

                <Tabs size='large'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>            </div>
        </div>
    </div>
))
storiesOf('Tabs', module).add('Primary', () => (
    <div style={{ fontFamily: 'Segoe UI' }}>
        <h1 style={{ margin: 8 }}>Primary Tabs</h1>
        <Tabs theme='primary'>
            <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
            <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
            <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
        </Tabs>
        <h2 style={{ margin: '16px 8px ' }}>Sizes</h2>
        <div >
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Small</h3>

                <Tabs theme='primary' size='small'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>            </div>
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Medium</h3>

                <Tabs theme='primary' size='medium'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>            </div>
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Large</h3>

                <Tabs theme='primary' size='large'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>            </div>
        </div>
    </div>
))
storiesOf('Tabs', module).add('Secondary', () => (
    <div style={{ fontFamily: 'Segoe UI' }}>
        <h1 style={{ margin: 8 }}>Secondary Tabs</h1>
        <Tabs theme='secondary'>
            <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
            <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
            <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
        </Tabs>
        <h2 style={{ margin: '16px 8px ' }}>Sizes</h2>
        <div >
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Small</h3>

                <Tabs theme='secondary' size='small'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>            </div>
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Medium</h3>

                <Tabs theme='secondary' size='medium'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>            </div>
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Large</h3>

                <Tabs theme='secondary' size='large'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>
            </div>
        </div>
    </div>
))
storiesOf('Tabs', module).add('Dark', () => (
    <div style={{ fontFamily: 'Segoe UI' }}>
        <h1 style={{ margin: 8 }}>Dark Tabs</h1>
        <Tabs theme='dark'>
            <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
            <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
            <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
        </Tabs>
        <h2 style={{ margin: '16px 8px ' }}>Sizes</h2>
        <div>
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Small</h3>
                <Tabs theme='dark' size='small'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>            </div>
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Medium</h3>
                <Tabs theme='dark' size='medium'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>            </div>
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ margin: '16px 8px' }}>Large</h3>
                <Tabs theme='dark' size='large'>
                    <Tab label='Tab 1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Ullam sequi debitis nostrum maiores, cum accusantium ipsa, fugit accusamus quae id velit natus doloribus dolores, quam eaque impedit corporis tempora similique.</Tab>
                    <Tab label='Tab 1'>Quam eaque impedit corporis tempora similique.</Tab>
                </Tabs>
            </div>
        </div>
    </div>
))
