export const LANGUAGE_VERSIONS = {
  cpp: "10.2.0",
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  typescript: "5.0.3",
  php: "8.2.3",
  go: "1.16.2",
  ruby: "3.0.1",
  rust: "1.68.2",
  kotlin: "1.8.20",
  swift: "5.3.3",
  sqlite3: "3.36.0",
  c:"10.2.0",
  powershell: "7.1.4",
  bash: "5.2.0",
  matl: "22.7.4",
  dart: "2.19.6",
};
export const CODE_SNIPPETS = {
  cpp: `#include <iostream>\n\nint main() {\n\tstd::cout << "Hello, Avan!" << std::endl;\n\treturn 0;\n}\n`,
  javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Avan");\n`,
  python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Avan")\n`,
  java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, World!");\n\t}\n}\n`,
  csharp: `using System;\n\nnamespace HelloWorld {\n\tclass Hello {\n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello, World in C#");\n\t\t}\n\t}\n}\n`,
  typescript: `type Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Avan" });\n`,
  php: `<?php\n\n$name = 'Avan';\necho "Hello, " . $name;\n?>\n`,
  go: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, Avan!")\n}\n`,
  ruby: `def greet(name)\n\tputs "Hello, #{name}!"\nend\n\ngreet("Avan")\n`,
  rust: `fn greet(name: &str) {\n\tprintln!("Hello, {}!", name);\n}\n\nfn main() {\n\tgreet("Avan");\n}\n`,
  kotlin: `fun greet(name: String) {\n\tprintln("Hello, $name!")\n}\n\ngreet("Avan")\n`,
  swift: `func greet(name: String) {\n\tprint("Hello,\  (name)!")\n}\n\ngreet(name:"Avan")\n`,
  sqlite3: `CREATE TABLE greeting (\n\tid INTEGER PRIMARY KEY,\n\tmessage TEXT\n);\n\nINSERT INTO greeting (message) VALUES ('Hello, Avan!');\n`,
  c: `#include <stdio.h>\n\nint main() {\n\tprintf("Hello, Avan!\\n");\n\treturn 0;\n}\n`,
  powershell: `$name = "Avan"\nWrite-Host "Hello, $name!"\n`,
  bash: `#!/bin/bash\n\nname="Avan"\necho "Hello, $name!"\n`,
  matl: `'Hello World'\n`,
  dart: `void main() {\n\tprint('Hello, World!');\n}\n\n\n`,
};

export const FILE_NAMES = {
  cpp: "program.cpp",            
  javascript: "app.js",          
  python: "script.py",          
  java: "MainClass.java",        
  csharp: "Program.cs",         
  typescript: "app.ts",          
  php: "index.php",           
  go: "main.go",                 
  ruby: "program.rb",            
  rust: "main.rs",               
  kotlin: "Application.kt",     
  swift: "App.swift",            
  sqlite3: "queries.sql",        
  c: "main.c",                 
  powershell: "script.ps1",     
  bash: "script.sh",            
  matl: "function.m",         
  dart: "main.dart",            
};

export const THEMES=[
  "vs-dark",
  "vs-light",
  "hc-black"
]

export const default_code = `
function Home() { 
  const [likes, setLikes] = React.useState(0);
  return (
    <div
      style={{
        backgroundColor: "#f0f8ff",
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center",
        width: "200px",
      }}
    >
      <p
        className="likes"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#000000", 
        }}
      >
        {likes}
      </p>
      <button
        className="button"
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => setLikes(likes + 2)}
      >
        Like
      </button>
    </div>
  );
}

render(<Home />);

`;
export const projectcard_example = [
  {
    id: "1",
    name: "First React Project",
    type: "WebDev",
    date: new Date(),
    language: "React",
  },
  {
    id: "2",
    name: "First C++ Project",
    type: "SoftwareDev",
    date: new Date(),
    language: "cpp",
  },
  {
    id: "3",
    name: "E-commerce Platform",
    type: "WebDev",
    language: "TypeScript",
    date: new Date("2024-03-15"),
  },
  {
    id: "4",
    name: "Task Management API",
    type: "SoftwareDev",
    language: "Node.js",
    date: new Date("2024-03-10"),
  },
  {
    id: "5",
    name: "Mobile Weather App",
    type: "SoftwareDev",
    language: "React Native",
    date: new Date("2024-03-05"),
  }
];
export const componentString = `
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      setData(null);
    };
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default MyComponent;
`;
