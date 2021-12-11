import React, {useState} from "react";
import styles from "../../styles/farming.module.css";
import Head from "next/head";
import Navbar from "../../components/Header";
import Image from "next/image";
import Footer from "../../components/footer";
import FarmingBanner from "../../components/Farming/Pages/FarmingBanner";
import FarmingForm from "../../components/Farming/Pages/FarmingForm";
import ClearFix from "../../components/ClearFix/ClearFix";
import FarmingDialog from "../../components/Dialogs/FarmingDialog";

const Farming = () => {
    const [view, setView] = useState("mounted"); //init, loading, mounted
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.container}>
            <Head>
                <title>CD3D</title>
                <meta name='description' content='Generated by create next app'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Navbar type={false}/>
            <div className={styles.bannerImg}>
                <Image src={'/assets/images/tech.png'} alt={''} height={'450px'} width={'550px'} objectFit={"contain"}/>
            </div>
            <FarmingBanner total={1373674833.06}/>
            <FarmingForm
                view={view}
                onChange={(val) => setView(val)}
                onClaim={() => {
                }}
                onStack={() => setShowModal(true)}/>
            <ClearFix height={100}/>
            <div className={styles.popover}>
                <Image src={'/assets/homepage/popoverimg.png'} alt={''} height={'250px'} width={'250px'}/>
            </div>
            <FarmingDialog show={showModal} onClose={() => setShowModal(false)} onSubmit={() => setShowModal(false)}/>
            <Footer/>
        </div>
    );
}

export default Farming;