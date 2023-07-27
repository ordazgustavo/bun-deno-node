import ts from "typescript";

function compile(fileNames, options) {
  const program = ts.createProgram(fileNames, options);

  const allDiagnostics = ts.getPreEmitDiagnostics(program);

  let result = "";
  for (let i = 0; i < allDiagnostics.length; i++) {
    const diagnostic = allDiagnostics[i];

    if (diagnostic.file) {
      const { line, character } = ts.getLineAndCharacterOfPosition(
        diagnostic.file,
        diagnostic.start
      );
      const message = diagnostic.messageText;
      result = `${result}\n${diagnostic.file.fileName} (${line + 1},${
        character + 1
      }): ${message}`;
    } else {
      const message = diagnostic.messageText;
      result = `${result}\n${message}`;
    }
  }
  console.log(result);
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
