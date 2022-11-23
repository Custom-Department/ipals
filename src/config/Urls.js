export const API_BASED_URL =
  'https://cherly-lee.webdesignpreviews.com/public/api/';
export const API_About_Us_URL = 'https://ivacay.co/';
export const IMAGE_BASED_URL = 'https://ivacay.co/packages/';
export const User_Image_Url = 'https://ivacay.co/users/';

export const getApi = endpoint => API_BASED_URL + endpoint;
export const Google_Map_Key = 'AIzaSyCu5v9OrHrhf55iPRd8JIgB_QGAlZpmlj0';
export const LoginUrl = getApi('login');
export const SignUpUrl = getApi('register');
export const UserUrl = getApi('user');
export const LogoutUrl = getApi('logout');
export const GetCountryUrl = getApi('get-countries');
export const GetCourcesUrl = getApi('get-course');
export const GetStatesUrl = getApi('get-states/');
export const GetCitiesUrl = getApi('get-cites/');
export const GetCategoriesUrl = getApi('get-category');
export const CreateClassUrl = getApi('teacher/my-class');
export const GetApprovedClassUrl = getApi('teacher/get-approve-class');
export const GetPendingClassUrl = getApi('teacher/get-pending-class');
export const DeleteMyClassUrl = getApi('teacher/my-class-delete/');
export const GetMyClasses = getApi('teacher/get-my-class');
export const UpdateMyClasses = getApi('teacher/update-my-class/');
export const UpdateRequestStatusUrl = getApi('teacher/status-update-request/');
export const UpdateMenteeRequestStatusUrl = getApi(
  'mentee/update-class-status/',
);
export const GetTeachreClasses = getApi('student/get-teacher');
export const GetTimelotUrl = getApi('student/get-time-slot');
export const CreateStudentRequestUrl = getApi('student/student-request');
export const GetTeacherClassesUrl = getApi('student/get-teacher-class/');
export const GetApprovedClassesUrl = getApi('student/get-approve-class');
export const GetPendingClassesUrl = getApi('student/get-pending-class');
export const GetMenteementorClassesUrl = getApi('mentee/get-mentor-class/');
export const GetMenteeTimeslot = getApi('mentee/get-time-slot/');
export const Getmentorformentee = getApi('mentee/get-mentor');
export const UpdateProfileUrl = getApi('profile-update');
export const GetCourseUrl = getApi('get-course');
export const GetMenteePendingClass = getApi('mentee/get-pending-class');
export const GetMenteeApproveClass = getApi('mentee/get-approve-class');
export const MentorCreateClass = getApi('mentor/create-class');
export const GetCategoryUrl = getApi('get-category');
export const GetMentorPendingClassUrl = getApi('mentor/get-pending-class');
export const GetMentorApprovedClassUrl = getApi('mentor/get-approve-class');
export const MentorUpdateStatusUrl = getApi('/mentor/status-update-request/');
export const MentorFilterMenteeUrl = getApi('mentor/filter/mentee');
export const MenteeFilterMentor = getApi('mentee/filter');
export const MentorSubscriptionUrl = getApi('mentor/subscription');
export const MenteeAddUserUrl = getApi('mentee/add-user');
export const MenteeGetUserUrl = getApi('mentee/users');
export const MenteeDelUserUrl = getApi('mentee/user-delete/');
export const StripePublishKey =
  'pk_test_51LI9HwEE1bl5YY9CXbeFOKtVHFcnF3Vr6cNpK50WFsAHQFU9pcenE3iSddJ2pzdx7IIPwzXG6plCCxXwet33HpIG00nyziJs1r';
// export const StripePublishKey =
// 'pk_live_51KrsPlAW13cLb6g2yU8lDbLpzJHXstCdhGmtEeRQbo8njWZjfQ75wgVHonWldxTtDHQVHrw4L9sVcc3FWvFoGZpO00n2xJX1fJ';
export const AboutTheApp = API_About_Us_URL + 'about-us';
export const OrderDetailUrl = getApi('journey-order-details/');
export const GuiderBookPackageUrl = getApi('guider-booked-packages');
export const DeleteAccountUrl = getApi('delete-account/');
export const CheckEthValue =
  'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,USD';
export const ChangeEthValueUrl = getApi('eth-conversion/');
export const AfterMetaMaskUrl = getApi('meta-mask/after-submit');
export const MetaMaskWallet = '0x3BC00A01a868a6104ec181269381094777C2A59a';
export const resendEmailUrl = 'https://ivacay.co/api/resend-email/';
export const updateProfileUrl = 'https://ivacay.co/api/profile/';
