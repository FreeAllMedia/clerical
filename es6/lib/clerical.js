import dox from "dox";
import fs from "fs";
import _ from "lodash";

export default class Clerical {
	constructor(mainFilePath) {
		this.mainFilePath = mainFilePath;
	}

	toMarkdown(callback) {
		fs.readFile(this.mainFilePath, "utf-8", (error, data) => {
			const jsdocData = dox.parseComments(data, {raw: true});

			let markdown = "";

			jsdocData.forEach((block) => {
				const newBlock = {};

				if (block.isClass) {
					markdown = markdown + block.description.full;
				}

				newBlock.type = block.tags[0].type;
				newBlock.markdown = block.tags[0].string;
			});

			callback(markdown + "\n");
		});
	}
}
