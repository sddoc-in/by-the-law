import React from 'react'

export default function SU115() {
    return (

        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>
                <h3 style={{ display: "flex", justifyContent: "end", marginTop: "0", marginBottom: "0" }}>FL-160</h3>
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "64%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginBottom: 10 }}>
                                    <label>
                                        ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number, and
                                        address):
                                    </label>
                                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={4}
                                        defaultValue={""}
                                    />
                                </div>
                                <div style={{ display: "grid",gridTemplateColumns:"1fr 1fr" }}>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">FIRM NAME:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="Firmname" />
                                    </div><br />
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">STREET ADDRESS:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:'71%' }} type="text" id="Streetaddress" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">CITY:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="City" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">STATE:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="State" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">ZIP CODE:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="number" id="telephone" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">TELEPHONE NO.:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="number" id="telephone" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">FAX NO.:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"75%" }} type="number" id="telephone" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: 2 }}>
                                    <label htmlFor="fax">E-MAIL ADDRESS(optional):</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"67%" }} type="text" id="fax" />
                                </div>
                                <div style={{ marginBottom: 2 }}>
                                    <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"71%" }} type="name" id="attorney" />
                                </div>
                            </td>
                            <td style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse" }} rowSpan={3}>
                                FOR COURT USE ONLY
                            </td>
                        </tr>
                        <tr>
                            <td style={{ margin: 0, border: "2px solid black", borderCollapse: "collapse", paddingLeft: "1.6rem" }}>
                                <div  style={{ marginBottom: 2 }}>
                                    <label><b>SUPERIOR COURT OF CALIFORIA, COUNTY OF</b></label>
                                    <input
                                        style={{ width: "46%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div style={{ margin: 0, marginBottom: 2 }}>
                                    <label htmlFor="street">STREET ADDRESS:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "78.6%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 0, marginBottom: 2 }}>
                                    <label htmlFor="street">MAILING ADDRESS:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "77.4%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 0, marginBottom: 2 }}>
                                    <label htmlFor="street">CITY AND ZIP CODE:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "76%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 0, marginBottom: 2 }}>
                                    <label htmlFor="street">BRANCH NAME:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "80.8%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginBottom: 3, marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER :</label>
                                    <input  type="text" id="name" style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", width: "85.4%" }} />
                                </div>
                                <div style={{ marginBottom: 3 }}>
                                    <label htmlFor="street">RESPONDENT :</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "83.6%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginBottom: 3 }}>
                                    <label htmlFor="street">OUTHER PARENT/PARTY :</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "83.6%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: 5 }}>
                                    <input type="checkbox" size={10} style={{ margin: "10px" }} />
                                    <label>PETITIONER'S</label></div>
                                <div style={{ marginLeft: 5 }}>
                                    <input type="checkbox" size={10} style={{ margin: "10px" }} />
                                    <label>RESPONDENT'S</label></div>
                                <div style={{ marginLeft: 5 }}>
                                    <input type="checkbox" size={10} style={{ margin: "10px" }} />
                                    <label>COMMUNITY AND qUASI-COMMUNITY PROPERTY DECLARATION</label></div>
                                <div style={{ marginLeft: 5 }}>
                                    <input type="checkbox" size={10} style={{ margin: "10px" }} />
                                    <label>SEPARATE PROPERTY DECLARATION</label></div>
                            </td>
                            <td>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "7px",paddingBottom: "5px",width:"97%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div><br />
                <div>
      <p>
        See <strong>Instructions</strong> on page 4 for information about completing this form. For additional space, use <strong>Continuation of Property Declaration (form FL-161).</strong>
      </p><br />
      <form>
      <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}><h1><b>C - D = E</b></h1></div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
          <tr>
              <th style={{  width: '5%' }}></th>
              <th style={{ border: '1px solid black', width: '20%' }}>A</th>
              <th style={{ border: '1px solid black', width: '10%' }}>B</th>
              <th style={{ border: '1px solid black', width: '15%' }}>C</th>
              <th style={{ border: '1px solid black', width: '15%' }}>-  D</th>
              <th style={{ border: '1px solid black', width: '15%' }}>=  E</th>
              <th style={{ border: '1px solid black', width: '20%' }}>F</th>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}>ITEM NO.</th>
              <th style={{ border: '1px solid black' }}>BRIEF DESCRIPTION</th>
              <th style={{ border: '1px solid black' }}>DATE ACQUIRED</th>
              <th style={{ border: '1px solid black' }}>GROSS FAIR MARKET VALUE</th>
              <th style={{ border: '1px solid black' }}>AMOUNT OF DEBT</th>
              <th style={{ border: '1px solid black' }}>NET FAIR MARKET VALUE</th>
              <th style={{ border: '1px solid black' }}>PROPOSAL Award or Confirm to:</th>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}></th>
              <th style={{ border: '1px solid black' }}></th>
              <th style={{ border: '1px solid black' }}></th>
              <th style={{ border: '1px solid black' }}></th>
              <th style={{ border: '1px solid black' }}></th>
              <th style={{ border: '1px solid black' }}></th>
              <th style={{ border: '1px solid black' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>PETITIONER</span>
                  <span>RESPONDENT</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              'REAL ESTATE',
              'HOUSEHOLD FURNITURE, FURNISHINGS, APPLIANCES',
              'JEWELRY, ANTIQUES, ART, COIN COLLECTIONS, etc.',
              'VEHICLES, BOATS, TRAILERS',
              'SAVINGS ACCOUNTS',
              'CHECKING ACCOUNTS'
            ].map((item, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', textAlign: 'center' }}>{index + 1}.</td>
                <td style={{ border: '1px solid black' }}>
                  {item}
                  <textarea style={{ width: '100%', backgroundColor: 'rgb(225, 243, 243)', marginTop: '5px' }} />
                </td>
                <td style={{ border: '1px solid black' }}><textarea style={{ width: '100%', backgroundColor: 'rgb(225, 243, 243)' }} /></td>
                <td style={{ border: '1px solid black' }}><textarea style={{ width: '100%', backgroundColor: 'rgb(225, 243, 243)' }} /></td>
                <td style={{ border: '1px solid black' }}><textarea style={{ width: '100%', backgroundColor: 'rgb(225, 243, 243)' }} /></td>
                <td style={{ border: '1px solid black' }}><textarea style={{ width: '100%', backgroundColor: 'rgb(225, 243, 243)' }} /></td>
                <td style={{ border: '1px solid black' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <textarea style={{ width: '48%', backgroundColor: 'rgb(225, 243, 243)' }} />
                    <textarea style={{ width: '48%', backgroundColor: 'rgb(225, 243, 243)' }} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
    </div><br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Approved for Optional Use</li>
                        <li>Judicial Council of California</li>
                        <li>FL-160 [Rev. July 1, 2016]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3><b>PROPERTY DECLARATION</b></h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                        (Family Law)
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Family Code, §§ 115, 2104, 2500-2660</li>
                        <li>www.courts.ca.gov</li>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Page 1 of 4</li>
                    </div>
                </div>
                <br /><br />
                <div>
      
      <div>
      <form>
      <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}><h1><b>C - D = E</b></h1></div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{  width: '5%' }}></th>
              <th style={{ border: '1px solid black', width: '20%' }}>A</th>
              <th style={{ border: '1px solid black', width: '10%' }}>B</th>
              <th style={{ border: '1px solid black', width: '15%' }}>C</th>
              <th style={{ border: '1px solid black', width: '15%' }}>-  D</th>
              <th style={{ border: '1px solid black', width: '15%' }}>=  E</th>
              <th style={{ border: '1px solid black', width: '20%' }}>F</th>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}>ITEM NO.</th>
              <th style={{ border: '1px solid black' }}>BRIEF DESCRIPTION</th>
              <th style={{ border: '1px solid black' }}>DATE ACQUIRED</th>
              <th style={{ border: '1px solid black' }}>GROSS FAIR MARKET VALUE</th>
              <th style={{ border: '1px solid black' }}>AMOUNT OF DEBT</th>
              <th style={{ border: '1px solid black' }}>NET FAIR MARKET VALUE</th>
              <th style={{ border: '1px solid black' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>PROPOSAL FOR DIVISION</span>
                  <span>Award or Confirm to:</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ' CREDIT UNION, OTHER DEPOSITORY ACCOUNTS',
              ' CASH',
              ' TAX REFUND',
              ' LIFE INSURANCE WITH CASH SURRENDER OR LOAN VALUE',
              ' STOCKS, BONDS, SECURED NOTES, MUTUAL FUNDS',
              ' RETIREMENT AND PENSIONS',
              ' PROFIT-SHARING, IRAS, DEFERRED COMPENSATION, ANNUITIES',
              ' ACCOUNTS RECEIVABLE, UNSECURED NOTES',
              ' PARTNERSHIP, OUTHER BUSINESS INTERESTS',
              ' OUTHER ASSETS',
              ' ASSETS FROM CONTINUATION SHEET',
              ' TOTAL ASSETS'
            ].map((item, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black' }}>{index + 7}</td>
                <td style={{ border: '1px solid black', padding: '5px' }}>
                  {item}
                  <textarea style={{ display: 'block', width: '100%', backgroundColor: 'rgb(225, 243, 243)' }} />
                </td>
                <td style={{ border: '1px solid black' }}>
                  <textarea style={{ display: 'block', width: '100%', backgroundColor: 'rgb(225, 243, 243)' }} />
                </td>
                <td style={{ border: '1px solid black' }}>
                  <textarea style={{ display: 'block', width: '100%', backgroundColor: 'rgb(225, 243, 243)' }} />
                </td>
                <td style={{ border: '1px solid black' }}>
                  <textarea style={{ display: 'block', width: '100%', backgroundColor: 'rgb(225, 243, 243)' }} />
                </td>
                <td style={{ border: '1px solid black' }}>
                  <textarea style={{ display: 'block', width: '100%', backgroundColor: 'rgb(225, 243, 243)' }} />
                </td>
                <td style={{ border: '1px solid black' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <textarea style={{ display: 'block', width: '48%', backgroundColor: 'rgb(225, 243, 243)' }} />
                    <textarea style={{ display: 'block', width: '48%', backgroundColor: 'rgb(225, 243, 243)' }} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
    </div><br />
    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Approved for Optional Use</li>
                        <li>Judicial Council of California</li>
                        <li>FL-160 [Rev. July 1, 2016]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3><b>PROPERTY DECLARATION</b></h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                        (Family Law)
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Family Code, §§ 115, 2104, 2500-2660</li>
                        <li>www.courts.ca.gov</li>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Page 2 of 4</li>
                    </div>
                </div><br />
                
                <div>
      <form>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '5px' }}>A</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>B</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>C</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>D</th>
              {/* <th style={{ border: '1px solid black', padding: '5px' }}>D</th> */}
            </tr>
            <tr>
              <th style={{ border: '1px solid black', padding: '5px' }}>ITEM NO. AND  DEBTS—SHOW TO WHOM OWED</th>
              {/* <th style={{ border: '1px solid black', padding: '5px' }}></th> */}
              <th style={{ border: '1px solid black', padding: '5px' }}>DATE INCURRED</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>TOTAL OWING</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>
                PROPOSAL FOR DIVISION<br />
                Award or Confirm to:<br />
                PETITIONER RESPONDENT
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "19. STUDENT LOANS",
              "20. TAXES",
              "21. SUPPORT ARREARAGES",
              "22. LOANS—UNSECURED",
              "23. CREDIT CARDS",
              "24. OTHER DEBTS",
              "25. OTHER DEBTS FROM CONTINUATION SHEET",
              "26. TOTAL DEBTS"
            ].map((item, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '5px' }}>
                  {item}
                  <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '100%', marginTop: '5px' }}></textarea>
                </td>
                <td style={{ border: '1px solid black', padding: '5px' }}>
                  <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '100%' }}></textarea>
                </td>
                <td style={{ border: '1px solid black', padding: '5px' }}>
                  <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '100%' }}></textarea>
                </td>
                <td style={{ border: '1px solid black', padding: '5px' }}>
                  <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '100%' }}></textarea>
                </td>
                <td style={{ border: '1px solid black', padding: '5px' }}>
                  <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '100%' }}></textarea>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '10px' }}>
          <input type="checkbox" /> A Continuation of Property Declaration (<a href="#" style={{color:'blue'}}>form FL-161</a>) is attached and incorporated by reference.
        </div>
      </form>
    </div>
                
                
               
                
                    <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                        <div>I declare under penalty of perjury under the laws of the State of California that to the best of my knowledge, the foregoing is a true and correctlisting of assets obligations and the amounts shown are correct.</div>
                        Date: <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    
                </div>
                <div
                        style={{ display: "flex", justifyContent: "space-between", margin: 3}}
                    >
                        <div>
                            <input
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "4px" }}
                            name={"SignatureOfPetitioner"}
                            type="text" size={40} id="fax" />{" "}
                            <div>(SIGNATURE OR PRINT NAME)</div>
                        </div>
                        <div>
                        <input 
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "4px" }}
                        name={"SignatureOfPetitioner"}
                        type="text" size={40} id="fax" />{" "}
                            <div>(SIGNATURE)</div>
                        </div>
                    </div><br />
                    
                    
                    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Approved for Optional Use</li>
                        <li>Judicial Council of California</li>
                        <li>FL-160 [Rev. July 1, 2016]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3><b>PROPERTY DECLARATION</b></h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                        (Family Law)
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Family Code, §§ 115, 2104, 2500-2660</li>
                        <li>www.courts.ca.gov</li>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Page 3 of 4</li>
                    </div>
                </div><br />
                <div style={{ margin: '20px' }}>
      <h1 style={{ textAlign: 'center' }}> <b>INFORMATION AND INSTRUCTIONS FOR COMPLETING FORM FL-160</b> </h1>
      <p>
        <b>Property Declaration</b> (form FL-160) is a multipurpose form, which may be filed with the court as an attachment to a 
        <i> Petition or Response </i> 
        or served on the other party to comply with disclosure requirements in place of a 
        <i> Schedule of Assets and Debts </i> 
        (form 
        <a href="#" style={{ color: 'blue' }}>FL-142</a>).
        Courts may also require a party to file a Property Declaration as an attachment to a 
        <i> Request to Enter Default </i> 
        (form 
        <a href="#" style={{ color: 'blue' }}>FL-165</a>) or 
        <i> Judgment </i> 
        (form 
        <a href="#" style={{ color: 'blue' }}>FL-180</a>).
      </p>
      <p><b>When filing a Property Declaration with the court, do not include private financial documents listed below.</b></p>

      <p><b>Identify the type of declaration completed</b></p>
      <ol>
        <li>
          <p>
           (1). Check "Community and Quasi-Community Property Declaration" on page 1 to use Property Declaration (form FL-160) 
            to provide a combined list of community and quasi-community property assets and debts. Quasi-community property is 
            property you own outside of California that would be community property if it were located in California.
          </p>
        </li>
        <li>
          <p>
           (2). Do not combine a separate property declaration with a community and quasi-community property declaration. Check 
            "Separate Property Declaration" on page 1 when using Property Declaration to provide a list of separate property 
            assets and debts.
          </p>
        </li>
      </ol>

      <p><b>Description of the Property Declaration chart</b></p>
      <p><b>Pages 1 and 2</b></p>
      <ol>
        <li><p>1. Column A is used to provide a brief description of each item of separate or community or quasi-community property.</p></li>
        <li><p>2. Column B is used to list the date the item was acquired.</p></li>
        <li>
          <p>
           3. Column C is used to list the item's gross fair market value (an estimate of the amount of money you could get if you 
            sold the item to another person through an advertisement).
          </p>
        </li>
        <li><p>4. Column D is used to list the amount owed on the item.</p></li>
        <li>
          <p>
            5. Column E is used to indicate the net fair market value of each item. The net fair market value is calculated by 
            subtracting the dollar amount in column D from the amount in column C ("C minus D").
          </p>
        </li>
        <li><p>6. Column F is used to show a proposal on how to divide (or confirm) the item described in column A.</p></li>
      </ol>

      <p><b>Page 3</b></p>
      <ol>
        <li><p>1. Column A is used to provide a brief description of each separate or community or quasi-community property debt.</p></li>
        <li><p>2. Column B is used to list the date the debt was acquired.</p></li>
        <li><p>3. Column C is used to list the total amount of money owed on the debt.</p></li>
        <li><p>4 Column D is used to show a proposal on how to divide (or confirm) the item of debt described in column A.</p></li>
      </ol>

      <p><b>When using this form only as an attachment to a Petition or Response</b></p>
      <ol>
        <li>
          <p>
           1. Attach a Separate Property Declaration (form FL-160) to respond to item 9. Only columns A and F on pages 1 and 2 and columns A and D on page 3 are required.
          </p>
        </li>
        <li>
          <p>
          2.  Attach a Community or Quasi-Community Declaration (form FL-160) to respond to item 10, and complete column A on all pages.
          </p>
        </li>
      </ol>

      <p><b>When serving this form on the other party as an attachment to Declaration of Disclosure (form FL-140)</b></p>
      <ol>
        <li>
          <p> 1. Complete columns A through E on pages 1 and 2, and columns A through C on page 3.</p>
        </li>
        <li>
         <p> 2. Copies of the following documents must be attached and served on the other party:</p>
          <ul>
            <li>
              <p>(a.) For real estate (item 1): deeds with legal descriptions and the latest lender's statement.</p>
            </li>
            <li>
              <p>(b). For vehicles, boats, trailers (item 4): the title documents.</p>
            </li>
            <li>
              <p>(c). For bank accounts (items 5, 6, 7): the latest statement.</p>
            </li>
            <li>
              <p> (d). For life insurance policies with cash surrender or loan value (item 10): the latest declaration page.</p>
            </li>
            <li>
              <p> (e). For stocks, bonds, secured notes, mutual funds (item 11): the certificate or latest statement.</p>
            </li>
            <li>
              <p> (f). For retirement and pensions (item 12): the latest summary plan document and latest benefit statement.</p>
            </li>
            <li>
              <p> (g). For profit-sharing, IRAs, deferred compensation, and annuities (item 13): the latest statement.</p>
            </li>
            <li>
              <p> (h). For each account receivable and unsecured note (item 14): documentation of the account receivable or note.</p>
            </li>
            <li>
              <p> (i). For partnerships and other business interests (item 15): the most current K-1 and Schedule C.</p>
            </li>
            <li>
              <p> (j). For other assets (item 16): the most current statement, title document, or declaration.</p>
            </li>
            <li>
              <p> (k). For support arrearages (item 21): orders and statements.</p>
            </li>
            <li>
              <p> (l). For credit cards and other debts (items 23 and 24): the latest statement.</p>
            </li>
          </ul>
          <li><p>3. Do not file copies of the above private financial documents with the court.</p></li>
        </li>
      </ol>

      <p><b>When filing this form with the court as an attachment to Request to Enter Default (FL-165) or Judgment (FL-180)</b></p>
      <ol>
        <li><p>Complete all columns on the form.</p></li>
      </ol>

      <p>For more information about forms required to process and obtain a judgment in dissolution, legal separation, and nullity cases, see <a href="http://www.courtinfo.ca.gov/8218.htm" style={{ color: 'blue' }}>http://www.courtinfo.ca.gov/8218.htm</a>.</p>
    </div>
    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Approved for Optional Use</li>
                        <li>Judicial Council of California</li>
                        <li>FL-160 [Rev. July 1, 2016]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3><b>PROPERTY DECLARATION</b></h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                        (Family Law)
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Family Code, §§ 115, 2104, 2500-2660</li>
                        <li>www.courts.ca.gov</li>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Page 4 of 4</li>
                    </div>
                </div>
                
            </div>
        </>





    )
}
