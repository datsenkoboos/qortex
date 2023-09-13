import { mount, shallowMount } from '@vue/test-utils';
import AddForm from './AddForm.vue';
import { describe, it, expect, beforeAll } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useDataStore } from '@/stores';

const nameInputSelector = '[data-testid=nameInput]';

describe('AddForm', () => {
  beforeAll(() => {
    setActivePinia(createPinia());
  });
  describe('state', () => {
    it('should render name input with "error" attr set to "false" by default', () => {
      const wrapper = shallowMount(AddForm);
      expect(wrapper.get(nameInputSelector).attributes('error')).toBe('false');
    });
  });
  describe('User Interactions', () => {
    it('empty form submit - should not call dataStore.addSong, should set "error" attr to "true" on name input', async () => {
      const wrapper = shallowMount(AddForm);
      const store = useDataStore();
      await wrapper.get('button[type="submit"]').trigger('click');

      expect(store.addSong).not.toHaveBeenCalled();
      expect(wrapper.get(nameInputSelector).attributes('error')).toBe('true');
    });
    it.todo(
      'filled form submit - should call dataStore.addSong with typed song name, should not set "error" attr to "true" on name input',
      async () => {
        const wrapper = shallowMount(AddForm);
        const store = useDataStore();
        await wrapper.get('button[type="submit"]').trigger('click');

        expect(store.addSong).not.toHaveBeenCalled();
        expect(wrapper.get(nameInputSelector).attributes('error')).toBe('true');
      }
    );
  });
});
