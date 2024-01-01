import React from "react";
import Hero from "@/components/landing/Hero";
import Popular from "@/components/popular_ep/Popular";
import Latest from "@/components/latest_ep/Latest";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <Latest />
    </div>
  );
};

export default Home;
