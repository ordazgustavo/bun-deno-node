import * as ts from "typescript";

let program = ts.createProgram(['./test-files/index.ts', './test-files/class.ts'], {module: ts.ModuleKind.ESNext, noEmit: true});
let emitResult = program.emit();
let allDiagnostics = ts
.getPreEmitDiagnostics(program)
.concat(emitResult.diagnostics);

allDiagnostics.forEach(diagnostic => {
  if (diagnostic.file) {
    let { line, character } = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start!);
    let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
    console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
  } else {
    console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
  }
});
