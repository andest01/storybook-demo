import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import FakeComponent from './FakeComponent'


const myListOfStories = storiesOf('Welcome', module)
myListOfStories.addDecorator(withKnobs);

myListOfStories.add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);


  myListOfStories.add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => {
    const myText = text('textLabel', 'asdfasf')
    return (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        {myText}
      </span> 
    </Button>
  )
  });


myListOfStories.add('fake component', () => {
  const myText = text('textLabel', 'asdfasf')
  return <FakeComponent myTextHere={myText}/>
})