// Access the first user argument (process.argv[2])
const arg = process.argv[2];

// Check if the argument exists without using length
if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}
