const args = process.argv.slice(2,process.argv.length-1);


if (args.length > 0) {
    
    args.forEach((v, i) => console.log(`${v}`));
}
else {
    console.log('Args not found');
}
