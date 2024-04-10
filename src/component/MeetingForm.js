import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faUser,
  faCalendarDays,
  faUserGroup,
  faCircleCheck,
  faRibbon,
  faClock,
  faEarthAmericas,
} from '@fortawesome/free-solid-svg-icons';

const MeetingSchedulingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState([]);
  const [numPeople, setNumPeople] = useState('10-50 people');
  const [interests, setInterests] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [selectedTimezone, setSelectedTimezone] = useState(
    'UK, Ireland, Lisbon Time'
  );
  const [isScheduled, setIsScheduled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and scheduling logic
    console.log({
      name,
      email,
      numPeople,
      interests,
      additionalInfo,
      selectedDate,
      selectedTime,
      selectedTimezone,
    });
    setIsScheduled(true);
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

  if (isScheduled) {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto flex justify-center">
          <div className="bg-white shadow-md rounded-lg p-8 sm:p-20 text-center">
          <div className="flex justify-center mb-4">
            <img     
              src="https://source.unsplash.com/random/100x105"
              alt="Confirmation"
              className="rounded-full mb-4 "
            />
          </div>

            <div className="flex items-center mb-4">
           
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 text-3xl mr-4"
              />
              <h2 className="text-3xl font-bold mb-2">You are scheduled</h2>
            </div>

            <p>A calendar invitation has been sent to your email address.</p>
            <div className="mt-10 text-start bg-white shadow-md rounded-lg p-8">
              <p className="font-bold mb-2">Fibery Demo :</p>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-green-500 text-3x2 mr-2"
                />
                <p className="text-gray-600">{name}</p>
              </div>

              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-green-500 text-3x2 mr-2"
                />
                <p className="text-gray-600">
                  {selectedDate.toLocaleDateString()} at {selectedTime},
                </p>
              </div>

              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faEarthAmericas}
                  className="text-green-500 text-3x2 mr-2"
                />
                <p className="text-gray-600">{selectedTimezone}</p>
              </div>

              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faRibbon}
                  className="text-green-500 text-3x2 mr-2"
                />
                <p className="text-gray-600">
                  Web conferencing details to follow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-0">
      <div className="bg-white shadow-md rounded-lg p-8 sm:p-12">
        <h2 className="text-3xl font-bold mb-8">Fibery Demo</h2>

        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-blue-500 text-4xl mr-4"
          />
          <p>45 min</p>
        </div>
        <p className="mb-4">
          Book a meeting with our Fibery team. Talk to a real person about how
          to get your processes set up with us ✨ or not 🤷‍♂️
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="date" className="block font-bold mb-2">
              Select a Date & Time
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  className="border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="time" className="block font-bold mb-2">
                  Time
                </label>
                <select
                  id="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="border rounded-md py-2 px-4 w-full"
                >
                  <option value="09:00">09:00</option>
                  <option value="09:30">09:30</option>
                  <option value="10:00">10:00</option>
                  <option value="10:30">10:30</option>
                  <option value="11:00">11:00</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                </select>
                <label htmlFor="timezone" className="block font-bold mb-2 mt-4">
                  Time zone
                </label>
                <select
                  id="timezone"
                  value={selectedTimezone}
                  onChange={(e) => setSelectedTimezone(e.target.value)}
                  className="border rounded-md py-2 px-4 w-full"
                >
                  <option value="UK, Ireland, Lisbon Time">
                    UK, Ireland, Lisbon Time
                  </option>
                  <option value="Eastern Time (US & Canada)">
                    Eastern Time (US & Canada)
                  </option>
                  <option value="Pacific Time (US & Canada)">
                    Pacific Time (US & Canada)
                  </option>
                  <option value="Central Time (US & Canada)">
                    Central Time (US & Canada)
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="guests"
              className="block text-gray-700 font-bold mb-2"
            >
              Guests{' '}
              <FontAwesomeIcon
                icon={faUserGroup}
                className="text-blue-500 ml-2"
              />
            </label>
            <input
              type="text"
              id="guests"
              value={guests[0] || ''}
              onChange={handleGuestsChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Separate with commas"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="numPeople" className="block font-bold mb-2">
              I want Fibery to work for:
            </label>
            <select
              id="numPeople"
              value={numPeople}
              onChange={(e) => setNumPeople(e.target.value)}
              className="border rounded-md py-2 px-4 w-full"
            >
              <option value="myself">Myself</option>
              <option value="less-than-10">{'< 10 people'}</option>
              <option value="10-50">10-50 people</option>
              <option value="more-than-50">50+ people</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">You are more about:</label>
            <div className="flex flex-col space-y-2">
              {/* Checkboxes for interests */}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="additional-info" className="block font-bold mb-2">
              Please, share anything that will help prepare for our meeting
            </label>
            <textarea
              id="additional-info"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              className="border rounded-md py-2 px-4 w-full"
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
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
          >
            Schedule Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default MeetingSchedulingForm;
