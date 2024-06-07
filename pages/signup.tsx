import type { NextPage } from "next";
import styles from "./signup.module.css";

const Signup: NextPage = () => {
  return (
    <div className={styles.signup}>
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
                    <div className={styles.text}>Sign up</div>
                    <div className={styles.supportingText1}>
                      Please enter your details.
                    </div>
                  </div>
                </div>
                <div className={styles.content1}>
                  <div className={styles.form}>
                    <div className={styles.formGroup}>
                      <div className={styles.inputField}>
                        <div className={styles.inputWithLabel}>
                          <div className={styles.label}>First Name</div>
                          <div className={styles.input}>
                            <div className={styles.content2}>
                              <div className={styles.text1}>John</div>
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
                        <div className={styles.inputWithLabel}>
                          <div className={styles.label}>Last Name</div>
                          <div className={styles.input1}>
                            <div className={styles.content2}>
                              <div className={styles.text2}>ex: Doe</div>
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
                    <div className={styles.inputWithLabel}>
                      <div className={styles.inputWithLabel}>
                        <div className={styles.label}>Address</div>
                        <div className={styles.input1}>
                          <div className={styles.content2}>
                            <div className={styles.text2}>
                              Enter your specific address
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
                    <div className={styles.formGroup}>
                      <div className={styles.inputField}>
                        <div className={styles.inputWithLabel}>
                          <div className={styles.label}>State</div>
                          <div className={styles.input1}>
                            <div className={styles.content2}>
                              <div className={styles.text2}>ex: NY</div>
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
                        <div className={styles.inputWithLabel}>
                          <div className={styles.label}>Postal Code</div>
                          <div className={styles.input1}>
                            <div className={styles.content2}>
                              <div className={styles.text2}>ex: 11101</div>
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
                    <div className={styles.formGroup}>
                      <div className={styles.inputField}>
                        <div className={styles.inputWithLabel}>
                          <div className={styles.label}>Date of Birth</div>
                          <div className={styles.input1}>
                            <div className={styles.content2}>
                              <div className={styles.text2}>yyyy-mm-dd</div>
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
                        <div className={styles.inputWithLabel}>
                          <div className={styles.label}>SSN</div>
                          <div className={styles.input1}>
                            <div className={styles.content2}>
                              <div className={styles.text2}>ex: 1234</div>
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
                    <div className={styles.inputWithLabel}>
                      <div className={styles.inputWithLabel}>
                        <div className={styles.label}>Email</div>
                        <div className={styles.input1}>
                          <div className={styles.content2}>
                            <div className={styles.text2}>Enter your email</div>
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
                    <div className={styles.inputWithLabel}>
                      <div className={styles.inputWithLabel}>
                        <div className={styles.label}>Password</div>
                        <div className={styles.input1}>
                          <div className={styles.content2}>
                            <div className={styles.text2}>
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
                      <div className={styles.text10}>Sign up</div>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.text11}>Don’t have an account?</div>
                  <div className={styles.button1}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder1.svg"
                    />
                    <div className={styles.text12}>Login</div>
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

export default Signup;
