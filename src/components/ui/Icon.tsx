/**
 * Icon Component
 *
 * A reusable icon component that renders Radix UI icons based on a name prop.
 * Supports fast switching between preselected icons.
 *
 * Features:
 * - Dynamic icon rendering from @radix-ui/react-icons
 * - Size and className props for customization
 * - Default size for consistency
 */

import * as React from 'react';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cross2Icon,
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
  HamburgerMenuIcon,
  CalendarIcon,
  PersonIcon,
  GlobeIcon,
  RocketIcon,
  LightningBoltIcon,
  StarFilledIcon,
  HeartFilledIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ArrowLeftIcon,
  VideoIcon,
  DrawingPinIcon,
} from '@radix-ui/react-icons';

const iconMap = {
  check: CheckIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  cross: Cross2Icon,
  search: MagnifyingGlassIcon,
  filter: MixerHorizontalIcon,
  menu: HamburgerMenuIcon,
  calendar: CalendarIcon,
  users: PersonIcon,
  globe: GlobeIcon,
  rocket: RocketIcon,
  zap: LightningBoltIcon,
  sparkles: StarFilledIcon,
  heart: HeartFilledIcon,
  'external-link': ExternalLinkIcon,
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  'arrow-left': ArrowLeftIcon,
  tv: VideoIcon,
  'map-pin': DrawingPinIcon,
} as const;

export type IconName = keyof typeof iconMap;

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'children'> & {
  name: IconName;
  size?: number;
};

function Icon({ name, className, size = 16, ...props }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} width={size} height={size} {...props} />;
}

export { Icon };
