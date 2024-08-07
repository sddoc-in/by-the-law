import React from "react";
import SUPFL1034 from "./SU1034";

export default function FL1034() {
  const [details, setDetails] = React.useState<SUPFL1034>(
    {} as SUPFL1034
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

  function handleStatusConferenceStatement(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      StatusConferenceStatement: {
        ...details.StatusConferenceStatement,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleCheckTheIssues(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      CheckTheIssues: {
        ...details.CheckTheIssues,
        [e.target.name]: e.target.value === "on" ? true : false,
      },
    });
  }

  function handleIsTheDepartmentOfChildSupportServices(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      IsTheDepartmentOfChildSupportServices: {
        ...details.IsTheDepartmentOfChildSupportServices,
<<<<<<< HEAD
        IfYes :{
          ...details.IsTheDepartmentOfChildSupportServices?.IfYes,

        [e.target.name]: e.target.value==="on"?true:false
=======
        IfYes: {
          ...details.IsTheDepartmentOfChildSupportServices?.IfYes,

          [e.target.name]: e.target.value === "on" ? true : false
>>>>>>> aman
        }

      },
    });
  }

<<<<<<< HEAD
  
=======

>>>>>>> aman

  console.log(details);


<<<<<<< HEAD
  
  return (
    <>
      <div style={{ fontFamily: "Arial,sans-serif", fontSize: "16px", color: 'black', backgroundColor: 'white' ,maxWidth: "1100px", margin: "auto"}}>
        <h3 style={{ display: 'flex', justifyContent: 'end', marginTop: '3rem', marginBottom: '0' }}>SUPFL 1034 </h3>
        <table
          style={{ width: "100%", marginBottom: "20px", fontSize: "12px", border: '2px solid black', borderCollapse: 'collapse' }} >
          <tr>
            <td style={{ width: "250px", border: '2px solid black', borderCollapse: 'collapse',paddingLeft:"10px",paddingTop:"5px" }}>
=======

  return (
    <>
      <div style={{ fontFamily: "Arial,sans-serif", fontSize: "16px", color: 'black', backgroundColor: 'white', maxWidth: "1100px", margin: "auto" }}>
        <h3 style={{ display: 'flex', justifyContent: 'end', marginTop: '3rem', marginBottom: '0' }}>SUPFL 1034 </h3>
        {/* <table
          style={{ width: "100%", marginBottom: "20px", fontSize: "12px", border: '2px solid black', borderCollapse: 'collapse' }} >
          <tr>
            <td style={{ width: "250px", border: '2px solid black', borderCollapse: 'collapse', paddingLeft: "10px", paddingTop: "5px" }}>
>>>>>>> aman
              <div>
                <label>
                  ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number,
                  and address):
                </label>
              </div>

              <div >
<<<<<<< HEAD
                <div style={{ display:"flex" }}>
                  <label htmlFor="telephone">Name:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px',paddingLeft:"10px",marginBottom:"2px" }}
                  name={"Name"}
                  size={133}
                  onChange={(e) => handleChange(e)}
                  type="text" id="fax" />
                </div>
                <div>
                  <label htmlFor="telephone">ADDRESS:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"2px",paddingLeft:"1px" }}
                  name={"Address"}
                  size={132}
                  onChange={(e) => handleChange(e)}
                  type="text" id="fax" />
                </div>
                <div>
                  <label htmlFor="telephone">CITY, STATE , ZIP:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"2px",paddingLeft:"10px" }}
                   name={"City"}
                   size={124}
                   onChange={(e) => handleChange(e)}
                  type="text" id="fax" />
                </div>
                <div>
                  <label htmlFor="telephone">TELEPHONE NO.:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"2px",paddingRight:"38.9rem"}}
                   name={"TelephoneNo"}
                   onChange={(e) => handleChange(e)}
                  type="number" id="telephone" />
                </div>
                <div>
                  <label htmlFor="telephone">FAX NO (optional):</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"2px",paddingRight:"38rem" }} 
                   name={"FaxNo"}
                   size={120}
                   onChange={(e) => handleChange(e)}
                  type="number" id="telephone" />
                </div>
                <div>
                  <label htmlFor="fax">E-MAIL ADDRESS(optional):</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"2px",paddingLeft: "16px"
}}
                   name={"EmailAddress"}
                   size={112}
                   onChange={(e) => handleChange(e)}
                  type="text" id="fax" />
=======
                <div style={{ display: "flex" }}>
                  <label htmlFor="telephone">Name:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px', paddingLeft: "10px", marginBottom: "2px" }}
                    name={"Name"}
                    size={133}
                    onChange={(e) => handleChange(e)}
                    type="text" id="fax" />
                </div>
                <div>
                  <label htmlFor="telephone">ADDRESS:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px', marginBottom: "2px", paddingLeft: "1px" }}
                    name={"Address"}
                    size={132}
                    onChange={(e) => handleChange(e)}
                    type="text" id="fax" />
                </div>
                <div>
                  <label htmlFor="telephone">CITY, STATE , ZIP:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px', marginBottom: "2px", paddingLeft: "10px" }}
                    name={"City"}
                    size={124}
                    onChange={(e) => handleChange(e)}
                    type="text" id="fax" />
                </div>
                <div>
                  <label htmlFor="telephone">TELEPHONE NO.:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px', marginBottom: "2px", paddingRight: "38.9rem" }}
                    name={"TelephoneNo"}
                    onChange={(e) => handleChange(e)}
                    type="number" id="telephone" />
                </div>
                <div>
                  <label htmlFor="telephone">FAX NO (optional):</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px', marginBottom: "2px", paddingRight: "38rem" }}
                    name={"FaxNo"}
                    size={120}
                    onChange={(e) => handleChange(e)}
                    type="number" id="telephone" />
                </div>
                <div>
                  <label htmlFor="fax">E-MAIL ADDRESS(optional):</label>
                  <input style={{
                    backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px', marginBottom: "2px", paddingLeft: "16px"
                  }}
                    name={"EmailAddress"}
                    size={112}
                    onChange={(e) => handleChange(e)}
                    type="text" id="fax" />
>>>>>>> aman
                </div>
              </div>

              <div>
                <label htmlFor="attorney">ATTORNEY FOR (name):</label>
<<<<<<< HEAD
                <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"3px",paddingLeft:"4px" }}
                 name={"AttorneyFor"}
                 size={118}
                 onChange={(e) => handleChange(e)}
                type="email" id="attorney" />
=======
                <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px', marginBottom: "3px", paddingLeft: "4px" }}
                  name={"AttorneyFor"}
                  size={118}
                  onChange={(e) => handleChange(e)}
                  type="email" id="attorney" />
>>>>>>> aman
              </div>
            </td>
            <td
              style={{ textAlign: "center", width: "200px", border: '2px solid black', borderCollapse: 'collapse' }}
              rowSpan={3}
            >
              FOR COURT USE ONLY
            </td>
          </tr>
          <tr>
<<<<<<< HEAD
            <td style={{ border: '2px solid black', borderCollapse: 'collapse',paddingLeft:"11px" }}>
=======
            <td style={{ border: '2px solid black', borderCollapse: 'collapse', paddingLeft: "11px" }}>
>>>>>>> aman
              <div style={{ fontWeight: 'bold' }}>
                <label htmlFor="name">
                  SUPERIOR COURT OF CALIFORNIA COUNTY OF SANTA CRUZ
                </label>
<<<<<<< HEAD
            
              </div>
              <div>
                <label htmlFor="street">1 Second Street, Room 300</label>
               
              </div>
              <div>
                <label htmlFor="street">Watsonville, CA 95076</label>
              
              </div>
              <div>
                <label htmlFor="street">Watsonville Branch</label>
                
=======

              </div>
              <div>
                <label htmlFor="street">1 Second Street, Room 300</label>

              </div>
              <div>
                <label htmlFor="street">Watsonville, CA 95076</label>

              </div>
              <div>
                <label htmlFor="street">Watsonville Branch</label>

>>>>>>> aman
              </div>
            </td>
          </tr>
          <tr>
<<<<<<< HEAD
            <td style={{ border: '2px solid black', borderCollapse: 'collapse',paddingLeft:"11px" }}>
              <div >
                <label htmlFor="name">PLAINTIFF/PETITIONER:</label>
                <input size={120} style={{ backgroundColor: 'rgb(225,243,243)', border: 'none', marginTop: '3px',paddingLeft:"5px" }}
                name={"PlaintiffPetitioner"}
                onChange={(e) => handleChange(e)}
                type="text" id="name" />
=======
            <td style={{ border: '2px solid black', borderCollapse: 'collapse', paddingLeft: "11px" }}>
              <div >
                <label htmlFor="name">PLAINTIFF/PETITIONER:</label>
                <input size={120} style={{ backgroundColor: 'rgb(225,243,243)', border: 'none', marginTop: '3px', paddingLeft: "5px" }}
                  name={"PlaintiffPetitioner"}
                  onChange={(e) => handleChange(e)}
                  type="text" id="name" />
>>>>>>> aman
              </div>
              <div>vs.</div>
              <div>
                <label htmlFor="street">RESPONDENT:</label>
<<<<<<< HEAD
                <input size={129} 
                 name={" DefendantRespondent" }
                 onChange={(e) => handleChange(e)}
=======
                <input size={129}
                  name={" DefendantRespondent"}
                  onChange={(e) => handleChange(e)}
>>>>>>> aman
                  style={{ backgroundColor: 'rgb(225,243,243)', border: 'none', marginTop: '2px' }} type="text" id="street" />
              </div>
            </td>
          </tr>
          <tr>
<<<<<<< HEAD
            <td style={{ border: '2px solid black', borderCollapse: 'collapse', paddingLeft:"10rem" }}>
=======
            <td style={{ border: '2px solid black', borderCollapse: 'collapse', paddingLeft: "10rem" }}>
>>>>>>> aman
              <h3 style={{ textAlign: "center" }}>
                STATUS CONFERENCE STATEMENT
              </h3>
              <div style={{ marginLeft: '1.2rem' }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div style={{ flex: " 1" }}>
<<<<<<< HEAD
                    <input type="checkbox" 
                     onChange={(e) => handleStatusConferenceStatement(e)}
                     defaultChecked={details.StatusConferenceStatement?.Dissolution}
                     name="Dissolution"
=======
                    <input type="checkbox"
                      onChange={(e) => handleStatusConferenceStatement(e)}
                      defaultChecked={details.StatusConferenceStatement?.Dissolution}
                      name="Dissolution"
>>>>>>> aman
                    />
                    <b> Dissolution</b>
                  </div>
                  <div style={{ flex: "1" }}>
<<<<<<< HEAD
                    <input type="checkbox" 
                     onChange={(e) => handleStatusConferenceStatement(e)}
                     defaultChecked={details.StatusConferenceStatement?.LegalSeparation}
                    name="legal_separation" />
=======
                    <input type="checkbox"
                      onChange={(e) => handleStatusConferenceStatement(e)}
                      defaultChecked={details.StatusConferenceStatement?.LegalSeparation}
                      name="legal_separation" />
>>>>>>> aman
                    <b> Legal Separation</b>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div style={{ flex: "1" }}>
                    <input type="checkbox"
<<<<<<< HEAD
                     onChange={(e) => handleStatusConferenceStatement(e)}
                     defaultChecked={details.StatusConferenceStatement?.Nullity}
                    name="nullity" />
=======
                      onChange={(e) => handleStatusConferenceStatement(e)}
                      defaultChecked={details.StatusConferenceStatement?.Nullity}
                      name="nullity" />
>>>>>>> aman
                    <b>Nullity</b>
                  </div>
                  <div style={{ flex: "1" }}>
                    <input type="checkbox"
<<<<<<< HEAD
                     onChange={(e) => handleStatusConferenceStatement(e)}
                     defaultChecked={details.StatusConferenceStatement?.Parentage}
                    name="parentage" />
=======
                      onChange={(e) => handleStatusConferenceStatement(e)}
                      defaultChecked={details.StatusConferenceStatement?.Parentage}
                      name="parentage" />
>>>>>>> aman
                    <b>Parentage</b>
                  </div>
                </div>
              </div>
              <div>
<<<<<<< HEAD
              <input type="checkbox" name="parentage" style={{marginLeft:"18px"}} />
                <label htmlFor="street">
                  
                  <b>Other Family Law:</b>
                </label>
                <input size={90} style={{ backgroundColor: 'rgb(225,243,243)', border: 'none', margin: '2px'}} type="text" id="street" />
              </div>
            </td>
            <td style={{ width: "100px", border: '2px solid black', borderCollapse: 'collapse',paddingLeft:"4px" }}>
              <div  >
              <label htmlFor="street">CASE NUMBER:</label>
             
             <input
             name={"CaseNumber"}
             onChange={(e) => handleChange(e)}
             size={10} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px',paddingLeft: "0.5rem" }} type="text" id="street" />
              </div>
              <div >
              <label htmlFor="street">HEARING DATE:</label>
             
                <input 
                name={"HearingDate"}
                onChange={(e) => handleChange(e)}
                size={10} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px',paddingLeft: "0.4rem" }} type="text" id="street" />
              </div>
              <div>
              <label htmlFor="street"> TIME:</label>
             
             <input
             name={"Time"}
             onChange={(e) => handleChange(e)}
             size={20} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px' }} type="text" id="street" />
              </div>
              <div >
                <label htmlFor="street"> DEPT:</label>
             
                <input 
                name={"Dept"}
                onChange={(e) => handleChange(e)}
                size={20} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px',marginBottom:"2px" }} type="text" id="street" />
              </div>
            </td>
          </tr>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding="5"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                1
              </td>
              <td width="95%" valign="top">
                <div>
                  Check the issues on which you and the other party disagree or
                  need orders:
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding="5"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td
                valign="top"
                style={{ display: "flex", justifyContent: "space-between",textWrap: "nowrap" }}
              >
                <div
                  style={{
                    flex: "1",
                    padding: "5px",
                    margin: "2px",
                    marginLeft: "75px",
                  }}
                >
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.a}
                  type="checkbox" name="a" />
                  Custody/Visitation
                  <br />
                  <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.b}
                  type="checkbox"   name="b" /> Arrearages
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.c}
                  type="checkbox" name="c" /> Child Support
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.d}
                  type="checkbox" name="d" /> Spousal
                  Support
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.e}
                  type="checkbox" name="e" /> Separation
                  Date
                  <br />
                  <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.f}
                  type="checkbox" name="f" /> Other:
                  <input size={45} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
                </div>
                <div style={{ flex: "1", padding: "5px", margin: "2px" }}>
                  <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.g}
                  type="checkbox" name="g" /> Property
                  Valuation
                  <br />
                  <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.h}
                    type="checkbox"
                    name="h"
                  />{" "}
                  Property Characterization
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.i}
                  type="checkbox" name="i" /> Property
                  Division
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.j}
                  type="checkbox" name="j" /> Reimbursement
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.k}
                  type="checkbox" name="k" /> Attorney’s
                  Fees and Costs
                  <br />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "3px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                2.
              </td>
              <td width="95%" valign="top">
                <div style={{ margin: "5px" }}>
                  Discovery (getting information about/from the other party)
                  that still needs to be completed:
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <span>Has discovery been finished?</span>
                  <input
                    type="checkbox"
                    name="discovery_finished_yes"
                    style={{ marginLeft: "140px" }}
                  />{" "}
                  Yes
                  <input type="checkbox" name="discovery_finished_no" /> No
                  <input type="checkbox" name="discovery_not_required" /> Not
                  required/requested in this case.
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <span>If NO, what discovery still needs to be done?</span>
                  <input
                    type="checkbox"
                    name="interrogatories"
                    style={{ marginLeft: "38px" }}
                  />{" "}
                  Interrogatories
                  <input
                    type="checkbox"
                    name="depositions"
                    style={{ marginLeft: "7px" }}
                  />{" "}
                  Depositions
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: " center",
                    marginBottom: " 5px",
                    textWrap: "nowrap"
                  }}
                >
                  <input type="checkbox" name="document_production" /> Document
                  Production
                  <input
                    type="checkbox"
                    name="request_for_admissions"
                    style={{ marginLeft: " 20px" }}
                  />{" "}
                  Request for Admissions
                  <input
                    type="checkbox"
                    name="other"
                    style={{ marginLeft: "82px" }}
                  />{" "}
                  Other:
                  <input size={45} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
                </div>

                <div>
                  How long do you think it will take both parties to finish
                  discovery?
                  <input size={25} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
                  days
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "5px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                3.
              </td>
              <td
                width="95%"
                valign="top"
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <div>
                  Co-parenting (for cases with children) classes have been
                  completed by
                </div>
                <div>
                  <input type="checkbox" name="completed_by_petitioner" />{" "}
                  Petitioner
                  <input type="checkbox" name="completed_by_respondent" />{" "}
                  Respondent
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "5px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                4.
              </td>
              <td width="95%" valign="top">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <div>
                    Mandatory Declaration of Disclosure (Dissolution, Legal
                    Separation, and Nullity cases only):
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div>Petitioner has served Respondent with</div>
                    <span style={{ marginLeft: "23px" }}>
                      <input type="checkbox" name="preliminary_declaration" />{" "}
                      Preliminary
                    </span>
                    <span>
                      <input type="checkbox" name="final_declaration" /> Final
                    </span>
                    <span>Declarations of Disclosure</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      marginBottom: "5px",
                    }}
                  >
                    <div>Respondent has served Petitioner with</div>
                    <span style={{ marginLeft: "22px" }}>
                      <input
                        type="checkbox"
                        name="respondent_preliminary_declaration"
                      />{" "}
                      Preliminary
                    </span>
                    <span>
                      <input
                        type="checkbox"
                        name="respondent_final_declaration"
                      />{" "}
                      Final
                    </span>
                    <span>Declarations of Disclosure</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      marginBottom: "5px",
                    }}
                  >
                    <div>If not served yet, do you need a deadline?</div>
                    <span>
                      <input type="checkbox" name="need_deadline_yes" /> Yes
                    </span>
                    <span>
                      <input type="checkbox" name="need_deadline_no" /> No
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "3px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                5.
              </td>
              <td width="95%" valign="top">
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <span>
                    Have you and the other party and/or your attorneys met to
                    discuss settlement?
                  </span>
                  <span>
                    <input type="checkbox" name="settlement_discussion_yes" />{" "}
                    Yes
                  </span>
                  <span>
                    <input type="checkbox" name="settlement_discussion_no" /> No
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "10px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                6.
              </td>
              <td width="95%" valign="top">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    margin: "3px",
                  }}
                >
                  <span>Are the parties in Mediation?</span>
                  <span>
                    <input type="checkbox" name="mediation_yes" /> Yes
                  </span>
                  <span>
                    <input type="checkbox" name="mediation_no" /> No
                  </span>
                </div>
                <div style={{ margin: "3px" }}>
                <label htmlFor="name">If Yes, on what issue?</label>
                <input size={100} style={{ backgroundColor: 'rgb(225,243,243)', border: 'none', marginTop: '3px' }}
                name={"what issue"}
                onChange={(e) => handleChange(e)}
                type="text" id="name" />
                
                 </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <span>
                    Are you satisfied with the progress made in Mediation?
                  </span>
                  <span>
                    <input type="checkbox" name="satisfied_yes" /> Yes
                  </span>
                  <span>
                    <input type="checkbox" name="satisfied_no" /> No
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "3px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                7.
              </td>
              <td width="95%" valign="top">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    margin: "3px",
                  }}
                >
                  <span>Are you ready to set for trial?</span>
                  <span>
                    <input type="checkbox" name="ready_for_trial_yes" /> Yes
                  </span>
                  <span>
                    <input type="checkbox" name="ready_for_trial_no" /> No
                  </span>
                </div>
                <div style={{ margin: "3px" }}>
                  If yes, how long will your trial take (estimate)?{" "}
                  <input 
                  name={"Hours"}
                  onChange={(e) => handleChange(e)} 
                  size={20} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />{" "}
                  hours/days. Number of Witnesses{" "}
                  <input
                  name={"NumberOfWitnesses"}
                  onChange={(e) => handleChange(e)} 
                  size={10} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
                </div>
                <div style={{ margin: "3px" }}>
                  Names of Witnesses:{" "}
                  <input
                  name={"NamesOfWitnesses"}
                  onChange={(e) => handleChange(e)} 
                  size={100} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <hr style={{ width: "100%" }} />

        <div
          className="footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ listStyle: "none" }}>
            <li>Form Adopted for MANDATORY USE</li>
            <li>Superior Court of Santa Cruz Country</li>
            <li>SUPFL 1034 01/01/20</li>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>STATUS CONFERENCE STATEMENT</h3>
            <label style={{ textAlign: "center", fontWeight: 'bold' }}>
              (Family Law)
            </label>
          </div>
          <div style={{ listStyle: "none" }}>
            <li>Page 1 of 2</li>
            <li>Local Rule of Court 3.1.06</li>
          </div>
        </div>

        <div style={{pageBreakAfter:"always"}}></div>
        <div style={{ pageBreakBefore: "always" }}></div>


        <table style={{ width: "100%", border: '2px solid black', borderCollapse: 'collapse' , marginTop:'10px'}}>
          <tr>
            <td style={{ border: '2px solid black', borderCollapse: 'collapse' }}>
              <div style={{ marginLeft: '1.2rem' }}>
                <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                <input
                  onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                  defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.WhichCounty}
                size={65} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px',marginBottom:"2px" }} type="text" id="name" />
              </div>
              <div style={{ marginLeft: '1.2rem' }}>
                <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                <input 
                onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.FSBNumber}
                size={60} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px' }} type="text" id="street" />
              </div>
            </td>
            <td style={{ width: "30%", border: '2px solid black', borderCollapse: 'collapse' }}>
              <div style={{ marginLeft: '1.2rem' }}>
                <label htmlFor="street">CASE NUMBER:</label>
                <br />
                <input
                 onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                 defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.CourtCaseNumber}
                size={35} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
              </div>
            </td>
          </tr>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                8.
              </td>
              <td width="95%" valign="top">
                <div>
                  Is the Department of Child Support Services involved on the
                  issue of child support? <input type="checkbox" name="parentage" style={{marginLeft:"5px"}} />Yes <input type="checkbox" name="parentage" style={{marginLeft:"5px"}} /> No
                </div>
                <div style={{ margin: "5px" }}>
                  If yes: Which County?
                  <input 
                  onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                  defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.WhichCounty}
                  size={54} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
                  FSB Number?
                  <input
                  onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                  defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.FSBNumber}
                  size={74} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
                </div>
                <div style={{ margin: "5px" }}>
                  {" "}
                  Court Case Number (if different from this case):
                  <input 
                      onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                      defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.CourtCaseNumber}
                  size={74} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                9.
              </td>
              <td width="95%" valign="top">
                <div style={{ margin: "5px" }}>
                  As dictated by California Rules of Court 5.83, the Court
                  strives to have family law matters resolved in a timely
                  manner. What factors do you anticipate will make it difficult
                  <br /> to reach a Final Judgment in this case?
                </div>
                {[...Array(10)].map((_, index) => (
                  <div key={index}>
                    <input 
                    name={"WhatFactorsDoYouAnticipateWillMakeItDifficultToReachAFinalJudgementInThisCase"}
                    onChange={(e) => handleChange(e)}
                    size={135} style={{ backgroundColor: "rgb(225,243,243)",borderBottom:"2px solid black", margin: '2px',textDecoration:"underline"}} type="text" id="name" />
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                10.
              </td>
              <td width="95%" valign="top">
                <div style={{ margin: "5px" }}>
                  If you have had a previous status conference, what has
                  occurred or changed in this case?
                </div>
                {[...Array(20)].map((_, index) => (
                  <div key={index}>
                    <input
                    name={" IfYouHaveHadAPreviousStatusConferenceWhatHasOccuredOrChangedInThisCase"}
                    onChange={(e) => handleChange(e)}
                    size={135} style={{ backgroundColor: "rgb(225,243,243)",borderBottom:"2px solid black", margin: '2px' }} type="text" id="name" />
                  </div>
                ))}
                <div style={{ margin: "10px" }}>Date: 
                <input 
                name={"Date"}
                onChange={(e) => handleChange(e)}
                size={15} style={{ backgroundColor: "rgb(225,243,243)", borderBottom:"2px solid black", margin: '2px' }} type="text" id="name" /></div>

                <div
                  style={{
                    display: "flex",
                    gap: "40%",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <input
                      name={"PrintOrTypeName"}
                      onChange={(e) => handleChange(e)}
                    size={44} style={{ backgroundColor: "rgb(225,243,243)", borderBottom:"2px solid black", margin: '2px' }} type="text" id="name" />
                    Print or type name
                  </div>
                  <div>
                    <input 
                    name={"Signature"}
                    onChange={(e) => handleChange(e)}
                    size={30} style={{ backgroundColor: "rgb(225,243,243)", borderBottom:"2px solid black", margin: '2px' }} type="text" id="name" />
                    Signature
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <br />
        <hr style={{ width: "100%" }} />

        <div
          className="footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ listStyle: "none" }}>
            <li>Form Adopted for MANDATORY USE</li>
            <li>Superior Court of Santa Cruz Country</li>
            <li>SUPFL 1034 01/01/20</li>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>STATUS CONFERENCE STATEMENT</h3>
            <label style={{ textAlign: "center", fontWeight: 'bold' }}>
              (Family Law)
            </label>
          </div>
          <div style={{ listStyle: "none" }}>
            <li>Page 2 of 2</li>
            <li>Local Rule of Court 3.1.06</li>
          </div>
        </div>
      </div>
=======
                <input type="checkbox" name="parentage" style={{ marginLeft: "18px" }} />
                <label htmlFor="street">

                  <b>Other Family Law:</b>
                </label>
                <input size={90} style={{ backgroundColor: 'rgb(225,243,243)', border: 'none', margin: '2px' }} type="text" id="street" />
              </div>
            </td>
            <td style={{ width: "100px", border: '2px solid black', borderCollapse: 'collapse', paddingLeft: "4px" }}>
              <div  >
                <label htmlFor="street">CASE NUMBER:</label>

                <input
                  name={"CaseNumber"}
                  onChange={(e) => handleChange(e)}
                  size={10} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px', paddingLeft: "0.5rem" }} type="text" id="street" />
              </div>
              <div >
                <label htmlFor="street">HEARING DATE:</label>

                <input
                  name={"HearingDate"}
                  onChange={(e) => handleChange(e)}
                  size={10} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px', paddingLeft: "0.4rem" }} type="text" id="street" />
              </div>
              <div>
                <label htmlFor="street"> TIME:</label>

                <input
                  name={"Time"}
                  onChange={(e) => handleChange(e)}
                  size={20} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px' }} type="text" id="street" />
              </div>
              <div >
                <label htmlFor="street"> DEPT:</label>

                <input
                  name={"Dept"}
                  onChange={(e) => handleChange(e)}
                  size={20} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px', marginBottom: "2px" }} type="text" id="street" />
              </div>
            </td>
          </tr>
        </table> */}

        <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse", }}>
          <tr className='flex justify-center items-start w-full h-full'>
            <td style={{ width: "70%", margin: 0, padding: 1, borderCollapse: "collapse", height: "100%", borderRight: "2px solid black" }}
            >
              <div style={{marginLeft:"5%"}}>
                <label style={{fontSize:"10px"}}>
                  ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number,
                  and address):
                </label>
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label style={{ fontSize: "10px" }} htmlFor="attorney">NAME :</label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "71%" }} type="email" id="attorney" />
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label style={{ fontSize: "10px" }} htmlFor="attorney">ADDRESS </label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "71%" }} type="email" id="attorney" />
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label style={{ fontSize: "10px" }} htmlFor="attorney">CITY,STATE,ZIP </label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "71%" }} type="email" id="attorney" />
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label style={{ fontSize: "10px" }} htmlFor="attorney">TELEPHONE NO </label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "71%" }} type="email" id="attorney" />
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label style={{ fontSize: "10px" }} htmlFor="attorney">FAX NO. <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "71%" }} type="email" id="attorney" />
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label style={{ fontSize: "10px" }} htmlFor="attorney">EMAIL ADDRESS. <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "71%" }} type="email" id="attorney" />
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label style={{ fontSize: "10px" }} htmlFor="attorney">ATTORNEY FOR. <span style={{ fontStyle: "italic" }}>(Name)</span>:</label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "71%" }} type="email" id="attorney" />
              </div>
            </td>
            <td style={{ textAlign: "center", top: 0, marginBottom: 10, borderCollapse: "collapse" }}
              className='relative w-[30%]'
            >
              <p className='absolute' style={{
                top: 10,
                left: "21%",
                fontSize: "10px",
                fontWeight: "bold"
              }}>
                FOR COURT USE ONLY
              </p>
            </td>
          </tr>
          <tr className='flex justify-center items-center w-full'>
            <td style={{ margin: 0, padding: 1, paddingBottom: 2, borderCollapse: "collapse", borderTop: "2px solid black", display: "flex", flexDirection: "column", justifyContent: "flex-end", width: "70%", borderRight: "2px solid black" }}>
              <div className=' flex justify-center items-center'>
                <label htmlFor="name" style={{ fontSize: "13px", fontWeight: "bold" }}>
                  SUPERIOR COURT OF CALIFORNIA COUNTY OF SANTA CRUZ
                </label>
              </div>         
              <div style={{marginLeft:"12%",fontSize: "15px",}}>
                <label htmlFor="street">1 Second Street, Room 300</label>
              </div>
              <div style={{marginLeft:"12%",fontSize: "15px",}}>
                <label htmlFor="street">Watsonville, CA 95076</label>
              </div>
              <div style={{marginLeft:"12%",fontSize: "15px",}}>
                <label htmlFor="street">Watsonville Branch</label>
              </div>
          


          </td>
          <td style={{ textAlign: "center", top: 0, marginBottom: 10, borderCollapse: "collapse" }}
            className=' w-[30%]'
          >
          </td>
        </tr>
        <tr className='flex justify-center items-center w-full'>
          <td style={{ borderTop: "2px solid black", borderCollapse: "collapse", padding: 1, paddingBottom: 2, width: "70%", borderRight: "2px solid black", borderBottom: "2px solid black" }}>
            <div className='flex justify-end items-center '>
              <label htmlFor="name" style={{ fontSize: "10px" }}>PLAINTIFF/PETITIONER:</label>
              <input size={86} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "71%" }}
                type="text" id="name" />
            </div>
            <div className='flex  items-center mt-1'>
              <span style={{ fontStyle: "italic", marginLeft: "12%", fontSize: "10px" }}>Vs</span>
            </div>
            <div className='flex justify-end items-center mt-1'>
              <label htmlFor="street" style={{ fontSize: "10px" }}>DEFENDENT/RESPONDENT:</label>
              <input size={85} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "71%" }}
                type="text" id="street" />
            </div>

          </td>
          <td style={{ textAlign: "center", top: 0, marginBottom: 10, borderCollapse: "collapse" }}
            className=' w-[30%]'
          >

          </td>
        </tr>
        <tr className='flex justify-center items-center w-full'>
          <td style={{
            borderCollapse: "collapse", width: "70%",
            borderRight: "2px solid black",

          }}>
            <div style={{ textAlign: "center", fontSize: "14px", letterSpacing: "1px" }}>
              <b>STATUS CONFERENCE STATEMENT</b>
            </div>
            <div style={{ display: "flex", fontSize: "14px", letterSpacing: "1px" }}>
              <div style={{ marginLeft: "27%" }}>
                <input type="checkbox" style={{ marginRight: 5 }} />
                <span style={{ fontStyle: "10px", fontWeight: "bold" }}>Dissolution</span>
              </div>
              <div style={{ marginLeft: "18%" }}>
                <input type="checkbox" style={{ marginRight: 5 }} />
                <span style={{ fontStyle: "10px", fontWeight: "bold" }}>Legal Separation</span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", fontSize: "14px", letterSpacing: "1px" }}>
              <div style={{ marginRight: "23%" }}>
                <input type="checkbox" style={{ marginRight: 5 }} />
                <span style={{ fontStyle: "10px", fontWeight: "bold" }}>Nullity</span>
              </div>
              <div style={{ marginRight: "12px" }}>
                <input type="checkbox" style={{ marginRight: 5 }} />
                <span style={{ fontStyle: "10px", fontWeight: "bold" }}>Parentage</span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", fontSize: "14px", letterSpacing: "1px" }}>
              <div style={{ marginRight: "12px" }}>
                <input type="checkbox" style={{ marginRight: 5 }} />
                <span style={{ fontStyle: "10px", fontWeight: "bold" }}> Other Family Law:</span>
              </div>
              <div style={{ marginLeft: "12px" }}>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px",borderBottom:"2px solid black" }} className='w-[100%]' type="number" id="telephone" />

              </div>
            </div>


          </td>
          <td className='px-2 w-[30%]' style={{ borderTop: "2px solid black", }}>
            <div style={{ margin: "0px", }}>
              <label htmlFor="street" style={{ fontSize: "10px" }}>CASE NUMBER : </label>
              <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "75%" }} type="text" id="street" />
            </div>
           
            <div style={{ margin: "0px", }}>
              <label htmlFor="street" style={{ fontSize: "10px" }}>HEARING DATE : </label>
              <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "75%" }} type="text" id="street" />
            </div>
            <div style={{ margin: "0px", }}>
              <label htmlFor="street" style={{ fontSize: "10px" }}>TIME : </label>
              <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "90%" }} type="text" id="street" />
            </div>
            <div style={{ margin: "0px", }}>
              <label htmlFor="street" style={{ fontSize: "10px" }}>DEPT : </label>
              <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "90%" }} type="text" id="street" />
            </div>
          </td>
        </tr>
      </table>

      <table
        width="100%"
        style={{ pageBreakInside: "auto" }}
        cellPadding="5"
        cellSpacing="5"
      >
        <tbody>
          <tr>
            <td width="5%" valign="top">
              1
            </td>
            <td width="95%" valign="top">
              <div>
                Check the issues on which you and the other party disagree or
                need orders:
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        width="100%"
        style={{ pageBreakInside: "auto" }}
        cellPadding="5"
        cellSpacing="5"
      >
        <tbody>
          <tr>
            <td
              valign="top"
              style={{ display: "flex", justifyContent: "space-between", textWrap: "nowrap" }}
            >
              <div
                style={{
                  flex: "1",
                  padding: "5px",
                  margin: "2px",
                  marginLeft: "75px",
                }}
              >
                <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.a}
                  type="checkbox" name="a" />
                Custody/Visitation
                <br />
                <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.b}
                  type="checkbox" name="b" /> Arrearages
                <br />
                <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.c}
                  type="checkbox" name="c" /> Child Support
                <br />
                <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.d}
                  type="checkbox" name="d" /> Spousal
                Support
                <br />
                <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.e}
                  type="checkbox" name="e" /> Separation
                Date
                <br />
                <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.f}
                  type="checkbox" name="f" /> Other:
                <input size={45} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
              </div>
              <div style={{ flex: "1", padding: "5px", margin: "2px" }}>
                <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.g}
                  type="checkbox" name="g" /> Property
                Valuation
                <br />
                <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.h}
                  type="checkbox"
                  name="h"
                />{" "}
                Property Characterization
                <br />
                <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.i}
                  type="checkbox" name="i" /> Property
                Division
                <br />
                <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.j}
                  type="checkbox" name="j" /> Reimbursement
                <br />
                <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.k}
                  type="checkbox" name="k" /> Attorney’s
                Fees and Costs
                <br />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        width="100%"
        style={{ pageBreakInside: "auto", marginBottom: "3px" }}
        cellPadding="5"
        align="center"
        cellSpacing="5"
      >
        <tbody>
          <tr>
            <td width="5%" valign="top">
              2.
            </td>
            <td width="95%" valign="top">
              <div style={{ margin: "5px" }}>
                Discovery (getting information about/from the other party)
                that still needs to be completed:
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  margin: "5px",
                }}
              >
                <span>Has discovery been finished?</span>
                <input
                  type="checkbox"
                  name="discovery_finished_yes"
                  style={{ marginLeft: "140px" }}
                />{" "}
                Yes
                <input type="checkbox" name="discovery_finished_no" /> No
                <input type="checkbox" name="discovery_not_required" /> Not
                required/requested in this case.
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <span>If NO, what discovery still needs to be done?</span>
                <input
                  type="checkbox"
                  name="interrogatories"
                  style={{ marginLeft: "38px" }}
                />{" "}
                Interrogatories
                <input
                  type="checkbox"
                  name="depositions"
                  style={{ marginLeft: "7px" }}
                />{" "}
                Depositions
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: " center",
                  marginBottom: " 5px",
                  textWrap: "nowrap"
                }}
              >
                <input type="checkbox" name="document_production" /> Document
                Production
                <input
                  type="checkbox"
                  name="request_for_admissions"
                  style={{ marginLeft: " 20px" }}
                />{" "}
                Request for Admissions
                <input
                  type="checkbox"
                  name="other"
                  style={{ marginLeft: "82px" }}
                />{" "}
                Other:
                <input size={45} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
              </div>

              <div>
                How long do you think it will take both parties to finish
                discovery?
                <input size={25} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
                days
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        width="100%"
        style={{ pageBreakInside: "auto", marginBottom: "5px" }}
        cellPadding="5"
        align="center"
        cellSpacing="5"
      >
        <tbody>
          <tr>
            <td width="5%" valign="top">
              3.
            </td>
            <td
              width="95%"
              valign="top"
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <div>
                Co-parenting (for cases with children) classes have been
                completed by
              </div>
              <div>
                <input type="checkbox" name="completed_by_petitioner" />{" "}
                Petitioner
                <input type="checkbox" name="completed_by_respondent" />{" "}
                Respondent
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        width="100%"
        style={{ pageBreakInside: "auto", marginBottom: "5px" }}
        cellPadding="5"
        align="center"
        cellSpacing="5"
      >
        <tbody>
          <tr>
            <td width="5%" valign="top">
              4.
            </td>
            <td width="95%" valign="top">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "5px",
                }}
              >
                <div>
                  Mandatory Declaration of Disclosure (Dissolution, Legal
                  Separation, and Nullity cases only):
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>Petitioner has served Respondent with</div>
                  <span style={{ marginLeft: "23px" }}>
                    <input type="checkbox" name="preliminary_declaration" />{" "}
                    Preliminary
                  </span>
                  <span>
                    <input type="checkbox" name="final_declaration" /> Final
                  </span>
                  <span>Declarations of Disclosure</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <div>Respondent has served Petitioner with</div>
                  <span style={{ marginLeft: "22px" }}>
                    <input
                      type="checkbox"
                      name="respondent_preliminary_declaration"
                    />{" "}
                    Preliminary
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      name="respondent_final_declaration"
                    />{" "}
                    Final
                  </span>
                  <span>Declarations of Disclosure</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <div>If not served yet, do you need a deadline?</div>
                  <span>
                    <input type="checkbox" name="need_deadline_yes" /> Yes
                  </span>
                  <span>
                    <input type="checkbox" name="need_deadline_no" /> No
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        width="100%"
        style={{ pageBreakInside: "auto", marginBottom: "3px" }}
        cellPadding="5"
        align="center"
        cellSpacing="5"
      >
        <tbody>
          <tr>
            <td width="5%" valign="top">
              5.
            </td>
            <td width="95%" valign="top">
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <span>
                  Have you and the other party and/or your attorneys met to
                  discuss settlement?
                </span>
                <span>
                  <input type="checkbox" name="settlement_discussion_yes" />{" "}
                  Yes
                </span>
                <span>
                  <input type="checkbox" name="settlement_discussion_no" /> No
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        width="100%"
        style={{ pageBreakInside: "auto", marginBottom: "10px" }}
        cellPadding="5"
        align="center"
        cellSpacing="5"
      >
        <tbody>
          <tr>
            <td width="5%" valign="top">
              6.
            </td>
            <td width="95%" valign="top">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  margin: "3px",
                }}
              >
                <span>Are the parties in Mediation?</span>
                <span>
                  <input type="checkbox" name="mediation_yes" /> Yes
                </span>
                <span>
                  <input type="checkbox" name="mediation_no" /> No
                </span>
              </div>
              <div style={{ margin: "3px" }}>
                <label htmlFor="name">If Yes, on what issue?</label>
                <input size={100} style={{ backgroundColor: 'rgb(225,243,243)', border: 'none', marginTop: '3px' }}
                  name={"what issue"}
                  onChange={(e) => handleChange(e)}
                  type="text" id="name" />

              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <span>
                  Are you satisfied with the progress made in Mediation?
                </span>
                <span>
                  <input type="checkbox" name="satisfied_yes" /> Yes
                </span>
                <span>
                  <input type="checkbox" name="satisfied_no" /> No
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        width="100%"
        style={{ pageBreakInside: "auto", marginBottom: "3px" }}
        cellPadding="5"
        align="center"
        cellSpacing="5"
      >
        <tbody>
          <tr>
            <td width="5%" valign="top">
              7.
            </td>
            <td width="95%" valign="top">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  margin: "3px",
                }}
              >
                <span>Are you ready to set for trial?</span>
                <span>
                  <input type="checkbox" name="ready_for_trial_yes" /> Yes
                </span>
                <span>
                  <input type="checkbox" name="ready_for_trial_no" /> No
                </span>
              </div>
              <div style={{ margin: "3px" }}>
                If yes, how long will your trial take (estimate)?{" "}
                <input
                  name={"Hours"}
                  onChange={(e) => handleChange(e)}
                  size={20} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />{" "}
                hours/days. Number of Witnesses{" "}
                <input
                  name={"NumberOfWitnesses"}
                  onChange={(e) => handleChange(e)}
                  size={10} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
              </div>
              <div style={{ margin: "3px" }}>
                Names of Witnesses:{" "}
                <input
                  name={"NamesOfWitnesses"}
                  onChange={(e) => handleChange(e)}
                  size={100} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <hr style={{ width: "100%" }} />

      <div
        className="footer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ listStyle: "none" }}>
          <li>Form Adopted for MANDATORY USE</li>
          <li>Superior Court of Santa Cruz Country</li>
          <li>SUPFL 1034 01/01/20</li>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>STATUS CONFERENCE STATEMENT</h3>
          <label style={{ textAlign: "center", fontWeight: 'bold' }}>
            (Family Law)
          </label>
        </div>
        <div style={{ listStyle: "none" }}>
          <li>Page 1 of 2</li>
          <li>Local Rule of Court 3.1.06</li>
        </div>
      </div>

      <div style={{ pageBreakAfter: "always" }}></div>
      <div style={{ pageBreakBefore: "always" }}></div>


      <table style={{ width: "100%", border: '2px solid black', borderCollapse: 'collapse', marginTop: '10px' }}>
        <tr>
          <td style={{ border: '2px solid black', borderCollapse: 'collapse' }}>
            <div style={{ marginLeft: '1.2rem' }}>
              <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
              <input
                onChange={(e) => handleIsTheDepartmentOfChildSupportServices(e)}
                defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.WhichCounty}
                size={65} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px', marginBottom: "2px" }} type="text" id="name" />
            </div>
            <div style={{ marginLeft: '1.2rem' }}>
              <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
              <input
                onChange={(e) => handleIsTheDepartmentOfChildSupportServices(e)}
                defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.FSBNumber}
                size={60} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px' }} type="text" id="street" />
            </div>
          </td>
          <td style={{ width: "30%", border: '2px solid black', borderCollapse: 'collapse' }}>
            <div style={{ marginLeft: '1.2rem' }}>
              <label htmlFor="street">CASE NUMBER:</label>
              <br />
              <input
                onChange={(e) => handleIsTheDepartmentOfChildSupportServices(e)}
                defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.CourtCaseNumber}
                size={35} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
            </div>
          </td>
        </tr>
      </table>

      <table
        width="100%"
        style={{ pageBreakInside: "auto" }}
        cellPadding="5"
        align="center"
        cellSpacing="5"
      >
        <tbody>
          <tr>
            <td width="5%" valign="top">
              8.
            </td>
            <td width="95%" valign="top">
              <div>
                Is the Department of Child Support Services involved on the
                issue of child support? <input type="checkbox" name="parentage" style={{ marginLeft: "5px" }} />Yes <input type="checkbox" name="parentage" style={{ marginLeft: "5px" }} /> No
              </div>
              <div style={{ margin: "5px" }}>
                If yes: Which County?
                <input
                  onChange={(e) => handleIsTheDepartmentOfChildSupportServices(e)}
                  defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.WhichCounty}
                  size={54} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
                FSB Number?
                <input
                  onChange={(e) => handleIsTheDepartmentOfChildSupportServices(e)}
                  defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.FSBNumber}
                  size={74} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
              </div>
              <div style={{ margin: "5px" }}>
                {" "}
                Court Case Number (if different from this case):
                <input
                  onChange={(e) => handleIsTheDepartmentOfChildSupportServices(e)}
                  defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.CourtCaseNumber}
                  size={74} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        width="100%"
        style={{ pageBreakInside: "auto" }}
        cellPadding="5"
        align="center"
        cellSpacing="5"
      >
        <tbody>
          <tr>
            <td width="5%" valign="top">
              9.
            </td>
            <td width="95%" valign="top">
              <div style={{ margin: "5px" }}>
                As dictated by California Rules of Court 5.83, the Court
                strives to have family law matters resolved in a timely
                manner. What factors do you anticipate will make it difficult
                <br /> to reach a Final Judgment in this case?
              </div>
              {[...Array(10)].map((_, index) => (
                <div key={index}>
                  <input
                    name={"WhatFactorsDoYouAnticipateWillMakeItDifficultToReachAFinalJudgementInThisCase"}
                    onChange={(e) => handleChange(e)}
                    size={135} style={{ backgroundColor: "rgb(225,243,243)", borderBottom: "2px solid black", margin: '2px', textDecoration: "underline" }} type="text" id="name" />
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      <table
        width="100%"
        style={{ pageBreakInside: "auto" }}
        cellPadding="5"
        align="center"
        cellSpacing="5"
      >
        <tbody>
          <tr>
            <td width="5%" valign="top">
              10.
            </td>
            <td width="95%" valign="top">
              <div style={{ margin: "5px" }}>
                If you have had a previous status conference, what has
                occurred or changed in this case?
              </div>
              {[...Array(20)].map((_, index) => (
                <div key={index}>
                  <input
                    name={" IfYouHaveHadAPreviousStatusConferenceWhatHasOccuredOrChangedInThisCase"}
                    onChange={(e) => handleChange(e)}
                    size={135} style={{ backgroundColor: "rgb(225,243,243)", borderBottom: "2px solid black", margin: '2px' }} type="text" id="name" />
                </div>
              ))}
              <div style={{ margin: "10px" }}>Date:
                <input
                  name={"Date"}
                  onChange={(e) => handleChange(e)}
                  size={15} style={{ backgroundColor: "rgb(225,243,243)", borderBottom: "2px solid black", margin: '2px' }} type="text" id="name" /></div>

              <div
                style={{
                  display: "flex",
                  gap: "40%",
                  alignItems: "center",
                }}
              >
                <div>
                  <input
                    name={"PrintOrTypeName"}
                    onChange={(e) => handleChange(e)}
                    size={44} style={{ backgroundColor: "rgb(225,243,243)", borderBottom: "2px solid black", margin: '2px' }} type="text" id="name" />
                  Print or type name
                </div>
                <div>
                  <input
                    name={"Signature"}
                    onChange={(e) => handleChange(e)}
                    size={30} style={{ backgroundColor: "rgb(225,243,243)", borderBottom: "2px solid black", margin: '2px' }} type="text" id="name" />
                  Signature
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <hr style={{ width: "100%" }} />

      <div
        className="footer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ listStyle: "none" }}>
          <li>Form Adopted for MANDATORY USE</li>
          <li>Superior Court of Santa Cruz Country</li>
          <li>SUPFL 1034 01/01/20</li>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>STATUS CONFERENCE STATEMENT</h3>
          <label style={{ textAlign: "center", fontWeight: 'bold' }}>
            (Family Law)
          </label>
        </div>
        <div style={{ listStyle: "none" }}>
          <li>Page 2 of 2</li>
          <li>Local Rule of Court 3.1.06</li>
        </div>
      </div>
    </div >
>>>>>>> aman
    </>
  );

};
