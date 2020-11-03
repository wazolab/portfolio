import { mount } from "@vue/test-utils";
import Grid from "@/components/Grid";

describe("Grid", () => {
  it("should display an error message on empty data source.", () => {
    const wrapper = mount(Grid, {
      propsData: {
        dataSource: []
      }
    });
    expect(wrapper.findComponent({ name: "GridEmpty" }).exists()).toBe(true);
  });

  it("should display data in grid.", () => {
    const wrapper = mount(Grid, {
      dataSource: [
        {
          img: "aluna-festival.png",
          link: "aluna-festival.fr",
          title: "Aluna Festival",
          subtitle: "2017 / 2018 / 2019 / 2020",
          tags: ["wordpress", "sketch", "amazonS3", "acf", "svg"],
          type: "freelance"
        }
      ]
    });
    expect(wrapper.findComponent({ name: "GridEmpty" }).exists()).toBe(false);
  });
});
