import React from 'react'

export default function FL141() {
    return (
        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>


                <h3 className="fl">FL-141</h3>
                {/* <table style={{ width: "100%", marginTop: 10, border: "2px solid black", borderCollapse: "collapse", marginBottom: "5px" }}>
                <tbody>
                    <tr>
                        <td style={{ width: "70%", border: "2px solid black", borderCollapse: "collapse", marginBottom: "5px" }}>
                            <div style={{ marginBottom: 5 }}>
                                <label>
                                    ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number, and
                                    address):
                                </label>
                                <textarea
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none" }} name="" id="" cols={90} rows={6}
                                    defaultValue={""} />
                            </div>
                        </td>
                        <td style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse", marginBottom: "5px" }}
                            rowSpan={3}
                        ></td>
                    </tr>
                    <tr>
                        <td style={{ width: "70%", border: "2px solid black", borderCollapse: "collapse", marginBottom: "5px" }}>
                            <div style={{ display: "grid",gridTemplateColumns:"1fr 1fr" }}>
                                <div>
                                    <label htmlFor="telephone">TELEPHONE NO.:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" ,width:"62%"}} type="number" id="telephone" />
                                </div>
                                <div style={{ marginBottom: 5 }}>
                                    <label htmlFor="telephone">FAX NO.:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"79%" }} type="number" id="telephone" />
                                </div>
                            </div>
                            <div style={{ marginBottom: 5 }}>
                                <label htmlFor="fax">E-MAIL ADDRESS(optional):</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"71%" }} type="text" id="fax" />
                            </div>
                            <div style={{ marginBottom: 5 }}>
                                <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"74.4%" }} type="email" id="attorney" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ margin: 0, border: "2px solid black", borderCollapse: "collapse", marginBottom: "5px" }}>
                            <div style={{ marginBottom: 5 }}>
                                <label htmlFor="name">SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
                                <input
                                    style={{ width: "54.3%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                    type="text"
                                    id="name"
                                />
                            </div>
                            <div style={{ marginBottom: 5 }}>
                                <label htmlFor="street">STREET ADDRESS:</label>
                                <input size={53} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"82%" }} type="text" id="street" />
                            </div>
                            <div style={{ marginBottom: 5 }}>
                                <label htmlFor="street">MAILING ADDRESS:</label>
                                <input size={50.9} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"81%"}} type="text" id="street" />
                            </div>
                            <div style={{ marginBottom: 5 }}>
                                <label htmlFor="street">CITY AND ZIP CODE:</label>
                                <input size={50} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"79.3%" }} type="text" id="street" />
                            </div>
                            <div style={{ marginBottom: 5 }}>
                                <label htmlFor="street">BRANCH NAME:</label>
                                <input size={50} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"84%" }} type="text" id="street" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ border: "2px solid black", borderCollapse: "collapse", marginBottom: "5px" }}>
                            <div style={{ fontSize: 18, marginBottom: 5, marginLeft: "1.2rem" }}>
                                <label htmlFor="name">PETITIONER:</label>
                                <input size={56} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" ,width:"86%"}} type="text" id="name" />
                            </div>
                            <div style={{ fontSize: 18, marginBottom: 5 }}>
                                <label htmlFor="street">RESPONDENT:</label>
                                <input size={55} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"84%" }} type="text" id="street" />
                            </div>
                            <div style={{ fontSize: 18, marginBottom: 5 }}>
                                <label htmlFor="street">OTHER PARENT/PARTY:</label>
                                <input size={55} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"74%" }} type="text" id="street" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ border: "2px solid black", borderCollapse: "collapse", marginBottom: "5px" }}>
                            <div style={{ textAlign: "center", fontSize: 16 }}>
                                <b>
                                    DECLARATION REGARDING SERVICE OF DECLARATION OF
                                    <br />
                                    DISCLOSURE AND INCOME AND EXPENSE DECLARATION
                                </b>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div style={{ marginLeft: 240 }}>
                                    {" "}
                                    <input type="checkbox" style={{ marginRight: 5 }} />
                                    Petitioner's
                                </div>
                                <div style={{ marginLeft: 40 }}>
                                    <input type="checkbox" style={{ marginRight: 5 }} />
                                    Preliminary
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div style={{ marginLeft: 250 }}>
                                    <input type="checkbox" style={{ marginRight: 5 }} />
                                    Respondent's
                                </div>
                                <div style={{ marginLeft: 40 }}>
                                    <input type="checkbox" style={{ marginRight: 5 }} />
                                    Final
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style={{ marginLeft: "1.2rem" }}>
                                <label htmlFor="street">CASE NUMBER:</label>
                                <br />
                                <input size={33} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"100%"  }} type="text" id="street" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table> */}
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse", }}>
                    <tr className='flex  items-start w-full h-full'>
                        <td style={{ width: "70%", margin: 0, padding: 1, borderCollapse: "collapse", height: "100%", borderRight: "2px solid black", borderBottom: "2px solid black" }}
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
                        </td>
                    </tr>
                    <tr className='flex justify-center items-start w-full h-full'>
                        <td style={{ width: "70%", margin: 0, padding: 1, borderCollapse: "collapse", height: "100%", borderRight: "2px solid black" }}
                        >


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
                            <div className='flex justify-end items-center mt-1'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>OTHER PARENT/PARTY:</label>
                                <input size={85} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "74.4%" }} type="text" id="street" />
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
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <p style={{ fontSize: "13px", fontWeight: "bold" }}>
                                         DECLARATION REGARDING SERVICE OF DECLARATION OF
                                    <br />
                                    DISCLOSURE AND INCOME AND EXPENSE DECLARATION</p>
                                </div>
                                <div style={{ display: "flex",justifyContent:"space-around", fontSize: "14px", letterSpacing: "1px" }}>
                                    <div >
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "10px" }}> Petitioner's</span>
                                    </div>
                                    <div >
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "7px" }}>Preliminary</span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent:"space-around", fontSize: "14px", letterSpacing: "1px" }}>
                                    <div >
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "57px"}}>  Respondent's</span>
                                    </div>
                                    <div style={{marginRight:"54px"}}>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "7px" }}>Final</span>
                                    </div>
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




                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                1.
                            </td>
                            <td width="95%" valign="top">
                                <div style={{ display: "flex" }}>
                                    <input type="checkbox" style={{ marginRight: 5 }} />I am the{" "}
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} /> attorney for{" "}
                                    <br />
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} /> petitioner{" "}
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} /> respondent in
                                    this matter.{" "}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top" }}
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
                                    {" "}
                                    <input type="checkbox" style={{ marginRight: 5 }} />
                                    Petitioner's <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    Respondent's <i>Preliminary Declaration of Disclosure</i> (form
                                    FL-140), current* Income and Expense Declaration (form FL-150),
                                    completed Schedule of Assets and Debts (form FL-142) or Community
                                    and Separate Property Declarations (form FL-160) with appropriate
                                    attachments, all tax returns filed by the party in the two years
                                    before service of the preliminary disclosures, and all other
                                    required information under Family Code section 2104 were served on:
                                </div>
                                <div>
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    the other party <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    the other party's attorney by
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    personal service{" "}
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    mail
                                </div>
                                <div style={{ marginTop: "5px" }}>
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    Other (specify)
                                    <input
                                        style={{ width: "80%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div>
                                    on (date):
                                    <input
                                        style={{ width: "20%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                                <div>
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    Petitioner's <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    Respondent's <i>Preliminary Declaration of Disclosure</i> (form
                                    FL-140), current* Income and Expense Declaration (form FL-150),
                                    completed Schedule of Assets and Debts (form FL-142) or Community
                                    and Separate Property Declarations (form FL-160) with appropriate
                                    attachments, and all other required information under Family Code
                                    section 2105 were served on:
                                </div>
                                <div>
                                    {" "}
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    the other party
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    other party's attorney by
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} /> personal
                                    service <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    mail
                                </div>
                                <div>
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    Other (specify)
                                    <input
                                        style={{ width: "80%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div style={{ marginTop: "5px" }}>
                                    on (date):
                                    <input
                                        style={{ width: "20%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top" }}
                    cellPadding={5}
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
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    Service of
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    Petitioner's <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    Respondent's
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    preliminary <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    final declaration of disclosure
                                </div>
                                <div>
                                    current income and expense declaration has been waived as follows:
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                a.
                            </td>
                            <td width="95%" valign="top">
                                <div>
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    The parties agreed to waive final declaration of disclosure
                                    requirements under Family Code section 2105(d.)
                                    <br />
                                    <i> (Form FL-144 may be used for this purpose.)</i> The waiver
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} /> was filed on
                                    (date)
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    is being filed at the same time as this form.
                                    <input
                                        style={{ width: "10%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                b.
                            </td>
                            <td width="95%" valign="top">
                                <div>
                                    {" "}
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    The party has failed to comply with disclosure requirements, and the
                                    court has granted the request for voluntary waiver of
                                    <br />
                                    on (date):receipt under Family Code section 2017 on (date):{" "}
                                </div>
                                <div>
                                    <input
                                        style={{ width: "20%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                c.
                            </td>
                            <td width="95%" valign="top">
                                <div>
                                    <input type="checkbox" style={{ marginRight: 7, marginLeft: "10px" }} />
                                    This is a default proceeding that does not include a stipulated
                                    judgment or settlement agreement. Petitioner waives final
                                    <br />
                                    disclosure requirements under Family Code section 2110.
                                </div>
                                <div>
                                    <input
                                        style={{ width: "20%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <i>*Current</i> is defined as completed within the past three months
                    providing no facts have changed. (Cal. Rules of Court, rule 5.260.)
                </p>
                <p style={{ marginTop: 10 }}>
                    I declare under penalty of perjury under the laws of the State of California
                    that the foregoing is true and correct
                </p>
                <div style={{ margin: 10 }}>
                    Date:
                    <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                </div>
                <div style={{ display: "flex", margin: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                        <br />
                        <span>(TYPE OR PRINT NAME)</span>
                    </div>
                    <div style={{ marginLeft: 100 }}>
                        {" "}
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                        <br />
                        <span>(SIGNATURE OF DECLARANT)</span>
                    </div>
                </div>
                <table width="60%" style={{
                    borderCollapse: "collapse", marginBottom: "5px", border: "2px solid black", fontSize: 18, borderSpacing: 0, marginLeft: 250, borderColor: "#EBF4F5"
                }}
                    cellPadding={8}
                >
                    <thead>
                        <tr>
                            <td width="100px" valign="top"
                                style={{ border: "1px solid  #000000", textAlign: "center", borderCollapse: "collapse", marginBottom: "5px" }} >
                                {/* border: "2px solid black" */}
                                <p>
                                    NOTE: File this document with the court.
                                    <br />
                                    Do not file a copy of the Preliminary or Final Declaration of
                                    Disclosure or
                                    <br />
                                    any attachments to either declaration of disclosure with this
                                    document.
                                </p>
                            </td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <hr style={{ width: "100%" }} />
                <div className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none", fontSize: 12 }}>
                        <li>
                            Form Adopted for Mandatory Use
                            <br />
                            Judicial Council of California
                            <br />
                            FL-141 [Rev. July 1, 2013]
                        </li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h4>
                            DECLARATION REGARDING SERVICE OF DECLARATION OF
                            <br />
                            DISCLOSURE AND INCOME AND EXPENSE DECLARATION
                        </h4>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
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
        </>



    )
}
