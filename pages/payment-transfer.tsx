import type { NextPage } from "next";
import styles from "./payment-transfer.module.css";

const PaymentTransfer: NextPage = () => {
  return (
    <div className={styles.paymentTransfer}>
      <div className={styles.sidebarNavigation}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <div className={styles.header}>
              <div className={styles.groupParent}>
                <img className={styles.groupIcon} alt="" src="/group.svg" />
                <b className={styles.supportingText}>Horizon</b>
              </div>
            </div>
            <div className={styles.search}>
              <div className={styles.inputDropdown}>
                <div className={styles.inputWithLabel}>
                  <div className={styles.label}>Search</div>
                  <div className={styles.input}>
                    <div className={styles.content1}>
                      <img
                        className={styles.searchLgIcon}
                        alt=""
                        src="/searchlg.svg"
                      />
                      <div className={styles.text}>Search</div>
                    </div>
                  </div>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
            </div>
            <div className={styles.navigation}>
              <div className={styles.navItemBase}>
                <div className={styles.content2}>
                  <img className={styles.dotIcon} alt="" src="/-dot.svg" />
                  <img
                    className={styles.vuesaxoutlinehome2Icon}
                    alt=""
                    src="/vuesaxoutlinehome2.svg"
                  />
                  <div className={styles.text1}>Home</div>
                </div>
                <div className={styles.badge}>
                  <div className={styles.text2}>10</div>
                </div>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
              <div className={styles.navItemBase1}>
                <div className={styles.content2}>
                  <img className={styles.dotIcon} alt="" src="/-dot.svg" />
                  <img
                    className={styles.vuesaxoutlinehome2Icon}
                    alt=""
                    src="/vuesaxoutlinedollarcircle.svg"
                  />
                  <div className={styles.text1}>My Banks</div>
                </div>
                <div className={styles.badge1}>
                  <div className={styles.text2}>10</div>
                </div>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
              <div className={styles.navItemBase}>
                <div className={styles.content2}>
                  <img className={styles.dotIcon} alt="" src="/-dot.svg" />
                  <img
                    className={styles.vuesaxoutlinehome2Icon}
                    alt=""
                    src="/vuesaxoutlinereceiptitem.svg"
                  />
                  <div className={styles.text1}>Transaction History</div>
                </div>
                <div className={styles.badge}>
                  <div className={styles.text2}>10</div>
                </div>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
              <div className={styles.navItemBase3}>
                <div className={styles.content2}>
                  <img className={styles.dotIcon} alt="" src="/-dot.svg" />
                  <img
                    className={styles.vuesaxoutlinehome2Icon}
                    alt=""
                    src="/vuesaxoutlinemoneysend.svg"
                  />
                  <div className={styles.text1}>Payment Transfer</div>
                </div>
                <div className={styles.badge}>
                  <div className={styles.text2}>10</div>
                </div>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
              <div className={styles.navItemBase1}>
                <div className={styles.content2}>
                  <img className={styles.dotIcon} alt="" src="/-dot.svg" />
                  <img
                    className={styles.vuesaxoutlinehome2Icon}
                    alt=""
                    src="/vuesaxoutlinecardadd.svg"
                  />
                  <div className={styles.text1}>Connect Bank</div>
                </div>
                <div className={styles.badge1}>
                  <div className={styles.text2}>10</div>
                </div>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.account}>
              <div className={styles.avatarLabelGroup}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar@2x.png"
                />
                <div className={styles.textAndSupportingText}>
                  <div className={styles.text11}>Adrian Hajdin</div>
                  <div className={styles.supportingText1}>
                    adrian@jsmastery.pro
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <img
                  className={styles.searchLgIcon}
                  alt=""
                  src="/logout01.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.headerSection}>
          <div className={styles.container}>
            <div className={styles.pageHeader}>
              <div className={styles.breadcrumbs}>
                <div className={styles.tabs}>
                  <div className={styles.breadcrumbButtonBase}>
                    <img
                      className={styles.searchLgIcon}
                      alt=""
                      src="/homeline.svg"
                    />
                  </div>
                  <img
                    className={styles.chevronRightIcon}
                    alt=""
                    src="/chevronright.svg"
                  />
                  <div className={styles.breadcrumbButtonBase1}>
                    <div className={styles.text12}>Settings</div>
                  </div>
                  <img
                    className={styles.chevronRightIcon}
                    alt=""
                    src="/chevronright.svg"
                  />
                  <div className={styles.breadcrumbButtonBase1}>
                    <div className={styles.text12}>...</div>
                  </div>
                  <img
                    className={styles.chevronRightIcon}
                    alt=""
                    src="/chevronright.svg"
                  />
                  <div className={styles.breadcrumbButtonBase3}>
                    <div className={styles.text12}>Another link</div>
                  </div>
                  <img
                    className={styles.chevronRightIcon3}
                    alt=""
                    src="/chevronright.svg"
                  />
                  <div className={styles.breadcrumbButtonBase4}>
                    <div className={styles.text11}>Team</div>
                  </div>
                </div>
              </div>
              <div className={styles.content7}>
                <div className={styles.textAndSupportingText1}>
                  <div className={styles.text16}>Payment Transfer</div>
                  <div className={styles.supportingText2}>
                    Please provide any specific details or notes related to the
                    payment transfer
                  </div>
                </div>
                <div className={styles.actions}>
                  <div className={styles.button1}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className={styles.text11}>Tertiary</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder1.svg"
                    />
                    <div className={styles.text11}>Secondary</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder1.svg"
                    />
                  </div>
                  <div className={styles.button3}>
                    <img
                      className={styles.searchLgIcon}
                      alt=""
                      src="/currencydollar.svg"
                    />
                    <div className={styles.text11}>Deposit</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder3.svg"
                    />
                  </div>
                  <div className={styles.button4}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder4.svg"
                    />
                    <div className={styles.text11}>Send funds</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder4.svg"
                    />
                  </div>
                </div>
                <div className={styles.inputDropdown1}>
                  <div className={styles.inputWithLabel}>
                    <div className={styles.label}>Search</div>
                    <div className={styles.input}>
                      <div className={styles.content1}>
                        <img
                          className={styles.searchLgIcon}
                          alt=""
                          src="/searchlg.svg"
                        />
                        <div className={styles.text}>Search</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.hintText}>
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <img className={styles.dividerIcon} alt="" src="/divider.svg" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.container1}>
            <div className={styles.pageHeader}>
              <div className={styles.content9}>
                <div className={styles.textAndSupportingText2}>
                  <div className={styles.text22}>Transfer details</div>
                  <div className={styles.supportingText3}>
                    Enter the details of the recipient
                  </div>
                </div>
                <div className={styles.actions1}>
                  <div className={styles.button5}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className={styles.text11}>Tertiary</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                  </div>
                  <div className={styles.button6}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder1.svg"
                    />
                    <div className={styles.text11}>Secondary</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder1.svg"
                    />
                  </div>
                  <div className={styles.button3}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder3.svg"
                    />
                    <div className={styles.text11}>Secondary</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder3.svg"
                    />
                  </div>
                  <div className={styles.button8}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder4.svg"
                    />
                    <div className={styles.text11}>Primary</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder4.svg"
                    />
                  </div>
                </div>
                <div className={styles.textAndSupportingText}>
                  <img
                    className={styles.searchLgIcon}
                    alt=""
                    src="/dotsvertical.svg"
                  />
                </div>
              </div>
              <img className={styles.dividerIcon1} alt="" src="/divider.svg" />
            </div>
            <div className={styles.form}>
              <div className={styles.content10}>
                <div className={styles.textAndSupportingText3}>
                  <div className={styles.text27}>Select Source Bank</div>
                  <div className={styles.supportingText4}>
                    Select the bank account you want to transfer funds from
                  </div>
                </div>
                <div className={styles.inputField}>
                  <div className={styles.hintText2}>
                    This is a hint text to help user.
                  </div>
                  <div className={styles.button9}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder3.svg"
                    />
                    <div className={styles.tabs}>
                      <img
                        className={styles.creditCard02Icon}
                        alt=""
                        src="/creditcard02.svg"
                      />
                      <div className={styles.text12}>Select Account</div>
                    </div>
                    <img
                      className={styles.searchLgIcon}
                      alt=""
                      src="/chevronup.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divider} />
              <div className={styles.content10}>
                <div className={styles.textAndSupportingText3}>
                  <div className={styles.text27}>Transfer Note (Optional)</div>
                  <div
                    className={styles.supportingText4}
                  >{`Please provide any additional information or instructions related to the transfer `}</div>
                </div>
                <div className={styles.toolbarAndTextInput}>
                  <div className={styles.headerSection}>
                    <div className={styles.inputWithLabel2}>
                      <div className={styles.label2}>Description</div>
                      <div className={styles.input2}>
                        <div className={styles.text30}>
                          <p className={styles.dearJohn}>Dear John,</p>
                          <p className={styles.iHopeThis}>
                            I hope this message finds you well. I am
                            transferring $100 to your account for fun. Please
                            confirm once you receive it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.dividerIcon1} alt="" src="/divider.svg" />
            <div className={styles.pageHeader}>
              <div className={styles.content9}>
                <div className={styles.textAndSupportingText2}>
                  <div className={styles.text22}>Bank account details</div>
                  <div className={styles.supportingText3}>
                    Enter the bank account details of the recipient
                  </div>
                </div>
                <div className={styles.actions1}>
                  <div className={styles.button5}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className={styles.text11}>Tertiary</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                  </div>
                  <div className={styles.button6}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder1.svg"
                    />
                    <div className={styles.text11}>Secondary</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder1.svg"
                    />
                  </div>
                  <div className={styles.button3}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder3.svg"
                    />
                    <div className={styles.text11}>Secondary</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder3.svg"
                    />
                  </div>
                  <div className={styles.button8}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder4.svg"
                    />
                    <div className={styles.text11}>Primary</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder4.svg"
                    />
                  </div>
                </div>
                <div className={styles.textAndSupportingText}>
                  <img
                    className={styles.searchLgIcon}
                    alt=""
                    src="/dotsvertical.svg"
                  />
                </div>
              </div>
              <img className={styles.dividerIcon1} alt="" src="/divider.svg" />
            </div>
            <div className={styles.form}>
              <div className={styles.content10}>
                <div className={styles.text36}>Recipient's Email Address</div>
                <div className={styles.inputField1}>
                  <div className={styles.input3}>
                    <div className={styles.content14}>
                      <div className={styles.text30}>john@gmail.com</div>
                    </div>
                    <img
                      className={styles.helpIcon}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <div className={styles.hintText3}>
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <div className={styles.divider} />
              <div className={styles.content10}>
                <div className={styles.text36}>
                  Recipient's Bank Account Number
                </div>
                <div className={styles.inputField2}>
                  <div className={styles.input3}>
                    <div className={styles.content14}>
                      <div className={styles.text30}>
                        Enter the account number
                      </div>
                    </div>
                    <img
                      className={styles.helpIcon}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <div className={styles.hintText3}>
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <div className={styles.divider} />
              <div className={styles.content10}>
                <div className={styles.text36}>Amount</div>
                <div className={styles.inputField3}>
                  <div className={styles.input3}>
                    <div className={styles.content14}>
                      <div className={styles.text30}>40000</div>
                    </div>
                    <img
                      className={styles.helpIcon}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <div className={styles.hintText5}>
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <div className={styles.sectionFooter}>
                <img
                  className={styles.dividerIcon1}
                  alt=""
                  src="/divider1.svg"
                />
                <div className={styles.content19}>
                  <div className={styles.button14}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className={styles.text11}>Learn more</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                  </div>
                  <div className={styles.actions3}>
                    <div className={styles.button1}>
                      <img
                        className={styles.chevronDownIcon}
                        alt=""
                        src="/placeholder2.svg"
                      />
                      <div className={styles.text11}>Tertiary</div>
                      <img
                        className={styles.chevronDownIcon}
                        alt=""
                        src="/placeholder2.svg"
                      />
                    </div>
                    <div className={styles.button16}>
                      <img
                        className={styles.chevronDownIcon}
                        alt=""
                        src="/placeholder4.svg"
                      />
                      <div className={styles.text11}>Transfer Funds</div>
                      <img
                        className={styles.chevronDownIcon}
                        alt=""
                        src="/placeholder4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTransfer;
