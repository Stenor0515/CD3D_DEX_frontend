import React from "react";
import styles from "../styles/token.module.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BidPlace from "../components/TokenPage/BidPlace";
import BuyTokens from "../components/TokenPage/BuyTokens";
import Header from "../components/Header";
import { styled } from "@mui/material/styles";

const CustomContainer = styled(Container)(({ theme }) => ({
  width: 1400,
}));
const Token = () => {
  return (
    <>
      <Header />
      <div className={styles.tokenOuter}>
        <CustomContainer fixed>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <div className={styles.bidOuter}>
                <BidPlace />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={styles.buyTokeOuter}>
                <BuyTokens />
              </div>
            </Grid>
          </Grid>
        </CustomContainer>
      </div>
    </>
  );
};

export default Token;
