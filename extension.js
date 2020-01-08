const vscode = require('vscode');
const clipboardy = require('clipboardy');
function activate(context) { 
	const disposal = vscode.commands.registerCommand('extension.emacsKillLine.kill-line', function () {
 		const editor = vscode.window.activeTextEditor;
		if(!editor) {
			return;
		}

		const a = editor.selection.active;
		const doc = editor.document;
		const line = doc.lineAt(a);

		let range = line.rangeIncludingLineBreak
		if(a.character > 0) {
			range = line.range.with(a);
		}

		const txt = doc.getText(range);
		editor.edit(function(b) {
			b.delete(range);
			clipboardy.write(txt);
		});

	});
	context.subscriptions.push(disposal);
}

exports.activate = activate;
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
