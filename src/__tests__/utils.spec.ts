import { readDir, readFile } from "../utils";
import path from "path";

function testReadDir() {
  const fileList = readDir(path.resolve(__dirname, ".."));
  if (fileList.includes("utils.spec.js") && fileList.includes("client.js")) {
    console.log("pass");
  } else {
    console.log("fail: utils=>readDir");
  }
}

function testReadFile() {
  const file = readFile(__dirname + "/utils.spec.js");
  if (file.includes("testReadFile")) {
    console.log("pass");
  } else {
    console.log("fail: utils=>readFile");
  }
}

export default function () {
  testReadDir();
  testReadFile();
}
