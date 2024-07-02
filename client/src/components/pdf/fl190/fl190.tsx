import React from 'react'

export default function FL190() {
    return (
        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>
                <h3 style={{ display: "flex", marginTop: 0, marginBottom: 0 }}>FL-105/GC-120</h3>
                <table style={{ width: "100%", marginTop: 6, border: "2px solid black", borderCollapse: "collapse", }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "70%", border: "2px solid black", borderCollapse: "collapse", }}>
                                <div style={{}}>
                                    <label>
                                        ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number, and address):
                                    </label>
                                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        cols={88}
                                        rows={3}
                                    />
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: "5px" }}>
                                    <div>
                                        <label htmlFor="telephone">TELEPHONE NO.:</label>
                                        <input
                                            name={"TelephoneNo"}
                                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="number" id="telephone" />
                                    </div>
                                    <div style={{}}>
                                        <label htmlFor="telephone">FAX NO.:</label>
                                        <input
                                            name={"FaxNo"}
                                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="number" id="telephone" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: "5px" }}>
                                    <label htmlFor="fax">E-MAIL ADDRESS:</label>
                                    <input
                                        name={" EmailAddress"}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "82%" }} type="text" id="fax" />
                                </div>
                                <div style={{}}>
                                    <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                                    <input
                                        name={"AttorneyFor"}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "74%" }} id="attorney" />
                                </div>
                            </td>
                            <td style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse", }}
                                rowSpan={3}
                            ></td>
                        </tr>
                        <tr>
                            <td style={{ margin: 0, border: "2px solid black", borderCollapse: "collapse", }}>
                                <div style={{ marginBottom: "5px", marginTop: "5px" }}>
                                    <label htmlFor="name">SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
                                    <input
                                        name={"SUPERIORCOURTOFCALIFORNIA"}
                                        style={{ width: "53.4%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div style={{ marginBottom: "5px" }}>
                                    <label htmlFor="street">STREET ADDRESS:</label>
                                    <input
                                        name={"StreetAddress"}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "81.5%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginBottom: "5px" }}>
                                    <label htmlFor="street">MAILING ADDRESS:</label>
                                    <input
                                        name={"MailingAddress"}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "80.4%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginBottom: "5px" }}>
                                    <label htmlFor="street">CITY AND ZIP CODE:</label>
                                    <input
                                        name={"CityAndZipCode"}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "79%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginBottom: "5px" }}>
                                    <label htmlFor="street">BRANCH NAME:</label>
                                    <input
                                        name={"BranchName"}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "83.4%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse", }}>
                                <div style={{ fontSize: 18, marginLeft: "1.2rem", marginBottom: "5px", marginTop: "5px" }}>
                                    <label htmlFor="name">PETITIONER:</label>
                                    <input
                                        name={"Petitioner"}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "86%" }} type="text" id="name" />
                                </div>
                                <div style={{ fontSize: 18, marginBottom: "5px" }}>
                                    <label htmlFor="street">RESPONDENT:</label>
                                    <input
                                        name={"Respondent"}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "84%" }} type="text" id="street" />
                                </div>
                                <div style={{ fontSize: 18, marginBottom: "5px" }}>
                                    <label htmlFor="street">OTHER PARENT/PARTY:</label>
                                    <input
                                        name={"OtherParentParty"}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "73%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse", }}>
                                <div style={{ textAlign: "center", fontSize: 16 }}>
                                    <b>NOTICE OF ENTRY OF JUDGMENT</b>
                                </div>
                            </td>
                            <td>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input
                                        name={"CaseNumber"}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "5px" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr></tr>
                    </tbody>
                </table>
                <div style={{ marginTop: "5px" }}>
                    <label>You are notified that the following judgment was entered on (date):</label>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "40%" }} type="text" />
                </div>
                <div>
                    <label>1 .</label>
                    <input type="checkbox" style={{ marginRight: 15, marginLeft: 28 }} />
                    <label>Dissolution</label>
                </div>
                <div>
                    <label>2 .</label>
                    <input type="checkbox" style={{ marginRight: 15, marginLeft: 25 }} />
                    <label>Dissolution—status only</label>
                </div>
                <div>
                    <label>3 .</label>
                    <input type="checkbox" style={{ marginRight: 15, marginLeft: 25 }} />
                    <label>Dissolution—reserving jurisdiction over termination of marital status or domestic partnership</label>
                </div>
                <div>
                    <label>4 .</label>
                    <input type="checkbox" style={{ marginRight: 15, marginLeft: 25 }} />
                    <label>Legal separation</label>
                </div>
                <div>
                    <label>5 .</label>
                    <input type="checkbox" style={{ marginRight: 15, marginLeft: 25 }} />
                    <label>Nullity</label>
                </div>
                <div>
                    <label>6 .</label>
                    <input type="checkbox" style={{ marginRight: 15, marginLeft: 25 }} />
                    <label>Parent-child relationship</label>
                </div>
                <div>
                    <label>7 .</label>
                    <input type="checkbox" style={{ marginRight: 15, marginLeft: 25 }} />
                    <label>Judgment on reserved issues</label>
                </div>
                <div>
                    8 .
                    <textarea rows={2.5} style={{ backgroundColor: "rgb(225, 243, 243)", resize: "none", marginLeft: "7%",width:"90%" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <label>Date:</label>
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                    </div>
                    <div>
                        <label>Clerk, by </label>
                        <input style={{ borderBottom: "1px solid black", margin: "0px" }} type="text" />
                        <label>, Deputy</label>
                    </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <p style={{ textAlign: "center", fontSize: "15px" }}><b>—NOTICE TO ATTORNEY OF RECORD OR PARTY WITHOUT ATTORNEY—</b></p>
                    <h4>Under the provisions of Code of Civil Procedure section 1952, if no appeal is filed the court may
                        order the exhibits destroyed or otherwise disposed of after 60 days from the expiration of the appeal time.</h4>
                </div>
                <div style={{ border: "1px solid black", padding: "9px" }}>
                    <p style={{ textAlign: "center", fontSize: "15px" }}><b>STATEMENT IN THIS BOX APPLIES ONLY TO JUDGMENT OF DISSOLUTION
                    </b></p>
                    <div>
                        <label>Effective date of termination of marital or domestic partnership status (specify):</label>
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"40%" }} type="text" />
                    </div>
                    <div>
                        <h3><b>WARNING</b>: Neither party may remarry or enter into a new domestic partnership until the effective date
                            of the termination of marital or domestic partnership status, as shown in this box.</h3>
                    </div>
                </div>
                <div>
                    <p style={{ textAlign: "center", fontSize: "15px" }}><b>CLERK’S CERTIFICATE OF MAILING</b></p>
                    <h4>I certify that I am not a party to this cause and that a true copy of the Notice of Entry of Judgment was mailed first
                        class, postage fully prepaid, in a sealed envelope addressed as shown below, and that the notice was mailed</h4>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <label>at (place):</label>
                            <input style={{ borderBottom: "1px solid black", margin: "0px" }} type="text" />

                        </div>
                        <div>
                            <label>,California, on (date):</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />

                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ marginTop: "8px" }}>
                        <label>Date</label>
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                    </div>
                    <div>
                        <label>Clerk, by </label>
                        <input style={{ borderBottom: "1px solid black", margin: "0px" }} type="text" />
                        <label>,Deputy</label>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                        <label>Name and address of petitioner or petitioner's attorney </label>
                        <textarea rows={3} cols={55} style={{ backgroundColor: "rgb(225, 243, 243)", resize: "none", marginLeft: "20px" }} />
                    </div>
                    <div>
                        <label>Name and address of respondent or respondent's attorney	</label>
                        <textarea rows={3} cols={55} style={{ backgroundColor: "rgb(225, 243, 243)", resize: "none", marginLeft: "20px" }} />
                    </div>
                </div>
                <hr style={{ border: "1px solid black", width: "100%" }} />
                <div style={{ display: "grid", gridTemplateColumns: "30% 40% 30%" }}>
                    <div>
                        <label>Form Adopted for Mandatory Use Judicial Council of California
                            FL-190 [Rev. January 1, 2005]
                        </label>
                    </div>
                    <div>
                        <label><b>NOTICE OF ENTRY OF JUDGMENT</b></label>
                        <label><b>(Family Law—Uniform Parentage—Custody and Support)</b></label>
                    </div>
                    <div>
                        <label>Family Code, §§ 2338, 7636,7637
                            www.courtinfo.ca.gov
                        </label>
                    </div>

                </div>
































            </div >
        </>




    )
}
