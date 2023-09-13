import { shallowMount } from '@vue/test-utils';
import AlbumSelector from './AlbumSelector.vue';
import { describe, it, expect, beforeAll } from 'vitest';
import { createPinia, getActivePinia, setActivePinia } from 'pinia';
import { useDataStore } from '@/stores';

describe('AlbumSelector', () => {
  describe('state', () => {
    it('dataStore.getAlbums() - should render albums correctly', () => {
      const wrapper = shallowMount(AlbumSelector, {
        global: {
          plugins: [createPinia()],
          renderStubDefaultSlot: true,
        },
      });
      const store = useDataStore();

      expect(wrapper.get('[data-testid=album-1-artist]').text()).toBe(
        store.data.albums['1'].artist.name
      );
      expect(wrapper.get('[data-testid=album-1-release]').text()).toBe(
        store.data.albums['1'].releaseYear.toString()
      );

      expect(wrapper.get('[data-testid=album-10-artist]').text()).toBe(
        store.data.albums['10'].artist.name
      );
      expect(wrapper.get('[data-testid=album-10-release]').text()).toBe(
        store.data.albums['10'].releaseYear.toString()
      );
    });
    it('should select and style first album on mount and emit its id', () => {
      const wrapper = shallowMount(AlbumSelector, {
        global: {
          plugins: [createPinia()],
        },
      });
      expect(wrapper.emitted()).toHaveProperty('update:value');
      expect(wrapper.emitted('update:value')).toHaveLength(1);
      expect(wrapper.emitted('update:value')![0][0]).toBe('1');

      const firstAlbum = wrapper.get('[data-testid=album-1]');

      expect(firstAlbum.attributes('flat')).toBe('true');
      expect(firstAlbum.attributes('outline')).toBe('false');
      expect(firstAlbum.classes()).toContain('bg-blue-700');
      expect(firstAlbum.classes()).toContain('text-white');
    });
  });
  describe('User Interactions', () => {
    it('click - should select clicked album and emit its id and apply styles', async () => {
      const testId = '2';
      const wrapper = shallowMount(AlbumSelector, {
        global: {
          plugins: [createPinia()],
        },
      });

      const testAlbum = wrapper.get(`[data-testid=album-${testId}]`);

      // should render testAlbum without selected styles first
      expect(testAlbum.attributes('flat')).toBe('false');
      expect(testAlbum.attributes('outline')).toBe('true');
      expect(testAlbum.classes()).not.toContain('bg-blue-700');
      expect(testAlbum.classes()).not.toContain('text-white');

      await wrapper.get(`[data-testid=album-${testId}]`).trigger('click');

      // should render testAlbum with selected styles after click
      expect(testAlbum.attributes('flat')).toBe('true');
      expect(testAlbum.attributes('outline')).toBe('false');
      expect(testAlbum.classes()).toContain('bg-blue-700');
      expect(testAlbum.classes()).toContain('text-white');

      // should remove selected styles from first album
      const firstAlbum = wrapper.get('[data-testid=album-1]');
      expect(firstAlbum.attributes('flat')).toBe('false');
      expect(firstAlbum.attributes('outline')).toBe('true');
      expect(firstAlbum.classes()).not.toContain('bg-blue-700');
      expect(firstAlbum.classes()).not.toContain('text-white');

      // should emit id of clicked test album
      expect(wrapper.emitted('update:value')).toHaveLength(2);
      expect(wrapper.emitted('update:value')![1][0]).toBe(testId);
    });
  });
});
