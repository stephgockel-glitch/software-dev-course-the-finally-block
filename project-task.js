console.log("✅ project-task.js is running");

/*
========================================
📁 File Processing Simulation with Exceptions
========================================

🎯 Objective:
- Identify standard JavaScript exceptions
- Use try/catch/finally to ensure cleanup

📘 Scenario:
Simulate file processing for a virtual library.
*/

function processFile(fileName, fileData) {
  let fileHandle = null;

  try {
    // Simulate opening a file
    fileHandle = "OPEN";

    // ✅ Input validation
    if (!fileName) {
      throw new ReferenceError("File name is missing");
    }

    if (typeof fileData !== "string") {
      throw new TypeError("File data must be a string");
    }

    if (fileData.length === 0) {
      throw new Error("File data cannot be empty");
    }

    // ✅ Simulate processing
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
    console.log("✅ File processed successfully");
  } catch (error) {
    console.log(`❌ ${error.name}: ${error.message}`);
  } finally {
    // ✅ Always runs
    fileHandle = "CLOSED";
    console.log("🔒 File handle closed");
  }
}

// ================================
// 🧪 Test Cases
// ================================
processFile();                       // ReferenceError
processFile("myFile.txt", 42);       // TypeError
processFile("myFile.txt", "");       // Error
processFile("myFile.txt", "Hello, world!"); // Success
