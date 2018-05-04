let args = process.argv.splice(2);
console.log(args.reduce((acc, current) => Number(acc) + Number(current)));
