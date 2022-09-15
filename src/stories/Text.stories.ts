import { CommonModule } from '@angular/common';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SubTextComponent } from 'src/app/components/sub-text/sub-text.component';
import { TextComponent } from 'src/app/components/text/text.component';

export default {
  title: 'Example/Text',
  component: TextComponent,
  decorators: [
    moduleMetadata({
      declarations: [TextComponent, SubTextComponent],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
} as Meta;

const Template: Story<TextComponent> = (args: TextComponent) => ({
  props: args,
});

export const SmallRed = Template.bind({});
SmallRed.args = {
  title: 'Heading',
  text: 'Subtext',
  size: 'small',
  variant: 'red',
};

export const MediumRed = Template.bind({});
MediumRed.args = {
  title: 'Heading',
  text: 'Subtext',
  size: 'medium',
  variant: 'red',
};

export const LargeRed = Template.bind({});
LargeRed.args = {
  title: 'Heading',
  text: 'Subtext',
  size: 'large',
  variant: 'red',
};

export const SmallBlue = Template.bind({});
SmallBlue.args = {
  title: 'Heading',
  text: 'Subtext',
  size: 'small',
  variant: 'blue',
};

export const MediumBlue = Template.bind({});
MediumBlue.args = {
  title: 'Heading',
  text: 'Subtext',
  size: 'medium',
  variant: 'blue',
};

export const LargeBlue = Template.bind({});
LargeBlue.args = {
  title: 'Heading',
  text: 'Subtext',
  size: 'large',
  variant: 'blue',
};

export const SmallGreen = Template.bind({});
SmallGreen.args = {
  title: 'Heading',
  text: 'Subtext',
  size: 'small',
  variant: 'green',
};

export const MediumGreen = Template.bind({});
MediumGreen.args = {
  title: 'Heading',
  text: 'Subtext',
  size: 'medium',
  variant: 'green',
};

export const LargeGreen = Template.bind({});
LargeGreen.args = {
  title: 'Heading',
  text: 'Subtext',
  size: 'large',
  variant: 'green',
};
