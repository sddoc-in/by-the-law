import React from 'react'
import SUPFl165 from "./SU165";
export default function () {
    const [details, setDetails] = React.useState<SUPFl165>(
        {} as SUPFl165
      );
    
      function handleChange(
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
      ) {
        setDetails({
          ...details,
          [e.target.name]: e.target.value,
        });
      }


      function handleSUPERIORCOURTOFCALIFORNIA(
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
      ) {
        setDetails({
          ...details,
          [e.target.name]: e.target.value,
        });
      } 



    return (
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
            
            <h3 style={{ display: 'flex', marginBottom: '0' }}>FL-190 </h3>
                <table style={{ width: "100%",  border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "70%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div>
                                    <label>
                                        ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number, and
                                        address):
                                    </label>
                                    <textarea
                                    name={"AttorneyOrPartyWithoutAttorney"}
                                    onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none" }}
                                        id=""
                                        cols={80}
                                        // rows={4}
                                    />
                                </div>
                                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr",marginBottom:"5px" }}>
                                    <div>
                                        <label htmlFor="telephone">TELEPHONE NO.:</label>
                                        <input 
                                        name={"TelephoneNo"}
                                        onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"60%" }} type="number" id="telephone" />
                                    </div>
                                    <div>
                                        <label htmlFor="fax" style={{display:"inline"}}>FAX NO(optional):</label>
                                        <input
                                        name={"FaxNo"}
                                        onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"54%" }} type="text" id="fax" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="EmailAddress">E-MAIL ADDRESS (Optional):</label>
                                    <input 
                                    name={"EmailAddress"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "5px",width:"71.7%" }} type="email" id="attorney" />
                                </div>
                                <div>
                                    <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                                    <input 
                                    name={" AttorneyFor"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "5px",width:"71.7%" }} type="email" id="attorney" />
                                </div>
                            </td>
                            <td style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse" }} rowSpan={3}>
                            <div style={{position:'initial'}}><b>FOR CORT USE ONLY</b></div>
                               
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ margin: 2 }}>
                                    <label htmlFor="name"><b>SUPERIOR COURT OF CALIFORIA, COUNTY OF</b></label>
                                    <input
                                     name={"Countyof"}
                                     onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)}
                                        style={{ width: "48.4%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="street">STREET ADDRESS:</label>
                                    <input
                                    name={"StreetAddress"}
                                    onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"79.4%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 2, marginBottom: 2 }}>
                                    <label htmlFor="street">MAILING ADDRESS:</label>
                                    <input
                                    name={"MailingAddress"}
                                    onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)}
                                     style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"78.4%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 2 }}>
                                    <label htmlFor="street">CITY AND ZIP CODE:</label>
                                    <input 
                                    name={"CityAndZipCode"}
                                    onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)}
                                     style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"77.2%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 2 }}>
                                    <label htmlFor="street">BRANCH NAME:</label>
                                    <input 
                                    name={"BranchName"}
                                    onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)}
                                     style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"81.7%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ margin: 2, border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem", marginBottom:"4px"}}>
                                    <label htmlFor="name">PETITIONER:</label>
                                    <input 
                                    name={"Petitioner"}
                                    onChange={(e) => handleChange(e)}
                                   style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"85.4%" }} type="text" id="name" />
                                </div>
                                <div>
                                    <label htmlFor="street">RESPONDENT:</label>
                                    <input 
                                    name={"Respondent"}
                                    onChange={(e) => handleChange(e)}
                                   style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"83.7%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <h3 style={{ textAlign: "center" }}>
                                    <b>REQUEST TO ENTER DEFAULT</b>
                                </h3>
                            </td>
                            <td>
                                <div style={{ marginLeft: "1.2rem",marginBottom: "8px" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table><br />
                <div style={{ padding: '32px' }}>
      <ol style={{ listStyleType: 'decimal', marginLeft: '16px' }}>
        <li style={{ marginBottom: '16px' }}>
          <p>Please enter the default of the respondent who has failed to respond to the petition.</p>
        </li>
        <li style={{ marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold' }}>A completed Income and Expense Declaration (form FL-150) or Financial Statement (Simplified) (form FL-155)</p>
          <div style={{ marginLeft: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input type="checkbox" id="fl150-attached" />
              <label htmlFor="fl150-attached" style={{ marginLeft: '8px' }}>is attached</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input type="checkbox" id="fl150-not-attached" />
              <label htmlFor="fl150-not-attached" style={{ marginLeft: '8px' }}>is not attached</label>
            </div>
          </div>
          <p style={{ fontWeight: 'bold' }}>A completed Property Declaration (form FL-160)</p>
          <div style={{ marginLeft: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input type="checkbox" id="fl160-attached" />
              <label htmlFor="fl160-attached" style={{ marginLeft: '8px' }}>is attached</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input type="checkbox" id="fl160-not-attached" />
              <label htmlFor="fl160-not-attached" style={{ marginLeft: '8px' }}>is not attached</label>
            </div>
          </div>
          <p>because (check at least one of the following):</p>
          <div style={{ marginLeft: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (a) <input type="checkbox" id="no-changes" />
              <label htmlFor="no-changes" style={{ marginLeft: '8px' }}>there have been no changes since the previous filing.</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (b) <input type="checkbox" id="written-agreement" />
              <label htmlFor="written-agreement" style={{ marginLeft: '8px' }}>the issues subject to disposition by the court in this proceeding are the subject of a written agreement.</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (c) <input type="checkbox" id="no-issues-support" />
              <label htmlFor="no-issues-support" style={{ marginLeft: '8px' }}>there are no issues of child, spousal, or partner support or attorney fees and costs subject to determination by the court.</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (d) <input type="checkbox" id="no-money" />
              <label htmlFor="no-money" style={{ marginLeft: '8px' }}>the petition does not request money, property, costs, or attorney fees. (Fam. Code, § 2330.5.)</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (e) <input type="checkbox" id="no-division" />
              <label htmlFor="no-division" style={{ marginLeft: '8px' }}>there are no issues of division of community property.</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (f) <input type="checkbox" id="establish-parental" />
              <label htmlFor="establish-parental" style={{ marginLeft: '8px' }}>this is an action to establish parental relationship.</label>
            </div>
          </div>
          <div style={{ marginTop: '16px' }}>
            <p>Date: <input type="text" style={{ borderBottom: '1px solid black', width: '160px', marginLeft: '8px' }} /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="TYPE OR PRINT NAME" /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="SIGNATURE OF ATTORNEY FOR PETITIONER" /></p>
          </div>
        </li>
        <li style={{ marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold' }}>Declaration</p>
          <div style={{ marginLeft: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (a) <input type="checkbox" id="no-mailing-required" />
              <label htmlFor="no-mailing-required" style={{ marginLeft: '8px' }}>No mailing is required because service was by publication or posting and the address of the respondent remains unknown.</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (b) <input type="checkbox" id="copy-request" />
              <label htmlFor="copy-request" style={{ marginLeft: '8px' }}>A copy of this Request to Enter Default, including any attachments and an envelope with sufficient postage, was provided to the court clerk, with the envelope addressed as follows (address of the respondent’s attorney or, if none, the respondent’s last known address):</label>
            </div>
            <textarea style={{ border: '1px solid black', width: '100%', height: '96px', marginTop: '8px', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
          </div>
          <div style={{ marginTop: '16px' }}>
            <p>I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.</p>
            <p style={{ marginTop: '16px' }}>Date: <input type="text" style={{ borderBottom: '1px solid black', width: '160px', marginLeft: '8px' }} /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="TYPE OR PRINT NAME" /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="SIGNATURE OF DECLARANT" /></p>
          </div>
        </li>
      </ol>
      <div style={{ border: '1px solid black', padding: '16px', marginTop: '16px' }}>
        <p style={{ fontWeight: 'bold' }}>FOR COURT USE ONLY</p>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', marginTop: '16px' }}>
          <input type="checkbox" id="request-mailed" />
          <label htmlFor="request-mailed" style={{ marginLeft: '8px' }}>Request to Enter Default mailed to the respondent or the respondent’s attorney on (date):</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <input type="checkbox" id="default-entered" />
          <label htmlFor="default-entered" style={{ marginLeft: '8px' }}>Default entered as requested on (date):</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <input type="checkbox" id="default-not-entered" />
          <label htmlFor="default-not-entered" style={{ marginLeft: '8px' }}>Default not entered. Reason:</label>
        </div>
        <p style={{ marginTop: '16px' }}>Clerk, by <input type="text" style={{ borderBottom: '1px solid black', width: '256px', marginLeft: '8px' }} />, Deputy</p>
      </div>
    </div><br />
                <br />
                                            <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-190 [Rev. January 1, 2005]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        REQUEST TO ENTER DEFAULT
                        <div><h3>(Family Law—Uniform Parentage)</h3></div> 
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Code of Civil Procedure, §§ 585, 587; </div>
                        <div>Family Code § 2335.5 </div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 1 of 2</li>
                    </div>
                </div>
                <div style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ width: '70%' }}>
          <p style={{ margin: '0' }}>CASE NAME (Last name, first name of each party):</p>
          <textarea style={{ width: '100%', height: '32px', backgroundColor: 'rgb(225, 243, 243)', border: '1px solid black' }}></textarea>
        </div>
        <div style={{ width: '25%' }}>
          <p style={{ margin: '0' }}>CASE NUMBER:</p>
          <textarea style={{ width: '100%', height: '32px', backgroundColor: 'rgb(225, 243, 243)', border: '1px solid black' }}></textarea>
        </div>
      </div>

      <ol style={{ marginLeft: '16px' }}>
        <li style={{ marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold' }}> 4. Memorandum of costs</p>
          <div style={{ marginLeft: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             a. <input type="checkbox" id="costs-waived" />
              <label htmlFor="costs-waived" style={{ marginLeft: '8px' }}>Costs and disbursements are waived.</label>
            </div>
            <p>b. Costs and disbursements are listed as follows:</p>
            <div style={{ marginLeft: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              (1) <input type="checkbox" id="clerks-fees" />
                <label htmlFor="clerks-fees" style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
                   Clerk’s fees
                  <span style={{ flexGrow: 1, borderBottom: '1px dotted black', margin: '0 8px' }}></span>.......................................................................................................
                  $<textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '200px',height:'30px', marginLeft: '8px' }}></textarea>
                </label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              (2)  <input type="checkbox" id="process-server-fees" />
                <label htmlFor="process-server-fees" style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
                   Process server’s fees
                  <span style={{ flexGrow: 1, borderBottom: '1px dotted black', margin: '0 8px' }}></span>.....................................................................................
                  $<textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '200px',height:'30px', marginLeft: '8px' }}></textarea>
                </label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              (3) <input type="checkbox" id="other" />
                <label htmlFor="other" style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
                   Other (specify):....................................................................................................
                  $<textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '200px',height:'30px', marginLeft: '8px' }}></textarea>
                </label>
              </div>
              $<textarea style={{ width: '100%', height: '96px', backgroundColor: 'rgb(225, 243, 243)', marginTop: '8px' }}></textarea>
              <p style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
                TOTAL
                <span style={{ flexGrow: 1, borderBottom: '1px dotted black', margin: '0 8px' }}></span>
                $<textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '200px',height:'30px', marginLeft: '8px' }}></textarea>
              </p>
            </div>
            <p style={{ marginTop: '16px' }}>
              c. I am the attorney, agent, or party who claims these costs. To the best of my knowledge and belief, the foregoing items of cost are correct and have been necessarily incurred in this cause or proceeding.
            </p>
          </div>
          <div style={{ marginTop: '16px' }}>
            <p>I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.</p>
            <p style={{ marginTop: '16px' }}>Date: <input type="text" style={{ borderBottom: '1px solid black', width: '160px', marginLeft: '8px' }} /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="TYPE OR PRINT NAME" /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="SIGNATURE OF DECLARANT" /></p>
          </div>
        </li>
        <li style={{ marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold' }}>5. Declaration of nonmilitary status</p>
          <p>The respondent is not in the military service of the United States as defined in section 511 et seq. of the Servicemembers Civil Relief Act (50 U.S.C. Appen. § 501 et seq.), and is not entitled to the benefits of such act.</p>
          <div style={{ marginTop: '16px' }}>
            <p>I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.</p>
            <p style={{ marginTop: '16px' }}>Date: <input type="text" style={{ borderBottom: '1px solid black', width: '160px', marginLeft: '8px' }} /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="TYPE OR PRINT NAME" /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="SIGNATURE OF DECLARANT" /></p>
          </div>
        </li>
      </ol>
    </div>
                
                
                
                
                
                
                
                
                
                
                
                
                <br /><br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-190 [Rev. January 1, 2005]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        REQUEST TO ENTER DEFAULT
                        <div><h3>(Family Law—Uniform Parentage)</h3></div> 
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Code of Civil Procedure, §§ 585, 587; </div>
                        <div>Family Code § 2335.5 </div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 2 of 2</li>
                    </div>
                </div>
                </div> 
                

        
    )
};
