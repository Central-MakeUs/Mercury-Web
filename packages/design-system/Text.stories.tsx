import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Components/Text",
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
      <Text variant="title/16_b">Title 16 Bold - The quick brown fox</Text>
      <Text variant="title/16_sb">Title 16 SemiBold - The quick brown fox</Text>
      <Text variant="title/16_m">Title 16 Medium - The quick brown fox</Text>
      <Text variant="title/14_sb">Title 14 SemiBold - The quick brown fox</Text>
      <Text variant="title/14_m">Title 14 Medium - The quick brown fox</Text>
      <Text variant="title/12_sb">Title 12 SemiBold - The quick brown fox</Text>
      <Text variant="title/12_m">Title 12 Medium - The quick brown fox</Text>
      <Text variant="title/12_r">Title 12 Regular - The quick brown fox</Text>
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
