import { registerComponent, signal_script_loaded } from "render";
import { DockLayout } from "rc-dock";
import "../rc-dock.css";

const RenderDockLayout = React.forwardRef((props, ref) => <DockLayout
  ref={ref}
  onLayoutChange={() => window.dispatchEvent(new Event("resize"))}
  {...props}
/>
);

registerComponent("DockLayout", "", RenderDockLayout, "rc-dock");

signal_script_loaded("rc-dock");
