import React from 'react'
import SUPFL140 from "./SU140";
export default function FL140() {

  const [details, setDetails] = React.useState<SUPFL140>(
    {} as SUPFL140
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
  ) {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  }

  function handleDeclarationOfDisclosure(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      DeclarationOfDisclosure: {
        ...details.DeclarationOfDisclosure,
<<<<<<< HEAD
        [e.target.name]: e.target.value==="on"?true:false,
=======
        [e.target.name]: e.target.value === "on" ? true : false,
>>>>>>> aman
      },
    });
  }

  // function handleAttachedTheFollowing(
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) {
  //   setDetails({
  //     ...details,
  //     AttachedTheFollowing: {
  //       ...details.AttachedTheFollowing,
  //       [e.target.name]: e.target.value==="on"?true:false,
  //     },
  //   });
  // }
  function handleAttachedTheFollowing(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      AttachedTheFollowing: {
        ...details.AttachedTheFollowing,
<<<<<<< HEAD
        APropertyDeclaration :{
          ...details.AttachedTheFollowing?.APropertyDeclaration ,

        [e.target.name]: e.target.value==="on"?true:false
=======
        APropertyDeclaration: {
          ...details.AttachedTheFollowing?.APropertyDeclaration,

          [e.target.name]: e.target.value === "on" ? true : false
>>>>>>> aman
        }

      },
    });
  }



  console.log(details)
  return (
    <>
<<<<<<< HEAD
    <div style={{ maxWidth: "1100px", margin: "auto" }}> 
      <h3 style={{ display: "flex", justifyContent: "end", marginTop: 0, marginBottom: 0 }}>FL-140</h3>
      <table style={{ width: "100%", marginTop: 10, border: "2px solid black", borderCollapse: "collapse",  }}>
=======
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <h3 style={{ display: "flex", justifyContent: "end", marginTop: 0, marginBottom: 0 }}>FL-140</h3>
        {/* <table style={{ width: "100%", marginTop: 10, border: "2px solid black", borderCollapse: "collapse",  }}>
>>>>>>> aman
        <tbody>
          <tr>
            <td style={{ width: "70%", border: "2px solid black", borderCollapse: "collapse", }}>
              <div style={{  }}>
                <label>
                  ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number, and
                  address):
                </label>
                <textarea
                 name={"AttorneyOrPartyWithoutAttorney"}
                 onChange={(e) => handleChange(e)}
                  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                  id=""
                  cols={90}
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div style={{ display: "flex" ,marginBottom:"5px" }}>
                <div>
                  <label htmlFor="telephone">TELEPHONE NO.:</label>
                  <input 
                  name={"TelephoneNo"}
                  onChange={(e) => handleChange(e)}
                  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="number" id="telephone" />
                </div>
                <div style={{ }}>
                  <label htmlFor="telephone">FAX NO.:</label>
                  <input 
                  name={"FaxNo"}
                  onChange={(e) => handleChange(e)}
                  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="number" id="telephone" />
                </div>
              </div>
              <div style={{marginBottom:"5px"}}>
                <label htmlFor="fax">E-MAIL ADDRESS:</label>
                <input 
                name={" EmailAddress"}
                onChange={(e) => handleChange(e)}
                style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"82%" }} type="text" id="fax" />
              </div>
              <div style={{ }}>
                <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                <input 
                name={"AttorneyFor"}
                onChange={(e) => handleChange(e)}
                style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"75%" }} type="email" id="attorney" />
              </div>
            </td>
            <td style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse",  }}
              rowSpan={3}
            ></td>
          </tr>
          <tr>
            <td style={{ margin: 0, border: "2px solid black", borderCollapse: "collapse",  }}>
              <div style={{marginBottom:"5px",marginTop:"5px" }}>
                <label htmlFor="name">SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
                <input
                 name={"SUPERIORCOURTOFCALIFORNIA"}
                 onChange={(e) => handleChange(e)}
                  style={{ width: "54.4%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px"}}
                  type="text"
                  id="name"
                />
              </div>
              <div style={{ marginBottom:"5px"}}>
                <label htmlFor="street">STREET ADDRESS:</label>
                <input 
                name={"StreetAddress"}
                onChange={(e) => handleChange(e)}
                size={83} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"81.5%" }} type="text" id="street" />
              </div>
              <div style={{marginBottom:"5px" }}>
                <label htmlFor="street">MAILING ADDRESS:</label>
                <input 
                name={"MailingAddress"}
                onChange={(e) => handleChange(e)}
                size={81.9} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"80.4%" }} type="text" id="street" />
              </div>
              <div style={{marginBottom:"5px"}}>
                <label htmlFor="street">CITY AND ZIP CODE:</label>
                <input 
                name={"CityAndZipCode"}
                onChange={(e) => handleChange(e)}
                size={81} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"79%" }} type="text" id="street" />
              </div>
              <div style={{ marginBottom:"5px"}}>
                <label htmlFor="street">BRANCH NAME:</label>
                <input
                name={"BranchName"}
                onChange={(e) => handleChange(e)}
                size={85.9} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"83.4%" }} type="text" id="street" />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ border: "2px solid black", borderCollapse: "collapse",  }}>
              <div style={{ fontSize: 18,  marginLeft: "1.2rem",marginBottom:"5px",marginTop:"5px" }}>
                <label htmlFor="name">PETITIONER:</label>
                <input 
                name={"Petitioner"}
                onChange={(e) => handleChange(e)}
                size={70} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"86%" }} type="text" id="name" />
              </div>
              <div style={{ fontSize: 18,marginBottom:"5px" }}>
                <label htmlFor="street">RESPONDENT:</label>
                <input 
                name={"Respondent"}
                onChange={(e) => handleChange(e)}
                size={70} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" ,width:"84%"}} type="text" id="street" />
              </div>
              <div style={{ fontSize: 18,marginBottom:"5px" }}>
                <label htmlFor="street">OTHER PARENT/PARTY:</label>
                <input 
                name={"OtherParentParty"}
                onChange={(e) => handleChange(e)}
                size={60} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"74%" }} type="text" id="street" />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ border: "2px solid black", borderCollapse: "collapse", }}>
              <div style={{ textAlign: "center", fontSize: 16 }}>
                <b>DECLARATION OF DISCLOSURE</b>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginLeft: 260 }}>
                  {" "}
                  <input 
                  onChange={(e) => handleDeclarationOfDisclosure(e)}
                  defaultChecked={details.DeclarationOfDisclosure?.Petitioners}
                  type="checkbox" style={{ marginRight: 5 }} />
                  Petitioner's
                </div>
                <div style={{ marginLeft: 40 }}>
                  <input
                   onChange={(e) => handleDeclarationOfDisclosure(e)}
                   defaultChecked={details.DeclarationOfDisclosure?.Preliminary}
                  type="checkbox" style={{ marginRight: 5 }} />
                  Preliminary
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginLeft: 260 }}>
                  <input
                  onChange={(e) => handleDeclarationOfDisclosure(e)}
                  defaultChecked={details.DeclarationOfDisclosure?.Respondents}
                  type="checkbox" style={{ marginRight: 5 }} />
                  Respondent's
                </div>
                <div style={{ marginLeft: 20 }}>
                  <input 
                  onChange={(e) => handleDeclarationOfDisclosure(e)}
                  defaultChecked={details.DeclarationOfDisclosure?.Final}
                  type="checkbox" style={{ marginRight: 5 }} />
                  Final
                </div>
              </div>
            </td>
            <td>
              <div style={{ marginLeft: "1.2rem" }}>
                <label htmlFor="street">CASE NUMBER:</label>
                <br />
                <input 
                 name={"CaseNumber"}
                 onChange={(e) => handleChange(e)}
                size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
              </div>
            </td>
          </tr>
          <tr></tr>
        </tbody>
<<<<<<< HEAD
      </table>
      <div style={{  marginTop: 5  , textAlign:'center'}}>
        <b>
          DO NOT FILE DECLARATIONS OF DISCLOSURE OR FINANCIAL ATTACHMENTS WITH THE
          COURT
        </b>
      </div>
      <div style={{  marginLeft: 5  ,fontSize:16}}>
      <i> In a dissolution, legal separation, or nullity action, both a preliminary
        and a final declaration of disclosure must be served on the other
        <br />
        party with certain exceptions. Neither disclosure is filed with the court.
        Instead, a declaration stating that service of disclosure
        <br />
        documents was completed or waived must be filed with the court (see form
        FL-141).</i> 
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div style={{ marginRight: '5px' }}>•</div>
        <div style={{ marginLeft: '15px' ,fontSize:16}}>
        <i> In summary dissolution cases, each spouse or domestic partner must exchange preliminary disclosures as described in Summary <br></br>Dissolution Information (form FL-810). Final disclosures are not required (see Family Code section 2109).</i> 
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div style={{ marginRight: '5px' }}>•</div>
        <div style={{ marginLeft: '15px',fontSize:16 }}>
        <i>  In a default judgment case that is not a stipulated judgment or a judgment based on a marital settlement agreement, only the<br></br> petitioner is required to complete and serve a preliminary declaration of disclosure. A final disclosure is not required of either party<br></br> (see Family Code section 2110).</i>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div style={{ marginRight: '5px' }}>•</div>
        <div style={{ marginLeft: '15px' ,fontSize:16}}>
       <i>   Service of preliminary declarations of disclosure may not be waived by an agreement between the parties.</i>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div style={{ marginRight: '5px' }}>•</div>
        <div style={{ marginLeft: '15px' ,fontSize:16}}>
        <i> Parties who agree to waive final declarations of disclosure must file their written agreement with the court (see form FL-144).</i> 
        </div>
      </div>
    </div>

      
      <div style={{ marginLeft: 10  ,fontSize:16}}><i>
        The petitioner must serve a preliminary declaration of disclosure at the
        same time as the Petition or within 60 days of filing the Petition.<br></br> The
        respondent must serve a preliminary declaration of disclosure at the same
        time as the Response or within 60 days of filing the<br></br> Response. The time
        periods may be extended by written agreement of the parties or by court
        order (see Family Code section 2104(f)).</i>
      </div>
      <div style={{ marginLeft: 10 }}>
        <b>Attached are the following:</b>
      </div>
      <table
        width="100%"
        style={{ pageBreakInside: "auto" }}
        cellPadding={5}
        // valign="top"
        cellSpacing={5}
      >
        <tbody>
          <tr>
            <td width="3%" valign="top">
              1.
            </td>
            <td width="95%" valign="top">
              <div>
                <input 
                onChange={(e) => handleAttachedTheFollowing(e)}
                defaultChecked={details.AttachedTheFollowing?.ACompletedIncomeAndExpenseDeclaration}
                type="checkbox" style={{ marginRight: 5 }} />A completed
                Schedule of Assets and Debts (form FL-142) or{" "}
                <input 
                     onChange={(e) => handleAttachedTheFollowing (e)}
                     defaultChecked={details.AttachedTheFollowing?.APropertyDeclaration.contain}
                type="checkbox" name='contain' style={{ marginRight: 5 }} /> A Property
                Declaration (form FL-160) for (specify):
                <br />
                <input type="checkbox"
                onChange={(e) => handleAttachedTheFollowing (e)}
                defaultChecked={details.AttachedTheFollowing?.APropertyDeclaration.CommunityAndQuasiCommunityProperty}
                name="CommunityAndQuasiCommunityProperty"
                style={{ marginRight: 5, marginLeft:15 }} /> Community and
                Quasi-Community Property{" "}
                <input 
                 onChange={(e) => handleAttachedTheFollowing (e)}
                 defaultChecked={details.AttachedTheFollowing?.APropertyDeclaration.SeparateProperty}
                type="checkbox" style={{ marginRight: 5 }} />
                Separate Property.{" "}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table
        width="100%"
        style={{ pageBreakInside: "auto" }}
        cellPadding={5}
        // valign="top"
        cellSpacing={5}
      >
        <tbody>
          <tr>
            <td width="3%" valign="top">
              2.
            </td>
            <td width="95%" valign="top">
              <div>
                {" "}
                <input 
                 onChange={(e) => handleAttachedTheFollowing (e)}
                 defaultChecked={details.AttachedTheFollowing?.ACompletedIncomeAndExpenseDeclaration}
                type="checkbox" name="ACompletedIncomeAndExpenseDeclaration" style={{ marginRight: 5 }} />A completed
                Income and Expense Declaration (form FL-150).
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table
        width="100%"
        style={{ pageBreakInside: "auto" }}
        cellPadding={5}
        // valign="top"
        cellSpacing={5}
      >
        <tbody>
          <tr>
            <td width="3%" valign="top">
              3.
            </td>
            <td width="95%" valign="top">
              <div>
                <input
                onChange={(e) => handleAttachedTheFollowing (e)}
                value={details.AttachedTheFollowing?.AllTaxReturnsFileds.AllTaxReturnsFiled}
                type="checkbox" style={{ marginRight: 5 }} />
                All tax returns filed by the party in the two years before the date
                that the party served the disclosure documents.{" "}
                <div>
                  <input
                    style={{ width: "100%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                    type="text"
                    id="name"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table
        width="100%"
        style={{ pageBreakInside: "auto" }}
        cellPadding={5}
        // valign="top"
        cellSpacing={5}
      >
        <tbody>
          <tr>
            <td width="3%" valign="top">
              4.
            </td>
            <td width="95%" valign="top">
              <div>
                {" "}
                <input type="checkbox" style={{ marginRight: 5 }} />A statement of
                all material facts and information regarding valuation of all assets
                that are community property or in which the</div>
                <div style={{ marginLeft: 15 }} > community has an interest (not a form).{" "}
                <div>
                  <textarea
                    style={{ width: "100%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none"}}
                    id="name"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table
        width="100%"
        style={{ pageBreakInside: "auto" }}
        cellPadding={5}
        // valign="top"
        cellSpacing={5}
      >
        <tbody>
          <tr>
            <td width="3%" valign="top">
              5.
            </td>
            <td width="95%" valign="top">
              <div>
                {" "}
                <input type="checkbox" style={{ marginRight: 5 }} />A statement of
                all material facts and information regarding obligations for which
                the community is liable (not a form).
                <div>
                  <input
                    style={{ width: "100%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                    type="text"
                    id="name"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table
        width="100%"
        style={{ pageBreakInside: "auto" }}
        cellPadding={5}
        // valign="top"
        cellSpacing={5}
      >
        <tbody>
          <tr>
            <td width="3%" valign="top">
              6.
            </td>
            <td width="95%" valign="top">
              <div>
                <input type="checkbox" style={{ marginRight: 5 }} />
                An accurate and complete written disclosure of any investment
                opportunity, business opportunity, or other income-producing
                </div>
                <div style={{ marginLeft: 15 }} >
                opportunity presented since the date of separation that results from
                any investment, significant business, or other income-
                </div>
                <div style={{ marginLeft: 15 }}  >
                producing opportunity from the date of marriage to the date of
                separation (not a form).{" "}
                <div>
                  <textarea
                    style={{ width: "100%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none" }}
                    id="name"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: 5 }}>
        I declare under penalty of perjury under the laws of the State of California
        that the foregoing is true and correct
      </p>
      <div style={{ margin: 5 }}>
        Date:
        <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
      </div>
      <div style={{ display: "flex", margin: 10 }}>
        <div style={{ marginLeft: 50 }}>
          <input size={50} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
         <br/><span> (TYPE OR PRINT NAME)</span>
        </div>
        <div style={{ marginLeft: 100 }}>
          {" "}
          <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
        <br/> <span> (SIGNATURE OF DECLARANT)</span>
        </div>
      </div>
      <hr style={{ width: "100%" }} />
      <div
        className="footer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ listStyle: "none", fontSize: 12 }}>
          <li>
            Form Adopted for Mandatory Use
            <br />
            Judicial Council of California
            <br />
            FL-140 [Rev. July 1, 2013]
          </li>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>DECLARATION OF DISCLOSURE</h3>
          <label className="font" style={{ textAlign: "center" }}>
            {" "}
            <b> (Family Law)</b>
          </label>
        </div>
        <div style={{ listStyle: "none", fontSize: 12 }}>
          <li>
            Family Code, §§ 2102, 2104,
            <br />
            2105, 2106, 2112
            <br />
            www.courts.ca.gov
          </li>
        </div>
      </div>
      </div>
=======
      </table> */}

        <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse", }}>
          <tr className='flex justify-center items-start w-full h-full'>
            <td style={{ width: "70%", margin: 0, padding: 1, borderCollapse: "collapse", height: "100%", borderRight: "2px solid black" }}
            >
              <div style={{ margin: "0px 2px", marginTop: "-4px" }}>
                <label style={{ fontSize: "10px" }} >
                  ATTORNEY OR PARTY WITHOUT ATTORNEY
                  <span style={{ fontStyle: "italic" }}>(Name, State Bar number, and
                    address)</span>:
                </label>
                <textarea
                  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", width: "-webkit-fill-available", resize: 'none' }}
                  name=""
                  id=""
                  cols={90}
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div className='flex justify-end items-center w-full'
              >
                <div className='flex justify-end items-center' style={{ width: "inherit", marginRight: "-45px" }}>
                  <label style={{ fontSize: "10px" }} htmlFor="telephone">TELEPHONE NO.:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' type="number" id="telephone" />
                </div>
                <div className='flex justify-end items-center' style={{ width: "inherit" }}>
                  <label style={{ fontSize: "10px" }} htmlFor="telephone">FAX NO. <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' type="number" id="telephone" />
                </div>
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label style={{ fontSize: "10px" }} htmlFor="fax">E-MAIL ADDRESS <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: '71%' }} type="text" id="fax" />
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label style={{ fontSize: "10px" }} htmlFor="attorney">ATTORNEY FOR <span style={{ fontStyle: "italic" }}>(Name)</span>:</label>
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
              <div className=' flex justify-end items-center'>
                <label htmlFor="name" style={{ fontSize: "10px", fontWeight: "bold" }}>SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
                <input
                  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: '56%' }}
                  type="text"
                  id="name"
                />
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label htmlFor="street" style={{ fontSize: "10px" }}>STREET ADDRESS:</label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                  type="text" id="street" />
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label htmlFor="street" style={{ fontSize: "10px" }}>MAILING ADDRESS:</label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                  type="text" id="street" />
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label htmlFor="street" style={{ fontSize: "10px" }}>CITY AND ZIP CODE:</label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                  type="text" id="street" />
              </div>
              <div className='mt-1 flex justify-end items-center'>
                <label htmlFor="street" style={{ fontSize: "10px" }}>BRANCH NAME:</label>
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }} type="text" id="street" />
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
                <label htmlFor="name" style={{ fontSize: "10px" }}>PETITIONER:</label>
                <input size={86} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "74.4%" }}
                  type="text" id="name" />
              </div>
              <div className='flex justify-end items-center mt-1'>
                <label htmlFor="street" style={{ fontSize: "10px" }}>RESPONDENT:</label>
                <input size={85} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "83%" }}
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
              {/* <div style={{ textAlign: "center", fontSize: "14px", letterSpacing: "1px" }}>
                <b>STIPULATION AND WAIVER OF FINAL DECLARATION OF DISCLOSURE</b>
              </div> */}

<div style={{ textAlign: "center", fontSize: 16 }}>
                <b style={{fontSize:"10px",fontWeight:"bold"}}>DECLARATION OF DISCLOSURE</b>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginLeft: 260 }}>
                  {" "}
                  <input 
                  onChange={(e) => handleDeclarationOfDisclosure(e)}
                  defaultChecked={details.DeclarationOfDisclosure?.Petitioners}
                  type="checkbox" style={{ marginRight: 5 }} />
                <span style={{fontSize:"10px"}}>  Petitioner's</span>
                </div>
                <div style={{ marginLeft: 40 }}>
                  <input
                   onChange={(e) => handleDeclarationOfDisclosure(e)}
                   defaultChecked={details.DeclarationOfDisclosure?.Preliminary}
                  type="checkbox" style={{ marginRight: 5 }} />
                 <span style={{fontSize:"10px"}}> Preliminary</span>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginLeft: 260 }}>
                  <input
                  onChange={(e) => handleDeclarationOfDisclosure(e)}
                  defaultChecked={details.DeclarationOfDisclosure?.Respondents}
                  type="checkbox" style={{ marginRight: 5 }} />
                 <span style={{fontSize:"10px"}}> Respondent's</span>
                </div>
                <div style={{ marginLeft: 26 }}>
                  <input 
                  onChange={(e) => handleDeclarationOfDisclosure(e)}
                  defaultChecked={details.DeclarationOfDisclosure?.Final}
                  type="checkbox" style={{ marginRight: 5 }} />
                 <span style={{fontSize:"10px"}}> Final</span>
                </div>
              </div>
            </td>
            <td className='px-2 w-[30%]' style={{ borderTop: "2px solid black", }}>
              <div style={{ margin: "0px", }}>
                <label htmlFor="street" style={{ fontSize: "10px" }}>CASE NUMBER:</label>
                <br />
                <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "100%" }} type="text" id="street" />
              </div>
            </td>
          </tr>
        </table>



        <div style={{ marginTop: 5, textAlign: 'center' }}>
          <b>
            DO NOT FILE DECLARATIONS OF DISCLOSURE OR FINANCIAL ATTACHMENTS WITH THE
            COURT
          </b>
        </div>
        <div style={{ marginLeft: 5, fontSize: 16 }}>
          <i> In a dissolution, legal separation, or nullity action, both a preliminary
            and a final declaration of disclosure must be served on the other
            <br />
            party with certain exceptions. Neither disclosure is filed with the court.
            Instead, a declaration stating that service of disclosure
            <br />
            documents was completed or waived must be filed with the court (see form
            FL-141).</i>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <div style={{ marginRight: '5px' }}>•</div>
            <div style={{ marginLeft: '15px', fontSize: 16 }}>
              <i> In summary dissolution cases, each spouse or domestic partner must exchange preliminary disclosures as described in Summary <br></br>Dissolution Information (form FL-810). Final disclosures are not required (see Family Code section 2109).</i>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <div style={{ marginRight: '5px' }}>•</div>
            <div style={{ marginLeft: '15px', fontSize: 16 }}>
              <i>  In a default judgment case that is not a stipulated judgment or a judgment based on a marital settlement agreement, only the<br></br> petitioner is required to complete and serve a preliminary declaration of disclosure. A final disclosure is not required of either party<br></br> (see Family Code section 2110).</i>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <div style={{ marginRight: '5px' }}>•</div>
            <div style={{ marginLeft: '15px', fontSize: 16 }}>
              <i>   Service of preliminary declarations of disclosure may not be waived by an agreement between the parties.</i>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <div style={{ marginRight: '5px' }}>•</div>
            <div style={{ marginLeft: '15px', fontSize: 16 }}>
              <i> Parties who agree to waive final declarations of disclosure must file their written agreement with the court (see form FL-144).</i>
            </div>
          </div>
        </div>


        <div style={{ marginLeft: 10, fontSize: 16 }}><i>
          The petitioner must serve a preliminary declaration of disclosure at the
          same time as the Petition or within 60 days of filing the Petition.<br></br> The
          respondent must serve a preliminary declaration of disclosure at the same
          time as the Response or within 60 days of filing the<br></br> Response. The time
          periods may be extended by written agreement of the parties or by court
          order (see Family Code section 2104(f)).</i>
        </div>
        <div style={{ marginLeft: 10 }}>
          <b>Attached are the following:</b>
        </div>
        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding={5}
          // valign="top"
          cellSpacing={5}
        >
          <tbody>
            <tr>
              <td width="3%" valign="top">
                1.
              </td>
              <td width="95%" valign="top">
                <div>
                  <input
                    onChange={(e) => handleAttachedTheFollowing(e)}
                    defaultChecked={details.AttachedTheFollowing?.ACompletedIncomeAndExpenseDeclaration}
                    type="checkbox" style={{ marginRight: 5 }} />A completed
                  Schedule of Assets and Debts (form FL-142) or{" "}
                  <input
                    onChange={(e) => handleAttachedTheFollowing(e)}
                    defaultChecked={details.AttachedTheFollowing?.APropertyDeclaration.contain}
                    type="checkbox" name='contain' style={{ marginRight: 5 }} /> A Property
                  Declaration (form FL-160) for (specify):
                  <br />
                  <input type="checkbox"
                    onChange={(e) => handleAttachedTheFollowing(e)}
                    defaultChecked={details.AttachedTheFollowing?.APropertyDeclaration.CommunityAndQuasiCommunityProperty}
                    name="CommunityAndQuasiCommunityProperty"
                    style={{ marginRight: 5, marginLeft: 15 }} /> Community and
                  Quasi-Community Property{" "}
                  <input
                    onChange={(e) => handleAttachedTheFollowing(e)}
                    defaultChecked={details.AttachedTheFollowing?.APropertyDeclaration.SeparateProperty}
                    type="checkbox" style={{ marginRight: 5 }} />
                  Separate Property.{" "}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding={5}
          // valign="top"
          cellSpacing={5}
        >
          <tbody>
            <tr>
              <td width="3%" valign="top">
                2.
              </td>
              <td width="95%" valign="top">
                <div>
                  {" "}
                  <input
                    onChange={(e) => handleAttachedTheFollowing(e)}
                    defaultChecked={details.AttachedTheFollowing?.ACompletedIncomeAndExpenseDeclaration}
                    type="checkbox" name="ACompletedIncomeAndExpenseDeclaration" style={{ marginRight: 5 }} />A completed
                  Income and Expense Declaration (form FL-150).
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding={5}
          // valign="top"
          cellSpacing={5}
        >
          <tbody>
            <tr>
              <td width="3%" valign="top">
                3.
              </td>
              <td width="95%" valign="top">
                <div>
                  <input
                    onChange={(e) => handleAttachedTheFollowing(e)}
                    value={details.AttachedTheFollowing?.AllTaxReturnsFileds.AllTaxReturnsFiled}
                    type="checkbox" style={{ marginRight: 5 }} />
                  All tax returns filed by the party in the two years before the date
                  that the party served the disclosure documents.{" "}
                  <div>
                    <input
                      style={{ width: "100%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                      type="text"
                      id="name"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding={5}
          // valign="top"
          cellSpacing={5}
        >
          <tbody>
            <tr>
              <td width="3%" valign="top">
                4.
              </td>
              <td width="95%" valign="top">
                <div>
                  {" "}
                  <input type="checkbox" style={{ marginRight: 5 }} />A statement of
                  all material facts and information regarding valuation of all assets
                  that are community property or in which the</div>
                <div style={{ marginLeft: 15 }} > community has an interest (not a form).{" "}
                  <div>
                    <textarea
                      style={{ width: "100%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none" }}
                      id="name"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding={5}
          // valign="top"
          cellSpacing={5}
        >
          <tbody>
            <tr>
              <td width="3%" valign="top">
                5.
              </td>
              <td width="95%" valign="top">
                <div>
                  {" "}
                  <input type="checkbox" style={{ marginRight: 5 }} />A statement of
                  all material facts and information regarding obligations for which
                  the community is liable (not a form).
                  <div>
                    <input
                      style={{ width: "100%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                      type="text"
                      id="name"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding={5}
          // valign="top"
          cellSpacing={5}
        >
          <tbody>
            <tr>
              <td width="3%" valign="top">
                6.
              </td>
              <td width="95%" valign="top">
                <div>
                  <input type="checkbox" style={{ marginRight: 5 }} />
                  An accurate and complete written disclosure of any investment
                  opportunity, business opportunity, or other income-producing
                </div>
                <div style={{ marginLeft: 15 }} >
                  opportunity presented since the date of separation that results from
                  any investment, significant business, or other income-
                </div>
                <div style={{ marginLeft: 15 }}  >
                  producing opportunity from the date of marriage to the date of
                  separation (not a form).{" "}
                  <div>
                    <textarea
                      style={{ width: "100%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none" }}
                      id="name"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: 5 }}>
          I declare under penalty of perjury under the laws of the State of California
          that the foregoing is true and correct
        </p>
        <div style={{ margin: 5 }}>
          Date:
          <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
        </div>
        <div style={{ display: "flex", margin: 10 }}>
          <div style={{ marginLeft: 50 }}>
            <input size={50} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
            <br /><span> (TYPE OR PRINT NAME)</span>
          </div>
          <div style={{ marginLeft: 100 }}>
            {" "}
            <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
            <br /> <span> (SIGNATURE OF DECLARANT)</span>
          </div>
        </div>
        <hr style={{ width: "100%" }} />
        <div
          className="footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ listStyle: "none", fontSize: 12 }}>
            <li>
              Form Adopted for Mandatory Use
              <br />
              Judicial Council of California
              <br />
              FL-140 [Rev. July 1, 2013]
            </li>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>DECLARATION OF DISCLOSURE</h3>
            <label className="font" style={{ textAlign: "center" }}>
              {" "}
              <b> (Family Law)</b>
            </label>
          </div>
          <div style={{ listStyle: "none", fontSize: 12 }}>
            <li>
              Family Code, §§ 2102, 2104,
              <br />
              2105, 2106, 2112
              <br />
              www.courts.ca.gov
            </li>
          </div>
        </div>
      </div>
>>>>>>> aman
    </>



  )
}
