let date = new Date(), lastDate
while(true) { // very heavy cpu wise but it's fort tests
// this will show date every second exactly (no milliseconds)
    lastDate = date;
    date = new Date();
    if(lastDate.getSeconds() !== date.getSeconds() && date.getMilliseconds() % 1000 === 0) {
        console.log(date);
    }
}
