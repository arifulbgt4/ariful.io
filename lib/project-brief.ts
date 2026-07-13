import type { DeliveryStageId, ProductLaneId } from '@/content/site';

export const productLaneLabels = {
  software: 'Software product',
  'ai-enabled': 'AI-enabled product',
  'connected-iot': 'Connected / IoT product',
  'cross-domain': 'Cross-domain / not sure yet',
} as const satisfies Record<ProductLaneId | 'cross-domain', string>;

export const deliveryStageLabels = {
  discover: 'Discovery',
  'scope-architecture': 'Scope / architecture',
  'design-prototype': 'Design / prototype',
  'build-integrate': 'Build / integration',
  'verify-launch': 'Verify / launch',
  'handover-iterate': 'Handover / iteration',
  'improve-extend': 'Improve / extend an existing product',
  'not-sure': 'Not sure yet',
} as const satisfies Record<DeliveryStageId | 'improve-extend' | 'not-sure', string>;

export const budgetLabels = {
  'under-2000': 'Under $2,000',
  '2000-5000': '$2,000–$5,000',
  '5000-10000': '$5,000–$10,000',
  '10000-plus': '$10,000+',
  'not-decided': 'Not decided yet',
} as const;

export const timelineLabels = {
  asap: 'As soon as possible',
  'within-1-month': 'Within 1 month',
  '1-3-months': '1–3 months',
  '3-plus-months': '3+ months',
  exploring: 'Exploring options',
} as const;

export const projectBriefOptions = {
  productLanes: toOptions(productLaneLabels),
  deliveryStages: toOptions(deliveryStageLabels),
  budgets: toOptions(budgetLabels),
  timelines: toOptions(timelineLabels),
} as const;

export function optionLabel<T extends Record<string, string>>(labels: T, value: string) {
  return Object.prototype.hasOwnProperty.call(labels, value) ? labels[value as keyof T] : '';
}

function toOptions<T extends Record<string, string>>(labels: T) {
  return Object.entries(labels).map(([value, label]) => ({ value, label }));
}
