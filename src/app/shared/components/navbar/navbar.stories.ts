import type { Meta, StoryObj } from '@storybook/angular';

import { NavbarComponent } from './navbar.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<NavbarComponent> = {
  component: NavbarComponent,
};

export default meta;
type Story = StoryObj<NavbarComponent>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
