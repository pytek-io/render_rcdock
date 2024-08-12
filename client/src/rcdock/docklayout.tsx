/* AUTO GENERATED STUB FILE - WILL BE GENERATED ONLY ONCE - TO BE EDITED... */

import React from 'react';
import { DockLayout } from "rc-dock";

export default class RenderDockLayout extends React.Component {
  render() {
    return (
      <DockLayout
        onLayoutChange={() => window.dispatchEvent(new Event("resize"))}
        {...this.props}
      />
    );
  }
}
