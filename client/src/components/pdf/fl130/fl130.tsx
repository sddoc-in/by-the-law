import React from 'react'
import SUPFL130 from "./SU130";
export default function () {
    const [details, setDetails] = React.useState<SUPFL130>(
        {} as SUPFL130
<<<<<<< HEAD
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
=======
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
>>>>>>> aman

    console.log(details)


    return (
<<<<<<< HEAD
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
            <>
            <h3 style={{ display: 'flex', marginBottom: '0' }}>FL-130 </h3>
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
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none" }}                                        cols={80}
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
                                    <div style={{marginBottom:"4px"}}>
                                        <label htmlFor="telephone">E-MAIL ADDRESS (Optional):</label>
                                        <input
                                        name={"EmailAddress"}
                                        onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"67%"}} type="number" id="telephone" />
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
                                FOR COURT USE ONLY
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
                                    APPEARANCE, STIPULATIONS, AND WAIVERS
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
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
=======
        <div style={{ maxWidth: "1100px", margin: "auto",fontSize:12 }}>
            <>
                <h3 style={{ display: 'flex', marginBottom: '0' }}>FL-130 </h3>
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
                            height: "48px",
                            borderRight: "2px solid black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <div style={{ textAlign: "center", fontSize: "14px", letterSpacing: "1px" }}>
                                <b>STIPULATION AND WAIVER OF FINAL DECLARATION OF DISCLOSURE</b>
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




                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 13, verticalAlign: "top" }}
>>>>>>> aman
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                1.
                            </td>
                            <td width="95%" valign="top">
                                <div>
                                    <b>Appearance by respondent </b>
                                    <i>(you must choose one):</i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
<<<<<<< HEAD
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        a.
                    </div>
                    <div style={{ width: "98%", verticalAlign: "top" }}>
                        <input 
                        name={"AppearanceByRespondent"}
                       onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
=======
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 12 }}
                >
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                      
                        a.
                    </div>
                    <div style={{ width: "98%", verticalAlign: "top" }}>
                        <input
                            name={"AppearanceByRespondent"}
                            onChange={(e) => handleChange(e)}
                            type="checkbox" style={{ marginRight: 5, fontSize: 12 }} />
>>>>>>> aman
                        By filing this form, I make a general appearance.
                    </div>
                </div>
                <div
<<<<<<< HEAD
                    style={{ display: "flex", marginBottom: 10, marginLeft: 43, fontSize: 16 }}
=======
                    style={{ display: "flex", marginBottom: 10, marginLeft: 43, fontSize: 12 }}
>>>>>>> aman
                >
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        b.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                        {" "}
<<<<<<< HEAD
                        <input 
                      name={"AppearanceByRespondent"}
                      onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />I have
=======
                        <input
                            name={"AppearanceByRespondent"}
                            onChange={(e) => handleChange(e)}
                            type="checkbox" style={{ marginRight: 5, fontSize: 12 }} />I have
>>>>>>> aman
                        previously made a general appearance.
                    </div>
                </div>
                <div
<<<<<<< HEAD
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
=======
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 12 }}
>>>>>>> aman
                >
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        c.
                    </div>
                    <div>
<<<<<<< HEAD
                        <input 
                        name={"AppearanceByRespondent"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />{" "}
=======
                        <input
                            name={"AppearanceByRespondent"}
                            onChange={(e) => handleChange(e)}
                            type="checkbox" style={{ marginRight: 5, fontSize: 12 }} />{" "}
>>>>>>> aman
                    </div>
                    <div>
                        {" "}
                        I am a member of the military services of the United States of America. I
                        have completed and attached to this form
                        <br />
                        <i>
                            {" "}
                            Declaration and Conditional Waiver of Rights Under the Servicemembers
                            Civil Relief Act of 2003
                        </i>{" "}
                        (form FL-130(A))
                    </div>
                </div>
                <table
                    width="100%"
<<<<<<< HEAD
                    style={{ pageBreakInside: "auto", margin: 0, fontSize: 16, verticalAlign: "top" }}
=======
                    style={{ pageBreakInside: "auto", margin: 0, fontSize: 12, verticalAlign: "top" }}
>>>>>>> aman
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                2.
                            </td>
                            <td width="95%" valign="top">
                                <div>
                                    <b>Agreements, stipulations, and waivers </b>
                                    <i>(choose all that apply):</i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
<<<<<<< HEAD
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
=======
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 12 }}
>>>>>>> aman
                >
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        {/* Checkbox added here */}
                        a.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
<<<<<<< HEAD
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
=======
                        <input
                            name={"AggrementsStipulationsAndWaivers"}
                            onChange={(e) => handleChange(e)}
                            type="checkbox" style={{ marginRight: 5, fontSize: 12 }} />
>>>>>>> aman
                        The parties agree that this cause may be decided as an uncontested matter
                    </div>
                </div>
                <div
<<<<<<< HEAD
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
=======
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 12 }}
>>>>>>> aman
                >
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        b.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                        {" "}
<<<<<<< HEAD
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
=======
                        <input
                            name={"AggrementsStipulationsAndWaivers"}
                            onChange={(e) => handleChange(e)}
                            type="checkbox" style={{ marginRight: 5, fontSize: 12 }} />
>>>>>>> aman
                        The parties waive their rights to notice of trial, a statement of
                        decision, a motion for a new trial, and the right to appeal.
                    </div>
                </div>
                <div style={{ display: "flex", marginBottom: 5, marginLeft: 43 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        c.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                        {" "}
<<<<<<< HEAD
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
=======
                        <input
                            name={"AggrementsStipulationsAndWaivers"}
                            onChange={(e) => handleChange(e)}
                            type="checkbox" style={{ marginRight: 5, fontSize: 12 }} />
>>>>>>> aman
                        This matter may be decided by a commissioner sitting as a temporary judge
                    </div>
                </div>
                <div style={{ display: "flex", marginBottom: 5, marginLeft: 43 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        d.
                    </div>
                    <div>
                        {" "}
<<<<<<< HEAD
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
=======
                        <input
                            name={"AggrementsStipulationsAndWaivers"}
                            onChange={(e) => handleChange(e)}
                            type="checkbox" style={{ marginRight: 5, fontSize: 12 }} />
>>>>>>> aman
                    </div>
                    <div>
                        {" "}
                        The parties have a written agreement that will be submitted to the court,
                        or a stipulation for judgment will be submitted to the{" "}
                        <br style={{ marginLeft: 5 }} /> court and attached to Judgment
                        <i>(Family Law)</i> (form FL-180).
                    </div>
                </div>
                <div
<<<<<<< HEAD
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
=======
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 12 }}
>>>>>>> aman
                >
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        e.
                    </div>
                    <div>
<<<<<<< HEAD
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
=======
                        <input
                            name={"AggrementsStipulationsAndWaivers"}
                            onChange={(e) => handleChange(e)}
                            type="checkbox" style={{ marginRight: 5, fontSize: 12 }} />
>>>>>>> aman
                    </div>
                    <div>
                        {" "}
                        None of these agreements or waivers will apply unless the court approves
                        the stipulation for judgment or incorporates <br />
                        the written settlement agreement into the judgment
                    </div>
                </div>
                <div
<<<<<<< HEAD
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
=======
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 12 }}
>>>>>>> aman
                >
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        f.
                    </div>
                    <div>
<<<<<<< HEAD
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
=======
                        <input
                            name={"AggrementsStipulationsAndWaivers"}
                            onChange={(e) => handleChange(e)}
                            type="checkbox" style={{ marginRight: 5, fontSize: 12 }} />
>>>>>>> aman
                    </div>
                    <div>
                        {" "}
                        This is a parentage case, and both parties have signed an
                        <i>
                            {" "}
                            Advisement and Waiver of Rights Re: Establishment of <br />
                            Parental Relationship
                        </i>{" "}
                        (form FL-235) or its equivalent.
                    </div>
                </div>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                3.
                            </td>
                            <td width="95%" valign="top">
<<<<<<< HEAD
                                <div style={{ marginBottom: 5, marginLeft: 10, fontSize: 16 }}>
                                    <b>Other (specify):</b>
                                </div>
                                <textarea style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "50px",width:"100%",resize:"none"}}/>
=======
                                <div style={{ marginBottom: 5, marginLeft: 10, fontSize: 12 }}>
                                    <b>Other (specify):</b>
                                </div>
                                <textarea style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "50px", width: "100%", resize: "none" }} />
>>>>>>> aman
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ marginLeft: "5%" }}>
<<<<<<< HEAD
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
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="fax" size={50} />
                            <div>(TYPE OR PRINT NAME)</div>{" "}
                        </div>
                        <div>
                        <input 
                        name={"SignatureOfPetitioner"}
                        onChange={(e) => handleChange(e)}
                        type="text" size={40} id="fax" />{" "}
                            <div> (SIGNATURE OF PETITIONER)</div>
                        </div>
                    </div>
                    <div style={{ marginTop: 5, fontSize: 16 }}>
                        Date: <input 
                        name={"Date"}
                        onChange={(e) => handleChange(e)}
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" size={20} id="fax" />
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "space-between", margin: 6 }}
                    >
                        <div>
                            <input 
                            name={"TypeOrPrintName"}
                            onChange={(e) => handleChange(e)}
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="fax" size={50} />
                            <div>(TYPE OR PRINT NAME)</div>{" "}
                        </div>
                        <div>
                        <input
                          name={"SignatureOfRespondent"}
                          onChange={(e) => handleChange(e)}
                        type="text" size={40} id="fax" />{" "}
                            <div>(SIGNATURE OF RESPONDENT) </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 5, fontSize: 16}}>
                        Date:<input
                         name={"Date"}
                         onChange={(e) => handleChange(e)}
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" size={20} id="fax" />
                         {/* <input type="text" size={40} id="fax" />{" "} */}
=======
                    <div style={{ marginTop: 2, fontSize: 12 }}>
                        Date: <input
                            name={"Date"}
                            onChange={(e) => handleChange(e)}
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" size={20} id="fax" />
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "space-between", margin: 3 }}
                    >
                        <div>
                            <input
                                name={"TypeOrPrintName"}
                                onChange={(e) => handleChange(e)}
                                style={{ backgroundColor: "rgb(225, 243, 243)", borderBottom: "1px solid black", margin: "0px" }} type="text" id="fax" size={70} />
                            <div>(TYPE OR PRINT NAME)</div>{" "}
                        </div>
                        <div>
                            <input
                                name={"SignatureOfPetitioner"}
                                onChange={(e) => handleChange(e)}
                                type="text" size={40} id="fax" />{" "}
                            <div> (SIGNATURE OF PETITIONER)</div>
                        </div>
                    </div>
                    <div style={{ marginTop: 5, fontSize: 12 }}>
                        Date: <input
                            name={"Date"}
                            onChange={(e) => handleChange(e)}
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" size={20} id="fax" />
>>>>>>> aman
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "space-between", margin: 6 }}
                    >
                        <div>
                            <input
<<<<<<< HEAD
                            name={"TypeOrPrintName"}
                            onChange={(e) => handleChange(e)}
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",  }} type="text" id="fax" size={50} />
                            <div>(TYPE OR PRINT NAME)</div>{" "}
                        </div>
                        <div>
                        <input 
                        name={"SignatureOfAttorneyForPetitioner"}
                        onChange={(e) => handleChange(e)}
                        type="text" size={40} id="fax" />{" "}
                            <div> (SIGNATURE OF ATTORNEY FOR PETITIONER)</div>
                        </div>
                    </div>
                    <div style={{ fontSize: 16 }}>
                        Date: <input 
                        name={"Date"}
                        onChange={(e) => handleChange(e)}
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", }} type="text" size={20} id="fax" />
=======
                                name={"TypeOrPrintName"}
                                onChange={(e) => handleChange(e)}
                                style={{ backgroundColor: "rgb(225, 243, 243)",  borderBottom: "1px solid black", margin: "0px" }} type="text" id="fax" size={70} />
                            <div>(TYPE OR PRINT NAME)</div>{" "}
                        </div>
                        <div>
                            <input
                                name={"SignatureOfRespondent"}
                                onChange={(e) => handleChange(e)}
                                type="text" size={40} id="fax" />{" "}
                            <div>(SIGNATURE OF RESPONDENT) </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 5, fontSize: 12 }}>
                        Date:<input
                            name={"Date"}
                            onChange={(e) => handleChange(e)}
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" size={20} id="fax" />
                        {/* <input type="text" size={40} id="fax" />{" "} */}
>>>>>>> aman
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "space-between", margin: 6 }}
                    >
                        <div>
<<<<<<< HEAD
                            <input 
                             name={"TypeOrPrintName"}
                             onChange={(e) => handleChange(e)}
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", }} type="text" id="fax" size={50} />
                            <div>(TYPE OR PRINT NAME)</div>{" "}
                        </div>
                        <div>
                        <input 
                        name={"SignatureOfAttorneyForRespondent"}
                        onChange={(e) => handleChange(e)}
                        type="text" size={40} id="fax" />{" "}
=======
                            <input
                                name={"TypeOrPrintName"}
                                onChange={(e) => handleChange(e)}
                                style={{ backgroundColor: "rgb(225, 243, 243)",borderBottom: "1px solid black", }} type="text" id="fax" size={70} />
                            <div>(TYPE OR PRINT NAME)</div>{" "}
                        </div>
                        <div>
                            <input
                                name={"SignatureOfAttorneyForPetitioner"}
                                onChange={(e) => handleChange(e)}
                                type="text" size={40} id="fax" />{" "}
                            <div> (SIGNATURE OF ATTORNEY FOR PETITIONER)</div>
                        </div>
                    </div>
                    <div style={{ fontSize: 12 }}>
                        Date: <input
                            name={"Date"}
                            onChange={(e) => handleChange(e)}
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", }} type="text" size={20} id="fax" />
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "space-between", margin: 6 }}
                    >
                        <div>
                            <input
                                name={"TypeOrPrintName"}
                                onChange={(e) => handleChange(e)}
                                style={{ backgroundColor: "rgb(225, 243, 243)", borderBottom: "1px solid black", }} type="text" id="fax" size={70} />
                            <div>(TYPE OR PRINT NAME)</div>{" "}
                        </div>
                        <div>
                            <input
                                name={"SignatureOfAttorneyForRespondent"}
                                onChange={(e) => handleChange(e)}
                                type="text" size={40} id="fax" />{" "}
>>>>>>> aman
                            <div> (SIGNATURE OF ATTORNEY FOR PETITIONER)</div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
              
=======

>>>>>>> aman
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
<<<<<<< HEAD
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
=======
                    <div style={{ listStyle: "none", fontSize: '10px' }}>
>>>>>>> aman
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-130 [Rev. January 1, 2011]</div>
                    </div>
<<<<<<< HEAD
                    <div style={{ }}>
                      <div style={{ marginLeft:"40px" , fontWeight: "bold" }}>  <h3>APPEARANCE, STIPULATIONS, AND WAIVERS</h3></div>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                            (Family Law—Uniform Parentage—Custody and Support)
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
=======
                    <div style={{}}>
                        <div style={{ marginLeft: "40px", fontWeight: "bold" }}>  <h3>APPEARANCE, STIPULATIONS, AND WAIVERS</h3></div>
                        <div style={{ marginLeft: "5px", fontWeight: "bold" }}>
                            (Family Law—Uniform Parentage—Custody and Support)
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize: '10px' }}>
>>>>>>> aman
                        <div>Government Code, § 70673</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                </div>
            </>

        </div>
    )
}
