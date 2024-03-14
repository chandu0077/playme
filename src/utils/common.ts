// import { RegisFormFieldNames } from "@/constants/registration-form";
// import { HiringFormFieldNames } from "@/constants/hiring-form";
// import { MentorFormFieldNames } from "@/constants/mentors";

// export const getPlaceholderText = (fieldName: string) => {
//   switch (fieldName) {
//     case RegisFormFieldNames.fullName:
//       return "Full Name*";
//     case RegisFormFieldNames.email:
//       return "Email*";
//     case RegisFormFieldNames.phone:
//       return "Phone number*";
//     case RegisFormFieldNames.program:
//       return "Course*";
//     case RegisFormFieldNames.highestDegree:
//       return "Highest Qualification*";
//     case RegisFormFieldNames.highestDegreeOther:
//       return "Please specify*";
//     case RegisFormFieldNames.yearOfCompletion:
//       return "Year of graduation*";
//     case RegisFormFieldNames.referralCode:
//       return "Referral Code";
//     case HiringFormFieldNames.companyLinkedinPage:
//       return "Company Linkedin Page";
//     case MentorFormFieldNames.role:
//       return "Role";
//     case MentorFormFieldNames.resume:
//       return "Resume";
//     case RegisFormFieldNames.message:
//       return "Write your message here*";
//   }
// };

// export function getCookie(cookieName: string) {
//   const name = cookieName + "=";
//   const cDecoded = decodeURIComponent(document.cookie); //to be careful
//   const cArr = cDecoded.split("; ");
//   let res;
//   cArr.forEach((val) => {
//     if (val.indexOf(name) === 0) res = val.substring(name.length);
//   });
//   return res;
// }
