import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch, useStayState } from "context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

const AmenitiesPage = () => {
  const stayDispatch = useStayDispatch();
  const { spaces } = useStayState();
  const [data, setData] = useState({
    spaces,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/photos");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/amenities");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <Create
          title="Amenities"
          variant="spaces"
          data={data}
          setData={setData}
        />
      }
      percentage={30}
      next={proceed}
      back={revert}
    />
  );
};

export default AmenitiesPage;