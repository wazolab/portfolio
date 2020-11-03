import { mount } from "@vue/test-utils";
import Hero from "@/components/Hero.vue";

describe("Hero", () => {
  const factory = propsData => {
    return mount(Hero, {
      propsData: {
        ...propsData
      }
    });
  };

  it("throw an error when no title", () => {
    expect(() => {
      factory()
        .find("h1")
        .toThrow("Missing required prop: 'title'");
    });
  });

  it("should have a title", () => {
    const wrapper = factory({
      title: "Hero"
    });
    expect(wrapper.find("h1").text()).toContain("Hero");
  });
});
