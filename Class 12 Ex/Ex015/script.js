function verify() {
  let todayDate = new Date();
  let year = todayDate.getFullYear();
  let fyear = document.getElementById("txtyear");
  let res = document.querySelector("div#res");

  if (fyear.value.length === 0 || Number(fyear.value) > year) {
    window.alert(`[ERROR]: Please check the year and try again.`);
  } else {
    let fgender = document.getElementsByName("radgender");
    let age = year - Number(fyear.value);
    let gender = ``;
    let img = document.createElement("img");
    img.setAttribute(`id`, `photo`);
    if (fgender[0].checked) {
      gender = `Man`;
      if (age >= 0 && age < 10) {
        //Baby
        img.setAttribute(`src`, `menino_250_.png`);
      } else if (age < 21) {
        //Young
        img.setAttribute(`src`, `homem_jovem_250_.png`);
      } else if (age < 50) {
        //Young adult
        img.setAttribute(`src`, `homem_jovem_250_.png`);
      } else {
        //Elderly
        img.setAttribute(`src`, `homem_idoso_250_.png`);
      }
    } else if (fgender[1].checked) {
      gender = `Woman`;
      if (age >= 0 && age < 10) {
        //Baby
        img.setAttribute(`src`, `menina_250_.png`);
      } else if (age < 21) {
        //Young adult
        img.setAttribute(`src`, `mulher_jovem_250_.png`);
      } else if (age < 50) {
        //Adult
        img.setAttribute(`src`, `mulher_jovem_250_.png`);
      } else {
        //Elderly
        img.setAttribute(`src`, `mulher_idosa_250_.png`);
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `${gender} with ${age} years old.`;
    res.appendChild(img);
  }
}
