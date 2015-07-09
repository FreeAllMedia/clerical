"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _dox = require("dox");

var _dox2 = _interopRequireDefault(_dox);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var Clerical = (function () {
	function Clerical(mainFilePath) {
		_classCallCheck(this, Clerical);

		this.mainFilePath = mainFilePath;
	}

	_createClass(Clerical, [{
		key: "toMarkdown",
		value: function toMarkdown(callback) {
			_fs2["default"].readFile(this.mainFilePath, "utf-8", function (error, data) {
				var jsdocData = _dox2["default"].parseComments(data, { raw: true });

				var markdown = "";

				jsdocData.forEach(function (block) {
					var newBlock = {};

					if (block.isClass) {
						markdown = markdown + block.description.full;
					}

					newBlock.type = block.tags[0].type;
					newBlock.markdown = block.tags[0].string;
				});

				callback(markdown + "\n");
			});
		}
	}]);

	return Clerical;
})();

exports["default"] = Clerical;
module.exports = exports["default"];