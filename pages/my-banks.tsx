import type { NextPage } from "next";
import styles from "./my-banks.module.css";

const MyBanks: NextPage = () => {
  return (
    <div className={styles.myBanks}>
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
                    src="/vuesaxoutlinedollarcircle1.svg"
                  />
                  <div className={styles.text1}>My Banks</div>
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
                    src="/vuesaxoutlinemoneysend1.svg"
                  />
                  <div className={styles.text1}>Payment Transfer</div>
                </div>
                <div className={styles.badge3}>
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
                    src="/vuesaxoutlinecardadd.svg"
                  />
                  <div className={styles.text1}>Connect Bank</div>
                </div>
                <div className={styles.badge3}>
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
              <div className={styles.text16}>My Bank Accounts</div>
              <div className={styles.supportingText2}>
                Effortlessly Manage Your Banking Activities
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
        <div className={styles.content9}>
          <div className={styles.sectionHeader}>
            <div className={styles.content10}>
              <div className={styles.textAndSupportingText2}>
                <div className={styles.text18}>Your cards</div>
                <div className={styles.supportingText3}>
                  Manage your team members and their account permissions here.
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
                <div className={styles.button4}>
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
            <img className={styles.dividerIcon} alt="" src="/divider3.svg" />
          </div>
          <div className={styles.cards}>
            <div className={styles.cards1}>
              <div className={styles.cardAndProgress}>
                <div className={styles.creditCardMockup}>
                  <img className={styles.linesIcon} alt="" src="/lines.svg" />
                  <img
                    className={styles.paymentMethodIcon}
                    alt=""
                    src="/payment-method-icon@2x.png"
                  />
                  <div className={styles.cardNumber}>1234 1234 1234 1234</div>
                  <div className={styles.cardholder}>Adrian Hajdin</div>
                  <div className={styles.text23}>Horizon Banking</div>
                  <div className={styles.expiry}>06/24</div>
                  <div className={styles.copy01Wrapper}>
                    <img
                      className={styles.copy01Icon}
                      alt=""
                      src="/copy01.svg"
                    />
                  </div>
                </div>
                <div className={styles.textAndProgressBar}>
                  <div className={styles.content10}>
                    <div className={styles.text24}>Spending this month</div>
                    <div className={styles.supportingText1}>$2,840.40</div>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressBar1}>
                      <div className={styles.background} />
                      <div className={styles.progress} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardAndProgress}>
                <div className={styles.creditCardMockup}>
                  <img className={styles.linesIcon} alt="" src="/lines.svg" />
                  <img
                    className={styles.paymentMethodIcon}
                    alt=""
                    src="/payment-method-icon@2x.png"
                  />
                  <div className={styles.cardNumber}>1234 1234 1234 1234</div>
                  <div className={styles.cardholder}>Adrian Hajdin</div>
                  <div className={styles.text23}>Bank of Australia</div>
                  <div className={styles.expiry}>06/24</div>
                  <div className={styles.copy01Wrapper}>
                    <img
                      className={styles.copy01Icon}
                      alt=""
                      src="/copy01.svg"
                    />
                  </div>
                </div>
                <div className={styles.textAndProgressBar}>
                  <div className={styles.content10}>
                    <div className={styles.text24}>Spending this month</div>
                    <div className={styles.supportingText1}>$2,840.40</div>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressBar1}>
                      <div className={styles.background} />
                      <div className={styles.progress} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardAndProgress}>
                <div className={styles.creditCardMockup}>
                  <img className={styles.linesIcon} alt="" src="/lines.svg" />
                  <img
                    className={styles.paymentMethodIcon}
                    alt=""
                    src="/payment-method-icon@2x.png"
                  />
                  <div className={styles.cardNumber}>1234 1234 1234 1234</div>
                  <div className={styles.cardholder}>Adrian Hajdin</div>
                  <div className={styles.text23}>Bank of India</div>
                  <div className={styles.expiry}>06/24</div>
                  <div className={styles.copy01Wrapper}>
                    <img
                      className={styles.copy01Icon}
                      alt=""
                      src="/copy01.svg"
                    />
                  </div>
                </div>
                <div className={styles.textAndProgressBar}>
                  <div className={styles.content10}>
                    <div className={styles.text24}>Spending this month</div>
                    <div className={styles.supportingText1}>$2,840.40</div>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressBar1}>
                      <div className={styles.background} />
                      <div className={styles.progress} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cards1}>
              <div className={styles.cardAndProgress}>
                <div className={styles.creditCardMockup3}>
                  <img className={styles.linesIcon} alt="" src="/lines.svg" />
                  <img
                    className={styles.paymentMethodIcon}
                    alt=""
                    src="/payment-method-icon@2x.png"
                  />
                  <div className={styles.cardNumber}>1234 1234 1234 1234</div>
                  <div className={styles.cardholder}>OLIVIA RHYE</div>
                  <div className={styles.text29}>Bank of America</div>
                  <div className={styles.expiry}>06/24</div>
                  <div className={styles.copy01Wrapper}>
                    <img
                      className={styles.copy01Icon}
                      alt=""
                      src="/copy01.svg"
                    />
                  </div>
                </div>
                <div className={styles.textAndProgressBar}>
                  <div className={styles.content10}>
                    <div className={styles.text24}>Spending this month</div>
                    <div className={styles.supportingText1}>$2,840.40</div>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressBar1}>
                      <div className={styles.background} />
                      <div className={styles.progress3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardAndProgress}>
                <div className={styles.creditCardMockup3}>
                  <img className={styles.linesIcon} alt="" src="/lines.svg" />
                  <img
                    className={styles.paymentMethodIcon}
                    alt=""
                    src="/payment-method-icon@2x.png"
                  />
                  <div className={styles.cardNumber}>1234 1234 1234 1234</div>
                  <div className={styles.cardholder}>OLIVIA RHYE</div>
                  <div className={styles.text29}>Bank of Canada</div>
                  <div className={styles.expiry}>06/24</div>
                  <div className={styles.copy01Wrapper}>
                    <img
                      className={styles.copy01Icon}
                      alt=""
                      src="/copy01.svg"
                    />
                  </div>
                </div>
                <div className={styles.textAndProgressBar}>
                  <div className={styles.content10}>
                    <div className={styles.text24}>Spending this month</div>
                    <div className={styles.supportingText1}>$2,840.40</div>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressBar1}>
                      <div className={styles.background} />
                      <div className={styles.progress3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardAndProgress}>
                <div className={styles.creditCardMockup3}>
                  <img className={styles.linesIcon} alt="" src="/lines.svg" />
                  <img
                    className={styles.paymentMethodIcon}
                    alt=""
                    src="/payment-method-icon@2x.png"
                  />
                  <div className={styles.cardNumber}>1234 1234 1234 1234</div>
                  <div className={styles.cardholder}>OLIVIA RHYE</div>
                  <div className={styles.text29}>Bank of Pakistan</div>
                  <div className={styles.expiry}>06/24</div>
                  <div className={styles.copy01Wrapper}>
                    <img
                      className={styles.copy01Icon}
                      alt=""
                      src="/copy01.svg"
                    />
                  </div>
                </div>
                <div className={styles.textAndProgressBar}>
                  <div className={styles.content10}>
                    <div className={styles.text24}>Spending this month</div>
                    <div className={styles.supportingText1}>$2,840.40</div>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressBar1}>
                      <div className={styles.background} />
                      <div className={styles.progress3} />
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

export default MyBanks;
