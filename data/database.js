import pmongo from 'promised-mongo';

const db = pmongo('gottems', ['users']);

// should we use mongoose over pmongo??

// create user schemas

export function getUser(_id) {
  return db.users.findOne({ _id: pmongo.ObjectId(_id) });
}
