"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libClericalJs = require("../lib/clerical.js");

var _libClericalJs2 = _interopRequireDefault(_libClericalJs);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

describe("Clerical(mainFilePath, extraFilePaths)", function () {
	var clerical = undefined,
	    mainFilePath = undefined,
	    extraFilePaths = undefined;

	before(function () {
		/* Start with an array of file paths (supports blobs) */
		mainFilePath = __dirname + "/source/truck.js";

		extraFilePaths = ["./source/wheel.js", "./source/seat.js", "./source/steeringWheel.js"];

		/* Provide the file paths to Clerical */
		clerical = new _libClericalJs2["default"](mainFilePath, extraFilePaths);
	});

	describe(".toMarkdown(callback)", function () {
		var expectedOutput = undefined;

		beforeEach(function () {
			expectedOutput = _fs2["default"].readFileSync(__dirname + "/fixtures/README.md", "utf-8");
		});

		it("should render to markdown", function (done) {
			clerical.toMarkdown(function (data) {
				data.should.eql(expectedOutput);
				done();
			});
		});
	});
});