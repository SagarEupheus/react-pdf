import React from "react";
// import { Page, Text, Image, Document, StyleSheet } from "react-pdf";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  //   section: {
  //     margin: 10,
  //     padding: 10,
  //     flexGrow: 1,
  //   },
});

const Reactpdf = () => {
  return (
    <>
      <Document className="pl-[35%]">
        <Page size="A4" style={styles.page}>
          <View>
            <Text style={{ textDecoration: "underline", padding: "auto" }}>
              CUSTOMER REGISTRATION FORM AND AGREEMENT
            </Text>
            <View className="flex">
              <Text className=" pl-[25%] mt-4">
                No.: &nbsp; _________________
              </Text>
              <Text className=" pl-[20%] mt-4">
                Date: &nbsp; _________________
              </Text>
              <div className="w-[120px] ml-20 mt-2 h-[35px] border-[1px] border-black">
                <span className="text-[13px] text-center">
                  2022-23 To 2024-25
                </span>
              </div>
            </View>
          </View>
          {/* 1 */}
          <View>
            <div className="w-[770px] bg-slate-200 ml-[25%] h-[40vh] border-[1px] mt-2 border-[black] p-[15px]">
              <Text className="font-bold text-[12px] pl-2">
                Name of Party/ School*:
              </Text>
              <Text className="text-[13px] text-[red] underline">
                ABC BOOK SHOP PRIVATE LIMITED{" "}
                <span className="text-[black] absolute top-[94.5px]">
                  __________________________________________________________________{" "}
                </span>
              </Text>{" "}
              <br />
              <Text className="text-[12px] text-[black] pl-2 ">
                Status*: Sole Proprietary/ Partnership/ LLP/Pvt. Ltd. / Public
                Ltd. /Trust:{" "}
                <span className="text-[red] underline">PVT LTD</span>{" "}
                <span className="text-[black] absolute top-[120px]">
                  _______________________________________________________
                </span>
              </Text>{" "}
              <br />
              <Text className="text-[13px] text-[black] pl-2 ">
                Address*:{" "}
                <span className="text-[red] underline">
                  B-2345 AMAR COLONY LAJPAT NAGAR{" "}
                </span>{" "}
                <span className="text-[black] absolute top-[142px]">
                  ____________________________________________________________________________
                </span>
              </Text>
              <br />
              <Text className="text-[13px] text-[black] pl-2 ">
                City*: <span className="text-[red] underline">NEW DELHI </span>
                <span className="text-[black] absolute top-[166.3px]">
                  __________________
                </span>
                <span className="ml-[120px] underline pl-10">State*:</span>
                <span className="text-[red] underline">DELHI </span>
                <span className="text-[black] absolute top-[166.3px]">
                  __________________
                </span>
                <span className="ml-[120px] underline">Pin Code*:</span>
                <span className="text-[red] underline">110016 </span>{" "}
                <span className="text-[black] absolute top-[166.3px]">
                  __________________
                </span>
              </Text>{" "}
              <br />
              <Text className="text-[13px] text-[black] pl-2 ">
                Phone*:{" "}
                <span className="text-[red] underline">011- 12345678 </span>
                {/* <span className="text-[black] absolute top-[191.3px]">__________________</span> */}
                <span className="text-[black] absolute top-[191.3px]">
                  __________________
                </span>
                <span className="ml-[120px] underline">Mobile*:</span>
                <span className="text-[red] underline">999999999 </span>
                <span className="text-[black] absolute top-[191.3px]">
                  __________________
                </span>
                <span className="ml-[120px] underline">E-Mail*:</span>
                <span className="text-[red] underline">
                  abcbook@gmail.com{" "}
                </span>{" "}
                <span className="text-[black] absolute top-[191.3px]">
                  ______
                </span>
              </Text>{" "}
              <br />
              <Text className="text-[13px] text-[black] pl-2 ">
                Firm/ Company/Trust Registration Number*:{" "}
                <span className="text-[red] underline">
                  U33220DL2011PTC00234{" "}
                </span>
                <span className="text-[black] absolute top-[215.3px]">
                  __________________
                </span>
                <span className="text-[black] absolute top-[215.3px]">
                  __________________
                </span>
                <span className="ml-[120px] underline"> Dated:</span>
                <span className="text-[red] underline"> 13-10-2021 </span>
                <span className="text-[black] absolute top-[215.3px]">
                  __________________
                </span>
                {/* <span className="text-[black] absolute top-[181.3px]">__________________</span><span className="ml-[120px] underline">E-Mail*:</span><span className="text-[red] underline">abcbook@gmail.com </span> <span className="text-[black] absolute top-[181.3px]">______</span> */}
              </Text>{" "}
              <br />
              <Text className="text-[13px] text-[black] pl-2 ">
                PAN No*:{" "}
                <span className="text-[red] underline">AAACA1234D </span>
                {/* <span className="text-[black] absolute top-[205.3px]">__________________</span> */}
                <span className="text-[black] absolute top-[239.1px]">
                  __________________
                </span>
                <span className="ml-[120px] underline">
                  {" "}
                  ( Copy Enclosed ) GST. No*:
                </span>
                <span className="text-[red] underline">
                  {" "}
                  GSTIN AAACA1234DIZL{" "}
                </span>
                <span className="text-[black] absolute top-[239.1px]">
                  __________________
                </span>
                {/* <span className="text-[black] absolute top-[181.3px]">__________________</span><span className="ml-[120px] underline">E-Mail*:</span><span className="text-[red] underline">abcbook@gmail.com </span> <span className="text-[black] absolute top-[181.3px]">______</span> */}
              </Text>{" "}
              <br />
              <Text className="text-[13px] text-[black] pl-2 ">
                {" "}
                <span className="text-[black] font-bold underline">
                  (Copy enclosed or in case if not registered with GST then
                  furnish declaration in Annexure-B){" "}
                </span>
                {/* <span className="text-[black] absolute top-[181.3px]">__________________</span><span className="ml-[120px] underline">E-Mail*:</span><span className="text-[red] underline">abcbook@gmail.com </span> <span className="text-[black] absolute top-[181.3px]">______</span> */}
              </Text>{" "}
              <br />
              <Text className="text-[13px] text-[black] pl-2 ">
                Year of establishment of business:{" "}
                <span className="text-[red] underline">2011 </span>
                <span className="text-[black] absolute top-[287.3px]">
                  __________________________________________
                </span>
                {/* <span className="ml-[120px] underline">E-Mail*:</span><span className="text-[red] underline">abcbook@gmail.com </span> <span className="text-[black] absolute top-[181.3px]">______</span> */}
              </Text>
            </div>
          </View>
          {/* 2 */}
          <View>
            <div className="w-[770px] bg-slate-200 ml-[25%] h-[25vh] border-[1px] mt-2 border-[black] p-[15px]">
              <Text className="font-bold text-[12px] pl-2">
                Name of Proprietor/Partner/Director/Trustee*:
              </Text>
              <Text className="text-[13px] text-[red] underline">
                SUSHIL KUMAR SHARMA{" "}
                <span className="text-[black] absolute top-[346px]">
                  ______________________________________________________{" "}
                </span>
              </Text>{" "}
              <br />
              <Text className="text-[12px] text-[black] pl-2 ">
                PAN No.*:{" "}
                <span className="text-[red] underline"> AAAPS1234H</span>{" "}
                <span className="text-[black] absolute top-[371px]">
                  _______________________________________________________
                </span>
              </Text>{" "}
              <br />
              <Text className="text-[13px] text-[black] pl-2 ">
                Address*:{" "}
                <span className="text-[red] underline mr-10">
                  C-18 NIRMAN VIHAR DELHI{" "}
                </span>
              </Text>
              <Text className="text-[13px] text-[black] no-underline pl-4 ">
                Pin Code*: <span className="text-[red] underline">110092 </span>
                <span className="text-[black] absolute top-[394px] left-[700px] ">
                  ______________________________
                </span>
                <br />
              </Text>{" "}
              <br />
              <Text className="text-[13px] text-[black] pl-2 ">
                Phone*:{" "}
                <span className="text-[red] underline mr-4">
                  011-432123456{" "}
                </span>
                <span className="ml-[60px] no-underline">Mobile*:</span>
                <span className="text-[red] underline">991100001234 </span>{" "}
                <span className="text-[black] absolute top-[442px] ">
                  __________
                </span>
                <span className="ml-[120px] no-underline">E-Mail*:</span>
                <span className="text-[red] underline">
                  SKHARAMA@GMAIL.COM{" "}
                </span>{" "}
                <span className="text-[black] absolute top-[442px] ">
                  _____
                </span>
                {/* <span className="text-[black] absolute top-[394px] ">______________________________________________________</span> */}
              </Text>
            </div>
          </View>
          {/* 3 */}
          <View>
            <div className="w-[770px] bg-slate-200 ml-[25%] h-[25vh] border-[1px] mt-2 border-[black] p-[15px]  ">
              <Text className="font-bold text-[12px] pl-2">
                Name of other Publishers/Suppliers from whom the party has
                credit facilities:
              </Text>

              <Text className="text-[13px] text-[black] block mt-2   ml-[40px]">
                1.
                <span className="text-[red] ml-[40px] underline top-[546px]">
                  S CHAND &COM{" "}
                </span>
                <span className="text-[black] absolute right-[310px] top-[531px]">
                  Annual Business:{" "}
                </span>
                <span className="text-[red] absolute top-[531px] right-[245px] underline">
                  50 LAKHS{" "}
                </span>
              </Text>

              <Text className="text-[13px] text-[black] block mt-2 ml-[40px] ">
                2.
                <span className="text-[red] ml-[40px] underline top-[562px]">
                  RANTA SAGAR{" "}
                </span>
                <span className="text-[black] absolute right-[310px] top-[562px]">
                  Annual Business:{" "}
                </span>
                <span className="text-[red] absolute top-[562px] right-[245px] underline">
                  30 LAKHS{" "}
                </span>
              </Text>

              <Text className="text-[13px] text-[black] block mt-2  ml-[40px]">
                3.
                <span className="text-[red] ml-[40px] underline top-[594px]">
                  HEADWAORD{" "}
                </span>
                <span className="text-[black] absolute right-[310px] top-[594px]">
                  Annual Business:{" "}
                </span>
                <span className="text-[red] absolute top-[594px] right-[245px] underline">
                  15 LAKHS{" "}
                </span>
              </Text>
            </div>
          </View>
          {/* 4 */}
          <View>
            <div className="w-[770px] bg-slate-200 ml-[25%] h-[40vh] border-[1px] mt-2 border-[black] p-[15px]">
              <Text className="font-bold text-[12px] pl-2">
                Name and address of the party’s main bankers*
              </Text>
              <Text className="text-[13px] text-[red] underline ">
                : HDFC BANK LTD- MOHAN ESTATE BRANCH
                <br />
                &nbsp; MAIN MATHURA ROAD NEW DELHI-110044{" "}
              </Text>{" "}
              <br />
              <Text className="text-[13px] mt-2 text-[black] ml-2 ">
                Account Number*:
              </Text>{" "}
              <Text className="text-[13px] text-[red] underline ">
                5120000001234567
              </Text>{" "}
              <Text className="text-[13px] text-[black]  ml-10">
                Type of A/c (SB/CA/CC)
              </Text>{" "}
              <Text className="text-[13px] text-[red] underline  ">CA</Text>
              <br />
              <Text className="text-[13px] text-[black]  ml-2  mt-4 mr-2">
                IFSC*:
              </Text>{" "}
              <Text className="text-[13px]  text-[red] underline  ">
                HDFC000011
              </Text>{" "}
              <Text className="text-[13px] text-[black] block ml-2  mt-4 mr-2">
                Detail of Cheques*:
              </Text>{" "}
              <Text className="text-[13px] text-[black] block mt-2   ml-[40px]">
                1.
                <span className="text-[black] ml-[10px] top-[826px]">
                  Cheque No.:
                </span>
                <span className="text-[red] ml-[10px] underline top-[826px]">
                  123451
                </span>
                <span className="text-[black] absolute right-[550px] top-[803px]">
                  Bank
                </span>
                <span className="text-[red] absolute top-[803px] right-[446px] underline">
                  HDFC BANK LTD
                </span>
                <span className="text-[black] absolute right-[300px] top-[803px]">
                  Branch/IFSC
                </span>
                <span className="text-[red] absolute top-[803px] right-[215px] underline">
                  HDFC000011
                </span>
              </Text>
              <Text className="text-[13px] text-[black] block mt-2 ml-[40px]">
                2.
                <span className="text-[black] ml-[10px] top-[826px]">
                  Cheque No.:
                </span>
                <span className="text-[red] ml-[10px] underline top-[832px]">
                  123451
                </span>
                <span className="text-[black] absolute right-[550px] top-[832px]">
                  Bank
                </span>
                <span className="text-[red] absolute top-[832px] right-[446px] underline">
                  HDFC BANK LTD
                </span>
                <span className="text-[black] absolute right-[300px] top-[832px]">
                  Branch/IFSC
                </span>
                <span className="text-[red] absolute top-[832px] right-[215px] underline">
                  HDFC000011
                </span>
              </Text>
              <Text className="text-[13px] text-[black] block mt-2   ml-[40px]">
                3.
                <span className="text-[black] ml-[10px] top-[858px]">
                  Cheque No.:
                </span>
                <span className="text-[red] ml-[10px] underline top-[858px]">
                  123451
                </span>
                <span className="text-[black] absolute right-[550px] top-[858px]">
                  Bank
                </span>
                <span className="text-[red] absolute top-[858px] right-[446px] underline">
                  HDFC BANK LTD
                </span>
                <span className="text-[black] absolute right-[300px] top-[858px]">
                  Branch/IFSC
                </span>
                <span className="text-[red] absolute top-[858px] right-[215px] underline">
                  HDFC000011
                </span>
              </Text>
            </div>
            <hr className="h-[2px] border-none bg-[#808080] mt-6 mb-4 w-100" />
          </View>
        </Page>
        <Page wrap={false}>
          <View wrap={false}>
            <br />
            <div className="flex justify-center items-center">
              <span className="text-[black] absolute top-[858px] right-[168px]  text-[13px] mt-[110px] ">
                <span className="ml-[170px] ">
                  Proficiency Learning Solutions Private Limited
                </span>
                <br />
                A-12, 2nd Floor, Mohan Cooperative Industrial Estate, Main
                Mathura Road, New Delhi – 110044. Phone: +91-11-61400200
                <br />
                <span>
                  <a
                    href="www.eupheus.in"
                    target="blank"
                    className="text-[blue] ml-[260px]  underline"
                  >
                    www.eupheus.in
                  </a>
                </span>
              </span>
            </div>

            <br />
            <Text
              wrap="false"
              className=" absolute underline top-[1050px] ml-[42%] mb-5"
            >
              Agreement for supply of Educational Books
            </Text>
            <br />
            <br />
            <Text
              wrap={false}
              className="absolute top-[1100px] text-[13px] mx-[100px] "
            >
              THIS AGREEMENT is made on this ___04 TH___ day of
              __APRIL___________, 2022 , by and between Proficiency Learning
              Solutions Pvt. Ltd., company incorporated and registered under the
              Companies Act, 2013 with its registered office located at 5th
              Floor, Cabin No 3, Right side at Plot No E-196, Phase 8B, Mohali,
              Mohali, Punjab, India, 160020 through Mr Ram kumar Hereinafter
              referred to as “Eupheus”) which expression shall unless repugnant
              to the context means and include its successors and assigns of the
              ONE PART
            </Text>

            <br />
            <Text className="absolute top-[1200px] text-[13px] ml-[50%] ">
              And
            </Text>
            <Text className="absolute top-[1250px] text-[13px] mx-[100px] ">
              _ ABC BOOK SHOP PRIVATE LIMITED _________________ (the
              "Distributor"), with its principal place of business located at _
              B-2345 AMAR COLONY LAJPAT NAGAR ___NEW DELHI 110024_ through MR
              SUSHIL KUMAR SHARMA which expression shall unless repugnant to the
              context or meaning thereof, include its successors and permitted
              assigns, through its Authorized Signatory, on the OTHER PART.
            </Text>
            <Text className="absolute top-[1350px] text-[14px] mx-[100px] ">
              Eupheus and ABC BOOK SHOP PRIVATE LIMITED shall collectively be
              referred to as “Parties” and individually as “Party” wherever the
              context permits.
            </Text>
            <br />
            <Text className="absolute top-[1430px] text-[14px] mx-[100px] ">
              NOW, THEREFORE, in consideration of the promises hereinafter made
              by the parties hereto, it is agreed as follows:
            </Text>
            <Text className="absolute top-[1500px] text-[14px] mx-[100px] ">
              <span>1. </span>{" "}
              <span>
                Credit Limit. Distributer shall be entitled to a maximum annual
                Credit Limit of Rs.10 LAKHS_(Rupees _TEN LAKHS during the term
                of this agreement.{" "}
              </span>
            </Text>
            <Text className="absolute top-[1530px] text-[14px] mx-[100px] ">
              <span>2. </span>{" "}
              <span>
                Payment Process. The Distributor is required to pay 60% of the
                total invoiced amount, within 90 Calendar Days from the date of
                invoice and balance payment of 40% within 120 Calendar Days from
                the date of Invoice. Payment shall be made via interbank
                transfer to Eupheus account at a bank designated by Eupheus or
                by Demand Draft.
              </span>
            </Text>
            <Text className="absolute top-[1600px] text-[14px] mx-[100px] ">
              <span>3. </span>{" "}
              <span>
                Discount. The Distributor shall be entitled to discount(s) on
                the products as per Annexure – 1, which shall be applicable in
                the event the payment is received as per the following Clause 2
                above and such Turnover discount shall be applicable on Net
                Business i.e. Net Business would mean sales value as per invoice
                less discounts allowed/applied and adjusting the value of
                Returns as per Eupheus’ credit note.
              </span>
            </Text>
            <Text className="absolute top-[1680px] text-[14px] mx-[100px] ">
              <span>4. </span>{" "}
              <span>
                Cost of Delivery. Unless otherwise agreed between the Parties
                herein, Eupheus shall notbe responsible for all shipping cost,
                including freight and domestic transportation charges.
              </span>
            </Text>
            <Text className="absolute top-[1730px] text-[14px] mx-[100px] ">
              <span>5. </span>{" "}
              <span>
                Risk of Loss. Title, risk of loss, theft and damage shall pass
                to Distributor upon delivery of Product to the carrier, whether
                appointed by the Distributor.
              </span>
            </Text>
            <Text className="absolute top-[1760px] text-[14px] mx-[100px] ">
              <span>6. </span>{" "}
              <span>
                Defective Products. In the event that the Product is found to be
                defective Distributor shall promptly notify Eupheus through
                e-mail or post of the existence of such Defect in the Product
                within three (3) Calendar days of acceptance of the Products.
                Both Distributor and Eupheus shall, in good faith, work to
                resolve the problem. After Eupheus determines that the product
                is defective and cannot be remedied without having such
                Defective Product shipped back to Eupheus, Eupheus will ship a
                replacement for the Defective Product within a reasonable time
                and Distributor shall, upon notice of shipment by Eupheus,
                exchange the Defective Product with the different product.
              </span>
            </Text>
            <Text className="absolute top-[1880px] text-[14px] mx-[100px] ">
              <span>7. </span>{" "}
              <span>
                Return Policy. The unsold books once delivered may be returned
                to Eupheus by the Distributor subject to the following
                conditions:
              </span>
              <br />
              <span className="ml-4">
                (a){" "}
                <span>
                  A maximum 10 % (ten percent) of invoiced value will be allowed
                  to be returned if unutilized (“Returns”) quantity at any given
                  point of time.
                </span>
              </span>
              <br />
              <span className="ml-4">
                (b){" "}
                <span>
                  The returned books shall not be utilized or used by any person
                  and are in good condition, meaning thereby that the books
                  shall not be torn or dirty or any scribbled marks or pen marks
                  or bound or damaged or otherwise in such condition that the
                  books are unfit for resale by Eupheus.{" "}
                </span>
              </span>
              <br />
              <span className="ml-4">
                (c){" "}
                <span>
                  Such returns need to be notified by the Distributor through
                  e-mail or post.{" "}
                </span>
              </span>
              <br />
              <span className="ml-4">
                (d){" "}
                <span>
                  Such return of books shall be delivered by the Distributor
                  with reasonable care to the warehouse/Clearing & Forwarding
                  Agent of Eupheus, details of which shall be provided by
                  Eupheus, within 180 days of date of delivery and in no case
                  later than 31st August of the year in which such books were
                  invoiced/ supplied.
                </span>
              </span>
              <span className="ml-4">
                (e){" "}
                <span>
                  The liability of expenses incurred by the Distributor for such
                  return of books shall be of the Distributor and in no way such
                  expenses shall be reimbursed to the Distributor by Eupheus.
                </span>
              </span>
              <br />
              <span className="ml-4">
                (f){" "}
                <span>
                  Any additional/special discount(s) applied at the time of sale
                  shall be adjusted for the return of books and credit note will
                  be calculated accordingly.
                </span>
              </span>
              <hr className="h-[2px] border-none bg-[#808080] mt-6 mb-5 w-100" />
              <span className="text-[black] absolute top-[255px] right-[168px]  text-[13px]">
                <span className="ml-[35%] ">
                  Proficiency Learning Solutions Private Limited
                </span>
                <br />
                A-12, 2nd Floor, Mohan Cooperative Industrial Estate, Main
                Mathura Road, New Delhi – 110044. Phone: +91-11-61400200
                <br />
                <span>
                  <a
                    href="www.eupheus.in"
                    target="blank"
                    className="text-[blue] ml-[280px]  underline"
                  >
                    www.eupheus.in
                  </a>
                </span>
              </span>
            </Text>
          </View>
        </Page>
        <br />
        <Page wrap="false" className="relative top-[1100px]">
          <View wrap="false ">
            <br /> <br />
            <div className="mx-[10%]">
              <Text className=" top-[160px] text-[14px]  ">
                <span>8. </span>{" "}
                <span>
                  Trust Relationship: The products supplied by Eupheus to the
                  Distributor till the receipt of full payment by Eupheus shall
                  be held under trust by the Distributor and returnable on
                  simple demand by Eupheus through a written notice. Distributor
                  agrees to issue 2 (two) cheques as security as mentioned in
                  the account opening form. In case the Customer changes its
                  bank account or there is any notification by the bank /
                  Reserve Bank of India requiring the changes in the cheques,
                  from time to time, the Customer shall be obligated to change
                  the security cheques given at the time of opening the account.
                  In case Customer makes a default in making the payment or
                  adhere to any term or condition of this Agreement, Eupheus
                  will have the right to present any of the security cheque for
                  realization of its dues without any obligation of informing
                  the Customer. No Stock will be issued by Customer to any
                  employee of Eupheus or transferred to any other third party
                  under any condition whatsoever without the written
                  authorization of undersigned or Managing Director / CFO of
                  Eupheus.
                </span>
              </Text>
              <br />
              <br />
              <Text className=" top-[160px] text-[14px]  ">
                <span>9. </span>{" "}
                <span>
                  Non Disclosure: Each party shall protect the other's
                  Confidential Information from unauthorized dissemination and
                  use the same degree of care that such party uses to protect
                  its own information. Neither party shall disclose to third
                  parties the other's Confidential Information without the prior
                  written consent of the other party. Neither party shall use
                  the other's Confidential Information for purposes other than
                  those necessary to directly further the purposes of this
                  Agreement. Each employee or agent of the Distributor,
                  performing duties hereunder, shall be made aware of this
                  Agreement and said employee or agent of the Distributor is
                  bound to the same level of confidentiality contained herein.
                </span>
              </Text>
              <br />
              <br />
              <Text className=" top-[160px] text-[14px]  ">
                <span>10. </span>{" "}
                <span>
                  Termination of Agreement: The term of this Agreement shall be
                  for from the date of signing of this Agreement unless sooner
                  terminated to 31st March 2025. Following such Initial Term,
                  this Agreement can be renewed for successive three (3) year on
                  mutual agreement on the same terms or amended terms, unless
                  either party notifies the other in writing of an intention not
                  to renew the Agreement. Termination shall not relieve either
                  party of obligations incurred prior thereto. This Agreement
                  may be terminated under the following stipulations without
                  exception under any circumstances:
                </span>{" "}
                <br />
                <span className="ml-4">
                  (a){" "}
                  <span>
                    by the Distributor at anytime upon ninety (90) days written
                    notice to Eupheus citing the reason.
                  </span>
                </span>
                <br />
                <span className="ml-4">
                  (b){" "}
                  <span>
                  by Eupheus upon ninety (90) days written notice to the Distributor citing the reason. 
                  </span>
                </span>
                <br />
                <span className="ml-4">
                  (c){" "}
                  <span>
                  by Eupheus upon ninety (90) days written notice to the Distributor in the event of the 
Distributor’s involvement in voluntary or involuntary bankruptcy proceedings under 
the Bankruptcy Laws of India; 
                  </span>
                </span>
                <br />
              </Text>
              <Text className=" top-[160px] text-[14px]  ">
                <span>11. </span>{" "}
                <span>
                Relationship between the Parties: The relationship between the parties established by this 
Agreement shall be solely that of supplier and distributor and all rights and powers not 
expressly granted to the Distributor are expressly reserved to Eupheus. The Distributor 
shall have no right, power or authority in any way to bind Eupheus for the fulfillment of any 
condition not herein contained, or to any contract or obligation, expressed or implied. 
                </span>
              </Text>
              <Text className=" top-[160px] text-[14px]  ">
                <span>12. </span>{" "}
                <span>
                Severability: The invalidity or unenforceability of any provisions of this Agreement shall not 
affect validity or enforceability of any other provision of this Agreement, which shall remain 
in full force and effect. 
                </span>
              </Text>
              <Text className=" top-[160px] text-[14px]  ">
                <span>13. </span>{" "}
                <span>
                Amendments: No change or modification of this Agreement will be valid unless it is in 
writing and signed by each party to this Agreement. 
                </span>
              </Text>
              <Text className=" top-[160px] text-[14px]  ">
                <span>14. </span>{" "}
                <span>
                Applicable Law: This Agreement shall be governed by Laws of India and the courts of Delhi 
shall have exclusive jurisdiction. 
                </span>
              </Text>
              <Text className=" top-[160px] text-[14px]  ">
                <span>15. </span>{" "}
                <span>
                Resolution of Disputes: Any dispute/claims arising out of or in connection with this 
contract, including any question regarding its existence, validity or termination shall be first 
tried by negotiation between the parties by their authorised representatives within fourteen 
(14) days after one party delivers a written request with details of disputes/claims for a 
meeting to the other party. If after such meeting, the parties have not succeeded in 

                </span>
              </Text>
              <hr className="h-[2px] border-none bg-[#808080] mt-6 mb-4 w-100" />
              <div className="flex justify-center items-center">
              <span className="text-[black] absolute top-[758px] right-[168px]  text-[13px] mt-[110px] ">
                <span className="ml-[170px] ">
                  Proficiency Learning Solutions Private Limited
                </span>
                <br />
                A-12, 2nd Floor, Mohan Cooperative Industrial Estate, Main
                Mathura Road, New Delhi – 110044. Phone: +91-11-61400200
                <br />
                <span>
                  <a
                    href="www.eupheus.in"
                    target="blank"
                    className="text-[blue] ml-[260px]  underline"
                  >
                    www.eupheus.in
                  </a>
                </span>
              </span>
            </div>
            </div>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default Reactpdf;
