import type { NextPage } from "next";
import styles from "./transaction-history.module.css";

const TransactionHistory: NextPage = () => {
  return (
    <div className={styles.transactionHistory}>
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
              <div className={styles.navItemBase2}>
                <div className={styles.content2}>
                  <img className={styles.dotIcon} alt="" src="/-dot.svg" />
                  <img
                    className={styles.vuesaxoutlinehome2Icon}
                    alt=""
                    src="/vuesaxoutlinereceiptitem1.svg"
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
              <div className={styles.navItemBase1}>
                <div className={styles.content2}>
                  <img className={styles.dotIcon} alt="" src="/-dot.svg" />
                  <img
                    className={styles.vuesaxoutlinehome2Icon}
                    alt=""
                    src="/vuesaxoutlinemoneysend1.svg"
                  />
                  <div className={styles.text1}>Payment Transfer</div>
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
                  <div className={styles.text16}>Transaction history</div>
                  <div className={styles.supportingText2}>
                    Gain Insights and Track Your Transactions Over Time
                  </div>
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.chevronDownIcon}
                    alt=""
                    src="/placeholder3.svg"
                  />
                  <img
                    className={styles.creditCard02Icon}
                    alt=""
                    src="/creditcard02.svg"
                  />
                  <div className={styles.text11}>Select Account</div>
                  <img
                    className={styles.searchLgIcon}
                    alt=""
                    src="/chevronup1.svg"
                  />
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
          <div className={styles.headerSection}>
            <div className={styles.container}>
              <div className={styles.card}>
                <div className={styles.frameParent}>
                  <div className={styles.textParent}>
                    <b className={styles.text19}>Chase</b>
                    <div className={styles.supportingText3}>
                      Chase Growth Savings Account
                    </div>
                  </div>
                  <div className={styles.supportingTextWrapper}>
                    <div className={styles.supportingText4}>
                      ●●●● ●●●● ●●●● 9999
                    </div>
                  </div>
                </div>
                <div className={styles.textAndAction}>
                  <div className={styles.textAndNumber}>
                    <div className={styles.heading}>Current Balance</div>
                    <div className={styles.number}>$41,382.80</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.headerSection}>
            <div className={styles.container2}>
              <div className={styles.sectionHeaderWrap}>
                <div className={styles.sectionHeader}>
                  <div className={styles.content9}>
                    <div className={styles.textAndSupportingText2}>
                      <div className={styles.text20}>Transaction history</div>
                      <div className={styles.supportingText5}>
                        Manage your team members and their account permissions
                        here.
                      </div>
                    </div>
                    <div className={styles.actions}>
                      <div className={styles.button2}>
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
                      <div className={styles.button3}>
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
                      <div className={styles.button4}>
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
                      <div className={styles.button5}>
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
                    <div className={styles.dropdown}>
                      <img
                        className={styles.searchLgIcon}
                        alt=""
                        src="/dotsvertical.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.dividerIcon}
                    alt=""
                    src="/divider2.svg"
                  />
                </div>
                <div className={styles.actions1}>
                  <div className={styles.button1}>
                    <img
                      className={styles.searchLgIcon}
                      alt=""
                      src="/filterlines.svg"
                    />
                    <div className={styles.text11}>Apply filter</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder3.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.table}>
                <div className={styles.content10}>
                  <div className={styles.column}>
                    <div className={styles.tableHeaderCell}>
                      <div className={styles.tableHeader}>
                        <div className={styles.text2}>Transaction</div>
                      </div>
                    </div>
                    <div className={styles.tableCell}>
                      <img
                        className={styles.avatarIcon1}
                        alt=""
                        src="/avatar@2x.png"
                      />
                      <div className={styles.text12}>Spotify</div>
                    </div>
                    <div className={styles.tableCell1}>
                      <img
                        className={styles.avatarIcon1}
                        alt=""
                        src="/avatar@2x.png"
                      />
                      <div className={styles.text12}>Alexa Doe</div>
                    </div>
                    <div className={styles.tableCell}>
                      <img
                        className={styles.avatarIcon1}
                        alt=""
                        src="/avatar@2x.png"
                      />
                      <div className={styles.text12}>JSM Pro</div>
                    </div>
                    <div className={styles.tableCell3}>
                      <div className={styles.avatar}>
                        <div className={styles.text30}>FV</div>
                      </div>
                      <div className={styles.text31}>{`Fresh F&V`}</div>
                    </div>
                    <div className={styles.tableCell}>
                      <img
                        className={styles.avatarIcon1}
                        alt=""
                        src="/avatar@2x.png"
                      />
                      <div className={styles.text12}>Figma</div>
                    </div>
                    <div className={styles.tableCell5}>
                      <img
                        className={styles.avatarIcon1}
                        alt=""
                        src="/avatar@2x.png"
                      />
                      <div className={styles.text11}>Sam Sulek</div>
                    </div>
                  </div>
                  <div className={styles.column1}>
                    <div className={styles.tableHeaderCell1}>
                      <div className={styles.tableHeader}>
                        <div className={styles.text2}>Amount</div>
                      </div>
                    </div>
                    <div className={styles.tableCell6}>
                      <div className={styles.text11}>- $15.00</div>
                    </div>
                    <div className={styles.tableCell7}>
                      <div className={styles.text11}>+ $88.00</div>
                    </div>
                    <div className={styles.tableCell6}>
                      <div className={styles.text11}>- $18.99</div>
                    </div>
                    <div className={styles.tableCell9}>
                      <div className={styles.text11}>- $88.00</div>
                    </div>
                    <div className={styles.tableCell10}>
                      <div className={styles.text11}>- $18.99</div>
                    </div>
                    <div className={styles.tableCell11}>
                      <div className={styles.text11}>- $40.20</div>
                    </div>
                  </div>
                  <div className={styles.column2}>
                    <div className={styles.tableHeaderCell2}>
                      <div className={styles.tableHeader}>
                        <div className={styles.text2}>Status</div>
                      </div>
                    </div>
                    <div className={styles.tableCell6}>
                      <div className={styles.badge5}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot1.svg"
                        />
                        <div className={styles.text2}>Processing</div>
                      </div>
                    </div>
                    <div className={styles.tableCell13}>
                      <div className={styles.badge6}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot2.svg"
                        />
                        <div className={styles.text2}>Success</div>
                      </div>
                    </div>
                    <div className={styles.tableCell6}>
                      <div className={styles.badge5}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot1.svg"
                        />
                        <div className={styles.text2}>Processing</div>
                      </div>
                    </div>
                    <div className={styles.tableCell13}>
                      <div className={styles.badge6}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot2.svg"
                        />
                        <div className={styles.text2}>Success</div>
                      </div>
                    </div>
                    <div className={styles.tableCell6}>
                      <div className={styles.badge5}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot1.svg"
                        />
                        <div className={styles.text2}>Processing</div>
                      </div>
                    </div>
                    <div className={styles.tableCell17}>
                      <div className={styles.badge10}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot3.svg"
                        />
                        <div className={styles.text2}>Declined</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.column3}>
                    <div className={styles.tableHeaderCell3}>
                      <div className={styles.tableHeader}>
                        <div className={styles.text2}>Date</div>
                      </div>
                    </div>
                    <div className={styles.tableCell6}>
                      <div className={styles.supportingText4}>Wed 1:00pm</div>
                    </div>
                    <div className={styles.tableCell9}>
                      <div className={styles.supportingText4}>Wed 2:45am</div>
                    </div>
                    <div className={styles.tableCell6}>
                      <div className={styles.supportingText4}>Mon 1:10pm</div>
                    </div>
                    <div className={styles.tableCell9}>
                      <div className={styles.supportingText4}>Tue 12:15pm</div>
                    </div>
                    <div className={styles.tableCell6}>
                      <div className={styles.supportingText4}>Tue 6:10pm</div>
                    </div>
                    <div className={styles.tableCell11}>
                      <div className={styles.supportingText4}>Tue 5:40am</div>
                    </div>
                  </div>
                  <div className={styles.column4}>
                    <div className={styles.tableHeaderCell2}>
                      <div className={styles.tableHeader}>
                        <div className={styles.text2}>Category</div>
                      </div>
                    </div>
                    <div className={styles.tableCell6}>
                      <div className={styles.badge11}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot4.svg"
                        />
                        <div className={styles.text2}>Subscriptions</div>
                      </div>
                    </div>
                    <div className={styles.tableCell13}>
                      <div className={styles.badge12}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot5.svg"
                        />
                        <div className={styles.text2}>Deposit</div>
                      </div>
                    </div>
                    <div className={styles.tableCell6}>
                      <div className={styles.badge11}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot4.svg"
                        />
                        <div className={styles.text2}>Subscriptions</div>
                      </div>
                    </div>
                    <div className={styles.tableCell27}>
                      <div className={styles.badge14}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot6.svg"
                        />
                        <div className={styles.text2}>Groceries</div>
                      </div>
                    </div>
                    <div className={styles.tableCell28}>
                      <div className={styles.badge12}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot5.svg"
                        />
                        <div className={styles.text2}>Income</div>
                      </div>
                    </div>
                    <div className={styles.tableCell29}>
                      <div className={styles.badge16}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot7.svg"
                        />
                        <div className={styles.text2}>Food and dining</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.pagination}>
                  <div className={styles.button7}>
                    <img
                      className={styles.searchLgIcon}
                      alt=""
                      src="/arrowleft.svg"
                    />
                    <div className={styles.text11}>Previous</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                  </div>
                  <div className={styles.paginationNumbers}>
                    <div className={styles.paginationNumberBase}>
                      <div className={styles.content11}>
                        <div className={styles.text12}>1</div>
                      </div>
                    </div>
                    <div className={styles.paginationNumberBase1}>
                      <div className={styles.content11}>
                        <div className={styles.text12}>2</div>
                      </div>
                    </div>
                    <div className={styles.paginationNumberBase1}>
                      <div className={styles.content11}>
                        <div className={styles.text12}>3</div>
                      </div>
                    </div>
                    <div className={styles.paginationNumberBase1}>
                      <div className={styles.content11}>
                        <div className={styles.text12}>...</div>
                      </div>
                    </div>
                    <div className={styles.paginationNumberBase1}>
                      <div className={styles.content11}>
                        <div className={styles.text12}>8</div>
                      </div>
                    </div>
                    <div className={styles.paginationNumberBase1}>
                      <div className={styles.content11}>
                        <div className={styles.text12}>9</div>
                      </div>
                    </div>
                    <div className={styles.paginationNumberBase1}>
                      <div className={styles.content11}>
                        <div className={styles.text12}>10</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.button7}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className={styles.text11}>Next</div>
                    <img
                      className={styles.searchLgIcon}
                      alt=""
                      src="/arrowright.svg"
                    />
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

export default TransactionHistory;
