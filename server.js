document.addEventListener('DOMContentLoaded', () => {
    //API APOD 
    fetch('https://api.nasa.gov/planetary/apod?api_key=KkizKm7Lv7A9QdiYwNd4ta5EmfpTgmdCLfD2gVH8')
      .then(response => response.json())
      .then(data => {
        const apodContent = document.getElementById("apod-content")
        apodContent.innerHTML = `
          <h2 class="text-center font-sans text-2xl font-semibold">
            APOD (Astronomy Picture of the Day)
          </h2>
          <p class="text-center font-semibold mt-4 text-xl"> ${data.title}</p>
          <img
            src="${data.hdurl}"
            alt=""
            class="w-full mt-2 mb-4 rounded-lg mx-auto"
          />
          <p class="font-mono">${data.explanation}</p>
          <p>Date : ${data.date}</p>`
      });

  //API EPIC 
  fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=FQuQSfRmgW5wX1DDgbtRhi2m7rVE1ctensvn1P6P')
    .then(response => response.json())
    .then(data => {
      const epicContent = document.getElementById("epic-content")
      let epicInnerHtml = ''
      for (let i = 0; i < Math.min(data.length, 10); i++) {
        let formatedDate = data[i].date.split(" ")[0]
        formatedDate = formatedDate.split('-').join('/')
        console.log(formatedDate)
        epicInnerHtml += `
        <div>
          <img src="https://api.nasa.gov/EPIC/archive/natural/${formatedDate}/png/${data[i].image}.png?api_key=FQuQSfRmgW5wX1DDgbtRhi2m7rVE1ctensvn1P6P">
          <div><strong>Date : ${data[i].date}</strong></div>
        </div>
        `
      }
      epicContent.innerHTML = epicInnerHtml
    });

  })