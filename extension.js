const vscode = require('vscode');

function activate(context) { 
	const disposal = vscode.commands.registerCommand('extension.emacsKillLine.kill-line', function () {
 		const editor = vscode.window.activeTextEditor;
		if(!editor) {
			return;
		}

		const a = editor.selection.active;
		const doc = editor.document;
		const line = doc.lineAt(a);
		
		let range;
		if(a.character > 0) {
			range = line.range.with(a);
		} else {
			range = line.rangeIncludingLineBreak
		}

		const txt = doc.getText(range);
		editor.edit(function(b) {
			b.delete(range);
		});

		vscode.env.clipboard.writeText(txt);
	});
	context.subscriptions.push(disposal);
}

exports.activate = activate;
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
