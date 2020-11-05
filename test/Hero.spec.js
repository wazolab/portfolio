import { mount } from "@vue/test-utils";
import Hero from "@/components/Hero.vue";

describe("Hero", () => {
  test("props validation.", () => {
    expect(Hero.props).toMatchObject({
      title: {
        type: String,
        required: true
      },
      avatar: {
        type: Object
      },
      actions: {
        type: [Array, Object]
      }
    });

    // Title
    expect(Hero.props.title.validator("Hero")).toBe(true);
    expect(Hero.props.title.validator("Herooooooooooooo")).toBe(false);

    // Avatar
    expect(Hero.props.avatar.type).toBe(Object);

    // Actions
    expect(Hero.props.actions.validator([{}])).toBe(false);
    expect(Hero.props.actions.validator([{}, {}, {}, {}, {}, {}])).toBe(false);
    expect(
      Hero.props.actions.validator([
        {
          title: "Projects",
          target: "_self",
          rel: "noopen noreferrer",
          type: "freelance"
        }
      ])
    ).toBe(false);
    expect(
      Hero.props.actions.validator([
        {
          title: "Projects",
          url: "#projects",
          target: "_self",
          rel: "noopen noreferrer"
        }
      ])
    ).toBe(true);
  });

  test("props binding.", async () => {
    const wrapper = mount(Hero, {
      propsData: {
        title: "Hero"
      }
    });
    expect(wrapper.find("h1").text()).toContain("Hero");

    // Actions
    let actions = wrapper.findAll(".hero-actions a");
    expect(actions.length).toBe(0);

    await wrapper.setProps({
      actions: [
        {
          title: "Projects",
          url: "#projects",
          target: "_self",
          rel: "noopen noreferrer"
        },
        {
          title: "Contact",
          url: "#contact",
          target: "_self",
          rel: "noopen noreferrer"
        }
      ]
    });

    actions = wrapper.findAll(".hero-actions a");

    expect(actions.length).toBe(2);
    expect(actions.at(1).text()).toBe("Contact");
  });
});
