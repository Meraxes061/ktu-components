import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module).add('Default', () => (
    <div style={{ fontFamily: 'Segoe UI' }}>
        <h1 style={{ margin: 8 }}>Default Button</h1>
        <Button>Default</Button>
        <h2 style={{ margin: '16px 8px ' }}>Sizes</h2>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <div style={{ marginRight: 16 }}>
                <Button size='small'>Small</Button>
            </div>
            <div style={{ marginRight: 16 }}>
                <Button size='medium'>Medium</Button>
            </div>
            <div style={{ marginRight: 16 }}>
                <Button size='large'>Large</Button>
            </div>
        </div>
        <h2 style={{ margin: '16px 8px ' }}>Block</h2>
        <Button block>Block</Button>
    </div>
))
storiesOf('Button', module).add('Primary', () => (
    <div style={{ fontFamily: 'Segoe UI' }}>
        <h1 style={{ margin: 8 }}>Primary Button</h1>
        <Button theme='primary'>Primary</Button>
        <h2 style={{ margin: '16px 8px ' }}>Sizes</h2>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <div style={{ marginRight: 16 }}>
                <Button theme='primary' size='small'>Small</Button>
            </div>
            <div style={{ marginRight: 16 }}>
                <Button theme='primary' size='medium'>Medium</Button>
            </div>
            <div style={{ marginRight: 16 }}>
                <Button theme='primary' size='large'>Large</Button>
            </div>
        </div>
        <h2 style={{ margin: '16px 8px ' }}>Block</h2>
        <Button block theme='primary'>Block</Button>
    </div>
))
storiesOf('Button', module).add('Secondary', () => (
    <div style={{ fontFamily: 'Segoe UI' }}>
        <h1 style={{ margin: 8 }}>Secondary Button</h1>
        <Button theme='secondary'>Secondary</Button>
        <h2 style={{ margin: '16px 8px ' }}>Sizes</h2>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <div style={{ marginRight: 16 }}>
                <Button theme='secondary' size='small'>Small</Button>
            </div>
            <div style={{ marginRight: 16 }}>
                <Button theme='secondary' size='medium'>Medium</Button>
            </div>
            <div style={{ marginRight: 16 }}>
                <Button theme='secondary' size='large'>Large</Button>
            </div>
        </div>
        <h2 style={{ margin: '16px 8px ' }}>Block</h2>
        <Button block theme='secondary'>Block</Button>
    </div>
))