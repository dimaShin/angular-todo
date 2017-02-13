export default class TodoModel {

  id: string = null;
  title: string = '';
  description: string = '';
  done: boolean = false;
  createdAt: Date = null;
  updatedAt: Date = null;

  constructor(data) {
    Object.assign(this, data, {
      createdAt: data.createdAt ? new Date(data.createdAt) : null,
      updatedAt: data.createdAt ? new Date(data.updatedAt) : null
    });
  }

}
