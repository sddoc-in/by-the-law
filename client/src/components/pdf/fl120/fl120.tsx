import React from 'react'

<<<<<<< HEAD
export default function FL120() {
    return (
        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>
                <h3 style={{ display: "flex", marginTop: 0, marginBottom: 0 }}>FL-105/GC-120</h3>
                <div style={{ display: "grid", gridTemplateColumns: "75% 25%" }}>
                    <div>
                        <div style={{ border: "2px solid black" }}>
                            <label>PARTY WITHOUT ATTORNEY OR ATTORNEY</label>
                            <label>STATE BAR NUMBER</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            <div>
                                <label>NAME</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            </div>
                            <div>
                                <label>FIRM NAME:</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            </div>
                            <div>
                                <label>STREET ADDRESS:</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "50% 20% 30%" }}>
                                <div>
                                    <label>CITY</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                                </div>
                                <div>
                                    <label>STATE:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                                </div>
                                <div>
                                    <label>ZIP CODE:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                                <div>
                                    <label>TELEPHONE NO.:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                                </div>
                                <div>
                                    <label>FAX NO:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                                </div>
                            </div>
                            <div>
                                <label>E-MAIL ADDRESS: </label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            </div>
                            <div>
                                <label>ATTORNEY FOR (name): </label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            </div>
                        </div>
                        <div style={{ border: "1px solid black" }}>
                            <h3 style={{ fontWeight: "bold" }}>SUPERIOR COURT OF CALIFORNIA, COUNTY OF</h3>
                            <div>
                                <label>STREET ADDRESS: </label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            </div>
                            <div>
                                <label>MAILING ADDRESS</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            </div>
                            <div>
                                <label>CITY AND ZIP CODE: </label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            </div>
                            <div>
                                <label>BRANCH NAME:</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            </div>
                        </div>
                        <div style={{ border: "1px solid black" }}>
                            <div>
                                <label>PETITIONER:</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            </div>
                            <div>
                                <label>RESPONDENT:</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid black" }}>
                            <div>
                                <label>RESPONSE</label>
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                AND REQUEST FOR
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                AMENDED
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Dissolution (Divorce) of:
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Marriage
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Domestic Partnership
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Legal Separation of:
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Marriage
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Domestic Partnership
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Nullity of:
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Marriage
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Domestic Partnership
                            </div>
                        </div>
                    </div>



                    <div style={{ border: "1px solid black" }}>
                        <div>
                            <label>FOR COURT USE ONLY</label>
                        </div>
                        <div>
                            <label>CASE NUMBER:</label>
                        </div>
                    </div>

                </div>
=======
export default function FL105() {
    return (
        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>
                <h3 style={{ float: "right", marginTop: 0, marginBottom: 0 }}><b>FL-120</b></h3>
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
                                <div className='mt-1 flex justify-end items-center'>
                                    <label style={{ fontSize: "10px" }} htmlFor="fax">NAME <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: '71%' }} type="text" id="fax" />
                                </div>
                                <div className='mt-1 flex justify-end items-center'>
                                    <label style={{ fontSize: "10px" }} htmlFor="fax">FIRM NAME <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: '71%' }} type="text" id="fax" />
                                </div>
                                <div className='mt-1 flex justify-end items-center'>
                                    <label style={{ fontSize: "10px" }} htmlFor="fax">STREET ADDRESS <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: '71%' }} type="text" id="fax" />
                                </div>
                            </div>

                            <div className='flex justify-end items-center w-full' >
                                <div className='flex justify-end items-center' style={{ width: "inherit", marginRight: "-45px" }}>
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone">CITY:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "2px 2px", }} className='w-[60%]' type="number" id="telephone" />
                                </div>
                                <div className='flex justify-end items-center' style={{ width: "inherit" }}>
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone">STATE. <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "2px 1px", }} className='w-[42%]' type="number" id="telephone" />
                                </div>
                                <div className='flex justify-end items-center' style={{ width: "inherit" }}>
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone">ZIP CODE. <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "2px 1px", }} className='w-[30%]' type="number" id="telephone" />
                                </div>
                            </div>

                            <div className='flex justify-end items-center w-full' >
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
                                <label htmlFor="name" style={{ fontSize: "10px" }}>PLAINTIFF/PETITIONER:</label>
                                <input size={86} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "74.4%" }}
                                    type="text" id="name" />
                            </div>

                            <div className='flex justify-end items-center mt-1'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>RESPONDENT:</label>
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
                            <div className=' w-full' >
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", letterSpacing: "1px" }}>
                                    <div>

                                        <span style={{ fontStyle: "10px", fontWeight: "bold", marginLeft: "10px" }}>(PETITION FOR)</span>
                                    </div>
                                    <div style={{ marginRight: "12px" }}>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "10px", fontWeight: "bold" }}>AND REQUEST FOR</span>
                                    </div>
                                    <div style={{ marginRight: "12px" }}>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "10px", fontWeight: "bold" }}>(AMENDED)</span>
                                    </div>

                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", letterSpacing: "1px" }}>
                                    <div style={{ marginLeft: "10px" }}>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "10px", fontWeight: "bold" }}> Dissolution (Divorce) of</span>
                                    </div>
                                    <div style={{ marginRight: "31px" }}>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "7px", }}>Marriage</span>
                                    </div>
                                    <div style={{ marginRight: "12px" }}>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "7px" }}>Domestic partnership</span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", letterSpacing: "1px" }}>
                                    <div style={{ marginLeft: "10px" }}>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "10px", fontWeight: "bold" }}>Legal Separation of:</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "7px", }}>Marriage</span>
                                    </div>
                                    <div style={{ marginRight: "12px" }}>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "7px" }}>Domestic partnership</span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", letterSpacing: "1px" }}>
                                    <div style={{ marginLeft: "10px" }}>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "10px", fontWeight: "bold" }}> Nullity of</span>
                                    </div>
                                    <div style={{ marginLeft: "11%" }}>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "7px", }}>Marriage</span>
                                    </div>
                                    <div style={{ marginRight: "12px" }}>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <span style={{ fontStyle: "7px" }}>Domestic partnership</span>
                                    </div>
                                </div>
                            </div>

                        </td>
                        <td className='px-2 w-[30%]' style={{ borderTop: "2px solid black", }}>
                            <div style={{ margin: "0px", }}>
                                <label htmlFor="street" style={{ fontSize: "15px" }}>CASE NUMBER:</label>
                                <br />
                                <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "100%" }} type="text" id="street" />
                            </div>
                        </td>
                    </tr>
                </table>
>>>>>>> aman

                <div>
                    <label> 1 <b>LEGAL RELATIONSHIP </b>(check all that apply):</label>
                    <div>
<<<<<<< HEAD
                        <b style={{ marginRight: 8 }}>a .</b>
=======
                        <b style={{ marginRight: 8, marginLeft: "5%" }}>a .</b>
>>>>>>> aman
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        We are married.
                    </div>
                    <div>
<<<<<<< HEAD
                        <b style={{ marginRight: 8 }}>b .</b>
=======
                        <b style={{ marginRight: 8, marginLeft: "5%" }}>b .</b>
>>>>>>> aman
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        We are domestic partners and our domestic partnership was established in California.
                    </div>
                    <div>
<<<<<<< HEAD
                        <b style={{ marginRight: 8 }}>c .</b>
=======
                        <b style={{ marginRight: 8, marginLeft: "5%" }}>c .</b>
>>>>>>> aman
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        We are domestic partners and our domestic partnership was NOT established in California.
                    </div>
                </div>

                <div>
                    <label> 2 <b>RESIDENCE REQUIREMENTS </b>(check all that apply):</label>
<<<<<<< HEAD
                    <div style={{ display: "flex" }}>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            a.	Petitioner
                        </div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Respondent  has been a resident of this state for at least six months and of this county for at least
                            three months immediately preceding the filing of this Petition. (For a divorce, unless you are in the legal relationship described in 1b.,
                            at least one of you must comply with this requirement.)

                        </div>

                    </div>
                    <div>
                        <b style={{ marginRight: 8 }}>b .</b>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        Our domestic partnership was established in California. Neither of us has to be a resident or have a domicile in California to dissolve our partnership here                    </div>
                    <div>
                        <b style={{ marginRight: 8 }}>c .</b>
=======
                    <div style={{ marginLeft: "5%" }}>
                        <b style={{ marginRight: "5px" }}> a.</b>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        Petitioner
                        <input type="checkbox" style={{ marginRight: 5, marginLeft: "10px" }} />
                        Respondent  has been a resident of this state for at least six months and of this county for at least
                        three months immediately preceding the filing of this Petition. (For a divorce, unless you are in the legal relationship described in 1b.,
                        at least one of you must comply with this requirement.)
                    </div>
                    <div>
                        <b style={{ marginLeft: "5%", marginRight: "5px" }}>b .</b>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        Our domestic partnership was established in California. Neither of us has to be a resident or have a domicile in California to dissolve our partnership here                    </div>
                    <div>
                        <b style={{ marginLeft: "5%", marginRight: "5px" }}>c .</b>
>>>>>>> aman
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        We are the same sex, were married in California, but currently live in a jurisdiction that does not recognize, and will not dissolve, our marriage. This Petition is filed in the county where we married.
                        Petitioner lives in (specify):
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                        Respondent lives in (specify):
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div>
<<<<<<< HEAD
                        <label>3 . <b>	STATISTICAL FACTS</b></label>
                        <div>
                            <b style={{ marginRight: 8 }}>a .</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            (1) Date of marriage (specify):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            <b style={{ marginRight: 8 }}>(2)</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Date of separation (specify):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            <b style={{ marginRight: 8 }}>(3)</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Time from date of marriage to date of separation (specify):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            <label>Year</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            <label>Months</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />

                        </div>
                        <div>
                            <b style={{ marginRight: 8 }}>B .</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            (1) Registration date of domestic partnership with the California Secretary of State or other state equivalent (specify below):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            <b style={{ marginRight: 8 }}>(2)</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Date of separation (specify):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            <b style={{ marginRight: 8 }}>(3)</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Time from date of registration of domestic partnership to date of separation (specify):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            <label>Year</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            <label>Months</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
=======
                        <label> <b>3 .	STATISTICAL FACTS</b></label>
                        <div style={{ marginLeft: "5%" }}>
                            <b style={{ marginRight: 8 }}>a .</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            (1) Date of marriage (specify):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px"  }} type="text" id="street" />
                            <b style={{ marginRight: 8, marginLeft: 4 }}>(2)</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Date of separation (specify):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" id="street" />
                            <b style={{ marginRight: 8, marginLeft: 4 }}>(3)</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Time from date of marriage to date of separation (specify):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px"  }} type="text" id="street" />
                            <label style={{ marginLeft: 4 }}>Year</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px"  }} type="text" id="street" />
                            <label style={{ marginLeft: 4 }}>Months</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px"  }} type="text" id="street" />

                        </div>
                        <div style={{ marginLeft: "5%" }}>
                            <b style={{ marginRight: 8 }}>B .</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            (1) Registration date of domestic partnership with the California Secretary of State or other state equivalent (specify below):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px"  }} type="text" id="street" />
                            <b style={{ marginRight: 8, marginLeft: 4 }}>(2)</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Date of separation (specify):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px"  }} type="text" id="street" />
                            <b style={{ marginRight: 8, marginLeft: 4 }}>(3)</b>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Time from date of registration of domestic partnership to date of separation (specify):
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px"  }} type="text" id="street" />
                            <label style={{ marginLeft: 4 }}>Year</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px"  }} type="text" id="street" />
                            <label style={{ marginLeft: 4 }}>Months</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px"  }} type="text" id="street" />
>>>>>>> aman


                        </div>
                        <div>
                            <b>(4).	MINOR CHILDREN</b>
<<<<<<< HEAD
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>(A) .There are no minor children.</label>
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>(B) .The minor children are:.</label>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                                <div>
                                    <div>Child's name</div>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
=======
                            <div style={{ marginLeft: "5%" }}>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>(A) .There are no minor children.</label>
                            </div>
                            <div style={{ marginLeft: "5%" }}>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>(B) .The minor children are:.</label>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "60% 20% 20%" }}>
                                <div>
                                    <div>Child's name</div>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "97%" }} type="text" /><br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "97%" }} type="text" /><br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "97%" }} type="text" /><br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "97%" }} type="text" /><br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "97%" }} type="text" /><br />
>>>>>>> aman

                                </div>

                                <div>
                                    <div>Birthdate</div>
<<<<<<< HEAD
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
=======
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
>>>>>>> aman

                                </div>
                                <div>
                                    <div>Age</div>
<<<<<<< HEAD
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
=======
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
>>>>>>> aman

                                </div>

                            </div>
                            <div>(1)
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>continued on Attachment 4b.</label>
                                (2)
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>a child who is not yet born.</label>
                            </div>
                            <div>
                                <label>C .</label>
                                <label>If any children were born before the marriage or domestic partnership, the court has
                                    the authority to determine those children to be children of the marriage or domestic
                                    partnership.</label>
                            </div>
                            <div>
                                <label>D .</label>
                                <label>d.	If there are minor children of Petitioner and Respondent, a completed Declaration Under Uniform Child Custody Jurisdiction and Enforcement Act (UCCJEA)
                                    (form <a style={{ color: "blue" }}>FL-105</a> ) must be attached.</label>
                            </div>
                            <div>
                                <label>E .</label>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>e.	Petitioner and Respondent signed a voluntary declaration of parentage or paternity.
                                    (Attach a copy if available.).</label>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "70% 30%", border: "1px solid black" }}>
<<<<<<< HEAD
                                <div style={{ border: "1px solid black" }}>
                                    <div>
                                        <label>PETITIONER: </label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    </div>
                                    <div>
                                        <label>RESPONDENT:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                    </div>
                                </div>
                                <div style={{ border: "1px solid black" }}>
                                    <label>CASE NUMBER</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
=======
                                <div style={{ marginTop: "3px" }}>
                                    <div >
                                        <label>PETITIONER: </label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "82%" }} type="text" id="street" />
                                    </div>
                                    <div>
                                        <label>RESPONDENT:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "80.5%" }} type="text" id="street" />
                                    </div>
                                </div>
                                <div style={{ margin: "0px", }}>
                                    <label htmlFor="street" style={{ fontSize: "15px" }}>CASE NUMBER:</label>
                                    <br />
                                    <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "100%" }} type="text" id="street" />
>>>>>>> aman
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <b>Respondent requests that the court make the following orders:</b>
                    <div>5 . <b>LEGAL GROUNDS </b><label>(Family Code sections 2200–2210; 2310–2312)</label>
<<<<<<< HEAD
                        <div>
                            a . <input type="checkbox" style={{ marginRight: 5 }} />

                            <label>  <b>Respondent contends </b>that the parties never legally married or registered a domestic partnership.</label>
                        </div>
                        <div>
                            b . <input type="checkbox" style={{ marginRight: 5 }} />

                            <label>  <b>Respondent contends </b>that the parties never legally married or registered a domestic partnership.</label>
                        </div>
                        <div>
                            c.
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            <b>Respondent requests</b>
                            <div>
                                1  <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>Divorce</label>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>Legal separation of the marriage or domestic partnership based on</label>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>a
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <label>irreconcilable differences.</label>
                                    </div>
                                    <div>
                                        b
                                        <input type="checkbox" style={{ marginRight: 5 }} />
=======
                        <div style={{ marginLeft: "2%" }}>
                            <label> a . </label>
                            <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />

                            <label>  <b>Respondent contends </b>that the parties never legally married or registered a domestic partnership.</label>
                        </div>
                        <div style={{ marginLeft: "2%" }}>
                            <label> b .</label>
                            <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />

                            <label>  <b>Respondent contends </b>that the parties never legally married or registered a domestic partnership.</label>
                        </div>
                        <div style={{ marginLeft: "2%" }}>
                            <label>c.</label>
                            <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
                            <b>Respondent requests</b>
                            <div style={{ marginLeft: "2%" }}>
                                1  <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
                                <label>Divorce</label>
                                <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
                                <label>Legal separation of the marriage or domestic partnership based on</label>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <label>a</label>
                                        <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
                                        <label>irreconcilable differences.</label>
                                    </div>
                                    <div>
                                        <label>  b</label>
                                        <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
>>>>>>> aman

                                        <label>permanent legal incapacity to make decisions.</label>
                                    </div>
                                </div>
                            </div>
<<<<<<< HEAD
                            <div>
                                2  <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>Nullity of void marriage or domestic partnership based on</label>
                                <div style={{ display: "flex" }}>
                                    <div>a
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                        <label>incest.	</label>
                                    </div>
                                    <div>
                                        b
                                        <input type="checkbox" style={{ marginRight: 5 }} />
=======
                            <div style={{ marginLeft: "2%" }}>
                                <label>  2  </label>
                                <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
                                <label>Nullity of void marriage or domestic partnership based on</label>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <label>a</label>
                                        <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
                                        <label>incest.	</label>
                                    </div>
                                    <div>
                                        <label> b</label>
                                        <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
>>>>>>> aman

                                        <label>bigamy.</label>
                                    </div>
                                </div>
<<<<<<< HEAD
                                <div>
                                    (3)
                                    <input type="checkbox" style={{ marginRight: 5 }} />
=======
                                <div style={{ marginLeft: "2%" }}>
                                    (3)
                                    <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
>>>>>>> aman
                                    <label>Nullity of voidable marriage or domestic partnership based on</label>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                                        <div>
                                            (a)
<<<<<<< HEAD
                                            <input type="checkbox" style={{ marginRight: 5 }} />
=======
                                            <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
>>>>>>> aman
                                            <label>respondent’s age at time of registration of domestic partnership or marriage.</label>
                                        </div>

                                        <div>
                                            (d)
<<<<<<< HEAD
                                            <input type="checkbox" style={{ marginRight: 5 }} />
=======
                                            <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
>>>>>>> aman
                                            <label>fraud. </label>
                                        </div>
                                        <div>
                                            (b)
<<<<<<< HEAD
                                            <input type="checkbox" style={{ marginRight: 5 }} />
=======
                                            <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
>>>>>>> aman
                                            <label>prior existing marriage or domestic partnership. </label>
                                        </div>
                                        <div>
                                            (e)
<<<<<<< HEAD
                                            <input type="checkbox" style={{ marginRight: 5 }} />
=======
                                            <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
>>>>>>> aman
                                            <label>	force. </label>
                                        </div>
                                        <div>
                                            (c)
<<<<<<< HEAD
                                            <input type="checkbox" style={{ marginRight: 5 }} />
=======
                                            <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
>>>>>>> aman
                                            <label>	unsound mind. </label>
                                        </div>
                                        <div>
                                            (f)
<<<<<<< HEAD
                                            <input type="checkbox" style={{ marginRight: 5 }} />
=======
                                            <input type="checkbox" style={{ marginRight: 5, marginLeft: 10 }} />
>>>>>>> aman
                                            <label>physical incapacity. </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label>6</label>
                    <div style={{ display: "grid", gridTemplateColumns: "40% 15% 15% 15% 15%" }}>
<<<<<<< HEAD
                        <div>
                            <b>CHILD CUSTODY AND VISITATION (PARENTING TIME)</b>
                            <h4>a.	Legal custody of children to ....................................................</h4>
                            <h4>b. Physical custody of children to ..................................................</h4>
                            <h4> c.	Child visitation (parenting time) be granted to .............................</h4>

                        </div>

                        <div>
                            <b>Petitioner</b><br />
                            <input type="checkbox" /> <br />
                            <input type="checkbox" /><br />
                            <input type="checkbox" /><br />
=======
                        <div style={{ marginLeft: "2%" }}>
                            <b>CHILD CUSTODY AND VISITATION (PARENTING TIME)</b>
                            <h4>a.	Legal custody of children to ....................................................</h4>
                            <h4>b. Physical custody of children to ..................................................</h4>
                            <h4> c.	Child visitation (parenting time) be granted to ...........</h4>

                        </div>

                        <div style={{ marginLeft: "20px" }}>
                            <b>Petitioner</b><br />
                            <input type="checkbox" style={{ marginLeft: "23px" }} /> <br />
                            <input type="checkbox" style={{ marginLeft: "23px" }} /><br />
                            <input type="checkbox" style={{ marginLeft: "23px" }} /><br />
>>>>>>> aman

                        </div>

                        <div>
                            <b>Respondent</b><br />
<<<<<<< HEAD
                            <input type="checkbox" /><br />
                            <input type="checkbox" /><br />
                            <input type="checkbox" /><br />
=======
                            <input type="checkbox" style={{ marginLeft: "23px" }} /><br />
                            <input type="checkbox" style={{ marginLeft: "23px" }} /><br />
                            <input type="checkbox" style={{ marginLeft: "23px" }} /><br />
>>>>>>> aman
                        </div>

                        <div>
                            <b>Joint</b><br />
<<<<<<< HEAD
                            <input type="checkbox" /><br />
                            <input type="checkbox" /><br />
=======
                            <input type="checkbox" style={{ marginLeft: "23px" }} /><br />
                            <input type="checkbox" style={{ marginLeft: "23px" }} /><br />
>>>>>>> aman

                        </div>
                        <div>
                            <b>Other</b><br />
<<<<<<< HEAD
                            <input type="checkbox" /><br />
                            <input type="checkbox" /><br />
                            <input type="checkbox" /><br />
=======
                            <input type="checkbox" style={{ marginLeft: "18px" }} /><br />
                            <input type="checkbox" style={{ marginLeft: "18px" }} /><br />
                            <input type="checkbox" style={{ marginLeft: "18px" }} /><br />
>>>>>>> aman
                        </div>

                    </div>
                </div>
<<<<<<< HEAD
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
=======
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", marginLeft: "40px", marginTop: "5px" }}>
>>>>>>> aman
                    <div>
                        <label>As requested in</label>
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            <label>form FL-311</label>
                        </div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            <label>form FL-311(D)</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            <label>form FL-312</label>
                        </div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            <label>form FL-341(E)</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            <label>form FL-341(C) </label>
                        </div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            <label>Attachment 6c(1)</label>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <div>
                    <label>7 <b>CHILD SUPPORT</b></label>
                    <div>
=======
                <div style={{ marginTop: "8px", marginBottom: "8px" }}>
                    <label>7 <b>CHILD SUPPORT</b></label>
                    <div style={{ marginLeft: "2%" }}>
>>>>>>> aman
                        <label>a .</label>
                        <label>If there are minor children born to or adopted by Petitioner and Respondent before or during this marriage or domestic partnership,
                            the court will make orders for the support of the children upon request and submission of financial forms by the requesting party.</label>
                    </div>
<<<<<<< HEAD
                    <div>
                        <label>b .</label>
                        <label>An earnings assignment may be issued without further notice.</label>
                    </div>
                    <div>
                        <label>c .</label>
                        <label>Any party required to pay support must pay interest on overdue amounts at the "legal" rate, which is currently 10 percent.</label>
                    </div>
                    <div>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <textarea
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none" }}
=======
                    <div style={{ marginLeft: "2%" }}>
                        <label>b .</label>
                        <label>An earnings assignment may be issued without further notice.</label>
                    </div>
                    <div style={{ marginLeft: "2%" }}>
                        <label>c .</label>
                        <label>Any party required to pay support must pay interest on overdue amounts at the "legal" rate, which is currently 10 percent.</label>
                    </div>
                    <div style={{ marginLeft: "2%" }}>
                        <label><input type="checkbox" style={{ marginRight: 5 }} /></label>
                        <textarea
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none", width: "94%" }}
>>>>>>> aman
                            placeholder='Other (specify):'
                            cols={70}
                            rows={4} />
                    </div>
                </div>
                <div>
                    <label>8. <b>SPOUSAL OR DOMESTIC PARTNER SUPPORT</b> </label>
<<<<<<< HEAD
                    <div>
                        <label>a .	Spousal or domestic partner support payable to</label>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>Petitioner</label>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>Respondent</label>
                    </div>
                    <div>
                        <label>b .	Terminate (end) the court's ability to award support to</label>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>Petitioner</label>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>Respondent</label>
                    </div>
                    <div>
                        <label>c .	Reserve for future determination the issue of support payable to</label>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>Petitioner</label>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>Respondent</label>
                    </div>
                    <div>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <textarea
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none" }}
                            placeholder='Other (specify):'
                            cols={70}
                            rows={4} />
=======
                    <div style={{ marginLeft: "2%" }}>
                        <label>a .	Spousal or domestic partner support payable to</label>
                        <input type="checkbox" style={{ marginRight: 15, marginLeft: 44 }} />
                        <label>Petitioner</label>
                        <input type="checkbox" style={{ marginRight: 15, marginLeft: 44 }} />
                        <label>Respondent</label>
                    </div>
                    <div style={{ marginLeft: "2%" }}>
                        <label>b .	Terminate (end) the court's ability to award support to</label>
                        <input type="checkbox" style={{ marginRight: 15, marginLeft: 44 }} />
                        <label>Petitioner</label>
                        <input type="checkbox" style={{ marginRight: 15, marginLeft: 44 }} />
                        <label>Respondent</label>
                    </div>
                    <div style={{ marginLeft: "2%" }}>
                        <label>c .	Reserve for future determination the issue of support payable to</label>
                        <input type="checkbox" style={{ marginRight: 15, marginLeft: 44 }} />
                        <label>Petitioner</label>
                        <input type="checkbox" style={{ marginRight: 15, marginLeft: 44 }} />
                        <label>Respondent</label>
                    </div>
                    <div style={{ marginLeft: "2%" }}>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <textarea
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none", width: "95%" }}
                            placeholder='Other (specify):'
                            cols={70}
                            rows={3} />
>>>>>>> aman
                    </div>
                </div>
                <div>
                    <label>9 .<b>SEPARATE PROPERTY</b></label>
<<<<<<< HEAD
                    <div>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>a.	There are no such assets or debts that I know of to be confirmed by the court.</label>
                    </div>
                    <div>
=======
                    <div style={{ marginLeft: "2%" }}>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>a.	There are no such assets or debts that I know of to be confirmed by the court.</label>
                    </div>
                    <div style={{ marginLeft: "2%" }}>
>>>>>>> aman
                        <label>b.	Confirm as separate property the assets and debts in</label>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>Property Declaration (form FL-160).</label>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>Attachment 9b.</label>
                    </div>
                </div>
<<<<<<< HEAD
                <div style={{ display: "grid", gridTemplateColumns: "70% 30%" }}>
                    <div>
                        <label> the following list</label>
                        <label>Item</label><br />
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" /><br />
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" /><br />
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" /><br />
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" /><br />
                    </div>
                    <div>
                        <label>Confirm to</label><br />
=======
                <div style={{ display: "grid", gridTemplateColumns: "80% 20%" }}>
                    <div>
                        <input type="checkbox" style={{ marginLeft: "4% " }} />
                        <label style={{ marginLeft: "4%" }}> the following list</label>
                        <label style={{ marginLeft: "35%" }}>Item</label><br />
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "99%" }} type="text" /><br />
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "99%" }} type="text" /><br />
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "99%" }} type="text" /><br />
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "99%" }} type="text" /><br />
                    </div>
                    <div>
                        <label style={{ marginLeft: "10%" }}>Confirm to</label><br />
>>>>>>> aman
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "70% 30%" }}>
                    <div style={{ border: "1px solid black" }}>
                        <div>
                            <label>PETITIONER: </label>
<<<<<<< HEAD
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                        </div>
                        <div>
                            <label>RESPONDENT: </label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                        </div>
                    </div>
                    <div style={{ border: "1px solid black" }}>
                        <div>
                            <label>CASE NUMBER:</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
=======
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "82%" }} type="text" />
                        </div>
                        <div>
                            <label>RESPONDENT: </label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "80%" }} type="text" />
                        </div>
                    </div>
                    <div style={{ border: "1px solid black" }}>
                        <div style={{ margin: "0px", }}>
                            <label htmlFor="street" style={{ fontSize: "15px" }}>CASE NUMBER:</label>
                            <br />
                            <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "100%" }} type="text" id="street" />
>>>>>>> aman
                        </div>
                    </div>
                </div>
                <div>
                    <b>10.	COMMUNITY AND QUASI-COMMUNITY PROPERTY</b>
<<<<<<< HEAD
                    <div>
=======
                    <div style={{ marginLeft: "2%" }}>
>>>>>>> aman
                        <label>a .</label>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>There are no such assets or debts that I know of to be divided by the court.</label>
                    </div>
<<<<<<< HEAD
                    <div>
=======
                    <div style={{ marginLeft: "2%" }}>
>>>>>>> aman
                        <label>b .</label>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <label>Determine rights to community and quasi-community assets and debts. All such assets and debts are listed</label>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            <label>Property Declaration <a style={{ color: "blue" }}>(form FL-160).</a> </label>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            <a style={{ color: "blue" }}>Attachment 10b.</a>
                        </div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            <textarea
<<<<<<< HEAD
                                style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none" }}
=======
                                style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "40px", resize: "none", width: "90%" }}
>>>>>>> aman
                                placeholder='Other (specify):'
                                cols={70}
                                rows={4} />
                        </div>
                    </div>
                </div>
                <div>
                    <b>11.	COMMUNITY AND QUASI-COMMUNITY PROPERTY</b>
<<<<<<< HEAD
                    <div>
=======
                    <div style={{ marginLeft: "2%" }}>
>>>>>>> aman
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>a.	Attorney's fees and costs payable by.</label>
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>Petitioner</label>
                            </div>
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>Respondent.</label>
                            </div>
                        </div>
                        <div>
                            <label>b . Respondent's former name be restored to (specify):</label>
<<<<<<< HEAD
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
=======
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "50%" }} type="text" />
>>>>>>> aman
                        </div>
                        <div>
                            <label> c .</label>
                            <textarea
<<<<<<< HEAD
                                style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none" }}
=======
                                style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "40px", resize: "none", width: "90%" }}
>>>>>>> aman
                                placeholder='Other (specify):'
                                cols={70}
                                rows={4} />
                            <div>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>Continued on Attachment 11c..</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5>I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct. </h5>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
<<<<<<< HEAD
                    <div>
=======
                    <div style={{ marginRight: "11%" }}>
>>>>>>> aman
                        <div>
                            <label>Date</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                        </div>
                        <div>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                            <h6 style={{ textAlign: "center" }}>(TYPE OR PRINT NAME)</h6>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div>
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" /><br />
=======
                    <div style={{ marginRight: "11%" }}>
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "120%" }} type="text" /><br />
>>>>>>> aman
                        <label>	(SIGNATURE OF RESPONDENT)</label>
                        <hr style={{ border: "1px solid black" }} />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <div>
                            <label>Date</label>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" />
                        </div>
                        <div>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" /><br />
                            <h6 style={{ textAlign: "center" }}>(TYPE OR PRINT NAME)</h6>
                        </div>
                    </div>
                    <div>
<<<<<<< HEAD
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" }} type="text" /><br />
=======
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px", width: "100%" }} type="text" /><br />
>>>>>>> aman
                        <label>(SIGNATURE OF ATTORNEY FOR RESPONDENT)</label>
                        <hr style={{ border: "1px solid black" }} />
                    </div>
                </div>
                <div style={{ border: "1px solid black", padding: "5px" }}>
                    <h6><b>FOR MORE INFORMATION:</b>  Read Legal Steps for a Divorce or Legal Separation
                        <a style={{ color: "blue" }}>( form FL-107-INFO)</a>
                        and visit "Families Change" at <a style={{ color: "blue" }}>www.familieschange.ca.gov </a>—
                        an online guide for parents and children going through divorce or separation.</h6>
                </div>
                <div style={{ border: "1px solid black", padding: "5px", marginTop: "5px" }}>
                    <h6><b>NOTICE:</b> You may redact (black out) social security numbers from any written material
                        filed with the court in this case other than a form used to collect child, spousal or partner
                        support.</h6>
                </div>
                <div style={{ border: "1px solid black", padding: "5px", marginTop: "5px" }}>
                    <h6>NOTICE—CANCELLATION OF RIGHTS: Dissolution or legal separation may automatically cancel
                        the rights of a domestic partner or spouse under the other domestic partner's or
                        spouse's will, trust, retirement plan, power of attorney, pay-on-death bank account,
                        survivorship rights to any property owned in joint tenancy, and any other similar
                        thing. It does not automatically cancel the right of a domestic partner or spouse as
                        beneficiary of the other partner's or spouse's life insurance policy. You should
                        review these matters, as well as any credit cards, other credit accounts, insurance
                        polices, retirement plans, and credit reports, to determine whether they should be
                        changed or whether you should take any other actions. Some changes may require the
                        agreement of your partner or spouse or a court order.</h6>
                </div>
                <div style={{ border: "1px solid black", padding: "5px", marginTop: "5px" }}>
                    <h5 >The original response must be filed in the court with proof of service of a copy on Petitioner.</h5>
                </div>
<<<<<<< HEAD
                <div style={{display:"grid",gridTemplateColumns:"20% 60% 20%"}}>
                     <div>
                        <p>FL-120 [Rev. January 1, 2020]</p>
                     </div>
                     <div>
                        <p><b>RESPONSE—MARRIAGE/DOMESTIC PARTNERSHIP</b></p>
                        <p><b>(Family Law)</b></p>
                     </div>
                     <div>
                        <label>Page 3 of 3</label>
                     </div>
=======
                <div style={{ display: "grid", gridTemplateColumns: "20% 60% 20%" }}>
                    <div>
                        <p>FL-120 [Rev. January 1, 2020]</p>
                    </div>
                    <div>
                        <p><b>RESPONSE—MARRIAGE/DOMESTIC PARTNERSHIP</b></p>
                        <p><b>(Family Law)</b></p>
                    </div>
                    <div>
                        <label>Page 3 of 3</label>
                    </div>
>>>>>>> aman
                </div>
































            </div >
        </>




    )
}
