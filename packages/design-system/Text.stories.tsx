import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "ds/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Text variant="title/25_b">Title 25 Bold - The quick brown fox</Text>
      <Text variant="title/25_sb">Title 25 SemiBold - The quick brown fox</Text>
      <Text variant="title/25_m">Title 25 Medium - The quick brown fox</Text>
      <Text variant="title/24_sb">Title 24 SemiBold - The quick brown fox</Text>
      <Text variant="title/24_m">Title 24 Medium - The quick brown fox</Text>
      <Text variant="title/20_b">Title 20 Bold - The quick brown fox</Text>
      <Text variant="title/20_sb">Title 20 SemiBold - The quick brown fox</Text>
      <Text variant="body/18_b">Body 18 Bold - The quick brown fox</Text>
      <Text variant="body/18_sb">Body 18 SemiBold - The quick brown fox</Text>
      <Text variant="body/18_m">Body 18 Medium - The quick brown fox</Text>
      <Text variant="body/16_sb">Body 16 SemiBold - The quick brown fox</Text>
      <Text variant="body/16_m">Body 16 Medium - The quick brown fox</Text>
      <Text variant="body/15_r">Body 15 Regular - The quick brown fox</Text>
      <Text variant="body/15_sb">Body 15 SemiBold - The quick brown fox</Text>
      <Text variant="body/15_m">Body 15 Medium - The quick brown fox</Text>
      <Text variant="body/14_sb">Body 14 SemiBold - The quick brown fox</Text>
      <Text variant="body/14_m">Body 14 Medium - The quick brown fox</Text>
      <Text variant="body/13_r">Body 13 Regular - The quick brown fox</Text>
      <Text variant="caption/12_sb">Caption 12 SemiBold - The quick brown fox</Text>
      <Text variant="caption/12_m">Caption 12 Medium - The quick brown fox</Text>
      <Text variant="caption/12_r">Caption 12 Regular - The quick brown fox</Text>
    </div>
  ),
};

export const SingleVariant: Story = {
  args: {
    variant: "title/25_b",
    children: "Title 25 Bold Text",
  },
};

export const CustomClassName: Story = {
  args: {
    variant: "title/20_sb",
    className: "text-blue-500 italic",
    children: "Custom Styled Text",
  },
};

export const AsHeading: Story = {
  args: {
    variant: "title/25_b",
    as: "h1",
    children: "This is a heading",
  },
};
