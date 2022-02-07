let uploadIcon = document.getElementById("upload-icon");
let table = document.getElementById("table");
let uploadArea = document.querySelector(".upload-area");
let imageList = document.querySelector(".img-list");
let uploadInput = document.querySelector(".upload-input");

console.log(uploadIcon);
console.log(table);
console.log(uploadArea);
console.log(imageList);
console.log(uploadInput);


function uploadFiles(files){
    for (const file of files) {
        let reader = new FileReader();
        reader.onload = (event) => {
            imageList.innerHTML += `<tr>
            <th><img src="${event.target.result}" style="height:30px"></th>
            <td>${file.name}</td>
            <td>${file.type}</td>
            <td>${parseInt(file.size/1024)} kb</td>
          </tr>`
        };
        reader.readAsDataURL(file);
    }
}

uploadIcon.addEventListener("click", function() {
    uploadInput.click();
})
uploadIcon.nextElementSibling.onchange = (event) => {
    event.preventDefault();
    uploadFiles(event.target.files)
}

uploadArea.ondragover = (event) => {
    event.preventDefault();
}

uploadArea.ondrop = (event) => {
    event.preventDefault();
    uploadFiles(event.dataTransfer.files)
}





