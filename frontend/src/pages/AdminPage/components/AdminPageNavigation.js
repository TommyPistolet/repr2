import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import TabPanel from "./TabPanel";

import AdminPageClientListContainer from "../containers/AdminPageClientListContainer";

export default function AdminPageNavigation({ value, handleChange }) {
  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab value={0} label="Item One" />
          <Tab value={1} label="Item Two" />
          <Tab value={2} label="Item Three" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AdminPageClientListContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </>
  );
}
