import { Story, Meta } from '@storybook/react';
import { SemanticIconTemplate, SemanticIconTemplateProps } from './template';
import { BaseIconProps } from '..';

export default {
  title: 'Atoms/Icons/Semantic',
  component: SemanticIconTemplate,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<BaseIconProps> = (args) => (
  <div style={{ ...size }}>
    <SemanticIconTemplate {...args} />
  </div>
);
const IconBundleStory: Story<SemanticIconTemplateProps> = () => (
  <div className="flex items-center flex-wrap">
    {[
      { semanticType: 'exclamation' as const },
      { semanticType: 'warning' as const },
      { semanticType: 'plus' as const },
      { semanticType: 'minus' as const },
      { semanticType: 'check' as const },
      { semanticType: 'check' as const, circled: true },
      { semanticType: 'check' as const, inversed: true },
    ].map((args) => {
      return (
        <div className="mr-2">
          <div className="mb-2" style={{ ...size }}>
            <SemanticIconTemplate {...args} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const Exclamation = IconStory.bind({});
Exclamation.args = {
  semanticType: 'exclamation',
};

export const Warning = IconStory.bind({});
Warning.args = {
  semanticType: 'warning',
};

export const Minus = IconStory.bind({});
Minus.args = {
  semanticType: 'minus',
};

export const Plus = IconStory.bind({});
Plus.args = {
  semanticType: 'plus',
};

export const Check = IconStory.bind({});
Check.args = {
  semanticType: 'check',
};

export const CheckCircled = IconStory.bind({});
CheckCircled.args = {
  semanticType: 'check',
  circled: true,
};

export const CheckInversed = IconStory.bind({});
CheckInversed.args = {
  semanticType: 'check',
  inversed: true,
};
