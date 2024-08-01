import { registerComponent, signal_script_loaded } from "render";
import { DockLayout } from "rc-dock";
import "../rc-dock.css";

class RenderDockLayout extends React.Component {
  render() {
    return (
      <DockLayout
        onLayoutChange={() => window.dispatchEvent(new Event("resize"))}
        {...this.props}
      />
    );
  }
}

registerComponent("DockLayout", "", RenderDockLayout, "rcdock", false, true);

signal_script_loaded("rcdock");

console.log("rcdock loaded!!");