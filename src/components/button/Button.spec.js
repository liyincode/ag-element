import Button from './Button.vue';
import { mount } from '@vue/test-utils';
describe('按钮测试', () => {
    it('按钮能够显示文本', () => {
        const content = 'Hello World';
        const wrapper = mount(Button, {
            slots: {
                default: content
            }
        });
        expect(wrapper.text()).toBe(content);
    });
    it('通过 size 属性控制大小', function () {
        const size = 'small';
        const wrapper = mount(Button, {
            props: {
                size
            }
        });
        expect(wrapper.classes()).toContain('ag-button--small');
    });
});
//# sourceMappingURL=Button.spec.js.map