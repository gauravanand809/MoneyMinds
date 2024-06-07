import type { NextPage } from "next";
import styles from "./dashboard.module.css";

const Dashboard: NextPage = () => {
  return (
    <div className={styles.dashboard}>
      <img className={styles.dividerIcon} alt="" src="/divider4.svg" />
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
                    src="/vuesaxoutlinehome21.svg"
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
              <div className={styles.text16}>
                <span>{`Welcome, `}</span>
                <span className={styles.adrian}>Adrian</span>
              </div>
              <div
                className={styles.supportingText2}
              >{`Access & manage your account and transactions efficiently.`}</div>
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
          <img className={styles.dividerIcon1} alt="" src="/divider5.svg" />
        </div>
        <div className={styles.container}>
          <div className={styles.accountCardDesktop}>
            <div className={styles.pieChart}>
              <img
                className={styles.pieChartIcon}
                alt=""
                src="/-pie-chart.svg"
              />
            </div>
            <div className={styles.content9}>
              <div className={styles.headingParent}>
                <div className={styles.heading}>2 Bank Accounts</div>
                <div className={styles.actions}>
                  <div className={styles.button1}>
                    <img
                      className={styles.searchLgIcon}
                      alt=""
                      src="/plus1.svg"
                    />
                    <div className={styles.text18}>Add bank</div>
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
              </div>
              <div className={styles.headingAndNumber}>
                <div className={styles.heading1}>Total Current Balance</div>
                <div className={styles.numberAndBadge}>
                  <div className={styles.number}>$2,698.12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.pageHeader1}>
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
            <div className={styles.content10}>
              <div className={styles.textAndSupportingText2}>
                <div className={styles.text16}>Recent transactions</div>
                <div className={styles.supportingText3}>
                  Manage your team members and their account permissions here.
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
                <div className={styles.button7}>
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
              <div className={styles.inputDropdown2}>
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
              <div className={styles.tableHeader}>
                <div className={styles.button9}>
                  <div className={styles.text11}>View all</div>
                  <img
                    className={styles.chevronDownIcon}
                    alt=""
                    src="/placeholder3.svg"
                  />
                </div>
              </div>
            </div>
            <img className={styles.dividerIcon1} alt="" src="/divider5.svg" />
          </div>
          <div className={styles.horizontalTabs}>
            <div className={styles.tabs2}>
              <div className={styles.tabButtonBase}>
                <div className={styles.text18}>Chase Bank</div>
              </div>
              <div className={styles.tabButtonBase1}>
                <div className={styles.text11}>Bank of America</div>
              </div>
              <div className={styles.tabButtonBase1}>
                <div className={styles.text11}>First Platypus Bank</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content12}>
          <div className={styles.bank}>
            <div className={styles.budgetCard}>
              <div className={styles.avatar}>
                <div className={styles.text36}>CB</div>
              </div>
              <div className={styles.textAndProgressBarParent}>
                <div className={styles.textAndProgressBar}>
                  <div className={styles.textAndSupportingText3}>
                    <div className={styles.heading}>Chase Bank</div>
                    <div className={styles.badge5}>
                      <div className={styles.text12}>savings</div>
                    </div>
                  </div>
                </div>
                <div className={styles.supportingText4}>$2,588.12</div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.bank}>
              <div className={styles.table}>
                <div className={styles.content13}>
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
                      <div className={styles.text12}>Figma</div>
                    </div>
                    <div className={styles.tableCell3}>
                      <div className={styles.avatar1}>
                        <div className={styles.text36}>FV</div>
                      </div>
                      <div className={styles.text44}>{`Fresh F&V`}</div>
                    </div>
                    <div className={styles.tableCell4}>
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
                    <div className={styles.tableCell5}>
                      <div className={styles.text11}>- $15.00</div>
                    </div>
                    <div className={styles.tableCell6}>
                      <div className={styles.text11}>+ $88.00</div>
                    </div>
                    <div className={styles.tableCell7}>
                      <div className={styles.text11}>- $18.99</div>
                    </div>
                    <div className={styles.tableCell8}>
                      <div className={styles.text11}>- $88.00</div>
                    </div>
                    <div className={styles.tableCell9}>
                      <div className={styles.text11}>- $40.20</div>
                    </div>
                  </div>
                  <div className={styles.column2}>
                    <div className={styles.tableHeaderCell2}>
                      <div className={styles.tableHeader}>
                        <div className={styles.text2}>Status</div>
                      </div>
                    </div>
                    <div className={styles.tableCell5}>
                      <div className={styles.badge6}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot1.svg"
                        />
                        <div className={styles.text2}>Processing</div>
                      </div>
                    </div>
                    <div className={styles.tableCell11}>
                      <div className={styles.badge7}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot2.svg"
                        />
                        <div className={styles.text2}>Success</div>
                      </div>
                    </div>
                    <div className={styles.tableCell5}>
                      <div className={styles.badge6}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot1.svg"
                        />
                        <div className={styles.text2}>Processing</div>
                      </div>
                    </div>
                    <div className={styles.tableCell11}>
                      <div className={styles.badge7}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot2.svg"
                        />
                        <div className={styles.text2}>Success</div>
                      </div>
                    </div>
                    <div className={styles.tableCell14}>
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
                    <div className={styles.tableCell5}>
                      <div className={styles.text59}>Wed 1:00pm</div>
                    </div>
                    <div className={styles.tableCell8}>
                      <div className={styles.text59}>Wed 2:45am</div>
                    </div>
                    <div className={styles.tableCell5}>
                      <div className={styles.text59}>Tue 6:10pm</div>
                    </div>
                    <div className={styles.tableCell8}>
                      <div className={styles.text59}>Tue 12:15pm</div>
                    </div>
                    <div className={styles.tableCell9}>
                      <div className={styles.text59}>Tue 5:40am</div>
                    </div>
                  </div>
                  <div className={styles.column4}>
                    <div className={styles.tableHeaderCell2}>
                      <div className={styles.tableHeader}>
                        <div className={styles.text2}>Category</div>
                      </div>
                    </div>
                    <div className={styles.tableCell20}>
                      <div className={styles.badge11}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot4.svg"
                        />
                        <div className={styles.text2}>Subscriptions</div>
                      </div>
                    </div>
                    <div className={styles.tableCell21}>
                      <div className={styles.badge12}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot5.svg"
                        />
                        <div className={styles.text2}>Deposit</div>
                      </div>
                    </div>
                    <div className={styles.tableCell22}>
                      <div className={styles.badge12}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot5.svg"
                        />
                        <div className={styles.text2}>Income</div>
                      </div>
                    </div>
                    <div className={styles.tableCell23}>
                      <div className={styles.badge14}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot6.svg"
                        />
                        <div className={styles.text2}>Groceries</div>
                      </div>
                    </div>
                    <div className={styles.tableCell24}>
                      <div className={styles.badge15}>
                        <img
                          className={styles.dotIcon5}
                          alt=""
                          src="/-dot7.svg"
                        />
                        <div className={styles.text2}>{`Food `}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidePanel}>
        <div className={styles.headerSection}>
          <div className={styles.imageWrapOuter}>
            <img
              className={styles.imageWrapInner}
              alt=""
              src="/image-wrap-inner@2x.png"
            />
          </div>
          <div className={styles.container3}>
            <div className={styles.content14}>
              <img
                className={styles.avatarProfilePhoto}
                alt=""
                src="/avatar-profile-photo@2x.png"
              />
              <div className={styles.textAndSupportingText4}>
                <div className={styles.textAndBadge}>
                  <div className={styles.text70}>Adrian Hajdin</div>
                </div>
                <div className={styles.supportingText2}>
                  adrian@jsmastery.pro
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textAndProgressBar}>
          <div className={styles.container4}>
            <div className={styles.sectionHeader}>
              <div className={styles.content15}>
                <div className={styles.textAndSupportingText5}>
                  <div className={styles.text71}>My Banks</div>
                  <div className={styles.supportingText6}>
                    Manage your team members and their account permissions here.
                  </div>
                </div>
                <div className={styles.actions3}>
                  <div className={styles.button1}>
                    <img
                      className={styles.searchLgIcon}
                      alt=""
                      src="/plus2.svg"
                    />
                    <div className={styles.text11}>Add bank</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                  </div>
                  <div className={styles.button11}>
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
                <div className={styles.dropdown}>
                  <img
                    className={styles.searchLgIcon}
                    alt=""
                    src="/dotsvertical.svg"
                  />
                </div>
              </div>
              <img className={styles.dividerIcon1} alt="" src="/divider6.svg" />
            </div>
            <div className={styles.cards}>
              <div className={styles.creditCardMockup}>
                <img className={styles.linesIcon} alt="" src="/lines.svg" />
                <img
                  className={styles.paymentMethodIcon}
                  alt=""
                  src="/payment-method-icon@2x.png"
                />
                <div className={styles.cardNumber}>1234 1234 1234 1234</div>
                <div className={styles.cardholder}>Adrian Hajdin</div>
                <div className={styles.text76}>JS Mastery Pro</div>
                <div className={styles.expiry}>06/24</div>
                <img
                  className={styles.paypassIcon}
                  alt=""
                  src="/paypass-icon.svg"
                />
              </div>
              <div className={styles.creditCardMockup1}>
                <img className={styles.linesIcon1} alt="" src="/lines1.svg" />
                <img
                  className={styles.paymentMethodIcon1}
                  alt=""
                  src="/payment-method-icon@2x.png"
                />
                <div className={styles.strip} />
                <div className={styles.cardNumber1}>1234 1234 1234 1234</div>
                <div className={styles.cardholder1}>Adrian Hajdin</div>
                <div className={styles.expiry1}>06/24</div>
                <div className={styles.text77}>JS Mastery Pro.</div>
                <img
                  className={styles.paypassIcon1}
                  alt=""
                  src="/paypass-icon1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content14}>
          <div className={styles.divider} />
          <div className={styles.container4}>
            <div className={styles.sectionHeader}>
              <div className={styles.content15}>
                <div className={styles.textAndSupportingText5}>
                  <div className={styles.text71}>My budgets</div>
                  <div className={styles.supportingText6}>
                    Manage your team members and their account permissions here.
                  </div>
                </div>
                <div className={styles.actions4}>
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
                  <div className={styles.button7}>
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
              <img className={styles.dividerIcon1} alt="" src="/divider6.svg" />
            </div>
            <div className={styles.cards1}>
              <div className={styles.budgetCard1}>
                <img
                  className={styles.featuredIcon}
                  alt=""
                  src="/featured-icon.svg"
                />
                <div className={styles.textAndSupportingText1}>
                  <div className={styles.textAndSupportingText3}>
                    <div className={styles.text83}>Subscriptions</div>
                    <div className={styles.supportingText8}>$25 left</div>
                  </div>
                  <div className={styles.textAndBadge}>
                    <div className={styles.progressBar1}>
                      <div className={styles.background} />
                      <div className={styles.progress} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.budgetCard2}>
                <img
                  className={styles.featuredIcon}
                  alt=""
                  src="/featured-icon1.svg"
                />
                <div className={styles.textAndSupportingText1}>
                  <div className={styles.textAndSupportingText3}>
                    <div className={styles.text83}>Food and booze</div>
                    <div className={styles.supportingText9}>$120 left</div>
                  </div>
                  <div className={styles.textAndBadge}>
                    <div className={styles.progressBar1}>
                      <div className={styles.background1} />
                      <div className={styles.progress1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.budgetCard3}>
                <img
                  className={styles.featuredIcon}
                  alt=""
                  src="/featured-icon2.svg"
                />
                <div className={styles.textAndSupportingText1}>
                  <div className={styles.textAndSupportingText3}>
                    <div className={styles.text83}>Savings</div>
                    <div className={styles.supportingText10}>$50 left</div>
                  </div>
                  <div className={styles.textAndBadge}>
                    <div className={styles.progressBar1}>
                      <div className={styles.background2} />
                      <div className={styles.progress2} />
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

export default Dashboard;
