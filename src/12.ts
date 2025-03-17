import { v4 as uuidv4 } from 'uuid';
import * as functions from 'firebase-functions';

export const getStudentById = functions.https.onCall(async (data, context) => {
  const id = data.id;
  if (!context.auth) {
    throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' + 'while authenticated.');
  }
  if (!id) {
    throw new functions.https.HttpsError('invalid-argument', 'Please provide a valid id.');
  }

  const studentRef = admin.firestore().collection('students').doc(id);
  const studentSnap = await studentRef.get();

  if (!studentSnap.exists) {
    throw new functions.https.HttpsError('not-found', 'Student not found');
  }

  return {
    id: studentSnap.id,
    ...studentSnap.data(),
  };
});