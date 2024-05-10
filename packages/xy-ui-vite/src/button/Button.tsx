import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purper"
  | "pink";
export type IIcon =
  | "search"
  | "edit"
  | "check"
  | "message"
  | "star-off"
  | "delete"
  | "add"
  | "share"
  | "";
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  icon: {
    type: String as PropType<IIcon>,
    default: "search",
  },
};

export default defineComponent({
  name: "XButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
                py-2 
                px-4 
                font-semibold 
                rounded-lg 
                shadow-md 
                text-white 
                bg-${props.color}-500 
                hover:bg-${props.color}-700 
                border-none 
                cursor-pointer 
            `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
