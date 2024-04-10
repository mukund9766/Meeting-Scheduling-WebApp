import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const MeetingForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("09:00");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState([]);
  const [meetingType, setMeetingType] = useState("");
  const [interests, setInterests] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests([e.target.value]);
  };

  const handleMeetingTypeChange = (e) => {
    setMeetingType(e.target.value);
  };

  const handleInterestsChange = (e) => {
    setInterests(e.target.value);
  };

  const handleScheduleEvent = () => {
    // Perform scheduling logic here
    console.log({
      date: selectedDate,
      time: selectedTime,
      name,
      email,
      guests,
      meetingType,
    });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Fibery Demo</h2>
      <div className="flex items-center mb-4">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="text-blue-500 text-4xl mr-4"
        />
        <p>45 min</p>
      </div>
      <p className="mb-4">
        Book a meeting with our Fibery team. Talk to a real person about how to
        get your processes set up with us ✨ or not 🤷‍♂️
      </p>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Select a Date & Time
        </label>
        <div className="flex items-center">
          <input
            type="date"
            id="date"
            value={selectedDate.toISOString().split("T")[0]}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => handleTimeChange(e.target.value)}
            className="shadow appearance-none border rounded ml-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="guests" className="block text-gray-700 font-bold mb-2">
          Guests{" "}
          <FontAwesomeIcon icon={faUserGroup} className="text-blue-500 ml-2" />
        </label>
        <input
          type="text"
          id="guests"
          value={guests[0] || ""}
          onChange={handleGuestsChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Separate with commas"
        />
      </div>
      {/* <div className="mb-4">
        <label htmlFor="meeting-type" className="block text-gray-700 font-bold mb-2">
          I want Fibery to work for:
        </label>
        <div className="flex items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="meeting-type"
              value="myself"
              checked={meetingType === 'myself'}
              onChange={handleMeetingTypeChange}
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="ml-2">Myself</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              name="meeting-type"
              value="under-10"
              checked={meetingType === 'under-10'}
              onChange={handleMeetingTypeChange}
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="ml-2">&lt; 10 people</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              name="meeting-type"
              value="10-50"
              checked={meetingType === '10-50'}
              onChange={handleMeetingTypeChange}
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="ml-2">10-50 people</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              name="meeting-type"
              value="over-50"
              checked={meetingType === 'over-50'}
              onChange={handleMeetingTypeChange}
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="ml-2">&gt; 50 people</span>
          </label>
        </div>
      </div> */}

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          I want Fibery to work for:
        </label>
        <div className="flex flex-wrap">
          <label className="inline-flex items-center mr-4 mb-2">
            <input
              type="checkbox"
              name="meeting-type"
              value="myself"
              checked={meetingType.includes("myself")}
              onChange={handleMeetingTypeChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">Myself</span>
          </label>
          <label className="inline-flex items-center mr-4 mb-2">
            <input
              type="checkbox"
              name="meeting-type"
              value="under-10"
              checked={meetingType.includes("under-10")}
              onChange={handleMeetingTypeChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">&lt; 10 people</span>
          </label>
          <label className="inline-flex items-center mr-4 mb-2">
            <input
              type="checkbox"
              name="meeting-type"
              value="10-50"
              checked={meetingType.includes("10-50")}
              onChange={handleMeetingTypeChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">10-50 people</span>
          </label>
          <label className="inline-flex items-center mr-4 mb-2">
            <input
              type="checkbox"
              name="meeting-type"
              value="over-50"
              checked={meetingType.includes("over-50")}
              onChange={handleMeetingTypeChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">&gt; 50 people</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          You are more about
        </label>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2">
            <p className="font-bold mb-2"> </p>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                name="interests"
                value="Leadership"
                checked={interests.includes("Leadership")}
                onChange={handleInterestsChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Leadership</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                name="interests"
                value="Consulting"
                checked={interests.includes("Consulting")}
                onChange={handleInterestsChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Consulting</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                name="interests"
                value="Product Management"
                checked={interests.includes("Product Management")}
                onChange={handleInterestsChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Product Management</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                name="interests"
                value="Design"
                checked={interests.includes("Design")}
                onChange={handleInterestsChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Design</span>
            </label>

            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                name="interests"
                value="Engineering"
                checked={interests.includes("Engineering")}
                onChange={handleInterestsChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Engineering</span>
            </label>

            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                name="interests"
                value="Sales"
                checked={interests.includes("Sales")}
                onChange={handleInterestsChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Sales</span>
            </label>

            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                name="interests"
                value="Marketing"
                checked={interests.includes("Marketing")}
                onChange={handleInterestsChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Marketing</span>
            </label>

            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                name="interests"
                value="Human Resource"
                checked={interests.includes("Human Resource")}
                onChange={handleInterestsChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Human Resource</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="additional-info"
          className="block text-gray-700 font-bold mb-2"
        >
          Please, share anything that will help prepare for our meeting
        </label>
        <textarea
          id="additional-info"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="fibery-workspace"
          className="block text-gray-700 font-bold mb-2"
        >
          Please, share with us the name of your Fibery workspace (if any)
        </label>
        <input
          type="text"
          id="fibery-workspace"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        onClick={handleScheduleEvent}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Schedule Event
      </button>
    </div>
  );
};

export default MeetingForm;


// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCalendarAlt,
//   faUser,
//   faCalendarDays,
//   faUserGroup,
//   faCircleCheck,faRibbon,faClock,faEarthAmericas,
// } from "@fortawesome/free-solid-svg-icons";

// const MeetingSchedulingForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [guests, setGuests] = useState([]);
//   const [numPeople, setNumPeople] = useState("10-50 people");
//   const [interests, setInterests] = useState([]);
//   const [additionalInfo, setAdditionalInfo] = useState("");
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("09:00");
//   const [selectedTimezone, setSelectedTimezone] = useState(
//     "UK, Ireland, Lisbon Time"
//   );
//   const [isScheduled, setIsScheduled] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission and scheduling logic
//     console.log({
//       name,
//       email,
//       numPeople,
//       interests,
//       additionalInfo,
//       selectedDate,
//       selectedTime,
//       selectedTimezone,
//     });
//     setIsScheduled(true);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleGuestsChange = (e) => {
//     setGuests([e.target.value]);
//   };

//   if (isScheduled) {
//     return (
//       <section className="bg-gray-100 py-12">
//         <div className="container mx-auto flex justify-center">
//           <div className="bg-white shadow-md rounded-lg p-20 text-center">
//             <div className="flex items-center mb-4">
//               <FontAwesomeIcon
//                 icon={faCircleCheck}
//                 className="text-green-500 text-3xl mr-4"
//               />
//               <h2 className="text-3xl font-bold mb-2">You are scheduled</h2>
//             </div>

//             <p>A calendar invitation has been sent to your email address.</p>
//             <div className="mt-10 text-start bg-white shadow-md rounded-lg p-8">
//               {/* <h5 className="text-3xl font-bold mb-4">Fibery Demo</h5> */}
//               <p className=" font-bold mb-2">Fibery Demo :</p>
//               <div className="flex items-center mb-4">
//               <FontAwesomeIcon
//                 icon={faUser}
//                 className="text-green-500 text-3x2 mr-2"
//               />
//               <p className="text-gray-600">
//                 {name}
//               </p>
//               </div>

//               <div className="flex items-center mb-4">
//               <FontAwesomeIcon
//                 icon={faClock}
//                 className="text-green-500 text-3x2 mr-2"
//               />
//               <p className="text-gray-600">
//                 {selectedDate.toLocaleDateString()} at {selectedTime},{" "}
//               </p>
//               </div>

//               <div className="flex items-center mb-4">
//               <FontAwesomeIcon
//                 icon={faEarthAmericas}
//                 className="text-green-500 text-3x2 mr-2"
//               />
//               <p className="text-gray-600">{selectedTimezone}</p>
//               </div>

//               <div className="flex items-center mb-4">
//               <FontAwesomeIcon
//                 icon={faRibbon}
//                 className="text-green-500 text-3x2 mr-2"
//               />
//               <p className="text-gray-600">
//                 Web conferencing details to follow
//               </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="bg-gray-100 py-15">
//       <div className="bg-white shadow-md rounded-1g p-8">
//         <h2 className="text-3xl font-bold mb-8">Fibery Demo</h2>

//         <div className="flex items-center mb-4">
//           <FontAwesomeIcon
//             icon={faCalendarDays}
//             className="text-blue-500 text-4xl mr-4"
//           />
//           <p>45 min</p>
//         </div>
//         <p className="mb-4">
//           Book a meeting with our Fibery team. Talk to a real person about how
//           to get your processes set up with us ✨ or not 🤷‍♂️
//         </p>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="date" className="block font-bold mb-2">
//               Select a Date & Time
//             </label>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <Calendar
//                   onChange={setSelectedDate}
//                   value={selectedDate}
//                   className="border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="time" className="block font-bold mb-2">
//                   Time
//                 </label>
//                 <select
//                   id="time"
//                   value={selectedTime}
//                   onChange={(e) => setSelectedTime(e.target.value)}
//                   className="border rounded-md py-2 px-4 w-full"
//                 >
//                   <option value="09:00">09:00</option>
//                   <option value="09:30">09:30</option>
//                   <option value="10:00">10:00</option>
//                   <option value="10:30">10:30</option>
//                   <option value="11:00">11:00</option>
//                   <option value="11:30">11:30</option>
//                   <option value="12:00">12:00</option>
//                 </select>
//                 <label htmlFor="timezone" className="block font-bold mb-2 mt-4">
//                   Time zone
//                 </label>
//                 <select
//                   id="timezone"
//                   value={selectedTimezone}
//                   onChange={(e) => setSelectedTimezone(e.target.value)}
//                   className="border rounded-md py-2 px-4 w-full"
//                 >
//                   <option value="UK, Ireland, Lisbon Time">
//                     UK, Ireland, Lisbon Time
//                   </option>
//                   <option value="Eastern Time (US & Canada)">
//                     Eastern Time (US & Canada)
//                   </option>
//                   <option value="Pacific Time (US & Canada)">
//                     Pacific Time (US & Canada)
//                   </option>
//                   <option value="Central Time (US & Canada)">
//                     Central Time (US & Canada)
//                   </option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={handleNameChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={handleEmailChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="guests"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Guests{" "}
//               <FontAwesomeIcon
//                 icon={faUserGroup}
//                 className="text-blue-500 ml-2"
//               />
//             </label>
//             <input
//               type="text"
//               id="guests"
//               value={guests[0] || ""}
//               onChange={handleGuestsChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Separate with commas"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="numPeople" className="block font-bold mb-2">
//               I want Fibery to work for:
//             </label>
//             <select
//               id="numPeople"
//               value={numPeople}
//               onChange={(e) => setNumPeople(e.target.value)}
//               className="border rounded-md py-2 px-4 w-full"
//             >
//               <option value="myself">Myself</option>
//               <option value="less-than-10">{"< 10 people"}</option>
//               <option value="10-50">10-50 people</option>
//               <option value="more-than-50">50+ people</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block font-bold mb-2">You are more about:</label>
//             <div className="flex flex-col space-y-2">
//               <div>
//                 <input
//                   type="checkbox"
//                   id="interest-leadership"
//                   checked={interests.includes("leadership")}
//                   onChange={(e) =>
//                     setInterests((prevInterests) =>
//                       e.target.checked
//                         ? [...prevInterests, "leadership"]
//                         : prevInterests.filter((i) => i !== "leadership")
//                     )
//                   }
//                   className="mr-2"
//                 />
//                 <label htmlFor="interest-leadership">Leadership</label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="interest-Product Management"
//                   checked={interests.includes("Product Management")}
//                   onChange={(e) =>
//                     setInterests((prevInterests) =>
//                       e.target.checked
//                         ? [...prevInterests, "leadership"]
//                         : prevInterests.filter(
//                             (i) => i !== "Product Management"
//                           )
//                     )
//                   }
//                   className="mr-2"
//                 />
//                 <label htmlFor="interest-Product Management">
//                   Product Management
//                 </label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="interest-Consulting"
//                   checked={interests.includes("Consulting")}
//                   onChange={(e) =>
//                     setInterests((prevInterests) =>
//                       e.target.checked
//                         ? [...prevInterests, "Consulting"]
//                         : prevInterests.filter((i) => i !== "Consulting")
//                     )
//                   }
//                   className="mr-2"
//                 />
//                 <label htmlFor="interest-Consulting">Consulting</label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="interest-Design"
//                   checked={interests.includes("Design")}
//                   onChange={(e) =>
//                     setInterests((prevInterests) =>
//                       e.target.checked
//                         ? [...prevInterests, "Design"]
//                         : prevInterests.filter((i) => i !== "Design")
//                     )
//                   }
//                   className="mr-2"
//                 />
//                 <label htmlFor="interest-Design">Design</label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="interest-Engineering"
//                   checked={interests.includes("Engineering")}
//                   onChange={(e) =>
//                     setInterests((prevInterests) =>
//                       e.target.checked
//                         ? [...prevInterests, "Engineering"]
//                         : prevInterests.filter((i) => i !== "Engineering")
//                     )
//                   }
//                   className="mr-2"
//                 />
//                 <label htmlFor="interest-Engineering">Engineering</label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="interest-Sales"
//                   checked={interests.includes("Sales")}
//                   onChange={(e) =>
//                     setInterests((prevInterests) =>
//                       e.target.checked
//                         ? [...prevInterests, "Sales"]
//                         : prevInterests.filter((i) => i !== "Sales")
//                     )
//                   }
//                   className="mr-2"
//                 />
//                 <label htmlFor="interest-Sales">Sales</label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="interest-Marketing"
//                   checked={interests.includes("Marketing")}
//                   onChange={(e) =>
//                     setInterests((prevInterests) =>
//                       e.target.checked
//                         ? [...prevInterests, "Marketing"]
//                         : prevInterests.filter((i) => i !== "Marketing")
//                     )
//                   }
//                   className="mr-2"
//                 />
//                 <label htmlFor="interest-Marketing">Marketing</label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="interest-Human Resource"
//                   checked={interests.includes("Human Resource")}
//                   onChange={(e) =>
//                     setInterests((prevInterests) =>
//                       e.target.checked
//                         ? [...prevInterests, "Human Resource"]
//                         : prevInterests.filter((i) => i !== "Human Resource")
//                     )
//                   }
//                   className="mr-2"
//                 />
//                 <label htmlFor="interest-Human Resource">Human Resource</label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="interest-Education"
//                   checked={interests.includes("Education")}
//                   onChange={(e) =>
//                     setInterests((prevInterests) =>
//                       e.target.checked
//                         ? [...prevInterests, "Education"]
//                         : prevInterests.filter((i) => i !== "Education")
//                     )
//                   }
//                   className="mr-2"
//                 />
//                 <label htmlFor="interest-Education">Education</label>
//               </div>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="additional-info" className="block font-bold mb-2">
//               Please, share anything that will help prepare for our meeting
//             </label>
//             <textarea
//               id="additional-info"
//               value={additionalInfo}
//               onChange={(e) => setAdditionalInfo(e.target.value)}
//               className="border rounded-md py-2 px-4 w-full"
//             ></textarea>
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="fibery-workspace"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Please, share with us the name of your Fibery workspace (if any)
//             </label>
//             <input
//               type="text"
//               id="fibery-workspace"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-green-500 text-white px-4 py-2 rounded-md"
//           >
//             Schedule Event
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default MeetingSchedulingForm;