console.log('My Script Loaded!');

const getTime = () => {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    return document.getElementById('dateTime').innerHTML = hours + ":" + minutes + ":" + seconds;
  }



  setInterval(getTime, 1000);