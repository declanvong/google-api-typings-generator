import * as assert from 'assert';
import 'jasmine';
import * as _ from 'lodash';
import { App } from '../google-api-typings-generator';

describe("version parser", () => {
    var expectations = {
        "v1": "1",
        "v1.2": "1.2",
        "v1.2beta3": "1.2-beta3",
        "vm_beta": "0-m_beta"
    }

    _.forEach(expectations, (expected, given) => {
        it("should parse: " + given, () => {
            assert.equal(App.parseVersion(given), expected);
        })
    });

});
