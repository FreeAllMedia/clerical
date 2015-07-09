import Clerical from "../lib/clerical.js";
import fs from "fs";

describe("Clerical(mainFilePath, extraFilePaths)", () => {
	let clerical,
			mainFilePath,
			extraFilePaths;

	before(() => {
		/* Start with an array of file paths (supports blobs) */
		mainFilePath = __dirname + "/source/truck.js";

		extraFilePaths = [
			"./source/wheel.js",
			"./source/seat.js",
			"./source/steeringWheel.js"
		];

		/* Provide the file paths to Clerical */
		clerical = new Clerical(mainFilePath, extraFilePaths);
	});

	describe(".toMarkdown(callback)", () => {
		let expectedOutput;

		beforeEach(() => {
			expectedOutput = fs.readFileSync(__dirname + "/fixtures/README.md", "utf-8");
		});

		it("should render to markdown", done => {
			clerical.toMarkdown((data) => {
				data.should.eql(expectedOutput);
				done();
			});
		});
	});
});
