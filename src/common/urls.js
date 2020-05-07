const DOCTOR_BASE = '/doctor';
export const doctor = {
  CREATE_DOCTOR: `${DOCTOR_BASE}/create`,
  FETCH_DOCTOR_INFO: `${DOCTOR_BASE}/fetchInfo`,
  FETCH_DOCTOR_LIST: `${DOCTOR_BASE}/fetchList`,
  EDIT_DOCTOR: `${DOCTOR_BASE}/edit`,
};

const PATIENT_BASE = '/patient';
export const patient = {
  CREATE_PATIENT: `${PATIENT_BASE}/create`,
  FETCH_PATIENT_INFO: `${PATIENT_BASE}/fetchInfo`,
  FETCH_PATIENT_LIST: `${PATIENT_BASE}/fetchList`,
  EDIT_PATIENT: `${PATIENT_BASE}/edit`,
};

const AUTH_BASE = '/auth';
export const auth = {
  LOGIN_USER: `${AUTH_BASE}/login`,
};

const APPOINTMENT_BASE = '/appointment';
export const appointment = {
  CREATE_APPOINTMENT: `${APPOINTMENT_BASE}/create`,
  FETCH_APPOINTMENT_LIST: `${APPOINTMENT_BASE}/fetchList`,
  EDIT_APPOINTMENT: `${APPOINTMENT_BASE}/edit`,
};

const EMAIL_BASE = '/email';
export const email = {
  TEXT_EMAIL: `${EMAIL_BASE}/sendTextEmail`,
  APPOINTMENT_EMAIL: `${EMAIL_BASE}/sendAppointmentConfirmationEmail`,
};

const CHAT_BASE = '/chat';
export const chat = {
  CREATE_CONVERSATION: `${CHAT_BASE}/createConversation`,
  FETCH_CONVERSATION: `${CHAT_BASE}/fetchConversation`,
  ADD_PARTICIPANTS: `${CHAT_BASE}/addParticipants`,
  FETCH_PARTICIPANTS: `${CHAT_BASE}/fetchParticipants`,
  ADD_CHAT_MESSAGE: `${CHAT_BASE}/addChatMessage`,
  FETCH_CONVERSATION_MESSAGES: `${CHAT_BASE}/fetchConversationMessages`,
  FETCH_UNREAD_MESSAGES: `${CHAT_BASE}/fetchUnreadMessages`,
  CHECK_CONVERSATION_EXIST: `${CHAT_BASE}/checkConversationExist`,
};
