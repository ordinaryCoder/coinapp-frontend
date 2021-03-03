import { realtime } from "../firebase";

const db = realtime.ref("/tutorials");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(tutorial: any) {
    return db.push(tutorial);
  }

  update(key: any, value: any) {
    return db.child(key).update(value);
  }

  delete(key: any) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new TutorialDataService();
