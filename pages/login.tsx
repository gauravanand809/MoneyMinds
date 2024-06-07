import type { NextPage } from "next";
import styles from "./login.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.logIn}>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.groupParent}>
                <img className={styles.groupIcon} alt="" src="/group.svg" />
                <b className={styles.supportingText}>Horizon</b>
              </div>
              <div className={styles.headerAndForm}>
                <div className={styles.header}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>Log in</div>
                    <div className={styles.supportingText1}>
                      Welcome back! Please enter your details.
                    </div>
                  </div>
                </div>
                <div className={styles.content1}>
                  <div className={styles.form}>
                    <div className={styles.inputField}>
                      <div className={styles.inputField}>
                        <div className={styles.label}>Email</div>
                        <div className={styles.input}>
                          <div className={styles.content2}>
                            <div className={styles.text1}>Enter your email</div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/help-icon.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.hintText}>
                        This is a hint text to help user.
                      </div>
                    </div>
                    <div className={styles.inputField}>
                      <div className={styles.inputField}>
                        <div className={styles.label}>Password</div>
                        <div className={styles.input}>
                          <div className={styles.content2}>
                            <div className={styles.text1}>
                              Enter your password
                            </div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/help-icon.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.hintText}>
                        This is a hint text to help user.
                      </div>
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <div className={styles.button}>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                      />
                      <div className={styles.text3}>Login</div>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.text4}>Don’t have an account?</div>
                  <div className={styles.button1}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder1.svg"
                    />
                    <div className={styles.text5}>Sign up</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.sectionIcon} alt="" src="/section.svg" />
      </div>
    </div>
  );
};

export default Login;
