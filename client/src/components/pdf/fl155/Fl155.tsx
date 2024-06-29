import React from 'react'
import SUPFL155 from "./SU155";
export default function () {
    const [details, setDetails] = React.useState<SUPFL155>(
        {} as SUPFL155
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
            
            <h3 style={{ display: 'flex', marginBottom: '0' }}>FL-155 </h3>
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
                                <div>
                                    <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                                    <input 
                                    name={" AttorneyFor"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "5px",width:"71.7%" }} type="email" id="attorney" />
                                </div>
                            </td>
                            <td style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse" }} rowSpan={3}>
                               <div style={{border:'2px solid red',backgroundColor:'#b6acac', margin:'5px', padding:'3px'}}>To Keep outher people from seeing what you entered on your from, please press the Clear This Form button at the end of the form when finished</div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ margin: 2 }}>
                                    <label htmlFor="name">SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
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
                                    <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                                    <input 
                                    name={"Petitioner"}
                                    onChange={(e) => handleChange(e)}
                                   style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"85.4%" }} type="text" id="name" />
                                </div>
                                <div>
                                    <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                                    <input 
                                    name={"Respondent"}
                                    onChange={(e) => handleChange(e)}
                                   style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"83.7%" }} type="text" id="street" />
                                </div>
                                <div>
                                    <label htmlFor="street">OTHER PARENT:</label>
                                    <input 
                                    name={"Parent"}
                                    onChange={(e) => handleChange(e)}
                                   style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"83.7%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                        <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div><h3 >
                                    <b>FINANCIAL STATEMENT (SIMPLIFIED)</b>
                                </h3>
                                </div>
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
                </table>
                <div style={{ width: '100%', padding: '20px', fontSize: '14px', lineHeight: '1.5', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px',border:'2px solid black' }}>
        <strong>NOTICE: Read page 2 to find out if you qualify to use this form and how to use it.</strong>
      </div>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <div>
            1.
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: '5px' }}>
              <input type="checkbox" style={{ marginRight: '5px' }} />
             a. My only source of income is TANF, SSI, or GA/GR.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: '5px' }}>
              <input type="checkbox" style={{ marginRight: '5px' }} />
             b.  I have applied for TANF, SSI, or GA/GR.
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          2. I am the parent of the following number of natural or adopted children from this relationship..................... 
          <input type="text" style={{ width: '50px', marginLeft: '5px', marginRight: '10px', backgroundColor: 'rgb(225, 243, 243)' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          3. The children from this relationship are with me this amount of time..................... 
          <input type="text" style={{ width: '50px', marginLeft: '5px', marginRight: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />%
        </div>
        <div style={{ marginBottom: '15px', marginLeft: '20px' }}>
          a. The children from this relationship are with the other parent this amount of time..................... 
          <input type="text" style={{ width: '50px', marginLeft: '5px', marginRight: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />%
        </div>
        <div style={{ marginBottom: '15px', marginLeft: '20px' }}>
          b. Our arrangement for custody and visitation is (specify, using extra sheet if necessary):
          <input type="text" style={{ width: '500px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          4. My tax filing status is:
          <div style={{ marginLeft: '20px', marginTop: '5px' }}>
            <input type="checkbox" /> single 
            <input type="checkbox" style={{ marginLeft: '10px' }} /> married filing jointly 
            <input type="checkbox" style={{ marginLeft: '10px' }} /> head of household 
            <input type="checkbox" style={{ marginLeft: '10px' }} /> married filing separately
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          5. My current gross income (before taxes) per month is..................... $
          <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          <div style={{ marginTop: '10px', marginLeft: '20px' }}>
            This income comes from the following:
            <div style={{display:'flex'}}>
                <b style={{width:'15%'}}>Attach 1 copy of pay stubs for last 2 months here (cross out social security numbers)</b>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', marginTop: '5px' }}>
              <div style={{ marginBottom: '5px' }}>
                <input type="checkbox" /> Salary/wages: Amount before taxes per month..................... $
                <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
              </div>
              <div style={{ marginBottom: '5px' }}>
                <input type="checkbox" /> Retirement: Amount before taxes per month..................... $
                <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
              </div>
              <div style={{ marginBottom: '5px' }}>
                <input type="checkbox" /> Unemployment compensation: Amount per month..................... $
                <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
              </div>
              <div style={{ marginBottom: '5px' }}>
                <input type="checkbox" /> Workers' compensation: Amount per month..................... $
                <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
              </div>
              <div style={{ marginBottom: '5px' }}>
                <input type="checkbox" /> Social security: 
                <input type="checkbox" style={{ marginLeft: '5px' }} /> SSI 
                <input type="checkbox" style={{ marginLeft: '5px' }} /> Other 
                Amount per month..................... $
                <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
              </div>
              <div style={{ marginBottom: '5px' }}>
                <input type="checkbox" /> Disability: Amount per month..................... $
                <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
              </div>
              <div style={{ marginBottom: '5px' }}>
                <input type="checkbox" /> Interest income (from bank accounts or other): Amount per month..................... $
                <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
              </div>
            </div>
            </div>
          </div>
          <div style={{ marginLeft: '20px', marginTop: '10px' }}>
            <input type="checkbox" /> I have no income other than as stated in this paragraph.
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          6. I pay the following monthly expenses for the children in this case:
          <div style={{ marginLeft: '20px', marginTop: '5px' }}>
            a. Day care or preschool to allow me to work or go to school..................... $
            <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div style={{ marginLeft: '20px', marginTop: '5px' }}>
            b. Health care not paid for by insurance..................... $
            <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div style={{ marginLeft: '20px', marginTop: '5px' }}>
            c. School, education, tuition, or other special needs of the child..................... $
            <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div style={{ marginLeft: '20px', marginTop: '5px' }}>
            d. Travel expenses for visitation..................... $
            <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          7. There are (specify number)
          <input type="text" style={{ width: '50px', marginLeft: '5px', marginRight: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          other minor children of mine living with me. Their monthly expenses that I pay are..................... $
          <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          8. I spend the following average monthly amounts (please attach proof):
          <div style={{ marginLeft: '20px', marginTop: '5px' }}>
            <div style={{ marginBottom: '5px' }}>
              a. Job-related expenses that are not paid by my employer (specify reasons for expenses on separate sheet)..................... $
              <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
            </div>
            <div style={{ marginBottom: '5px' }}>
              b. Required union dues..................... $
              <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
            </div>
            <div style={{ marginBottom: '5px' }}>
              c. Required retirement payments (not social security, FICA, 401k or IRA)..................... $
              <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
            </div>
            <div style={{ marginBottom: '5px' }}>
              d. Health insurance costs $
              <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
            </div>
            <div style={{ marginBottom: '5px' }}>
              e. Child support I am paying for other minor children of mine who are not living with me..................... $
              <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
            </div>
            <div style={{ marginBottom: '5px' }}>
              f. Spousal support I am paying because of a court order for another relationship...................... $
              <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
            </div>
            <div style={{ marginBottom: '5px' }}>
              g. Monthly housing costs: 
              <input type="checkbox" style={{ marginLeft: '5px' }} /> rent or 
              <input type="checkbox" style={{ marginLeft: '5px' }} /> mortgage..................... $
              <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
            </div>
            <div style={{ marginBottom: '5px' }}>
              If mortgage: interest payments $
              <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
              real property taxes $
              <input type="text" style={{ width: '100px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          9. Information concerning my current employment
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', marginLeft: '20px', marginTop: '5px' }}>
            Employer:
            <input type="text" style={{ width: '300px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', marginLeft: '20px' }}>
            Address:
            <input type="text" style={{ width: '300px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', marginLeft: '20px' }}>
            Telephone number:
            <input type="text" style={{ width: '150px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', marginLeft: '20px' }}>
            My Occupation:
            <input type="text" style={{ width: '300px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', marginLeft: '20px' }}>
            Date work started:
            <input type="text" style={{ width: '300px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', marginLeft: '20px' }}>
            Date work stopped <i>(if applicable)</i>:
            <input type="text" style={{ width: '300px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', marginLeft: '20px' }}>
            What was your gross income (before taxes) before work stopped?
            <input type="text" style={{ width: '150px', marginLeft: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
        </div>
      </form>
    </div>
                


                        <br />
                        <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-155 [Rev. January 1, 2004]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        FINANCIAL STATEMENT (SIMPLIFIED)
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div> Family Code, § 4068(b)</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 1 of 2</li>
                    </div>
                </div>
                <div><br /><br />
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"69.5%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OTHER PARENT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"69.5%" }} type="text" id="street" />
                                </div>
                            </td>
                            <td style={{ width: "30%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "5px",width:"97%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ width: '100%', padding: '20px', fontSize: '14px', lineHeight: '1.5', fontFamily: 'Arial, sans-serif' }}>
                    <div style={{ marginBottom: '15px' }}>
                    10. My estimate of the outher party's gross monthly income (before taxes is).....................$ 
                    <input type="text" style={{ width: '100px', marginLeft: '5px', marginRight: '10px', backgroundColor: 'rgb(225, 243, 243)' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                    11. My current spouse's monthly income (before taxes) is.....................$ 
                    <input type="text" style={{ width: '100px', marginLeft: '5px', marginRight: '5px', backgroundColor: 'rgb(225, 243, 243)' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                    12. Outher information I want the court to know concerning child support in my case <i>(attach extrasheet with the information).</i>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                    13. <input type="checkbox" style={{ marginLeft: '5px' }} /> I am attaching a copy of page 3 of form FL-150, Income and Expense Declaration showing my expenses.
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                    I declare under penalty of perjury under the laws of the state of California that information contained on all pages of this from and any attachments is true and correct.
                    </div>

                </div>
                <div style={{ marginLeft: "5%" }}>
                    <div style={{ marginTop: 2, fontSize: 16 }}>
                        Date: <input
                        name={"Date"}
                        onChange={(e) => handleChange(e)}
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" size={20} id="fax" />
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "space-between", margin: 3}}
                    >
                        <div>
                            <input
                            name={"TypeOrPrintName"}
                            onChange={(e) => handleChange(e)}
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "4px" }} type="text" id="fax" size={50} />
                            <div>(TYPE OR PRINT NAME)</div>{" "}
                        </div>
                        <div>
                        <input 
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "4px" }}
                        name={"SignatureOfPetitioner"}
                        onChange={(e) => handleChange(e)}
                        type="text" size={40} id="fax" />{" "}
                            <div>  (SIGNATURE OF DECLARANT)</div>
                        </div>
                    </div>
                </div><br />
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <div style={{ marginRight: '20px' }}> <input type="checkbox" style={{ marginLeft: '5px' }} />PETITIONER/PLAINTIFF</div>
          <div> <input type="checkbox" style={{ margin: '5px' }} />RESPONDENT/DEFENDANT</div>
        </div>
                <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        
        <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>INSTRUCTIONS</div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Step 1: Are you eligible to use this form?</strong> If your answer is YES to any of the following questions, you may <strong>NOT</strong> use this form:
        </div>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '10px' }}>
          <li>Are you asking for spousal support (alimony) or a change in spousal support?</li>
          <li>Is your spouse or former spouse asking for spousal support (alimony) or a change in spousal support?</li>
          <li>Are you asking the other party to pay your attorney fees?</li>
          <li>Is the other party asking you to pay his or her attorney fees?</li>
          <li>Do you receive money (income) from any source other than the following?</li>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px', marginBottom: '10px' }}>
            <li>Welfare (such as TANF, GR, or GA)</li>
            <li>Salary or wages</li>
            <li>Disability</li>
            <li>Unemployment</li>
            <li>Interest</li>
            <li>Workers' compensation</li>
            <li>Social security</li>
            <li>Retirement</li>
          </ul>
          <li>Are you self-employed?</li>
        </ul>
        <div style={{ marginBottom: '10px' }}>
          If you are eligible to use this form and choose to do so, you do not need to complete the <strong>Income and Expense Declaration</strong> (form FL-150). Even if you are eligible to use this form, you may choose instead to use the <strong>Income and Expense Declaration</strong> (form FL-150).
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Step 2: Make 2 copies of each of your pay stubs for the last two months.</strong> If you received money from other than wages or salary, include copies of the pay stub received with that money. <strong>Privacy notice:</strong> If you wish, you may cross out your social security number if it appears on the pay stub, other payment notice or your tax return
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Step 3: Make 2 copies of your most recent federal income tax form.</strong>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Step 4: Complete this form with the required information.</strong> Type the form if possible or complete it neatly and clearly in black ink. If you need additional room, please use plain or lined paper, 8½-by-11", and staple to this form.
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Step 5: Make 2 copies of each side of this completed form and any attached pages.</strong>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Step 6: Serve a copy on the other party.</strong> Have someone other than yourself mail to the attorney for the other party, the other party, and the local child support agency, if they are handling the case, 1 copy of this form, 1 copy of each of your stubs for the last two months, and 1 copy of your most recent federal income tax return.
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Step 7: File the original with the court.</strong> Staple this form with 1 copy of each of your pay stubs for the last two months. Take this document and give it to the clerk of the court. Check with your local court about how to submit your return.
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Step 8: Keep the remaining copies of the documents for your file.</strong>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Step 9: Take the copy of your latest federal income tax return to the court hearing.</strong>
        </div>
        <div style={{ marginBottom: '10px' }}>
          It is very important that you attend the hearings scheduled for this case. If you do not attend a hearing, the court may make an order without considering the information you want the court to consider.
        </div>
      </div>
    </div>
  
      </div>
         
      <br />
                        <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-155 [Rev. January 1, 2004]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        FINANCIAL STATEMENT (SIMPLIFIED)
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div> Family Code, § 4068(b)</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 1 of 2</li>
                    </div>
                </div>
                </div>
    )
};









               