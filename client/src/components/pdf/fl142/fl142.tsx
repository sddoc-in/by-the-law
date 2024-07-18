import React from 'react'
import SUPFL142 from "./SU142";
export default function FL142() {
    const [details, setDetails] = React.useState<SUPFL142>(
        {} as SUPFL142
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
    return (

        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>


                <h3 style={{ textAlign: "center", display: "flex", justifyContent: "end", marginTop: 0, marginBottom: 0 }}>
                    THIS FORM SHOULD NOT BE FILED WITH THE COURT
                </h3>
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "70%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <div>
                                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                                                <div>
                                                    <h5>ATTORNEY OR PARTY WITHOUT ATTORNEY (Name and Address):</h5>
                                                </div>
                                                <div style={{ marginLeft: "14rem" }}>
                                                    <span>TELEPHONE NO.:</span>
                                                    <input
                                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                                        type="text"
                                                        id="name"
                                                    />
                                                </div>
                                            </div>
                                            <textarea rows={8} cols={120} id="street" style={{ backgroundColor: "rgb(225, 243, 243)", width: "100%", resize: "none" }} />
                                        </div>
                                    </div>


                                </div>
                                <div>
                                    <label>ATTORNEY FOR (Name):</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "83%" }} type="text" id="fax" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ margin: 0, border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ fontWeight: "bold" }}>
                                    <label htmlFor="name">SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
                                    <textarea style={{ height: "3rem", width: "99.5%", backgroundColor: "rgb(225, 243, 243)", border: "none", resize: "none" }} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem", marginBottom: "2px" }}>
                                    <label htmlFor="name">PETITIONER:</label>
                                    <input size={86} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "91%" }} type="text" id="name" />
                                </div>
                                <div>
                                    <label htmlFor="street">RESPONDENT:</label>
                                    <input size={85} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "90%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ textAlign: "center", marginLeft: "1.2rem" }}>
                                    <b> SCHEDULE OF ASSETS AND DEBTS</b>
                                </div>
                                <div style={{ display: "flex", textAlign: "center", marginLeft: "1.2rem" }}>
                                    <div style={{ marginLeft: 210 }}>
                                        <b>
                                            <input type="checkbox" style={{ marginRight: 5 }} />
                                            Petitioner's{" "}
                                        </b>
                                    </div>
                                    <div style={{ marginLeft: 50 }}>
                                        <b>
                                            <input type="checkbox" style={{ marginRight: 5 }} />
                                            Respondent's
                                        </b>
                                    </div>
                                </div>
                            </td>
                            <td style={{ width: "30%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem", marginBottom: "4px" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input size={33} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ textAlign: "center", marginTop: 10 }}>
                    <b>--INSTRUCTIONS--</b>
                </div>
                <div style={{ marginLeft: 10, fontSize: 16 }}>
                    List all your known community and separate assets or debts. Include assets
                    even if they are in the possession of another person,
                    <br />
                    including your spouse. If you contend an asset or debt is separate, put P
                    (for Petitioner) or R (for Respondent) in the first column
                    <br />
                    (separate property) to indicate to whom you contend it belongs.
                </div>
                <div style={{ marginLeft: 10, marginTop: 20, fontSize: 16 }}>
                    All values should be as of the date of signing the declaration unless you
                    specify a different valuation date with the description. For
                    <br />
                    additional space, use a continuation sheet numbered to show which item is
                    being continued.
                </div>
                <table style={{ width: "100%", fontSize: 18, borderCollapse: "collapse" }}>
                    <thead>
                        <tr className="tr"></tr>
                        <tr>
                            <td style={{ border: "1px solid black", width: "99%" }}><span>ITEM NO.ASSETS DESCRIPTION </span> </td>
                            <td style={{ border: "1px solid black", width: "99%" }}><span>SEP. PROP</span> </td>
                            <td style={{ border: "1px solid black", width: "99%" }}><span>DATE ACQUIRED</span> </td>
                            <td style={{ border: "1px solid black", width: "99%" }}>
                                <span>CURRENT GROSS FAIR MARKET VALUE</span>
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <span>AMOUNT OF MONEY OWED OR ENCUMBRANCE</span>
                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5>1. REAL ESTATE
                                    <span>
                                        (Give street addresses and attach copies of deeds with legal
                                        descriptions and latest lender's statement.)
                                    </span>
                                </h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "2px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "2px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "2px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "2px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "2px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "2px", width: "99%" }} type="text" /><br />


                            </td>
                            <td style={{ border: "1px solid black", padding: "0px", whiteSpace: "collapse" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 4, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "90%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "90%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <span>2. HOUSEHOLD FURNITURE, FURNISHINGS, APPLIANCES (Identify.)</span><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" id="street" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" id="street" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" id="street" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" id="street" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" id="street" /> <br />

                            </td>
                            <td style={{ margin: "0px" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <span>3. JEWELRY, ANTIQUES, ART, COIN COLLECTIONS, etc. (Identify.)</span>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" id="street" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" id="street" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" id="street" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" id="street" /><br />

                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                    </thead>
                </table>
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none", fontSize: 12 }}>
                        <li>FL-142 [Rev. January 1, 2005]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3>SCHEDULE OF ASSETS AND DEBTS</h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                            {" "}
                            <b> (Family Law)</b>
                        </label>
                    </div>
                    <div style={{ listStyle: "none", fontSize: 12 }}>
                        <li>Page 1 of 4</li>
                    </div>
                </div>
                <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 18 }}>
                    <thead>
                        <tr className="tr"></tr>
                        <tr>
                            <td style={{ border: "1px solid black", width: "82%" }}>
                                ITEM NO. ASSETS DESCRIPTION{" "}
                            </td>
                            <td style={{ border: "1px solid black" }}>SEP. PROP </td>
                            <td style={{ border: "1px solid black" }}>DATE ACQUIRED</td>
                            <td style={{ border: "1px solid black" }}>
                                CURRENT GROSS FAIR MARKET VALUE
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                AMOUNT OF MONEY{/* OWED OR ENCUMBRANCE */}
                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                4. VEHICLES,
                                BOATS, TRAILERS (Describe and attach copy of title
                                document.)
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />



                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "18%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5> 5. SAVINGS ACCOUNTS (Account name, account number, bank, and branch.
                                    Attach copy of latest statement.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "18%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5>6. CHECKING ACCOUNTS (Account name and number, bank, and branch.
                                    Attach copy of latest statement.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "18%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5>7. CREDIT UNION, OTHER DEPOSIT ACCOUNTS (Account name and number,
                                    bank, and branch. Attach copy of latest statement.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5> 8. CASH (Give location.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5>9. TAX REFUND</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5> 10. LIFE INSURANCE WITH CASH SURRENDER OR LOAN VALUE (Attach copy of
                                    declaration page for each policy.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />


                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                    </thead>
                </table>
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none", fontSize: 12 }}>
                        <li>FL-142 [Rev. January 1, 2005]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3>SCHEDULE OF ASSETS AND DEBTS</h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                            {" "}
                            <b> (Family Law)</b>
                        </label>
                    </div>
                    <div style={{ listStyle: "none", fontSize: 12 }}>
                        <li>Page 2 of 4</li>
                    </div>
                </div>
                <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 18 }}>
                    <thead>
                        <tr className="tr"></tr>
                        <tr>
                            <td style={{ border: "1px solid black", width: "82%" }}>ITEM ASSETS DESCRIPTION</td>
                            <td style={{ border: "1px solid black" }}>SEP. PROP </td>
                            <td style={{ border: "1px solid black" }}>DATE ACQUIRED</td>
                            <td style={{ border: "1px solid black" }}>
                                CURRENT GROSS FAIR MARKET VALUE
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                AMOUNT OF MONEY OWED OR ENCUMBRANCE
                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5> 11. STOCKS, BONDS, SECURED NOTES, MUTUAL FUNDS (Give certificate
                                    number and attach copy of the certificate or copy of latest
                                    statement.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5> 12. STOCKS, BONDS, SECURED NOTES, MUTUAL FUNDS (Give certificate
                                    number and attach copy of the certificate or copy of latest
                                    statement.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />
                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />
                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5>13. PROFIT - SHARING, ANNUITIES, IRAS, DEFERRED COMPENSATION (Attach
                                    copy of latest statement.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5> 14. ACCOUNTS RECEIVABLE AND UNSECURED NOTES (Attach copy of each.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />
                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5>15. PARTNERSHIPS AND OTHER BUSINESS INTERESTS (Attach copy of most
                                    current K-1 form and Schedule C.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />


                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />


                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5> 16 OTHER ASSETS</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5> 17. TOTAL ASSETS FROM CONTINUATION SHEET</h5>


                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "15%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }} colSpan={3}>
                                <h5> 18. TOTAL ASSETS</h5>

                            </td>



                            <td style={{ border: "1px solid black", width: "20%" }}>
                            <span>$</span>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",  marginTop: 3, width: "82%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 11, marginBottom: 4, width: "83%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "20%" }}>
                                <span>$</span>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",  marginTop: 3, width: "90%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 11, marginBottom: 4, width: "90%" }} type="text" /><br />

                            </td>
                        </tr>
                    </thead>
                </table>
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none", fontSize: 12 }}>
                        <li>FL-142 [Rev. January 1, 2005]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3>SCHEDULE OF ASSETS AND DEBTS</h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                            {" "}
                            <b> (Family Law)</b>
                        </label>
                    </div>
                    <div style={{ listStyle: "none", fontSize: 12 }}>
                        <li>Page 3 of 4</li>
                    </div>
                </div>
                <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 18 }}>
                    <thead>
                        <tr className="tr"></tr>
                        <tr>
                            <td style={{ border: "1px solid black" }}>
                                ITEM ASSETS DESCRIPTION NO.{" "}
                            </td>
                            <td style={{ border: "1px solid black", width: "7%" }}>SEP. PROP </td>
                            <td style={{ border: "1px solid black" }}>TOTAL OWING</td>
                            <td style={{ border: "1px solid black" }}>
                                DATE INCURRED
                            </td>

                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5>19. STUDENT LOANS (Give details.)</h5>
                                {/* <textarea rows={4} cols={85} id="street" style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", resize: "none" }} /> */}
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>

                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                                {/* <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                                {/* <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                                {/* <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5> 20. TAXES (Give details.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                                {/* <input size={80} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                                {/* <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />
                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5>21. SUPPORT ARREARAGES (Attach copies of orders and statements.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                                {/* <textarea rows={4} cols={85} id="street" style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", resize: "none" }} /> */}
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5>22. LOANS—UNSECURED (Give bank name and loan number and attach copy of
                                    latest statement.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                                {/* <textarea rows={4} cols={85} id="street" style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", resize: "none" }} /> */}
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                                {/* <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                                {/* <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5>23. CREDIT CARDS (Give creditor's name and address and the account
                                    number. Attach copy of latest statement.)</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                                {/* <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                                {/* <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                                {/* <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5>24. OTHER DEBTS (Specify.):</h5>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "4px", width: "99%" }} type="text" /><br />

                            </td>

                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                                {/* <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />


                                {/* <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> */}
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginTop: 3, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, width: "93%" }} type="text" /><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom: 4, width: "93%" }} type="text" /><br />

                            </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }}>
                                <h5> 25. TOTAL DEBTS FROM CONTINUATION SHEET</h5>
                               
                            </td>

                            <td style={{ border: "1px solid black", width: "5%" }}>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom:4,marginTop: 3, width: "93%" }} type="text" /><br />
                                
                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom:4,marginTop: 3, width: "93%" }} type="text" /><br />

                                </td>
                            <td style={{ border: "1px solid black", width: "5%" }}>
                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: 2, marginBottom:4,marginTop: 3, width: "93%" }} type="text" /><br />

                                 </td>
                        </tr>
                        <tr className="tr">
                            <td style={{ border: "1px solid black" }} colSpan={2}>
                                <h5>26. TOTAL DEBTS</h5>

                            </td>



                            <td style={{ border: "1px solid black", width: "5%" }} >
                              <span>$</span><input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: 3, marginBottom: 4, width: "80%" }} type="text" />

                            </td>
                            <td style={{ border: "1px solid black", width: "5%" }} >

                            </td>
                        </tr>
                    </thead>
                </table>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div>27.</div>
                    <div>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        (Specify number):
                        <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" /> pages are
                        attached as continuation sheets
                    </div>
                </div>
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
                        <input size={50} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                        <br />
                        (TYPE OR PRINT NAME)
                    </div>
                    <div style={{ marginLeft: "10rem" }}>
                        {" "}
                        <input size={50} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                        <br />
                        (SIGNATURE OF DECLARANT)
                    </div>
                </div>
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none", fontSize: 12 }}>
                        <li>FL-142 [Rev. January 1, 2005]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3>SCHEDULE OF ASSETS AND DEBTS</h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                            {" "}
                            <b> (Family Law)</b>
                        </label>
                    </div>
                    <div style={{ listStyle: "none", fontSize: 12 }}>
                        <li>Page 4 of 4</li>
                    </div>
                </div>
            </div>
        </>



    )
}
