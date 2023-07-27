import ts from "typescript";
// const ts = require('typescript');

function compile(fileNames, options) {
  const program = ts.createProgram(fileNames, options);
  // const emitResult = program.emit();

  const allDiagnostics = ts.getPreEmitDiagnostics(program);
  // .concat(emitResult.diagnostics);

  let result = "";
  for (let i = 0; i < allDiagnostics.length; i++) {
    const diagnostic = allDiagnostics[i];

    // allDiagnostics.forEach((diagnostic) => {
    if (diagnostic.file) {
      const { line, character } = ts.getLineAndCharacterOfPosition(
        diagnostic.file,
        diagnostic.start
      );
      const message = diagnostic.messageText;
      // const message = ts.flattenDiagnosticMessageText(
      //   diagnostic.messageText,
      //   "\n"
      // );
      result = `${result}\n${diagnostic.file.fileName} (${line + 1},${
        character + 1
      }): ${message}`;
    } else {
      // const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
      const message = diagnostic.messageText;
      result = `${result}\n${message}`;
    }
    // });
  }
  console.log(result);

  // const exitCode = emitResult.emitSkipped ? 1 : 0;
  // console.log(`Process exiting with code '${exitCode}'.`);
  // process.exit(exitCode);
}

compile(
  [
    "./test-files/index.ts",
    "./test-files/class.ts",
    "./test-files/react18.d.ts",
  ],
  {
    noEmit: true,
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.ESNext,
    strict: true,
  }
);
