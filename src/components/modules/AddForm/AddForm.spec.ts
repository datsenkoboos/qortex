// import { mount, shallowMount } from "@vue/test-utils";
// import AddForm from "./AddForm.vue";
// import { describe, it, expect, beforeAll } from "vitest";
// import { createPinia, setActivePinia } from "pinia";
// import { useDataStore } from "@/stores";

// const nameInputSelector = '[data-testid=nameInput]';
// const numberInAlbumInputSelector = '[data-testid=numberInAlbumInput]';

// describe("AddForm", () => {
//     beforeAll(() => {
//         setActivePinia(createPinia())
//     })
//     describe('state', () => {
//         it('should render name input with "error" attr set to "false" by default', () => {
//             const wrapper = shallowMount(AddForm)
//             expect(wrapper.get(nameInputSelector).attributes('error')).toBe('false')
//         })
//         it('should render numberInAlbum input with "error" attr set to "false" by default', () => {
//             const wrapper = shallowMount(AddForm)
//             expect(wrapper.get(numberInAlbumInputSelector).attributes('error')).toBe('false')
//         })
//     })
//     describe('User Interactions', () => {
//         it('empty form submit - should not call dataStore.addSong, should set "error" attr to "true" on both inputs', async () => {
//             const wrapper = shallowMount(AddForm)
//             const store = useDataStore()
//             await wrapper.get('button[type="submit"]').trigger('click')

//             expect(store.addSong).not.toHaveBeenCalled()
//             expect(wrapper.get(nameInputSelector).attributes('error')).toBe('true')
//             expect(wrapper.get(numberInAlbumInputSelector).attributes('error')).toBe('true')
//         })
//         it('empty name input form submit - should not call dataStore.addSong, should set "error" attr to "true" on name input', async () => {
//             const wrapper = mount(AddForm)
//             const store = useDataStore()

//             await wrapper.get('input[name="numberInAlbum"]').setValue(2)
//             await wrapper.get('button[type="submit"]').trigger('click')

//             expect(store.addSong).not.toHaveBeenCalled()
//             expect(wrapper.get(nameInputSelector).attributes('error')).toBe('true')
//             expect(wrapper.get(numberInAlbumInputSelector).attributes('error')).toBe('false')
//         })
//     })
// })
