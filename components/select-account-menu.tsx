import type { NextPage } from "next";
import styles from "./select-account-menu.module.css";

export type SelectAccountMenuType = {
  className?: string;
};

const SelectAccountMenu: NextPage<SelectAccountMenuType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.selectAccountMenu, className].join(" ")}>
      <div className={styles.typeavatarGroup}>
        <div className={styles.avatarLabelGroup}>
          <div className={styles.avatar}>
            <div className={styles.text}>BA</div>
          </div>
          <div className={styles.textAndSupportingText}>
            <div className={styles.text1}>Bank of America</div>
            <div className={styles.supportingText}>$2,588.12</div>
          </div>
        </div>
      </div>
      <div className={styles.typeavatarGroup1}>
        <div className={styles.avatarLabelGroup1}>
          <div className={styles.avatar1}>
            <div className={styles.text}>CG</div>
          </div>
          <div className={styles.textAndSupportingText}>
            <div className={styles.text1}>Chase Growth Savings Account</div>
            <div className={styles.supportingText}>$2,588.12</div>
          </div>
        </div>
        <img className={styles.checkIcon} alt="" src="/check.svg" />
      </div>
      <div className={styles.typeavatarGroup}>
        <div className={styles.avatarLabelGroup}>
          <div className={styles.avatar2}>
            <div className={styles.text}>FB</div>
          </div>
          <div className={styles.textAndSupportingText}>
            <div className={styles.text1}>First Platypus Bank</div>
            <div className={styles.supportingText}>$2,588.12</div>
          </div>
        </div>
      </div>
      <div className={styles.menuItems}>
        <div className={styles.listItemGroup}>
          <div className={styles.icontrueCheckboxfalseSta}>
            <div className={styles.content}>
              <div className={styles.iconAndText}>
                <img className={styles.plusIcon} alt="" src="/plus.svg" />
                <div className={styles.text6}>Add new bank</div>
                <div className={styles.shortcut}>⌘+</div>
              </div>
              <div className={styles.shortcut1}>⌥⇧Q</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAccountMenu;
