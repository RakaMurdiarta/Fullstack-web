import React from "react";
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";
import styles from "../styles/Home.module.css";
import Head from "next/head";

import fetch from "lib/fetch";

const index = ({ story }: any) => {
  const initialStory = useStoryblokState(story);

  return (
    <div className={styles.container}>
      
    </div>
  );
};

export default index;

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let fetchApi = await fetch("home", "draft");

  if (!fetchApi) {
    return { notFound: true };
  }
  return fetchApi;
}
