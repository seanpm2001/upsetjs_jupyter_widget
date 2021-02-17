/**
 * @upsetjs/jupyter_widget
 * https://github.com/upsetjs/upsetjs_jupyter_widget
 *
 * Copyright (c) 2021 Samuel Gratzl <sam@sgratzl.com>
 */

// import // Add any needed widget imports here (or from controls)
// '@jupyter-widgets/base';

import { createTestModel } from './__tests__/utils';

import { UpSetModel } from '.';

describe('UpSet', () => {
  describe('UpSetModel', () => {
    it('should be create able', () => {
      let model = createTestModel(UpSetModel);
      expect(model).toBeInstanceOf(UpSetModel);
      expect(model.get('value')).toBeUndefined();
    });

    // it('should be create able with a value', () => {
    //   let state = { value: 'Foo Bar!' };
    //   let model = createTestModel(UpSetModel, state);
    //   expect(model).toBeInstanceOf(UpSetModel);
    //   expect(model.get('value')).toBe('Foo Bar!');
    // });
  });
});
