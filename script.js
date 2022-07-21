var table = document.querySelector('.table-class');
console.log(table);
var tableObject = [
    {
        img: "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
        name: "Vimal",
        mobile: 8389289819,
        batch: 'FSD-10',
        git: [
            link = 'https://github.com/'
        ],
        referby: "Samy",
        location: 'Surandai',
        placement: 'Yes'
    },
    {
        img: 'https://media.gettyimages.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?s=612x612',
        name: "Mariselvam",
        mobile: 83892828319,
        batch: 'FSD-10',
        git: [
            link = "https://github.com/MARISELVAM1234/"
        ],
        referby: "Alphanse",
        location: 'Alangulam',
        placement: 'No'
    },
    {
        img: 'https://image.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg',
        name: "Leowilson",
        mobile: 7339212569,
        batch: 'FSD-10',
        git: [
            link = "https://github.com/Leowilson17"
        ],
        referby: "Samy",
        location: 'Surandai',
        placement: 'No'
    },
    {
        img: 'selvasir.jpeg',
        name: "Selva Mariyappan",
        mobile: 8270056940,
        batch: 'Fab',
        git: [
            link = 'https://github.com/selva06092020'
        ],
        referby: "Vel",
        location: 'Thippanampatti',
        placement: 'Yes'
    }
]
// check array length
var x = (tableObject).length;

// append dynamic tabledata in the table
var y;
var tableRow = document.createElement('tr');
var tData = document.createElement('td');
function tableData() {
    for (i = 0; i < tableObject.length; i++) {
        tableRow = document.createElement('tr');

        for (j = 0; j < Object.keys(tableObject[i]).length; j++) {
            if( j == 1){
                var imgEle = document.createElement('img');
                imgEle.setAttribute('src',tableObject[i].img)
                tData.appendChild(imgEle);
            }
           else if (j == 5) {
                var linkEle = document.createElement('a');
                linkEle.setAttribute('href', tableObject[i].git);
                linkEle.setAttribute('target', 'blank');
                linkEle.innerHTML = 'Link';
                tData.appendChild(linkEle);
            }
            var a = ['', tableObject[i].name, tableObject[i].mobile, tableObject[i].batch, "", tableObject[i].referby, tableObject[i].location, tableObject[i].placement];
            tData = document.createElement('td');
            tData.innerHTML = a[j];
            tableRow.appendChild(tData);
            table.appendChild(tableRow);
        }
    }
}
tableData();

