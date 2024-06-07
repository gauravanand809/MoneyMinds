import type { NextPage } from "next";
import styles from "./balance-card2.module.css";

export type BalanceCard2Type = {
  className?: string;
};

const BalanceCard2: NextPage<BalanceCard2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.balanceCard01, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.textParent}>
          <b className={styles.text}>Bank of Australia</b>
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

export default BalanceCard2;
