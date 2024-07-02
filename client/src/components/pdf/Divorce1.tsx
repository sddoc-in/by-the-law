import React from "react";
import SUdivorce from "./SUdivorce";
import { Type } from "./divorce";
import axios from "axios";
import { API_URL } from "../../constants/data";
// import { createImmediatelyInvokedFunctionExpression } from "typescript";

export default function Divorce({ url }: { url: string }) {
  const [details, setDetails] = React.useState<SUdivorce>({
    referredBy: "",
    date: "",
    client: {
      first: "",
      maiden: "",
      last: "",
      address: "",
      phone: {
        home: "",
        cell: "",
        work: "",
        fax: "",
      },
      emailAddress: "",
      correspondenceAddress: {
        home: { contain: false },
        work: { contain: false },
      },
      employer: "",
      position: "",
      yearsEmployed: "",
      salary: {
        gross: "",
        net: "",
        type: {
          annual: false,
          monthly: false,
          hourly: false,
        },
      },
      socialSecurityNo: "",
      placeOfBirth: "",
      dateOfBirth: "",
      age: "",
      educationOrTraining: {
        highSchool: {
          contain: false,
          details: "",
        },
        college: {
          contain: false,
          details: "",
        },
        graduateSchool: {
          contain: false,
          details: "",
        },
      },
      healthStatus: "",
    },
    spouse: {
      first: "",
      maiden: "",
      last: "",
      address: "",
      phone: {
        home: "",
        cell: "",
        work: "",
        fax: "",
      },
      emailAddress: "",
      correspondenceAddress: {
        home: { contain: false },
        work: { contain: false },
        attorney: { contain: false },
      },
      employer: "",
      position: "",
      yearsEmployed: "",
      salary: {
        gross: "",
        net: "",
        type: {
          annual: "",
          monthly: "",
          weekly: "",
        },
      },
      socialSecurityNo: "",
      placeOfBirth: "",
      dateOfBirth: "",
      age: "",
      educationOrTraining: {
        highSchool: {
          contain: false,
          details: "",
        },
        college: {
          contain: false,
          details: "",
        },
        graduateSchool: {
          contain: false,
          details: "",
        },
      },
      healthStatus: "",
    },
    previousMarriage: {
      client: "",
      spouse: "",
      endedDetails: {
        client: "",
        spouse: "",
      },
    },
    childrenOfClient: {
      client: {
        name: [],
        dob: [],
        ssn: [],
      },
      spouse: {
        name: [],
        dob: [],
        ssn: [],
      },
    },
    thisMarriage: {
      date: "",
      place: "",
      registered: "",
      children: {
        name: [],
        dob: [],
        ssn: [],
        livesWith: [],
      },
      currentlyPregnant: false,
      specialProblems: "",
      spouseAttorney: [],
      previousDivorceActions: {
        when: "",
        where: "",
        terminated: "",
      },
      grounds: [],
      other: "",
      comments: [],
    },
    assets: {
      martialResidence: {
        address: "",
        titleNames: "",
        titleLocation: "",
        downPaymentMadeBy: "",
        paymentsCurrent: "",
        whoMakesPayments: "",
        purchaseDetails: {
          when: "",
          pricePaid: "",
        },
        mortgagePayments: "",
        yearlyTaxes: "",
        presentValue: "",
        mortgageBalance: {
          asOf: "",
          balance: "",
        },
        estimatedNetValue: "",
      },
      realEstate: {
        address: "",
        titleLocation: "",
        downPaymentMadeBy: "",
        mortgageholds: "",
        paymentsCurrent: "",
        whoMakesPayments: "",
        mortagePayments: "",
        yearlyTaxes: "",
        presentValue: "",
        mortgageBalance: {
          asOf: "",
          balance: "",
        },
        grossmonthlyIncome: "",
        netMonthlyIncome: "",
        incomeExpenseStatement: "",
        estimatedNetValue: "",
      },
      automobiles: [
        {
          yearAndModel: "",
          nameOnTitle: "",
          possession: "",
          whoHoldslien: "",
          paymentsPerMonth: "",
          whomakingpayments: "",
          approximatePresentValue: "",
          balanceOwingOnLien: "",
          estimatedNetValue: "",
        },
        {
          yearAndModel: "",
          nameOnTitle: "",
          possession: "",
          whoHoldslien: "",
          paymentsPerMonth: "",
          whomakingpayments: "",
          approximatePresentValue: "",
          balanceOwingOnLien: "",
          estimatedNetValue: "",
        },
      ],
      stocksAndBonds: [
        {
          amountTypeCompany: "",
          location: "",
          namedOwner: "",
          valueAsOf: 0,
        },
        {
          amountTypeCompany: "",
          location: "",
          namedOwner: "",
          valueAsOf: 0,
        },
        {
          amountTypeCompany: "",
          location: "",
          namedOwner: "",
          valueAsOf: 0,
        },
        {
          amountTypeCompany: "",
          location: "",
          namedOwner: "",
          valueAsOf: 0,
        },
      ],
      insurancePolicies: [
        {
          company: "",
          policyNumber: 0,
          faceAmount: 0,
          premiums: "",
          per: 0,
          owner: "",
          beneficiary: 0,
          cashValue: "",
        },
        {
          company: "",
          policyNumber: 0,
          faceAmount: 0,
          premiums: "",
          per: 0,
          owner: "",
          beneficiary: 0,
          cashValue: "",
        },
      ],
      safeDepositBox: {
        location: "",
        namesOnBox: "",
        whoHasTheKey: "",
        contents: "",
      },
      bankAccounts: [
        {
          location: "",
          balanceAsOf: "",
          inWhoseName: "",
          WhohasPassbook: "",
          typeOfAccount: "",
          howFundsAcquired: "",
        },
        {
          location: "",
          balanceAsOf: "",
          inWhoseName: "",
          WhohasPassbook: "",
          typeOfAccount: "",
          howFundsAcquired: "",
        },
      ],
      otherAssetsInPossession: [
        {
          description: "",
          estimatedValue: "",
        },
      ],
      clientsNonMaritalProperty: [
        {
          description: "",
          estimatedValue: "",
        },
      ],
      pensionPlans: [
        {
          description: "",
          estimatedValue: "",
        },
      ],
    },
    liabilities: {
      creditCardDebt: {
        toWhomOwed: [],
        forWhat: [],
        monthlyPayment: [],
        balanceAsOf: [],
      },
      personalLoans: {
        toWhomOwed: [],
        forWhat: [],
        monthlyPayment: [],
        balanceAsOf: [],
      },
      automobileLoans: {
        toWhomOwed: [],
        forWhat: [],
        monthlyPayment: [],
        balanceAsOf: [],
      },
      mortgageLoans: {
        toWhomOwed: [],
        forWhat: [],
        monthlyPayment: [],
        balanceAsOf: [],
      },
      otherDebt: {
        toWhomOwed: [],
        forWhat: [],
        monthlyPayment: [],
        balanceAsOf: [],
      },
      total: {
        husband: "",
        wife: "",
      },
    },
    issuesToAddress: {
      maidenNameRestored: {
        yes: false,
        no: false,
        maidenName: "",
      },
      custody: {
        joint: "",
        husband: "",
        wife: "",
      },
      physicalCustody: {
        husband: "",
        wife: "",
      },
      maintenance: {
        yes: false,
        no: false,
        howMuch: "",
      },
      childSupport: {
        yes: false,
        no: false,
        howMuch: "",
        deviateFromStatute: {
          yes: false,
          no: false,
        },
      },
      attorneyFees: {
        interim: false,
        final: false,
        husband: "",
        wife: "",
        eachPartyPaysOwn: "",
        petitionForFees: {
          yes: false,
          no: false,
        },
      },
      dissipation: {
        yes: false,
        no: false,
      },
      exclusivePossessionOfMaritalResidence: {
        yes: false,
        no: false,
        for: {
          husband: false,
          wife: false,
        },
      },
      fileCounterPetition: {
        yes: false,
        no: false,
      },
    },
    settlementNotes: Array(20).fill(""),
  });

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

  function onChangePhone(type: Type, e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        phone: {
          ...details[type]?.phone,
          [e.target.name]: e.target.value,
        },
      },
    });
  }

  function handleCorrespondenceAddress(
    type: Type,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        correspondenceAddress: {
          ...details[type].correspondenceAddress,
          [e.target.name]: {
            contain: e.target.checked,
          },
        },
      },
    });
  }

  function handleClient(type: Type, e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleSalary(type: Type, e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        salary: {
          ...details[type].salary,
          [e.target.name]: e.target.value,
        },
      },
    });
  }

  function handleSalaryType(
    type: Type,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        salary: {
          ...details[type].salary,
          type: {
            ...details[type].salary.type,
            [e.target.name]: e.target.checked,
          },
        },
      },
    });
  }

  function handleHighSchool(
    type: Type,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        educationOrTraining: {
          ...details[type].educationOrTraining,
          highSchool: {
            ...details[type].educationOrTraining.highSchool,
            [e.target.name]: e.target.value,
          },
        },
      },
    });
  }

  function handleCollege(type: Type, e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        educationOrTraining: {
          ...details[type].educationOrTraining,
          college: {
            ...details[type].educationOrTraining.college,
            [e.target.name]: e.target.value,
          },
        },
      },
    });
  }

  function handleGraduateSchool(
    type: Type,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        educationOrTraining: {
          ...details[type].educationOrTraining,
          graduateSchool: {
            ...details[type].educationOrTraining.graduateSchool,
            [e.target.name]: e.target.value,
          },
        },
      },
    });
  }

  function handlePreviousMarriage(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      previousMarriage: {
        ...details.previousMarriage,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleChildrenOfClient(
    type: Type,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleCurrentMarriage(
    type: Type,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleAssets(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      // [type]: {
      //   ...details[type],
      [e.target.name]: e.target.value,
      // },
    });
  }

  function handleLiabilities(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      liabilities: {
        ...details.liabilities,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleIssuesToAddress(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      issuesToAddress: {
        ...details.issuesToAddress,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleSettlementNotes(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      settlementNotes: {
        ...details.settlementNotes,
        [e.target.name]: e.target.value,
      },
    });
  }

  // function sendData() {
  //   console.log(details);
  // }

  async function handleSubmit() {
    try {
      const response = await axios
        .put(
          API_URL +
            "/url/submit?" +
            new URLSearchParams({
              url: url,
            }),
          details
        )
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.message);
          return;
        });
    } catch (err: any) {
      alert(err.message);
    }
  }

  // autosaver
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleSubmit();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div
        className="main"
        style={{ backgroundColor: "white", color: "black", fontSize: "18px" }}
      >
        <h2
          className="text-center"
          style={{ paddingTop: "300px", fontSize: "36px", fontWeight: "800" }}
        >
          Divorce Intake Questionnaire
        </h2>
        <p className="font-s text-center mt">Personal & Confidential</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25rem",
          }}
        >
          <img src="/law.png" alt="ByTheLaw" />
        </div>
        <div className="font-s text-center" style={{ marginTop: " 5rem" }}>
          <label>940 Saratoga Ave</label> <br />
          <label>Suite 112</label>
          <br />
          <label>San Jose, CA</label>
        </div>

        <p style={{ pageBreakAfter: "always" }}></p>
        {/* <p style={{ pageBreakAfter: 'always' }}></p> */}

        <div style={{ marginTop: "10rem" }}>
          <p>
            Referred by:{" "}
            <span className="ml">
              <input
                name="referredBy"
                type="text"
                onChange={(e) => handleChange(e)}
              />
            </span>
          </p>
        </div>
        <div className="font-s">
          <p>
            Date:{" "}
            <span style={{ marginLeft: "4.7rem" }}>
              <input
                name="date"
                type="text"
                className="ml-[2px]"
                onChange={(e) => handleChange(e)}
              />
            </span>
          </p>
        </div>

        <hr
          style={{
            border: "1.5px solid black",
            marginTop: " 4rem",
            marginBottom: "4rem",
          }}
        />
        <br />
        {/* client */}
        <div>
          <div className="font-s">
            <div className="flex justify-between w-full">
              <b className="w-fit">Client’s Name:</b>{" "}
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center flex-col mx-1">
                  <input
                    type="text"
                    name="first"
                    onChange={(e) => handleClient(Type.client, e)}
                    defaultValue={details.client?.first}
                  />
                  <div>(First)</div>
                </div>
                <div className="flex justify-center items-center flex-col mx-1">
                  <input
                    type="text"
                    name="maiden"
                    onChange={(e) => handleClient(Type.client, e)}
                    defaultValue={details.client?.maiden}
                  />
                  <div>(Maiden)</div>
                </div>
                <div className="flex justify-center items-center flex-col mx-1">
                  <input
                    type="text"
                    name="last"
                    onChange={(e) => handleClient(Type.client, e)}
                    defaultValue={details.client?.last}
                  />
                  <div>(Last)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-s">
            <p>
              Address:
              <span style={{ marginLeft: " 8.4rem" }}>
                <input
                  style={{ width: "43rem" }}
                  onChange={(e) => handleClient(Type.client, e)}
                  defaultValue={details.client?.address}
                  className="ml-[14px]"
                  type="text"
                  name="address"
                />
              </span>
            </p>
          </div>
          <br />

          <div
            className="font-s"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50rem",
            }}
          >
            <div>Phone:</div>
            <div style={{ marginRight: "70px", marginLeft: "30px" }}>
              <div>
                Home :{" "}
                <input
                  name="home"
                  type="text"
                  style={{ width: "10rem" }}
                  onChange={(e) => onChangePhone(Type.client, e)}
                  defaultValue={details.client?.phone?.home}
                />
              </div>
              <div style={{ marginLeft: "5px" }}>
                Cell :{" "}
                <input
                  name="cell"
                  type="text"
                  style={{ width: "11rem" }}
                  onChange={(e) => onChangePhone(Type.client, e)}
                  defaultValue={details.client?.phone?.cell}
                />
              </div>
            </div>

            <div style={{}}>
              <div>
                Work :{" "}
                <input
                  name="work"
                  type="text"
                  style={{ width: "10rem" }}
                  onChange={(e) => onChangePhone(Type.client, e)}
                  defaultValue={details.client?.phone?.work}
                />
              </div>
              <div>
                fax :{" "}
                <input
                  type="text"
                  name="fax"
                  style={{ width: "11.1rem" }}
                  onChange={(e) => onChangePhone(Type.client, e)}
                  defaultValue={details.client?.phone?.fax}
                />
              </div>
            </div>
          </div>
          <br />

          <div className="font-s mt">
            Email Address:{" "}
            <input
              name="emailAddress"
              style={{ width: "57rem" }}
              type="text"
              onChange={(e) => handleClient(Type.client, e)}
              defaultValue={details.client?.emailAddress}
            />
          </div>
          <br />
          <br />
          <div className="font-s ">
            Address Where Correspondence Should Be Sent:{" "}
            <input
              className="ml"
              type="checkbox"
              name=""
              id=""
              // onChange={(e)=>handleClient(e)} defaultChecked={details.client?'On':'Off'}
              onChange={(e) => handleCorrespondenceAddress(Type.client, e)}
              defaultChecked={
                details.client?.correspondenceAddress?.home.contain
              }
            />{" "}
            Home{" "}
            <input
              className="ml"
              type="checkbox"
              name=""
              id=""
              onChange={(e) => handleCorrespondenceAddress(Type.client, e)}
              defaultChecked={
                details.client?.correspondenceAddress?.work.contain
              }
            />{" "}
            Work
          </div>
          <br />
          <br />

          <div className="font-s ">
            Emloyer:{" "}
            <input
              style={{ width: "60.5rem" }}
              type="text"
              onChange={(e) => handleClient(Type.client, e)}
              defaultValue={details.client?.employer}
            />
          </div>
          <br />
          <br />

          <div className="font-s">
            Position:{" "}
            <input
              style={{ width: "25rem" }}
              type="text"
              name="position"
              onChange={(e) => handleClient(Type.client, e)}
            />{" "}
            Years Employed:{" "}
            <input
              style={{ width: "25.8rem" }}
              type="text"
              name="yearsEmployed"
              onChange={(e) => handleClient(Type.client, e)}
              defaultValue={details.client?.position}
            />
          </div>
          <br />
          <br />

          <div className="font-s">
            Salary:{" "}
            <span style={{ marginLeft: "4rem" }}>
              Gross:{" "}
              <input
                type="text"
                style={{ width: "16.7rem" }}
                onChange={(e) => handleSalary(Type.client, e)}
                defaultValue={details.client.salary.gross}
              />
            </span>{" "}
            <span className="ml">
              Net:
              <input
                type="text"
                style={{ width: "18rem" }}
                onChange={(e) => handleSalary(Type.client, e)}
                defaultValue={details.client.salary.net}
              />
            </span>
            <span>
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-1"
                onChange={(e) => handleSalaryType(Type.client, e)}
                defaultChecked={details.client.salary.type.annual}
              />
              annual/
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-1"
                onChange={(e) => handleSalaryType(Type.client, e)}
                defaultChecked={details.client?.salary.type.monthly}
              />
              monthly/
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-1"
                onChange={(e) => handleSalaryType(Type.client, e)}
                defaultChecked={details.client?.salary.type.hourly}
              />
              hourly
            </span>
          </div>
          <br />
          <br />

          <div className="font-s">
            Social Security No.
            <input
              type="text "
              style={{ width: "22rem" }}
              className="18rem"
              name="socialSecurityNo"
              onChange={(e) => handleClient(Type.client, e)}
              defaultValue={details.client?.socialSecurityNo}
            />
            Place of Birth:{" "}
            <input
              type="text"
              name="placeOfBirth"
              style={{ width: "25.7rem" }}
              className="18rem"
              onChange={(e) => handleClient(Type.client, e)}
              defaultValue={details.client?.placeOfBirth}
            />
          </div>
          <br />
          <br />

          <div className="font-s">
            DOB:{" "}
            <input
              type="text"
              style={{ width: "24rem" }}
              name="dateOfBirth"
              onChange={(e) => handleClient(Type.client, e)}
              defaultValue={details.client?.dateOfBirth}
            />{" "}
            AGE:{" "}
            <input
              type="text"
              name="age"
              style={{ width: "35.8rem" }}
              onChange={(e) => handleClient(Type.client, e)}
              defaultValue={details.client?.age}
            />
          </div>
          <br />
          <br />

          <div className="font-s" style={{ display: " flex" }}>
            <div>Education or Training:</div>
            <div className="ml">
              <input
                type="checkbox"
                name="contain"
                id=""
                onChange={(e) => handleHighSchool(Type.client, e)}
                defaultChecked={
                  details.client?.educationOrTraining.highSchool.contain
                }
              />
              High School
              <input
                type="text"
                name="details"
                style={{ width: "44.8rem" }}
                onChange={(e) => handleHighSchool(Type.client, e)}
                defaultValue={
                  details.client?.educationOrTraining.highSchool.details
                }
              />
              <br />
              <input
                type="checkbox"
                name="contain"
                id=""
                onChange={(e) => handleCollege(Type.client, e)}
                defaultChecked={
                  details.client?.educationOrTraining.college.contain
                }
              />
              College
              <input
                type="text"
                name="details"
                style={{ width: "47.1rem", marginTop: "20px" }}
                onChange={(e) => handleCollege(Type.client, e)}
                defaultValue={
                  details.client?.educationOrTraining.college.details
                }
              />
              <br />
              <input
                type="checkbox"
                name="contain"
                id=""
                onChange={(e) => handleGraduateSchool(Type.client, e)}
                defaultChecked={
                  details.client?.educationOrTraining.highSchool.contain
                }
              />
              Graduate School
              <input
                type="text"
                name="details"
                style={{ width: "42rem", marginTop: "20px" }}
                onChange={(e) => handleClient(Type.client, e)}
                defaultValue={
                  details.client?.educationOrTraining.graduateSchool.details
                }
              />
            </div>
          </div>
          <br />
          <br />

          <div className="font-s">Status of</div>
          <div className="font-s" style={{ marginTop: "0.5rem" }}>
            Health and Treating Physician{" "}
            <input
              type="text"
              style={{ width: "49rem" }}
              onChange={(e) => {
                setDetails({
                  ...details,
                  client: {
                    ...details.client,
                    healthStatus: e.target.value,
                  },
                });
              }}
              defaultValue={details.client?.healthStatus}
            />
          </div>

          <hr style={{ border: "1.5px solid black", marginTop: "4rem" }} />
          <br />

          <p style={{ pageBreakAfter: "always" }}></p>
          <p style={{ pageBreakBefore: "always" }}></p>
        </div>

        {/* spouse */}
        <div>
          <div className="font-s">
            <div className="flex justify-between w-full">
              <b className="w-fit">Spouse’s Name:</b>{" "}
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center flex-col mx-1">
                  <input
                    type="text"
                    name="first"
                    onChange={(e) => handleClient(Type.spouse, e)}
                    defaultValue={details.spouse?.first}
                  />
                  <div>(First)</div>
                </div>
                <div className="flex justify-center items-center flex-col mx-1">
                  <input
                    type="text"
                    name="maiden"
                    onChange={(e) => handleClient(Type.spouse, e)}
                    defaultValue={details.spouse?.maiden}
                  />
                  <div>(Maiden)</div>
                </div>
                <div className="flex justify-center items-center flex-col mx-1">
                  <input
                    type="text"
                    name="last"
                    onChange={(e) => handleClient(Type.spouse, e)}
                    defaultValue={details.spouse?.last}
                  />
                  <div>(Last)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-s">
            <p>
              Address:
              <span style={{ marginLeft: " 8.4rem" }}>
                <input
                  style={{ width: "43rem" }}
                  onChange={(e) => handleClient(Type.spouse, e)}
                  defaultValue={details.spouse?.address}
                  className="ml-[14px]"
                  type="text"
                  name="address"
                />
              </span>
              <p>(If Different)</p>
            </p>
          </div>
          <br />

          <div
            className="font-s"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50rem",
            }}
          >
            <div>Phone:</div>
            <div style={{ marginRight: "70px", marginLeft: "30px" }}>
              <div>
                Home :{" "}
                <input
                  name="home"
                  type="text"
                  style={{ width: "10rem" }}
                  onChange={(e) => onChangePhone(Type.spouse, e)}
                  defaultValue={details.spouse?.phone?.home}
                />
              </div>
              <div style={{ marginLeft: "5px" }}>
                Cell :{" "}
                <input
                  name="cell"
                  type="text"
                  style={{ width: "11rem" }}
                  onChange={(e) => onChangePhone(Type.spouse, e)}
                  defaultValue={details.spouse?.phone?.cell}
                />
              </div>
            </div>

            <div style={{}}>
              <div>
                Work :{" "}
                <input
                  name="work"
                  type="text"
                  style={{ width: "10rem" }}
                  onChange={(e) => onChangePhone(Type.spouse, e)}
                  defaultValue={details.spouse?.phone?.work}
                />
              </div>
              <div>
                fax :{" "}
                <input
                  type="text"
                  name="fax"
                  style={{ width: "11.1rem" }}
                  onChange={(e) => onChangePhone(Type.spouse, e)}
                  defaultValue={details.spouse?.phone?.fax}
                />
              </div>
            </div>
          </div>
          <br />

          <div className="font-s mt">
            Email Address:{" "}
            <input
              name="emailAddress"
              style={{ width: "57rem" }}
              type="text"
              onChange={(e) => handleClient(Type.spouse, e)}
              defaultValue={details.spouse?.emailAddress}
            />
          </div>
          <br />
          <br />
          <div className="font-s ">
            Address Where Correspondence Should Be Sent:{" "}
            <input
              className="ml"
              type="checkbox"
              name=""
              id=""
              // onChange={(e)=>handlespouse(e)} defaultChecked={details.spouse?'On':'Off'}
              onChange={(e) => handleCorrespondenceAddress(Type.spouse, e)}
              defaultChecked={
                details.spouse?.correspondenceAddress?.home.contain
              }
            />{" "}
            Home{" "}
            <input
              className="ml"
              type="checkbox"
              name=""
              id=""
              onChange={(e) => handleCorrespondenceAddress(Type.spouse, e)}
              defaultChecked={
                details.spouse?.correspondenceAddress?.work.contain
              }
            />{" "}
            Work
          </div>
          <br />
          <br />

          <div className="font-s ">
            Emloyer:{" "}
            <input
              style={{ width: "60.5rem" }}
              type="text"
              onChange={(e) => handleClient(Type.spouse, e)}
              defaultValue={details.spouse?.employer}
            />
          </div>
          <br />
          <br />

          <div className="font-s">
            Position:{" "}
            <input
              style={{ width: "25rem" }}
              type="text"
              name="position"
              defaultValue={details.spouse?.position}
              onChange={(e) => handleClient(Type.spouse, e)}
            />{" "}
            Years Employed:{" "}
            <input
              style={{ width: "25.8rem" }}
              type="text"
              name="yearsEmployed"
              onChange={(e) => handleClient(Type.spouse, e)}
              defaultValue={details.spouse?.yearsEmployed}
            />
          </div>
          <br />
          <br />

          <div className="font-s">
            Salary:{" "}
            <span style={{ marginLeft: "4rem" }}>
              Gross:{" "}
              <input
                type="text"
                style={{ width: "16.7rem" }}
                onChange={(e) => handleSalary(Type.spouse, e)}
                defaultValue={details.spouse.salary.gross}
              />
            </span>{" "}
            <span className="ml">
              Net:
              <input
                type="text"
                style={{ width: "18rem" }}
                onChange={(e) => handleSalary(Type.spouse, e)}
                defaultValue={details.spouse.salary.net}
              />
            </span>
            <span>
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-1"
                onChange={(e) => handleSalaryType(Type.spouse, e)}
                defaultChecked={
                  details.spouse.salary.type.annual ? true : false
                }
              />
              annual/
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-1"
                onChange={(e) => handleSalaryType(Type.spouse, e)}
                defaultChecked={
                  details.spouse?.salary.type.monthly ? true : false
                }
              />
              monthly/
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-1"
                onChange={(e) => handleSalaryType(Type.spouse, e)}
                defaultChecked={
                  details.spouse?.salary.type.weekly ? true : false
                }
              />
              weekly
            </span>
          </div>
          <br />
          <br />

          <div className="font-s">
            Social Security No.
            <input
              type="text "
              style={{ width: "22rem" }}
              className="18rem"
              name="socialSecurityNo"
              onChange={(e) => handleClient(Type.spouse, e)}
              defaultValue={details.spouse?.socialSecurityNo}
            />
            Place of Birth:{" "}
            <input
              type="text"
              name="placeOfBirth"
              style={{ width: "25.7rem" }}
              className="18rem"
              onChange={(e) => handleClient(Type.spouse, e)}
              defaultValue={details.spouse?.placeOfBirth}
            />
          </div>
          <br />
          <br />

          <div className="font-s">
            DOB:{" "}
            <input
              type="text"
              style={{ width: "24rem" }}
              name="dateOfBirth"
              onChange={(e) => handleClient(Type.spouse, e)}
              defaultValue={details.spouse?.dateOfBirth}
            />{" "}
            AGE:{" "}
            <input
              type="text"
              name="age"
              style={{ width: "35.8rem" }}
              onChange={(e) => handleClient(Type.spouse, e)}
              defaultValue={details.spouse?.age}
            />
          </div>
          <br />
          <br />

          <div className="font-s" style={{ display: " flex" }}>
            <div>Education or Training:</div>
            <div className="ml">
              <input
                type="checkbox"
                name="contain"
                id=""
                onChange={(e) => handleHighSchool(Type.spouse, e)}
                defaultChecked={
                  details.spouse?.educationOrTraining.highSchool.contain
                }
              />
              High School
              <input
                type="text"
                name="details"
                style={{ width: "44.8rem" }}
                onChange={(e) => handleHighSchool(Type.spouse, e)}
                defaultValue={
                  details.spouse?.educationOrTraining.highSchool.details
                }
              />
              <br />
              <input
                type="checkbox"
                name="contain"
                id=""
                onChange={(e) => handleCollege(Type.spouse, e)}
                defaultChecked={
                  details.spouse?.educationOrTraining.college.contain
                }
              />
              College
              <input
                type="text"
                name="details"
                style={{ width: "47.1rem", marginTop: "20px" }}
                onChange={(e) => handleCollege(Type.spouse, e)}
                defaultValue={
                  details.spouse?.educationOrTraining.college.details
                }
              />
              <br />
              <input
                type="checkbox"
                name="contain"
                id=""
                onChange={(e) => handleGraduateSchool(Type.spouse, e)}
                defaultChecked={
                  details.spouse?.educationOrTraining.highSchool.contain
                }
              />
              Graduate School
              <input
                type="text"
                name="details"
                style={{ width: "42rem", marginTop: "20px" }}
                onChange={(e) => handleClient(Type.spouse, e)}
                defaultValue={
                  details.spouse?.educationOrTraining.graduateSchool.details
                }
              />
            </div>
          </div>
          <br />
          <br />

          <div className="font-s">Status of</div>
          <div className="font-s" style={{ marginTop: "0.5rem" }}>
            Health and Treating Physician{" "}
            <input
              type="text"
              style={{ width: "49rem" }}
              onChange={(e) => {
                setDetails({
                  ...details,
                  spouse: {
                    ...details.spouse,
                    healthStatus: e.target.value,
                  },
                });
              }}
              defaultValue={details.spouse?.healthStatus}
            />
          </div>

          <hr style={{ border: "1.5px solid black", marginTop: "4rem" }} />
          <br />

          <p style={{ pageBreakAfter: "always" }}></p>
          <p style={{ pageBreakBefore: "always" }}></p>
        </div>

        {/* previous marriage */}
        <div>
          <div className="flex justify-between items-center">
            <strong>Previous Marriages:</strong>
            <div className="flex justify-center items-center w-9/12">
              <div className="flex justify-start items-center w-1/2">
                <p>Client:</p>
                <input
                  type="text"
                  style={{ width: "90%" }}
                  name="client"
                  onChange={(e) => handlePreviousMarriage(e)}
                  defaultValue={details.previousMarriage?.client}
                />
              </div>
              <div className="flex justify-start items-center w-1/2 ml-3">
                <p>Spouse:</p>
                <input
                  type="text"
                  style={{ width: "90%" }}
                  name="spouse"
                  onChange={(e) => handlePreviousMarriage(e)}
                  defaultValue={details.previousMarriage?.spouse}
                />
              </div>
            </div>
          </div>

          <div>
            <p>How and When Ended:</p>
            <div>
                <div className="flex justify-end items-center  w-full">
                  <p>Client:</p>
                  <input
                    type="text"
                    className="ml-2 w-10/12"
                    name="client"
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        previousMarriage: {
                          ...details.previousMarriage,
                          endedDetails: {
                            ...details.previousMarriage?.endedDetails,
                            client: e.target.value,
                          },
                        },
                      });
                    
                    }}
                    defaultValue={details.previousMarriage?.endedDetails.client}
                  />
                </div>
                <div className="flex justify-end items-center  w-full">
                  <p>Spouse:</p>
                  <input
                    type="text"
                    className="ml-2 w-10/12"
                    name="spouse"
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        previousMarriage: {
                          ...details.previousMarriage,
                          endedDetails: {
                            ...details.previousMarriage?.endedDetails,
                            spouse: e.target.value,
                          },
                        },
                      });
                    }}
                    defaultValue={details.previousMarriage?.endedDetails.spouse}
                  />
              </div>
            </div>
          </div>
          
        </div>

        <br />
        <p>If applicable:</p>
        <div style={{ display: "flex" }}>
          <p className="mt-2">
            Gross monthly income:{" "}
            <input
              type="text"
              style={{ width: "18rem" }}
              name="grossMonthlyIncome"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.realEstate.grossmonthlyIncome}
            />
          </p>
          <p className="mt-2">
            Net monthly income:{" "}
            <input
              type="text"
              style={{ width: "17rem" }}
              name="netMonthlyIncome"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.realEstate.netMonthlyIncome}
            />
          </p>
        </div>
        <p className="mt-2">
          Can you furnish an Income-Expense Statement?
          <input
            type="text"
            style={{ width: "33rem" }}
            name="incomeExpenseStatement"
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.realEstate.incomeExpenseStatement}
          />
        </p>
        <p className="mt-2" style={{ marginLeft: "20rem" }}>
          Estimated Net Value:${" "}
          <input
            type="text"
            style={{ width: "27.8rem" }}
            name="estimatedNetValue"
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.realEstate.estimatedNetValue}
          />
        </p>

        {/* yaha hu */}

        <p className="mt" style={{ textDecoration: "underline" }}>
          Automobiles
        </p>

        <div className="mt">
          <p className="mt-1">
            Year and Model:{" "}
            <input
              type="text"
              style={{ width: "47.4rem" }}
              name="yearAndModel"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[0].yearAndModel}
            />{" "}
            Name
          </p>
          <p className="mt-1">
            on Title:{" "}
            <input
              type="text"
              style={{ width: "51rem" }}
              name="nameOnTitle"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[0].nameOnTitle!}
            />
            Who has
          </p>
          <p className="mt-1">
            possession:{" "}
            <input
              type="text"
              style={{ width: "54rem" }}
              name="possession"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[0].possession}
            />
          </p>
          <p className="mt-1">
            Who holds lien:{" "}
            <input
              type="text"
              style={{ width: "52rem" }}
              name="whoHoldslien"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[0].whoHoldslien}
            />
          </p>
          <p className="mt-1">
            Payments per month:{" "}
            <input
              type="text"
              style={{ width: "46rem" }}
              name="paymentsPerMonth"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[0].paymentsPerMonth}
            />{" "}
            Who
          </p>
          <p className="mt-1">
            is making payments:{" "}
            <input
              type="text"
              style={{ width: "49rem" }}
              name="whomakingpayments"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[0].whomakingpayments}
            />
          </p>
          <br />
          <p className="mt-1" style={{ marginLeft: "10rem" }}>
            (1) Approximate present value:{" "}
            <input
              type="text"
              style={{ width: "33rem" }}
              name="approximatePresentValue"
              onChange={(e) => handleAssets(e)}
              defaultValue={
                details.assets?.automobiles[0].approximatePresentValue
              }
            />
          </p>
        </div>

        <p style={{ marginLeft: "10rem" }}>
          (1) Balance owing on lien as of:{" "}
          <input
            type="text"
            style={{ width: "18rem" }}
            name="balanceOwingOnLien"
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[0].balanceOwingOnLien}
          />
          :$
          <input
            type="text"
            style={{ width: "13.5rem" }}
            name="balanceOwingOnLien"
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[0].balanceOwingOnLien}
          />
        </p>
        <p style={{ marginLeft: "20rem" }}>
          Estimated Net Value:${" "}
          <input
            type="text"
            style={{ width: "28rem" }}
            name="estimatedNetValue"
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[0].estimatedNetValue}
          />
        </p>

        <div className="mt">
          <p className="mt-1">
            Year and Model:{" "}
            <input
              type="text"
              style={{ width: "47.4rem" }}
              name="yearAndModel"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[1].yearAndModel}
            />{" "}
            Name
          </p>
          <p className="mt-1">
            Name on Title:{" "}
            <input
              type="text"
              style={{ width: "50rem" }}
              name="nameOnTitle"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[1].nameOnTitle}
            />
            Who
          </p>
          <p className="mt-1">
            has possession:{" "}
            <input
              type="text"
              style={{ width: "52rem" }}
              name="possession"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[1].possession}
            />
          </p>
          <p className="mt-1">
            Who holds lien:{" "}
            <input
              type="text"
              style={{ width: "52.5rem" }}
              name="whoHoldslien"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[1].whoHoldslien}
            />
          </p>
          <p className="mt-1">
            Payments per month:{" "}
            <input
              type="text"
              style={{ width: "49rem" }}
              name="paymentsPerMonth"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[1].paymentsPerMonth}
            />
          </p>
          <p className="mt-1">
            Who is making payments:{" "}
            <input
              type="text"
              style={{ width: "46.5rem" }}
              name="whomakingpayments"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[1].whomakingpayments}
            />
          </p>
          <br />
          <p className="mt-1" style={{ marginLeft: "10rem" }}>
            (1) Approximate present value:{" "}
            <input
              type="text"
              style={{ width: "33.5rem" }}
              name="approximatePresentValue"
              onChange={(e) => handleAssets(e)}
              defaultValue={
                details.assets?.automobiles[1].approximatePresentValue
              }
            />
          </p>
        </div>
        <p style={{ pageBreakAfter: "always" }}></p>
        <p style={{ pageBreakBefore: "always" }}></p>

        <p style={{ marginLeft: "10rem" }}>
          (1) Balance owing on lien as of:{" "}
          <input
            type="text"
            style={{ width: "18rem" }}
            name="balanceOwingOnLien"
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[1].balanceOwingOnLien}
          />
          :$
          <input
            type="text"
            style={{ width: "14.5rem" }}
            name="balanceOwingOnLien"
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[1].balanceOwingOnLien}
          />
        </p>
        <p style={{ marginLeft: "20rem" }}>
          Estimated Net Value:${" "}
          <input
            type="text"
            style={{ width: "29rem" }}
            name="estimatedNetValue"
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[1].estimatedNetValue}
          />
        </p>

        <div className="mt">
          <b
            className="mt-4"
            style={{ borderBottom: "1px solid black", width: "11rem" }}
          >
            Stocks and Bonds
          </b>
          <p>
            Ammount,type,company:{" "}
            <input
              type="text"
              style={{ width: "25rem" }}
              onChange={(e) => handleAssets(e)}
              name="amountTypeCompany"
              defaultValue={details.assets?.stocksAndBonds[0].amountTypeCompany}
            />{" "}
            Location:{" "}
            <input
              type="text"
              style={{ width: "16rem" }}
              name="location"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[0].location}
            />
          </p>
          <p className="mt-3">
            Named Owner:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              name="namedOwner"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[0].namedOwner}
            />{" "}
            Value as of <input type="number" style={{ width: "10rem" }} />
            :$
            <input
              type="number"
              style={{ width: "14rem" }}
              name="valueAsOf"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[0].valueAsOf}
            />
          </p>

          <p className="mt">
            Amount,type,company:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              name="amountTypeCompany"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[1].amountTypeCompany}
            />
            Location:{" "}
            <input
              type="text"
              style={{ width: "22rem" }}
              name="location"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[1].location}
            />
          </p>
          <p className="mt-3">
            Named Owner:{" "}
            <input
              type="text"
              style={{ width: "16rem" }}
              name="namedOwner"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[1].namedOwner}
            />
            Value as of <input type="number" style={{ width: "14rem" }} />
            :${" "}
            <input
              type="text"
              style={{ width: "14rem" }}
              name="valueAsOf"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[1].valueAsOf}
            />
          </p>

          <p className="mt">
            Amount,type,company:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              name="amountTypeCompany"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[2].amountTypeCompany}
            />
            Location:{" "}
            <input
              type="text"
              style={{ width: "22rem" }}
              name="location"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[2].location}
            />
          </p>
          <p className="mt-3">
            Named Owner:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              name="namedOwner"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[2].namedOwner}
            />
            Value as of <input type="number" style={{ width: "14rem" }} />
            :${" "}
            <input
              type="text"
              style={{ width: "10rem" }}
              name="valueAsOf"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[2].valueAsOf}
            />
          </p>
          <p className="mt">
            Amount,type,company:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              name="amountTypeCompany"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[3].amountTypeCompany}
            />
            Location:{" "}
            <input
              type="text"
              style={{ width: "22rem" }}
              name="location"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[3].location}
            />
          </p>

          <p className="mt-3">
            Named Owner:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              name="namedOwner"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[3].namedOwner}
            />
            Value as of <input type="number" style={{ width: "14rem" }} />
            :${" "}
            <input
              type="text"
              style={{ width: "10rem" }}
              name="valueAsOf"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[3].valueAsOf}
            />
          </p>

          <div className="mt">
            <b style={{ textDecoration: "underline", width: "11rem" }}>
              Insurance Policies
            </b>
            <p className="mt">
              Company:{" "}
              <input
                type="text"
                style={{ width: "55rem" }}
                name="company"
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.insurancePolicies[0].company}
              />
            </p>
            <div className="mt-3" style={{ display: "flex" }}>
              <p>
                Policy Number:{" "}
                <input
                  type="number"
                  style={{ width: "18rem" }}
                  name="policyNumber"
                  onChange={(e) => handleAssets(e)}
                  defaultValue={
                    details.assets?.insurancePolicies[0].policyNumber
                  }
                />
              </p>
              <p>
                Face Amount:{" "}
                <input
                  type="number"
                  style={{ width: "25.5rem" }}
                  name="faceAmount"
                  onChange={(e) => handleAssets(e)}
                  defaultValue={details.assets?.insurancePolicies[0].faceAmount}
                />
              </p>
            </div>
            <div className="mt-3" style={{ display: "flex" }}>
              <p>
                Premiums:{" "}
                <input
                  type="text"
                  style={{ width: "18rem" }}
                  name="premiums"
                  onChange={(e) => handleAssets(e)}
                  defaultValue={details.assets?.insurancePolicies[0].premiums}
                />
              </p>
              <p>
                per:{" "}
                <input
                  type="number"
                  style={{ width: "34rem" }}
                  name="per"
                  onChange={(e) => handleAssets(e)}
                  defaultValue={details.assets?.insurancePolicies[0].per}
                />
              </p>
            </div>

            <div className="mt-3" style={{ display: "flex" }}>
              <p>
                Owner-{" "}
                <input
                  type="text"
                  style={{ width: "18rem" }}
                  name="owner"
                  onChange={(e) => handleAssets(e)}
                  defaultValue={details.assets?.insurancePolicies[0].owner}
                />
              </p>
              <p>
                Beneficiary:{" "}
                <input
                  type="number"
                  style={{ width: "31.5rem" }}
                  name="beneficiary"
                  onChange={(e) => handleAssets(e)}
                  defaultValue={
                    details.assets?.insurancePolicies[0].beneficiary
                  }
                />
              </p>
            </div>
            <p className="mt-3">
              Cash Value:${" "}
              <input
                type="text"
                name="cashValue"
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.insurancePolicies[0].cashValue}
                style={{ width: "53.1rem" }}
              />
            </p>
          </div>
        </div>
        <p className="mt">
          Company:{" "}
          <input
            type="text"
            style={{ width: "55rem" }}
            name="company"
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.insurancePolicies[1].company}
          />
        </p>
        <div className="mt-3" style={{ display: "flex" }}>
          <p>
            Policy Number:{" "}
            <input
              type="number"
              style={{ width: "18rem" }}
              name="policyNumber"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[1].policyNumber}
            />
          </p>
          <p>
            Face Amount:{" "}
            <input
              type="number"
              style={{ width: "25.5rem" }}
              name="faceAmount"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[1].faceAmount}
            />
          </p>
        </div>
        <div className="mt-3" style={{ display: "flex" }}>
          <p>
            Premiums:{" "}
            <input
              type="text"
              style={{ width: "18rem" }}
              name="premiums"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[1].premiums}
            />
          </p>
          <p>
            per:{" "}
            <input
              type="number"
              style={{ width: "34rem" }}
              name="per"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[1].per}
            />
          </p>
        </div>

        <div className="mt-3" style={{ display: "flex" }}>
          <p>
            Owner-{" "}
            <input
              type="text"
              style={{ width: "18rem" }}
              name="owner"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[1].owner}
            />
          </p>
          <p>
            Beneficiary:{" "}
            <input
              type="number"
              style={{ width: "31.5rem" }}
              name="beneficiary"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[1].beneficiary}
            />
          </p>
        </div>
        <p className="mt-3">
          Cash Value:${" "}
          <input
            type="text"
            name="cashValue"
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.insurancePolicies[1].cashValue}
            style={{ width: "53.1rem" }}
          />
        </p>

        <div className="mt">
          <b style={{ width: "11rem", borderBottom: "1px solid black" }}>
            Safe Deposit Box:
          </b>
          <p className="mt-3">
            Location:{" "}
            <input
              type="text"
              style={{ width: "55.2rem" }}
              name="location"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.safeDepositBox.location}
            />
          </p>
          <p className="mt-3">
            Names on box:{" "}
            <input
              type="text"
              style={{ width: "51.9rem" }}
              name="namesOnBox"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.safeDepositBox.namesOnBox}
            />
          </p>
          <p className="mt-3">
            Who has the key?{" "}
            <input
              type="text"
              style={{ width: "50.2rem" }}
              name="whoHasTheKey"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.safeDepositBox.whoHasTheKey}
            />
          </p>
          <p className="mt-3">
            Contents:{" "}
            <input
              type="text"
              style={{ width: "55rem" }}
              name="contents"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.safeDepositBox.contents}
            />
          </p>
        </div>

        <p style={{ pageBreakAfter: "always" }}></p>
        <p style={{ pageBreakBefore: "always" }}></p>

        <div className="mt">
          <b style={{ width: "11rem", borderBottom: "2px solid black" }}>
            Bank Accounts
          </b>
          <p className="mt-4">
            Location:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              name="location"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[0].location}
            />{" "}
            Balance as of <input type="text" style={{ width: "15rem" }} />
            :${" "}
            <input
              type="text"
              style={{ width: "10.5rem" }}
              name="balanceAsOf"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[0].balanceAsOf}
            />
          </p>
          <p className="mt-4">
            In Whose Name:{" "}
            <input
              type="text"
              style={{ width: "51rem" }}
              name="inWhoseName"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[0].inWhoseName}
            />
          </p>
          <p className="mt-4">
            Who Has Passbook:{" "}
            <input
              type="text"
              style={{ width: "49rem" }}
              name="whoHasPassbook"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[0].WhohasPassbook}
            />
          </p>
          <p className="mt-4">
            Type of Account:{" "}
            <input
              type="text"
              style={{ width: "51rem" }}
              name="typeOfAccount"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[0].typeOfAccount}
            />
          </p>
          <p className="mt-4">
            How Funds Acquired:{" "}
            <input
              type="text"
              style={{ width: "49rem" }}
              name="howFundsAcquired"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[0].howFundsAcquired}
            />
          </p>

          <p className="mt">
            Location:{" "}
            <input
              type="text"
              style={{ width: "15.5rem" }}
              name="location"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[1].location}
            />{" "}
            Balance as of{" "}
            <input
              type="text"
              style={{ width: "15rem" }}
              name="balanceAsOf"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[1].balanceAsOf}
            />
            :$ <input type="text" style={{ width: "15rem" }} />
          </p>
          <p className="mt-4">
            In Whose Name:{" "}
            <input
              type="text"
              style={{ width: "51.2rem" }}
              name="inWhoseName"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[1].inWhoseName}
            />
          </p>
          <p className="mt-4">
            Who Has Passbook:{" "}
            <input
              type="text"
              style={{ width: "40rem" }}
              name="whoHasPassbook"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[1].WhohasPassbook}
            />
          </p>
          <p className="mt-4">
            Type of Account:{" "}
            <input
              type="text"
              style={{ width: "51.2rem" }}
              name="typeOfAccount"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[1].typeOfAccount}
            />
          </p>
          <p className="mt-4">
            How Funds Acquired:{" "}
            <input
              type="text"
              style={{ width: "48.5rem" }}
              name=" howFundsAcquired"
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[1].howFundsAcquired}
            />
          </p>
        </div>

        <div className="mt">
          <b style={{ borderBottom: "1px solid black", width: "15rem" }}>
            Other Assets in Possession of Client
          </b>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <p className="mt-4" style={{ textAlign: "center" }}>
                Description
              </p>
              <input
                type="text"
                style={{ width: "25rem" }}
                name="description"
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.otherAssetsInPossession[0].description
                }
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                style={{ width: "25rem" }}
                name="description"
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.otherAssetsInPossession[0].description
                }
              />
            </div>
            <div style={{ marginLeft: "50px" }}>
              <p style={{ textAlign: "center" }}>Estimated Value</p>
              <input
                type="text"
                style={{ width: "25rem" }}
                name="estimatedValue"
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.otherAssetsInPossession[0].estimatedValue
                }
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                style={{ width: "25rem" }}
                name="estimatedValue"
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.otherAssetsInPossession[0].estimatedValue
                }
              />
            </div>
          </div>
        </div>

        <div className="mt">
          <b style={{ borderBottom: "1px solid black", width: "15rem" }}>
            Client's Non-Marital Property
          </b>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <p className="mt-4" style={{ textAlign: "center" }}>
                Description
              </p>
              <input
                type="text"
                style={{ width: "25rem" }}
                name="description"
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.clientsNonMaritalProperty[0].description
                }
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                style={{ width: "25rem" }}
                name="description"
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.clientsNonMaritalProperty[0].description
                }
              />
            </div>
            <div style={{ marginLeft: "50px" }}>
              <p className="mt-4" style={{ textAlign: "center" }}>
                Estimated Value
              </p>
              <input
                type="text"
                style={{ width: "25rem" }}
                name="estimatedValue"
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.clientsNonMaritalProperty[0].estimatedValue
                }
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                name="estimatedValue"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.clientsNonMaritalProperty[0].estimatedValue
                }
              />
            </div>
          </div>
        </div>

        <div className="mt">
          <b style={{ borderBottom: "1px solid black", width: "11rem" }}>
            Pension Plans
          </b>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: " center",
            }}
          >
            <div>
              <input
                type="text"
                className="mt"
                name="description"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.pensionPlans[0].description}
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                name="description"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.pensionPlans[0].description}
              />
            </div>
            <div style={{ marginLeft: "50px" }}>
              <input
                type="text"
                style={{ width: "25rem" }}
                name="estimatedValue"
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.pensionPlans[0].estimatedValue}
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                style={{ width: "25rem" }}
                name="estimatedValue"
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.pensionPlans[0].estimatedValue}
              />
            </div>
          </div>
        </div>
        <hr style={{ border: " 1.5px solid black", marginTop: "4rem" }} />
        <p style={{ pageBreakAfter: "always" }}></p>
        <p style={{ pageBreakBefore: "always" }}></p>

        <div className="mt">
          <b>LIABILITIES</b>
          <p
            className="mt"
            style={{ textDecoration: "underline", width: "14rem" }}
          >
            Credit Card Debt
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p className="mt-2">To Whom Owed</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.toWhomOwed}
              />
            </div>

            <div>
              <p className="mt-2">For What?</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.forWhat}
              />
            </div>

            <div>
              <p className="mt-2">Monthly Payment</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.creditCardDebt.monthlyPayment
                }
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.creditCardDebt.monthlyPayment
                }
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.creditCardDebt.monthlyPayment
                }
              />
            </div>

            <div>
              <p className="mt-2">Balance as of...</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.balanceAsOf}
              />
            </div>
          </div>

          <p
            className="mt"
            style={{ textDecoration: "underline", width: "11rem" }}
          >
            Personal Loans:
          </p>
          <div style={{ display: "flex", justifyContent: " space-between" }}>
            <div>
              <p className="mt-2">To Whom Owed</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.toWhomOwed}
              />
            </div>

            <div>
              <p className="mt-2">For What?</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.forWhat}
              />
            </div>

            <div className="mt-2">
              <p>Monthly Payment</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.monthlyPayment}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.monthlyPayment}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.monthlyPayment}
              />
            </div>

            <div>
              <p className="mt-2">Balance as of...</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.balanceAsOf}
              />
            </div>
          </div>

          <p
            className="mt"
            style={{ textDecoration: "underline", width: "12rem" }}
          >
            Automobile Loans:
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p className="mt-2">To Whom Owed</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.toWhomOwed}
              />
            </div>

            <div>
              <p className="mt-2">For What?</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.forWhat}
              />
            </div>

            <div>
              <p className="mt-2">Monthly Payment</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.automobileLoans.monthlyPayment
                }
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.automobileLoans.monthlyPayment
                }
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.automobileLoans.monthlyPayment
                }
              />
            </div>

            <div>
              <p className="mt-2">Balance as of...</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.balanceAsOf}
              />
            </div>
          </div>
        </div>
        <p
          className="mt"
          style={{ textDecoration: "underline", width: "30rem" }}
        >
          Mortgage Loans (Second Mortgage if Applicable)
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="mt-2">To Whom Owed</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.toWhomOwed}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.toWhomOwed}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.toWhomOwed}
            />
          </div>

          <div>
            <p className="mt-2">For What?</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.forWhat}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.forWhat}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.forWhat}
            />
          </div>

          <div>
            <p className="mt-2">Monthly Payment</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.monthlyPayment}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.monthlyPayment}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.monthlyPayment}
            />
          </div>

          <div>
            <p className="mt-2">Balance as of...</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.balanceAsOf}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.balanceAsOf}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.balanceAsOf}
            />
          </div>
        </div>

        <p
          className="mt"
          style={{ textDecoration: "underline", width: "10rem" }}
        >
          Other Debt:
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="mt-2">To Whom Owed</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.toWhomOwed}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.toWhomOwed}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.toWhomOwed}
            />
          </div>

          <div>
            <p className="mt-2">For What?</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.forWhat}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.forWhat}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.forWhat}
            />
          </div>

          <div>
            <p className="mt-2">Monthly Payment</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.monthlyPayment}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.monthlyPayment}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.monthlyPayment}
            />
          </div>

          <div>
            <p className="mt-2">Balance as of...</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.balanceAsOf}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.balanceAsOf}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.balanceAsOf}
            />
          </div>
        </div>

        <p className="mt-8" style={{ marginLeft: "20rem" }}>
          Total:{" "}
          <input
            type="text"
            style={{ width: "15rem" }}
            defaultValue={details.liabilities?.total.husband}
          />{" "}
          <input
            type="text"
            style={{ width: "15rem", marginLeft: "40px" }}
            onChange={(e) => handleLiabilities(e)}
            defaultValue={details.liabilities?.total.wife}
          />
        </p>

        <p style={{ pageBreakAfter: "always" }}></p>
        <p style={{ pageBreakBefore: "always" }}></p>

        <hr style={{ border: "1.5px solid black", marginTop: " 4rem" }} />

        <b className="mt">ISSUES TO ADDRESS:</b>

        <div
          className="mt"
          style={{
            display: " flex",
            justifyContent: "space-between",
            width: "55rem",
          }}
        >
          <p>Maiden name restored: </p>
          <p> Y/N </p>
          <p>
            {" "}
            Maiden Name:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              onChange={(e) => handleIssuesToAddress(e)}
              defaultValue={
                details.issuesToAddress?.maidenNameRestored.maidenName
              }
            />{" "}
          </p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "25rem",
          }}
        >
          <p>Custody: </p>
          <p>JOINT</p>
          <p>H</p>
          <p>W</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: " flex",
            justifyContent: " space-between",
            width: "25rem",
          }}
        >
          <p>Physical Custody: </p>
          <p>H</p>
          <p>W</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: " flex",
            justifyContent: " space-between",
            width: "55rem",
          }}
        >
          <p>Maintenance: </p>
          <p>Y</p>
          <p>N</p>
          <p>
            how much ${" "}
            <input
              type="text"
              style={{ width: "11rem" }}
              onChange={(e) => handleIssuesToAddress(e)}
              defaultValue={details.issuesToAddress?.maintenance.howMuch}
            />
          </p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: " flex",
            justifyContent: " space-between",
            width: "69rem",
          }}
        >
          <p>Child Support: </p>
          <p>Y</p>
          <p>N</p>
          <p>
            how much ${" "}
            <input
              type="text"
              style={{ width: "11rem" }}
              onChange={(e) => handleIssuesToAddress(e)}
              defaultValue={details.issuesToAddress?.childSupport.howMuch}
            />
            deviate from statute:Y/N
          </p>
        </div>
        <br />
        <p>Attorney Fees:</p>
        <div
          className="mt"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "30rem",
            marginLeft: "20rem",
          }}
        >
          <p>Interim/Final: </p>
          <p>H</p>
          <p>W</p>
          <p>Each party pays own</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "25rem",
            marginLeft: "20rem",
          }}
        >
          <p>Petition for fees?: </p>
          <p>Y</p>
          <p>N</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: " flex",
            justifyContent: "space-between",
            width: "29rem",
          }}
        >
          <p>Dissipation: </p>
          <p>Y</p>
          <p>N</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "65rem",
          }}
        >
          <p>Exclusive possession of marital residence: </p>
          <p>Y</p>
          <p>N</p>
          <p>for</p>
          <p>H</p>
          <p>W</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "30rem",
          }}
        >
          <p>File Counter-Petition: </p>
          <p>Y</p>
          <p>N</p>
        </div>

        <hr style={{ border: " 1.5px solid black", marginTop: " 4rem" }} />
        <p style={{ pageBreakAfter: "always" }}></p>
        <p style={{ pageBreakBefore: "always" }}></p>

        <div className="mt" style={{ width: "80%", margin: "auto" }}>
          <b className="mt w-full text-lg block text-center ">
            SETTLEMENT NOTES
          </b>
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[0]}
          />

          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[1]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[2]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[3]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[4]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[5]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[6]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[7]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[8]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[9]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[10]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[11]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[12]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[13]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[14]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[15]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[16]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[17]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[18]}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes[19]}
          />
        </div>
        <div
          style={{
            width: "9%",
            margin: "auto",
            marginTop: "24px",
            height: "40px",
          }}
        >
          <button
            style={{
              backgroundColor: " rgb(62, 62, 170)",
              color: "white",
              padding: "4px",
              paddingLeft: "30px",
              paddingRight: "30px",
              cursor: "pointer",
              borderRadius: "30%",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
