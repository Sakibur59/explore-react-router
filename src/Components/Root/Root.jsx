import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";
import "./Root.css";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);


  return (
    <div>
      <Header></Header>
        {isNavigating && <span>Loading....</span>}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
