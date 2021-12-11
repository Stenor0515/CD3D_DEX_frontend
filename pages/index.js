import Head from "next/head";
import styles from "../styles/Home.module.css";
import "devextreme/dist/css/dx.light.css";
import Navbar from "../components/Header";
import MainBanner from "../components/MainBanner/Banner.jsx";
import CounterSection from "../components/Countdown";
import CD3DSection from "../components/Cd3dSec";
import UseSection from "../components/UseSection";
import SoonSection from "../components/Comingsoon";
import TokeContent from "../components/TokeContent";
import DraftSection from "../components/DraftSec";
import DexSection from "../components/DexSec";
import SocialSection from "../components/SocialSec";
import MerchSection from "../components/MerchSec";
import FaqSection from "../components/FaqSec";
import SeenSection from "../components/SeenSection";
import Typography from "@mui/material/Typography";
import Timeline from "../components/Timeline/Timeline";
import ErrorBoundary from "../components/ErrorBound/ErrorBound";
import PresaleBanner from "../components/presaleBanner/PresaleBanner";

import React, { useState } from "react";

export default function Home() {
  return (
    <ErrorBoundary>
      <div className={styles.container}>
        <Head>
          <title>CD3D</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PresaleBanner />
        <Navbar type={true} />
        <MainBanner className={styles.mainBanner} />
        <CounterSection />
        <CD3DSection />
        <UseSection />
        <SoonSection />
        <TokeContent />
        <DraftSection />
        <Timeline />
        <DexSection />
        <SocialSection />
        <MerchSection />
        <FaqSection />
        <SeenSection />
        <footer className={styles.footer}>
          <Typography variant="subtitle2" gutterBottom component="p">
            © CinemaDraft, LLC. All rights reserved.
          </Typography>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
