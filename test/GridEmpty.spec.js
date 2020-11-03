import { mount } from "@vue/test-utils";
import GridEmpty from "@/components/GridEmpty";

describe("GridEmpty", () => {
  it("has default error message.", () => {
    const wrapper = mount(GridEmpty);
    expect(wrapper.find("p").text()).toBe("0 items to be shown.");
  });

  it("has custom error message.", () => {
    const wrapper = mount(GridEmpty, {
      propsData: {
        message: "test message"
      }
    });
    expect(wrapper.find("p").text()).toBe("test message");
  });
});
