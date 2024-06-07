import type { NextPage } from "next";
import styles from "./index.module.css";

export type BalanceCardType = {
  className?: string;
};

const BalanceCard: NextPage<BalanceCardType> = ({ className = "" }) => {
  return (
    <div className={[styles.balanceCard03, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.textParent}>
          <b className={styles.text}>Bank of Canada</b>
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

export default BalanceCard;
