// hoisted on below URL
// https://meetschedulewebpage.netlify.app/


import Header from './component/Header'
import Pricing from "./component/Pricing";
import Footer from "./component/Footer";
import MeetingForm2 from "./component/MeetingForm2";
import MeetingForm from './component/MeetingForm'



function App() {
  return (
    <div>
   <Header />
   <MeetingForm />
   {/* <MeetingForm2 /> */}
   <Pricing />
   <Footer />
    </div>
  );
}

export default App;
