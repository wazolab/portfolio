import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header", () => {
  it("should display proper social networks", () => {
    const wrapper = mount(Header);
    const divs = wrapper.findAll("a");
    expect(divs.at(0).attributes("href")).toBe("https://github.com/wazolab");
    expect(divs.at(1).attributes("href")).toBe(
      "https://www.linkedin.com/in/no%C3%A9-v-395bba109"
    );
  });
});
