import { shallowMount } from '@vue/test-utils';
import AppLink from './AppLink.vue';
import { describe, it, expect } from 'vitest';

describe('AppLink', () => {
  describe('props', () => {
    it('to - should render RouterLink with set "to" attr', () => {
      const testTo = 'test-to';
      const wrapper = shallowMount(AppLink, {
        props: {
          to: testTo,
        },
      });
      expect(wrapper.get('[data-testid=routerLink]').attributes('to')).toBe(
        testTo
      );
    });
  });
});
