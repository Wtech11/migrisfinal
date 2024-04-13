// import React from 'react';
// import "./homepage.css";
// import React from 'react';
// import { useNavigation } from 'next/navigation';
// import "./homepage.css";
// import dynamic from 'next/dynamic';

// // Dynamic import of MainContentForm component
// const MainContentform = dynamic(() => import('./MainContentform'), { ssr: false });

// function Homepage() {
//     const navigation = useNavigation();
//   const [showForm, setShowForm] = React.useState(false); // Use useState to manage the state

//   // Function to handle the click event of the "CHECK E. PERMIT" button
//   const handleCheckEpermitClick = () => {
//     setShowForm(true); // Update the client-side state to show the form
//   };



//   return (
//     <div>
//         {showForm ? (
//         <MainContentform />
//       ) : (
//         <div>
//       {/* <div>Homepage</div> */}
//       <div className="entries customenteries">
//         <div>
//           <div className="main-content-card panel" id="_com_liferay_announcements_web_portlet_AnnouncementsPortlet_INSTANCE_announcLang_349777">
//             <div className="entry-content panel-body">
//               <div className="portlet-msg-info">
//                 <a href="https://migracija.lrv.lt/lt/naudinga-informacija/ukraina-ukrayina-ukraina-ukraine" rel="noopener noreferrer" target="_blank">
//                   <strong>
//                     <img alt="" src="https://www.migracija.lt/documents/20123/0/Flag_of_Ukraine.png/25083b2c-f823-befa-ed61-3401fae95e81?t=1673865056033"/>&nbsp;Важлива інформація для біженців від війни з України / Svarbi informacija Ukrainos karo pabėgėliams
//                   </strong>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="main-content-card panel" id="_com_liferay_announcements_web_portlet_AnnouncementsPortlet_INSTANCE_announcLang_408922">
//             <div className="entry-content panel-body">
//               <div className="portlet-msg-info">
//                 <strong>
//                   <a href="/documents/d/guest/00-infoby-20240122-pdf" rel="noopener noreferrer" target="_blank">
//                     <img alt="" height="23" src="https://www.migracija.lt/documents/20123/0/belarus-26870_960_720.png/d87b20f6-f78e-c821-ec54-07d08216f368?t=1681201631106" width="33"/>
//                   </a> &nbsp;
//                   <a href="/documents/d/guest/00-infoby-20240122-pdf" rel="noopener noreferrer" target="_blank">Інфармацыя для грамадзян Беларусі (абноўлена)</a>
//                 </strong>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="journal-content-article customentry" data-analytics-asset-id="389299" data-analytics-asset-title="E-permit" data-analytics-asset-type="web-content" data-analytics-web-content-resource-pk="389301">
//       <p>
//         <span style={{ fontSize: '18px' }}>
//           <span className="top-actions" style={{ justifyContent: 'center' }}>
//             {/* <a className="profile-button basic" style={{ height: '40px', width: '260px', margin: '0' }} href="#">
//               CHECK E. PERMIT
//             </a> */}
//              <a className="profile-button basic" style={{ height: '40px', width: '260px', margin: '0' }} onClick={handleCheckEpermitClick}>
//               CHECK E. PERMIT
//             </a>
//           </span>
//         </span>
//       </p>
//       <p>
//         <span style={{ fontSize: '18px' }}>
//           <span className="top-actions" style={{ justifyContent: 'center' }}></span>
//           From 18.01.2023, only a digital temporary residence permit is issued to foreigners who have received temporary protection in Lithuania (you can view a sample of the digital permit{' '}
//           <a href="/documents/20123/0/specimen.pdf/dd54c3c4-40c5-5775-6f6b-e095dba1a675">here</a>).
//         </span>
//       </p>
//       <p>
//         <span style={{ fontSize: '18px' }}>
//           In order to obtain a temporary residence permit on the basis of temporary protection, foreigners must fill out an application for issuing or renewing a temporary residence permit (click{' '}
//           <a href="/app/form-wizard?nationality=UKR">here</a>).
//         </span>
//       </p>
//       <p>
//         <span style={{ fontSize: '18px' }}>
//           The digital permit is sent to the foreigner's personal MIGRIS account. <br /> You can check whether a foreigner's digital residence permit is valid by clicking "CHECK E. PERMIT" above on this page.
//         </span>
//       </p>
//     </div>
//     </div>
//     )}
//     </div>
//   );
// }

// export default Homepage;
// import React from 'react';
// import { useNavigation } from 'next/navigation'; // Importing useNavigation from next/navigation
// import "./homepage.css";
// import dynamic from 'next/dynamic';

// // Dynamic import of MainContentForm component
// const MainContentform = dynamic(() => import('./MainContentform'), { ssr: false });

// // function Homepage() {
// //   const navigation = useNavigation(); // Using useNavigation instead of useRouter
// //   const [showForm, setShowForm] = React.useState(false); // Use useState to manage the state

// //   // Function to handle the click event of the "CHECK E. PERMIT" button
// //   const handleCheckEpermitClick = () => {
// //     setShowForm(true); // Update the client-side state to show the form
// //   };
// function Homepage() {
//     const navigation = useNavigation(); // Using useNavigation instead of useRouter
//     const [showForm, setShowForm] = React.useState(false); // Use useState to manage the state
  
//     // Function to handle the click event of the "CHECK E. PERMIT" button
//     const handleCheckEpermitClick = () => {
//       setShowForm(true); // Update the client-side state to show the form
//     };

//   return (
//     <div>
//       {showForm ? (
//         <MainContentform />
//       ) : (
//         <div>
//           <div className="entries customenteries">
//             <div>
//               <div className="main-content-card panel" id="_com_liferay_announcements_web_portlet_AnnouncementsPortlet_INSTANCE_announcLang_349777">
//                 <div className="entry-content panel-body">
//                   <div className="portlet-msg-info">
//                     <a href="https://migracija.lrv.lt/lt/naudinga-informacija/ukraina-ukrayina-ukraina-ukraine" rel="noopener noreferrer" target="_blank">
//                       <strong>
//                         <img alt="" src="https://www.migracija.lt/documents/20123/0/Flag_of_Ukraine.png/25083b2c-f823-befa-ed61-3401fae95e81?t=1673865056033"/>&nbsp;Важлива інформація для біженців від війни з України / Svarbi informacija Ukrainos karo pabėgėliams
//                       </strong>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="main-content-card panel" id="_com_liferay_announcements_web_portlet_AnnouncementsPortlet_INSTANCE_announcLang_408922">
//                 <div className="entry-content panel-body">
//                   <div className="portlet-msg-info">
//                     <strong>
//                       <a href="/documents/d/guest/00-infoby-20240122-pdf" rel="noopener noreferrer" target="_blank">
//                         <img alt="" height="23" src="https://www.migracija.lt/documents/20123/0/belarus-26870_960_720.png/d87b20f6-f78e-c821-ec54-07d08216f368?t=1681201631106" width="33"/>
//                       </a> &nbsp;
//                       <a href="/documents/d/guest/00-infoby-20240122-pdf" rel="noopener noreferrer" target="_blank">Інфармацыя для грамадзян Беларусі (абноўлена)</a>
//                     </strong>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="journal-content-article customentry" data-analytics-asset-id="389299" data-analytics-asset-title="E-permit" data-analytics-asset-type="web-content" data-analytics-web-content-resource-pk="389301">
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 <span className="top-actions" style={{ justifyContent: 'center' }}>
//                   <a className="profile-button basic" style={{ height: '40px', width: '260px', margin: '0' }} href="#" onClick={handleCheckEpermitClick}> {/* Adding onClick handler */}
//                     CHECK E. PERMIT
//                   </a>
//                 </span>
//               </span>
//             </p>
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 <span className="top-actions" style={{ justifyContent: 'center' }}></span>
//                 From 18.01.2023, only a digital temporary residence permit is issued to foreigners who have received temporary protection in Lithuania (you can view a sample of the digital permit{' '}
//                 <a href="/documents/20123/0/specimen.pdf/dd54c3c4-40c5-5775-6f6b-e095dba1a675">here</a>).
//               </span>
//             </p>
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 In order to obtain a temporary residence permit on the basis of temporary protection, foreigners must fill out an application for issuing or renewing a temporary residence permit (click{' '}
//                 <a href="/app/form-wizard?nationality=UKR">here</a>).
//               </span>
//             </p>
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 The digital permit is sent to the foreigner's personal MIGRIS account. <br /> You can check whether a foreigner's digital residence permit is valid by clicking "CHECK E. PERMIT" above on this page.
//               </span>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Homepage;
// @ts-ignore
'use client'


import React, { useState } from 'react';
// import { useNavigation } from 'next/navigation'; // Importing useNavigation from next/navigation
import "./homepage.css";
import dynamic from 'next/dynamic';
// import Maincontent from './Maincontent';
import MainContent from './Miancontent';
// Dynamic import of MainContentForm component
// const MainContentform = dynamic(() => import('./MainContentform'), { ssr: false });

function Homepage() {
    // const navigation = useNavigation(); // Using useNavigation instead of useRouter
    const [showForm, setShowForm] = React.useState(false); // Use useState to manage the state
  
    // Function to handle the click event of the "CHECK E. PERMIT" button
    const handleCheckEpermitClick = () => {
      setShowForm(true); // Update the client-side state to show the form
    };

    return (
      <div>
        {showForm ? (
          <MainContent />
        ) : (
          <div>
            <div className="entries customenteries">
              <div>
                <div className="main-content-card panel" id="_com_liferay_announcements_web_portlet_AnnouncementsPortlet_INSTANCE_announcLang_349777">
                  <div className="entry-content panel-body">
                    <div className="portlet-msg-info">
                      <a href="https://migracija.lrv.lt/lt/naudinga-informacija/ukraina-ukrayina-ukraina-ukraine" rel="noopener noreferrer" target="_blank">
                        <strong>
                          <img alt="" src="https://www.migracija.lt/documents/20123/0/Flag_of_Ukraine.png/25083b2c-f823-befa-ed61-3401fae95e81?t=1673865056033"/>&nbsp;Важлива інформація для біженців від війни з України / Svarbi informacija Ukrainos karo pabėgėliams
                        </strong>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="main-content-card panel" id="_com_liferay_announcements_web_portlet_AnnouncementsPortlet_INSTANCE_announcLang_408922">
                  <div className="entry-content panel-body">
                    <div className="portlet-msg-info">
                      <strong>
                        <a href="/documents/d/guest/00-infoby-20240122-pdf" rel="noopener noreferrer" target="_blank">
                          <img alt="" height="23" src="https://www.migracija.lt/documents/20123/0/belarus-26870_960_720.png/d87b20f6-f78e-c821-ec54-07d08216f368?t=1681201631106" width="33"/>
                        </a> &nbsp;
                        <a href="https://www.migracija.lt/documents/d/guest/00-infoby-20240122-pdf" rel="noopener noreferrer" target="_blank">Інфармацыя для грамадзян Беларусі (абноўлена)</a>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="journal-content-article customentry" data-analytics-asset-id="389299" data-analytics-asset-title="E-permit" data-analytics-asset-type="web-content" data-analytics-web-content-resource-pk="389301">
              <p>
                <span style={{ fontSize: '18px' }}>
                  <span className="top-actions" style={{ justifyContent: 'center' }}>
                    <a className="profile-button basic" style={{ height: '40px', width: '260px', margin: '0' }} onClick={handleCheckEpermitClick}> {/* Adding onClick handler */}
                      CHECK E. PERMIT
                    </a>
                  </span>
                </span>
              </p>
              <p>
                <span style={{ fontSize: '18px' }}>
                  <span className="top-actions" style={{ justifyContent: 'center' }}></span>
                  From 18.01.2023, only a digital temporary residence permit is issued to foreigners who have received temporary protection in Lithuania (you can view a sample of the digital permit{' '}
                  <a href="/documents/20123/0/specimen.pdf/dd54c3c4-40c5-5775-6f6b-e095dba1a675">here</a>).
                </span>
              </p>
              <p>
                <span style={{ fontSize: '18px' }}>
                  In order to obtain a temporary residence permit on the basis of temporary protection, foreigners must fill out an application for issuing or renewing a temporary residence permit (click{' '}
                  <a href="/app/form-wizard?nationality=UKR">here</a>).
                </span>
              </p>
              <p>
                <span style={{ fontSize: '18px' }}>
                  The digital permit is sent to the foreigner's personal MIGRIS account. <br /> You can check whether a foreigner's digital residence permit is valid by clicking "CHECK E. PERMIT" above on this page.
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    );
}

export default Homepage;





// 'use client'
// import React from 'react';
// import { useClient } from 'next/client';
// import "./homepage.css";

// function Homepage() {
//     useClient();
//   const [showForm, setShowForm] = useState(false);

//   const handleCheckEpermitClick = () => {
//     setShowForm(true);
//   };

//   return (
//     <div>
//       {showForm ? (
//         <div className="epermit-form">
//           {/* Your epermit form component goes here */}
//           <form>
//             {/* Form elements go here */}
//           </form>
//         </div>
//       ) : (
//         <div>
//           {/* Existing content */}
//           <div className="entries customenteries">
//             <div>
//               <div className="main-content-card panel" id="_com_liferay_announcements_web_portlet_AnnouncementsPortlet_INSTANCE_announcLang_349777">
//                 <div className="entry-content panel-body">
//                   <div className="portlet-msg-info">
//                     <a href="https://migracija.lrv.lt/lt/naudinga-informacija/ukraina-ukrayina-ukraina-ukraine" rel="noopener noreferrer" target="_blank">
//                       <strong>
//                         <img alt="" src="https://www.migracija.lt/documents/20123/0/Flag_of_Ukraine.png/25083b2c-f823-befa-ed61-3401fae95e81?t=1673865056033"/>&nbsp;Важлива інформація для біженців від війни з України / Svarbi informacija Ukrainos karo pabėgėliams
//                       </strong>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="main-content-card panel" id="_com_liferay_announcements_web_portlet_AnnouncementsPortlet_INSTANCE_announcLang_408922">
//                 <div className="entry-content panel-body">
//                   <div className="portlet-msg-info">
//                     <strong>
//                       <a href="/documents/d/guest/00-infoby-20240122-pdf" rel="noopener noreferrer" target="_blank">
//                         <img alt="" height="23" src="https://www.migracija.lt/documents/20123/0/belarus-26870_960_720.png/d87b20f6-f78e-c821-ec54-07d08216f368?t=1681201631106" width="33"/>
//                       </a> &nbsp;
//                       <a href="/documents/d/guest/00-infoby-20240122-pdf" rel="noopener noreferrer" target="_blank">Інфармацыя для грамадзян Беларусі (абноўлена)</a>
//                     </strong>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="journal-content-article customentry" data-analytics-asset-id="389299" data-analytics-asset-title="E-permit" data-analytics-asset-type="web-content" data-analytics-web-content-resource-pk="389301">
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 <span className="top-actions" style={{ justifyContent: 'center' }}>
//                   <a className="profile-button basic" style={{ height: '40px', width: '260px', margin: '0' }} onClick={handleCheckEpermitClick}>
//                     CHECK E. PERMIT
//                   </a>
//                 </span>
//               </span>
//             </p>
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 <span className="top-actions" style={{ justifyContent: 'center' }}></span>
//                 From 18.01.2023, only a digital temporary residence permit is issued to foreigners who have received temporary protection in Lithuania (you can view a sample of the digital permit{' '}
//                 <a href="/documents/20123/0/specimen.pdf/dd54c3c4-40c5-5775-6f6b-e095dba1a675">here</a>).
//               </span>
//             </p>
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 In order to obtain a temporary residence permit on the basis of temporary protection, foreigners must fill out an application for issuing or renewing a temporary residence permit (click{' '}
//                 <a href="/app/form-wizard?nationality=UKR">here</a>).
//               </span>
//             </p>
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 The digital permit is sent to the foreigner's personal MIGRIS account. <br /> You can check whether a foreigner's digital residence permit is valid by clicking "CHECK E. PERMIT" above on this page.
//               </span>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Homepage;
// src/app/components/Homepage.js
// import React, { useState } from 'react';
// import { useNavigation } from 'next/navigation'; // Import useNavigation
// import "./homepage.css";

// function Homepage() {
//   const [showForm, setShowForm] = useState(false); // Use useState for managing state
//   const navigation = useNavigation(); // Use useNavigation instead of useRouter

//   const handleCheckEpermitClick = () => {
//     setShowForm(true);
//   };

//   return (
//     <div>
//       {showForm ? (
//         <div className="epermit-form">
//           {/* Your epermit form component goes here */}
//           <form>
//             {/* Form elements go here */}
//           </form>
//         </div>
//       ) : (
//         <div>
//           {/* Existing content */}
//           <div className="entries customenteries">
//             <div>
//               <div className="main-content-card panel" id="_com_liferay_announcements_web_portlet_AnnouncementsPortlet_INSTANCE_announcLang_349777">
//                 <div className="entry-content panel-body">
//                   <div className="portlet-msg-info">
//                     <a href="https://migracija.lrv.lt/lt/naudinga-informacija/ukraina-ukrayina-ukraina-ukraine" rel="noopener noreferrer" target="_blank">
//                       <strong>
//                         <img alt="" src="https://www.migracija.lt/documents/20123/0/Flag_of_Ukraine.png/25083b2c-f823-befa-ed61-3401fae95e81?t=1673865056033"/>&nbsp;Важлива інформація для біженців від війни з України / Svarbi informacija Ukrainos karo pabėgėliams
//                       </strong>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="main-content-card panel" id="_com_liferay_announcements_web_portlet_AnnouncementsPortlet_INSTANCE_announcLang_408922">
//                 <div className="entry-content panel-body">
//                   <div className="portlet-msg-info">
//                     <strong>
//                       <a href="/documents/d/guest/00-infoby-20240122-pdf" rel="noopener noreferrer" target="_blank">
//                         <img alt="" height="23" src="https://www.migracija.lt/documents/20123/0/belarus-26870_960_720.png/d87b20f6-f78e-c821-ec54-07d08216f368?t=1681201631106" width="33"/>
//                       </a> &nbsp;
//                       <a href="/documents/d/guest/00-infoby-20240122-pdf" rel="noopener noreferrer" target="_blank">Інфармацыя для грамадзян Беларусі (абноўлена)</a>
//                     </strong>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="journal-content-article customentry" data-analytics-asset-id="389299" data-analytics-asset-title="E-permit" data-analytics-asset-type="web-content" data-analytics-web-content-resource-pk="389301">
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 <span className="top-actions" style={{ justifyContent: 'center' }}>
//                   <a className="profile-button basic" style={{ height: '40px', width: '260px', margin: '0' }} onClick={handleCheckEpermitClick}>
//                     CHECK E. PERMIT
//                   </a>
//                 </span>
//               </span>
//             </p>
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 <span className="top-actions" style={{ justifyContent: 'center' }}></span>
//                 From 18.01.2023, only a digital temporary residence permit is issued to foreigners who have received temporary protection in Lithuania (you can view a sample of the digital permit{' '}
//                 <a href="/documents/20123/0/specimen.pdf/dd54c3c4-40c5-5775-6f6b-e095dba1a675">here</a>).
//               </span>
//             </p>
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 In order to obtain a temporary residence permit on the basis of temporary protection, foreigners must fill out an application for issuing or renewing a temporary residence permit (click{' '}
//                 <a href="/app/form-wizard?nationality=UKR">here</a>).
//               </span>
//             </p>
//             <p>
//               <span style={{ fontSize: '18px' }}>
//                 The digital permit is sent to the foreigner's personal MIGRIS account. <br /> You can check whether a foreigner's digital residence permit is valid by clicking "CHECK E. PERMIT" above on this page.
//               </span>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Homepage;

