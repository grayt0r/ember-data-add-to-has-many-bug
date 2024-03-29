import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ExampleAdapter extends JSONAPIAdapter {
  findAll() {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            data: [
              {
                type: 'example',
                id: 'example-1',
                attributes: {
                  name: 'Example 1',
                },
              },
            ],
          }),
        200
      );
    });
  }

  createRecord(store, type, snapshot) {
    const serialized = this.serialize(snapshot, { includeId: true });

    serialized.data.id = 'example-2';

    return new Promise((resolve) => {
      setTimeout(() => resolve(serialized), 200);
    });
  }
}
