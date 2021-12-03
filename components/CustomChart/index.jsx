import React, { useState } from 'react';
import styles from '../../styles/CustomChart.module.css';
import Image from 'next/image';
import Invert from '../invertIcon';
import CustomTab from '../CustomTab';
import { chartTabs } from '../../public/data/data';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('./chart'), {
  ssr: false,
});

function ChartContainer() {
  const [activeTab, setActiveTab] = useState('24');

  const handleOnChange = (item) => {
    setActiveTab(item);
  };

  return (
    <div className={styles.container}>
      <div className={styles.multiIconContainer}>
        <div className={styles.busdContainer}>
          <Image src={'/assets/BUSD2.png'} alt={''} height={50} width={50} />
        </div>
        <div className={styles.cd3dContainer}>
          <Image src={'/assets/CD3D.png'} alt={''} height={50} width={45} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={styles.textContainer}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={styles.titleContainer}>
              <div className={styles.titleActive}>BUSD</div>
              <div className={styles.inativeContainer}>
                <div className={styles.titleInActive}>/CD3D</div>
              </div>
            </div>
            <div style={{marginTop:"5px"}}>
              <Invert />
            </div>
          </div>
          <div className={styles.subTextContainer}>0.76154 CD3D</div>
        </div>
        <div className={styles.tabContainer}>
          {chartTabs.map((item, index) => (
            <CustomTab text={item.title} key={index} active={activeTab === item.title} handleOnChange={() => handleOnChange(item.title)} />
          ))}
        </div>
      </div>
      <Chart />
    </div>
  );
}

export default ChartContainer;
