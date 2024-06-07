import type { NextPage } from "next";
import styles from "./balance-card1.module.css";

export type BalanceCard1Type = {
  className?: string;
};

const BalanceCard1: NextPage<BalanceCard1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.balanceCard02, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.textParent}>
          <b className={styles.text}>Bank of America</b>
          <div className={styles.supportingText}>
            Chase Growth Savings Account
          </div>
        </div>
        <div className={styles.supportingTextWrapper}>
          <div className={styles.supportingText1}>●●●● ●●●● ●●●● 9999</div>
        </div>
      </div>
      <div className={styles.textAndAction}>
        <div className={styles.textAndNumber}>
          <div className={styles.heading}>Current Balance</div>
          <div className={styles.number}>$41,382.80</div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard1;
